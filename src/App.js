import styled from "styled-components";
import Logo from "./Logo";
import Questions from "./Questions"
import Footer from "./Footer";
import deck from "./deck"

export default function App() {
  return (
    <ScreenContainer>
      <Logo/>
      {deck.map((item, index) => (
        <Questions questionNumber={index + 1} data={item} key={index}/>
      ))}
      <Footer/>
    </ScreenContainer>
  )
}



const ScreenContainer = styled.div`
  background-color: #FB6B6B;
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0px;
  padding: 0px;
  padding-bottom: 200px;

`