import { Wrapper, Title } from "./Home.styled";


export default function Home() {
    return (
        <Wrapper>
            <Title>
                Welcome contacts phonebook {''}
                        <span role="img" aria-label="Greeting icon">
          📞
        </span>
            </Title>
        </Wrapper>
    );
};