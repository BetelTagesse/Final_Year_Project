// import { useState, React } from "react";
// import "./index.css";

// const initialItems = [
//   {
//     id: 1,
//     description: "PassPorts",
//     quantity: 2,
//     packed: true,
//   },
//   {
//     id: 2,
//     description: "Socks",
//     quantity: 12,
//     packed: true,
//   },
//   {
//     id: 3,
//     description: "charger",
//     quantity: 1,
//     packed: false,
//   },
// ];

// export default function App() {
//   const [items, setItems] = useState([]);

//   function handleAddItems(item) {
//     setItems((items) => [...items, item]);
//   }

//   return (
//     <div className="app">
//       <Logo />
//       <Form onAddItems={handleAddItems} />
//       <PackingList items={items} />
//       <Stats />
//     </div>
//   );
// }
// function Logo() {
//   return <h1> 🏝️ Far Away 🧳 </h1>;
// }

// function Form({ onAddItems }) {
//   const [description, setDescription] = useState("test");
//   const [quantity, setQuantity] = useState(1);

//   function handleSubmit(e) {
//     e.preventDefault();

//     if (!description) return;

//     const newItem = { description, quantity, packed: false, id: Date.now() };
//     onAddItems(newItem);

//     setDescription("");
//     setQuantity(1);
//   }

//   return (
//     <div className="add-form" onSubmit={handleSubmit}>
//       <h3>what do you need for your 😍 trip?</h3>
//       <select value={quantity} onChange={(e) => setQuantity(e.target.value)}>
//         {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
//           <option value={num} key={num}>
//             {num}
//           </option>
//         ))}
//       </select>

//       <input
//         type="text"
//         placeholder="Item ..."
//         value={description}
//         onChange={(e) => setDescription(Number(e.target.value))}
//       />
//       <button>Add</button>
//     </div>
//   );
// }

// function PackingList({ items }) {
//   return (
//     <div className="list">
//       <ul>
//         {items.map((item) => (
//           <Item item={item} key={item.id} />
//         ))}
//       </ul>
//     </div>
//   );
// }

// function Item({ item }) {
//   return (
//     <li>
//       <span style={item.packed ? { textDecoration: "line-through" } : {}}>
//         {item.description}
//         {item.quantity}
//       </span>

//       <button>❌</button>
//     </li>
//   );
// }

// function Stats() {
//   return (
//     <footer>
//       <em>🧳 you have X items on your list, and you already packed X (X%)</em>
//     </footer>
//   );
// }

import React from "react";
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FirstPage from "./first_page";
import SecondPage from "./second_page";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<FirstPage />} />
        <Route path="/second_page" element={<SecondPage />} />
      </Routes>
    </Router>
  );
};

export default App;
