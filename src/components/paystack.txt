import { Segment, Grid, Container, Header, Button, Image } from "semantic-ui-react"
import Footer from "./Footer"
import Headers from "./Headers"
import { PaystackButton } from "react-paystack"
import { useEffect, useState } from "react"
import '../main.css'
import getsignupDetails from "../services/API"

const Registration = () => {

    useEffect(() => {
        getDetails()
    }, [])

   // const publicKey = "pk_test_deda09cd68357ea7089f53fdd413eb1b4e8ca4ce"
    const publicKey = "pk_live_793ec47cb747298bc075cb0ca7e9d7ef3a33da25"

   
    const amount = 100000
    const [details, setdetails] = useState([])
    const email = sessionStorage.getItem("em")
    const name =  sessionStorage.getItem("fn")
    const [phone, setPhone] = useState("")

    const getDetails = () => {
        getsignupDetails().get("/")
        .then(res => setdetails(res.data))
        .catch(console.error)
    }

    const updatePayment = () => {
        const detail = details.find(detail => detail.email === email)
        if(detail){
            let id = detail.id
            let paid = "yes"
            let item = {paid}
            getsignupDetails().patch(`/${id}/`, item)
            .catch(console.error)
        }
    }
  
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
        <Segment vertical style={{backgroundColor: '#F6F6F6', padding: '0em 6em'}}>         
        <Grid>
            <Grid.Row>
                <Grid.Column>
                    <Headers />
                </Grid.Column>
            </Grid.Row>
            <Grid.Row style={{paddingTop: '4em', paddingBottom: '2em'}}>
                <Grid.Column>
                    <Header
                        content = "ABA PREMIER LEAGUE - REGISTRATION"
                        style={{
                            fontFamily: 'AGRESSIVE',
                            fontWeight: 'bold',
                            fontSize: '30px',
                        }}
                    />
                </Grid.Column>
            </Grid.Row>
            <Grid.Row>
                <Grid.Column>
                    <Segment style={{padding: '4em 6em'}}>
                        <Grid>
                            <Grid.Row>
                                <Grid.Column width={8}>
                                    <Grid>
                                        <Grid.Row>
                                            <Grid.Column>
                                                <Header
                                                    style={{
                                                        fontFamily: "dharma-gothic-e",
                                                        color: '#000000',
                                                        fontWeight: 'bold',
                                                        fontSize: '50px',
                                                       
                                                      
                                                    }}
                                                >
                                                    ARE YOU THE<br/>
                                                    ULTIMATE CHAMPION ?
                                                </Header>
                                            </Grid.Column>
                                        </Grid.Row>
                                        <Grid.Row>
                                            <Grid.Column>
                                                <p
                                                       style={{
                                                        fontFamily: "Poppins",
                                                        color: '#000000',
                                                        fontWeight: 'normal',
                                                        fontSize: '20px',
                                                      
                                                    }}
                                                
                                                >
                                                    Register now for the ranking week, compete with other
                                                    skilled table tennis players to become the ultimate 
                                                    abapit champion. Register with just 1000 only to get started.
                                                    Click the button below to proceed with payment.
                                                </p>
                                            </Grid.Column>
                                        </Grid.Row>
                                        <Grid.Row>
                                            <Grid.Column>
                                                {
                                                    /*
                                                        <Button
                                                        style={{
                                                            fontFamily: "Poppins",
                                                            color: '#FFFFFF',
                                                            fontWeight: 'normal',
                                                            fontSize: '16px',
                                                            backgroundColor: '#193275'
                                                          
                                                        }}
                                                >
                                                    Pay now
                                                </Button>
                                                    */
                                                }
                                                
                                                <PaystackButton 
                                                    className="paystack-button"
                                                    style={{
                                                        fontFamily: "Poppins",
                                                        color: '#FFFFFF',
                                                        fontWeight: 'normal',
                                                        fontSize: '16px',
                                                        backgroundColor: '#193275'
                                                      
                                                    }}
                                                    {...componentProps} 
                                                />

                                            </Grid.Column>
                                        </Grid.Row>
                                    </Grid>
                                </Grid.Column>
                                <Grid.Column width={8}>
                                    <Image src="/images/patandball.svg" />
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                    </Segment>
                </Grid.Column>
            </Grid.Row> 
            <Grid.Row style={{padding: '2em 6em'}}>
                <Grid.Column>
                    <Footer />
                </Grid.Column>
            </Grid.Row>
        </Grid>

    </Segment>
      
    )
}
export default Registration