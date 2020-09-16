// Reference: WorkshopsList, lifecycle methods demo
import React, {Component} from 'react';
// import { getCalendarMeetings } from '../services/calendar';
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { getCalendarMeetings } from '../services/calendar'

class Calendar extends Component {
    state = {
        status: Calendar.Status.LOADING_CALENDAR,
        selectedDate: (new Date()).toISOString().substr(0,10),
        meetings: [],
        error: null
    };

    getFormattedDate() {
        // console.log( this.state.selectedDate.toISOString().substr( 0, 10 ) )
        // return this.state.selectedDate.toISOString().substr( 0, 10 ) 
        return this.state.selectedDate
    }

    setSelectedDate = (event) => {

        console.log(event.target.value)
        const newDate = event.target.value
        console.log(typeof(newDate))

        this.setState({
            selectedDate: newDate
        })
        // sets statey with selectedDate
    }

    render() {
        // - input type="date" onChange = setSelectedDate
        // - map through meetings and display as per requirement (display: flex, position: relative / absolute) - to start off display the meetings in a plain list view
        if(this.state.status === Calendar.Status.LOADED_CALENDAR) {
           console.log('components loaded!')
        }   
        // console.log(meeting)
        console.log('Calendar.Status = ',Calendar.Status)
        const { status, meetings } = this.state
        console.log('meetings in render =',meetings)
        console.log('state =', this.state)
        // const meeting = this.state.meetings[0]
        let element;

        switch (status) {

            case Calendar.Status.LOADING_CALENDAR:
                element = (
                    <>
                        <h2>Loading meetings...</h2>
                    </>
                )
                break
            case Calendar.Status.LOADED_CALENDAR:
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
                                    <Link variant="primary" to="/meetings" >Details</Link>
                                </Card.Body>
                            </Card>
                        ))
                        }
                    </>
                )
            break

            case Calendar.Status.ERROR_LOADING_CALENDAR:
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
            <div className="container">
                <h1>
                    Calendar
                </h1>
                <hr />
                <div className="float-right">
                    <input type="date" id="calendar-date" defaultValue={this.getFormattedDate()} onInput={this.setSelectedDate} />
                </div>
                <div className="row">
                    {/* <CardColumns> */}
                        {element}
                    {/* </CardColumns> */}
                </div>
            </div>
        );
    }
    
    // - Lifecycle methods
    //     - componentDidMount() - fetch the meetings for selected date, and set state with meetings
    //         - service method must be defined and called
    componentDidMount() {

        // console.log(typeof(getCalendarMeetings))
            getCalendarMeetings(this.state.selectedDate).then(meetings => {
            console.log(meetings)

            this.setState({
            status: Calendar.Status.LOADED_CALENDAR,
            meetings
        })

    })
        // getCalendarMeetings()
        // .then(data => {
        //     console.log(data)
        //     // this.setState({
        //     //     meetings
        //     // })
        // })
        //     - componentDidUpdate() - fetch new set of meetings for selected date and set state with meetings        
    }

    componentDidUpdate(preProp, preState) {

        console.log('in componetDidUpdate')

        if(preState.selectedDate !== this.state.selectedDate) {
            console.log('Dates changed!')
            
            getCalendarMeetings(this.state.selectedDate).then(meetings => {
                console.log(meetings)
    
                this.setState({
                meetings
                })
    
            })
        }


    }
        // - same service method must called - BE CAREFUL TO PUT THE CALL TO SERVICE WITHIN an if() that checks that it is selectedDate that has changed (else we end up with recursive calls to componentDidUpdate)
    
}

Calendar.Status = {
    LOADING_CALENDAR: 'LOADING_CALENDAR',
    LOADED_CALENDAR: 'LOADED_CALENDAR',
    ERROR_LOADING_CALENDAR: 'ERROR_LOADING_CALENDAR'
};

export default Calendar;