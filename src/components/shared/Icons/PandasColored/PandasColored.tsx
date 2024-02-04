import { IIconProps } from "../../../../types/proptypes";

export function PandasColored(props: IIconProps) {
  const { fill, size, className } = props;

  return (
    <svg
      width={size || 24}
      height={size || 24}
      viewBox="0 0 24 24"
      fill={fill || "none"}
      className={className}
    >
      <path
        d="M8.88675 2.10969H11.3385V7.19994H8.8875L8.88675 2.10969ZM8.88675 12.5662H11.3385V17.6579H8.8875L8.88675 12.5662ZM8.88675 8.68644H11.3385V11.0887H8.8875L8.88675 8.68644ZM4.9485 6.29469H7.3995V23.2169H4.94775L4.9485 6.29469ZM12.744 16.7669H15.1958V21.8572H12.744V16.7669ZM12.744 6.30069H15.1958V11.3909H12.744V6.30069ZM12.744 12.8782H15.1958V15.2804H12.744V12.8782ZM16.6005 0.783691H19.0523V17.7059H16.6005V0.783691Z"
        fill="white"
      />
    </svg>
  );
}
