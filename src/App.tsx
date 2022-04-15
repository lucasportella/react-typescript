import React from 'react';
import PropsExample from './typescriptExamples/PropsSimpleExample';
import OptionalPropExample from './typescriptExamples/OptinalProp';
import UseStateAndFetch from './typescriptExamples/UseStateAndFetch';
import OnChangeComponent from './typescriptExamples/OnChangeAndLearnToHover';
import { InputValueProvider } from './typescriptExamples/context/Context';
import ComponentForContext from './typescriptExamples/context/ComponentForContext';
import Generics from './typescriptExamples/generics/Generics';
import TypeNarrowing from './typescriptExamples/typeNarrowing/TypeNarrowing';


function App() {
  return (
    <div >
      <PropsExample someProps='this is some props'/>
      <OptionalPropExample someProps='this is some props'/> {/* optional prop intentionally not passed in this component*/}
      <UseStateAndFetch />
      <OnChangeComponent />
      <InputValueProvider>
      <ComponentForContext />
      </InputValueProvider>
      <Generics />
      <TypeNarrowing />
    </div>
  );
}

export default App;
