import { Component } from 'react'
import { FaLinkedin } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { SiBloglovin } from "react-icons/si";
import { FaFilePdf } from "react-icons/fa";
import { MdCardTravel } from "react-icons/md";
import { IoGitNetworkSharp } from "react-icons/io5";
import { GiArtificialIntelligence } from "react-icons/gi"
import { TfiLinkedin } from "react-icons/tfi";
import logo512 from '../../../src/logo512.png'
import imageDashboard from '../../../src/imageDashboard.jpg'
import imageOne from '../../../src/imageOne.jpg'
import imageTwo from '../../../src/imageTwo.jpg'
import imageThree from '../../../src/imageThree.jpg'
import imageFour from '../../../src/imageFour.jpg'
import './index.css'
import Header from '../Header'


const obj = [
    'Business',
    'Process',
    'Operations'
]

class Home extends Component {
    state = { object: obj[0], count: 1 }

    componentDidMount() {
        setInterval(() => (this.changeText()), 2000);
    }

    changeText = () => {
        const { count, object } = this.state
        const len = obj.length
        console.log(object)
        console.log(len)
        this.setState(prevState => ({ object: obj[count], count: prevState.count === obj.length - 1 ? 0 : prevState.count + 1 }))
    }

    renderPagesContent = () => (
        <div className='justify-pages'>
            <div className='pages-container-one-home'>
                <div className='container-page-last card-fixed'>
                    <div className='page-count-one'>
                        <div className='side-container-home-part-1'>
                            <h1 className='side-header'>Choose your AI Coworkers</h1>
                            <p className='side-desc-part-2'>Pick your AI teammates from our ready-to-go marketplace. Choose, add
                                what you need, and start using them in no time.You can even tailor them <br /> to fit your work. </p>
                            <div>
                                <p className='star-desc-part-3'><span className='star-animate'></span>Why hire more staff when you can hire intelligence</p>
                            </div>
                        </div>
                        <img className='page-image' src={imageFour} alt='marketplacing' />
                    </div>
                </div>
                <div className='container-page-last card-fixed'>
                    <div className='page-count-one'>
                        <div className='side-container-home-part-1'>
                            <h1 className='side-header'>Ingest your data</h1>
                            <p className='side-desc-part-2'>Pick your AI teammates from our ready-to-go marketplace. Choose, add
                                what you need, and start using them in no time.You can even tailor them <br /> to fit your work. </p>
                            <div>
                                <p className='star-desc-part-3'><span className='star-animate'></span>Why hire more staff when you can hire intelligence</p>
                            </div>
                        </div>
                        <img className='page-image' src={imageOne} alt='marketplacing' />
                    </div>
                </div>
                <div className='container-page-last card-fixed'>
                    <div className='page-count-one'>
                        <div className='side-container-home-part-1'>
                            <h1 className='side-header'>Choose your AI Coworkers</h1>
                            <p className='side-desc-part-2'>Pick your AI teammates from our ready-to-go marketplace. Choose, add
                                what you need, and start using them in no time.You can even tailor them <br /> to fit your work. </p>
                            <div>
                                <p className='star-desc-part-3'><span className='star-animate'></span>Why hire more staff when you can hire intelligence</p>
                            </div>
                        </div>
                        <img className='page-image' src={imageTwo} alt='marketplacing' />
                    </div>
                </div>
                <div className='container-page-last card-fixed'>
                    <div className='page-count-one'>
                        <div className='side-container-home-part-1'>
                            <h1 className='side-header'>Choose your AI Coworkers</h1>
                            <p className='side-desc-part-2'>Pick your AI teammates from our ready-to-go marketplace. Choose, add
                                what you need, and start using them in no time.You can even tailor them <br /> to fit your work. </p>
                            <div>
                                <p className='star-desc-part-3'><span className='star-animate'></span>Why hire more staff when you can hire intelligence</p>
                            </div>
                        </div>
                        <img className='page-image' src={imageThree} alt='marketplacing' />
                    </div>
                </div>
            </div>
        </div>
    )

