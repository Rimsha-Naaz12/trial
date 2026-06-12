import { useState } from "react";

const ProductForm = ({ addProducts }) => {
  const [formdata, setFormdata] = useState({
    title: "",
    price: "",
    category: "",
    description: "",
    image: "",
  });
  const handleChange = (e) => {
    setFormdata({ ...formdata, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    addProducts(formdata);
    setFormdata({
      title: "",
      price: "",
      category: "",
      description: "",
      image: "",
    });
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          value={formdata.title}
          placeholder="Enter Title "
          onChange={handleChange}
        />
        <input
          type="number"
          name="price"
          value={formdata.price}
          onChange={handleChange}
        />
        <input
          type="text"
          name="category"
          value={formdata.category}
          placeholder="Enter category "
          onChange={handleChange}
        />
        <input
          type="text"
          name="description"
          value={formdata.description}
          placeholder="Enter description "
          onChange={handleChange}
        />
        <input
          type="text"
          name="image"
          value={formdata.image}
          placeholder="Enter image URL .. "
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ProductForm;