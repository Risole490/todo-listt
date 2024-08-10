import styled from "styled-components";

const CampoTextoContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: left;
    gap: 5px;
`;

const LabelInput = styled.label`
    font-size: 18px;
    font-weight: bold;
`;

const Input = styled.input`
    font-size: 16px;
    padding: 8px;
    max-width: 430px;
    border: 2px solid #ccc;
    border-radius: 4px;
    box-shadow: 1px 1px 2px #ccc;
    
    &:focus {
        border-color: #007bff;
    }
`;

const CampoTexto = (props) => {
    const enquantoDigita = (evento) => {
        props.aoDigitar(evento.target.value);
    };

    return (
        <CampoTextoContainer>
            <LabelInput>{props.label}</LabelInput>
            <Input value={props.valor} required={props.obrigatorio} placeholder={props.placeholder} onChange={enquantoDigita}/>
        </CampoTextoContainer>
    );
};

export default CampoTexto;