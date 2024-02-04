import { IIconProps } from "../../../../types/proptypes";

export function BitBucketColored(props: IIconProps) {
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
        d="M2.18152 2.25006C1.98276 2.24741 1.79302 2.33566 1.66323 2.49114C1.53343 2.64662 1.47686 2.85341 1.50868 3.05604L4.3649 20.9613C4.43836 21.4136 4.8157 21.7462 5.25979 21.7499H18.9622C19.2955 21.7543 19.5817 21.5061 19.6351 21.1663L22.4913 3.05951C22.5232 2.85688 22.4665 2.65009 22.3368 2.49461C22.207 2.33914 22.0172 2.25088 21.8185 2.25353L2.18152 2.25006ZM14.2086 15.1909H9.83512L8.65095 8.80215H15.2683L14.2086 15.1909Z"
        fill="#2684FF"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M21.5833 8.80225H15.2686L14.209 15.191H9.8355L4.67139 21.5208C4.83506 21.6669 5.04375 21.7482 5.26012 21.7501H18.9659C19.2993 21.7545 19.5855 21.5063 19.6388 21.1664L21.5833 8.80225Z"
        fill="url(#paint0_linear_141_32)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_141_32"
          x1="23.0434"
          y1="10.5914"
          x2="15.4323"
          y2="21.0565"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.18" stopColor="#0052CC" />
          <stop offset="1" stopColor="#2684FF" />
        </linearGradient>
      </defs>
    </svg>
  );
}
