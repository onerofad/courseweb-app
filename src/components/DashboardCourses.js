import { Grid, Header, Segment, Card, Icon, Rating} from "semantic-ui-react"
import 'react-multi-carousel/lib/styles.css'
import { getMyLearnings, getTutorials } from "../API/sila_api"
import { useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"


export const DashboardCourses = () => {

    const [learnings, setlearnings] = useState([])

    const navigate = useNavigate()
    
    const param = useParams()
    
    useEffect(() => {
        getAllTutorials()
        getlearnings()
        //getLearn()
    },[])
    
    const getlearnings = () => {
        getMyLearnings().get("/")
        .then(res => setlearnings(res.data))
    }

    const [tutorials, setutorials] = useState([])
    
    const getAllTutorials = () => {
        getTutorials().get("/")
        .then(res => setutorials(res.data))
    }

    const learning = learnings.filter(l => l.emailId === sessionStorage.getItem("emailId"))

    const learning_list = []
    tutorials.forEach(getLearn);
    function getLearn(tutorial){
        let learn = learning.find(l => l.tutorial_id === tutorial.id)
        if(learn){
            learning_list.push(tutorial)
        }
    }
      let  learningList = learning_list.map(t => (
            <Grid.Column width={4}>
                <Card raised>
                    <img src={t.image} />
                        <Card.Content>
                            <Card.Header as="h4">
                                {t.title}
                            </Card.Header>
                            <Card.Meta>
                                <span className='date'>{t.owner}</span>
                            </Card.Meta>
                            <Card.Description>
                                <Header as="h3">
                                    4.2  <Rating icon="star" defaultRating={3} maxRating={5} />
                                    <Header as="h3" sub floated="right">(2,000)</Header>
                                </Header> 
                            </Card.Description>
                        </Card.Content>
                        <Card.Content>
                            <Header as="h4" icon>
                                <Icon 
                                    onClick={() => navigate("/course_page/" + t.title)} 
                                    color="blue" 
                                    size="large" 
                                    name="video" 
                                    link={true}
                                />
                                Watch Tutorial
                            </Header>
                        </Card.Content>
                </Card>
            </Grid.Column>
        ))
    
        
    return(
        <Segment vertical style={{paddingTop: 30, margin: 0}}>
            <Grid verticalAlign="middle" container>
                <Grid.Row>
                    <Grid.Column>
                        <Header as="h2">
                            My Learning Tutorials on CourseWeb
                            <Header.Subheader>
                                These tutorial courses are valuable and will enhance your skills and learning
                            </Header.Subheader>
                        </Header>
                        <Segment vertical>
                            <Grid>
                                <Grid.Row>
                                    {
                                        (learningList) ? 
                                            learningList : 
                                            <Header>
                                                You have not bought any course
                                            </Header>
                                    }
                                </Grid.Row>
                            </Grid>
                        </Segment>  
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Segment>
    )
}