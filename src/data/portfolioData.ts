export interface Project {
  title: string;
  description: string;
  category: 'AI/ML' | 'Full Stack' | 'Data Science' | 'All';
  tech: string[];
  features: string[];
  github?: string;
  live?: string;
}

export interface Skill {
  name: string;
  level: number; // percentage 0-100
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}

export interface Service {
  title: string;
  description: string;
  iconName: string;
}

export interface Experience {
  period: string;
  role: string;
  organization: string;
  description: string;
  type: 'education' | 'work' | 'project';
}

export const personalInfo = {
  name: 'Mano Jerlin',
  title: 'AI Full Stack Web Developer',
  typingTexts: [
    'AI Full Stack Developer',
    'React Developer',
    'Python Developer',
    'FastAPI Developer',
    'Machine Learning Enthusiast'
  ],
  bio: 'I am a highly passionate AI Full Stack Web Developer specializing in bridging the gap between cutting-edge Artificial Intelligence and scalable, modern web architectures. With expertise spanning from designing interactive frontend interfaces in React and Tailwind CSS, to building robust REST APIs with FastAPI and Python, and deploying custom machine learning models, I build intelligent web applications that provide seamless user experiences.',
  email: 'manojerlin2006@gmail.com',
  phone: '+91 9342270553',
  github: 'https://github.com/ManoJerlin',
  linkedin: 'https://www.linkedin.com/in/mano-jerlin-675666309/',
  resumeUrl: '#', // Placeholder for user's resume PDF
};

export const statistics = [
  { label: 'Projects Completed', value: 15, suffix: '+' },
  { label: 'Technologies Learned', value: 25, suffix: '+' },
  { label: 'GitHub Repositories', value: 30, suffix: '+' },
  { label: 'AI Models Built', value: 10, suffix: '+' }
];

export const skillsData: SkillCategory[] = [
  {
    title: 'AI & Machine Learning',
    skills: [
      { name: 'Python', level: 95 },
      { name: 'TensorFlow / Keras', level: 85 },
      { name: 'Scikit-learn', level: 90 },
      { name: 'OpenCV (Computer Vision)', level: 80 },
      { name: 'Large Language Models (LLM)', level: 85 },
      { name: 'Convolutional Neural Networks (CNN)', level: 88 },
      { name: 'Natural Language Processing (NLP)', level: 82 }
    ]
  },
  {
    title: 'Frontend Development',
    skills: [
      { name: 'React.js', level: 90 },
      { name: 'HTML5 & CSS3', level: 95 },
      { name: 'JavaScript (ES6+)', level: 92 },
      { name: 'Tailwind CSS', level: 93 },
      { name: 'Bootstrap', level: 85 }
    ]
  },
  {
    title: 'Backend Development',
    skills: [
      { name: 'Python (FastAPI)', level: 92 },
      { name: 'Node.js', level: 85 },
      { name: 'Express.js', level: 82 }
    ]
  },
  {
    title: 'Database Management',
    skills: [
      { name: 'MySQL', level: 88 },
      { name: 'MongoDB', level: 84 },
      { name: 'SQLite', level: 86 }
    ]
  },
  {
    title: 'Tools & DevOps',
    skills: [
      { name: 'Git & GitHub', level: 90 },
      { name: 'VS Code', level: 95 },
      { name: 'Postman (API Testing)', level: 92 },
      { name: 'Docker', level: 78 }
    ]
  }
];

