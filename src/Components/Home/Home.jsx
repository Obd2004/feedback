import React from 'react'
import './Home.scss'
import Navbar from './Navbar/Navbar'
import SideBar from './SideBar/SideBar'
import RoadMap from './RoadMap/RoadMap'
import FeedBack from './Feedback/FeedBack'
import { Container } from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
function Home() {
    return (
        <div className='home'>
            <Container className='container'>
                <section className="home__mentor">
                    <SideBar />
                    <RoadMap />
                </section>
                <section className="home__hero">
                    <Navbar />
                    <FeedBack />
                </section>
            </Container>
        </div>
    )
}

export default Home