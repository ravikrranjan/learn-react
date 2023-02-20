import React from "react";
import util from "./ Higher Order Component";
import Composition from "./Component-Composition"
import EditableText from "./Conditional Rendering";
import Controlled from "./Controlled";
import NullErr from "./Err-Nulljs";
import FragmentsApp from "./Fragments";
import FullyControlledComponent from "./FullyControlledComponent";
import HOCApp from "./higher-order-component";
import CryptoListApp from "./Lists-Rendering";
import StyledComponentsApp from "./Styled components";
import Uncontrolled from "./Uncontrolled";
import UserApp from "./UserAccess";

const CryptoPriceTable = util.withCryptoPrices(util.PriceTable);
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
        <CryptoPriceTable />
        <h1>HOCApp</h1>
        <HOCApp />
        <h1>StyledComponentsApp</h1>

        <StyledComponentsApp />
        <h1>UserApp</h1>
        <UserApp />
        <h1>NullErr</h1>
        <NullErr />
        <h1>EditableText</h1>
        <EditableText />
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

        <h1>CryptoListApp</h1>
        <CryptoListApp />
        <h1>FragmentsApp</h1>
        <FragmentsApp />

        
      </div>
    );
  }
}