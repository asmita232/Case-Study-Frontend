// const axios = require('axios')
import axios from 'axios'

// const apiBaseUrl = 'https://localhost:3000'

const getCalendarMeetings = (date) => {
    // console.log(userId)

    const id = localStorage.getItem('id')
    console.log('in calender service, Auth-token', localStorage.getItem('Authorization'))
    return axios.get(`http://localhost:4000/calendar?id=${id}&date=${date}`,{
        headers: {
            "Authorization": localStorage.getItem('Authorization')
        }
    })
    .then(response => response.data)
}

export {
    getCalendarMeetings
}