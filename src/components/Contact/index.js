import { Component } from 'react'
import { FaMapMarkerAlt } from "react-icons/fa"
import { FaPhone } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { MdFacebook } from "react-icons/md";
import { AiFillInstagram } from "react-icons/ai";
import { FaYoutube } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";
import Header from '../Header'
import './index.css'

class Contact extends Component {
    state = {fullName:'' , organization:'',email:'',message:'',err:''}

    getFullName=event=>{
        this.setState({fullName:event.target.value})
    }

    getEmail = event=>{
        this.setState({email:event.target.value})
    }

    getOrganization = event=>{
        this.setState({organization:event.target.value})
    }

    getMessage = event =>{
        this.setState({message:event.target.value})
    }

    onSubmitForm = event =>{
        event.preventDefault()
        const {email,fullName,organization,message} = this.state
        if (email ==='' ||  fullName==='' || organization==='' || message===''){
            this.setState({err:'please enter the *required feilds'})
        }
        if (!email.includes('@')){
            this.setState({err:'please enter valid entities'})
        }
        else{
           this.setState({err:''}) 
        }
    }

    render(){
        const {fullName,organization,message,email,err} = this.state
    return (
    <div>
        <Header/>
        <div className='contact-main-container'>
        <div className='contact-side-contianer'>
            <h1>Have any doubts or feedback?</h1>
            <p>Fill out the form and we will be in touch</p>
            <p className='address-contact'><FaMapMarkerAlt/><span className='span-element-contact'>DIGIOTAI solutions</span> pvt.Ltd. #501 & #502, Savithramma <br/>Plaza, Mandianguda,Miyapur, Hyderabad - 50</p>
            <div className='icons-contact-section' >
                <FaPhone style={{marginRight:'10px'}}/>
                <p>+91-40-48563130</p>
            </div>
            <p className='icon-mail-contact'><IoMdMail className='contact-mail-icon'/>info@digiotai.com</p>
            <div>
                <div className='icons-container-contact'>
                    <a href='https://www.facebook.com/Digiotai-Solutions-Pvt-Ltd-607949746271770/' rel='' target='_blank' className='anchor-contact'>
                    <MdFacebook className='contact-icons'/>
                    </a>
                    <a href='https://www.instagram.com/digiotai/' target='_blank' rel='noreferrer' className='anchor-contact'>
                    <AiFillInstagram className='contact-icons'/>
                    </a>
                    <a href='https://www.linkedin.com/company/digiotai-solutions-pvt-ltd/' rel='noreferrer' target='_blank' className='anchor-contact'>
                    <BsLinkedin className='contact-icons-one'/>
                    </a>
                    <a href='https://www.youtube.com/channel/UCirn2wcTSI6yhON9AEBtzPQ/videos' rel='noreferrer' target='_blank' className='anchor-contact'>
                    <FaYoutube className='contact-icons'/>
                    </a>
                    <a href='https://twitter.com/digiotai' rel='noreferrer' target='_blank' className='anchor-contact'>
                    <FaTwitter className='contact-icons'/>
                    </a>
                </div>
            </div>
        </div>
        <div className='form-container-main-contact'>
            <form className='form-contact' onSubmit={this.onSubmitForm}>
                <label htmlFor='fullName' className='label-fullname' >Your FullName*</label><br/>
                <input 
                    id='fullName' 
                    type='text' 
                    onChange={this.getFullName} 
                    value={fullName} 
                    className='fullNameForm'
                /><br/>
                <label htmlFor='fullName' className='label-fullname'>Your Email*</label>
                <input 
                    id='fullName' 
                    onChange={this.getEmail} 
                    value={email} 
                    type='text' 
                    className='fullNameForm'
                /><br/>
                <label htmlFor='fullName' className='label-fullname'>Your Organisation*</label>
                <input 
                    id='fullName' 
                    onChange={this.getOrganization} 
                    type='text' 
                    className='fullNameForm' 
                    value={organization}
                /><br/>
                <label htmlFor='fullName' className='label-fullname'>Message*</label><br/>
                <textarea 
                    id='fullName' 
                    className='fullNameForm' 
                    onChange={this.getMessage} 
                    value={message}
                />
                <button type='submit' className='submitButton'>submit</button>
                <p className='err-message'>{err}</p>
            </form>
        </div>
        </div>
    </div>
)
}
}
export default Contact