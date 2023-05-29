import React from "react";
import Grid from "./Components/Grid";
import { Authentication } from "./Components/Login";
import { Footer } from "./Components/Footer";
import { Container } from "@mantine/core";
import { HeaderMegaMenu } from "./Components/Header";
import { Register } from "./Components/Register";
import { Filter } from "./Components/Filter";


const links = [
  { link: "https://mantine.dev", label: "Creator" },
  { link: "https://mantine.dev", label: "Shop" },
  { link: "https://mantine.dev", label: "My Drap" },
]

const cards = [
  {
    image: "../public/Image/CSR_Cocktail.jpg",
    title: "Producto 1",
    description: "Esta es la descripción del Producto 1.",
    price: "$10.99",
    editable: true
  },
  {
    image: "../public/Image/CSR_Cocktail.jpg",
    title: "Producto 2",
    description: "Esta es la descripción del Producto 2.",
    price: "$19.99",
    editable: false
  },
]



const Home = () => {
  return (
    
      <React.Suspense fallback="Loading...">
        
        <HeaderMegaMenu/>

            <Filter/>
            
        <Footer links={links}/>

      </React.Suspense>

  );
};

export default Home;