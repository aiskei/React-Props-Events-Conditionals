import UserItems from './UserItems'
import React, { useState } from 'react'

const UserList = () => {
    const users = [
        { name: 'John Doe', age: 25, city: 'New York' },
        { name: 'Gawlo James', age: 65, city: 'London' },
        { name: 'Saölo Shome', age: 19, city: 'Beijin' }
    ]

    const [count, setCount] = useState(0)
    const message = 'Yay! you have count to ' + count;

    //button to handle count
    const handleClick = () => {
        setCount(count + 1)
    }

    return (
        <div>
            {users.map((user, index) => (
                <UserItems
                    key={index}
                    name={user.name}
                    age={user.age}
                    city={user.city}
                />
            ))}

            <div>
                <button onClick={handleClick}>Start counting</button>
                <p>{count}</p>

                { count === 10 ?
                
                    <p>{message}</p> : ''
                }
            </div>
        </div>
    )
}

export default UserList
