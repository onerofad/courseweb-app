import { useEffect, useState } from "react"
import { useNavigate, Link } from "react-router-dom"
import { Button, Dropdown, Header, Icon, Label, Menu, Portal, Search, Segment, Table } from "semantic-ui-react"
import { getCartItems } from "../API/sila_api"


export const Navbar = () => {

    const navigate = useNavigate()

    const square = {width: 5, height: 5}

    const [cart_no, setcart_no] = useState()
    const [cartItems, setcartItems] = useState([])

    useEffect(() => {
        getCarts()
    },[cartItems])

    const getCarts = () => {
        getCartItems().get("/")
        .then(res => setcartItems(res.data))
    }

    const cartItem = cartItems.filter(cart => cart.emailId === sessionStorage.getItem("emailId"))

    const cartList = cartItem.map(cart => (
        <Table.Row>
            <Table.Cell>{cart.item}</Table.Cell>
            <Table.Cell>{cart.amount}</Table.Cell>
        </Table.Row>
    ))
    const logout = () => {
        sessionStorage.removeItem("emailId")
        navigate("/")
    }

    if(sessionStorage.getItem("emailId")){
        return(
            <Menu
                size="big"
                borderless
                style={{margin:0}}
            >
                <Menu.Item>
                    <Header as="h2" secondary>
                        <Icon size="tiny" name="student" />
                        <Header.Content><Link style={{color: '#000'}} to="/">CourseWeb</Link></Header.Content>
                    </Header>
                </Menu.Item>
                <Menu.Item>
                    <Header disabled as="h4">
                        <Icon name="chat" size="large" />
                        Chat us
                    </Header>
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

                    <Portal
                        closeOnTriggerClick
                        openOnTriggerClick
                        trigger={
                            <Icon 
                                name="cart" 
                                size= "large"
                            />
                        }
                    >
                        <Segment
                            style={{
                                left: '50%',
                                position: 'fixed',
                                top: '10%',
                                zIndex: 500,
                            }}
                            textAlign="center"
                            >
                            <Header as="h4" textAlign="center">Cart Items</Header>
                                <div style={{width: 400, height: 150, overflow: 'auto'}}>
                                <Table basic celled>
                                    <Table.Header>
                                        <Table.HeaderCell>Item</Table.HeaderCell>
                                        <Table.HeaderCell>Amount</Table.HeaderCell>
                                    </Table.Header>
                                    <Table.Body>
                                        {cartList}
                                    </Table.Body>
                                </Table>
                                {
                                    cartItem.length !== 0 ? 
                                
                                    <Button 
                                        size="large" 
                                        color="green"
                                        onClick={() => navigate("/buynow")}
                                        
                                    >
                                        Buy Now
                                    </Button> 
                                    :
                                    <Label>No Items in the cart</Label>
                                }
                                </div>
                            </Segment>
                    </Portal>
                    <Label circular color="red">{cartItem.length}</Label>

                </Menu.Item>
                <Menu.Item position="right">
                  <Dropdown inline floating text={<Icon inverted name="user outline" circular />}>
                    <Dropdown.Menu>
                        <Dropdown.Item onClick={() => navigate("/dashboard")}>My Learning</Dropdown.Item>
                        <Dropdown.Item onClick={() => navigate("/profile")}>Profile</Dropdown.Item>
                        <Dropdown.Item>Account Settings</Dropdown.Item>
                        <Dropdown.Item onClick={() => logout()}>Log out</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </Menu.Item>
                <Menu.Item>
                   <Header as="h4">
                        <Link to="/dashboard">
                            My Learning
                        </Link>
                   </Header>
                </Menu.Item>            
            </Menu>

        )
 
    }else{
    return(
            <Menu
                size="big"
                borderless
                style={{margin: 0}}
            >
                <Menu.Item>
                    <Header as="h2" secondary>
                        <Icon size="tiny" name="student" />
                        <Header.Content><Link style={{color: '#000'}} to="/">CourseWeb</Link></Header.Content>
                    </Header>
                </Menu.Item>
                <Menu.Item>
                    <Header disabled as="h4">
                        <Icon name="chat" size="large" />
                        Chat us now
                    </Header>
                </Menu.Item>
                <Menu.Item>
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
                {/*<Menu.Item position="right">
                    <Icon name="cart" size="large" />
                    <span>{cartItems.length}</span>

                </Menu.Item>*/}
                <Menu.Item position="right">
                    <div>
                    <Button 
                        secondary
                        basic
                        compact
                        size="big"
                        onClick={() => navigate("/login")}
                    >
                        Log in
                    </Button>
                    <Button 
                        secondary
                        compact
                        size="big"
                        onClick={() => navigate("/signup")}
                    >
                        Sign up
                    </Button>
                    </div>                       
                </Menu.Item>               
            </Menu>
    )
    }   
    
}
