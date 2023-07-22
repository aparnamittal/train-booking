import React from 'react'
import Navbar from './Navbar'
import './style.css'
// import Content from './Content'


const post = [
    {
        id: 1,
        name: "DBRT RAJDHANI",
        From: "Delhi",
        to: "Lucknow",
        delay: "1hr",
        expence: 1000,
        seatavailable: 5,
        coach: "AC"

    },]
function Singlepage() {
    return (
        <div>
            <Navbar />
            <div className="home">
                <div className="posts">
                    <div class="card-body">
                        {post.map((post) => (
                            <div class="card"><b>
                                <div class="card-header">
                                    {post.name}
                                </div>
                            </b>
                                <div class="card-body">
                                    <p class="card-text"> (ID={post.id})</p>
                                    <p class="card-text">To:{post.to} From:{post.From}</p>
                                    <p class="card-text">Delay:{post.delay}</p>
                                    <p class="card-text">Expence:{post.expence}</p>
                                    <p class="card-text">seatavailable:{post.seatavailable}</p>
                                    <p class="card-text">coach:{post.coach}</p>
                                </div>
                            </div>)

                        )}
                    </div>
                </div>
            </div >

        </div>
    )
}

export default Singlepage
