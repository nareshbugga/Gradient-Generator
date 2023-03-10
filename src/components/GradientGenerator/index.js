import {Component} from 'react'
import GradientDirectionItem from '../GradientDirectionItem'
import {
  Heading,
  Description,
  UnOrder,
  Input,
  GenerateButton,
  MainContainer,
  InputContainer,
  ColorCode,
} from './styledComponents'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]
// Write your code here

class GradientGenerator extends Component {
  state = {
    gradientOne: '#8ae323',
    gradientTwo: '#014f7b',
    direction: gradientDirectionsList[0].value,
    gradient: `to ${gradientDirectionsList[0].value},#8ae323,#014f7b`,
  }

  onGradientOne = event => {
    this.setState({gradientOne: event.target.value})
  }

  onGradientTwo = event => {
    this.setState({gradientTwo: event.target.value})
  }

  onAddDirection = value => {
    this.setState({direction: value})
  }

  onAddGradient = () => {
    const {gradientOne, gradientTwo, direction} = this.state
    this.setState({gradient: `to ${direction},${gradientOne},${gradientTwo}`})
  }

  render() {
    const {gradientOne, gradientTwo, direction, gradient} = this.state
    return (
      <MainContainer value={gradient} data-testid="gradientGenerator">
        <Heading>Generate a CSS color Gradient</Heading>
        <Description>Choose Direction</Description>
        <UnOrder>
          {gradientDirectionsList.map(eachList => (
            <GradientDirectionItem
              eachList={eachList}
              key={eachList.directionId}
              onAddDirection={this.onAddDirection}
              condition={direction === eachList.value}
            />
          ))}
        </UnOrder>
        <Description>Pick the Colors</Description>
        <InputContainer>
          <div>
            <ColorCode>{gradientOne}</ColorCode>
            <Input
              type="color"
              value={gradientOne}
              onChange={this.onGradientOne}
            />
          </div>
          <div>
            <ColorCode>{gradientTwo}</ColorCode>
            <Input
              type="color"
              value={gradientTwo}
              onChange={this.onGradientTwo}
            />
          </div>
        </InputContainer>

        <br />
        <GenerateButton type="button" onClick={this.onAddGradient}>
          Generate
        </GenerateButton>
      </MainContainer>
    )
  }
}

export default GradientGenerator
