import { motion } from "framer-motion";

export function AboutContent() {
  return (
    <div
      style={{
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 2.5, duration: 0.3 }}
        style={{
          height: 200,
          width: 200,
          background: "var(--banner-image-bg)",
          filter: "blur(100px)",
        }}
      />
      <motion.div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <motion.svg height="147" width="104" viewBox="0 0 104 147">
          <motion.path
            initial={{ x: 50, y: -50, opacity: 0 }}
            animate={{ x: 0, y: 0, opacity: 1 }}
            transition={{ type: "spring", duration: 0.5, delay: 2 }}
            d="M21.254 67.097C48.581 44.771 75.312 21.671 103.234 0C88.588 22.505 73.526 44.711 58.88 67.215C46.318 67.275 33.757 67.276 21.254 67.097Z"
            fill="#FFA726"
          />
          <motion.path
            initial={{ x: -50, y: 50, opacity: 0 }}
            animate={{ x: 0, y: 0, opacity: 1 }}
            transition={{ type: "spring", duration: 0.5, delay: 2 }}
            d="M44.354 79.539C56.975 79.539 69.537 79.539 82.099 79.718C54.594 101.924 27.982 125.202 0 146.814C14.646 124.309 29.708 102.044 44.354 79.539Z"
            fill="#FFA726"
          />
        </motion.svg>
      </motion.div>
    </div>
  );
}
