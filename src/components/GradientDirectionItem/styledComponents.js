// Style your elements here
import styled from 'styled-components'

export const ListItems = styled.li`
  margin-left: 15px;
`

export const ListButton = styled.button`
  width: 100px;
  height: 35px;
  border-radius: 5px;
  border: none;
  background-color: #ffff;
  opacity: ${props => (props.outline ? 1 : 0.5)};
  cursor: pointer;
`
