import { MeetingData } from "../types/meeting";

export const meetingData: MeetingData = {
  id: "meeting-002",
  title: "Sales Call: Improving Onboarding",
  creator: {
    name: "Salesperson",
    initials: "S",
  },
  date: "Today at 4:00 pm",
  duration: "15 min",
  screenshots: 4,
  sharedWith: "Sales Team",
  overview: 
    "The Salesperson and Client discuss ways to improve customer onboarding using real-time cues and live engagement tracking. The Client shares their current challenges with onboarding completion rates and customer engagement drop-off. The Salesperson presents a platform that offers real-time insights and compliance-ready features to address these needs.",
  actionItems: [
    {
      id: "action-1",
      text: "Send pricing details, demo invite, and security documentation",
      completed: false,
    },
    {
      id: "action-2",
      text: "Arrange a live demo using one of the client's actual calls",
      completed: false,
    },
    {
      id: "action-3",
      text: "Loop in the VP of Revenue and CISO for pilot approval",
      completed: false,
    },
    {
      id: "action-4",
      text: "Model both usage-based and flat-seat pricing for comparison",
      completed: false,
    }
  ],
  outlineDescription: "Exploring real-time sales intelligence tools to improve onboarding effectiveness.",
  outlineItems: [
    "Client identifies onboarding drop-off as a major issue after first email.",
    "Salesperson introduces a real-time cueing system that provides sales reps with in-call prompts.",
    "HIPAA compliance, multi-channel support, and flexible pricing discussed as key client concerns.",
    "Live demo and pilot approval process outlined with follow-up steps."
  ],
  keywords: [
    "onboarding", "real-time", "cues", "sales call", "engagement", "HubSpot",
    "demo", "HIPAA", "compliance", "video", "Zoom", "phone", "North America",
    "EMEA", "platform", "pricing", "personalized outreach", "CSAT", "tracking"
  ],
  speakerStats: {
    "Salesperson": "(55%)",
    "Client": "(45%)"
  },
  transcript: [
    { speaker: "Salesperson", timestamp: "0:00", text: "Hi there, thanks for taking the time today." },
    { speaker: "Client", timestamp: "0:02", text: "Doing well, thanks for asking." },
    { speaker: "Salesperson", timestamp: "0:05", text: "Before we dive in, how are things going on your side?" },
    { speaker: "Client", timestamp: "0:08", text: "Yes, that's right. Our onboarding completion rate is falling." },
    { speaker: "Salesperson", timestamp: "0:12", text: "Great. From our last email, I understand you're looking to improve onboarding." },
    { speaker: "Client", timestamp: "0:15", text: "The biggest issue is customers stop responding after the first email." },
    { speaker: "Salesperson", timestamp: "0:18", text: "Could you share more about the main bottlenecks you're hitting?" },
    { speaker: "Client", timestamp: "0:21", text: "We currently use HubSpot and some custom scripts." },
    { speaker: "Salesperson", timestamp: "0:24", text: "That's helpful. What tools are you using right now to track engagement?" },
    { speaker: "Client", timestamp: "0:27", text: "Usually after they schedule a demo but before the actual call." },
    { speaker: "Salesperson", timestamp: "0:30", text: "Got it. And when customers drop off, do you know at which step they usually disengage?" },
    { speaker: "Client", timestamp: "0:33", text: "Sounds interesting. Real‑time cues could help." },
    { speaker: "Salesperson", timestamp: "0:36", text: "Makes sense. Let me explain briefly how our platform works." },
    { speaker: "Client", timestamp: "0:39", text: "That lines up with our goal to personalize outreach better." },
    { speaker: "Salesperson", timestamp: "0:42", text: "We capture live conversations and provide reps with on‑screen cues in real time." },
    { speaker: "Client", timestamp: "0:45", text: "We average about 400 calls, plus a few hundred chats." },
    { speaker: "Salesperson", timestamp: "0:48", text: "For example, if the buyer sounds hesitant, the system nudges the rep to ask a clarifying question." },
    { speaker: "Client", timestamp: "0:51", text: "Mostly video over Zoom, some phone." },
    { speaker: "Salesperson", timestamp: "0:54", text: "How does that align with what you're hoping to achieve?" },
    { speaker: "Client", timestamp: "0:57", text: "Flexible is good, but I need to compare costs." },
    { speaker: "Salesperson", timestamp: "1:00", text: "Understood. May I ask roughly how many sales calls your team runs per month?" },
    { speaker: "Client", timestamp: "1:03", text: "We operate in healthcare, so HIPAA compliance matters." },
    { speaker: "Salesperson", timestamp: "1:06", text: "Thanks. That volume is well within what we support." },
    { speaker: "Client", timestamp: "1:09", text: "Yes, a demo would be useful." },
    { speaker: "Salesperson", timestamp: "1:12", text: "Do your reps mainly sell over video, phone, or both?" },
    { speaker: "Client", timestamp: "1:15", text: "My VP of Revenue and our CISO will want to see this." },
    { speaker: "Salesperson", timestamp: "1:18", text: "Great. The algorithm works across channels." },
    { speaker: "Client", timestamp: "1:21", text: "No, you've covered most things." },
    { speaker: "Salesperson", timestamp: "1:24", text: "Let me address pricing quickly." },
    { speaker: "Client", timestamp: "1:27", text: "We sell in North America and EMEA." },
    { speaker: "Salesperson", timestamp: "1:30", text: "We operate on a usage basis, so you pay only for minutes processed." },
    { speaker: "Client", timestamp: "1:33", text: "Conversion to paid within 30 days, and CSAT." },
    { speaker: "Salesperson", timestamp: "1:36", text: "Does a flexible model appeal to you more than a flat seat license?" },
    { speaker: "Client", timestamp: "1:39", text: "That sounds useful." },
    { speaker: "Salesperson", timestamp: "1:42", text: "Sure. We can model both for comparison." },
    { speaker: "Client", timestamp: "1:45", text: "Looking forward to next steps." },
    { speaker: "Salesperson", timestamp: "1:48", text: "Are there any specific compliance requirements we should be aware of?" },
    { speaker: "Client", timestamp: "1:51", text: "Sure, that timeline works." },
    { speaker: "Salesperson", timestamp: "1:54", text: "Perfect. Our data stays in region and is fully encrypted." },
    { speaker: "Client", timestamp: "1:57", text: "Thanks, talk soon." },
  ]
};
