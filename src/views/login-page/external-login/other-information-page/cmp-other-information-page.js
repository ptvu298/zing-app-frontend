import React, { Component } from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import PropTypes from "prop-types";
import OtherInfoFormComponent from "./other-information-form/cnt-other-information-form"


class OtherInfoPageComponent extends Component {
    state = {
        loading: false,
    };
    submit = (profile) => {
        const { createCustomerByEmail, signupGuppyAccount, addNewUserProfile } = this.props;
        this.setState({
            loading: true,
        });

        const email = {
            apiKey: this.props.authConfig.apiKey,
            channelRefKey: this.props.authConfig.channelRefKey,
            email: profile.data.email,
        };

        createCustomerByEmail(email)
            .then(() => {
                signupGuppyAccount({
                    ...profile.data,
                    ...{ apiKey: this.props.authConfig.apiKey },
                }).then(() => {
                    const userProfile = {
                        email: profile.data.email,
                        dateCreated: new Date().getTime(),
                        birthDate: new Date(profile.birthDate).getTime(),
                        gender: profile.gender,
                        phoneNumber: profile.phoneNumber
                    };
                    
                    addNewUserProfile(userProfile).then(() => {
                        const loginData = {
                            email: profile.data.email,
                            password: profile.data.password,
                            typeLogin: profile.data.typeLogin,
                        };

                        this.props.getGuppyUserByEmail(loginData.email).then((payload) => {
                            if (payload) {
                                this.props.login(loginData);
                            }
                        });
                    });
                });
            })
            .catch((e) => console.log(e));
    };

    componentWillMount() {
        this.props.getGuppyAccountIntegrationSetting();
    }

    render() {
        const { loading } = this.state;
        return (
            <>
                {loading ? (
                    <div
                        style={{
                            width: "100%",
                            height: "100%",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            textAlign: "center",
                        }}
                    >
                        <CircularProgress />
                    </div>
                ) : (
                    <div>
                        <OtherInfoFormComponent submit={this.submit} />
                    </div>
                )}
            </>
        );
    }
}

OtherInfoPageComponent.propTypes = {
    history: PropTypes.shape({
        push: PropTypes.func.isRequired,
    }).isRequired,
};

export default OtherInfoPageComponent;
