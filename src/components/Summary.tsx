import { useState } from "react";
import { DragDropContext, Droppable, Draggable, DropResult } from "react-beautiful-dnd";
import { MeetingData } from "../types/meeting";
import { Checkbox } from "@/components/ui/checkbox";
import { Trash2, Plus, MoreHorizontal, Edit, Check } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import { Input } from "@/components/ui/input";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";

interface SummaryProps {
  meeting: MeetingData;
}

export const Summary = ({ meeting }: SummaryProps) => {
  const [actionItems, setActionItems] = useState([...meeting.actionItems]);
  const [editingItemId, setEditingItemId] = useState<string | null>(null);
  const [editText, setEditText] = useState("");

  const onDragEnd = (result: DropResult) => {
    const { destination, source } = result;

    // Dropped outside the list
    if (!destination) {
      return;
    }

    // No change in position
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    // Reorder the list
    const newItems = Array.from(actionItems);
    const [removed] = newItems.splice(source.index, 1);
    newItems.splice(destination.index, 0, removed);

    setActionItems(newItems);
    toast({
      title: "Action item reordered",
      description: "The action item has been successfully reordered.",
    });
  };

  const handleDeleteActionItem = (id: string) => {
    setActionItems(actionItems.filter(item => item.id !== id));
    toast({
      title: "Action item removed",
      description: "The action item has been successfully removed.",
    });
  };

  const handleAddActionItem = () => {
    const newItem = {
      id: `action-${Date.now()}`,
      text: "New action item",
      completed: false // Added the required 'completed' property
    };
    setActionItems([...actionItems, newItem]);
    toast({
      title: "Action item added",
      description: "A new action item has been added.",
    });
  };

  const startEditing = (id: string, text: string) => {
    setEditingItemId(id);
    setEditText(text);
  };

  const saveEdit = (id: string) => {
    if (editText.trim() === "") return;
    
    setActionItems(actionItems.map(item => 
      item.id === id ? { ...item, text: editText } : item
    ));
    
    setEditingItemId(null);
    toast({
      title: "Action item updated",
      description: "The action item has been successfully updated.",
    });
  };

  const handleKeyDown = (e: React.KeyboardEvent, id: string) => {
    if (e.key === 'Enter') {
      saveEdit(id);
    } else if (e.key === 'Escape') {
      setEditingItemId(null);
    }
  };

  return (
    <div className="space-y-8">
      {/* Overview Section */}
      <section>
        <h2 className="text-xl font-semibold text-gray-800 mb-3">Overview</h2>
        <p className="text-gray-700 leading-relaxed">{meeting.overview}</p>
      </section>

      {/* Action Items Section */}
      <section>
        <div className="flex justify-between items-center mb-3">
          <h2 className="text-xl font-semibold text-gray-800">Action Items</h2>
          <DropdownMenu>
            <DropdownMenuTrigger className="text-gray-500 hover:text-gray-700 p-1">
              <MoreHorizontal className="w-5 h-5" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={handleAddActionItem}>
                Add new item
              </DropdownMenuItem>
              <DropdownMenuItem>
                Mark all as complete
              </DropdownMenuItem>
              <DropdownMenuItem>
                Sort by priority
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable droppableId="action-items">
            {(provided) => (
              <div 
                ref={provided.innerRef} 
                {...provided.droppableProps} 
                className="space-y-2"
              >
                {actionItems.map((item, index) => (
                  <Draggable key={item.id} draggableId={item.id} index={index}>
                    {(provided) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        className="flex items-center justify-between group bg-white border border-gray-200 p-3 rounded-md hover:border-gray-300 transition-colors"
                      >
                        <div className="flex items-center gap-3 flex-1">
                          <Checkbox id={`action-${item.id}`} />
                          {editingItemId === item.id ? (
                            <div className="flex-1 flex gap-2">
                              <Input 
                                value={editText}
                                onChange={(e) => setEditText(e.target.value)}
                                onKeyDown={(e) => handleKeyDown(e, item.id)}
                                autoFocus
                                className="flex-1"
                              />
                              <button 
                                onClick={() => saveEdit(item.id)}
                                className="text-green-600 hover:text-green-700 transition-colors"
                              >
                                <Check className="h-5 w-5" />
                              </button>
                            </div>
                          ) : (
                            <div className="flex items-center gap-2 flex-1">
                              <label 
                                htmlFor={`action-${item.id}`} 
                                className="text-gray-700 cursor-pointer flex-1"
                              >
                                {item.text}
                              </label>
                              <button 
                                onClick={() => startEditing(item.id, item.text)}
                                className="text-gray-400 hover:text-blue-500 transition-colors opacity-0 group-hover:opacity-100"
                              >
                                <Edit className="h-4 w-4" />
                              </button>
                            </div>
                          )}
                        </div>
                        <button 
                          onClick={() => handleDeleteActionItem(item.id)}
                          className="text-gray-300 hover:text-red-500 transition-colors opacity-0 group-hover:opacity-100 ml-2"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>

        <button 
          onClick={handleAddActionItem}
          className="mt-3 flex items-center text-sm text-blue-600 font-medium"
        >
          <Plus className="w-4 h-4 mr-1" />
          Add action item
        </button>
      </section>

      {/* Outline Section */}
      <section>
        <h2 className="text-xl font-semibold text-gray-800 mb-3">Outline</h2>
        <p className="text-gray-700 mb-3">{meeting.outlineDescription}</p>
        <ul className="list-disc pl-6 space-y-3">
          {meeting.outlineItems.map((item, index) => (
            <li key={index} className="text-gray-700">
              {item}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};
