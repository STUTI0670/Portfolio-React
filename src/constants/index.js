import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `A B.Tech student at IGDTUW with a deep interest in building at the intersection of hardware and software. From developing deep learning models for cryptographic stream ciphers at DRDO to launching responsive web projects using React, I love turning ideas into impactful solutions. I'm currently learning full stack development while actively mentoring peers in C++ and DSA. I've explored cybersecurity with Gurugram Police, led the IEEE web team, and designed AR-based lenses with 10K+ views. I’m passionate about AI, embedded systems, and solving real-world problems through innovative tech. Always upskilling, always building — and always excited about what comes next.`;

export const ABOUT_TEXT = `Beyond building projects, I find purpose in creating impact through people and communities. As a C++ and DSA mentor with TechNeeds, I’ve supported over 1000 learners—resolving doubts, hosting contests, and nurturing consistent growth. I actively lead in student communities like IEEE (as Web Team Head), CodeBenders (as Technical Coordinator), and the T&P Cell (as a student representative), where I blend organization with innovation. From optimizing autoencoders at DRDO to launching socially-relevant platforms like Rakt Daan, I’ve always believed tech is most powerful when it uplifts. I also enjoy diving into music, Indian history, and French—because learning never stops.`;

export const EXPERIENCES = [
  {
  year: "Jun 2025 - Present ",
  role: "Web Development Intern",
  company: "NITI Aayog ",
  description: `Designed and developed a frontend landing page for Agriculture Dashboard using HTML, CSS, and JavaScript to visualize crop demand and supply data. `,
  technologies: ["HTML", "CSS", "JS"],
},
{
    year: "Jan 2025 - Apr 2025",
    role: "Research Intern",
    company: "DRDO",
    description: `Worked on learning and understanding deep learning concepts and working of cryptographic stream ciphers. Implemented Autoencoders to study feature extraction and reconstruct MNIST data.`,
    technologies: ["Neural Networks", "Ciphers", "Autoencoders"],
  },
  
  {
    year: "Jun 2024 - Jul 2024",
    role: "Student Trainee Intern",
    company: "Gurugram Police",
    description: `Participated in a 2-week internship program focused on cybersecurity, gaining insights into the latest trends and technologies in the field.`,
    technologies: ["Cybersecurity","OSINT", "Networking"],
  },
];

export const PROJECTS = [
  {
    title: "Rakt Daan",
    image: project1,
    description:
      "A web application that connects blood donors with recipients, facilitating the donation process and raising awareness about blood donation.",
    technologies: ["HTML", "CSS","Javascript"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["React"],
  },
  {
  title: "Code Editor",
  image: project4, // Replace with your actual code editor project image path
  description:
    "An online code editor that allows users to write, edit, and preview HTML, CSS, and JavaScript code in real-time. Designed for beginners and developers to practice web development in a browser-based environment without needing any setup. It includes features like live preview, syntax highlighting, and responsive layout.",
  technologies: ["HTML", "CSS", "JavaScript", "CodeMirror", "Live Preview"],
},

  
  {
    title: "Snap Chat AR Lense",
    image: project2,
    description:
      "An augmented reality lens for Snapchat that allows users to interact with virtual objects in real-time.",
    technologies: ["Lens Studio"],
  },
   
  
 
];

export const CONTACT = {
  address: "New Delhi, India",
  phoneNo: "+91 9953134042",
  email: "stutistuti27@gmail.com",
};
