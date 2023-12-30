import { SvgIcon, SvgIconProps } from "@mui/material";

export function FigmaIcon(props: SvgIconProps) {
  return (
    <SvgIcon
      width="400"
      height="600"
      viewBox="0 0 400 600"
      fill="none"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M200 300C200 244.772 244.772 200 300 200C355.228 200 400 244.772 400 300C400 355.228 355.228 400 300 400C244.772 400 200 355.228 200 300Z"
        fill="#1ABCFE"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 500C0 444.772 44.7715 400 100 400H200V500C200 555.228 155.228 600 100 600C44.7715 600 0 555.228 0 500Z"
        fill="#0ACF83"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M200 0V200H300C355.228 200 400 155.228 400 100C400 44.7715 355.228 0 300 0H200Z"
        fill="#FF7262"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 100C0 155.228 44.7715 200 100 200H200V0H100C44.7715 0 0 44.7715 0 100Z"
        fill="#F24E1E"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 300C0 355.228 44.7715 400 100 400H200V200H100C44.7715 200 0 244.772 0 300Z"
        fill="#A259FF"
      />
    </SvgIcon>
  );
}
