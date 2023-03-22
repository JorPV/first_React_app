import './input.css';

export const TextInput = ({ changeFn }) => {
    return <input type="text" className="input" placeholder='What is it going to be?' onChange={ changeFn }></input> 
};