    renderPagesAboveContainer = () => (
        <div className='container-four'>
            <div className='heading-element-home-part-3'>
                <h1 className='Heading-element-home-second-part'>Wexa understands the<br />
                    evolving needs of  emerging business</h1>
            </div>
            <div className='Home-desc-part-3'>
                <p className='description-part-3'>Our platform grows with you, providing solutions for your unique requirement.
                </p>
                <div>
                </div>
            </div>
        </div>
    )

    getImagesContainerHome = () => (
        <div className='two-images-container'>
            <div className="image-container-home">
                <img src={imageFour} alt='coworker' className='coworker-image' />
                <img src={imageTwo} alt='shortlist' className='short-list' />
            </div>
            <div className="image-container-home">
                <img src={imageOne} alt='coworker' className='short-list' />
                <img src={imageThree} alt='coworker' className='coworker-image' />
            </div>
        </div>
    )

    getHeadingParagraphContainer = () => (
        <div className='heading-paragraph-container'>
            <div className='heading-element-home-part-2'>
                <h1 className='Heading-element-home-second-part'>Our AI Coworkers form an<br />
                    integral part of your <br />workforce</h1>
            </div>
            <div className='Home-desc-part-2'>
                <p className='description-part-2'>They're designed to mirror your business processes, bringing skills that fit different roles. Our AI helpers work towards accomplishing your
                    goals by adapting your unique way of working.They integrate seamlessly into your existing setup using the tools you already trust. Whether
                    the role is HR Manager, Marketer, Business Developer or Data Analyst, optimize the abilities of AI Coworkers using our process designer.
                </p>
            </div>
        </div>
    )

    getImagesContainer = () => (
        <div className='image-dashboard-container'>
            <img className='dashboard-image-home' src={imageDashboard} alt='dashboard' />
        </div>
    )

    getImageAboveContainer = () => {
        const { object } = this.state
        return (
            <div className='main-third-container-home'>
                <div className='heading-element'>
                    <h1 className='title' >Automate your </h1>
                    <p className={object === 'sales' ? 'sales' : 'span'}>{object}</p>
                </div>
                <h1 className='title'>productivity</h1>
                <div className='title-2'>
                    <h1 className='title2'>with</h1>
                    <h1 className='gradient-2-colors'> AI Employees</h1>
                </div>
                <p className='home-page-main-description'>Atonomous AI and agentic AI platform for productivity and efficiency.</p>
                <div style={{ cursor: 'pointer' }}>
                    <button type="button" className='signupButton-home' st>signIn for Free</button>
                </div>
            </div>
        )
    }

    getHomeMaincontainer = () => (
        <div className='circles-container'>
            <div>
                <div className="Circle-two">
                    {/* <img className='circle-image' src={logo512} alt="circle" /> */}
                </div>
            </div>
        </div>
    )

    getAICoworkerContent = () => (
        <div className='coworkercontent-container'>
            <h1 className='coworker-heading'>What's <span className='inside-coworker'>inside Wexa</span> AI Coworker</h1>
            <p className='coworker-paragraph'>Your personalized AI, incresing employee productivity</p>
            <div className='cards-container-main'>
                <div className='card-container-home'>
                    <div className='card-animation'></div>
                    <img className='card-image-one-home' src='https://cdn.prod.website-files.com/65dec7222c3d359a25065704/65fbf20cea85400f354a2b04_4.png' alt='network' />
                    <h1 className='heading-card-home'>Effortless integration of your apps and data</h1>
                    <p className='paragraph-card-home'>Data and events are utilized from apps making them reactive and reliable companions.</p>
                </div>
                <div className='card-container-home'>
                    <img className='card-image-one-home' src='https://cdn.prod.website-files.com/65dec7222c3d359a25065704/65fbf20cea85400f354a2b04_4.png' alt='network' />
                    <h1 className='heading-card-home'>Effortless integration of your apps and data</h1>
                    <p className='paragraph-card-home'>Data and events are utilized from apps making them reactive and reliable companions.</p>
                </div>
                <div className='card-container-home'>
                    <img className='card-image-one-home' src='https://cdn.prod.website-files.com/65dec7222c3d359a25065704/65fbf20cea85400f354a2b04_4.png' alt='network' />
                    <h1 className='heading-card-home'>Effortless integration of your apps and data</h1>
                    <p className='paragraph-card-home'>Data and events are utilized from apps making them reactive and reliable companions.</p>
                </div>
            </div>
        </div>
    )

