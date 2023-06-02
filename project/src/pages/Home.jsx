import {useEffect} from "react";
import PageLayout from "../components/HomeLogin/PageLayout";

export default function HomePage(){

    useEffect(()=>{
        document.title = 'Oracleclock';
    })
    return <PageLayout />
}
