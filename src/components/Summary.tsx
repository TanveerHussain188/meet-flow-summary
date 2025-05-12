
import { useState } from "react";
import { DragDropContext, Droppable, Draggable, DropResult } from "react-beautiful-dnd";
import { MeetingData } from "../types/meeting";
import { Checkbox } from "@/components/ui/checkbox";
import { Trash2 } from "lucide-react";

interface SummaryProps {
  meeting: MeetingData;
}

export const Summary = ({ meeting }: SummaryProps) => {
  const [actionItems, setActionItems] = useState([...meeting.actionItems]);

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
          <button className="text-gray-500 hover:text-gray-700">
            <span className="sr-only">More options</span>
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
            </svg>
          </button>
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
                        <div className="flex items-center gap-3">
                          <Checkbox id={`action-${item.id}`} />
                          <label 
                            htmlFor={`action-${item.id}`} 
                            className="text-gray-700 cursor-pointer"
                          >
                            {item.text}
                          </label>
                        </div>
                        <button className="text-gray-300 hover:text-red-500 transition-colors opacity-0 group-hover:opacity-100">
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

        <button className="mt-3 flex items-center text-sm text-blue-600 font-medium">
          <svg className="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          </svg>
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
