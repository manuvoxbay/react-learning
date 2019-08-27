import React from 'react';
import ReactDOM from 'react-dom';

class Starter extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            lat:null,
            errorMsg:null
        }

        navigator.geolocation.watchPosition(
            (position) => {
                this.setState({
                    lat:position.coords.latitude
                })
            },
            (err) => {
                console.log(err.message);    
                this.setState({
                    errorMsg:err.message
                })
            });
    }
    render()
    {
        if(this.state.lat && !this.state.errorMsg)
        {
            return <div> <h2>Lattiude: {this.state.lat} </h2><br/></div>
        }
        if(!this.state.lat && this.state.errorMsg)
        {
            return (
                <div>
                     Error: <font color="red">{this.state.errorMsg}</font>
                </div>
            );
        }

        return (
            <div> <font color="green">Loading . ..</font></div>
        );

    }
}


ReactDOM.render(
    <Starter/>,
    document.getElementById('root')
    );