export const projectsData: Project[] = [
  {
    title: 'AI Interview Preparation Platform',
    description: 'An AI-powered interview platform that conducts mock interviews, evaluates user answers in real-time, provides constructive feedback, performance analytics, accuracy scores, and weak area analysis.',
    category: 'AI/ML',
    tech: ['React', 'FastAPI', 'Llama', 'MySQL', 'JWT'],
    features: [
      'JWT Authentication & Secure Sessions',
      'Interactive User Dashboard',
      'Past Interview History & Logging',
      'Performance Analytics Graph (Recharts)',
      'Real-time AI Feedback on speech & text',
      'HR Behavioral Mock Interview Module',
      'Technical Code/Theory Evaluation Module'
    ],
    github: 'https://github.com/ManoJerlin',
    live: 'https://github.com/ManoJerlin'
  },
  {
    title: 'AI Recipe Generator',
    description: 'Generate customizable, chef-grade recipes using AI based on available ingredients in your pantry. Suggests steps, nutritional statistics, and alternative ingredients.',
    category: 'AI/ML',
    tech: ['React', 'FastAPI', 'Llama Tiny Model'],
    features: [
      'Dynamic Recipe Generation',
      'Speech-to-Text Voice Input for ingredients',
      'Comprehensive Nutrition Information breakdowns',
      'Step-by-step cooking timers',
      'Missing ingredient substitutions'
    ],
    github: 'https://github.com/ManoJerlin',
    live: 'https://github.com/ManoJerlin'
  },
  {
    title: 'Human Emotion Detection',
    description: 'A computer vision application that detects and monitors human emotions in real-time using deep learning and video stream analysis.',
    category: 'AI/ML',
    tech: ['Python', 'TensorFlow', 'OpenCV', 'CNN'],
    features: [
      'Real-time camera feed analysis',
      'Micro-expression facial emotion classification',
      'Emotion tracking and prediction dashboard',
      'FPS performance optimization for live streams'
    ],
    github: 'https://github.com/ManoJerlin',
    live: 'https://github.com/ManoJerlin'
  },
  {
    title: 'Tourism Data Analysis',
    description: 'A comprehensive data analysis pipeline that parses tourism trends, visualizes seasonal spikes, and predicts future peak traveling months.',
    category: 'Data Science',
    tech: ['Python', 'Pandas', 'Matplotlib'],
    features: [
      'Tourism dataset parsing & cleanup',
      'Seasonal trend analysis & charts',
      'Insights extraction & prediction reporting'
    ],
    github: 'https://github.com/ManoJerlin',
    live: 'https://github.com/ManoJerlin'
  }
];

export const servicesData: Service[] = [
  {
    title: 'AI Web Applications',
    description: 'Building next-generation web platforms infused with Artificial Intelligence, such as conversational interfaces, smart aggregators, and automated analytics.',
    iconName: 'BrainCircuit'
  },
  {
    title: 'REST API Development',
    description: 'Designing and implementing highly performant, well-documented, secure, and asynchronous REST APIs using FastAPI, Express.js, and JWT authorization.',
    iconName: 'Cpu'
  },
  {
    title: 'Machine Learning Integration',
    description: 'Deploying neural networks, fine-tuned LLMs, and classification pipelines directly into production web stacks to add smart capabilities to legacy systems.',
    iconName: 'Layers'
  },
  {
    title: 'Frontend Development',
    description: 'Developing highly responsive, fluid, and beautiful responsive user interfaces using React, Framer Motion, and Tailwind CSS with premium UX workflows.',
    iconName: 'Monitor'
  },
  {
    title: 'Backend Development',
    description: 'Engineering database schemas, scalable microservices, background job queues, and robust server-side logic in Python and Node.js.',
    iconName: 'Server'
  },
  {
    title: 'Database Design',
    description: 'Architecting relational and non-relational database structures (MySQL, MongoDB, SQLite) optimized for speed, integrity, and clean query paths.',
    iconName: 'Database'
  }
];

export const experiencesData: Experience[] = [
  {
    period: '2024 - Present',
    role: 'B.E. Computer Science (AI & ML Spec.)',
    organization: 'Undergraduate Student',
    description: 'Pursuing engineering in Computer Science with a specialization in Artificial Intelligence and Machine Learning. Focused on neural networks, algorithms, cloud computing, and advanced software design principles.',
    type: 'education'
  },
  {
    period: '2023 - Present',
    role: 'AI Full Stack Web Developer (Freelance / Personal)',
    organization: 'Self-Employed',
    description: 'Building end-to-end intelligent web platforms. Integrated Large Language Models (LLMs) and Computer Vision pipelines into responsive web apps. Developed FastAPI backends and MySQL/MongoDB databases for production architectures.',
    type: 'work'
  },
  {
    period: '2022 - 2023',
    role: 'Full Stack Foundation Learner',
    organization: 'Independent Tech Journey',
    description: 'Mastered programming in Python and JavaScript. Focused on building responsive web components, server routing (Node.js/Express), relational database structures (MySQL/SQLite), and object-oriented algorithms.',
    type: 'project'
  }
];
