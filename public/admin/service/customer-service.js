const customerList = () => {
    return fetch(`http://localhost:3000/profile`)
    .then( response => {
        if (response.ok) {
            return response.json()
        }
        throw new Error('Unable to list customers')
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
        if (response.ok) {
            return response.body
        }
        throw new Error('Unable to register customer')
    })
}

const customerDelete = (id) => {
    return fetch(`http://localhost:3000/profile/${id}`, {
        method: 'DELETE'
    })
    .then( response => {
        if (!response.ok) {
            throw new Error('Unable to delete customer')
        }   
    })
}

const getCustomerById = (id) => {
    return fetch(`http://localhost:3000/profile/${id}`)
    .then( response => {
        if (response.ok) {
            return response.json()
        }
        throw new Error('Unable to detail customer')
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
        if (response.ok) {
            return response.json()
        }
        throw new Error('Unable to update customer')
    })
}

export const customerService = {
    customerList,
    customerRegister,
    customerDelete,
    getCustomerById,
    customerUpdate
}
