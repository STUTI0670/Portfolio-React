import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";


export const HERO_CONTENT = `I'm a B.Tech student at IGDTUW with a deep interest in designing and developing tech that creates real impact. From implementing deep learning models during my DRDO internship to building sleek, responsive web applications with React, I love bringing together analytical thinking and creative problem-solving. I'm currently learning full stack development, and I mentor peers in C++ and DSA to help them grow alongside me.

Beyond code, I’ve led technical teams, collaborated on large-scale student initiatives, and contributed to community-driven platforms. As Web Team Head at IEEE, I steered a complete website redesign that prioritized accessibility and user experience. My AR lens designs have reached 10K+ views, and I take pride in creating for both functionality and engagement.

What drives me most is curiosity and the desire to learn continuously. Whether it’s building web applications or organizing mentorship sessions, I bring empathy, adaptability, and leadership to every challenge. I’m someone who values communication as much as code, teamwork as much as individual growth, and meaningful outcomes over buzzwords. Always experimenting, always building — and always excited about what comes next.`;

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
    "An online code editor that allows users to write, edit, and preview HTML, CSS, and JavaScript code in real-time.",
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
