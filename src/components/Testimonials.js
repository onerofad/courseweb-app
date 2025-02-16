import { Grid, Header, Segment, Card, Icon } from "semantic-ui-react"

export const Testimonials = () => {

    const description = [
        'Amy is a violinist with 2 years experience in the wedding industry.',
        'She enjoys the outdoors and currently resides in upstate New York.',
      ].join(' ')
    return(
        <Segment vertical style={{padding: 50, backgroundColor: '#f6f6f6'}}>
            <Grid container verticalAlign="middle" stackable>
                <Grid.Row>
                    <Grid.Column>
                        <Header as="h2" content="What learners are saying about CourseWeb" />
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row columns={3}>
                    <Grid.Column>
                        <Card color="blue" raised>
                            <Card.Content header='About Amy' />
                            <Card.Content description={description} />
                            <Card.Content extra>
                            <Icon size="large" color="blue" name='image outline' />John Doe
                            </Card.Content>
                        </Card>
                    </Grid.Column>
                    <Grid.Column>
                        <Card color="blue" raised>
                            <Card.Content header='About Amy' />
                            <Card.Content description={description} />
                            <Card.Content extra>
                            <Icon size="large" color="blue" name='image outline' />John Doe
                            </Card.Content>
                        </Card>
                    </Grid.Column>
                    <Grid.Column>
                        <Card color="blue" raised>
                            <Card.Content header='About Amy' />
                            <Card.Content description={description} />
                            <Card.Content extra>
                            <Icon color="blue" size="large" name='image outline' />John Doe
                            </Card.Content>
                        </Card>
                    </Grid.Column>
                    
                </Grid.Row>
            </Grid>
            
        </Segment>
    )
}