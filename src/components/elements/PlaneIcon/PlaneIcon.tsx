import { PLANE_PATH } from "../../../assets/planePath";

export const PlaneIcon = ({ size = 24 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="-13.5 -13.5 27 27"
    fill="#243b53"
    aria-hidden="true"
  >
    <path d={PLANE_PATH} transform="rotate(-45)" />
  </svg>
);
