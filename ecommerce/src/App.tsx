
import React from "react";
import Grid from "./Components/Grid";
import { Authentication } from "./Components/Login";
import { Footer } from "./Components/Footer";
import { Container, Paper, Title } from "@mantine/core";
import { HeaderMenu } from "./Components/Header";
import { Register } from "./Components/Register";
import { ForgotPassword } from "./Components/ForgotPassword";
import { DetailsProducts } from "./Components/DetailsProducts";
import Splash from "./view/Splash";
import ListDescription from "./Components/ListDescription";
import { HomeMain } from "./Components/HomeMain";
import { CardsCarousel } from "./Components/Carousel";


const links = [
  { link: "#", label: "Creator" },
  { link: "#", label: "Shop" },
  { link: "#", label: "Home" },
]

const article =  {
    title: "Producto 1",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque viverra, augue ultricies posuere vehicula, ex tellus molestie risus, vel fermentum leo elit sed est. Mauris eu enim ultricies tortor cursus interdum. Mauris ornare sodales tortor a blandit. Nullam a varius tortor. Praesent nec enim sed sapien consectetur cursus. Morbi laoreet elit ipsum, fringilla blandit lectus elementum vel. Integer tristique ultrices diam eu viverra. Maecenas nisl libero, iaculis eget orci sit amet, bibendum facilisis urna.",
    price: 10.99,
    editable: false,
    category: "LUNCHEON",
    fabricType: "RECYCLED",
    fabricColors: "RED",
    size: {
      width: 35,
      height: 15,
    },
    image: "../public/Image/CSR_Cocktail.jpg",
  }


const App = () => {
  return (
      <React.Suspense fallback="Loading...">

      <HeaderMenu />

      <HomeMain/> 

    <Title > Carousel</Title>
  
        <Paper shadow="md" mt="xl" mb='xl'  >
          <div style={{padding: '100px'}}>
        <CardsCarousel/>
        </div>
        </Paper>
    

      </React.Suspense>
  );
};

export default App;

