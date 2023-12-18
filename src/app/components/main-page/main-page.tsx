"use client";

import { wrapperVariants } from "@/data/anim-data";
import { motion } from "framer-motion";
import RecentProjects from "./recent-projects";
import Tech from "./tech";
import Header from "./header";
import Footer from "@/components/common/footer";
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
      key={"main-page"}
      exit="exit"
      custom={direction}
      className="max-h-screen bg-black h-full w-full overflow-x-hidden overflow-y-scroll"
    >
      <Header />

      <div className="space-y-20 mt-20 overflow-hidden">
        <RecentProjects />
        <Tech />
        <ContactMe />
        <Footer />
      </div>
    </motion.div>
  );
}
