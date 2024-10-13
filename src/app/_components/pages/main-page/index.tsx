"use client";

import Footer from "@/components/footer";
import { wrapperVariants } from "@/data/anim-data";
import { motion } from "framer-motion";

import ContactMe from "./contact-me";
import Header from "./header";
import RecentProjects from "./recent-projects";
import Tech from "./tech";

type Props = {
  direction: number;
};
export default function MainPage({ direction }: Props) {
  return (
    <motion.div
      animate="animate"
      className="h-full max-h-screen w-full overflow-x-hidden overflow-y-scroll bg-black"
      custom={direction}
      exit="exit"
      initial={"initial"}
      variants={wrapperVariants}
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
