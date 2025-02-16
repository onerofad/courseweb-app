import { Segment, Grid, Form, Button, Header, Icon } from "semantic-ui-react"
import { UserHeader } from "./UserHeader"
import { Footer } from "./Footer"
import { Link, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import getCourseWebUsers from "../API/sila_api"

export const Login = () => {

    const navigate = useNavigate()
    const [users, setusers] = useState([])
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")

    const [emailError, setemailError] = useState(false)
    const [passwordError, setpasswordError] = useState(false)


    useEffect(() => {
        getAllUsers()
    }, [])

    const getAllUsers = () => {
        getCourseWebUsers().get("/")
        .then(response => setusers(response.data))
    }

    const handleEmail = (e) => setemail(e.target.value)
    const handlePassword = (e) => setpassword(e.target.value)

    const [check, setcheck] = useState(false)

    const [loading, setloading] = useState(false)


    const loginBtn = () => {

        const user = users.filter(e => e.email === email)[0]
        if(email === ''){
            setemailError({content: 'Email is Empty', pointing: 'below'})
        }else if(!user){
            setemailError({content: 'Email is not valid', pointing: 'below'})
        }else if(password === ''){
            setpasswordError({content: 'Password is Empty', pointing: 'below'})
        }else if(user.password !== password){
            setpasswordError({content: 'Password is invalid', pointing: 'below'})
        }else {
            setloading(true)
            setTimeout(() => {
                if(user.email === email && user.password === password){
                    sessionStorage.setItem("emailId", email)
                    navigate("/dashboard")
                }
               
            },3000)
        }

    }

    return(
        <>
            <UserHeader />
                <Grid style={{height: '100vh'}} verticalAlign="middle" textAlign="center">
                    <Grid.Column style={{maxWidth: 450}}>
                        <Header  as="h2">
                            <Icon size="large" name="sign in alternate" />
                            <Header.Content>
                                CourseWeb Login
                            </Header.Content>
                        </Header>
                        <Form size="large">
                            <Segment style={{padding: 30}} >
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
                                        placeholder="Password"
                                        type="password"
                                        value={password}
                                        onChange={handlePassword}
                                        error={passwordError}
                                        onClick={() => setpasswordError(false)}
                                    />
                                </Form.Field>
                                <Button
                                    secondary
                                    size="large"
                                    onClick={loginBtn}
                                    loading={loading}
                                >
                                <Icon name={check}  />
                                    Log in
                                </Button>
                                <Link to="/signup">Sign up</Link>

                            </Segment>
                            
                        </Form>
                    </Grid.Column>
                </Grid>
                <Footer />
            </>  
    )

}