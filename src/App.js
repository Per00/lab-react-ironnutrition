import './App.css';
import data from './foods.json';
import { useState } from 'react';

import { Row, Divider, Button } from 'antd';
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';

function App() {
  const [allFoods, setAllFoods] = useState(data);
  console.log(allFoods);

  return (
    <div className="App">
      {/* Display Add Food component here */}
      <AddFoodForm allFoods={allFoods} setAllFoods={setAllFoods} />

      <Button> Hide Form / Add New Food </Button>

      {/* Display Search component here */}

      <Divider>Food List</Divider>

      <Row style={{ width: '100%', justifyContent: 'center' }}>
        {/* Render the list of Food Box components here */}
        {allFoods.map((food) => {
          return (
            <FoodBox
              food={food}
              allFoods={allFoods}
              setAllFoods={setAllFoods}
            />
          );
        })}
      </Row>
    </div>
  );
}

export default App;
