import { IIconProps } from "../../../../types/proptypes";

export function MaterialUiColored(props: IIconProps) {
  const { fill, size, className } = props;

  return (
    <svg
      width={size || 24}
      height={size || 24}
      viewBox="0 0 24 24"
      fill={fill || "none"}
      className={className}
    >
      <g clipPath="url(#clip0_129_296)">
        <path
          d="M0 2.47512V12.8651L3 14.5981V7.67012L9 11.1351L15 7.67012V11.1351L9 14.5981V18.0621L15 21.5251L24 16.3301V9.40212L21 11.1351V14.5981L15 18.0621L12 16.3301L18 12.8651V2.47512L9 7.67012L0 2.47512ZM24 2.47512L21 4.20512V7.67012L24 5.93812V2.47512Z"
          fill="#007FFF"
        />
      </g>
      <defs>
        <clipPath id="clip0_129_296">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
