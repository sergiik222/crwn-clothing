import React from "react";
import './sign-in.styles.scss'
import FormInput from "../form-input/form-input.component";
import CustomButtom from "../custom-button/custom-button.component";
import {auth, signInWithGoogle} from "../../firebase/firebase.utils";

class SignIn extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            email: '',
            password: ''
        }
    }

    handleChange = event => {
        const {value, name} = event.target;
        this.setState({[name]: value})
    }

    handleSubmit = async event => {
        event.preventDefault();
        const {email, password} = this.state;
        try{
            await auth.signInWithEmailAndPassword(email, password)
            this.setState({email: '', password: ''})
        }catch(error){
            console.log(error)
        }

    }

    render(){
        const {email, password} = this.state;
        return(
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        name="email"
                        type='email'
                        value={email}
                        onChange={this.handleChange}
                        label="Email"
                        required
                    />
                    <FormInput
                        name="password"
                        type='password'
                        value={password}
                        onChange={this.handleChange}
                        label="Password"
                        required/>
                    <div className={'buttons'}>
                        <CustomButtom type="submit">Sign in</CustomButtom>
                        <CustomButtom onClick={signInWithGoogle} isGoogleSignIn>Sign in with Google</CustomButtom>
                    </div>
                </form>
            </div>
        )
    }
}


export default SignIn