import './Counter.css'
import React, { Component } from 'react'

class Counter extends Component {

    // constructor(props) {
    //     super(props)

    //     this.state = {
    //         number: props.initialNumber
    //     }
    
    // }


    state = {
        number: this.props.initialNumber || 0,
        step: this.props.step || 5
    }

    // constructor(props){
    //     super(props)

    //     this.increment = this.increment.bind(this)
    // }


    increment = () => {
        this.setState({
            number: this.state.number + this.state.step
        })
         
    }

    decrement() {
        this.setState({
            number: this.state.number - this.state.step
        })
    }


    setStep = (event) => {
        this.setState({
            step: +event.target.value
        })
    }

    render() {
        return (
            <div className="Counter">
                 <h2 >Contador</h2>
                 <h3>{this.state.number}</h3>
                 <div>
                     <label htmlFor="stepInput">Step: </label>
                     <input 
                        id="stepInput" 
                        type="number" 
                        value={this.state.step} 
                        onChange={this.setStep} />    
                 </div>
                 <button onClick={this.increment}>+</button>
                 <button onClick={_ => this.decrement()}>-</button>
                 <p>Número inicial: {this.state.number}</p>
            </div>
        )
    }


}


export default Counter