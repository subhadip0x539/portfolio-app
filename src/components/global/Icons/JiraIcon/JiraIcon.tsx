import { SvgIcon, SvgIconProps } from "@mui/material";

export function JiraIcon(props: SvgIconProps) {
  return (
    <SvgIcon
      width="700"
      height="700"
      viewBox="0 0 700 700"
      fill="none"
      {...props}
    >
      <path
        d="M691.617 330.413L380.187 29.1975L350 0L115.567 226.743L8.38144 330.413C-2.79381 341.235 -2.79381 358.765 8.38144 369.588L222.562 576.742L350 700L584.432 473.258L588.062 469.747L691.617 369.588C702.795 358.765 702.795 341.235 691.617 330.413ZM350 453.485L243.005 350L350 246.515L456.995 350L350 453.485Z"
        fill="#2684FF"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M349.997 246.515C279.947 178.752 279.605 68.9986 349.235 0.830078L115.088 227.203L242.525 350.46L349.997 246.515Z"
        fill="url(#paint0_linear_104_18)"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M457.28 349.72L350 453.48C383.812 486.165 402.81 530.505 402.81 576.738C402.81 622.973 383.812 667.313 350 699.998L584.72 472.978L457.28 349.72Z"
        fill="url(#paint1_linear_104_18)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_104_18"
          x1="330.892"
          y1="141.828"
          x2="152.411"
          y2="219.755"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.18" stop-color="#0052CC" />
          <stop offset="1" stop-color="#2684FF" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_104_18"
          x1="370.442"
          y1="556.965"
          x2="548.602"
          y2="479.59"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.18" stop-color="#0052CC" />
          <stop offset="1" stop-color="#2684FF" />
        </linearGradient>
      </defs>
    </SvgIcon>
  );
}
