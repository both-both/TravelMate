import { useParams } from "react-router-dom";
import { ContentWrapper } from "../../components/layout/ContentWrapper/ContentWrapper";
import { AttractionDetails } from "../../components/modules/AttractionDetails/AttractionDetails";
import { useAttraction } from "../../hooks/useAttractions";

export const AttractionPage = () => {
    const { slug } = useParams();
    const { attraction, isLoading, error } = useAttraction(slug ?? "");

    if (error) return <p role="alert">{error}</p>;
    if (isLoading) return <p>Loading...</p>;
    if (!attraction) return <p>Seværdigheden blev ikke fundet.</p>;

    return (
        <ContentWrapper title={`${attraction.name} | TravelMate`} description={attraction.description}>
            <AttractionDetails attraction={attraction} />
        </ContentWrapper>
    );
};
