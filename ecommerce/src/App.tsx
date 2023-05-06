
import React from "react";
import Grid from "./Components/Grid";
import { Footer } from "./Components/Footer";
import { Container } from "@mantine/core";
import { HeaderMegaMenu } from "./Components/Header";
import { HeroBullets } from "./Components/Description";

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
const card = {
  image: "../public/Image/CSR_Cocktail.jpg",
  title: "Producto 1",
  description: "Esta es la descripción del Producto 1.",
  price: "$10.99",
  editable: false
}

const card2 = {
  image: "../public/Image/CSR_Cocktail.jpg",
  title: "Producto 2",
  description: "Esta es la descripción del Producto 2.",
  price: "$99.99",
  editable: true
}

const App = () => {
  return (
      <React.Suspense fallback="Loading...">
        <HeaderMegaMenu/>
        <Container>
          <HeroBullets {...card} />
        </Container>

        <Container>
          <HeroBullets {...card2} />
        </Container>

        <Footer links={links}/>
      </React.Suspense>
  );
};

export default App;

