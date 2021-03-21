import logo from "./logo.svg";
import "./App.css";
import {
  Container,
  HorizontalCenter,
  H1,
  colorsArray,
} from "./App.styled-components";
import Carousel from "./Carousel";

function App() {
  return (
    <Container>
      <H1>Cool Carousel</H1>
      <HorizontalCenter>{<Carousel>{colorsArray}</Carousel>}</HorizontalCenter>
    </Container>
  );
}

export default App;
