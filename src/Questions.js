import styled from "styled-components";
import seta from "./assets/img/seta_play.png"
import { useState } from "react";
import Answer from "./Answer";

export default function Questions ({questionNumber, data, count, setCount}) {
    
    const [questionVisible, setQuestionVisible] = useState(false)
    const [answerType, setAnswerType] = useState("")
    const [questionIcon, setQuestionIcon] = useState(seta)
    const [disabled, setDisabled] = useState(false)

    function showQuestion(){
        setQuestionVisible(true)
    }

    return (
        <>
            {questionVisible === false ?
                <ClosedQuestion>
                    <CustomH1 type={answerType}>Pergunta {questionNumber}</CustomH1>
                    <button disabled={disabled}><img src={questionIcon} disabled={disabled} onClick={() => showQuestion()}/></button>
                </ClosedQuestion>
                :
                <Answer data={data} setDisabled={setDisabled} count={count} setCount={setCount} setQuestionVisible={setQuestionVisible} 
                setAnswerType={setAnswerType} setQuestionIcon={setQuestionIcon}/>
            }
        </>
    )
}

const ClosedQuestion = styled.div`

  width: 300px;
  height: 35px;
  background-color: #FFFFFF;
  margin: 12px;
  padding: 15px;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  button{
    display:flex;
    background: white;
    border: none;
    z-index: 1
  }
  img{
    display: flex;
    z-index: 0;
  }
`
  const CustomH1 = styled.h1`
    font-family: 'Recursive';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    text-decoration: ${props => props.type === "success" ? "line-through" : ""};
    text-decoration: ${props => props.type === "almost" ?  "line-through" : ""};
    text-decoration: ${props => props.type === "error" ?   "line-through" : ""};
    color: ${props => props.type === "success" ? "#2FBE34" : ""};
    color: ${props => props.type === "almost" ? "#FF922E" : ""};
    color: ${props => props.type === "error" ? "#FF3030" : ""}; 
`
