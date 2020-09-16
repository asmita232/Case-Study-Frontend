import axios from 'axios'

/**
 * req.params - 
 * req.query - id(userId), search, date = { ALL, PRESENT, PAST, UPCOMING}
 * req.body - 
 * res - meeting[]
 * Authorization - true
 */

function getMeetings(search, dateCriteria){

    // const id = localStorage.getItem('userid')
    let id = '5f5fb2d9af14f973c4d6bd12'
    
    return axios.get(`http://localhost:4000/meetings?id=${id}&dateCriteria=${dateCriteria}&search=${search}`,
    {
        headers: {
            "Authorization": localStorage.getItem('Authorization')
        }
    }).then(response => response.data)

}

export {
    getMeetings
}