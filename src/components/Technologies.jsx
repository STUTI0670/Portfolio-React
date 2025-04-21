import { SiHtml5, SiCss3, SiJavascript, SiReact } from "react-icons/si";
import { motion } from "framer-motion"; // Import Framer Motion

const Technologies = () => {
  // Define animation for wobbly effect
  const wobbleAnimation = {
    scale: [1, 1.1, 1],
    rotate: [-5, 5, -5], // Slight rotation to create the wobble
    transition: { duration: 0.3, repeat: Infinity, repeatType: "reverse" }
  };

  return (
    <div className="border-b border-neutral-800 pb-24">
      <h1 className="my-20 text-center text-4xl">Technologies</h1>
      
      {/* Flexbox for a single row layout */}
      <div className="flex justify-center gap-8 flex-wrap">
        <motion.div
          className="rounded-2xl border-4 border-neutral-800 p-4"
          whileHover={wobbleAnimation}
        >
          <SiHtml5 className="text-7xl text-orange-500" />
        </motion.div>
        <motion.div
          className="rounded-2xl border-4 border-neutral-800 p-4"
          whileHover={wobbleAnimation}
        >
          <SiCss3 className="text-7xl text-blue-500" />
        </motion.div>
        <motion.div
          className="rounded-2xl border-4 border-neutral-800 p-4"
          whileHover={wobbleAnimation}
        >
          <SiJavascript className="text-7xl text-yellow-400" />
        </motion.div>
        <motion.div
          className="rounded-2xl border-4 border-neutral-800 p-4"
          whileHover={wobbleAnimation}
        >
          <SiReact className="text-7xl text-cyan-400" />
        </motion.div>
      </div>
    </div>
  );
};

export default Technologies;
