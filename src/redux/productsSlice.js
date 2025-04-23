import { createSlice } from "@reduxjs/toolkit";
import aloe from "../assets/Aloe.webp";
import snake from "../assets/snake.jpg";
import pothos from "../assets/pothos.jpeg";
import money from "../assets/Money-Plant.jpeg";
import parlar from "../assets/Parlar-Palm.jpg";
import lily from "../assets/Peace-Lily.webp";
import prayer from "../assets/Prayer-Plant.jpg";
import tropical from "../assets/Tropical.webp";
import rubber from "../assets/Rubber-Plant.webp";

const initialState = {
  items: [
    { id: 1, name: "Aloe Vera", price: 10, image: aloe },
    { id: 2, name: "Snake Plant", price: 15, image: snake },
    { id: 3, name: "Pothos", price: 12, image: pothos },
    { id: 4, name: "Money Plant", price: 30, image: money },
    { id: 5, name: "Parlar Palm", price: 20, image: parlar },
    { id: 6, name: "Peace Lily", price: 40, image: lily },
    { id: 7, name: "Prayer Plant", price: 18, image: prayer },
    { id: 8, name: "Tropical Plant", price: 20, image: tropical },
    { id: 9, name: "Rubber Plant", price: 24, image: rubber },
  ],
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
});

export default productsSlice.reducer;
