const customerList = () => {
    return fetch(`http://localhost:3000/profile`)
    .then( response => {
        return response.json()
    })
}

const customerRegister = (name, email) => {
    return fetch(`http://localhost:3000/profile`, {
        method: 'POST', 
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({name, email})
    })
    .then( response => {
        return response.body
    })
}

const customerDelete = (id) => {
    return fetch(`http://localhost:3000/profile/${id}`, {
        method: 'DELETE'
    })
    .then( response => {
        return response.body
    })
}

export const customerService = {
    customerList,
    customerRegister,
    customerDelete
}
