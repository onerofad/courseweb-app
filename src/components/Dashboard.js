import { Grid, Header, Segment } from "semantic-ui-react"
import { Footer } from "./Footer"
import { DashboardCourses } from "./DashboardCourses"
import { Navbar } from "./Navbar"
import getCourseWebUsers from "../API/sila_api"
import { useState, useEffect } from "react"

export const Dashboard = () => {

    const [users, setusers] = useState([])
        useEffect(() => {
            getAllUsers()
        }, [])
    
        const getAllUsers = () => {
            getCourseWebUsers().get("/")
            .then(response => setusers(response.data))
        }
    return(
        <>
            <Navbar />
            <Segment vertical style={{padding: 30, backgroundColor: '#f6f6f6'}}>
                <Grid container columns={2}>
                    {
                        users.map(u => {
                            if(u.email === sessionStorage.getItem("emailId")){
                                return(
                                    <Grid.Row>
                                        <Grid.Column>
                                            <Header content={"WELCOME " + (u.firstname).toUpperCase()} />
                                        </Grid.Column>
                                        <Grid.Column textAlign="right">
                                            <Header as="h4" disabled content="You last visit was 17th of December, 2024" />
                                        </Grid.Column>
                                    </Grid.Row>
                                )
                            }
                        })
                    }
                    
                </Grid>
            </Segment>
            <DashboardCourses />
            <Footer />
        </>
     
    )
}