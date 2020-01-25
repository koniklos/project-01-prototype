import React from "react";
import Styled from "styled-components";
import { Draggable } from "react-beautiful-dnd";
import DragIcon from "./drag_indicator-24px.svg";

const Container = Styled.div`
  border: 1px solid;
  border-radius: 2px;
  padding: 8px;
  margin-bottom: 8px;
  background-color: #fff;
  border-color: #eee;
  // border-color: ${(props) => props.isDragging ? "#c7deff" : "#ccc"};
  box-shadow: ${(props) => props.isDragging ? "0px 2px 10px 2px rgba(213, 215, 231, 0.486), 0px 2px 5px -2px rgba(120, 121, 126, 0.486)" : "none"};
  display: flex;
`;

const DragHandler = Styled.div`
  width: 24px;
  height: 24px;
  // background-color: #8073ff;
  // border-radius: 4px;
  margin-right: 8px;
`;

const Agent = props => {
  return (
    <Draggable draggableId={props.agent.id} index={props.index}>
      {(provided, snapshot) => (
        <Container
          {...provided.draggableProps}
          ref={provided.innerRef}
          isDragging={snapshot.isDragging}
        >
          <DragHandler {...provided.dragHandleProps}>
            <DragIcon style={{ fill: "#8073ff" }} />
          </DragHandler>
          {props.agent.name}
        </Container>
      )}
    </Draggable>
  );
}

export default Agent;