    getUseCasesContent = () => (
        <div className='useCases-container'>
            <h1 className='heading-element-causes'>A platform for multiple <span className='furistic-workflow'>Use Cases</span></h1>
            <p className='description-card-ai-one description-card-ai' style={{ marginLeft: 15 }}>Depoy GenAI solutions in production, faster.</p>
            <div className='card-contianer-usecases'>
                <div className='cards-container-main-home-ai'>
                    <div className='card-one-ai'>
                        <div className='container-first-home-ai'>

                            {/*<SiBloglovin className='icon-home-card'/>*/}
                            <p className='icon-home-card'>B'</p>
                            <div className='heading-container'>
                                <h1 className='heading-ai-home-part-four'>Blog Agent</h1>
                                <p className='paragraph-ai-home-part-four'>Multi Agentic Blog generation framework</p>
                            </div>
                        </div>
                        <p className='description-card-ai'>
                            Ability to Create the blogs on the website Urls, Youtube Urls, audio and Video files with the help of the multi agentic workflow
                        </p>
                    </div>
                    <div className='card-one-ai'>
                        <div className='container-first-home-ai'>
                            <TfiLinkedin className='icon-card-home' style={{ fontSize: '32px', margin: '-100px' }} />
                            <div className='heading-container'>
                                <h1 className='heading-ai-home-part-four'>Linkedin Agent</h1>
                                <p className='paragraph-ai-home-part-four'>Linkedin Post generator</p>
                            </div>
                        </div>
                        <p className='description-card-ai'>Ability to generates the linkedin posts based on the topics given and posts them in Likedin</p>
                    </div>
                </div>
                <div className='cards-container-main-home-ai'>
                    <div className='card-one-ai'>
                        <div className='container-first-home-ai'>
                            <IoGitNetworkSharp className='icon-home-card' />
                            <div className='heading-container'>
                                <h1 className='heading-ai-home-part-four'>Synthetic Data Generator</h1>
                                <p className='paragraph-ai-home-part-four'>Artificial Data Generator through Wyge</p>
                            </div>
                        </div>
                        <p className='description-card-ai'> Useful for the creation of the new data,will extend the existing data into some excent and also useful for the filling of the missing data</p>
                    </div>
                    <div className='card-one-ai'>
                        <div className='container-first-home-ai'>
                            <GiArtificialIntelligence className='icon-home-card' style={{ fontSize: '102px', margin: '-10px' }} />
                            <div className='heading-container'>
                                <h1 className='heading-ai-home-part-four'>Data Intelligence </h1>
                                <p className='paragraph-ai-home-part-four'> Sql based Conversational Framework</p>
                            </div>
                        </div>
                        <p className='description-card-ai'>querying with the help of sql for the generation of the textual answers ,graphical visualisations and forecasting the data for the given data tables.</p>
                    </div>
                </div>
                <div className='cards-container-main-home-ai'>
                    <div className='card-one-ai'>
                        <div className='container-first-home-ai'>
                            <FaFilePdf className='icon-home-card' />
                            <div className='heading-container'>
                                <h1 className='heading-ai-home-part-four'>Chat-to-pdf</h1>
                                <p className='paragraph-ai-home-part-four'>Document based conversational system</p>
                            </div>
                        </div>
                        <p className='description-card-ai'>A Question -Answer Retrieval system for the multiple documents</p>
                    </div>
                    <div className='card-one-ai'>
                        <div className='container-first-home-ai'>
                            <MdCardTravel className='icon-home-card' style={{ fontSize: '42px', margin: '-100px' }} />
                            <div className='heading-container'>
                                <h1 className='heading-ai-home-part-four'>Travel planner Agent</h1>
                                <p className='paragraph-ai-home-part-four'>Planning trips for users</p>
                            </div>
                        </div>
                        <p className='description-card-ai'>Recommend  the trips based on the user requirements based on the current weather scenarios.</p>
                    </div>
                </div>
            </div>
            <div className='more-desc-part-container'>
                <p className='desc-part-more'>...and more</p>
            </div>
        </div>
    )

