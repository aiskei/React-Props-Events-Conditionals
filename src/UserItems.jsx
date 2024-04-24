import React  from "react"
import propsTypes from 'prop-types'

const UserItems = (props) => {
    return (

        <div>
            <h3>Name: {props.name} </h3>
            <p>Age: {props.age}</p>
            <p>City: {props.city}</p>
        </div>
    )
}

UserItems.propsTypes = {
    name: propsTypes.string.isRequired,
    age:  propsTypes.number.isRequired,
    city: propsTypes.string.isRequired
}

export default UserItems;
