import {Component} from 'react'
import {Link} from 'react-router-dom'
import logo512 from '../../../src/logo512.png'
import './index.css'

const smartShuffle = [
    'Smart solutions by artificial intelligence ',
    'Unlock Ai potential for a smart future',
    'Revolutionizing effeciancy with AI analytics',
    'Automate work flow with advanced Ai',
    'Personolize customer experience with AI',
    'AI that adapts smart smater decision making',
    'Innovate with Ai for an intelligent tommorow',
    'Experience future with our AI tech',
    'Enhance your bussiness with AI Insights',
    'Transform data into Action with AI'
]

class Login extends Component{
    state = {
        header:smartShuffle[0],
        count:1,
        signIn:false,
        signUp:true,
        username:'',
        email:'',
        password:'',
        checkBox:false,
        err:'',
    }

    componentDidMount(){
        setInterval(()=>(this.getTitle()),5000);
    }

    getTitle = () =>{
        const {count} = this.state
        this.setState(prevsState=>({header:smartShuffle[count],count:(prevsState.count < smartShuffle.length-1) ? prevsState.count+1:0
        }))
    }

    signIn = () =>{
        this.setState({signIn:true,signUp:false})
    }

    signUp = () =>{
        this.setState({signUp:true,signIn:false})
    }

    getUsername = event =>{
        this.setState({username:event.target.value})
    }

    getPassword = event =>{
        this.setState({password:event.target.value})
    }

    onChecked = () =>{
        const {checkBox} = this.state
        this.setState({checkBox:!checkBox})
    }

    formsubmitted =event =>{
        event.preventDefault()
        const {username,password, signIn,signUp,checkBox} = this.state
        if (signIn){
            if (username==='' || password===''){
                this.setState({err:'please fill out all the feilds'})
            }
            else{
                this.setState({err:''})
            }
        }
        else if (signUp){
            if (checkBox === false || username==='' || password==='' ){
                this.setState({err:'please click on the check box and full out required feilds'})
            }
            else{
                this.setState({err:''})
            }
        }
    }

    getSignUpContainer = () =>{
        const {username , password,checkBox,err} = this.state
        return(
        <div>
        <h1 className='create-account'>Create an account</h1>
        <p className='account-desc'>Enter your email below to create your account</p>
        <div className='form-input-container'>
            <label htmlFor='emailSignIn'>Email</label>
            <input type='text' placeholder='Enter your email address' onChange={this.getUsername} value={username} id='emailSignIn' />
        </div>
        <div className='form-input-container'>
            <label htmlFor='passWordSignIn'>Password</label>
            <input type='password' placeholder='Enter your password' onChange={this.getPassword} value={password} id='passWordSignIn' />
        </div>
        <div style={{width:450}}>
            <div className='remember-container' style={{width:'100%'}}>
                <input className='checkbox' onChange={this.onChecked} value={checkBox} type='checkbox'/>
                <label>Accept our Terms and Conditions</label>
            </div>
        </div>
        <button type='submit' className='createAccount-button'>Create account</button>
        <p className='error-message'>{err}</p>
    </div>
    )
    }

    getSignInContainer = () =>{
        const {username,password,err} = this.state
        return(
        <div className='signin'>
            <h1 className='create-account'>Sign in to your account</h1>
            <p className='account-desc'>Enter your email below to Sign in to your account</p>
            <div className='form-input-container'>
                <label htmlFor='emailSignIn'>Email</label>
                <input type='text' placeholder='Enter your email address'  onChange={this.getUsername} value={username} id='emailSignIn' />
            </div>
            <div className='form-input-container'>
                <label htmlFor='passWordSignIn'>Password</label>
                <input type='password' placeholder='Enter your password' onChange={this.getPassword} value={password} id='passWordSignIn' />
            </div>
            <div style={{width:'100%'}}>
                <div style={{display:'flex' , flexDirection:'row' , justifyContent:'space-between' , width:'100%'}}>
                         <div className='remember-container'>
                            <input  className='checkbox' type='checkbox'/>
                            <label>Remember me</label>
                         </div>
                         <p className='forgot-password'>Forgot Password?</p>
                         </div>
                     </div>
                     <button type='submit' className='createAccount-button'>Sign In</button>
                     <p className='error-message'>{err}</p>
                 </div>
    )
    }

    render(){
        const {header,signIn,signUp} = this.state
        console.log(signIn,signUp)
    return(
        <div className='Login-page-main-container'>
            <div className='first-side-container-main' >
            <Link to='/'>
             <img src={logo512} alt='logo' className='login-page-logo' />
             </Link>
             <div className='login-page-second-container'>
            <div className='side-container-login-page'>
                <h1 className='Login-page-header-main'><span>{header}</span></h1>
            </div>
            </div>
            </div>
            <div className='form-container-element-login'>
                <img src='https://th.bing.com/th/id/OIP._raAog4RjS2xo1_S_ObIdwHaEK?w=1920&h=1080&rs=1&pid=ImgDetMain' alt='background' className=' background-image' />
                <form className='form-element-login-page' onSubmit={this.formsubmitted}>
                    <div className='form-button-header'>
                        <button type='button' className={signIn ?'login-page-signIn active' :'login-page-signIn'} onClick={this.signIn}>Sign In</button>
                        <button type='button' className={signUp ?  'login-page-signIn active':'login-page-signIn'}  onClick={this.signUp}>Sign Up</button>
                    </div>
                    <div className='container-main-form-login-page'>
                        {signUp ? this.getSignUpContainer() : this.getSignInContainer() }
                    </div>
                </form>
            </div>
            </div>
)
}
}
export default Login