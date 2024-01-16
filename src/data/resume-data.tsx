import {
  MosaicLogo,
  BalajiptLogo,
  SpaceChatLiveLogo,
  DeadAvatarsLogo,
  AzukiSalesLogo,
  PlagueNftLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Gregory Johns",
  initials: "GJ",
  location: "Orlando, Florida, EST",
  locationLink: "https://maps.app.goo.gl/GXjAbdZpAxEsfADW9",
  about:
    "Full Stack Engineer focused on building products with extra attention to detail",
  summary:
    "As a full-stack developer, my goal is to build robust and scalable web applications that provide seamless user experiences. I am proficient in using TypeScript, React with Next.js, Node.js, and Supabase. With over 4 years of remote work experience, I have collaborated with diverse teams across the country, contributing to the development and growth of various projects. Let's work together to build innovative solutions that meet your business needs.",
  avatarUrl: "https://i.imgur.com/xPBIPH7.png",
  personalWebsiteUrl: "https://gregjohns.dev",
  contact: {
    email: "gregjohns@fastmail.com",
    tel: "+1 407 618 3143",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/gjohnsx/",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/greg-johns/",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://x.com/gjohnsx",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "Rollins College Crummer Graduate School of Business",
      degree: "MBA",
      start: "2014",
      end: "2016",
    },
    {
      school: "University of Florida",
      degree: "Bachelor of Science in Zoology",
      start: "2009",
      end: "2013",
    },
  ],
  work: [
    {
      company: "Self Employed",
      link: "https://gregjohns.dev/",
      badges: ["Remote"],
      title: "Full Stack Developer",
      start: "2017",
      end: "present",
      description:
        "Developed and maintained client websites and applications using diverse programming languages and technologies. Executed growth hacking strategies, including A/B testing, email marketing, and social media advertising, to boost user acquisition and engagement. Collaborated closely with clients to comprehend their business objectives, delivering custom solutions to meet their needs. Utilized data analysis to track marketing campaign performance and pinpoint areas for enhancement. Managed budgets and resources effectively to maximize return on investment.",
    },
    {
      company: "Ring Ring Marketing",
      link: "https://ringringmarketing.com/",
      badges: ["Remote"],
      title: "Senior Client Relations Manager",
      start: "2020",
      end: "2021",
      description:
        "Devised and executed strategies for website optimization, including paid search, SEO, and content marketing. Implemented PPC optimization techniques to maximize ad spend efficiency. Ensured seamless integration of these strategies into clients' existing systems, enhancing their digital presence and performance.",
    },
    {
      company: "Omicron Media",
      link: "https://omicronmedia.com/",
      badges: [],
      title: "SEM Manager",
      start: "2019",
      end: "2020",
      description:
        "Managed and executed search marketing campaigns for 10 B2C SaaS Usenet brands with a yearly ad spend of $1MM. Regularly conducted A/B testing of ad copy and landing pages, optimizing performance and enhancing conversion rates. Utilized advanced analytical tools to track campaign performance and implement improvements.",
    },
    {
      company: "Pearson",
      link: "https://www.pearson.com/",
      badges: [],
      title: "Search Marketing Specialist",
      start: "2016",
      end: "2018",
      description:
        "Managed and executed search marketing campaigns with annual budgets of $4.3MM, developing strategies to optimize paid search, SEO, and content marketing efforts. Regularly improved campaign performance.",
    },
  ],
  skills: [
    "JavaScript",
    "TypeScript",
    "React/Next.js",
    "Node.js",
    "Supabase",
    "Tailwind CSS",
    "Python",
  ],
  projects: [
    {
      title: "Mosaic",
      techStack: ["TypeScript", "Next.js", "Supabase", "Stripe", "Trigger.dev"],
      description:
        "A superchat and paid review platform for expert content creators. Proudly working with the Scuffed Realtor show on YouTube.",
      logo: MosaicLogo,
      link: {
        label: "himosaic.com",
        href: "https://himosaic.com/",
      },
    },
    {
      title: "BalajiPT",
      techStack: ["TypeScript", "Next.js", "Supabase", "pg_vector", "OpenAI"],
      description:
        "ChatGPT API with Balaji Srinivasan's book, The Network State. Built the day ChatGPT API was released.",
      logo: BalajiptLogo,
      link: {
        label: "balajipt.com",
        href: "https://balajipt.com/",
      },
    },
    {
      title: "Spacechat Live",
      techStack: ["Next.js", "Supabase", "Twitter API"],
      description: "Live Chat, Q&A, and Speaker Ratings for Twitter Spaces.",
      logo: SpaceChatLiveLogo,
      link: {
        label: "spacechat.live",
        href: "https://spacechat.live/",
      },
    },
    {
      title: "Dead Avatars Gallery",
      techStack: ["Next.js", "Supabase", "NFT"],
      description:
        "NFT Image Gallery for the Dead Avatars NFT project by Nerd City.",
      logo: DeadAvatarsLogo,
      link: {
        label: "dap-gallery.vercel.app",
        href: "https://dap-gallery.vercel.app/",
      },
    },
    {
      title: "Azuki Twitter Sales Bot",
      techStack: ["NFT", "Python", "AWS Lambda", "Twitter API", "Opensea API"],
      description: "Twitter sales notification bot for the Azuki NFT project.",
      logo: AzukiSalesLogo,
      link: {
        label: "twitter.com/azukisales",
        href: "https://twitter.com/azukisales",
      },
    },
    {
      title: "The Plague NFT Twitter Data Collection",
      techStack: ["Python", "Twitter API"],
      description:
        "Extracting user info from Tweet interaction for The Plague NFT's mint list.",
      logo: PlagueNftLogo,
    },
  ],
} as const;
