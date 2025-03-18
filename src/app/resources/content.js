import { InlineCode } from "@/once-ui/components";

const person = {
  firstName: "Matteo",
  lastName: "Balasco",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Security Engineer",
  avatar: "/images/avatar.jpg",
  location: "Europe/Rome", // Update with the correct IANA time zone identifier
  languages: ["English", "Italian"], // Update with the correct languages
};

const newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about cybersecurity, technology, and share thoughts on the intersection of
      security and innovation.
    </>
  ),
};


const social = [
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/GitM10",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/mttbal/",
  },
  {
    name: "X",
    icon: "x",
    link: "",
  },
  {
    name: "Email",
    icon: "email",
    link: "mailto:matteo.balasco@gmail.com",
  },
];

const home = {
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Security Engineer</>,
  subline: (
    <>
      Design, Secure, and Innovate the organization's cybersecurity posture
      <br />
    </>
  ),
};

const about = {
  label: "About",
  title: "About me",
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com/matteo-balasco/30min",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        I’m a Security Engineer with hands-on experience securing cloud environments, corporate infrastructure, and enterprise networks. 
        My focus areas include threat detection, cloud security, and building resilient systems to stay ahead of evolving cybersecurity challenges.
      </>
    ),
  },
  work: {
    display: true,
    title: "Work Experience",
    experiences: [
      {
        company: "Docebo",
        timeframe: "2024 - Present",
        role: "Security Engineer",
        achievements: [
          <>
            Cloud Security: Managing the security of our multi-cloud infrastructure (AWS and GCP) to ensure real-time threat detection, mitigation, and compliance through CSPM.
          </>,
          <>
            Corporate Security: Collaborating with IT teams to secure corporate infrastructure, including EDR, VPNs, IdP, firewalls/WAF and Email Security.
          </>,
          <>
            Threat Response: Actively responding and mitigating security threats (Cloud/Corporate).
          </>,
          <>
            Cyber Threat Intelligence: Researching the latest vulnerabilities, cyber threats, and trends to ensure up-to-date defences.
          </>,
        ],
        images: [],
      },
      {
        company: "Zuru Tech Italy",
        timeframe: "2024 - 2024",
        role: "System & Security Engineer",
        achievements: [
          <>
           Decision-making: Collaborated with management and international teams to align decision-making
            and evaluation processes across our global offices.
          </>,
          <>
           Deployment: Deploying script/IaC using Ansible, Terraform and bash (IaC)
          </>,
          <>
           Cybersecurity Enhancement: Researching, testing, and deploying cybersecurity products/features to
           enhance the office's security posture
          </>,
          <>
           Network: Design and evaluate security enhancements for network security and new services.
          </>,
          <>
            Resolve/fix IT-related tasks for the offices/organization
          </>,
        ],
        images: [],
      },
      {
        company: "Zuru Tech Italy",
        timeframe: "2023 - 2024",
        role: "Junior System & Security Admin",
        achievements: [
          <>
           System Management: Implementing, managing and configuring security for various OS/systems
          </>,
          <>
           Infrastructure Resilience: Hardening and implementing backup solutions using AWS/NAS solutions
          </>,
          <>
           IaC: Deploying part of the infrastructure using Ansible/Terraform
          </>,
          <>
           Security Testing: Conducting infrastructure vulnerability assessments and penetration tests
          </>,
          <>
           Cybersecurity: Research, test and deploy new cybersecurity products to enhance the company posture
          </>,
        ],
        images: [],
      },
      {
        company: "F1 Consulting & Services (Thytronic)",
        timeframe: "2022 - 2023",
        role: "Junior Security Administrator",
        achievements: [
          <>
           Linux server management (PKI)
          </>,
          <>
           Vulnerability Assessment & EDR management
          </>,
          <>
           CEI-016 Cybersecurity 
          </>,
          <>
           Help Desk
          </>,
          <>
           Checking computer systems for ISO 27001 acquisition 
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true,
    title: "Studies",
    institutions: [
      {
        name: "Cybersecurity Academy 🛡️",
        description: <>Studied cybersecurity at Geeks Academy Europe</>,
      },
      {
        name: "Sardis, British Columbia 🇨🇦",
        description: <>High School Diploma in Networking, Network Security, Cyber security </>,
      },
      {
        name: "Liceo Statale Carlo Tenca 🇮🇹",
        description: <>High School Diploma</>,
      },
    ],
  },
  technical: {
    display: true,
    title: "Certifications",
    skills: [
      {
        title: "AWS Certified Solutions Architect – Associate",
        description: <>Validates the ability to design and deploy scalable systems on AWS, focusing on best practices for cloud architecture </>,
        images: [],
      },
      {
        title: "Systems Security Certified Practitioner (SSCP)",
        description: <>Demonstrates technical skills and knowledge in implementing and managing IT infrastructure with a focus on security practices</>,
        images: [],
      },
      {
        title: "EXIN Ethical Hacking Foundation",
        description: <>Provides foundational knowledge in ethical hacking, covering essential techniques and tools used to identify and address security vulnerabilities</>,
        images: [],
      },
      {
        title: "Cisco CCNA & Cisco Netwok Security",
        description: <>Certifies the ability to install, configure, and troubleshoot networks, emphasizing foundational networking knowledge and skills</>,
        images: [],
      },
    ],
  },
};

const blog = {
  label: "Blog",
  title: "Writing about cybersecurity and tech...",
  description: `Read what ${person.name} has been up to recently`,
};

const work = {
  label: "Work",
  title: "My projects",
  description: `Security and tech projects by ${person.name}`,
};

const gallery = {
  label: "Gallery",
  title: "My photo gallery",
  description: `A photo collection by ${person.name}`,
  images: [
    {
      src: "/images/gallery/img-01.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-02.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    
    // Add more images as needed
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };