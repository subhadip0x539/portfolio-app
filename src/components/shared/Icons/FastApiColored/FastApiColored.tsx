import { IIconProps } from "../../../../types/proptypes";

export function FastApiColored(props: IIconProps) {
  const { fill, size, className } = props;

  return (
    <svg
      width={size || 24}
      height={size || 24}
      viewBox="0 0 24 24"
      fill={fill || "none"}
      className={className}
    >
      <g clipPath="url(#clip0_133_317)">
        <path
          d="M12 0C5.375 0 0 5.375 0 12C0 18.627 5.375 24 12 24C18.626 24 24 18.627 24 12C24 5.375 18.627 0 12 0ZM11.376 21.62V14.092H7.19L13.203 2.38V9.908H17.232L11.376 21.62Z"
          fill="#009485"
        />
      </g>
      <defs>
        <clipPath id="clip0_133_317">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
