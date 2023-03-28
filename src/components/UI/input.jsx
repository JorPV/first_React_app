import './input.css';

export const TextInput = ({ changeFn }) => {
    return <input type="text" className="input" placeholder='What would you like to drink?' onChange={ changeFn }></input> 
};
