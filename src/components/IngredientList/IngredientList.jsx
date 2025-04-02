
const IngredientList = (props) => {
  console.log(props)
    return (
      <ul>
        {props.ingredients.map((ingredient, index) =>(
          <li key={index} style={{backgroundColor: ingredient.color}}>{ingredient.name}<span><button onClick={props.addToBurger} className="addBtn" id={index}>+</button></span></li>
        ))}
      </ul>
    )
  };
  
  export default IngredientList;