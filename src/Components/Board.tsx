import { Droppable } from "react-beautiful-dnd";
import DraggableCard from "./DraggableCard";
import styled from "styled-components";

interface IBoardProps {
  toDos: string[];
  boardId: string;
}

const Wrapper = styled.div`
  background-color: ${(props) => props.theme.boardColor};
  padding: 1.3em 0.6em;
  padding-top: 1.9em;
  border-radius: 0.3em;
  min-height: 12.5em;
`;

function Board({ toDos, boardId }: IBoardProps) {
  return (
    <Droppable droppableId={boardId}>
      {(magic) => (
        <Wrapper ref={magic.innerRef} {...magic.droppableProps}>
          {toDos.map((toDo, index) => (
            <DraggableCard key={index} toDo={toDo} index={index} />
          ))}
          {magic.placeholder}
        </Wrapper>
      )}
    </Droppable>
  );
}

export default Board;
