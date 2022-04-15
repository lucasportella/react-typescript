import React, { useState } from "react";
import {User} from '../ts/interfaces'
import { Buttons } from "../ts/typeUnions";

const UseStateAndFetch = () => {
 const [user, setUser] = useState<User | null>(null)
 const [button, setButton] = useState<Buttons>('value3')
//  if enums were used instead of type unions:
// enum Buttons {
//         value1 = "value1",
//         value2 = "value2",
//         value3 = "value3",
//         }
// const [button, setButton] = useState<Buttons>(Buttons.value3)
// as you can see, you need to use dot notation and wont be able to see the value, only it's name

const fetchUser = () => {
    // mocks API
    setUser({
        name: "Lucas",
        age: 29,
        country: 'Brazil',
        address: {
            street: 'avenue 2',
            number: 999,
            zip: '9999-999'
        },
        admin: false
    })
}
return (
    <section>
    <button type="button" onClick={fetchUser}>Fetch user</button>
    {user && <p>Hello {user.name}!</p>}
    </section>
)

}

export default UseStateAndFetch
