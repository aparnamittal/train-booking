
import React from 'react'
// import Home from './Home'

const Content = () => {

    const post = [
        {
            id: 1,
            name: "DBRT RAJDHANI",
            From: "Delhi",
            to: "Lucknow",
            delay: "1hr",
            expence: 1000,
            seatavailable: 5,
            coach: "AC",

        },
        {
            id: 2,
            name: "BRAHMPUTRA EXP",
            From: "Delhi",
            to: "Agra",
            delay: "1hr",
            expence: 1500,
            seatavailable: 5,
            coach: "AC"
        },
        {
            id: 3,
            name: "DBRT RAJDHANI",
            From: "Delhi",
            to: "meerut",
            delay: "1hr",
            expence: 2000,
            seatavailable: 5,
            coach: "AC"
        },
        {
            id: 4,
            name: "NORTH EAST EXP",
            From: "Delhi",
            to: "Ghaziabad",
            delay: "1hr",
            expence: 2500,
            seatavailable: 5,
            coach: "AC"
        },
    ]

    return (
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
                                <a href="./Singlepage" class="btn btn-primary">Get Detail</a>
                            </div>
                        </div>)

                    )}
                </div>
            </div>
        </div >
    )
};

export default Content

