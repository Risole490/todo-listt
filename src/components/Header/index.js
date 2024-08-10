import styled from "styled-components";

const HeaderContainer = styled.div`
    display: flex;
    padding: 10px;
    justify-content: center;
    border-bottom: 1px solid #ccc;
`;

export const Titulo = styled.h1`
    font-size: 22px;
    font-weight: bold;
    font-style: ${props => props.estiloFonte || 'normal'};
`;

const Header = () => {
    return (
        <HeaderContainer>
            <Titulo estiloFonte="italic">Um header daora</Titulo>
        </HeaderContainer>
    );
}

export default Header;
