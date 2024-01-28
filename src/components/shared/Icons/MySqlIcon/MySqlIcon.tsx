import { IIconProps } from "../../../../types/components/icon";

export function MySqlIcon(props: IIconProps) {
  const { fill, size, className } = props;

  return (
    <svg
      width={size || 24}
      height={size || 24}
      viewBox="0 0 24 24"
      fill={fill || "none"}
      className={className}
    >
      <g clip-path="url(#clip0_141_26)">
        <path
          d="M24.1291 23.412L23.6211 22.928C23.3701 22.597 23.1031 22.304 22.8121 22.037L22.8071 22.033C22.5084 21.7616 22.1981 21.5036 21.8761 21.259C21.6181 21.0816 21.2634 20.868 20.8121 20.618C20.4411 20.451 20.1511 20.158 19.9941 19.794L19.9901 19.784L19.9421 19.76C20.1541 19.739 20.3481 19.7 20.5341 19.645L20.5111 19.651L21.0811 19.494C21.3171 19.42 21.5901 19.372 21.8731 19.361H21.8791C22.1771 19.349 22.4581 19.301 22.7261 19.222L22.7011 19.228C22.8304 19.196 22.9634 19.1596 23.1001 19.119C23.2368 19.0783 23.3538 19.042 23.4511 19.01V18.841C23.3544 18.6963 23.2374 18.531 23.1001 18.345C22.9691 18.167 22.8221 18.012 22.6571 17.877L22.6521 17.873C22.2328 17.5023 21.7984 17.1436 21.3491 16.797C20.9531 16.488 20.5041 16.173 20.0381 15.881L19.9701 15.841C19.7241 15.679 19.4421 15.529 19.1451 15.406L19.1111 15.394C18.8124 15.2726 18.5181 15.1396 18.2281 14.995C18.1311 14.947 18.0181 14.905 17.9011 14.876L17.8901 14.874C17.7731 14.85 17.6731 14.79 17.6001 14.705L17.5991 14.704C17.4611 14.522 17.3401 14.315 17.2441 14.095L17.2361 14.075C17.1394 13.849 17.0348 13.632 16.9221 13.424C16.6801 12.956 16.4461 12.4803 16.2201 11.997C15.9941 11.5136 15.7771 11.0296 15.5691 10.545C15.4244 10.2223 15.2914 9.89998 15.1701 9.57798C15.0361 9.22398 14.8851 8.92098 14.7091 8.63598L14.7221 8.65898C14.2901 7.92298 13.8591 7.29498 13.3911 6.69798L13.4191 6.73598C12.9561 6.15198 12.4761 5.62998 11.9601 5.14598L11.9521 5.13898C11.4431 4.66098 10.8951 4.20498 10.3201 3.78298L10.2711 3.74798C9.67376 3.31398 9.02043 2.88664 8.31109 2.46598C8.02609 2.29798 7.69509 2.16098 7.34609 2.07298L7.32009 2.06698L6.20709 1.78898L5.57809 1.74098C5.36876 1.72498 5.15909 1.71698 4.94909 1.71698C4.80109 1.63898 4.67409 1.54598 4.56209 1.43798C4.45209 1.33298 4.33309 1.23398 4.20909 1.14298L4.19909 1.13598C3.59409 0.782977 2.89109 0.459977 2.15609 0.205977L2.07109 0.179977C1.87809 0.0669766 1.64609 0.000976562 1.39909 0.000976562C1.22309 0.000976562 1.05409 0.0349766 0.900094 0.0959766L0.909094 0.0929766C0.529094 0.243977 0.239094 0.550977 0.114094 0.932977L0.111094 0.942977C0.0380938 1.11498 -0.00390625 1.31398 -0.00390625 1.52398C-0.00390625 1.89198 0.126094 2.22898 0.343094 2.49198L0.341094 2.48898C0.70376 2.97231 0.98176 3.35231 1.17509 3.62898C1.31976 3.82298 1.46909 4.02464 1.62309 4.23398C1.76409 4.42198 1.88909 4.63698 1.99009 4.86398L1.99809 4.88498C2.05409 5.00398 2.10309 5.14598 2.13909 5.29198L2.14209 5.30798C2.17409 5.44531 2.21443 5.59464 2.26309 5.75598C2.40776 6.12664 2.54476 6.50664 2.67409 6.89598C2.81509 7.32098 2.97109 7.68098 3.15209 8.02398L3.13309 7.98398C3.22976 8.16131 3.32676 8.33464 3.42409 8.50398C3.52143 8.67331 3.62609 8.83864 3.73809 8.99998C3.80309 9.09798 3.88509 9.17898 3.97909 9.24198L3.98209 9.24398C4.08109 9.31598 4.14609 9.42898 4.15109 9.55698C4.03709 9.72498 3.96009 9.92698 3.93409 10.144L3.93309 10.15C3.89809 10.403 3.84809 10.628 3.78009 10.845L3.78809 10.815C3.56509 11.481 3.43709 12.249 3.43709 13.046C3.43709 13.304 3.45009 13.558 3.47709 13.809L3.47409 13.778C3.53409 14.736 3.82309 15.616 4.28609 16.378L4.27209 16.353C4.46909 16.648 4.68009 16.905 4.91309 17.14C5.08109 17.328 5.32509 17.446 5.59709 17.446C5.74909 17.446 5.89309 17.409 6.01909 17.343L6.01409 17.345C6.36409 17.219 6.61309 16.899 6.63109 16.518V16.516C6.67909 16.042 6.75109 15.618 6.85009 15.204L6.83709 15.271C6.86109 15.208 6.87509 15.136 6.87509 15.06C6.87509 15.045 6.87409 15.03 6.87309 15.015V15.017C6.86509 14.9443 6.90943 14.8756 7.00609 14.811V14.859C7.10276 15.085 7.20343 15.3106 7.30809 15.536C7.41276 15.7613 7.52143 15.987 7.63409 16.213C7.92909 16.662 8.24209 17.054 8.58609 17.415L8.58309 17.412C8.92809 17.784 9.30409 18.118 9.71009 18.413L9.73209 18.428C9.94409 18.59 10.1301 18.765 10.2981 18.956L10.3021 18.96C10.4601 19.146 10.6491 19.299 10.8621 19.414L10.8721 19.419V19.395H10.9201C10.8811 19.308 10.8181 19.238 10.7401 19.19L10.7381 19.189C10.6591 19.145 10.5911 19.101 10.5271 19.053L10.5321 19.056C10.3874 18.9113 10.2381 18.75 10.0841 18.572C9.93009 18.394 9.78909 18.2246 9.66109 18.064C9.32243 17.596 8.99943 17.107 8.69209 16.597C8.38476 16.087 8.09443 15.5686 7.82109 15.042C7.69176 14.784 7.56676 14.518 7.44609 14.244C7.32543 13.97 7.20843 13.704 7.09509 13.446C7.04609 13.347 7.01209 13.233 6.99909 13.112V13.107C6.99309 12.992 6.92709 12.893 6.83109 12.842L6.82909 12.841C6.70809 13.047 6.57409 13.225 6.42109 13.386L6.42209 13.385C6.26309 13.552 6.13309 13.749 6.04009 13.965L6.03509 13.978C5.89409 14.32 5.79109 14.717 5.74609 15.132L5.74409 15.151C5.69609 15.5783 5.64776 16.0176 5.59909 16.469L5.55109 16.493L5.52709 16.517C5.26709 16.464 5.05309 16.298 4.93709 16.074L4.93509 16.069C4.81376 15.835 4.70509 15.605 4.60909 15.379C4.36109 14.742 4.20709 14.005 4.18609 13.235V13.226C4.17709 13.104 4.17309 12.961 4.17309 12.818C4.17309 12.152 4.27809 11.51 4.47209 10.908L4.46009 10.952C4.50809 10.7746 4.61276 10.476 4.77409 10.056C4.93543 9.63598 4.96776 9.34564 4.87109 9.18498C4.82109 9.01998 4.72809 8.88098 4.60609 8.77498L4.60509 8.77398C4.48309 8.66798 4.37209 8.55698 4.27009 8.43898L4.26709 8.43498C4.15443 8.27231 4.04576 8.09898 3.94109 7.91498C3.83643 7.73098 3.74376 7.54964 3.66309 7.37098C3.49809 6.98898 3.32909 6.50998 3.18909 6.01798L3.16709 5.92898C3.00809 5.36398 2.83109 4.88598 2.62109 4.42598L2.64709 4.48998C2.53609 4.23798 2.40709 4.01998 2.25709 3.82098L2.26309 3.82898C2.10043 3.61164 1.95509 3.40598 1.82709 3.21198C1.66443 3.00264 1.50309 2.80098 1.34309 2.60698C1.18009 2.40998 1.03509 2.18798 0.917094 1.94998L0.908094 1.92998C0.860094 1.83298 0.818094 1.71998 0.789094 1.60298L0.787094 1.59198C0.776094 1.55698 0.770094 1.51598 0.770094 1.47498C0.770094 1.39298 0.794094 1.31598 0.836094 1.25198L0.835094 1.25398C0.846094 1.19798 0.872094 1.14898 0.908094 1.10898C0.947094 1.07398 0.997094 1.04798 1.05109 1.03698H1.05309C1.13809 0.981976 1.24109 0.948977 1.35309 0.948977C1.43709 0.948977 1.51809 0.967976 1.58909 1.00198L1.58609 1.00098C1.80509 1.06298 1.98209 1.12498 2.15509 1.19598L2.11909 1.18298C2.42509 1.31231 2.70743 1.43731 2.96609 1.55798C3.26409 1.69998 3.51809 1.84998 3.75809 2.01698L3.74009 2.00498C3.86943 2.08564 3.99843 2.17431 4.12709 2.27098C4.25576 2.36764 4.39276 2.46464 4.53809 2.56198H4.87709C5.13509 2.56198 5.40909 2.57431 5.69909 2.59898C5.99209 2.62198 6.26309 2.67698 6.52109 2.76298L6.49709 2.75598C6.97809 2.89898 7.39109 3.06798 7.78309 3.27098L7.74209 3.25198C8.13743 3.45331 8.51243 3.66698 8.86709 3.89298C9.45609 4.25998 9.96509 4.63598 10.4441 5.04698L10.4271 5.03298C10.9271 5.46098 11.3811 5.89998 11.8071 6.36398L11.8171 6.37598C12.2331 6.82998 12.6301 7.32298 12.9931 7.83998L13.0241 7.88698C13.3581 8.35898 13.6951 8.90498 13.9981 9.47098L14.0401 9.55598C14.1211 9.70998 14.2031 9.89898 14.2741 10.092L14.2851 10.125C14.3498 10.3103 14.4221 10.5003 14.5021 10.695C14.6794 11.0983 14.8694 11.5053 15.0721 11.916C15.2748 12.3266 15.4648 12.726 15.6421 13.114L16.1741 14.275C16.3611 14.681 16.5701 15.031 16.8131 15.354L16.8021 15.339C17.0051 15.556 17.2761 15.708 17.5801 15.761L17.5881 15.762C17.9561 15.854 18.2661 15.958 18.5661 16.081L18.5191 16.064C18.6621 16.129 18.8461 16.198 19.0351 16.259L19.0751 16.27C19.2871 16.335 19.4711 16.421 19.6401 16.529L19.6311 16.524C19.9581 16.707 20.2351 16.887 20.4991 17.083L20.4781 17.068C20.7521 17.2693 21.0261 17.4593 21.3001 17.638C21.4294 17.7346 21.6464 17.8756 21.9511 18.061C22.2558 18.2463 22.4171 18.4196 22.4351 18.581C22.3211 18.577 22.1861 18.574 22.0511 18.574C21.5591 18.574 21.0751 18.606 20.6011 18.668L20.6571 18.662C20.1211 18.734 19.6351 18.865 19.1781 19.052L19.2181 19.038C19.1051 19.087 18.9701 19.132 18.8301 19.167L18.8111 19.171C18.6691 19.192 18.5591 19.306 18.5451 19.448C18.6061 19.524 18.6551 19.613 18.6881 19.709L18.6901 19.715C18.7241 19.817 18.7651 19.905 18.8151 19.987L18.8121 19.981C18.9311 20.192 19.0591 20.374 19.2031 20.542L19.1991 20.537C19.3401 20.711 19.4991 20.862 19.6751 20.991L19.6821 20.996C19.8448 21.1253 20.0141 21.2583 20.1901 21.395C20.3511 21.521 20.5331 21.645 20.7221 21.757L20.7461 21.77C21.0301 21.944 21.3601 22.11 21.7041 22.249L21.7501 22.265C22.1241 22.415 22.4451 22.589 22.7431 22.796L22.7271 22.785C22.9211 22.8976 23.1144 23.0226 23.3071 23.16C23.4998 23.2973 23.6851 23.4303 23.8631 23.559C23.9361 23.631 24.0001 23.711 24.0541 23.798L24.0571 23.803C24.1481 23.907 24.2741 23.978 24.4171 23.996H24.4201V23.948C24.3321 23.881 24.2671 23.788 24.2361 23.681L24.2351 23.677C24.2101 23.575 24.1731 23.486 24.1231 23.404L24.1251 23.408L24.1291 23.412ZM5.55309 4.20698C5.42376 4.20698 5.30276 4.21098 5.19009 4.21898C5.07509 4.22698 4.96809 4.24798 4.86709 4.28198L4.87609 4.27898V4.30298H4.92409C4.98876 4.39964 5.07009 4.50831 5.16809 4.62898C5.26609 4.74964 5.35476 4.86664 5.43409 4.97998L5.82109 5.77798L5.86909 5.75398C5.98209 5.67198 6.06909 5.56198 6.12109 5.43298L6.12309 5.42798C6.17509 5.28898 6.20509 5.12698 6.20509 4.95898C6.20509 4.94098 6.20509 4.92298 6.20409 4.90498V4.90798C6.15909 4.86398 6.12209 4.81198 6.09609 4.75398L6.09509 4.75098L6.01409 4.56898C5.96109 4.48498 5.88709 4.41898 5.80009 4.37698L5.79709 4.37598C5.70309 4.33098 5.62309 4.27398 5.55309 4.20698Z"
          fill="#00758F"
        />
      </g>
      <defs>
        <clipPath id="clip0_141_26">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
