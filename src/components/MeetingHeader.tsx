
import { Calendar, Clock, Copy } from "lucide-react";
import { MeetingData } from "../types/meeting";
import { Button } from "@/components/ui/button";
import { Avatar } from "@/components/ui/avatar";

interface MeetingHeaderProps {
  meeting: MeetingData;
}

export const MeetingHeader = ({ meeting }: MeetingHeaderProps) => {
  return (
    <div className="p-6 border-b border-gray-200">
      <h1 className="text-2xl font-bold text-gray-900 mb-4">{meeting.title}</h1>
      
      <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-gray-600">
        <div className="flex items-center gap-2">
          <Avatar className="h-6 w-6 bg-blue-600">
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
        
        <Button 
          variant="outline" 
          size="sm" 
          className="ml-auto flex items-center gap-1 text-sm font-medium"
        >
          <Copy className="h-4 w-4" />
          Copy Summary
        </Button>
      </div>
      
      <div className="flex items-center mt-4 gap-2 text-sm text-gray-600">
        <span>Shared with:</span>
        <span className="font-medium">{meeting.sharedWith}</span>
      </div>
    </div>
  );
};
