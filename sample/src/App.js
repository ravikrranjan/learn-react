import React from "react";
import Composition from "./Component-Composition"
import Controlled from "./Controlled";
import FullyControlledComponent from "./FullyControlledComponent";
import Uncontrolled from "./Uncontrolled";
class ClassComponent extends React.Component {
  render() {
    return <p>Class Component: {new Date().toISOString()}</p>;
  }
}

class PureClassComponent extends React.PureComponent {
  render() {
    return <p>Pure Class Component: {new Date().toISOString()}</p>;
  }
}

const FunctionComponent = () => {
  return <p>Function Component: {new Date().toISOString()}</p>;
};


const MemoizedFunctionComponent = React.memo(() => {
  return <p>Memoized Function Component: {new Date().toISOString()}</p>;
});

export default class App extends React.Component {
  state = {
    lastRender: new Date().toISOString(),
  };

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({ lastRender: new Date().toISOString() });
    }, 200);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div>
        <p>App: {this.state.lastRender}</p>
        <ClassComponent />
        <PureClassComponent />
        <FunctionComponent />
        <MemoizedFunctionComponent />
        <h1>Uncontrolled</h1>
        <Uncontrolled />

        <h1>Controlled</h1>
        
        <Controlled />

        <h1>FullyControlledComponent</h1>
        <FullyControlledComponent />

        <h1>Composition</h1>
        <Composition />
      </div>
    );
  }
}