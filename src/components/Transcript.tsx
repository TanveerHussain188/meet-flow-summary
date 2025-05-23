import { MeetingData } from "../types/meeting";
import { Avatar } from "@/components/ui/avatar";
import { AvatarFallback } from "@/components/ui/avatar";

interface TranscriptProps {
  meeting: MeetingData;
}

export const Transcript = ({ meeting }: TranscriptProps) => {
  // Generate random colors for speakers and store them in a Map
  const speakerColors = new Map<string, string>();
  const getRandomColor = () => {
    const r = Math.floor(Math.random() * 156); // Red: 100-255
    const g = Math.floor(Math.random() * 156); // Green: 100-255
    const b = Math.floor(Math.random() * 156); // Blue: 100-255
    const alpha = 0.8; // Slight transparency for better visibility
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  };

  const getSpeakerColor = (speaker: string) => {
    if (!speakerColors.has(speaker)) {
      speakerColors.set(speaker, getRandomColor());
    }
    return speakerColors.get(speaker)!;
  };

  return (
    <div>
      {/* Keywords section */}
      <div className="mb-6">
        <h3 className="text-base font-semibold mb-2 text-gray-800">Keywords</h3>
        <p className="text-gray-600 text-sm">
          {meeting.keywords.join(", ")}
        </p>
      </div>

      {/* Speakers section */}
      <div className="mb-8">
        <h3 className="text-base font-semibold mb-3 text-gray-800">Speakers</h3>
        <div className="flex flex-wrap gap-6">
          {Object.entries(meeting.speakerStats).map(([name, percentage]) => {
            const speakerColor = getSpeakerColor(name);

            return (
              <div key={name} className="flex flex-col items-center">
                <Avatar className="h-14 w-14 mb-2">
                  <AvatarFallback className={`text-lg text-white font-medium `} style={{ backgroundColor: speakerColor }}>
                    {name.charAt(0)}
                  </AvatarFallback>
                </Avatar>
                <span className="font-medium text-gray-800 text-center">{name}</span>
                <span className="text-sm text-gray-500">{percentage}</span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Transcript exchanges */}
      <div className="space-y-6 mt-8">
        {meeting.transcript.map((exchange, index) => {
          const speakerColor = getSpeakerColor(exchange.speaker);

          return (
            <div key={index} className="flex gap-4">
              <div className="flex-shrink-0 pt-1">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white ` } style={{ backgroundColor: speakerColor }} >
                  <span className="font-medium">{exchange.speaker.charAt(0)}</span>
                </div>
              </div>

              <div className="flex-grow">
                <div className="flex items-center gap-3 mb-1">
                  <span className="font-medium text-gray-900">{exchange.speaker}</span>
                  <span className="text-gray-500 text-sm">{exchange.timestamp}</span>
                </div>
                <p className="text-gray-700">
                  {exchange.text}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
