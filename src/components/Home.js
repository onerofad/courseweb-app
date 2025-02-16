import { Segment } from "semantic-ui-react"
import { Navbar } from "./Navbar"
import { HeadingPage } from "./HeadingPage"
import { CourseForDisplay } from "./CoursesForDiaplay"
import { Testimonials } from "./Testimonials"
import { Sponsors } from "./Sponsors"
import { Footer } from "./Footer"


export const Home = () => {

    return(
        <Segment vertical style={{padding: 0, margin: 0}}>
            <Navbar />
            <HeadingPage />
            <CourseForDisplay />
            <Testimonials />
            <Sponsors />
            <Footer />
        </Segment>
    )

}
