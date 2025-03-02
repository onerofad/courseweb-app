import { Grid, Header, Segment, Button, List, Image, Icon, Input } from "semantic-ui-react"
import { Navbar } from "./Navbar"
import {Footer} from './Footer'
import { useEffect, useState } from "react"
import { getTutorialVideos, getVideos, TutorialVideos } from "../API/sila_api"
import ReactPlayer from "react-player"
import { useParams, useNavigate } from "react-router-dom"

export const CoursePage = () => {

    const [url, seturl] = useState('')
    const [videos, setvideos] = useState([])
    const [active, setactive] = useState(false)
    const [playing, setplaying] = useState(false)
    const [volume, setVolume] = useState(0.1)
    const [courseTitle, setcourseTitle] = useState("")
    const [duration, setDuration] = useState(0)
    const [played, setPlayed] = useState(0)
    const [muted, setMuted] = useState(false)
    const [loading, setLoading] = useState(false)

    const param = useParams()

    const navigate = useNavigate()

    const handleVideo = (video) =>{
        seturl(video)
        setactive(!active)
    }

    const handleLoading = () => setLoading(true)

    const handleVolumePlus = () => {
        if(volume >= 0.1 && volume <= 0.9){
            setVolume(volume + 0.1)
        }
    }
      
    const handleVolumeMinus = () => {
        if(volume >= 0.2 && volume <= 1 ){
            setVolume(volume - 0.1)
        }
    }

    useEffect(() => {
        getAllVideos()
    }, [videos])

    const getAllVideos = () => {
        getTutorialVideos().get("/")
        .then(response => setvideos(response.data))
    } 

    const removeLoading = () => {
        alert("hello")
    }

    const video = videos.filter(v => v.tutorial === param.tutorial)
    let videoList
    videoList  = video.map(m => (
        <List.Item 
            onClick={() => {
                handleVideo(m.content_video)
                setcourseTitle(m.course_content)
            }}  
            id={m.id}
            secondary
        >

            <Image size="mini" src="/images/course2.jpg" />
            <List.Content>
                <List.Header>
                    {m.course_content}
                </List.Header>
                <List.Description>
                     {m.sub_content}
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
                                {/*<Button style={{backgroundColor: '#fff'}}>
                                    Start
                                </Button>
                                <Button style={{backgroundColor: '#fff'}}>
                                    <Icon name="arrow left" />
                                    Previous
                                </Button>
                                <Button style={{backgroundColor: '#fff'}}>
                                    Next
                                    <Icon name="arrow right" />
                                </Button>*/}
                                <Button secondary onClick={() => navigate("/dashboard")}>
                                    <Icon name="arrow left" />
                                    Go Back
                                </Button>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Segment>
                <Segment inverted vertical style={{padding: 30, backgroundColor: '#f6f6f6'}}>
                    <Grid container>
                        <Grid.Row>
                            <Grid.Column>
                                <Segment>
                                    <Grid divided>
                                        <Grid.Row>
                                        <Grid.Column verticalAlign="middle" width={10}>
                                        <Segment padded  vertical style={{}}>
                                            <Grid verticalAlign="middle">
                                                <Grid.Row>
                                                    <Grid.Column>
                                                        <Segment textAlign="center" vertical raised style={{height: 320, }}>
                                                            {
                                                                url === '' ?
                                                                    <Header as="h2" icon>
                                                                        CourseWeb Video
                                                                        <Icon size="huge" name="right circle arrow" />
                                                                    </Header>
                                                                    : 
                                                                    <ReactPlayer
                                                                        url={url}
                                                                        width="640"
                                                                        height="360"
                                                                        controls={false}
                                                                        playing={playing}   
                                                                        volume={volume}
                                                                        muted={muted}
                                                                        onDuration={(period) => setDuration(period)}
                                                                        onProgress={(progress) => {
                                                                            setPlayed(progress.playedSeconds)
                                                                        }} 
                                                                        onReady={handleLoading}
                                                                    /> 
                                                            }
                                                        </Segment>
                                                        <Segment raised style={{}}>  
                                                            
 
                                                            <Header as="h4">
                                                                {"Title:" + "   " + courseTitle}
                                                                <Header.Content style={{float: 'right'}}>
                                                                    {
                                                                        played < 3600 ?
                                                                        new Date(played * 1000).toISOString().substring(14, 19)
                                                                        :
                                                                        new Date(played * 1000).toISOString().substring(11, 16)
                                                                       
                                                                    }
                                                                </Header.Content>
                                                                <Header.Subheader>
                                                                    {
                                                            
                                                                    duration < 3600 ?
                                                                    "duration: " + new Date(duration * 1000).toISOString().substring(14, 19)
                                                                    :
                                                                  
                                                                    "duration: " + new Date(duration * 1000).toISOString().substring(11, 16)
                                                                    
                                                                    }
                                                                </Header.Subheader>
                                                            </Header>           
                                                            <Grid divided verticalAlign="middle">
                                                                <Grid.Column width={3} verticalAlign="middle"> 
                                                                    {
                                                                        playing ?
                                                                        <Button fluid secondary size="tiny" compact 
                                                                            onClick={() => setplaying(!playing)} 
                                                                        >
                                                                            <Icon name="pause circle" />
                                                                            pause
                                                                        </Button>  :

                                                                        <Button fluid secondary size="tiny"  compact
                                                                            onClick={() => setplaying(!playing)} 
                                                                        >
                                                                            <Icon name="video play" />
                                                                            play
                                                                        </Button>  
                                                                    }
                                                                                        
                                                                </Grid.Column>
                                                                <Grid.Column width={10}> 
                                                                    <Grid verticalAlign="middle">
                                                                        <Grid.Row>
                                                                            <Grid.Column width={5}>
                                                                                <Button 
                                                                                    fluid 
                                                                                    size="tiny" 
                                                                                    secondary 
                                                                                    compact
                                                                                    onClick={handleVolumeMinus}
                                                                                >
                                                                                    <Icon name="volume down" />
                                                                                    vol
                                                                                </Button>
                                                                            </Grid.Column>
                                                                            <Grid.Column width={6}>
                                                                                <Input                                                                                     type="range"
                                                                                    max="1"
                                                                                    value={volume}
                                                                                    fluid
                                                                                    
                                                                                />
                                                                            </Grid.Column>
                                                                            <Grid.Column width={5}>
                                                                                 <Button 
                                                                                    fluid 
                                                                                    size="tiny" 
                                                                                    secondary 
                                                                                    compact
                                                                                    onClick={handleVolumePlus}
                                                                                >
                                                                                    <Icon name="volume up" />
                                                                                    vol
                                                                                </Button>
                                                                            </Grid.Column>
                                                                        </Grid.Row>
                                                                    </Grid>        
                                                                </Grid.Column>
                                                                <Grid.Column verticalAlign="middle" width={3}> 
                                                                {
                                                                        muted ?
                                                                        <Button fluid secondary size="tiny" compact 
                                                                            onClick={() => setMuted(!muted)} 
                                                                        >
                                                                            <Icon name="unmute" />
                                                                            unmute
                                                                        </Button>  :

                                                                        <Button fluid secondary size="tiny"  compact
                                                                            onClick={() => setMuted(!muted)} 
                                                                        >
                                                                            <Icon name="mute" />
                                                                            mute
                                                                        </Button>  
                                                                    }
                 
                                                                </Grid.Column>
                                                            </Grid>
                                                        </Segment>
                                                    </Grid.Column>
                                                </Grid.Row>
                                            </Grid>
                                        </Segment>
                                        </Grid.Column>
                                        <Grid.Column width={6}>
                                            <Header dividing content="Course Content" />
                                            <List onItemClick={videos} verticalAlign="middle" selection link ordered relaxed divided style={{height: 420, overflowY: 'auto'}}>
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