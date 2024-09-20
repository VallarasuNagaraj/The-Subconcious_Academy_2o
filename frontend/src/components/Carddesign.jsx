import { motion } from "framer-motion";
import '../css/home.style.css'

const SquishyCard = () => {
  const cardData = [
    { title: "Expert Management", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, rem." },
    { title: "Online & Offline", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, rem." },
    { title: "Skilled Trainers", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, rem." },
    { title: "Happy Customer", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, rem." },
  ];

  return (
    <section className="px-8 py-12 ml-6">
      <div className="grid grid-cols-4 gap-16 ">
        {cardData.map((data, index) => (
          <Card key={index} title={data.title} description={data.description}/>
        ))}
      </div>
    </section>
  );
};

// eslint-disable-next-line react/prop-types
const Card = ({ title, description }) => {
  return (
    <motion.div
      whileHover="hover"
      transition={{
        duration: 1,
        ease: "backInOut",
      }}
      variants={{
        hover: {
          scale: 1.05,
        },
      }}
      className="relative h-96 w-80 shrink-0 overflow-hidden rounded-xl bg-white/30 p-8"
    >
      <div className="relative z-10">
        <span className="mb-3 block w-fit rounded-full bg-white px-3 py-0.5 text-sm font-light text-primary_color_gold">
          Pro
        </span>
        <motion.span
          initial={{ scale: 0.85 }}
          variants={{
            hover: {
              scale: 1,
            },
          }}
          transition={{
            duration: 1,
            ease: "backInOut",
          }}
          className="my-2 block origin-top-left font-serif text-5xl font-black leading-[1.2]"
        >
          {title}
        </motion.span>
        <p>
          {description}
        </p>
      </div>
      <button className="gold-button shine-button absolute bottom-4 left-4 right-4 z-20 rounded border-2 border-white bg-white py-2 text-center font-mono font-black uppercase text-neutral-800 backdrop-blur transition-colors hover:bg-white/30 hover:text-white">
        Read More
      </button>
      <Background />
    </motion.div>
  );
};

const Background = () => {
  return (
    
    <motion.svg
      width="320"
      height="384"
      viewBox="0 0 320 384"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute inset-0 z-0"
      variants={{
        hover: {
          scale: 1.5,
        },
      }}
      transition={{
        duration: 1,
        ease: "backInOut",
      }}
    >
      <motion.circle
        variants={{
          hover: {
            scaleY: 0.5,
            y: -25,
          },
        }}
        transition={{
          duration: 1,
          ease: "backInOut",
          delay: 0.2,
        }}
        cx="160.5"
        cy="114.5"
        r="101.5"
        fill="#262626"
      />
      <motion.ellipse
        variants={{
          hover: {
            scaleY: 2.25,
            y: -25,
          },
        }}
        transition={{
          duration: 1,
          ease: "backInOut",
          delay: 0.2,
        }}
        cx="160.5"
        cy="265.5"
        rx="101.5"
        ry="43.5"
        fill="#262626"
      />
    </motion.svg>
  );
};

export default SquishyCard;
