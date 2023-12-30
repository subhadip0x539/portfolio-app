function hexToRgba(hex: string, opacity: number): string {
  hex = hex.replace(/^#/, "");

  let bigint = parseInt(hex, 16);
  let red = (bigint >> 16) & 255;
  let green = (bigint >> 8) & 255;
  let blue = bigint & 255;

  opacity = Math.min(1, Math.max(0, opacity));

  let rgbaColor = `rgba(${red}, ${green}, ${blue}, ${opacity})`;
  return rgbaColor;
}

export { hexToRgba };
