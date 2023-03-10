// Style your elements here
import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-image: linear-gradient(${props => props.value});
`

export const Heading = styled.h1`
  color: #ededed;
  font-weight: bold;
  font-size: 30px;
  font-family: 'Roboto';
`

export const Description = styled.p`
  color: #ffffff79;
  font-weight: bold;
  font-size: 20px;
  font-family: 'Roboto';
`

export const UnOrder = styled.ul`
  list-style-type: none;
  display: flex;
`
export const Input = styled.input`
  border: none;
  margin: 0px 20px;
  background-color: transparent;
  width: 90px;
  height: 35px;
  cursor: pointer;
`

export const GenerateButton = styled.button`
  background-color: #00c9b7;
  font-weight: 500;
  font-family: 'Roboto';
  width: 80px;
  height: 35px;
  border: none;
  border-radius: 3px;
  margin: 20px 0px;
  cursor: pointer;
`
export const InputContainer = styled.div`
  display: flex;
`
export const ColorCode = styled.p`
  font-weight: 500;
  font-weight: 'Roboto';
  color: #ffffff;
  margin-left: 30px;
`
