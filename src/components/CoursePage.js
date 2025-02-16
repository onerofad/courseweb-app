import { Grid, Header, Segment, Placeholder, Button, List, Image, Icon, Embed } from "semantic-ui-react"
import { Navbar } from "./Navbar"
import {Footer} from './Footer'
import { useEffect, useState } from "react"
import { getVideos } from "../API/sila_api"

export const CoursePage = () => {

    const [url, seturl] = useState('')
    const [videos, setvideos] = useState([])

    useEffect(() => {
        getAllVideos()
    }, [videos])

    const getAllVideos = () => {
        getVideos().get("/")
        .then(response => setvideos(response.data))
    } 

    const startVideo = () => {
        
    }

    let videoList
    videoList  = videos.map(m => (
        <List.Item onClick={() => seturl(m.uploaded_video)}>
            <Image size="mini" src="/images/course2.jpg" />
            <List.Content>
                <List.Header>
                    {m.fileowner}
                </List.Header>
                <List.Description>
                     {m.file_date}
                </List.Description>
                
            </List.Content>
            <List.Content floated="right">
                <Icon size="large" name="video play" />      
            </List.Content>
        </List.Item>

    ))     

    return(
            <>
                <Navbar />
                <Segment vertical style={{padding: 30, backgroundColor: '#f6f6f6'}}>
                    <Grid container columns={2}>
                        <Grid.Row>
                            <Grid.Column>
                                <Header as="h2" content="Course Description" />
                            </Grid.Column>
                            <Grid.Column textAlign="right">
                                <Button style={{backgroundColor: '#fff'}}>
                                    Start
                                </Button>
                                <Button style={{backgroundColor: '#fff'}}>
                                    <Icon name="arrow left" />
                                    Previous
                                </Button>
                                <Button style={{backgroundColor: '#fff'}}>
                                    Next
                                    <Icon name="arrow right" />
                                </Button>
                                <Button secondary>
                                    End
                                </Button>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Segment>
                <Segment vertical style={{padding: 30, backgroundColor: '#f6f6f6'}}>
                    <Grid container>
                        <Grid.Row>
                            <Grid.Column>
                                <Segment>
                                    <Grid divided>
                                        <Grid.Row>
                                        <Grid.Column verticalAlign="middle" width={8}>
                                        <Segment padded  vertical style={{height: 350}}>
                                            <Grid>
                                                <Grid.Row>
                                                    <Grid.Column>
                                                        <Segment vertical secondary style={{height: 270, }}>
                                                            <Embed
                                                                brandedUI
                                                                source="cloudinary"
                                                                url={url}
                                                            />
                                                        </Segment>
                                                        <Segment secondary style={{height: 50,}}>
                                                            <Grid divided verticalAlign="middle" columns={3}>
                                                                <Grid.Column textAlign="center"> 
                                                                    <Header as="h4">
                                                                        <Icon size="large" name="video play" />
                                                                        <Header.Content>
                                                                            0.04/4.02
                                                                        </Header.Content>

                                                                    </Header>
                                                                </Grid.Column>
                                                                <Grid.Column> 
                                                                    <Header as="h4">
                                                                        <Icon size="large" name="volume up" />
                                                                        <Header.Content>
                                                                            Volume
                                                                        </Header.Content>
                                                                    </Header>    
                                                                </Grid.Column>
                                                                <Grid.Column> 
                                                                    <Header as="h4">
                                                                        <Icon size="large" name="expand" />
                                                                        <Header.Content>
                                                                            Full Screen
                                                                        </Header.Content>
                                                                    </Header>
                                                                </Grid.Column>
                                                            </Grid>
                                                        </Segment>
                                                    </Grid.Column>
                                                </Grid.Row>
                                            </Grid>
                                        </Segment>
                                        </Grid.Column>
                                        <Grid.Column width={8}>
                                            <Header dividing content="Course Content" />
                                            <List verticalAlign="middle" selection link ordered relaxed divided style={{height: 300, overflowY: 'auto'}}>
                                                {videoList}
                                            </List>
                                        </Grid.Column>
                                        </Grid.Row>
                                    </Grid>

                                </Segment>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Segment>
                <Footer />
            </>

    )

}