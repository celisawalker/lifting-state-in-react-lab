const BurgerStack = (props) => {
    return (
      <ul>
        {props.stack.map((ingredient, index) => (
          <li key={index} style={{backgroundColor: ingredient.color}}>{ingredient.name}<span><button onClick={props.removeFromBurger} id={index} className='removeBtn'>X</button></span></li>
        ))}
      </ul>
    )
  };
  
  export default BurgerStack;