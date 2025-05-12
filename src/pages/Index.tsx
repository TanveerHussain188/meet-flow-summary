import { useState } from "react";
import MeetingSummary from "../components/MeetingSummary";
import { meetingData } from "../data/meetingData";
import { Chat } from "@/components/Chat";

const Index = () => {
  return (
    <div className="min-h-screen h-screen bg-gray-50 flex overflow-hidden">
      {/* Main content area - independently scrollable */}
      <div className="flex-1 overflow-y-auto">
        <div className="container">
          <MeetingSummary meeting={meetingData} />
        </div>
      </div>
      
      {/* Chat panel on the right - independently scrollable */}
      <div className="w-96 border-l flex-shrink-0 h-screen">
        <Chat />
      </div>
    </div>
  );
};

export default Index;
