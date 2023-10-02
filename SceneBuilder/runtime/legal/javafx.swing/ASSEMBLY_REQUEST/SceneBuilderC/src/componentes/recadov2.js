import React, { Component } from "react";

class Cronometro extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tempo: 0,
      emExecucao: false,
    };
  }

  componentDidMount() {
    // Removido o método iniciarCronometro do componentDidMount
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  atualizarCronometro = () => {
    if (this.state.emExecucao) {
      this.intervalId = setInterval(() => {
        this.setState((prevState) => ({
          tempo: prevState.tempo + 1,
        }));
      }, 1000);
    }
  };

  iniciarCronometro = () => {
    this.setState({ emExecucao: true });
    this.atualizarCronometro();
  };

  pararCronometro = () => {
    clearInterval(this.intervalId);
    this.setState({ emExecucao: false });
  };

  zerarCronometro = () => {
    clearInterval(this.intervalId);
    this.setState({ tempo: 0, emExecucao: false });
  };

  render() {
    return (
      <div className="cronometro">
        <p>{this.state.tempo} segundos</p>
        <button onClick={this.iniciarCronometro}>Iniciar</button>
        <button onClick={this.pararCronometro}>Parar</button>
        <button onClick={this.zerarCronometro}>Zerar</button>
      </div>
    );
  }
}

export default Cronometro;