import { IIconProps } from "../../../../types/proptypes";

export function Envelope(props: IIconProps) {
  const { fill, size, className } = props;

  return (
    <svg
      width={size || 24}
      height={size || 24}
      viewBox="0 0 24 24"
      fill={fill || "currentColor"}
      className={className}
    >
      <path d="M2.25 0C1.00781 0 0 1.00781 0 2.25C0 2.95781 0.332813 3.62344 0.9 4.05L11.1 11.7C11.6344 12.0984 12.3656 12.0984 12.9 11.7L23.1 4.05C23.6672 3.62344 24 2.95781 24 2.25C24 1.00781 22.9922 0 21.75 0H2.25ZM0 5.25V15C0 16.6547 1.34531 18 3 18H21C22.6547 18 24 16.6547 24 15V5.25L13.8 12.9C12.7312 13.7016 11.2688 13.7016 10.2 12.9L0 5.25Z" />
    </svg>
  );
}