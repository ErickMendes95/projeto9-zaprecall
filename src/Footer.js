import styled from "styled-components"
import certo from "./assets/img/icone_certo.png"
import quase from "./assets/img/icone_quase.png"
import errado from "./assets/img/icone_erro.png"


export default function Footer({contador}){
    return (
        <FinishedFooter>
            <p>{contador}/4 CONCLUÍDOS</p>
            <ButtonContainer>
                {/* <img src={certo}/>
                <img src={quase}/>
                <img src={errado}/> */}
            </ButtonContainer>
        </FinishedFooter>
    )

}

const FinishedFooter = styled.div`
  width: 100%;
  min-height: 50px;
  background-color: #FFFFFF;
  position: fixed;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: 'Recursive';
  font-weight: 400;
  font-size: 18px;
  color: #333333;
  padding: 10px;

`

const ButtonContainer = styled.div`
    display: flex;
    width: 80%;
    justify-content: center;
    gap: 5px;
    margin: 20px;
  `