import React from "react";

interface ComponentProps {
    someProps: string;
}

const PropsSimpleExample = ({someProps}: ComponentProps) => {
 return <div>{someProps}</div>
}

export default PropsSimpleExample