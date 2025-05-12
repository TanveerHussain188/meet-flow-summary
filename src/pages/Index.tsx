
import { useState } from "react";
import MeetingSummary from "../components/MeetingSummary";
import { meetingData } from "../data/meetingData";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container max-w-4xl mx-auto px-4">
        <MeetingSummary meeting={meetingData} />
      </div>
    </div>
  );
};

export default Index;
