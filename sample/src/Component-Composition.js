import React from 'react' ;

function Hello(props) {
  return <div>Hello {props.name}</div>;
}

export default function Composition() {
  return (
    //~! 1. a component can only ever return one root element
    // <div>
    //   <Hello name="Manuel" />
    //   <Hello name="Tom" />
    // </div>
    //~#2. An array that contains valid return values:
    // [<div key="1">Hello</div>, <Hello key="2" name="Manuel" />]

    // 'Hello World'
    // null

    //~^A Fragment - a special component that does not appear in the rendered output and can act as a container
     // <React.Fragment>
    //     <li>1</li>
    //     <li>2</li>
    //     <li>3</li>
    // </React.Fragment>

    //~^ fragments can also be expressed in their short form, which contains an empty opening and closing element:
    <>
        <li>1</li>
        <li>1</li>
        <li>1</li>
    </>


   
  );
}