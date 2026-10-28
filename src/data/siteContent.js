export const BRAND = "Ringstack";
export const CONTACT_EMAIL = "hello@ringstackltd.com";
export const PHONE = { value: "07737139740", verified: true };
export const PHONE_TEL = "+447737139740";
export const ADDRESS = {
  value: [
    "Office 7641, 58 Peregrine Road",
    "Hainault, Ilford, Essex",
    "IG6 3SZ",
  ],
  verified: true,
};
export const LOCATION = {
  value: "London, UK",
  detail: "Working across the UK and beyond",
  verified: true,
};
export const OPENING_HOURS = { value: "", verified: false };
export const SOCIAL_LINKS = [];

export const industries = [
  {
    slug: "insurance",
    name: "Insurance",
    icon: "◈",
    summary:
      "Connect insurance enquiries with teams prepared to discuss suitable cover.",
    sections: [
      {
        title: "Understand the enquiry",
        text: "Campaigns can be shaped around the type of cover, customer circumstances and service area an advertiser is equipped to support.",
      },
      {
        title: "Set clear qualification",
        text: "Agree the details that make a call or lead relevant, including exclusions, availability and the right next step for the customer.",
      },
      {
        title: "Review quality together",
        text: "Use campaign feedback and agreed measures to refine targeting and routing over time.",
      },
    ],
  },
  {
    slug: "financial-services",
    name: "Financial services",
    icon: "⌁",
    summary:
      "Build campaigns around clear eligibility, service and customer criteria.",
    sections: [
      {
        title: "Define service fit",
        text: "Describe the services available, intended audience and any eligibility considerations that should guide campaign enquiries.",
      },
      {
        title: "Agree compliant handling",
        text: "Confirm how information is presented, collected and passed between campaign partners, with responsibilities documented.",
      },
      {
        title: "Measure meaningful outcomes",
        text: "Review enquiries against the criteria agreed at setup and share feedback that can improve campaign relevance.",
      },
    ],
  },
  {
    slug: "home-services",
    name: "Home services",
    icon: "⌂",
    summary: "Route local service enquiries to businesses that can respond.",
    sections: [
      {
        title: "Match location and capacity",
        text: "Specify the areas served, service types offered and hours when a team can accept and respond to a call.",
      },
      {
        title: "Set expectations for the caller",
        text: "Make the offer and the next step clear so people can understand who will contact them and why.",
      },
      {
        title: "Keep routing current",
        text: "Review coverage and availability with partners as service capacity or campaign needs change.",
      },
    ],
  },
  {
    slug: "legal",
    name: "Legal",
    icon: "§",
    summary:
      "Help people find a relevant conversation with a legal service provider.",
    sections: [
      {
        title: "Clarify the area of service",
        text: "Set out which matters and locations a legal team can consider, along with any enquiries that fall outside scope.",
      },
      {
        title: "Respect the caller’s context",
        text: "Agree how initial information is gathered and transferred, with clear expectations about what a call can provide.",
      },
      {
        title: "Review relevance",
        text: "Use feedback on campaign enquiries to improve fit while keeping agreed requirements transparent.",
      },
    ],
  },
  {
    slug: "travel",
    name: "Travel",
    icon: "↗",
    summary:
      "Connect travel interest with teams ready to help plan the next step.",
    sections: [
      {
        title: "Set the travel brief",
        text: "Describe the destination, trip type, timing and service requirements that matter to your travel team.",
      },
      {
        title: "Plan for enquiry handling",
        text: "Align operating hours, contact preferences and follow-up steps with the way the team serves customers.",
      },
      {
        title: "Learn from demand",
        text: "Review enquiry themes and outcomes with campaign partners to keep the activity relevant.",
      },
    ],
  },
  {
    slug: "real-estate",
    name: "Real estate",
    icon: "⌂",
    summary:
      "Support property enquiries with clear campaign and location requirements.",
    sections: [
      {
        title: "Define property and area fit",
        text: "Agree the property types, locations and customer needs a campaign should cover.",
      },
      {
        title: "Set useful enquiry details",
        text: "Decide what information helps the property team respond and how it should be collected and shared.",
      },
      {
        title: "Keep local details accurate",
        text: "Review active areas, availability and campaign terms as local requirements change.",
      },
    ],
  },
];

export const navItems = [
  { label: "About", to: "/about" },
  { label: "Technology", to: "/technology" },

  { label: "Advertisers", to: "/advertisers" },
  { label: "Publishers", to: "/publishers" },
  { label: "Resources", to: "/resources" },
];

export const stats = [
  { value: "", label: "Active campaigns", verified: false },
  { value: "", label: "Publisher earnings", verified: false },
  { value: "", label: "Calls per day", verified: false },
];

export const audiences = [
  {
    icon: "↗",
    title: "Publishers",
    description:
      "Explore campaigns that fit your traffic, audience and operating model.",
    benefits: [
      "Clear campaign requirements",
      "Agreed quality and payment terms",
      "A direct point of contact",
    ],
    cta: "Apply to become a publisher",
    to: "/publishers",
  },
  {
    icon: "▦",
    title: "Enterprise advertisers",
    description:
      "Plan inbound call and lead activity around your team’s capacity and customer criteria.",
    benefits: [
      "Campaign criteria set together",
      "Call and lead tracking options",
      "Reporting for ongoing reviews",
    ],
    cta: "Talk to our sales team",
    to: "/advertisers",
  },
  {
    icon: "◎",
    title: "Individual agents",
    description:
      "Find out whether Ringstack has suitable campaign opportunities for your market.",
    benefits: [
      "A straightforward conversation",
      "Requirements explained clearly",
      "Campaign fit discussed first",
    ],
    cta: "Explore opportunities",
    to: "/contact",
  },
];

