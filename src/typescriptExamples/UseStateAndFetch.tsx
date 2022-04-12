import React, { useState } from "react";
import {User} from '../ts/interfaces'

const UseStateAndFetch = () => {
 const [user, setUser] = useState<User | null>(null)

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
