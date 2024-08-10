import styled from 'styled-components';
import { useState } from 'react';

import Header from './components/Header';
import Banner from './components/Banner';
import Formulario from './components/Form';
import Tarefas from './components/Tarefas';
import Footer from './components/Footer';

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
`

function App() {
  const [tarefas, setTarefas] = useState([]);

  const marcarConcluida = (index) => {
    const novasTarefas = [...tarefas];
    novasTarefas[index].concluida = !novasTarefas[index].concluida;
    setTarefas(novasTarefas);
  };

  const editarTarefa = (index, novoTexto) => {
      const novasTarefas = [...tarefas];
      novasTarefas[index].texto = novoTexto;
      setTarefas(novasTarefas);
  };

  const excluirTarefa = (index) => {
      const novasTarefas = tarefas.filter((_, i) => i !== index);
      setTarefas(novasTarefas);
  };

  const novaTarefaCriada = (tarefa) => {
    setTarefas([...tarefas, tarefa]);
  }

  return (
    <AppContainer>
      <Header />
      <Banner />
      <Formulario aoCriarTarefa={tarefa => novaTarefaCriada(tarefa)}/>
      
      <Tarefas 
        tarefas={tarefas}
        marcarConcluida={marcarConcluida}
        editarTarefa={editarTarefa}
        excluirTarefa={excluirTarefa}
      />
      <Footer />
    </AppContainer>
  );
}

export default App;
