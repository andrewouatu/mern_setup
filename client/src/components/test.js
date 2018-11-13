import React, { Component } from 'react';
import axios from 'axios';

class Test extends Component {
    async componentDidMount(){
        const sendToServer = {
            email: 'test@test.com',
            password: 'asdf1234'
        };

        const signInResponse = await axios.post('/api/sign-in', sendToServer);

        console.log('Sign In Response: ', signInResponse);
        
        // const response = await axios.get('/api/test');
        //
        // console.log('Server Response', response);
        //
        // const user = await axios.get('/api/user');
        //
        // console.log('User Response:', user);
    }

    render(){
        return <h1>This is a Test Component</h1>;
    }
}

export default Test;