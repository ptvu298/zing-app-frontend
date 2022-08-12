import React, { Component } from "react";
import { alpha, InputLabel, makeStyles, Menu, MenuItem, NativeSelect } from "@material-ui/core";
import Select from "@material-ui/core/Select";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import CssBaseline from "@material-ui/core/CssBaseline";
import FormControl from "@material-ui/core/FormControl";
import Validator from "validator";
import InputBase from '@material-ui/core/InputBase';
import './other-information-form.css'

function PoweredBy() {
    return (
        <Typography variant="body2" style={{ color: "white" }} align="center">
            {"Powered by "}
            <Link style={{ color: "white" }} href="http://www.redharestudios.sg/">
                Guppy
            </Link>{" "}
            {/* {new Date().getFullYear()} */}
            {/* {'.'} */}
        </Typography>
    );
}

function Copyright() {
    return (
        <Typography variant="body2" style={{ color: "white" }} align="center">
            {"Copyright © "}
            <Link style={{ color: "white" }} href="http://www.redharestudios.sg/">
                Zing Ventures
            </Link>{" "}
            {new Date().getFullYear()}
            {"."}
        </Typography>
    );
}

const useStylesTF = makeStyles((theme) => ({
    root: {
        border: '2px solid #8d8d8d',
        overflow: 'hidden',
        color: '#8d8d8d',
        borderRadius: '10px',
        backgroundColor: 'transparent',
        transition: theme.transitions.create(['border-color', 'box-shadow']),
        '&$focused': {
            border: '2px solid #e7a94b',
            boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 2px`,
            color: '#fff'
        },
    },

    focused: {},
}));

function CustomTextField(props) {
    const classes = useStylesTF();

    return <TextField
        InputProps={{ classes, disableUnderline: true }}
        {...props} />;
}

function CustomEmailFilled(props) {
    const classes = useStylesTF();

    return <TextField
        InputProps={{ classes, disableUnderline: true, readOnly: true }}
        {...props} />;
}

function CustomDatePicker(props) {
    const classes = useStylesTF();

    return <TextField InputProps={
        {
            classes,
            disableUnderline: true,
            inputProps: { min: "1900-01-01", max: new Date().toISOString().split("T")[0] },
        }
    }
        {...props}
    />;
}

const UseStyleSelect = withStyles((theme) => ({
    root: {
        'label + &': {
            marginTop: theme.spacing(3),
        },
    },
    input: {
        borderRadius: "10px",
        position: 'relative',
        backgroundColor: "transparent",
        border: '2px solid #8d8d8d',
        height: '60px',
        paddingLeft: '10px',
        color: '#8d8d8d',
        padding: 0,
        fontSize: '16px',
        fontWeight: 400,
        letterSpacing: '0.00938em',
        transition: theme.transitions.create(['border-color', 'box-shadow']),
        // Use the system font instead of the default Roboto font.
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
        '&:focus': {
            borderRadius: '10px',
            borderColor: '#e7a94b',
            boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
        },
    },
}))(InputBase);



const styles = (theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: "100%", // Fix IE 11 issue.
        marginTop: theme.spacing(2),
        fullWidth: true,
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
        fontFamily: "Lucida Sans Unicode",
        background: "orange",

        "&:hover": {
            backgroundColor: "darkorange",
        },
    },
    logo: {
        width: "300px",
        height: "auto",
    },
    signupInputGroup: {
        // background: "orange",
        // borderRadius: "3px",
    },
    textFieldSignup: {
        borderRadius: "4px",
        background: "white",
    },
    signin: {
        margin: theme.spacing(2, 0, 2),
        background: "white",
        "&:hover": {
            backgroundColor: "grey",
        },
        width: "100%",
    },
    signinAlign: {
        textAlign: "center",
    },
    formSelect: {
        color: '#8d8d8d',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '10px',
        backgroundColor: 'transparent',
        transition: theme.transitions.create(['border-color', 'box-shadow']),
    }
});
class OtherInfoFormComponent extends Component {
    state = {
        data: {
            email: "",
            password: "",
            confirmPassword: "",
            firstName: "",
            lastName: "",
            typeLogin: "Local",
        },
        birthDate: new Date().toISOString().split("T")[0],
        gender: "",
        phoneNumber: "",
        errors: {},
    };
    onChange = (e) => {
        this.setState({
            ...this.state,
            data: { ...this.state.data, [e.target.name]: e.target.value },
        });
    };

    // Info not to send when sign up Guppy

    onChangeBirthDate = (e) => {
        this.setState({ birthDate: e.target.value });
    };

    onChangeGender = (e) => {
        this.setState({ gender: e.target.value });
    };

    onChangePhoneNumber = (e) => {
        this.setState({ phoneNumber: e.target.value });
    };

    //---------------------------------------//

    validate = (data) => {
        const errors = {};
        if (!Validator.isEmail(data.email)) {
            errors.email = "Must be a valid email";
        }

        if (!data.password || data.password.length < 6) {
            errors.password =
                "Invalid password, the password can not be less than 6 characters";
        }

        if (!data.firstName) {
            errors.firstName = "First name can not be empty";
        }

        if (!data.lastName) {
            errors.lastName = "Last name can not be empty";
        }

        if (!data.password) {
            errors.password = "Password can not be empty";
        }

        if (!Validator.isMobilePhone(this.state.phoneNumber)) {
            errors.phoneNumber = "Invalid phone number";
        }

        if (!data.confirmPassword) {
            errors.confirmPassword = "The confirm password can not be empty";
        } else {
            if (data.password !== data.confirmPassword) {
                errors.confirmPassword = "The confirm password does not match";
            }
        }

        return errors;
    };

    signup = (e) => {
        e.preventDefault();

        const errors = this.validate(this.state.data);
        if (Object.keys(errors).length > 0) {
            this.setState({ errors });
        } else {
            this.props.getGuppyUserByEmail(this.state.data.email).then((payload) => {
                if (payload) {
                    const { errors } = this.state;
                    errors.email = "The email is invalid or already used";
                    this.setState({ errors: errors });
                } else {
                    this.props.submit({ ...this.state, ...this.props.apiConfig });
                }
            });
        }
    };

    render() {
        const { classes } = this.props;
        const { data, errors } = this.state;
        return (
            <Box
                boxShadow={0}
                spacing={3}
                style={{
                    marginBottom: "5%",
                    marginLeft: "10%",
                    marginRight: "10%",
                    marginTop: "3%",
                    paddingBottom: "3%",
                    backgroundColor: "#424040",
                }}
                xs={12}
                sm={6}
            >
                <Container component="main" maxWidth="xs">
                    <CssBaseline />
                    <div className={classes.paper}>
                        {/* <img src={logo} className={classes.logo} /> */}
                        <Grid container spacing={2}>
                            <Grid item xs={6} align="left">
                                <div className="zingTitle">Z I N G</div>
                                {/* <hr className="hrTitle" /> */}
                                <div className="rewardTitle">Rewards</div>
                            </Grid>
                        </Grid>
                        <form className={classes.form} noValidate onSubmit={this.signup}>
                            <Grid container spacing={2} className={classes.signupInputGroup}>
                                <Grid item xs={12} sm={6}>
                                    <CustomTextField
                                        autoComplete="fname"
                                        name="firstName"
                                        variant="filled"
                                        onChange={this.onChange}
                                        value={data.firstName}
                                        required
                                        fullWidth
                                        id="firstName"
                                        label="First Name"
                                        error={!!errors.firstName}
                                        helperText={errors.firstName}
                                    />

                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <CustomTextField
                                        variant="filled"
                                        required
                                        onChange={this.onChange}
                                        value={data.lastName}
                                        fullWidth
                                        id="lastName"
                                        label="Last Name"
                                        name="lastName"
                                        autoComplete="lname"
                                        error={!!errors.lastName}
                                        helperText={errors.lastName}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <CustomDatePicker
                                        id="date"
                                        label="Date of birth"
                                        variant="filled"
                                        fullWidth
                                        type="date"
                                        defaultValue={
                                            this.state.birthDate !== ""
                                                ? this.state.birthDate
                                                : new Date().toISOString().split("T")[0]
                                        }
                                        onChange={this.onChangeBirthDate}
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                    />
                                </Grid>

                                {/* This is for gender selection */}
                                <Grid item xs={12} sm={6}>
                                    <FormControl fullWidth className={classes.formSelect}>
                                        {/* <InputLabel htmlFor="gender-select">Gender</InputLabel> */}
                                        <NativeSelect
                                            id="gender-select"
                                            sx={{ backgroundColor: "red" }}
                                            value={this.state.gender}
                                            defaultValue={this.state.gender}
                                            onChange={this.onChangeGender}
                                            // displayEmpty
                                            name="gender"
                                            fullWidth
                                            input={<UseStyleSelect />}
                                        >
                                            <option aria-label="None" value="" className="optionGender">Gender *</option>
                                            <option value={"Male"}>Male</option>
                                            <option value={"Female"}>Female</option>
                                            <option value={"Others"}>Others</option>
                                        </NativeSelect>
                                    </FormControl>

                                </Grid>
                                <Grid item xs={12}>
                                    <CustomEmailFilled
                                        variant="filled"
                                        required
                                        onChange={this.onChange}
                                        value={data.email}
                                        fullWidth
                                        id="email-filled-info"
                                        label="Email Address"
                                        // value = "abc@gmail.com"
                                        disable
                                        name="email"
                                        autoComplete="off"
                                        error={!!errors.email}
                                        helperText={errors.email}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <CustomTextField
                                        variant="filled"
                                        required
                                        onChange={this.onChangePhoneNumber}
                                        value={this.state.phoneNumber}
                                        fullWidth
                                        id="phoneNumber"
                                        label="Phone Number"
                                        name="phoneNumber"
                                        autoComplete="phoneNumber"
                                        error={!!errors.phoneNumber}
                                        helperText={errors.phoneNumber}
                                    />
                                </Grid>
                                {/* <Grid item xs={12}>
                                    <CustomTextField
                                        variant="filled"
                                        required
                                        onChange={this.onChange}
                                        value={data.password}
                                        fullWidth
                                        name="password"
                                        label="Password"
                                        type="password"
                                        id="password-signup"
                                        autoComplete="off"
                                        error={!!errors.password}
                                        helperText={errors.password}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <CustomTextField
                                        variant="filled"
                                        required
                                        onChange={this.onChange}
                                        value={data.confirmPassword}
                                        fullWidth
                                        name="confirmPassword"
                                        label="Confirm Password"
                                        type="password"
                                        id="confirmPassword"
                                        autoComplete="off"
                                        error={!!errors.confirmPassword}
                                        helperText={errors.confirmPassword}
                                    />
                                </Grid> */}

                            </Grid>
                            {/* <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                className={classes.submit}
                            >
                                Sign Up
                            </Button> */}

                            <Grid className={classes.signinAlign}>
                                <Button
                                    component={Link}
                                    fullWidth
                                    // href="login"
                                    variant="contained"
                                    className={classes.signin}
                                    style={{ fontFamily: "Lucida Sans Unicode", marginTop: '50px' }}
                                >
                                    Sign In
                                </Button>
                            </Grid>
                        </form>
                    </div>
                    <Box mt={5}>
                        <Copyright />
                        {/* <PoweredBy /> */}
                    </Box>
                </Container>
            </Box>
        );
    }
}

export default withStyles(styles, { withTheme: true })(OtherInfoFormComponent);
