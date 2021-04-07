import React, { Component } from 'react'

export default class Counter extends Component {
    constructor(props) {
        super(props)

        this.state = {
            count: props.initialCount
        }
    }

    changeAmount(amount) {
        this.setState(prevState => {
            return { count: prevState.count + amount }
        })
    }

    render() {
        return (
            <div>
                <button onClick={() => this.changeAmount(-1)}>-</button>
                <span>{this.state.count}</span>
                <button onClick={() => this.changeAmount(1)}>+</button>
          </div>
        )
    }
}
