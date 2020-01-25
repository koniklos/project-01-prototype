import React from "react";
import Styled from "styled-components";
import { Droppable } from "react-beautiful-dnd";
import Agent from "./Agent";
const Container = Styled.div`
  margin: 8px;
  // border: 1px solid #eee;
  border-radius: 2px;
  background: ${props => props.group.id === "unassigned" ? "#edecff" : "#fff"};
  min-width: 300px;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 2px 10px 2px rgba(213, 215, 231, 0.486), 0px 2px 5px -2px rgba(120, 121, 126, 0.486);
`;
const Name = Styled.h2`
  padding: 8px;
  // color: #b38ed1;
  // color: #c073ff;
  color: #8073ff;
  display: inline-block;
`;
const AgentsList = Styled.div`
  // background-color: ${props => props.isDraggingOver ? "#f2f2f8" : "inherit"};
  background-color: inherit;
  padding: 8px;
  min-height: 100px;
  flex-grow: 1;
`;
const AgentsCounter = Styled.span`
  border: 1px solid #8073ff;
  border-radius: 50%;
  padding: 5px 10px;
  background-color: #fff;
  color: #ff398b;
  font-weight: bold;
`;

class GroupLeader extends React.Component {
  render() {
    const { groupLeader, agents } = this.props;
    return (
      <Container group={groupLeader} className={groupLeader.id === "unassigned" ? "unassigned" : null}>
        <header>
          <Name>{groupLeader.name}</Name>
          <AgentsCounter>{agents.length}</AgentsCounter>
        </header>
        <Droppable droppableId={groupLeader.id}>
          {(provided, snapshot) => (
            <AgentsList
              ref={provided.innerRef}
              {...provided.droppableProps}
              isDraggingOver={snapshot.isDraggingOver}
            >
              {agents.map((agent, index) => (
                <Agent key={agent.id} agent={agent} index={index} />
              ))}
              {provided.placeholder}
            </AgentsList>
          )}
        </Droppable>
      </Container>
    );
  }
}

export default GroupLeader;
