import {Link, withRouter} from 'react-router-dom'
import logo512 from '../../../src/logo512.png'
import './index.css'

const Header = () =>(
    <nav className='nav-element-main'>
        <img src={logo512} className="logo-element" alt="logo"/>
        <div className='nav-elements'>
            <a href='/blogs' target="_blank" className='link-element'>
                <p className="nav-element">Blog</p>
            </a>
            <Link  to='/pricing' className='link-element'>
                <p className="nav-element">Pricing</p>
            </Link>
        </div>
        <a href='/login' target='_blank' className='link-element-signIn-button'>
        <button type="button" className='signin-button-header'>SignIn</button>
        </a>
    </nav>
)

export default withRouter(Header)