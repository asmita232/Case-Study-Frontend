import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const { Component } = require("react");
const { getMeetings } = require('../services/meetings')

class SearchInput extends Component {

    getSearchItem = (event) => {
        // event.preventDefault()
        if(event.keyCode !== 13) {
            // console.log('enter key not pressed')
            return
        }
        const term = event.target.value
        this.props.getSearchTerm(term)
    }

    getDateItem = (event) => {
        const term = event.target.value
        console.log(term)
        this.props.getDateCriteria(term)
    }
    render() {

        // console.log('props in render',this.props)
        return (
            <form onSubmit={(e)=> e.preventDefault()}>
                <select className="btn btn-outline-secondary" onChange={this.getDateItem} name="dateCriteria">
                    <option>ALL</option>
                    <option>PRESENT</option>
                    <option>PAST</option>
                    <option>UPCOMING</option>
                </select>
                <input name="search" className="form-control" type="text" placeholder="Search.." onKeyDown={this.getSearchItem}/>
            </form>
        )
    }
}

class Meetings extends Component {

    state = {
        status: Meetings.Status.LOADED_MEETINGS,
        dateCriteria: 'ALL',
        searchTerm: undefined,
        meetings: [],
        error: null
    };

    getSearchTerm = (searchValue) => {
        this.setState({
            searchTerm: searchValue
        })
    }
    
    getDateCriteria = (dateCriteria) => {
        console.log('dateCriteria = ', dateCriteria)
        this.setState({
            dateCriteria
        })
    }

    componentDidMount() {
        getMeetings().then(meetings => {
            console.log(meetings)
            this.setState({
                meetings,
                status: Meetings.Status.LOADED_MEETINGS
            })
        })
    }

    componentDidUpdate(preProps, preState) {
        if(preState.searchTerm !== this.state.searchTerm || preState.dateCriteria !== this.state.dateCriteria) {
            getMeetings(this.state.searchTerm,this.state.dateCriteria).then(meetings => {
                this.setState({
                    meetings
                })
            })
        }
    }

    
    render() {

        const { meetings, status } = this.state
        let element
            switch (status) {

            case Meetings.Status.LOADING_MEETINGS:
                element = (
                    <>
                        <h2>Loading meetings...</h2>
                    </>
                )
                break
            case Meetings.Status.LOADED_MEETINGS:
                element = (
                    <>{
                        meetings.map(meeting => (
                            <Card border="primary" className="m-4" key={meeting._id} style={{width:'20rem'}}>
                                <Card.Body>
                                <Card.Title>{meeting.name}</Card.Title>
                                <Card.Text>
                                        Date: {meeting.date}
                                    </Card.Text>
                                    <Card.Text>
                                        Start Time: {meeting.startTime.hours} : {meeting.startTime.minutes}
                                    </Card.Text>
                                    <Card.Text>
                                        End Time: {meeting.endTime.hours} : {meeting.endTime.minutes}
                                    </Card.Text>
                                    <Card.Text>
                                        Description: {meeting.description}
                                    </Card.Text>
                                    <Link className="card-link" variant="primary" to="/" >Add attendee</Link>
                                    <Link className="card-link" variant="primary" to="/meetings" >Leave meeting</Link>
                                </Card.Body>
                            </Card>
                        ))
                        }
                    </>
                )
            break

            case Meetings.Status.ERROR_LOADING_MEETINGS:
            //SOMETHING WENT WRONG
            console.log('status',status)
                element = (
                    <>
                    <h2>Error loading page :(</h2>
                    <p>Try visiting later!</p>
                    </>
                )
            break
            default:
                break
        }

        return (
            <div>
                <h1>Meetings</h1>
                <SearchInput getSearchTerm={this.getSearchTerm} getDateCriteria={this.getDateCriteria}/>
                <hr />
                <div className="row">
                    {element}

                </div>
            </div>
        )
    }

  
}
Meetings.Status = {
    LOADING_MEETINGS: 'LOADING_MEETINGS',
    LOADED_MEETINGS: 'LOADED_MEETINGS',
    ERROR_LOADING_MEETINGS: 'ERROR_LOADING_MEETINGS'
};

export default Meetings