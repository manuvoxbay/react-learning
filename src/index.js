import React from 'react'
import ReactDOM from 'react-dom'

class Inc extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state = {
            counter: 0
        }
    }
    incrementer = (e) =>
    {
        e.preventDefault();
        this.setState({
            counter: this.state.counter + 1
        })

    }

    render()
    {
        return <a href="https://google.com" onClick={this.incrementer}>Counter {this.state.counter}</a>
    }
}

ReactDOM.render(
    <Inc/>,
    document.getElementById('root')
)
