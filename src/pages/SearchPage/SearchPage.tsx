import { Link } from "react-router-dom";
import { useSearchFilter } from "../../hooks/useSearchFilter";
import { Hero } from "../../components/modules/Hero/Hero";
import { Section } from "../../components/layout/Section/Section";
import { ListStyled } from "../../styled/Elements";
import { Card } from "../../components/elements/Card/Card";
import { ContentWrapper } from "../../components/layout/ContentWrapper/ContentWrapper";

export const SearchPage = () => {
  const { query, groups, resultCount } = useSearchFilter();

  return (
    <ContentWrapper title="Søgeresultater">
      description={`Søgeresultater for ${query}`}
      showTitle hero={<Hero />}
      {!query ? (
        <p>Indtast et søgeord i søgefeltet.</p>
      ) : resultCount === 0 ? (
        <p>Ingen resultater for "{query}".</p>
      ) : (
        groups.map(
          (group) =>
            group.results.length > 0 && (
              <Section key={group.path} title={group.title}>
                <ListStyled>
                  {group.results.map((item) => (
                    <Link key={item._id} to={`/${group.path}/${item.slug}`}>
                      <Card
                        image={`${item.image}?w=500&auto=format`}
                        title={item.name}
                        subtitle={item.description}
                      />
                    </Link>
                  ))}
                </ListStyled>
              </Section>
            ),
        )
      )}
    </ContentWrapper>
  );
};
