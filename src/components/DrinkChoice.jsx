import { Button } from './UI/Button';

export const DrinkChoice = ({ drink, clickFn }) => {
    return (
            <>
                <h3>You've got it, a {drink.name}</h3>
                <img src={drink.imgUrl} width={100} height={100} alt={drink.alt} />
                <p>Your drink will be ready in a moment</p>
                <Button text={'Change selection'} clickFn={() => clickFn()} />
            </>
    );
};