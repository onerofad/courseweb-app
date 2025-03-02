import { Grid, Header, Segment, Card, Icon, Rating, Button, Accordion} from "semantic-ui-react"
import 'react-multi-carousel/lib/styles.css'
import { useEffect, useState } from "react"
import { getTutorials, getContent, getCartItems } from "../API/sila_api"
import { useParams, useNavigate } from "react-router-dom"
import { AccordionCourse } from "./AccordionCourse"

export const CourseDescription = () => {

    const navigate = useNavigate()

    const [tutorials, setutorials] = useState([])

    const [contents, setContents] = useState([])

    const [title, setTitle] = useState("")

    const param = useParams()

    let id = param.id

    let p_title = param.title

    useEffect(() => {
      getAllTutorials()
      getAllContents()
    },[])

    const getAllTutorials = () => {
        getTutorials().get("/")
        .then(res => setutorials(res.data))
    }

    const getAllContents = () => {
        getContent().get("/")
        .then(res => setContents(res.data))
    }

    const [activeIndex, setactiveIndex] = useState(0)

    const handleClick = (titleProps) => {
        const index  = titleProps
        const newIndex = activeIndex === index ? -1 : index
    
        setactiveIndex(newIndex)
    }

    const contentSelected = contents.filter(t => t.tutorial === p_title)

    let contentList = contentSelected.map(con => (
        <>
            <Accordion.Title
                active={activeIndex}
                index={con.index}
                onClick={() => handleClick(con.index)}
            >
                <Icon name="dropdown" /> 
                {con.course_content}
            </Accordion.Title>
            <Accordion.Content active={activeIndex === con.index }>
                {con.sub_content}
            </Accordion.Content>
        </>
    ))

    const addToCart = (id, title, amt) => {
        if(sessionStorage.getItem("emailId")){
            let tutorial_id = id
            let emailId = sessionStorage.getItem("emailId")
            let item = title
            let amount = amt

            let items = {tutorial_id, emailId, item, amount}

            getCartItems().post("/", items)
            .then(() => {
                getAllTutorials()
            })

        }else{
            navigate("/login")
        }
        
    }

    const tutorialSelected = tutorials.filter(c => c.id === Number(id))

    let tutorialList = tutorialSelected.map(c => 
        (
                <Card raised fluid>
                    <img src={c.image} />
                    <Card.Content>
                    <Card.Header as="h4">
                        <Icon name='dollar' />
                        {new Intl.NumberFormat().format(c.amount)}
                    </Card.Header>
                    </Card.Content>
                    <Card.Content>
                        <Button 
                            fluid 
                            color="positive" 
                            icon 
                            onClick={() => addToCart(c.id, c.title, c.amount)}
                        >
                            <Icon name="add to cart" />
                            Add to cart
                        </Button>
                          </Card.Content>
                </Card>

        )
    )

    let tutorialDescription = tutorialSelected.map(cd => (
            <>
                <Header as="h2">
                    {cd.title}
                    <Header.Subheader>
                        Created by {cd.owner}
                    </Header.Subheader>
                </Header> 
            </>
    ))

   
    return(
    <Segment vertical style={{minHeight: 300, margin: 0, paddingTop: 30, paddingBottom: 30, backgroundColor: '#f6f6f6'}}>
            <Grid stackable container divided>
                <Grid.Row>
                   <Grid.Column width={6}>
                        {tutorialList}
                    </Grid.Column>
                    <Grid.Column width={10}>
                        {tutorialDescription}
                        <Header as="h2" block color="blue">
                            Course Content
                        </Header>
                        <Accordion styled>
                            {contentList}
                        </Accordion>
                        <Header as="h3" block color="blue">
                            4.2  <Rating icon="star" defaultRating={3} maxRating={5} />
                            {1700} ratings
                            <Header sub floated="right">2,000 students</Header>
                        </Header>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Segment>
    )
}