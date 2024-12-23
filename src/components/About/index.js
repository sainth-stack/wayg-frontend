import Header from '../Header'
import { FaLinkedin } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import logo512 from '../../../src/logo512.png'
import './index.css'

const About = () =>{

    const  getFooterSection = () =>(
        <div className='footer-home'>
        <div className='footer-first-container'>
            <div className='footer-container-second'>
                <img src={logo512} className='logo-footer' alt='logo' />
                <p className='paragraph-footer'>Where humans and AI collaborate seamlessly</p>
            </div>
            <div className='footer-container-second'>
                <h1 className='footer-header-one'>Company</h1>
                <a href='/about' target='_blank' className='footer-paragraph-one'>About us</a>
                <a href='pricing' target='_blank' className='footer-paragraph-one'>Pricing</a>
                <a href='contact' target='_blank' className='footer-paragraph-one'>Contact</a>
            </div>
            <div className='footer-container-second'>
                <h1 className='footer-header-one'>Resources</h1>
                <a href='/blogs' target='_blank' className='footer-paragraph-one'>Blog</a>
                <a href='/faqs' target='_blank' className='footer-paragraph-one'>FAQs</a>
            </div>
            {/*
            <div className='footer-container-second'>
                <h1 className='footer-header-one'>Legal Terms</h1>
                <p className='footer-paragraph-one'>Terms & Conditions</p>
                <p className='footer-paragraph-one'>User Conduct Guidelines</p>
                <p className='footer-paragraph-one'>Support Commitment</p>
                <p className='footer-paragraph-one'>Privacy Policy</p>
                <p className='footer-paragraph-one'>Security Overview</p>
            </div> */}
        </div>
        <div className='main-footer-container-last'>
            <div className='icons-container-footer'>
                <FaLinkedin className='icon-footer'/>
                <FaXTwitter className='icon-footer' />
                <FaYoutube className='icon-footer' />
            </div>
        </div>
        </div>
    )

    const getFooterAboveSection = () =>(
        <div className='main-container-empower-home-ai'>
            <div className='inner-container-lines inner-container-empower-home'>
                <h1 style={{fontSize:35}}>Empower your team with WYGE.<br/> take the first step now!</h1>
                <p style={{fontSize:20,marginTop:0}}>Stay informed and be the first to know about upcoming releases.</p>
                <a href='/login' target='_blank' className='link-element-signIn-button'>
                <button type='button' className='signupButton-home'>Signup for Free</button>
                </a>
            </div>
        </div>
    )

    return(
    <div >
        <Header/>
        <hr style={{marginTop:'0px'}}/>
        <div style={{padding:'10px'}}>
        <div  style={{width:'100%' , display:'flex',flexDirection:'row',justifyContent:'center', marginTop:'0px'}}>
        <div style={{
            display:'flex',
            flexDirection:'column',
            alignItems:'center',
            width:'50%',
            paddingTop:'30px'
        }}>
            <p className='main-paragraph-about'>About Our Vex-Free Wexa Journey</p>
            <h1 className='about-main-heading'>Experiencing Tomorrow's Tech Today</h1>
            <p className='paragraph-about'>We are committed to elevate human potential and bring real-world solutions to life through automation that streamlines manual tasks, not just for customers and companies but for everyone in the society.</p>
        </div>
        </div>
        <div style={{width:'100%' , display:'flex',flexDirection:'row',justifyContent:'center'}}>
        <img src='https://cdn.prod.website-files.com/65dec7222c3d359a25065704/65f354a4709f9ec942ddb343_about-img.jpg' className='office-image-about' alt='office' />
        </div>
        <div style={{width:'100%' , display:'flex',flexDirection:'row',justifyContent:'center',padding:'10px',height:'50vh'}}>
        <div style={{textAlign:'center',width:'50%'}}>
            <p className='main-paragraph-about'>Our Team</p>
            <h1 className='about-main-heading'>Allow Us To Introduce Ourselves</h1>
            <p className='paragraph-about'>We are a bunch of creative minds, both human and virtual agents, working together, to analyze operational problems and solve them for enterprises. Human members bring unique perspectives, creativity and strategic insights, while our agents dive into routine tasks that usually eat up human time otherwise.</p>
            <p className='sub-paragraph'>It's the perfect blend of human expertise and Ai assistance, ensuring we create innovative automation solutions in accordance to your needs.</p>
        </div>
        </div>
        </div>
        {getFooterAboveSection()}
        {getFooterSection()}
    </div>
)
}
export default About