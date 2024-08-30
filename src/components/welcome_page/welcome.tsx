import { useEffect, useState } from 'react'
import s from './style.module.css'

import HeaderBody from "./header_body/header_body"
import Header from "../header/header"
import Footer from "../footer/footer"
import Main from "./main_page/main"



interface WelcomeInfo {

  
} 

function Welcome({}: WelcomeInfo) {
  
  
  return (
    
    <div className={s.container}>
        <Header />
        <HeaderBody />
        <Main />
        <Footer />
    </div>
    
  )
}

export default Welcome