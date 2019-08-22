import React from 'react';
import ReactDOM from 'react-dom';

class Former extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            value:"manu"
        }
    }
    handleChange=(e) =>
    {
        console.log("inside the method")
    }
    render()
    {
        return <form>
            <select value={this.state.value} onChange={this.handleChange}>
                <option value="">Select</option>
                <option value="manu">Manu</option>
                <option value="anu">Anu</option>
                <option value="anju">Anju</option>
                <option value="kunju">kunju</option>
            </select>
        </form>
    }
}

ReactDOM.render(
    <Former/>,
    document.getElementById('root')
)