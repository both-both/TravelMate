import { useCountries } from "../../../hooks/useCountries"
import { Container } from "../../elements/Container/Container"

export const CountryList = () => {
    const {countries, error} = useCountries()
    const {language} = useLanguage


if (error) return <p>role = alert</p>

const countryItems = Array.isArray(countries) ? countries : countries.data 
    return (
<>
{countries.map(item => {
    return <Container>
        <img src={new}
        {info.name}></img>
    </Container>
})}
</>
    )
}