import { Grid, Header, Segment, Image, Card, Icon, Rating} from "semantic-ui-react"
import Carousel from "react-multi-carousel"
import 'react-multi-carousel/lib/styles.css'

export const CourseForDisplay = () => {

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
                            Our Video Tutorials and Courses on Display
                            <Header.Subheader>
                                View course web video tutorials on react, graphics,
                                programming and many more
                            </Header.Subheader>
                        </Header>
                        <Segment vertical>
                        <Carousel responsive={responsive}>
                            <div>
                            <Card raised>
                                <img src="/images/course2.jpg" />
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
                                <img src="/images/course2.jpg" />
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
                                <img src="/images/course2.jpg" />
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
                                <img src="/images/course2.jpg" />
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
                                <nr/>
                            </div>
                           
                        </Carousel>;

                        </Segment>  
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Segment>
    )
}