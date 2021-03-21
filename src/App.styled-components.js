import styled from "styled-components";

export const H1 = styled("h1")`
  text-align: center;
  margin: 0;
  padding-bottom: 10rem;
`;

export const Relative = styled("div")`
  position: relative;
`;

export const Flex = styled("div")`
  display: flex;
`;

export const HorizontalCenter = styled("Flex")`
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  max-width: 25rem;
`;

export const Container = styled("div")`
  height: 100vh;
  width: 100%;
  background: #ecf0f1;
`;

export const Item = styled("div")`
  color: white;
  font-size: 2rem;
  text-transform: capitalize;
  width: ${({ size }) => `${size}rem`};
  height: ${({ size }) => `${size * 1.4}rem`};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CarouselContainer = styled(Relative)`
  overflow: hidden;
`;

export const CarouselContainerInner = styled(Flex)`
  overflow-x: scroll;
  scroll-snap-type: x mandatory;
  -ms-overflow-style: none;
  scrollbar-width: none;
  margin-right: 2rem;

  &::-webkit-scrollbar {
    display: none;
  }

  & > * {
    scroll-snap-align: center;
    margin-left: 2rem;
    flex: 0 0 auto;
  }
`;

export const colors = [
  "#ff9ff3",
  "#feca57",
  "#ff9f43",
  "#ff6b6b",
  "#48dbfb",
  "#1dd1a1",
  "#5f27cd",
  "#341f97",
];

export const colorsArray = colors.map((color) => (
  <Item
    size={20}
    style={{ background: color, borderRadius: "20px", opacity: 0.9 }}
    key={color}
  >
    {color}
  </Item>
));
