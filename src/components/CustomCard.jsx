import { motion } from "framer-motion";

const CustomCard = ({ url, icon, linkTo, delay, name }) => {
  return (
    <a href={url} target="_blank">
      <motion.div
        className="flex justify-start items-center px-4 py-2 rounded-lg bg-card-light dark:bg-card-dark"
        animate={{
          scale: [1.0, 1.25, 0.9, 1.0],
          transition: { delay: delay, duration: 0.8, ease: "easeOut" },
        }}
      >
        <img className="h-14 w-auto" src={icon} alt={`${name} icon`} />
        <p className="ml-4 text-txt font-medium dark:text-txt-dark">
          {name}
        </p>
      </motion.div>
    </a>
  );
};

export default CustomCard;
