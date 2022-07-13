import { Droppable } from "react-beautiful-dnd";
import DraggableCard from "./DraggableCard";
import styled from "styled-components";

interface IBoardProps {
  toDos: string[];
  boardId: string;
}

const Wrapper = styled.div`
  padding: 1.3em 0.6em;
  padding-top: 0.6em;
  border-radius: 0.3em;
  min-height: 19em;
  width: 19em;
  background-color: ${(props) => props.theme.boardColor};
`;

const Title = styled.h2`
  text-align: center;
  font-weight: 700;
  margin-bottom: 0.6em;
  font-size: 1.1em;
`;

function Board({ toDos, boardId }: IBoardProps) {
  return (
    <Wrapper>
      <Title>{boardId}</Title>
      <Droppable droppableId={boardId}>
        {(magic) => (
          <div ref={magic.innerRef} {...magic.droppableProps}>
            {toDos.map((toDo, index) => (
              <DraggableCard key={index} toDo={toDo} index={index} />
            ))}
            {magic.placeholder}
          </div>
        )}
      </Droppable>
    </Wrapper>
  );
}

export default Board;
