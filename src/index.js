import React from 'react';
import ReactDOM from 'react-dom';
import Inputs from './Inputs';
import Faker from 'faker';
import Card from './card'

class Former extends React.Component
{
    render()
    {
        return (
                <form method="post">
                <Card>
                    <h2>Warning</h2>
                    Aree you sure about this??
                </Card>
                    <Card>
                        <Inputs 
                            name="Manu Joseph" 
                            alt="Manu Avatar" 
                            img={Faker.image.avatar()} 
                            func={this.firstNamer} 
                            blog="Hello Friends Welcome to Manus World"
                        />
                    </Card>
                    <Card>
                        <Inputs 
                            name="Mahith Mangal" 
                            alt ="Mahith Avatar" 
                            img={Faker.image.avatar()} 
                            func={this.lastNamer} 
                            blog="this is mahith area, please move out"
                        />
                    </Card>
                </form>
            );
    }

    firstNamer = (e) =>
    {
        alert("First namer is working")
    }

    lastNamer = (e) =>
    {
        alert("Last namer is working")
    }
}

ReactDOM.render(
    <Former/>,
    document.getElementById('root')
)