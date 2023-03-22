import './DrinkItem.css';

export const DrinkItem = ({ drink, clickFn }) => {
    return (
        <button className="drink-item" onClick={() => clickFn(drink)}>
            <img src={drink.imgUrl} width={40} height={40} alt={drink.alt}/> 
            <p><small>{drink.name}</small></p>
        </button>
    );
};