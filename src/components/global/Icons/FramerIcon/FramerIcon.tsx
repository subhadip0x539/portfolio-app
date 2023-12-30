import { SvgIcon, SvgIconProps } from "@mui/material";

export function FramerIcon(props: SvgIconProps) {
  return (
    <SvgIcon
      width="350"
      height="500"
      viewBox="0 0 350 500"
      fill="none"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 333.338H175V500.005L0 333.338Z"
        fill="#0055FF"
      />
      <path d="M175 166.662H0V333.33H350L175 166.662Z" fill="#00AAFF" />
      <path d="M0 0L175 166.668H350V0H0Z" fill="#88DDFF" />
    </SvgIcon>
  );
}
