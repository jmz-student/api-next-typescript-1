import { NextPage } from 'next';
import Style from "styled-components";

const Title = Style.h1`
    color: red;
    background-color: #C0C0C0;
`;

const Home: NextPage = (porps) => {
    return <Title>HOLA</Title>;
}
export default Home;
