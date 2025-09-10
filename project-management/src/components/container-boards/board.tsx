import ColumnComponent from "../column-component/column";
import BoardContainer from "./board-container";

export default function BoardContent() {
  return (
    <BoardContainer>
      <ColumnComponent />
    </BoardContainer>
  );
}
