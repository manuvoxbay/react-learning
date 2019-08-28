import React from 'react';
import ReactDOM from 'react-dom';
import Weather from './weather';
import Spinner from './spinner';

class Starter extends React.Component
{
   state = { 
            lat:null,
            errorMsg:null
        }

    componentDidMount()
    {
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

    renderContent()
    {
        if(this.state.lat && !this.state.errorMsg)
        {
            return (<div>
                <Weather lat={this.state.lat}/>
                </div>
            );
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
            <Spinner/>
        );
    }


    render()
    {
        return (
            <div>
                {this.renderContent()}
            </div>
        );

    }
}


ReactDOM.render(
    <Starter/>,
    document.getElementById('root')
    );