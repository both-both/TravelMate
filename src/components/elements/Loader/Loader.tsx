import { LoaderMessage, LoaderStyled, ROUTE } from "./Loader.styled";
import type { LoaderProps } from "./Loader.types";
import { PLANE_PATH } from "../../../assets/planePath";

export const Loader = ({ message = "Planlægger ruten" }: LoaderProps) => {
  return (
    <LoaderStyled role="status" aria-live="polite">
      <svg viewBox="0 0 240 100" aria-hidden="true">
        <path
          className="tplane-route"
          d={ROUTE}
          fill="none"
          strokeWidth={1.5}
          strokeDasharray="1 6"
          strokeLinecap="round"
        />
        <path
          className="tplane-trail"
          d={ROUTE}
          pathLength={100}
          fill="none"
          strokeWidth={2}
          strokeLinecap="round"
          strokeDasharray={100}
          strokeDashoffset={100}
        />
        <circle className="tplane-dot" cx={20} cy={74} r={3.5} />
        <circle className="tplane-dot" cx={220} cy={44} r={3.5} />
        <g className="tplane-plane">
          <path transform="scale(0.85)" d={PLANE_PATH} />
        </g>
      </svg>

      {message ? <LoaderMessage>{message}</LoaderMessage> : null}
    </LoaderStyled>
  );
};
