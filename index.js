import React from 'react'
import ReactDOM from 'react-dom'
import Navbar from './navbar'
import './style.css'
import data from './data.js'
import Cards from './cards.js'


function App (){
    const cardElements = data.map(datas => {
        return <Cards
            key = {datas.id}
            item = {datas}
        />
    })
    return(
        <div>
            <Navbar/>
            {cardElements}
        </div>
    )
}

ReactDOM.render(<App/>,document.getElementById("root"))