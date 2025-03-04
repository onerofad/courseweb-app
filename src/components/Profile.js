import { Grid, Header, Icon, Segment } from "semantic-ui-react"
import { Footer } from "./Footer"
import { useEffect, useState } from "react"
import getCourseWebUsers from "../API/sila_api"
import { Navbar } from "./Navbar"

export const Profile = () => {

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
                    <Grid.Row>
                        <Grid.Column>
                            <Header content="YOUR PROFILE" />
                        </Grid.Column>
                        <Grid.Column textAlign="right">
                            <Header as="h4" disabled content="You last visit was 17th of December, 2024" />
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Segment>
            <Segment vertical style={{padding: 50}}>
                <Grid container columns={2}>
                    {
                        users.map(u => {
                            if(u.email === sessionStorage.getItem("emailId")){
                            return(
                            <>
                            <Grid.Row>
                            <Grid.Column>
                                <Segment size="large" raised>
                                    <Header textAlign="center" as="h4" icon>
                                        <Icon inverted circular name="user outline" />
                                            {u.firstname + " " + u.lastname}
                                    </Header>
                                </Segment>
                            </Grid.Column>
                            <Grid.Column>
                                <Segment size="large" raised>
                                    <Header textAlign="center" as="h4" icon>
                                        <Icon inverted circular name="phone" />
                                            {u.phone}
                                    </Header>
                                </Segment>
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Column>
                                <Segment size="large" raised>
                                    <Header textAlign="center" as="h4" icon>
                                        <Icon inverted circular name="mail outline" />
                                            {u.email}
                                    </Header>
                                </Segment>
                            </Grid.Column>
                            <Grid.Column>
                                <Segment size="large" raised>
                                    <Header textAlign="center" as="h4" icon>
                                        <Icon inverted circular name="address card outline" />
                                            {u.address}
                                    </Header>
                                </Segment>
                            </Grid.Column>
                        </Grid.Row>
                        </>
                        )
                        }
                        })
                   
                    }
                </Grid>

            </Segment>
            <Footer />
        </>
     
    )
}