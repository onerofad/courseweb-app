import { Link } from "react-router-dom"
import { Header, Menu, Segment, Icon } from "semantic-ui-react"

export const UserHeader = () => {


    return(
        <Segment vertical style={{margin: 0, padding: 0}}>
            <Menu size="big" borderless>
                <Menu.Item>
                    <Header as="h2" secondary>
                        <Icon size="tiny" name="student" />
                        <Header.Content>
                            <Link style={{color: '#000'}} to="/">CourseWeb</Link>
                        </Header.Content>
                    </Header>
                </Menu.Item>
            </Menu>
        </Segment>
    )

}