import BoardModifyOptions from "../01 General/BoardModifyOptions"
import { v4 as uuidv4 } from 'uuid'

function updateBoard(param, data) {
    const newData = [...data];
    const index = getIndex(param?.parent?.id, param?.id, newData);
  
    switch (param.option) {
      case BoardModifyOptions.AddCard:
        const newCard = {
          id: uuidv4(),
          title: param.value,
        };
        newData[index].tasks = [...newData[index].tasks, newCard];
        break;
  
      case BoardModifyOptions.RemoveCard:
        newData[index].tasks = newData[index].tasks.filter((x) => x.id !== param.id);
        break;
  
      case BoardModifyOptions.MoveSectionLeft:
        moveSection(newData, index - 1, index);
        break;
  
      case BoardModifyOptions.MoveSectionRight:
        moveSection(newData, index + 1, index);
        break;
  
      case BoardModifyOptions.RemoveSection:
        newData.splice(index, 1);
        break;
  
      case BoardModifyOptions.AddSection:
        const newSection = {
          id: uuidv4(),
          title: param.value,
          tasks: [],
        };
        newData.splice(index + 1, 0, newSection);
        break;
  
      case BoardModifyOptions.EditCard:
        const parentIndex = newData.findIndex((e) => e.id === param?.parent);
        const childIndex = newData[parentIndex].tasks.findIndex((e) => e.id === param?.id);
        newData[parentIndex].tasks[childIndex].title = param.value;
        break;
  
      default:
        console.log('Not implemented');
    }
  
    return newData;
  }
  

function getIndex(parentId, id, newData) {
    let index = newData.findIndex(e => e.id === parentId)
    if (index === -1) {
        index = newData.findIndex(e => e.id === id)
    }
    return index
}

function moveSection(array, to, from) {
    if (to >= 0) {
        const item = array[from]
        array.splice(from, 1)
        array.splice(to, 0, item)
    }
    return array
}
export default updateBoard