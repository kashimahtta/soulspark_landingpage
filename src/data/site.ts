export const WHATSAPP_NUMBER = "919999884938";
export const EMAIL = "satyadeep.mahtta@gmail.com";
export const INSTAGRAM_HANDLE = "soul_spark.16";
export const whatsappLink = (message?: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}${message ? `?text=${encodeURIComponent(message)}` : ""}`;
export const emailLink = `mailto:${EMAIL}`;
export const instagramLink = `https://instagram.com/${INSTAGRAM_HANDLE}`;

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Handwriting Program", href: "#program" },
  { label: "Why Soul Spark", href: "#why" },
  { label: "Contact", href: "#contact" },
];
export const services = [
  {
    icon: "PenLine",
    title: "Handwriting Improvement",
    description:
      "Structured 1-to-1 guidance to build neater, more confident handwriting.",
  },
  {
    icon: "Compass",
    title: "Life Coaching",
    description:
      "Practical guidance to help you find direction and move forward with clarity.",
  },
  {
    icon: "Sparkles",
    title: "Spiritual Guidance",
    description:
      "Grounded, compassionate guidance for inner peace and purpose.",
  },
  {
    icon: "Users",
    title: "Parenting Guidance",
    description:
      "Support for parents navigating their child's growth and learning.",
  },
];
export const programBenefits = [
  "Neat and organised handwriting",
  "Better letter formation",
  "Cursive writing practice",
  "Improved writing confidence",
  "Better presentation",
  "Consistent writing habits",
];
export const whySoulSpark = [
  "Personal Attention",
  "15+ Years of Handwriting Teaching Experience",
  "Practical Guidance",
  "Compassionate Approach",
  "Focus on Growth",
  "Online & Offline Support",
];
export const howItWorks = [
  {
    n: "01",
    title: "Connect",
    body: "Reach out and share what you're looking for.",
  },
  {
    n: "02",
    title: "Understand",
    body: "A conversation to understand your goals and needs.",
  },
  {
    n: "03",
    title: "Guide",
    body: "Structured, personal guidance built around you.",
  },
  {
    n: "04",
    title: "Grow",
    body: "Steady progress, practice and support along the way.",
  },
];
export const values = [
  "Compassion",
  "Love",
  "Spirituality",
  "Respect",
  "Peace",
  "Learning",
  "Consistency",
  "Service",
];
