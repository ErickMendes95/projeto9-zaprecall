import styled from "styled-components";
import Logo from "./Logo";
import Questions from "./Questions"
import Footer from "./Footer";
import deck from "./deck"
import { useState } from "react";


export default function App() {
  const [count, setCount] = useState(0)

  
  return (
    <ScreenContainer>
      <Logo/>
      {deck.slice(0,4).map((item, index) => (
        <Questions count={count} setCount={setCount} questionNumber={index + 1} data={item} key={index}/>
      ))}
      <Footer count={count}/>
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