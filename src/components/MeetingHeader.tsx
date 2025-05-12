
import { Calendar, Clock, MoreHorizontal } from "lucide-react";
import { MeetingData } from "../types/meeting";
import { Avatar } from "@/components/ui/avatar";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";

interface MeetingHeaderProps {
  meeting: MeetingData;
}

export const MeetingHeader = ({ meeting }: MeetingHeaderProps) => {
  return (
    <div className="p-6 border-b border-gray-200">
      <h1 className="text-2xl font-bold text-gray-900 mb-4">{meeting.title}</h1>
      
      <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-gray-600">
        <div className="flex items-center gap-2">
          <Avatar className="h-6 w-6 bg-blue-600 rounded-full flex items-center justify-center ">
            <span className="text-xs text-white font-medium">{meeting.creator.initials}</span>
          </Avatar>
          <span>{meeting.creator.name}</span>
        </div>
        
        <div className="flex items-center gap-2">
          <Calendar className="h-4 w-4" />
          <span>{meeting.date}</span>
        </div>
        
        <div className="flex items-center gap-2">
          <Clock className="h-4 w-4" />
          <span>{meeting.duration}</span>
        </div>
        
        <DropdownMenu>
          <DropdownMenuTrigger className="ml-auto flex items-center gap-1 text-sm font-medium p-2 hover:bg-gray-100 rounded-md">
            <MoreHorizontal className="h-4 w-4" />
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Meeting Options</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              Download Summary
            </DropdownMenuItem>
            <DropdownMenuItem>
              Share Meeting
            </DropdownMenuItem>
            <DropdownMenuItem>
              Print Summary
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      
      <div className="flex items-center mt-4 gap-2 text-sm text-gray-600">
        <span>Shared with:</span>
        <span className="font-medium">{meeting.sharedWith}</span>
      </div>
    </div>
  );
};
