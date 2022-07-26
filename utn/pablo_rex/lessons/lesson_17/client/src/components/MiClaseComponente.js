import { Component } from 'react';


class MiClaseComponente extends Component {

  constructor(props) {
    super(props);
    this.state = {
      contador: 0
    }
    this.handleClick = this.handleClick.bind(this);
  }



  render() {

    return <div><h1>Hola desde Mi Clase Componente</h1>
      <div>Este es un botón incremental</div>
      <span id="contador_numero">{this.state.contador}</span>
      <button onClick={this.handleClick}>Incrementar</button>
    </div>
  }
  handleClick(props) {
    console.log("le di click")
    this.setState({ contador: this.state.contador + 1 });
    // this.setState({
    //   contador: this.state.contador + 1
    // })
  }

  componentDidMount() {

  }

  componentWillUnmount() {


  }
}





export default MiClaseComponente