import { Incident } from '../types';

export const initialIncidents: Incident[] = [
  {
    id: 1,
    title: "Biased Recommendation Algorithm",
    description: "Algorithm consistently favored certain demographics in content recommendations, leading to filter bubble effects and potential discrimination. The issue was identified during routine algorithmic auditing and has since been addressed with a more balanced recommendation system.",
    severity: "Medium",
    reported_at: "2025-03-15T10:00:00Z"
  },
  {
    id: 2,
    title: "LLM Hallucination in Critical Info",
    description: "Large language model provided incorrect safety procedure information when queried about emergency protocols. This could have led to physical harm if the information was followed in a real emergency. The model has been fine-tuned with additional safety data and now includes explicit uncertainty markers for safety-critical information.",
    severity: "High",
    reported_at: "2025-04-01T14:30:00Z"
  },
  {
    id: 3,
    title: "Minor Data Leak via Chatbot",
    description: "Chatbot inadvertently exposed non-sensitive user metadata during conversations. While no personally identifiable information was compromised, the issue revealed a potential vulnerability in the data handling pipeline. The system has been patched and all logs containing the leaked metadata have been purged.",
    severity: "Low",
    reported_at: "2025-03-20T09:15:00Z"
  },
  {
    id: 4,
    title: "AI Generated Content Misattribution",
    description: "An AI system generated content that was incorrectly attributed to a human author in public-facing documents. This raised concerns about transparency and attribution ethics. New policies have been implemented requiring clear labeling of AI-generated content across all platforms.",
    severity: "Medium",
    reported_at: "2025-02-28T16:45:00Z"
  },
  {
    id: 5,
    title: "Facial Recognition False Positive",
    description: "Security system using facial recognition incorrectly identified an individual as a person of interest, triggering security protocols. This incident highlighted the ongoing challenges with facial recognition accuracy across diverse populations. System thresholds have been adjusted and human verification steps added before any action is taken.",
    severity: "High",
    reported_at: "2025-03-05T08:20:00Z"
  }
];