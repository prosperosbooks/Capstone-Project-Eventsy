import React, { Component } from "react";
import { Container } from "semantic-ui-react";
import EventDashboard from "../../features/event/EventDashboard/EventDashboard";
import NavBar from "../../features/nav/NavBar/NavBar";

class App extends Component {
  render() {
    return (
      <div>
        <NavBar>
          <Container>
            <h1>Eventsy</h1>
          </Container>
        </NavBar>
        <EventDashboard />
      </div>
    );
  }
}

export default App;