export const features = [
  {
    title: "Agreed payment terms",
    description:
      "Set payment terms, validation criteria and review steps before a campaign begins.",
    icon: "£",
  },
  {
    title: "High-intent inbound enquiries",
    description:
      "Shape targeting and qualification around the people your team is equipped to help.",
    icon: "↗",
  },
  {
    title: "Direct campaign support",
    description:
      "Keep communication practical with a clear contact for campaign questions and changes.",
    icon: "◎",
  },
  {
    title: "Actionable reporting",
    description:
      "Review campaign activity and outcomes to make informed adjustments over time.",
    icon: "▥",
  },
];

export const integrations = [
  "Meta Ads",
  "Google Ads",
  "TikTok",
  "Everflow",
  "Clickflare",
  "RedTrack",
];

export const faqs = [
  {
    question: "What is pay-per-call?",
    answer:
      "Pay-per-call connects a person seeking a service with a business by phone. Campaign partners agree what makes a call eligible and how it is measured.",
  },
  {
    question: "Can Ringstack work with our existing tracking tools?",
    answer:
      "We can discuss your current setup and agree which tracking and reporting connections are suitable for a campaign.",
  },
  {
    question: "How do you approach compliance?",
    answer:
      "Campaign planning should account for UK GDPR and PECR obligations, relevant TPS screening and clear call recording consent where recording is used. Responsibilities should be agreed for each campaign.",
  },
];

export const pages = {
  technology: {
    title: "Technology for clearer campaign decisions",
    description:
      "Explore Ringstack’s approach to call tracking, lead routing and campaign reporting.",
    intro:
      "A useful technology setup connects campaign activity to the information teams need to act.",
    sections: [
      {
        title: "Call tracking",
        text: "Plan tracking around the campaign journey, agreed call criteria and the reporting needed by each partner.",
      },
      {
        title: "Lead routing",
        text: "Consider how an enquiry moves from its source to the right team, including timing and handling requirements.",
      },
      {
        title: "Campaign reporting",
        text: "Use clear, relevant reporting to review activity, quality and agreed outcomes.",
      },
    ],
  },
  advertisers: {
    title: "Inbound calls and leads for advertisers",
    description:
      "Talk with Ringstack about pay-per-call and lead generation campaign options for your business.",
    intro:
      "Start with who you can help, what makes an enquiry suitable and how your team will handle it.",
    sections: [
      {
        title: "Agree your requirements",
        text: "Define service areas, operating hours, customer fit and what counts as a valid call or lead.",
      },
      {
        title: "Plan measurement",
        text: "Choose suitable tracking and agree how quality feedback and disputes will be reviewed.",
      },
      {
        title: "Review the campaign",
        text: "Use performance and lead feedback to decide what to maintain or adjust.",
      },
    ],
  },
  publishers: {
    title: "Publisher partnerships with clear expectations",
    description:
      "Explore Ringstack publisher opportunities and campaign requirements.",
    intro:
      "Good publisher relationships begin with campaign details that are clear enough to assess fit.",
    sections: [
      {
        title: "Check campaign fit",
        text: "Review the audience, traffic requirements, geography, hours and exclusions before agreeing to participate.",
      },
      {
        title: "Understand the terms",
        text: "Confirm payable outcomes, validation rules, payment terms and the process for raising questions.",
      },
      {
        title: "Keep communication open",
        text: "Share useful context and raise changes to traffic or delivery so the campaign can be reviewed.",
      },
    ],
  },
  about: {
    title: "About Ringstack",
    description:
      "Learn about Ringstack, a UK pay-per-call and lead generation partner.",
    intro:
      "Ringstack connects advertisers looking for customer enquiries with publishers who can deliver relevant calls and leads.",
    sections: [
      {
        title: "Our role",
        text: "We help both sides clarify campaign fit, quality requirements, tracking and commercial terms.",
      },
      {
        title: "How we work",
        text: "We value plain communication, practical support and useful feedback throughout a campaign.",
      },
      {
        title: "Responsible campaigns",
        text: "We encourage partners to account for applicable UK GDPR and PECR requirements, TPS screening where relevant, and consent and information for call recording.",
      },
    ],
  },
};

export const privacyContent = [
  {
    title: "Information we receive",
    text: "When you contact Ringstack, we receive the details you choose to provide, such as your name, work email address, organisation and enquiry. Campaign data practices should be set out in the relevant campaign notices and agreements.",
  },
  {
    title: "How information is used",
    text: "We use enquiry information to respond to requests and manage business communications. Any further use should have an appropriate purpose and lawful basis under applicable data protection law.",
  },
  {
    title: "Your choices and rights",
    text: "You can contact us to ask about personal information we hold or to exercise rights available under UK data protection law. Use the contact address shown on our contact page for privacy enquiries.",
  },
];
export const termsContent = [
  {
    title: "Campaign agreements",
    text: "Specific campaign scope, quality criteria, fees, payment terms, tracking and dispute processes should be agreed in writing before activity begins.",
  },
  {
    title: "Partner responsibilities",
    text: "Each party is responsible for meeting the obligations that apply to its role, including requirements relating to data protection, marketing, consumer communications and supplied traffic.",
  },
  {
    title: "Questions about these terms",
    text: "These general website terms should be reviewed against Ringstack’s actual services and contracting arrangements. Use the contact address shown on our contact page with questions.",
  },
];
