import { motion } from "framer-motion";
import { IScreenSlideProps } from "../../../../types/components/shared/Slides/ScreenSlide";

export function ScreenSlide(props: IScreenSlideProps) {
  const { isPresent } = props;

  return (
    <motion.div
      initial={{ scaleX: 1 }}
      animate={{
        scaleX: 0,
        transition: { duration: 1, ease: "circInOut" },
      }}
      exit={{ scaleX: 1, transition: { duration: 1, ease: "circInOut" } }}
      style={{
        originX: isPresent ? 0 : 1,
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: "var(--screen-slide-bg)",
        zIndex: 2,
      }}
    />
  );
}
