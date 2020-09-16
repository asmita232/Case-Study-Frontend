// const axios = require('axios')
import axios from 'axios'

// const apiBaseUrl = 'https://localhost:3000'

const getCalendarMeetings = (date) => {
    // console.log(userId)

    console.log('in calender service, Auth-token', localStorage.getItem('Authorization'))
    return axios.get(`http://localhost:4000/calendar?id=5f5fb2d9af14f973c4d6bd12&date=${date}`)
    .then(response => response.data)
}

export {
    getCalendarMeetings
}