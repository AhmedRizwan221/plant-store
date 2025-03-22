import { createSlice } from "@reduxjs/toolkit";
import aloe from "../assets/Aloe.webp";
import snake from "../assets/snake.jpg";
import pothos from "../assets/pothos.jpeg";

const initialState = {
  items: [
    { id: 1, name: "Aloe Vera", price: 10, image: aloe },
    { id: 2, name: "Snake Plant", price: 15, image: snake },
    { id: 3, name: "Pothos", price: 12, image: pothos },
  ],
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
});

export default productsSlice.reducer;
