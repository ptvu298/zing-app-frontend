import { Component, React } from 'react';
import './googleButton.css'
import jwtDecode from 'jwt-decode';
import { Redirect } from 'react-router';

class GoogleButton extends Component {

    constructor(props) {
        super(props);
        this.state = {
            credential: '',
        };
        this.handleCallbackResponse = this.handleCallbackResponse.bind(this);
    }

    handleCallbackResponse(response) {
        const responsePayload = jwtDecode(response.credential);
        console.log(responsePayload);
        console.log("ID: " + responsePayload.sub);
        console.log('Full Name: ' + responsePayload.name);
        console.log('First Name: ' + responsePayload.given_name);
        console.log('Last Name: ' + responsePayload.family_name);
        console.log("Image URL: " + responsePayload.picture);
        console.log("Email: " + responsePayload.email);
        // console.log("props", this.props)
        this.props.saveGoogleResponse(response);

        this.setState({ credential: response.credential });
        // window.location.href = "/addOnInfo";
    }

    componentDidMount() {
        /* global google */
        google.accounts.id.initialize({
            client_id: process.env.REACT_APP_GOOGLE_CLIENT_ID,
            callback: this.handleCallbackResponse,
        });

        google.accounts.id.renderButton(
            document.getElementById("signInDiv"),
            {
                theme: "outline",
                size: "large",
                text: 'LOGIN WITH GOOGLE',
                width: '100%',
                shape: 'rectangular',
            }
        );

        // this.props.getGuppyAccountIntegrationSetting()
    }

    render() {
        return (
            <div id='signInDiv'
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
            >
                {
                    // this.state.credential != '' ? (<Redirect to='/addOnInfo' />) : (<></>)
                    console.log(this.props)
                }

            </div>
        )

    }
}

export default GoogleButton