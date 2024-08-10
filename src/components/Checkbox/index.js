import styled from "styled-components";

const CheckboxContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;
`;

const Checkbox = styled.input.attrs({type: 'checkbox'})`
    cursor: pointer;
    width: 15px;
    height: 15px;
    appearance: none;
    background-color: #fff;
    border: 2px solid #ccc;
    border-radius: 2.5px;
    transform: scale(1.4); /* Aumenta o tamanho do checkbox */
    display: flex;
    align-items: center;
    justify-content: center;

    &:checked {
        background-color: #2d6a4f; /* Cor de fundo quando marcado */
        border-color: #2d6a4f; /* Cor da borda quando marcado */
    }

    &:checked::before {
        content: '✔'; /* Símbolo de check */
        font-size: 14px;
        color: white; /* Cor do símbolo */
    }
`;

const CheckboxComponente = (props) => {
    return (
        <CheckboxContainer>
            <Checkbox type="checkbox" checked={props.checked} onChange={props.onChange}/>
        </CheckboxContainer>
    );
};

export default CheckboxComponente;