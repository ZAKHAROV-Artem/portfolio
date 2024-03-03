"use client";

import { wrapperVariants } from "@/data/anim-data";
import { motion } from "framer-motion";
import RecentProjects from "./recent-projects";
import Tech from "./tech";
import Header from "./header";
import Footer from "@/components/footer";
import ContactMe from "./contact-me";

type Props = {
  direction: number;
};
export default function MainPage({ direction }: Props) {
  return (
    <motion.div
      variants={wrapperVariants}
      animate="animate"
      initial={"initial"}
      exit="exit"
      custom={direction}
      className="h-full max-h-screen w-full overflow-x-hidden overflow-y-scroll bg-black"
    >
      <Header />

      <div className="mt-20 space-y-20 overflow-hidden">
        <RecentProjects />
        <Tech />
        <ContactMe />
        <Footer />
      </div>
    </motion.div>
  );
}
