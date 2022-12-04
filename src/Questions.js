import styled from "styled-components";
import {BsCaretRight} from "react-icons/bs"
import { useState } from "react";
import Answer from "./Answer";

export default function Questions ({questionNumber, data}) {   
    const [questionVisible, setQuestionVisible] = useState(false)
    
    
    function showQuestion(){
        setQuestionVisible(true)
    }

    return (
        <>
            {questionVisible === false ?
                <ClosedQuestion>
                    <h1>Pergunta {questionNumber}</h1>
                    <BsCaretRight size={32} onClick={() => showQuestion()}/>
                </ClosedQuestion>
                :
                <Answer data={data}/>
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

  p {
    font-family: 'Recursive';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    color: #333333;
  }
`