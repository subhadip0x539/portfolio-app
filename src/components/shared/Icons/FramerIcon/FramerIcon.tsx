import { IIconProps } from "../../../../types/components/icon";

export function FramerIcon(props: IIconProps) {
  const { fill, size, className } = props;

  return (
    <svg
      width={size || 24}
      height={size || 24}
      viewBox="0 0 24 24"
      fill={fill || "none"}
      className={className}
    >
      <g clip-path="url(#clip0_132_307)">
        <path d="M4.6499 15.5H11.9998V22.5L4.6499 15.5Z" fill="#0055FF" />
        <path
          d="M11.9998 8.5H4.6499V15.5H19.3498L11.9998 8.5Z"
          fill="#00AAFF"
        />
        <path d="M4.6499 1.5L11.9998 8.5H19.3498V1.5H4.6499Z" fill="#88DDFF" />
      </g>
      <defs>
        <clipPath id="clip0_132_307">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
