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


class GameCard extends React.Component {
  componentDidMount() {
    console.log(this.props)
  }
  onDragEnd = (result) => {
    const { destination, source, draggableId } = result;

        console.log(result)
        // console.log(destination)

    if (!destination) {
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    const person = this.props.victim;
    const answer = this.props.victims.map((pos) => pos.uuid )
                                           .indexOf(person.uuid);

    if(parseInt(destination.droppableId.match(/\d/)[0]) !== parseInt(source.droppableId.match(/\d/)[0])){
      console.log('missed');
      this.props.getMissedPerson(person);
    }
  }
  render() {
    return (
      <Container>
        <DragDropContext onDragEnd={this.onDragEnd}>
          <Droppable droppableId={`droppable-${this.props.victim.uuid}`}>
            {(droppableProvided, snapshot) => (
              <div ref={droppableProvided.innerRef}>
                <Draggable
                  innerRef={droppableProvided.innerRef}
                  draggableId="draggable-1"
                  index={0}
                  style={{ display: 'flex', flex: 1}}
                >
                  {(provided, snapshot) => (
                    [this.props.victim].map(() => (
                      <Avatar
                        key="1"
                        innerRef={provided.innerRef}
                        border="8px solid white"
                        size="200px"
                        style={{ marginTop: "80px", alignSelf: "center" }}
                        innerRef={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      />
                    ))
                  )}
                </Draggable>
              </div>
            )}
          </Droppable>
          <Possibilities>
            {this.props.victims.map((victim) => (
              <Droppable
                droppableId={`person-index-${victim.uuid}`}
                key={victim.uuid}
              >
                {(provided, snapshot) => (
                  <Possibility innerRef={provided.innerRef}>
                    {provided.placeholder}
                    <Heading>{victim.name}</Heading>
                    <Subtext>{victim.job_title}</Subtext>
                    <Subtext>{victim.location}</Subtext>
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
