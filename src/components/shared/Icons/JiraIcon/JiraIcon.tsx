import { IIconProps } from "../../../../types/components/icon";

export function JiraIcon(props: IIconProps) {
  const { fill, size, className } = props;

  return (
    <svg
      width={size || 24}
      height={size || 24}
      viewBox="0 0 24 24"
      fill={fill || "none"}
      className={className}
    >
      <g clip-path="url(#clip0_141_28)">
        <path
          d="M23.712 11.328L13.035 1.0005L12 0L3.963 7.7745L0.288 11.3295C0.197474 11.4162 0.125325 11.5203 0.0758475 11.6355C0.0263698 11.7507 0.000575439 11.8746 0 12C0 12.252 0.1035 12.4935 0.288 12.672L7.6305 19.7745L12 24L20.037 16.2255L20.1615 16.1055L23.712 12.6705C23.8025 12.5838 23.8747 12.4797 23.9242 12.3645C23.9736 12.2493 23.9994 12.1254 24 12C23.9996 11.8744 23.9739 11.7501 23.9244 11.6347C23.875 11.5192 23.8027 11.4149 23.712 11.328ZM12 15.5475L8.331 12L12 8.4525L15.669 12L12 15.5475Z"
          fill="#2684FF"
        />
        <path
          d="M12.0001 8.45086C11.4325 7.90649 10.9799 7.25373 10.6691 6.53126C10.3584 5.80879 10.1958 5.0313 10.1911 4.24486C10.1908 3.45819 10.3486 2.67949 10.6549 1.95494C10.9613 1.23038 11.4101 0.574728 11.9746 0.0268555L3.94507 7.78936L8.31457 12.0149L12.0001 8.45086Z"
          fill="url(#paint0_linear_141_28)"
        />
        <path
          d="M15.678 11.9912L12 15.5477C12.5745 16.1027 13.029 16.7627 13.3395 17.4872C13.6494 18.21 13.8092 18.9883 13.8092 19.7747C13.8092 20.5612 13.6494 21.3394 13.3395 22.0622C13.029 22.7867 12.5745 23.4452 12 24.0002L20.0475 16.2167L15.678 11.9912Z"
          fill="url(#paint1_linear_141_28)"
        />
      </g>
      <defs>
        <linearGradient
          id="paint0_linear_141_28"
          x1="11.3446"
          y1="4.86136"
          x2="6.39307"
          y2="9.98086"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.18" stop-color="#0052CC" />
          <stop offset="1" stop-color="#2684FF" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_141_28"
          x1="324.082"
          y1="735.924"
          x2="497.47"
          y2="619.737"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.18" stop-color="#0052CC" />
          <stop offset="1" stop-color="#2684FF" />
        </linearGradient>
        <clipPath id="clip0_141_28">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
