import { Grid, Header, Segment, Image, Card, Icon, Rating, Placeholder} from "semantic-ui-react"
import Carousel from "react-multi-carousel"
import 'react-multi-carousel/lib/styles.css'
import { useEffect, useState } from "react"
import { getTutorials } from "../API/sila_api"
import { Link, useParams } from "react-router-dom"

export const CourseForDisplay = () => {

    const [tutorials, setutorials] = useState([])

    const param = useParams()

    useEffect(() => {
      getAllTutorials()
    },[])

    const getAllTutorials = () => {
        getTutorials().get("/")
        .then(res => {
            setutorials(res.data)
        }
        )
    }
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
    };

    const tutorialList = tutorials.map(c => (

        <div style={{cursor: 'pointer'}}>
            <Link to={'coursedescription/' + c.title + "/" + c.id} >
            <Card raised>
                <img src={c.image} />
                <Card.Content>
                <Card.Header as="h4">
                    {c.title}
                </Card.Header>
                <Card.Meta>
                    <span className='date'>{c.owner}</span>
                </Card.Meta>
                <Card.Description>
                    <Header as="h3">
                        4.2  <Rating icon="star" defaultRating={3} maxRating={5} />
                        <Header as="h3" sub floated="right">(2,000)</Header>
                    </Header> 
                </Card.Description>
                </Card.Content>
                <Card.Content>
                    <Card.Header>
                        <Icon name='dollar' />
                            {new Intl.NumberFormat().format(c.amount)}
                    </Card.Header>
                </Card.Content>
            </Card>
            <br/>
            </Link>

        </div>

    ))

    return(
        <Segment vertical style={{paddingTop: 30, paddingBottom: 30, margin: 0}}>
            <Grid verticalAlign="middle" container>
                <Grid.Row>
                    <Grid.Column>
                        <Header as="h2">
                            Our Video Tutorials and Courses on Display
                            <Header.Subheader>
                                View course web video tutorials on react, graphics,
                                programming and many more
                            </Header.Subheader>
                        </Header>
                        <Segment vertical>
                            {
                                tutorials.length === 0 ?
                                <Grid>
                                    <Grid.Row>
                                        <Grid.Column width={4}>
                                            <Card>
                                                <Card.Content>
                                                    <Placeholder>
                                                        <Placeholder.Image square />
                                                        <Placeholder.Header>
                                                            <Placeholder.Line />
                                                        </Placeholder.Header>
                                                        <Placeholder.Paragraph>
                                                            <Placeholder.Header>
                                                                <Placeholder.Line length="very short" />
                                                                <Placeholder.Line length="short" />
                                                            </Placeholder.Header>
                                                        </Placeholder.Paragraph>
                                                    </Placeholder>
                                                </Card.Content>
                                            </Card>
                                        </Grid.Column>
                                        <Grid.Column width={4}>
                                            <Card>
                                                <Card.Content>
                                                    <Placeholder>
                                                        <Placeholder.Image square />
                                                    </Placeholder>
                                                </Card.Content>
                                            </Card>
                                        </Grid.Column>
                                        <Grid.Column width={4}>
                                            <Card>
                                                <Card.Content>
                                                    <Placeholder>
                                                        <Placeholder.Image square />
                                                    </Placeholder>
                                                </Card.Content>
                                            </Card>
                                        </Grid.Column>
                                        <Grid.Column width={4}>
                                            <Card>
                                                <Card.Content>
                                                    <Placeholder>
                                                        <Placeholder.Image square />
                                                    </Placeholder>
                                                </Card.Content>
                                            </Card>
                                        </Grid.Column>
                                    </Grid.Row>
                                </Grid>
                                    :
                                    <Carousel responsive={responsive}>
                                        {tutorialList}
                                    </Carousel>
                            }
                        </Segment>  
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Segment>
    )
}