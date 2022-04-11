import React from 'react';
import PropsExample from './typescriptExamples/PropsSimpleExample';
import OptionalPropExample from './typescriptExamples/OptinalPropExample';


function App() {
  return (
    <div >
      <PropsExample someProps='this is some props'/>
      <OptionalPropExample someProps='this is some props'/>
    </div>
  );
}

export default App;
