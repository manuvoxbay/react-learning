import React from 'react';

class Inputs extends React.Component
{
    render()
    {
        return (
            <div className="row">
                <div className="col-md-2">
                    <img alt={this.props.alt} onClick={this.props.func} src={this.props.img}/>
                </div>
                <div className="col-md-3">
                <br/>
                    <b>{this.props.name}</b><br/><br/>
                    {this.props.blog}
                </div>
            </div>
            )
    }
}

export default Inputs;