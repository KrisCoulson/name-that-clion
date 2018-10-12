import React from "react";
import styled from "styled-components";
import Avatar from "./Avatar";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const Possibility = styled.div`
  border-radius: 6px;
  color: white;
  border: 3px solid white;
  padding: 10px;
  margin: 10px;
  text-align: center;
`;

const Text = styled.div`
  font-family: "Nunito", sans-serif;
  color: white;
`;

const Heading = styled(Text)`
  font-size: 24px;
  font-weight: 900;
`;

const Subtext = styled(Text)`
  font-size: 18px;
  font-weight: 600;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;
const Possibilities = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  flex: 1;
`;

const possibilities = [
  {
    id: 1,
    name: "Kris Coulson",
    position: "Frontend Developer",
    location: "Los Angeles"
  },
  {
    id: 2,
    name: "Lukas Stuart-Fry",
    position: "Frontend Developer",
    location: "Los Angeles"
  },
  {
    id: 3,
    name: "Jeff Consing",
    position: "Designer",
    location: "Los Angeles"
  }
];

class GameCard extends React.Component {
  // state = {
  //   dropzones: []
  // }
  // onDragend () => {
  //   const { destination, source, draggableId } = result;
  //
  //   if (!destination) {
  //     return;
  //   }
  //
  //   if (
  //     destination.droppableId === source.droppableId &&
  //     destination.index === source.index
  //   ) {
  //     return;
  //   }
  //
  //   const start = this.state.columns[source.droppableId];
  //   const finish = this.state.columns[destination.droppableId];
  //
  //   if (start === finish) {
  //     const newTaskIds = Array.from(start.taskIds);
  //     newTaskIds.splice(source.index, 1);
  //     newTaskIds.splice(destination.index, 0, draggableId);
  //
  //     const newColumn = {
  //       ...start,
  //       taskIds: newTaskIds,
  //     };
  //
  //     const newState = {
  //       ...this.state,
  //       columns: {
  //         ...this.state.columns,
  //         [newColumn.id]: newColumn,
  //       },
  //     };
  //
  //     this.setState(newState);
  //     return;
  //
  // }
  render() {
    return (
      <Container>
        <DragDropContext onDragEnd={this.onDragEnd}>
          <Droppable droppableId="droppable-1">
            {(droppableProvided, snapshot) => (
              <div ref={droppableProvided.innerRef}>
                <Draggable
                  innerRef={droppableProvided.innerRef}
                  draggableId="draggable-1"
                  index={0}
                >
                  {(provided, snapshot) => (
                    <Avatar
                      innerRef={provided.innerRef}
                      border="8px solid white"
                      size="200px"
                      style={{ marginTop: "80px", alignSelf: "center" }}
                      innerRef={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    />
                  )}
                </Draggable>
              </div>
            )}
          </Droppable>
          <Possibilities>
            {possibilities.map(possibility => (
              <Droppable
                droppableId={`dropper-${possibility.id}`}
                key={possibility.id}
              >
                {(provided, snapshot) => (
                  <Possibility innerRef={provided.innerRef}>
                    {provided.placeholder}
                    <Heading>{possibility.name}</Heading>
                    <Subtext>{possibility.position}</Subtext>
                    <Subtext>{possibility.location}</Subtext>
                  </Possibility>
                )}
              </Droppable>
            ))}
          </Possibilities>
        </DragDropContext>
      </Container>
    );
  }
}

export default GameCard;
