import React from 'react'

const Nav = () => {
    return (
        <div className="navbar">
            <div className='nav'>
                <div className="navheader">
                    <h3>Horizom Courts</h3>
                </div>
                <div className="navbutton">
                    <button>About us</button>
                    <button>Services</button>
                    <button>Events</button>
                    <button>Contacts</button>
                </div>
                <div className="navbook">
                    <button>Book Now</button>
                </div>

            </div>
            <div className="imagediv">
                <img src="https://i.pinimg.com/1200x/53/b7/a0/53b7a023bcf2bb0284c5bc6906f01893.jpg" alt="" />
                <div className="imagetext">
                    <h2>Unleash your Inner Champion Today All In One Place</h2>
                    <p>Join the ultimate tennis experience - where position meets performance and every swing brings you closer to victory</p>
                    <button>Start your own journey</button>
                </div>
            </div>
        </div>

    )
}

export default Nav
