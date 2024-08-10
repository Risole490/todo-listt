import styled from "styled-components";
import { useState } from 'react';
import CheckboxComponente from "../Checkbox";

const TarefasContainer = styled.div`
    margin-top: 40px;
    text-align: center;
`;

const ListaTarefas = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: left;
    max-width: 430px;
    margin: 20px
`;

const Tarefa = styled.li`
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 18px;
    padding: 10px;
    border: 2px solid #ccc;
    border-radius: 3px;
    text-align: left;
`;

const TarefaDiv = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`;

const IconesTarefa = styled.div`
    display: flex;
    gap: 10px;
`;

const tarefaConcluida = {
    textDecoration: 'line-through',
    color: '#ccc',
    fontStyle: 'italic'
};

const editandoTarefa = {
    padding: '5px',
    border: '1px solid #ccc',
    borderRadius: '3px',
    fontSize: '18px',
};


const Tarefas = (props) => {
    const [editandoIndex, setEditandoIndex] = useState(null);
    const [novoTexto, setNovoTexto] = useState('');

    const iniciarEdicao = (index, texto) => {
        setEditandoIndex(index);
        setNovoTexto(texto);
    };

    const salvarEdicao = (index) => {
        props.editarTarefa(index, novoTexto);
        setEditandoIndex(null);
        setNovoTexto('');
    };

    return (
        props.tarefas.length > 0 ? 
        (
            <TarefasContainer>
                {props.tarefas.map((tarefa, index) => (
                    <ListaTarefas key={index}>
                        <Tarefa>
                            <TarefaDiv>
                                <CheckboxComponente 
                                    checked={tarefa.concluida}
                                    onChange={() => props.marcarConcluida(index)}
                                />

                                {editandoIndex === index ? (
                                    <input 
                                        type="text"
                                        style={editandoTarefa} 
                                        value={novoTexto} 
                                        onChange={(e) => setNovoTexto(e.target.value)} 
                                        onBlur={() => salvarEdicao(index)}
                                        onKeyDown={(e) => {
                                            if (e.key === 'Enter') {
                                                salvarEdicao(index);
                                            }
                                        }}
                                    />
                                ) : (
                                    <span onClick={() => iniciarEdicao(index, tarefa.texto)}>
                                        {tarefa.concluida ? <span style={tarefaConcluida}>{tarefa.texto}</span> : tarefa.texto}
                                    </span>
                                )}
                            </TarefaDiv>

                            <IconesTarefa >
                                <img 
                                    src="../../images/editar.svg" 
                                    alt="Editar tarefa" 
                                    onClick={() => {iniciarEdicao(index, tarefa.texto);}} 
                                />

                                <img 
                                    src="../../images/lixeira.svg" 
                                    alt="Remover tarefa" 
                                    onClick={() => props.excluirTarefa(index)}
                                />
                            </IconesTarefa>
                        </Tarefa>
                    </ListaTarefas>
                ))}
            </TarefasContainer>
        ) : (
            <TarefasContainer>
                <div>Nenhuma tarefa cadastrada ainda</div>
            </TarefasContainer>
        )
    );
}

export default Tarefas;