import { Segment, Grid, Form, Button, Header, Icon, TextArea } from "semantic-ui-react"
import { UserHeader } from "./UserHeader"
import { Footer } from "./Footer"
import { Link, useNavigate } from "react-router-dom"
import { useState, useEffect } from "react"
import getCourseWebUsers from "../API/sila_api"

export const Signup = () => {

    useEffect(() => {
        getAllUsers()
    }, [])

    const [users, setusers] = useState([])

    const getAllUsers = () => {
        getCourseWebUsers().get("/")
        .then(response => setusers(response.data))


    }

    const navigate = useNavigate()
    const [email, setemail] = useState("")
    const [firstname, setfirstname] = useState("")
    const [lastname, setlastname] = useState("")
    const [phone, setphone] = useState("")
    const [password, setpassword] = useState("")
    const [confirmpassword, setconfirmpassword] = useState("")
    const [address, setaddress] =useState("")


    const [emailError, setemailError] = useState(false)
    const [firstnameError, setfirstnameError] = useState(false)
    const [lastnameError, setlastnameError] = useState(false)
    const [phoneError, setphoneError] = useState(false)
    const [addressError, setaddressError] = useState(false)
    const [passwordError, setpasswordError] = useState(false)
    const [confirmpasswordError, setconfirmpasswordError] = useState(false)

    const handleEmail = (e) => setemail(e.target.value)
    const handleFirstname = (e) => setfirstname(e.target.value)
    const handleLastname = (e) => setlastname(e.target.value)
    const handlePhone = (e) => setphone(e.target.value)
    const handleAddress = (e) => setaddress(e.target.value)

    const handlePassword = (e) => setpassword(e.target.value)
    const handleConfirmpassword = (e) => setconfirmpassword(e.target.value)

    const [loading, setloading] = useState(false)

    const [check, setcheck] = useState(false)

    const signupBtn = () => {
        const user = users.find(e => e.email === email)
        if(email === ''){
            setemailError({content: 'Email is empty', pointing: 'below'})
        }else if(user){
            setemailError({content: 'Email taken', pointing: 'below'})
        }else if(firstname === ''){
            setfirstnameError({content: 'First name is empty', pointing: 'below'})
        }else if(lastname === ''){
            setlastnameError({content: 'Last name is empty', pointing: 'below'})
        }else if(phone === ''){
            setphoneError({content: 'Phone number is empty', pointing: 'below'})
        }else if(password === ''){
            setpasswordError({content: 'password is empty', pointing: 'below'})
        }else if(confirmpassword === ''){
            setconfirmpasswordError({content: 'confirm password is empty', pointing: 'below'})
        }else if(password !== confirmpassword){
            setconfirmpasswordError({content: 'Password mismatch', pointing: 'below'})
        }else if(address === ''){
            setaddressError({content: 'Address is Empty', pointing: 'below'})
        }else{
            setloading(true)
            setTimeout(() => {
                let items = {email, password, firstname, lastname, phone, address}
                getCourseWebUsers().post("/", items)
                .then(() => {
                    setloading(false)
                    setcheck(true)
                    setemail("")
                    setpassword("")
                    setconfirmpassword("")
                    setfirstname("")
                    setlastname("")
                    setphone("")
                    setaddress("")

                })
            }, 3000)
            
            
        }
    }
    return(
        <>
            <UserHeader />
                <Grid style={{height: '100vh', padding: 50}} verticalAlign="middle" textAlign="center">
                    <Grid.Column style={{maxWidth: 600}}>
                        <Header textAlign="center"  as="h2" onClick={() => navigate("/")}>
                            <Icon size="large" name="signup" />
                            <Header.Content>
                                CourseWeb Sign Up
                            </Header.Content>
                        </Header>
                        <Form size="large">
                            <Segment style={{padding: 30}} >
                              <Form.Group widths="equal">
                                <Form.Field>
                                    <Form.Input 
                                        placeholder="Email"
                                        type="email"
                                        value={email}
                                        onChange={handleEmail}
                                        error={emailError}
                                        onClick={() => setemailError(false)}
                                    />
                                </Form.Field>
                                <Form.Field>
                                    <Form.Input 
                                        placeholder="First Name"
                                        type="text"
                                        value={firstname}
                                        onChange={handleFirstname}
                                        error={firstnameError}
                                        onClick={() => setfirstnameError(false)}
                                    />
                                </Form.Field>
                              </Form.Group>
                              <Form.Group widths="equal">
                                <Form.Field>
                                    <Form.Input 
                                        placeholder="Last Name"
                                        type="text"
                                        value={lastname}
                                        onChange={handleLastname}
                                        error={lastnameError}
                                        onClick={() => setlastnameError(false)}
                                    />
                                </Form.Field>
                                <Form.Field>
                                    <Form.Input 
                                        placeholder="Phone Number"
                                        type="text"
                                        value={phone}
                                        onChange={handlePhone}
                                        error={phoneError}
                                        onClick={() => setphoneError(false)}
                                    />
                                </Form.Field>
                              </Form.Group>
                              <Form.Group widths="equal">
                              <Form.Field>
                                    <Form.Input 
                                        placeholder="Password"
                                        type="password"
                                        value={password}
                                        onChange={handlePassword}
                                        error={passwordError}
                                        onClick={() => setpasswordError(false)}
                                 
                                    />
                                </Form.Field>
                                <Form.Field>
                                    <Form.Input 
                                        placeholder="Confirm password"
                                        type="password"
                                        value={confirmpassword}
                                        onChange={handleConfirmpassword}
                                        error={confirmpasswordError}
                                        onClick={() => setconfirmpasswordError(false)}
                                    />
                                </Form.Field>
                              </Form.Group>
                                <Form.Field>
                                    <Form.TextArea
                                        placeholder="Address"
                                        value={address}
                                        error={addressError}
                                        onChange={handleAddress}
                                        onClick={() => setaddressError(false)}
                                    />
                                </Form.Field>
                                <Button
                                    secondary
                                    size="large"
                                    onClick={signupBtn}
                                    loading={loading}
                                >
                                    <Icon name={check} />
                                    Sign up
                                </Button>
                                <Link to="/login">Login</Link>
                            </Segment>
                            
                        </Form>
                    </Grid.Column>
                </Grid>
                <Footer />
            </>  
    )

}