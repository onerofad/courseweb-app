import { Grid, Header, Segment, Card, Icon, Rating} from "semantic-ui-react"
import Carousel from "react-multi-carousel"
import 'react-multi-carousel/lib/styles.css'
import { Link } from "react-router-dom"

export const DashboardCourses = () => {

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

    return(
        <Segment vertical style={{paddingTop: 30, margin: 0}}>
            <Grid verticalAlign="middle" container>
                <Grid.Row>
                    <Grid.Column>
                        <Header as="h2">
                            Recommended Video Tutorials and Courses For you
                            <Header.Subheader>
                                These video courses are recommended for your learning
                            </Header.Subheader>
                        </Header>
                        <Segment vertical>
                        <Carousel responsive={responsive}>
                            <div>
                            <Card raised>
                                <img alt="" src="/images/course2.jpg" />
                                    <Card.Content>
                                    <Card.Header>
                                        <Link to="/course_page" style={{color: '#000'}}>
                                            Web development course with React + Django rest framework
                                        </Link>
                                    </Card.Header>
                                    <Card.Meta>
                                        <span className='date'>By John Doe</span>
                                    </Card.Meta>
                                    <Card.Description>
                                        <Header as="h3">
                                            4.2  <Rating icon="star" defaultRating={3} maxRating={5} />
                                        </Header> 
                                    </Card.Description>
                                    </Card.Content>
                                    <Card.Content>
                                        <Card.Header>
                                            <Icon name='dollar' />
                                            19,500
                                        </Card.Header>
                                    </Card.Content>
                                </Card>
                                
                            </div>
                            <div>
                            <Card raised>
                                <img alt="" src="/images/course2.jpg" />
                                    <Card.Content>
                                    <Card.Header>
                                        Web development course with React + Django rest framework
                                    </Card.Header>
                                    <Card.Meta>
                                        <span className='date'>By John Doe</span>
                                    </Card.Meta>
                                    <Card.Description>
                                        <Header as="h3">
                                            4.2  <Rating icon="star" defaultRating={3} maxRating={5} />
                                        </Header> 
                                    </Card.Description>
                                    </Card.Content>
                                    <Card.Content>
                                        <Card.Header>
                                            <Icon name='dollar' />
                                            19,500
                                        </Card.Header>
                                    </Card.Content>
                                </Card>
                            </div>
                            <div>
                            <Card raised>
                                <img alt="" src="/images/course2.jpg" />
                                    <Card.Content>
                                    <Card.Header>
                                        Web development course with React + Django rest framework
                                    </Card.Header>
                                    <Card.Meta>
                                        <span className='date'>By John Doe</span>
                                    </Card.Meta>
                                    <Card.Description>
                                        <Header as="h3">
                                            4.2  <Rating icon="star" defaultRating={3} maxRating={5} />
                                        </Header> 
                                    </Card.Description>
                                    </Card.Content>
                                    <Card.Content>
                                        <Card.Header>
                                            <Icon name='dollar' />
                                            19,500
                                        </Card.Header>
                                    </Card.Content>
                                </Card>
                            </div>
                            <div>
                            <Card raised>
                                <img alt="" src="/images/course2.jpg" />
                                    <Card.Content>
                                    <Card.Header>
                                        Web development course with React + Django rest framework
                                    </Card.Header>
                                    <Card.Meta>
                                        <span className='date'>By John Doe</span>
                                    </Card.Meta>
                                    <Card.Description>
                                        <Header as="h3">
                                            4.2  <Rating icon="star" defaultRating={3} maxRating={5} />
                                        </Header> 
                                    </Card.Description>
                                    </Card.Content>
                                    <Card.Content>
                                        <Card.Header>
                                            <Icon name='dollar' />
                                            19,500
                                        </Card.Header>
                                    </Card.Content>
                                </Card>
                                <br/>
                            </div>
                           
                        </Carousel>;

                        </Segment>  
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Segment>
    )
}