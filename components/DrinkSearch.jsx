import { TextInput } from './UI/input';
import { useState } from 'react';
import { availableDrinks } from '../utils/data';
import { DrinkList } from './DrinkList';

export const DrinkSearch = ({ clickFn }) => {
    const [searchField, setSearchField] = useState ('');

    const handleChange = event => setSearchField(event.target.value);    

    const matchedDrinks = availableDrinks.filter((drink) => {
        return drink.name.toLowerCase().includes(searchField.toLowerCase());
    });

    return (
        <>  
            <label>Find your favourite drink:</label>
            <TextInput changeFn={handleChange}/>
            <br />
            <div className="wrapper">
                <DrinkList clickFn={clickFn} drinks={matchedDrinks}/>
            </div>
        </>
    );
};