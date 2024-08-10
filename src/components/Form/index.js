import styled from "styled-components";
import { useState } from 'react';

import CampoTexto from '../CampoTexto';

const AdicionarTarefaContainer = styled.form`
    display: flex;
    max-width: 430px;
    flex-direction: column;
    justify-content: center;
    align-items: left;
    gap: 8px;
    margin: 0px 20px 20px 20px;
`;

const Botao = styled.button`
    font-size: 16px;
    font-weight: bold;
    padding: 5px;
    cursor: pointer;
    width: 100px;
    border: none;
    border-radius: 4px;
    background-color: #007bff;
    color: white;
`;

const Formulario = (props) => {
    const [tarefa, setTarefa] = useState('');
    const [concluida, setConcluida] = useState(false);

    const aoCriar = (evento) => {
        evento.preventDefault(); // Evita que a página seja recarregada
        props.aoCriarTarefa({texto: tarefa, concluida}); // Chama a função aoCriarTarefa que foi passada como propriedade

        setTarefa('');
        setConcluida(false);
    };

    return (
        <AdicionarTarefaContainer onSubmit={aoCriar}>
            <CampoTexto  obrigatorio={true} label="Adicionar tarefa" placeholder="Exemplo: Comprar ração" valor={tarefa} aoDigitar={valor => setTarefa(valor)}/>
            <Botao>Criar</Botao>
        </AdicionarTarefaContainer>
    );

}

export default Formulario;