    getLeastcontainer = () => (
        <div>
            <div className='own-your-ai-container-one'>
                <h1 className='futuristic-workflow-heading-main'>Experience work mastaery with Wexa's <span className='furistic-workflow'>Futuristic Workflow</span></h1>
                <div className='card-own-your-ai-one'>
                    <h1 className='heading-own-ai-content'>Own your AI (coming soon)</h1>
                    <p className='paragraph-desc-own-ai'>Customize your own LLM tailored to your AI Coworkers, focusing on your organization's unique business processes. Skip the hassle of constant process optimization next time-- it's already handled for you.</p>
                </div>
            </div>
            <div className='own-your-ai-container-one'>
                <div className='card-own-your-ai-one'>
                    <h1 className='heading-own-ai-content'>Own your AI (coming soon)</h1>
                    <p className='paragraph-desc-own-ai'>Customize your own LLM tailored to your AI Coworkers, focusing on your organization's unique business processes. Skip the hassle of constant process optimization next time-- it's already handled for you.</p>
                </div>
                <div className='card-own-your-ai-one'>
                    <h1 className='heading-own-ai-content'>Own your AI (coming soon)</h1>
                    <p className='paragraph-desc-own-ai'>Customize your own LLM tailored to your AI Coworkers, focusing on your organization's unique business processes. Skip the hassle of constant process optimization next time-- it's already handled for you.</p>
                </div>
            </div>
        </div>
    )

    getFooterAboveSection = () => (
        <div className='main-container-empower-home-ai'>
            <div className='inner-container-lines inner-container-empower-home'>
                <h1 className='empower-heading-footer'>Empower your team with WYGE.<br /> take the first step now!</h1>
                <p className='empower-paragraph' >Stay informed and be the first to know about upcoming releases.</p>
                <a href='/login' target='_blank' className='link-element-signIn-button'>
                    <button type='button' className='signupButton-home'>Signup for Free</button>
                </a>
            </div>
        </div>
    )

    getFooterSection = () => (
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
                    <a href='https://www.linkedin.com/company/digiotai-solutions-pvt-ltd/' target='_blank'>
                        <FaLinkedin className='icon-footer' />
                    </a>
                    <a href='https://x.com/digiotai' target='_blank'>
                        <FaXTwitter className='icon-footer' />
                    </a>
                    <a href='https://www.youtube.com/channel/UCirn2wcTSI6yhON9AEBtzPQ' target='_blank'>
                        <FaYoutube className='icon-footer' />
                    </a>
                </div>
            </div>
        </div>
    )

    render() {
        return (
            <div className='Home-main-container'>
                <Header />
                <div className='Home-sec-container'>
                    <div className='main-container'>
                        {this.getHomeMaincontainer()}
                        {this.getImageAboveContainer()}
                    </div>
                    {this.getImagesContainer()}
                </div>
                {this.getHeadingParagraphContainer()}
                {this.getImagesContainerHome()}
                {this.renderPagesContent()}
                {this.getUseCasesContent()}
                {this.getFooterAboveSection()}
                {this.getFooterSection()}
            </div>
        )
    }
}

export default Home