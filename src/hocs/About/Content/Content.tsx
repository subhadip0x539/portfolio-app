export function Content() {
  return (
    <div className="flex items-center justify-center relative w-300">
      <div
        style={{
          height: 200,
          width: 200,
          background: "var(--image-bg)",
          filter: "blur(80px)",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <svg height="147" width="104" viewBox="0 0 104 147" className="w-40">
          <path
            d="M21.254 67.097C48.581 44.771 75.312 21.671 103.234 0C88.588 22.505 73.526 44.711 58.88 67.215C46.318 67.275 33.757 67.276 21.254 67.097Z"
            fill="#FFA726"
          />
          <path
            d="M44.354 79.539C56.975 79.539 69.537 79.539 82.099 79.718C54.594 101.924 27.982 125.202 0 146.814C14.646 124.309 29.708 102.044 44.354 79.539Z"
            fill="#FFA726"
          />
        </svg>
      </div>
    </div>
  );
}
