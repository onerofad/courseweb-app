import { Link, useNavigate } from "react-router-dom"
import { Button, Dropdown, Header, Icon, Menu, Search, Segment } from "semantic-ui-react"


export const DashboardHeader = () => {

    const navigate = useNavigate()

    return(
        <Segment vertical raised style={{paddingTop: 0, paddingBottom: 0}}>
            <Menu
                size="big"
                borderless
            >
                <Menu.Item>
                    <Header as="h2" secondary>
                        <Icon size="tiny" name="student" />
                        <Header.Content><Link style={{color: '#000'}} to="/">CourseWeb</Link></Header.Content>
                    </Header>
                </Menu.Item>
                <Menu.Item>
                    <Header disabled as="h4" content="Talk To Us Now" />
                </Menu.Item>
                <Menu.Item >
                    <Search
                        placeholder="Search for anything"                  
                    />
                </Menu.Item>
                <Menu.Item>
                    <Dropdown fluid selection text="Find a course">
                        <Dropdown.Menu>
                            <Dropdown.Item content="Javascript" />
                            <Dropdown.Item content="React" />
                            <Dropdown.Item content="Graphics" />
                            <Dropdown.Item content="Web Development" />

                        </Dropdown.Menu>
                    </Dropdown>
                </Menu.Item>
                <Menu.Item>
                    <Icon name="add to cart" size="large" />
                </Menu.Item>
                <Menu.Item position="right"   style={{paddingRight: 120}}>
                  <Dropdown inline floating text={<Icon inverted name="user outline" circular />}>
                    <Dropdown.Menu>
                        <Dropdown.Item onClick={() => navigate("/dashboard")}>Dashboard</Dropdown.Item>
                        <Dropdown.Item onClick={() => navigate("/profile")}>Profile</Dropdown.Item>
                        <Dropdown.Item>Account Settings</Dropdown.Item>
                        <Dropdown.Item onClick={() => navigate("/")}>Log out</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </Menu.Item>               
            </Menu>

        </Segment>
            
    )
}
