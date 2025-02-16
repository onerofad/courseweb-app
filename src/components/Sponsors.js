import { Grid, Header, Icon, Segment } from "semantic-ui-react"

export const Sponsors = () => {

    return(
        <Segment vertical style={{padding: 30}}>
            <Grid container divided stackable>
                <Grid.Row>
                    <Grid.Column>
                        <Header as="h4" textAlign="center">
                            IT companies that provide certifications tailored to CourseWeb courses
                        </Header>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row columns={4}>
                    <Grid.Column>
                        <Header as="h2">
                            <Icon size="huge" name="microsoft" />
                            <Header.Content>
                                Microsoft Inc
                            </Header.Content>
                        </Header>
                    </Grid.Column>
                    <Grid.Column>
                        <Header as="h2">
                            <Icon name="google" size="huge" />
                            <Header.Content>
                                Google Inc
                            </Header.Content>
                        </Header>
                    </Grid.Column>
                    <Grid.Column>
                        <Header as="h2">
                            <Icon name="linkedin" size="huge" />
                            <Header.Content>
                                LinkedIn Inc
                            </Header.Content>
                        </Header>
                    </Grid.Column>
                    <Grid.Column>
                        <Header as="h2">
                            <Icon name="amazon" size="huge" />
                            <Header.Content>
                                Amazon Inc
                            </Header.Content>
                        </Header>
                    </Grid.Column>
                    
                </Grid.Row>
            </Grid>

        </Segment>
    )
}