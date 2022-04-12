import React from "react";

interface ComponentProps {
    someProps: string;
    optionalProp?: string;
    anotherOptionalProp?: string;
    // the "?" symbol makes the prop optional, the component OptionalPropExample is passed in the App component only with the someProps prop, but because the optionalProp is optional, typescript doesn't raise an error
}

const OptionalProp = ({someProps, optionalProp, anotherOptionalProp='some default value'}: ComponentProps) => {
 return <section>
     <div>{someProps}</div>
     <div>{optionalProp}</div>
     <div>{anotherOptionalProp}</div> {/* it will render 'some default value' if no prop value is passed*/}
 </section>
}

export default OptionalProp