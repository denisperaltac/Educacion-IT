import React, { Component } from "react";

class Reloj extends Component {
  componentWillUnmount() {
    console.log(3, "Esto es la fase 3. El componente a sido eliminado del DOM");
  }
  render() {
    return (
      <>
        <h3>{this.props.hora}</h3>
      </>
    );
  }
}

export default class CicloVida extends Component {
  constructor(props) {
    super(props);

    console.log(0, "El componente se inicializa, aún No esta en el DOM");

    this.state = {
      hora: new Date().toLocaleTimeString(),
      visible: false,
    };

    this.temporizador = null;
  }

  componentDidMount() {
    console.log(1, "El componenete ya se encuentra en el DOM");
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(2, "El estado o las props cambiaron");
  }

  iniciar = () => {
    this.tictac();
    this.setState({
      visible: true,
    });
  };

  detener = () => {
    clearInterval(this.temporizador);
    this.setState({
      visible: false,
    });
  };

  tictac = () => {
    this.temporizador = setInterval(() => {
      this.setState({
        hora: new Date().toLocaleTimeString(),
      });
    }, 1000);
  };

  render() {
    console.log(4, "El componente se dibuja o redibuja en DOM");
    return (
      <>
        <h2>Elemento Renderizado</h2>
        <button onClick={this.iniciar}>Iniciar</button>
        <button onClick={this.detener}>Detener</button>
        {this.state.visible && <Reloj hora={this.state.hora} />}
      </>
    );
  }
}
