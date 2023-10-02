import { Component } from "react";
import './recado.css'
export default class Recado extends Component{
    

    //herdando o comportamento de component react
    constructor(props){
        super(props);
        //React gerencia o estado de um componente por meio da propriedade state
        //O estado de um componente é imutável.
        //É proibido, com exceção da inicialização, alterar diretamente o estado de um componente
        //Somente React altera o estado de um componente, e isso deve ser feito chamando
        //o método setState.
        this.state={
            "conteudo":props.conteudo
        };
        /*if(this.conteudo === ""){
            this.conteudo="Deixe aqui o seu recado";
        }*/
    }
    
    atualizarRecado(){
        setTimeout(()=>{
            this.setState({"conteudo": new Date().toLocaleTimeString(),
        });
        this.atualizarRecado();
        },1000);
    }

    //o método componentDidMount é herdado da classe pai Component e sempre será
    //executado quando o componente concluir a sua renderização
    //React, ao concluir a renderização do componente, executa o método ComponentDidMount
    // Ou seja, programador, acabei de renderizar seu componente
    componentDidMount(){
        if(this.state.conteudo===""){
            this.atualizarRecado();
        }
    }

    componentDidUpdate(){
        console.log("O componente foi atualizado!");

    }

    // todo componente react deve possuir o método render
    //override no método render da classe pai
    render(){
        return(
            <div className="recado">
                <p>{this.state.conteudo}</p>
            </div>
        )
    }
}