import React from 'react';

const Data = (props) => {
    const { countryData } = props;
    return (
        <div className="details">
            This ip address belongs to a person in <span>{countryData.emoji}</span> <span>{countryData.name}</span>.
            <br /><br />
            He / She can speak <span>{countryData.languages[0].name}</span> and spend 
            <span> {countryData.currency}</span> in his / her country.
            <br /><br />
            The telephone code of the country is <span>{countryData.phone}</span>
        </div>
    );
}

export default Data;