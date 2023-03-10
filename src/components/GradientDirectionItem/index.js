// Write your code here
import {ListItems, ListButton} from './styledComponents'

const GradientDirectionItem = props => {
  const {eachList, condition, onAddDirection} = props
  const {displayText, value} = eachList
  console.log(condition)
  const onDirection = () => {
    onAddDirection(value)
  }
  return (
    <div>
      <ListItems>
        <ListButton type="button" outline={condition} onClick={onDirection}>
          {displayText}
        </ListButton>
      </ListItems>
    </div>
  )
}

export default GradientDirectionItem
