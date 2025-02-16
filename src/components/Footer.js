import { Divider, Grid, Header, List, Segment } from "semantic-ui-react"

export const Footer = () => {

    return(
        <Segment vertical inverted style={{padding: 30, margin: 0}}>
            <Grid container columns={4} stackable>
                <Grid.Row>
                    <Grid.Column>
                        <Header as="h4" inverted content="About" />
                        <List link inverted >
                            <List.Item >About CourseWeb</List.Item>
                            <List.Item >Careers at CourseWeb</List.Item>
                            <List.Item >Our Courses</List.Item>
                            <List.Item >Contact Us</List.Item>

                        </List>
                    </Grid.Column>
                    
                    <Grid.Column>
                        <Header as="h4" inverted content="IT Certifications" />
                        <List link inverted>
                            <List.Item > Amazon AWS</List.Item>
                            <List.Item >AWS Certified Cloud Practitioner
                            </List.Item>
                            <List.Item >Microsoft Azure Fundamentals
                            </List.Item>
                        </List>
                    </Grid.Column> 
                    <Grid.Column>
                        <Header as="h4" inverted content="Web Development" />
                        <List link inverted>
                            <List.Item >Javascript</List.Item>
                            <List.Item >React</List.Item>
                            <List.Item >Angular JS</List.Item>
                            <List.Item>Vue JS</List.Item>
                        </List>
                    </Grid.Column> 
                    <Grid.Column>
                        <Header as="h4" inverted content="Terms & Conditions" />
                        <List link inverted>
                            <List.Item >Privacy Policy</List.Item>
                            <List.Item >Terms</List.Item>
                        </List>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
            <Divider inverted />
            <Grid>
                <Grid.Row>
                    <Grid.Column>
                    

                        <Header as="h4" inverted textAlign="center">
                            <Header.Content>CourseWeb</Header.Content>
                            <Header.Subheader>
                                &copy; 2025 CourseWeb Inc.
                            </Header.Subheader>
                        </Header>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Segment>
    )
}