import React, { Component } from 'react';
import { AppBar, Button, Box, Typography } from '@mui/material';
import * as XLSX from 'xlsx';
import axios from 'axios';

export class Confirm extends Component {
    // Method to handle the confirmation and download action
    continue = async (e) => {
        const { values } = this.props;

        // Show a confirmation prompt to the user
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

        // Proceed to the next step (Thank you page)
        this.props.nextStep();
    };

    // Method to go back to the previous step
    back = (e) => {
        e.preventDefault();
        this.props.prevStep();
    };

    render() {
        const {
            values: { firstName, lastName, email, occupation, city, bio },
        } = this.props;

        return (
            <Box
                sx={{
                    padding: 3,
                    maxWidth: 600,
                    margin: 'auto',
                    backgroundColor: '#f9f9f9',
                    borderRadius: 2,
                    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
                }}
            >
                {/* AppBar with improved styling */}
                <AppBar
                    position="static"
                    sx={{
                        backgroundColor: '#0047AB',
                        padding: 1,
                        borderRadius: 1,
                    }}
                >
                    <Typography variant="h6" align="center">
                        Confirm User Data
                    </Typography>
                </AppBar>

                {/* User Data Section */}
                <Box sx={{ paddingY: 3 }}>
                    <Box sx={{ marginBottom: 2, display: 'flex', justifyContent: 'space-between' }}>
                        <Typography variant="body1" sx={{ fontWeight: 'bold', textAlign: 'right', width: '40%' }}>
                            First Name:
                        </Typography>
                        <Typography variant="body1" sx={{ textAlign:'left', width: '50%' }}>
                            {firstName}
                        </Typography>
                    </Box>

                    <Box sx={{ marginBottom: 2, display: 'flex', justifyContent: 'space-between' }}>
                        <Typography variant="body1" sx={{ fontWeight: 'bold', textAlign: 'right', width: '40%' }}>
                            Last Name:
                        </Typography>
                        <Typography variant="body1" sx={{ textAlign:'left', width: '50%' }}>
                            {lastName}
                        </Typography>
                    </Box>

                    <Box sx={{ marginBottom: 2, display: 'flex', justifyContent: 'space-between' }}>
                        <Typography variant="body1" sx={{ fontWeight: 'bold', textAlign: 'right', width: '40%' }}>
                            Email:
                        </Typography>
                        <Typography variant="body1" sx={{ textAlign:'left', width: '50%' }}>
                            {email}
                        </Typography>
                    </Box>

                    <Box sx={{ marginBottom: 2, display: 'flex', justifyContent: 'space-between' }}>
                        <Typography variant="body1" sx={{ fontWeight: 'bold', textAlign: 'right', width: '40%' }}>
                            Occupation:
                        </Typography>
                        <Typography variant="body1" sx={{ textAlign:'left', width: '50%' }}>
                            {occupation}
                        </Typography>
                    </Box>

                    <Box sx={{ marginBottom: 2, display: 'flex', justifyContent: 'space-between' }}>
                        <Typography variant="body1" sx={{ fontWeight: 'bold', textAlign: 'right', width: '40%' }}>
                            City:
                        </Typography>
                        <Typography variant="body1" sx={{ textAlign:'left', width: '50%' }}>
                            {city}
                        </Typography>
                    </Box>

                    <Box sx={{ marginBottom: 2, display: 'flex', justifyContent: 'space-between' }}>
                        <Typography variant="body1" sx={{ fontWeight: 'bold', textAlign: 'right', width: '40%' }}>
                            Bio:
                        </Typography>
                        <Typography variant="body1" sx={{ textAlign:'left', width: '50%' }}>
                            {bio}
                        </Typography>
                    </Box>
                </Box>

                {/* Buttons Section */}
                <Box sx={{ marginTop: 3 }}>
                    <Button
                        fullWidth
                        variant="contained"
                        sx={{
                            backgroundColor: '#0047AB',
                            color: '#ffffff',
                            marginBottom: 2,
                        }}
                        onClick={this.continue}
                    >
                        Confirm & Continue
                    </Button>
                    <Button
                        fullWidth
                        variant="contained"
                        sx={{
                            backgroundColor: '#7393B3',
                            color: '#ffffff',
                        }}
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