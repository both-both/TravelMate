import type { CardProps } from "./Card.types";
import { CardHeading, CardMeta } from "./Card.styled";
import { truncateText } from "../../../utils/txtUtils";
import {
  CardContent,
  CardIcon,
  CardImage,
  CardStyled,
  CardSubtitle,
  CardTitle,
} from "./Card.styled";

export const Card = ({ image, title, subtitle, code, meta }: CardProps) => {
  return (
    <CardStyled>
      <CardImage src={image} alt={title} />

      <CardContent>
        <CardHeading>
          {code && (
            <CardIcon
              src={`https://flagcdn.com/${code.toLowerCase()}.svg`}
              alt={`Flag for ${code}`}
            />
          )}
          <CardTitle>{title}</CardTitle>
        </CardHeading>

        {subtitle && <CardSubtitle>{truncateText(subtitle, 60)}</CardSubtitle>}

        {meta && <CardMeta>📍 {meta}</CardMeta>}
      </CardContent>
    </CardStyled>
  );
};
