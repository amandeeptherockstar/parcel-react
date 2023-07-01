/// <reference types="../global.d.ts" />

import React from "react";
import { createRoot } from "react-dom/client";
import BellIcon from "./assets/icons/bell.svg";
import AvatarImage from "url:./assets/images/avatar.png";
import Heading from "./components/Heading";
import PDFViewer from "./components/PDFViewer";

import CountriesJSON from "./assets/json/countries.json";

import "./global.css";

const App = () => {
  console.log(CountriesJSON, "CountriesJSON");
  return (
    <React.Fragment>
      <h1>React App built using Parcel</h1>
      <button className="p-2 rounded bg-blue-500 hover:bg-blue-600 transition text-white">
        Tailwind Button
      </button>
      <BellIcon height={20} width={20} />
      <img src={AvatarImage} />
      <Heading />
      <PDFViewer />
    </React.Fragment>
  );
};

// get the root tag and render App component inside that
const container = document.getElementById("root")!;
const root = createRoot(container);

root.render(<App />);
