import React from "react";

interface ComponentProps {
    someProps: string;
    optionalProp?: string;
    // the "?" symbol makes the prop optional, the component OptionalPropExample is passed in the App component only with the someProps prop, but because the optionalProp is optional, typescript doesn't raise an error
}

const OptionalPropExample = ({someProps, optionalProp}: ComponentProps) => {
 return <section>
     <div>{someProps}</div>
     <div>{optionalProp}</div>
 </section>
}

export default OptionalPropExample