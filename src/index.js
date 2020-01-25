import React from "react";
import { render } from "react-dom";
import { DragDropContext } from "react-beautiful-dnd";
import Styled from "styled-components";
import GroupLeader from "./GroupLeader";
import "./style.css";

const Container = Styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

class App extends React.Component {
  state = {
    loading: true,
    agents: null,
    groupLeaders: null,
    groupLeadersOrder: null
  };

  async componentDidMount() {
    /*
      At this point we'll make an API call to fetch the data
      and update the application's state.
    */
    const data = await require("./initial-data");
    const initialData = data.default;
    const { agents, groupLeaders, groupLeadersOrder } = initialData;
    this.setState({
      loading: false,
      agents,
      groupLeaders,
      groupLeadersOrder
    });
  }

  handleDragEnd = (result) => {
    /*
      return of result object
      ------------------------------
      result = {
        draggableId: "agent-3"
        type: "DEFAULT"
        source: {
          index: 0
          droppableId: "unassigned"
        }
        reason: "DROP"
        mode: "FLUID"
        destination: {
          droppableId: "unassigned"
          index: 2
        }
      }
    */
    const { draggableId, source, destination } = result;

    if (!destination) {
      return;
    }

    if (destination.droppableId === source.droppableId && destination.index === source.index) {
      return;
    }

    const sourceGroup = this.state.groupLeaders[source.droppableId];
    const destinationGroup = this.state.groupLeaders[destination.droppableId];

    if (sourceGroup === destinationGroup) {
      const newAgentIds = Array.from(sourceGroup.agentIds);

      // remove the ID from source
      newAgentIds.splice(source.index, 1);
      // add the dragged ID to the destination
      newAgentIds.splice(destination.index, 0, draggableId);

      const newGroup = {
        ...sourceGroup,
        agentIds: newAgentIds
      }

      const newState = {
        ...this.state,
        groupLeaders: {
          ...this.state.groupLeaders,
          [newGroup.id]: newGroup
        }
      };

      this.setState(newState);
    } else {
      // Moving agent to another groupLeader
      const sourceAgentIds = Array.from(sourceGroup.agentIds);
      sourceAgentIds.splice(source.index, 1);

      const newSourceGroup = {
        ...sourceGroup,
        agentIds: sourceAgentIds
      };

      const destinationAgentIds = Array.from(destinationGroup.agentIds);
      destinationAgentIds.splice(destination.index, 0, draggableId);

      const newDestinationGroup = {
        ...destinationGroup,
        agentIds: destinationAgentIds
      };

      const newState = {
        ...this.state,
        groupLeaders: {
          ...this.state.groupLeaders,
          [newSourceGroup.id]: newSourceGroup,
          [newDestinationGroup.id]: newDestinationGroup
        }
      };

      this.setState(newState);
    }

    // At this point we can make an API call to update the changes on the DB
  }

  render() {
    if (this.state.loading) {
      return <h1>Loading...</h1>
    }

    const { groupLeadersOrder, groupLeaders, agents } = this.state;

    return (
      <DragDropContext onDragEnd={this.handleDragEnd}>
        <Container>
          {groupLeadersOrder.map((groupLeaderId) => {
            const groupLeader = groupLeaders[groupLeaderId];
            const agentList = groupLeader.agentIds.map(agentId => agents[agentId]);

            return (
              <GroupLeader key={groupLeader.id} groupLeader={groupLeader} agents={agentList} />
            );
          })}
        </Container>
      </DragDropContext>
    );
  }
}

render(<App />, document.getElementById("root"));
