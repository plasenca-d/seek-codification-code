"use client";
import { motion } from "framer-motion";

import { AuroraBackground } from "@/components/ui/aurora-background";

export function AnimatedSide() {
  return (
    <AuroraBackground
      data-testid="animated-side"
      className="h-[calc(100vh-80px)] rounded-xl"
    >
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-4 items-center justify-center px-4"
      >
        <div className="text-4xl md:text-6xl font-extrabold text-primary-foreground text-center">
          Organiza Tu Día, Domina Tu Mundo
        </div>
        <div className="font-light text-lg md:text-2xl text-primary-foreground py-4 text-center">
          Convierte tus ideas en acciones, una tarea a la vez
        </div>
      </motion.div>
    </AuroraBackground>
  );
}
