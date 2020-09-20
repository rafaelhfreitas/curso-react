import './Counter.css'
import React, { Component } from 'react'


import Display from './Display'
import Buttons from './Buttons'
import Step from './StepForm'
import StepForm from './StepForm'

class Counter extends Component {

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

    // decrement() {
    //     this.setState({
    //         number: this.state.number - this.state.step
    //     })
    // }

    decrement = () => {
        this.setState({
            number: this.state.number - this.state.step
        })
    }


    // setStep = (event) => {
    //     this.setState({
    //         step: +event.target.value
    //     })
    // }

    setStep = (newStep) => {
        this.setState({
            step: newStep
        })
    }

    // render() {
    //     return (
    //         <div className="Counter">
    //              <h2 >Contador</h2>
    //              <h3>{this.state.number}</h3>
    //              <div>
    //                  <label htmlFor="stepInput">Step: </label>
    //                  <input 
    //                     id="stepInput" 
    //                     type="number" 
    //                     value={this.state.step} 
    //                     onChange={this.setStep} />    
    //              </div>
    //              <button onClick={this.increment}>+</button>
    //              <button onClick={_ => this.decrement()}>-</button>
    //         </div>
    //     )
    // }


    render() {
        return (
            <div className="Counter">
                 <h2 >Contador</h2>
                 <Display number={this.state.number}></Display>
                 <StepForm step={this.state.step} setStep={this.setStep}></StepForm>
                 <Buttons 
                    setIncrement={this.increment} 
                    setDecrement={this.decrement}
                />
            </div>
        )
    }


}


export default Counter