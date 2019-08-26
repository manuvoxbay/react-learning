import React from 'react';

class Card extends React.Component
{
    render()
    {
        console.log(this.props)
        return (
            <div className="card" style={{"width": "50rem"}}>
                <div className="card-body">
                    <div className="card-text">{this.props.children}</div>
                    <br/>
                    <button className="btn btn-success">Accept</button>
                    <button className="btn btn-warning">Reject</button>
                </div>
            </div>
            );
    }
}

export default Card;