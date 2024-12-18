import React, { Component } from 'react';
import { AppBar, Button, Box, Typography } from '@mui/material';
import axios from 'axios';
import './Confirm.css';

export class Confirm extends Component {
    // Function to handle the continue action
    continue = async (e) => {
        const { values } = this.props;

        const userWantsDownload = window.confirm(
            "Do you want to save your data in the Google Sheets?"
        );

        if (userWantsDownload) {
            try {
                const sheetDBApiUrl = "https://sheetdb.io/api/v1/73le4pn5dsnr1";
                await axios.post(sheetDBApiUrl, {
                    data: values,
                });
                alert("Your data has been successfully saved!");
            } catch (error) {
                console.error("Error saving data to SheetDB:", error);
                alert("There was an error saving your data. Please try again.");
            }
        }

        this.props.nextStep();
    };

    // Function to handle the back action
    back = (e) => {
        e.preventDefault();
        this.props.prevStep();
    };

    // Function to capitalize the first letter of a string
    capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    };

    render() {
        const {
            values: { firstName, lastName, email, occupation, city, bio },
        } = this.props;

        return (
            <Box className="container">
                <AppBar position="static" className="app-bar">
                    <Typography variant="h6" className="title">
                        Confirm User Data
                    </Typography>
                </AppBar>

                <Box sx={{ paddingY: 3 }}>
                    {/* Display user data with the first letter capitalized */}
                    <Box className="data-box">
                        <Typography variant="body1" className="label">First Name:</Typography>
                        <Typography variant="body1" className="value">
                            {this.capitalizeFirstLetter(firstName)}
                        </Typography>
                    </Box>

                    <Box className="data-box">
                        <Typography variant="body1" className="label">Last Name:</Typography>
                        <Typography variant="body1" className="value">
                            {this.capitalizeFirstLetter(lastName)}
                        </Typography>
                    </Box>

                    <Box className="data-box">
                        <Typography variant="body1" className="label">Email:</Typography>
                        <Typography variant="body1" className="value">
                            {email}
                        </Typography>
                    </Box>

                    <Box className="data-box">
                        <Typography variant="body1" className="label">Occupation:</Typography>
                        <Typography variant="body1" className="value">
                            {this.capitalizeFirstLetter(occupation)}
                        </Typography>
                    </Box>

                    <Box className="data-box">
                        <Typography variant="body1" className="label">City:</Typography>
                        <Typography variant="body1" className="value">
                            {this.capitalizeFirstLetter(city)}
                        </Typography>
                    </Box>

                    <Box className="data-box">
                        <Typography variant="body1" className="label">Bio:</Typography>
                        <Typography variant="body1" className="value">
                            {this.capitalizeFirstLetter(bio)}
                        </Typography>
                    </Box>
                </Box>

                {/* Buttons to navigate */}
                <Box className="button-cont">
                    <Button
                        fullWidth
                        variant="contained"
                        className="button-continue"
                        onClick={this.continue}
                    >
                        Confirm & Continue
                    </Button>
                    <Button
                        fullWidth
                        variant="contained"
                        className="button-back"
                        onClick={this.back}
                    >
                        Back
                    </Button>
                </Box>
            </Box>
        );
    }
}

export default Confirm;