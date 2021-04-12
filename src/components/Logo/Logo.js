import Tilt from 'react-tilt'
import logo from './logo.png'
import './logo.css'

const Logo = () => {
    return (
        <div>
            <Tilt className="ma3 Tilt" options={{ max: 25 }} style={{ height: 150, width: 150 }} >
                <div className="Tilt-inner">
                    <img src={logo} alt='logo' />
                </div>
            </Tilt>
        </div>
    )
}

export default Logo
