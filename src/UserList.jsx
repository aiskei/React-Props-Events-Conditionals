import React from "react"
import UserItems from "./UserItems"

const UserList = () => {
    const users = [

        {name: 'John Doe', age: 25, city: 'New York'},
        {name: 'Gawlo James', age: 65, city: 'London'},
        {name: 'Saölo Shome', age: 19, city: 'Beijin'},
    ];

    return (
        <div>
            {users.map((user, index) =>(
                <UserItems
                    key={index}
                    name={user.name}
                    age={user.age}
                    city={user.city}
                />
            ))}
        </div>
    );
}

export default UserList;
