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

    export function getTutorials(){
        return(
            axios.create({
                baseURL: 'https://backend-app-pied.vercel.app/api/tutorials',
                headers: {
                    "Content-Type": "application/json",
                    Accept: 'application/json'
                }
            })
        )
    }

    export function getContent(){
        return(
            axios.create({
                baseURL: 'https://backend-app-pied.vercel.app/api/contents',
                headers: {
                    "Content-Type": "application/json",
                    Accept: 'application/json'
                }
            })
        )
    }

    export function getCartItems(){
        return(
            axios.create({
                baseURL: 'https://backend-app-pied.vercel.app/api/cartitems',
                headers: {
                    "Content-Type": "application/json",
                    Accept: 'application/json'
                }
            })
        )
    }

    export function getMyLearnings(){
        return(
            axios.create({
                baseURL: 'https://backend-app-pied.vercel.app/api/mylearnings',
                headers: {
                    "Content-Type": "application/json",
                    Accept: 'application/json'
                }
            })
        )
    }

    export function getTutorialVideos(){
        return(
            axios.create({
                baseURL: 'https://backend-app-pied.vercel.app/api/contents',
                headers: {
                    "Content-Type": "application/json",
                    Accept: 'application/json'
                }
            })
        )
    }

