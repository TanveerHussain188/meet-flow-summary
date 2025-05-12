
import { MeetingData } from "../types/meeting";

interface TranscriptProps {
  meeting: MeetingData;
}

export const Transcript = ({ meeting }: TranscriptProps) => {
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
      <div className="mb-6">
        <h3 className="text-base font-semibold mb-2 text-gray-800">Speakers</h3>
        <div className="text-sm">
          {Object.entries(meeting.speakerStats).map(([name, percentage]) => (
            <span key={name} className="mr-3 text-gray-600">
              {name} ({percentage})
            </span>
          ))}
        </div>
      </div>

      {/* Transcript exchanges */}
      <div className="space-y-6 mt-8">
        {meeting.transcript.map((exchange, index) => {
          const speakerColor = exchange.speaker === "Charlie" ? "bg-blue-600" : "bg-amber-500";
          
          return (
            <div key={index} className="flex gap-4">
              <div className="flex-shrink-0 pt-1">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white ${speakerColor}`}>
                  {exchange.speaker.charAt(0)}
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

      {/* Audio player controls (simplified) */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-3 flex items-center justify-between">
        <div className="flex items-center">
          <button className="rounded-full w-10 h-10 flex items-center justify-center bg-gray-100 mr-2">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
          </button>
          <button className="rounded-full w-10 h-10 flex items-center justify-center bg-gray-800 text-white mr-2">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </button>
          <button className="rounded-full w-10 h-10 flex items-center justify-center bg-gray-100">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
          </button>
          <span className="ml-4 text-sm text-gray-500">1x</span>
        </div>

        <div className="flex items-center">
          <span className="text-sm text-gray-500">0:00</span>
          <div className="mx-4 w-48 h-1 bg-gray-200 rounded-full"></div>
          <span className="text-sm text-gray-500">3:24</span>
        </div>

        <div className="flex items-center">
          <button className="rounded-full w-10 h-10 flex items-center justify-center text-gray-600 hover:bg-gray-100">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15.536a5 5 0 01.001-7.072m9.9 2.829a9 9 0 010-12.728" />
            </svg>
          </button>
          <button className="rounded-full w-10 h-10 flex items-center justify-center text-gray-600 hover:bg-gray-100">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
            </svg>
          </button>
          <button className="rounded-full w-10 h-10 flex items-center justify-center text-gray-600 hover:bg-gray-100">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};
