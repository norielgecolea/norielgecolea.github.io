"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface AlertProps {
  message: string;
  duration?: number; // in milliseconds
  type?: "success" | "error" | "info"; // new parameter
}

const Alert: React.FC<AlertProps> = ({ message, duration = 3000, type = "error" }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), duration);
    return () => clearTimeout(timer);
  }, [duration]);

  const bgColor =
    type === "success"
      ? "bg-green-500"
      : type === "info"
      ? "bg-blue-500"
      : "bg-red-500";

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.3 }}
          className={`fixed bottom-6 left-6 z-50 rounded-lg ${bgColor} px-4 py-3 text-white shadow-lg`}
        >
          {message}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Alert;
