function BoardData(boardDataIndex, selectedBoardIndex, data) {
  return {
    boardDataId: boardDataIndex,
    boardData: {
      boardDataId: boardDataIndex,
      boardId: selectedBoardIndex,
      data: JSON.stringify(data),
    }
  }

}
export default BoardData
