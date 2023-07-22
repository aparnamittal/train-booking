import React from 'react'

function Navbar() {
    return (
        <>
            <nav class="navbar">
                <div>
                    <div class="nav-title">
                        <h2> Train schedule</h2>
                    </div>
                </div>

                <div class="links">
                    <a href="/" target="_blank"> Home </a>
                    <a href="/singlepage" target="_blank"> Singlepage </a>
                </div>
            </nav>
        </>
    )
}

export default Navbar

