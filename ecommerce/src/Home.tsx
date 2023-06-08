import React from "react";
import { CreateProduct } from './view/addProducts.tsx';
import { ArticleCard } from './Components/Card.tsx';
import { LinksGroup } from "./Components/LinksGroup";
import { Filter } from "./Components/Filter";
import { Footer } from "./Components/Footer.tsx";
import { HeaderMenu } from "./Components/Header.tsx";
import App from "./App.tsx";
import { HomeMain } from "./Components/HomeMain.tsx";

const content = [
  { icon: "#", label: "Creator", initiallyOpened: false, links: [{ link: "#", label: "Create Product" }] },
  { icon: "#", label: "Products", initiallyOpened: false, links: [{ link: "#", label: "All Products" }] },
  { icon: "#", label: "Orders", initiallyOpened: false, links: [] },
]

const links = [ { link: "#", label: "Create Product" } ]

const Home = () => {
  return (
    <React.Suspense fallback="Loading...">

      
      
     <App/>
      

    </React.Suspense>
  );
};

export default Home;
