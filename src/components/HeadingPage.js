import { Grid, Header, Icon, Image, Menu, Segment } from "semantic-ui-react"

export const HeadingPage = () => {

    return(
        <Segment vertical style={{minHeight: 300, paddingTop: 0, backgroundColor: '#f6f6f6'}}>
            <Grid verticalAlign="middle" stackable container divided>
                <Grid.Row>
                    <Grid.Column width={10}>
                            <Header as="h2" content="Learning online with ease" />
                            <Header as="h2" block color="blue">
                                Welcome to CourseWeb
                                <Header.Subheader>
                                    A place where learning is our 
                                    priority. We emphasize the benefits of learning
                                    through media and other means of learning. We are here
                                    to leverage on the importance and benefits that learning accrue 
                                    to us as knowledgeable and well established people.
                                </Header.Subheader>
                            </Header>
                            <Header as="h2" block color="blue">
                                CourseWeb on demand courses
                                <Header.Subheader>
                                    <Menu secondary>
                                        <Menu.Item><Icon name="checkmark" />React</Menu.Item>
                                        <Menu.Item><Icon name="checkmark" />React native</Menu.Item>
                                        <Menu.Item><Icon name="checkmark" />Graphics</Menu.Item>
                                        <Menu.Item><Icon name="checkmark" />AI</Menu.Item>
                                    </Menu>
                                </Header.Subheader>
                            </Header>
                    </Grid.Column>
                    <Grid.Column stretched width={6}>
                        <Image fluid src="/images/course2.jpg" />
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Segment>
    )
}