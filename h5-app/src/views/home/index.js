import React,{useEffect} from "react"
import {Layout} from "../../components/Layout"
import { withRouter } from "react-router";
import storage from 'good-storage'

let Home=props=>{
    useEffect(()=>{
        const user=storage.get("user");
        if(!user)props.history.push('/login')
      }, [])
      
    return (<div>
        <Layout />
    </div>);
}

Home=withRouter(Home)

export {Home};