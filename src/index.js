import React from 'react';
import ReactDOM from 'react-dom';

class Former extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state = {
            value:""
        };
    }

    handleChange = (e) => 
    {
        this.setState({
            value: e.target.value
        });
    }
    render()
    {
        return <form>
            <textarea onChange={this.handleChange} value={this.state.value}/>
            <h5>{this.state.value}</h5>
        </form>
    }
}

ReactDOM.render(
    <Former/>,
    document.getElementById('root')
)