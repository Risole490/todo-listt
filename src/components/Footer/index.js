import styled from "styled-components";

const FooterContainer = styled.footer`
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    bottom: 0;
    width: 100vw;
    height: 50px;
    background-color: #007bff;
    color: white;
    font-size: 14px;
`;

const Footer = () => {
    return (
        <FooterContainer>
            <p style={{textAlign:"center"}}>Desenvolvido por <strong>Leoyan</strong> - 2024 <br></br>Todos os direitos reservados</p>
        </FooterContainer>
    );
}

export default Footer;
        