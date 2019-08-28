import React from 'react';
import './weather.css';

const getConfig = {
    winter : {
        text :  'We have a beautiful winter season now',
        iconName : 'snowflake'
    },
    summer:{
        text:'Oh! We got some sommer season',
        iconName : 'sun'
    }
}

class Weather extends React.Component
{
    render()
    {
        const season = this.checker(this.props.lat,new Date().getMonth());
        const result = getConfig[season];
               
        const re = result['text'];
        const ress =result['iconName'];

        return (<div className={`${season} weather`}>
                    <i className={`left-icon massive ${ress} icon`}/>
                    <h2>{re}</h2>    
                    <i className={`right-icon massive ${ress} icon`}/>
                </div>
            );
    }
    checker(lat, month)
    {
        if(month>2 && month >9)
        {
            return lat > 0 ? 'summer':'winter';
        }
        else
        {
            return lat > 0 ? 'winter':'summer';
        }
    }
}



export default Weather;