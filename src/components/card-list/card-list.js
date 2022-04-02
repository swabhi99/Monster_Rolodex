import { Component } from "react";
import './card-list.styles.css'
import './card.styles.css'
import Card from './card'

const cardList = (props)=>{
       const {monsters} = props
        return(
           <Card monsters = {monsters}/>
        )
}

export default cardList