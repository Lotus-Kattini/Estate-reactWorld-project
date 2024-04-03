import Searchbar from '../../components/searchbar/Searchbar'
import './homepage.scss'

function Homepage() {
  return (
    <div className='homepage'>
    <div className='textContainer'>
        <div className="wrapper">
            <h1 className='title'>Find Real Estate & Get Your Dream Place</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, blanditiis. Reiciendis quae alias quasi laborum excepturi consectetur animi ducimus voluptatibus, ab hic? Qui ut inventore sunt expedita harum molestias tempora.</p>
            <Searchbar/>
            <div className="boxes">
                <div className="box">
                    <h1>+16</h1>
                    <h2>Years of experience</h2>
                </div>
                <div className="box">
                    <h1>200</h1>
                    <h2>Awards Gaint</h2>
                </div>
                <div className="box">
                    <h1>+2000</h1>
                    <h2>Property Ready</h2>
                </div>
            </div>
        </div>
    </div>
    <div className='imgContainer'>
        <img src="/bg.png" alt="bg" />
    </div>
    <div className='background'/>
    </div>
  )
}

export default Homepage