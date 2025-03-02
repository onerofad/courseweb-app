import { Grid, Segment, Header, Icon, Form, Button, Table, Modal } from "semantic-ui-react"
import { UserHeader } from "./UserHeader"
import { Footer } from "./Footer"
import { Link, useNavigate } from "react-router-dom"
import { getCartItems, getMyLearnings, getTutorials } from "../API/sila_api"
import { useState, useEffect, useReducer } from "react"
import { PaystackButton } from "react-paystack"
import '../main.css'

const initialState = {
    open: false,
    open_success: false,
    size_success: undefined,
    size: undefined
}

 function deleteReducer(state, action){
    switch(action.type){
        case 'open':
            return {open: true, size: action.size}
        case 'open_payment_success':
            return {open_success: true, size_success: action.size_success}
        case 'close':
            return {open: false, open_success: false}
        default:
            throw new Error('An error has occurred')

    }

 }

export const BuyNow = () => {

    const [state, dispatch] = useReducer(deleteReducer, initialState)

    const {open, size, open_success, size_success} = state

    const [loading, setLoading] = useState(false)

    const [check, setCheck] = useState('')

    const [id, setId] = useState()

    const [cartItems, setcartItems] = useState([])

    const [email, setemail] = useState(sessionStorage.getItem("emailId"))
    
    const [name, setname] = useState(sessionStorage.getItem("fname") + " " + sessionStorage.getItem("lname"))

    const emailId = sessionStorage.getItem("emailId")

    //const publicKey = "pk_test_deda09cd68357ea7089f53fdd413eb1b4e8ca4ce"
    const publicKey = "pk_live_793ec47cb747298bc075cb0ca7e9d7ef3a33da25"


    useEffect(() => {
        getCarts()
    },[])
    
    const getCarts = () => {
        getCartItems().get("/")
        .then(res => setcartItems(res.data))
    }
    
    const cartItem = cartItems.filter(cart => cart.emailId === sessionStorage.getItem("emailId"))
    
    let count = 0
    let total = 0
    let amount = 0

    const cart_id = []

    const tutorialId = []

    cartItem.map(cart => {
        total += cart.amount
        cart_id.push(cart.id)
        tutorialId.push(cart.tutorial_id)
    })

    const removeItem = (id) => {
        setId(id)
        dispatch({type: 'open', size: 'mini'})
    }

    const deleteItem = () => {
        setLoading(true)
        getCartItems().delete(`/${id}`)
        .then(() => {
            setLoading(false)
            setCheck('check')
            getCarts()
        }
        )

    }

    const cartList = cartItem.map(cart => (
        <Table.Row>
            <Table.Cell>{++count}</Table.Cell>
            <Table.Cell>{cart.item}</Table.Cell>
            <Table.Cell>
                {cart.amount}
            </Table.Cell>
            <Table.Cell>
                <Icon 
                    onClick={() => removeItem(cart.id)} 
                    link={true} 
                    name="trash" 
                />
            </Table.Cell>
           
        </Table.Row>
    ))


    const updatePayment = () => {

        tutorialId.forEach(addTutorial);
        function addTutorial(tutorial_id){
            let items = {tutorial_id, emailId}
            getMyLearnings().post('/', items)
        }

        cart_id.forEach(removeCart);
        function removeCart(id){
            getCartItems().delete(`/${id}/`)
            .then(() => {
                getCarts()
                dispatch({type: 'open_payment_success', size_success: 'mini'})
            }
            )
            
        }
        
    }

    const navigate = useNavigate()
    const mylearning = () => {
        dispatch({type: 'close'})
        navigate("/dashboard")
    }
    amount = total * 100
    const componentProps = {
        email,
        amount,
        metadata: {
          name,
        },
        publicKey,
        text: "Pay Now",
        onSuccess: () =>
          {   
              updatePayment()
          },
        
      }

    return(
        <>
            <UserHeader />
            <Segment vertical>
            <Grid divided textAlign="center">
                    <Grid.Row>
                    <Grid.Column width={6}>
                        <Segment size="large">
                            <Header as="h4"  icon >
                                <Icon inverted link={true} circular name="cart" />
                                Cart Items
                            </Header>
                        </Segment>
                       
                    <Table basic celled>
                        <Table.Header>
                            <Table.HeaderCell>No</Table.HeaderCell>
                            <Table.HeaderCell>Item</Table.HeaderCell>
                            <Table.HeaderCell>Amount</Table.HeaderCell>
                            <Table.HeaderCell>Action</Table.HeaderCell>

                        </Table.Header>
                        <Table.Body>
                            {cartList}
                        </Table.Body>
                    </Table>
                    <Header>
                        <Header.Content>
                            Total Amount:
                        </Header.Content>
                        <Header.Content>
                            &nbsp;&nbsp;{new Intl.NumberFormat().format(total) }
                        </Header.Content>
                    </Header>


                    </Grid.Column>
                    <Grid.Column width={6} style={{maxWidth: 450}}>
                        <Segment size="large">
                            <Header as="h4" icon >
                                <Icon inverted circular name="credit card outline" />
                                Credit Card Details
                            </Header>
                        </Segment>
                        <Form size="large">
                            <Segment style={{padding: 30}} >
                                <Form.Field>
                                    <Form.Input 
                                        placeholder="Email"
                                        value={email}
                               />
                                </Form.Field>
                                <Form.Field>
                                    <Form.Input 
                                        placeholder="Full Name"
                                        value={name}
                               />
                                </Form.Field>
                                <PaystackButton 
                                    className="paystack-button"
                                        style={{
                                           backgroundColor: 'black',
                                           width: 40,
                                           height: 40
                                                      
                                        }}
                                        {...componentProps} 
                                />

                            </Segment>
                            
                        </Form>
                    </Grid.Column>
                  
                    </Grid.Row>
                </Grid>

            </Segment>
                
                <Footer />
                <Modal
                    size={size}
                    open={open}
                >
                    <Modal.Header>
                        Delete
                        <Icon 
                            link={true} 
                            style={{float: 'right'}} 
                            size="small" 
                            name="close" 
                            onClick={() => dispatch({type: 'close'})}
                        />
                    </Modal.Header>
                    <Modal.Content>
                        <Header content="Delete Cart Item?" />
                    </Modal.Content>
                    <Modal.Actions>
                        <Button 
                            size="small" 
                            positive 
                            content="Yes" 
                            loading={loading}
                            icon={check}
                            onClick={() => deleteItem()}
                        />
                        <Button 
                            size="small" 
                            negative 
                            content="Cancel" 
                            onClick={() => dispatch({type: 'close'})}
                        />
                    </Modal.Actions>
                        
                </Modal>
                <Modal
                    open={open_success}
                    size={size_success}
                >
                    <Modal.Header>
                        Payment Prompt
                    </Modal.Header>
                    <Modal.Content>
                        <Header as="h4">
                            Payment successfull
                            <Header.Subheader>
                                Tutorial Title
                            </Header.Subheader>
                        </Header>
                    </Modal.Content>
                    <Modal.Actions>
                        <Button 
                            onClick={() => mylearning()}  
                            size="small"
                            secondary
                        >
                            OK
                        </Button>
                    </Modal.Actions>
                </Modal>
            </>  
    )
}