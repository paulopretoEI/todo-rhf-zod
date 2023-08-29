import { cn } from "@utils/cn";
import { motion } from "framer-motion";

import { TTodo } from "@/App";

export type TTodoProps = {
  onClick: (id: string) => void;
} & TTodo;
const Todo = ({ description, done, id, onClick }: TTodoProps) => {
  return (
    <motion.li
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ ease: "easeInOut", duration: 0.5 }}
      exit={{ opacity: 0, y: -10 }}
    >
      <button
        className={cn(
          "todo-card mb-5 flex h-10 w-full items-center rounded-md px-2 text-white",
          {
            "line-through": done,
          },
        )}
        onClick={() => onClick(id)}
      >
        {description}
      </button>
    </motion.li>
  );
};

export default Todo;
