import TelaCadastroCliente from "./telasCadastro/TelaCadastroCliente";
import TelaCadastroProduto from "./telasCadastro/TelaCadastroProduto";
import Tela404 from "./telasCadastro/Tela404";
import TelaMenu from "./telasCadastro/TelaMenu";
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {
            //Os caminhos (path) devem ser organizados do mais específico para o mais geral
          }
          <Route path="/clientes" element={<TelaCadastroCliente/>} />
          <Route path="/produtos" element={<TelaCadastroProduto/>} />
          <Route path="/" element={<TelaMenu/>}/>  
          {
            //... demais telas de cadastro
          }
          <Route path="*" element={<Tela404/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
