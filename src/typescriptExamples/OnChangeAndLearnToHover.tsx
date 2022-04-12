import React from "react";

const OnChangeComponent = () => {
    // some type stuff is really verbose, but you don't have to memorize it, just hover the mouse on the parameter (e) and it will show you the perfect type you need to declare

    type event = {
        name: string,
        value: string
    }

    const handleChange = ({target: {name, value}}: {target: event}) => {
        console.log(name, value);
        
    }

    const handleSubmit = (e: React.ChangeEvent<HTMLInputElement>) => {
        // if you do not destruct the event param, your param type will be some html/react complex stuff, to check it precisely, write the function in this way '(e) => func' and hover your mouse on the (e) to see the type
        console.log(e);
    }

    return (
        <section>
            <label htmlFor="input">
                <input type="text" id="input" onChange={handleChange}/>
            </label>
                                    {/*hover down here  */}
            <button type="submit" onClick={(e) => handleSubmit}>Submit</button>
        </section>
        )

}

export default OnChangeComponent
