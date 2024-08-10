import styled from "styled-components";
import { Titulo } from "../Header";

const BannerContainer = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 40px 20px 20px 20px;
`;

const Descricao = styled.p`
    font-size: 18px;
    text-align: center;
`;

const Banner = () => {
    return (
        <BannerContainer>
            <Titulo>TODO List</Titulo>
            <Descricao>Uma lista de tarefas simples para você organizar seu dia!</Descricao>
        </BannerContainer>
    );
}

export default Banner;
