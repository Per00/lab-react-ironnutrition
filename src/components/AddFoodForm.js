import { Divider, Input } from 'antd';
import { useState } from 'react';

// Iteration 4
function AddFoodForm({ allFoods, setAllFoods }) {
  const [form, setForm] = useState({
    name: '',
    calories: '',
    image: '',
    servings: '',
  });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    // não deixa a página atualizar
    e.preventDefault();

    setAllFoods([...allFoods, form]);
  }

  setForm({ name: '', calories: '', image: '', servings: '' });

  return (
    <form>
      <Divider>Add Food Entry</Divider>

      <label>Name</label>
      <Input
        type="text"
        value={form.name}
        name="name"
        onChange={handleChange}
      />

      <label>Image</label>
      <Input
        type="text"
        value={form.image}
        name="image"
        onChange={handleChange}
      />

      <label>Calories</label>
      <Input
        type="number"
        value={form.calories}
        name="calories"
        onChange={handleChange}
      />

      <label>Servings</label>
      <Input
        type="number"
        value={form.servings}
        name="servings"
        onChange={handleChange}
      />

      <button type="submit" onClick={handleSubmit}>
        Create
      </button>
    </form>
  );
}

export default AddFoodForm;
