import styled from "styled-components";
import { useState } from "react";
import seta from "./assets/img/seta_virar.png"


export default function Answer({data}){
    const [answerVisible, setAnswerVisible] = useState(false)

    function showAnswer(){
        setAnswerVisible(true)
    }

    return (
        <>
        {answerVisible === false ? 
            <OpenQuestion>
                <p>{data.question}</p>
                <img src={seta} onClick={() => showAnswer()}/>
            </OpenQuestion>
            :
            <OpenQuestion>
                <p>{data.answer}</p>
                <ButtonContainer>
                    <button id="one">Não lembrei</button>
                    <button id="two">Quase Lembrei</button>
                    <button id="three">Zap!</button>
                </ButtonContainer>
            </OpenQuestion>
        }   
        </> 
    )


}

const OpenQuestion = styled.div`
width: 300px;
margin: 12px;
padding: 15px;
min-height: 100px;
background: #FFFFD5;
box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
border-radius: 5px;
font-family: 'Recursive';
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 22px;
color: #333333;
position: relative;
display: flex;
flex-direction: column;
justify-content: space-between;

img {
  position: absolute;
  bottom: 10px;
  right: 10px;
}
`

const ButtonContainer = styled.div`

    display: flex;
    justify-content: space-between;
 button {
    width: 90px;
    font-family: 'Recursive';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    justify-content: center;
    color: #FFFFFF;
    border-radius: 5px;
    border: 1px solid white;
    padding:5px;
  }
  #one {
    background: #FF3030
  }

  #two {
    background: #FF922E
  }
  #three{
    background: #2FBE34
  }
  `