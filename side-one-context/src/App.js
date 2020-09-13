import React, { Fragment } from "react";
import Context from "./Context"
import Provider from "./Provider";

const Agent = () => {
  return (
    <AgentOne />
  )
};

const AgentOne = () => {
  return (
    <AgentTwo />
  ) 
};

const AgentTwo = () => {
  return (
    <AgentStatus />
  )
};

const AgentStatus = () => {
  return (
    <Context.Consumer>
      {context => (
        <Fragment>
          <h1>This is Agent Details: </h1>
          <p>This all about context provider and consumer demo project</p>
          <h2>Mission status: {context.data.accept}</h2>
        </Fragment>
      )}
    </Context.Consumer>
  );
};

const App = () => {
  return (
    <div>
      <Provider>
        <Agent />
      </Provider>
    </div>
  )
};

export default App;