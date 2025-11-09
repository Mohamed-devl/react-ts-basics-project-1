// src/data/data.ts
import { v4 as uuid } from "uuid";
import type { IFormInput, IProduct } from "../interfaces";

export const productList: IProduct[] = [
  {
    id: uuid(),
    title: "Luxury Car",
    description:
      "A high-end sports car with elegant design and advanced features.",
    imageURL:
      "https://images.pexels.com/photos/210019/pexels-photo-210019.jpeg",
    price: "150000",
    colors: ["black", "red", "silver"],
    category: {
      name: "Cars",
      imageURL:
        "https://images.pexels.com/photos/358070/pexels-photo-358070.jpeg",
    },
  },
  {
    id: uuid(),
    title: "Leather Shoes",
    description:
      "Elegant leather shoes perfect for formal and casual occasions.",
    imageURL: "https://images.pexels.com/photos/19090/pexels-photo.jpg",
    price: "220",
    colors: ["brown", "black", "tan"],
    category: {
      name: "Shoes",
      imageURL:
        "https://images.pexels.com/photos/267320/pexels-photo-267320.jpeg",
    },
  },

  {
    id: uuid(),
    title: "Smart Watch",
    description: "Track your fitness and stay connected with this smart watch.",
    imageURL:
      "https://images.pexels.com/photos/267394/pexels-photo-267394.jpeg",
    price: "250",
    colors: ["black", "silver", "gold"],
    category: {
      name: "Accessories",
      imageURL:
        "https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg",
    },
  },
  {
    id: uuid(),
    title: "Smartphone",
    description:
      "Latest generation smartphone with powerful camera and display.",
    imageURL:
      "https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg",
    price: "999",
    colors: ["black", "white", "blue"],
    category: {
      name: "Electronics",
      imageURL:
        "https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg",
    },
  },
  {
    id: uuid(),
    title: "Laptop",
    description: "Lightweight and powerful laptop for professionals.",
    imageURL: "https://images.pexels.com/photos/18105/pexels-photo.jpg",
    price: "1800",
    colors: ["gray", "silver", "black"],
    category: {
      name: "Computers",
      imageURL: "https://images.pexels.com/photos/18104/pexels-photo.jpg",
    },
  },
  {
    id: uuid(),
    title: "T-Shirt",
    description: "Comfortable cotton T-shirt with modern design.",
    imageURL:
      "https://images.pexels.com/photos/428340/pexels-photo-428340.jpeg",
    price: "35",
    colors: ["white", "black", "red", "blue"],
    category: {
      name: "Clothes",
      imageURL:
        "https://images.pexels.com/photos/2983464/pexels-photo-2983464.jpeg",
    },
  },
  {
    id: uuid(),
    title: "Tablet",
    description:
      "Lightweight tablet with a stunning display and long battery life.",
    imageURL:
      "https://images.pexels.com/photos/5082566/pexels-photo-5082566.jpeg?auto=compress&cs=tinysrgb&w=800",
    price: "299",
    colors: ["silver", "black", "gold"],
    category: {
      name: "Electronics",
      imageURL:
        "https://images.pexels.com/photos/1334597/pexels-photo-1334597.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
  },

  {
    id: uuid(),
    title: "Sunglasses",
    description: "Stylish sunglasses offering 100% UV protection.",
    imageURL: "https://images.pexels.com/photos/46710/pexels-photo-46710.jpeg",
    price: "80",
    colors: ["black", "brown", "gold"],
    category: {
      name: "Accessories",
      imageURL:
        "https://images.pexels.com/photos/46710/pexels-photo-46710.jpeg",
    },
  },
];

export const formInputsList: IFormInput[] = [
  {
    id: "title",
    name: "title",
    label: "Product Title",
    type: "text",
  },
  {
    id: "description",
    name: "description",
    label: "Product Description",
    type: "text",
  },
  {
    id: "img",
    name: "imageURL",
    label: "Product Image URL",
    type: "text",
  },
  {
    id: "price",
    name: "price",
    label: "Product Price",
    type: "number",
  },
];
