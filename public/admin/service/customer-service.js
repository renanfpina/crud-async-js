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

const getCustomerById = (id) => {
    return fetch(`http://localhost:3000/profile/${id}`)
    .then( response => {
        return response.json()
    })
}

const customerUpdate = (id, name, email) => {
    return fetch(`http://localhost:3000/profile/${id}`, {
        method: 'PUT',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({
            name,
            email
        })
    })
    .then( response => {
        return response.json()
    })
}

export const customerService = {
    customerList,
    customerRegister,
    customerDelete,
    getCustomerById,
    customerUpdate
}
