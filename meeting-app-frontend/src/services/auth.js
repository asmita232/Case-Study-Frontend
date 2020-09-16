import axios from 'axios'

const signup = (name, email, password) => {

    return axios.post(`http://localhost:4000/users`, {
        name,
        emailId: email,
        password
    }).then(response => {
        console.log('response in axios',response)
        return response.data
    }).then(message => {
            console.log('message from frontend ', message)
    })

}

const login = (email, password) => {

    return axios.post(`http://localhost:4000/login`, {
        emailId: email,
        password
    }).then(response => {
        console.log('response in axios',response)
        return response.data
    })

}

export {
    signup,
    login
}