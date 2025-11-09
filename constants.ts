
import { FaUserFriends, FaRegLightbulb, FaChartLine, FaHeadset, FaBrain, FaRegHandshake, FaBullhorn } from 'react-icons/fa';
import { MdComputer, MdOutlineSupportAgent, MdPhonelinkSetup } from 'react-icons/md';
import { Project, Skill, ExperienceItem } from './types';

export const SKILLS: Skill[] = [
  { name: 'Team Leadership', category: 'Leadership', icon: FaUserFriends },
  { name: 'Team Management', category: 'Leadership', icon: FaChartLine },
  { name: 'Coaching & Training', category: 'Leadership', icon: FaRegLightbulb },
  { name: 'Talent Acquisition', category: 'Leadership', icon: FaBrain },
  { name: 'Inbound & Outbound Calls', category: 'Technical', icon: FaHeadset },
  { name: 'Non-voice Chat Support', category: 'Technical', icon: MdComputer },
  { name: 'Medical Records Specialist', category: 'Technical', icon: MdOutlineSupportAgent },
  { name: 'Sales & Upgrades', category: 'Technical', icon: MdPhonelinkSetup },
  { name: 'Good Communication', category: 'Soft Skills', icon: FaBullhorn },
  { name: 'Analytical Skills', category: 'Soft Skills', icon: FaBrain },
  { name: 'Client Relations', category: 'Soft Skills', icon: FaRegHandshake },
  { name: 'Problem Solving', category: 'Soft Skills', icon: FaRegLightbulb },
];

export const PROJECTS: Project[] = [
  {
    title: 'Team Leadership & Development (Peak Outsourcing)',
    description: 'As Team Leader, I managed and mentored a team of 10-11 agents across both Manila and Dumaguete offices. My role involved polishing chat transcripts for quality assurance and fostering agent growth.',
    results: ['Successfully led a bi-located team.', 'Ensured high-quality client communication.', 'Contributed to agent development and performance.'],
    tags: ['Leadership', 'Team Management', 'Mentoring', 'Quality Assurance'],
  },
  {
    title: 'Talent Acquisition Supervision',
    description: 'Stepped into the Talent Acquisition Supervisor role for 6 months at Peak Outsourcing, overseeing recruitment efforts to expand our team.',
    results: ['Managed recruitment pipeline for new agents.', 'Contributed to strategic team growth.', 'Gained experience in HR and talent management.'],
    tags: ['Talent Acquisition', 'Supervision', 'Recruitment', 'HR'],
  },
  {
    title: 'Multi-Campaign Customer Service Expertise',
    description: 'Demonstrated versatility by handling diverse BPO campaigns, from technical and security-focused accounts to hospitality and healthcare.',
    results: ['Managed inbound calls for cyber security and hotel bookings.', 'Handled outbound calls for healthcare insurance and publishing.', 'Provided non-voice chat support for vacation rentals.'],
    tags: ['Customer Service', 'Healthcare', 'Cyber Security', 'Client Relations'],
  },
];


export const EXPERIENCE: ExperienceItem[] = [
  {
    role: 'Customer Service Representative',
    company: 'Qualfon, Phils. Inc.',
    duration: 'Jan 2025 - Jul 2025',
    description: [
      'Assigned to Gendigital (Formerly Cyber Security Account).',
      'Handled inbound calls for inquiries and product specifics.',
      'Pitched sales and processed orders for upgrades/add-ons.',
    ],
    type: 'work',
  },
  {
    role: 'CSR - (non-voice) Chat Support',
    company: 'Smiles On Demand',
    duration: 'Jun 2024 - Dec 2024',
    description: [
      'Provided chat support for Air BNB rentals and BDC bookings.',
    ],
    type: 'work',
  },
  {
    role: 'Chat Support Analyst / Team Leader / TA Supervisor',
    company: 'Peak Outsourcing',
    duration: 'Mar 2019 - Dec 2023',
    description: [
      'As Analyst, polished transcripts before sending to firms.',
      'As Team Leader, managed 10-11 agents across Manila and Dumaguete.',
      'As TA Supervisor, oversaw recruitment for 6 months.',
    ],
    type: 'work',
  },
  {
    role: 'Cashier',
    company: 'Ducomi Copra Meal',
    duration: 'Jul 2018 - Feb 2019',
    description: ['Managed transactions and customer payments in a retail environment.'],
    type: 'work',
  },
  {
    role: 'CSR - Medical Records Specialist',
    company: 'Visaya KPO',
    duration: 'Feb 2017 - Jun 2018',
    description: [
      'Handled outbound calls to retrieve patient\'s medical records for Medicare and AETNA US insurance.',
    ],
    type: 'work',
  },
  {
    role: 'CSR - Outbound - US campaign account',
    company: 'ECE Consulting Group',
    duration: 'Sep 2016 - Jan 2017',
    description: ['Conducted outbound calls for a US-based campaign.'],
    type: 'work',
  },
  {
    role: 'Solar Campaign Account',
    company: 'Global Tech Manpower Services',
    duration: 'Sep 2014 - Mar 2015',
    description: [
      'Cold-called US residences to check eligibility for solar panel installation.',
    ],
    type: 'work',
  },
  {
    role: 'Expedia Account',
    company: 'AEGIS People Support',
    duration: 'Jan 2014 - Jul 2014',
    description: [
      'Handled inbound calls for hotel inquiries and reservations.',
    ],
    type: 'work',
  },
  {
    role: 'Bachelor of Science in Elementary Education',
    company: 'Foundation University',
    duration: '1999 - 2001',
    description: [],
    type: 'education',
  },
  {
    role: 'Secondary Education',
    company: 'NOHS',
    duration: '1996 - 1999',
    description: [],
    type: 'education',
  },
];
