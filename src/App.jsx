// src/App.jsx
import IngredientList from './components/IngredientList/IngredientList';
import BurgerStack from './components/BurgerStack/BurgerStack';
import { useState } from 'react';
import './App.css';


const App = () => {
  const availableIngredients = [
    { name: 'Kaiser Bun', color: 'saddlebrown' },
    { name: 'Sesame Bun', color: 'sandybrown' },
    { name: 'Gluten Free Bun', color: 'peru' },
    { name: 'Lettuce Wrap', color: 'olivedrab' },
    { name: 'Beef Patty', color: '#3F250B' },
    { name: 'Soy Patty', color: '#3F250B' },
    { name: 'Black Bean Patty', color: '#3F250B' },
    { name: 'Chicken Patty', color: 'burlywood' },
    { name: 'Lettuce', color: 'lawngreen' },
    { name: 'Tomato', color: 'tomato' },
    { name: 'Bacon', color: 'maroon' },
    { name: 'Onion', color: 'lightyellow' },
    { name: 'Cheddar Cheese', color: '#FDE18B' },
    { name: 'Swiss Cheese', color: '#F1E1A8' },
  ];

  const [ingredients, setIngredients] = useState(availableIngredients)

  const [stack, setStack] = useState([]);

  const addToBurger  = (event) => {
    const addedIngredientIndex = event.target.id;
    setStack([ingredients[addedIngredientIndex], ...stack]);
  }

  const removeFromBurger = (event) => {
    const removedIngredientIndex =  event.target.id;
    const stackCopy = [...stack];
    delete stackCopy[removedIngredientIndex]

    setStack(stackCopy);

  }

  return (
    <main>
      <h1>Burger Stacker</h1>
      <section>
      
      <IngredientList ingredients={ingredients} addToBurger={addToBurger} />
      <BurgerStack stack={stack} removeFromBurger={removeFromBurger}/>
      </section>
    </main>
  );
};

export default App;
