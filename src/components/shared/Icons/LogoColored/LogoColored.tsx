import { IIconProps } from "../../../../types/proptypes";

export function LogoColored(props: IIconProps) {
  const { fill, size, className } = props;

  return (
    <svg
      width={size || 24}
      height={size || 24}
      viewBox="0 0 24 35"
      fill={fill || "currentColor"}
      className={className}
    >
      <path
        d="M4.94116 15.5988C11.2942 10.4084 17.5086 5.03811 24 0C20.5951 5.232 17.0934 10.3945 13.6885 15.6262C10.7681 15.6402 7.84788 15.6404 4.94116 15.5988ZM10.3115 18.4914C13.2456 18.4914 16.1661 18.4914 19.0865 18.533C12.6921 23.6955 6.5053 29.1072 0 34.1315C3.40492 28.8995 6.90656 23.7233 10.3115 18.4914Z"
        fill="#FFA726"
      />
    </svg>
  );
}
