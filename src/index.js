import React from 'react';
import ReactDOM from 'react-dom';

function Changer(props)
{
    if(props.val)
    {
        return <h3>New Text changed By Me</h3>
    }
    return <h3>First Text before change</h3>
}
class Btn extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            value:true,
        }
    }
    changer = (e) => {
        this.setState({
            value: !this.state.value
        });
    }
    render()
    {
        return <div>
            <button onClick={this.changer}>Change Test</button>
            <Changer val={this.state.value}/>
        </div>
    }
}

ReactDOM.render(
    <Btn/>,
    document.getElementById('root')
)