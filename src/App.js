import { createMedia } from "@artsy/fresnel";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./components/Home";
import { Signup } from "./components/Signup";
import { Login } from "./components/Login";
import { Dashboard } from "./components/Dashboard";
import { Profile } from "./components/Profile";
import { CoursePage } from "./components/CoursePage";
import { CourseDescriptionPage } from "./components/CourseDescriptionPage";
import { BuyNow } from "./components/BuyNow";

const { MediaContextProvider, Media } = createMedia({
  breakpoints: {
    mobile: 0,
    tablet: 768,
    computer: 1024
  }
})

const App = () => {

  return(
    <MediaContextProvider>
      <Media at="mobile">
        <BrowserRouter>
          <Routes>
            <Route index element={<Home />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/course_page/:tutorial" element={<CoursePage />} />
            <Route path="/coursedescription/:title/:id" element={<CourseDescriptionPage />} />
            <Route path="/buynow" element={<BuyNow />} />


          </Routes>
        </BrowserRouter>
      </Media>

      <Media greaterThan="mobile">
        <BrowserRouter>
          <Routes>
            <Route index element={<Home />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/course_page/:tutorial" element={<CoursePage />} />
            <Route path="/coursedescription/:title/:id" element={<CourseDescriptionPage />} />
            <Route path="/buynow" element={<BuyNow />} />

          </Routes>
        </BrowserRouter>
      </Media>
    </MediaContextProvider>
  )


}
export default App;

