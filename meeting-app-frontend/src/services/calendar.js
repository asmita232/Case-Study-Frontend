// const axios = require('axios')
import axios from 'axios'

// const apiBaseUrl = 'https://localhost:3000'

const getCalendarMeetings = (userId, date="2020-17-20") => {
    console.log(userId)
    return axios.get(`http://localhost:3000/calendar?id=5f5fb2c0af14f973c4d6bd11&date=2020-17-20`)
    .then(response => response.data)
}

export {
    getCalendarMeetings
}