import {
  CarouselContainer,
  CarouselContainerInner,
} from "./App.styled-components";

function Carousel({ children }) {
  return (
    <CarouselContainer>
      <CarouselContainerInner>{children}</CarouselContainerInner>
    </CarouselContainer>
  );
}

export default Carousel;
