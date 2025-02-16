import axios from "axios";

    export default function getCourseWebUsers(){
       return(
            axios.create({
                baseURL: 'https://backend-app-pied.vercel.app/api/coursewebusers/',
                headers: {
                    "Content-Type": 'application/json',
                    Accept: 'application/json'
                }
            })
       )     
    }
    export function getVideos(){
        return(
            axios.create({
                baseURL: 'https://backend-app-pied.vercel.app/api/uploadvideos/',
                headers: {
                    "Content-Type": "application/json",
                    Accept: 'application/json'
                }
            })
        )
    }

    