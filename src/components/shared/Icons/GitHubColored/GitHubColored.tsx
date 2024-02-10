import { IIconProps } from "../../../../types/proptypes";

export function GitHubColored(props: IIconProps) {
  const { fill, size, className } = props;

  return (
    <svg
      width={size || 24}
      height={size || 24}
      viewBox="0 0 24 24"
      fill={fill || "none"}
      className={className}
    >
      <g clipPath="url(#clip0_137_331)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12 0C18.6276 0 24 5.50792 24 12.3035C24 17.7383 20.5656 22.3487 15.8004 23.9771C15.192 24.0983 14.976 23.7141 14.976 23.3865C14.976 22.9809 14.9904 21.6562 14.9904 20.0098C14.9904 18.8626 14.6064 18.1138 14.1756 17.7322C16.848 17.4274 19.656 16.3869 19.656 11.6613C19.656 10.3173 19.1904 9.22058 18.42 8.35898C18.5448 8.04818 18.9564 6.79674 18.3024 5.10234C18.3024 5.10234 17.2968 4.77267 15.006 6.36387C14.0472 6.09147 13.02 5.95441 12 5.94961C10.98 5.95441 9.954 6.09147 8.9964 6.36387C6.7032 4.77267 5.6952 5.10234 5.6952 5.10234C5.0436 6.79674 5.4552 8.04818 5.5788 8.35898C4.812 9.22058 4.3428 10.3173 4.3428 11.6613C4.3428 16.3749 7.1448 17.4314 9.81 17.7422C9.4668 18.0494 9.156 18.5913 9.048 19.3869C8.364 19.7013 6.6264 20.2454 5.556 18.365C5.556 18.365 4.9212 17.1829 3.7164 17.0965C3.7164 17.0965 2.5464 17.0809 3.6348 17.8441C3.6348 17.8441 4.4208 18.2221 4.9668 19.6441C4.9668 19.6441 5.6712 21.8401 9.0096 21.0961C9.0156 22.1245 9.0264 23.0937 9.0264 23.3865C9.0264 23.7117 8.8056 24.0923 8.2068 23.9783C3.438 22.3523 0 17.7395 0 12.3035C0 5.50792 5.3736 0 12 0Z"
          fill="white"
        />
      </g>
      <defs>
        <clipPath id="clip0_137_331">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
