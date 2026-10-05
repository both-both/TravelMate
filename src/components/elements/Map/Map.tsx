import { LuExternalLink } from "react-icons/lu";
import { MapFrame, MapLink } from "./Map.styled";
import type { MapProps } from "./Map.types";

// Hvor meget kortet viser omkring punktet, i grader
const ZOOM_AREA = 0.05;

export const Map = ({ lat, lng, title }: MapProps) => {
  const bbox = [
    lng - ZOOM_AREA,
    lat - ZOOM_AREA,
    lng + ZOOM_AREA,
    lat + ZOOM_AREA,
  ].join(",");

  return (
    <>
      <MapFrame
        title={`Kort over ${title}`}
        src={`https://www.openstreetmap.org/export/embed.html?bbox=${bbox}&layer=mapnik&marker=${lat},${lng}`}
        loading="lazy"
      />
      <MapLink
        href={`https://www.openstreetmap.org/?mlat=${lat}&mlon=${lng}#map=14/${lat}/${lng}`}
        target="_blank"
        rel="noreferrer"
      >
        Åbn større kort i OpenStreetMap <LuExternalLink aria-hidden="true" />
      </MapLink>
    </>
  );
};
