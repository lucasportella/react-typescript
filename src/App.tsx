import React from 'react';
import PropsExample from './typescriptExamples/PropsSimpleExample';
import OptionalPropExample from './typescriptExamples/OptinalProp';
import UseStateAndFetch from './typescriptExamples/UseStateAndFetch';
import OnChangeComponent from './typescriptExamples/OnChangeAndLearnToHover';


function App() {
  return (
    <div >
      <PropsExample someProps='this is some props'/>
      <OptionalPropExample someProps='this is some props'/> {/* optional prop intentionally not passed in this component*/}
      <UseStateAndFetch />
      <OnChangeComponent />
    </div>
  );
}

export default App;
