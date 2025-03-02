import { Segment } from "semantic-ui-react"
import { Navbar } from "./Navbar"
import { Footer } from "./Footer"
import { CourseDescription } from "./CourseDescription"
import { HeadingPage } from "./HeadingPage"


export const CourseDescriptionPage = () => {

    return(
        <Segment vertical style={{padding: 0, margin: 0}}>
            <Navbar />
            <CourseDescription />
            <Footer />

        </Segment>
    )
}