
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MeetingHeader } from "./MeetingHeader";
import { Summary } from "./Summary";
import { Transcript } from "./Transcript";
import { MeetingData } from "../types/meeting";

interface MeetingSummaryProps {
  meeting: MeetingData;
}

const MeetingSummary = ({ meeting }: MeetingSummaryProps) => {
  const [activeTab, setActiveTab] = useState<string>("summary");

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-100">
      <MeetingHeader meeting={meeting} />
      
      <Tabs 
        defaultValue="summary" 
        value={activeTab}
        onValueChange={(value) => setActiveTab(value)}
        className="w-full"
      >
        <div className="border-b border-gray-200">
          <div className="px-6">
            <TabsList className="h-12 w-auto bg-transparent gap-8">
              <TabsTrigger 
                value="summary" 
                className={`text-base font-medium px-1 py-3 border-b-2 data-[state=active]:border-blue-600 data-[state=active]:text-blue-600 border-transparent text-gray-600 transition-all`}
              >
                Summary
              </TabsTrigger>
              <TabsTrigger 
                value="transcript" 
                className={`text-base font-medium px-1 py-3 border-b-2 data-[state=active]:border-blue-600 data-[state=active]:text-blue-600 border-transparent text-gray-600 transition-all`}
              >
                Transcript
              </TabsTrigger>
            </TabsList>
          </div>
        </div>

        <div className="p-6">
          <TabsContent value="summary" className="mt-0 focus:outline-none">
            <Summary meeting={meeting} />
          </TabsContent>
          
          <TabsContent value="transcript" className="mt-0 focus:outline-none">
            <Transcript meeting={meeting} />
          </TabsContent>
        </div>
      </Tabs>
    </div>
  );
};

export default MeetingSummary;
