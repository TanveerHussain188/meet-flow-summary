
import { MeetingData } from "../types/meeting";

export const meetingData: MeetingData = {
  id: "meeting-001",
  title: "Learn how to use Otter",
  creator: {
    name: "Tanveer Hussain",
    initials: "T",
  },
  date: "Today at 6:59 pm",
  duration: "3 min",
  screenshots: 6,
  sharedWith: "General",
  overview: 
    "Charlie and Lisa discuss Otter AI, a meeting note-taking tool that transcribes and summarizes meetings in real-time. Lisa explains how Otter works by joining meetings on her calendar and providing live notes, automatic screenshots, and action items. Charlie is interested in using Otter for his own meetings and asks questions about how to set it up and share notes with his team.",
  actionItems: [
    {
      id: "action-1",
      text: "Assign this action item to yourself",
      completed: false,
    },
    {
      id: "action-2",
      text: "Check off this action item",
      completed: false,
    },
    {
      id: "action-3",
      text: "Try Otter Chat",
      completed: false,
    },
    {
      id: "action-4",
      text: "Copy the summary",
      completed: false,
    },
    {
      id: "action-5",
      text: "Try tagging a speaker",
      completed: false,
    },
    {
      id: "action-6",
      text: "Connect your calendar",
      completed: false,
    },
    {
      id: "action-7",
      text: "Choose which meetings you want Otter to join and take notes",
      completed: false,
    },
    {
      id: "action-8",
      text: "Record your first meeting with Otter!",
      completed: false,
    },
  ],
  outlineDescription: "Using AI-powered Otter for meeting notes and organization.",
  outlineItems: [
    "Lisa uses Otter AI Chat to summarize and organize meetings, saving time and improving productivity.",
    "Charlie learns how to use OtterPilot to take notes during meetings, share them with teammates, and organize recurring meetings in a single channel.",
    "Otter can join both online and in-person meetings, taking notes automatically and providing live transcription."
  ],
  keywords: [
    "otter", "meeting", "notes", "share", "autopilot", "recurring", "channel", 
    "summary", "conversation", "action items", "left navigation bar", "calendar", 
    "call", "transcript", "people", "join", "audio recording", "button", "ai"
  ],
  speakerStats: {
    "Lisa": "(79%)",
    "Charlie": "(21%)"
  },
  transcript: [
    {
      speaker: "Charlie",
      timestamp: "0:00",
      text: "Hey Lisa, I got your email with a meeting summary from Otter and I was curious about how it works. Have you been using it a lot for your meetings?"
    },
    {
      speaker: "Lisa",
      timestamp: "0:08",
      text: "Yeah, I started using Otter a few months ago. And it saved me a lot of time from taking manual notes. It also helps me find answers from previous meetings and even write follow up emails."
    },
    {
      speaker: "Charlie",
      timestamp: "0:21",
      text: "Wow, really? Can you show me how it works?"
    },
    {
      speaker: "Lisa",
      timestamp: "0:24",
      text: "Sure. So this is Otter AI Chat. I can ask questions across all the conversations I've recorded with Otter, including meetings and voice memos. I can also use Otter AI Chat within a specific meeting to ask questions about just that conversation."
    },
    {
      speaker: "Lisa",
      timestamp: "0:42",
      text: "The best part is OtterPilot, which can join your meetings automatically from your calendar. It takes notes during the meeting and even creates action items and summaries when the meeting ends."
    },
    {
      speaker: "Charlie",
      timestamp: "1:05",
      text: "That sounds really helpful. Does it work with all video conferencing platforms?"
    },
    {
      speaker: "Lisa",
      timestamp: "1:10",
      text: "Yes, it works with Zoom, Microsoft Teams, Google Meet, and a few others. You just connect your calendar and select which meetings you want Otter to join."
    },
    {
      speaker: "Charlie",
      timestamp: "1:24",
      text: "How do I share the notes with my team after the meeting?"
    },
    {
      speaker: "Lisa",
      timestamp: "1:28",
      text: "You can share it directly from Otter by email, or you can create a shared folder for your team so everyone has access to the meeting notes. You can even highlight important parts and add comments."
    }
  ]
};
