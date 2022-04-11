import React from "react";

interface ComponentProps {
    someProps: string;
}

const PropsSimpleExample = ({someProps}: ComponentProps) => {
 return <section>{someProps}</section>
}

export default PropsSimpleExample