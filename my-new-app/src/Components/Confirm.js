import React, { Component } from 'react';
import { AppBar, Button, Box, Grid, Typography } from '@mui/material';
import * as XLSX from 'xlsx';

export class Confirm extends Component {
    // Method to handle the confirmation and download action
    continue = (e) => {
        const { values } = this.props;

        // Show a confirmation prompt to the user
        const userWantsDownload = window.confirm(
            "Do you want to download an Excel file with the data you provided?"
        );

        if (userWantsDownload) {
            // If user wants to download, generate the Excel file
            const worksheet = XLSX.utils.json_to_sheet([values]);
            const workbook = XLSX.utils.book_new();
            XLSX.utils.book_append_sheet(workbook, worksheet, "User_Data");
            XLSX.writeFile(workbook, "User_Data.xlsx");
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
                    <Grid container spacing={2}>
                        {/* First Name */}
                        <Grid item xs={4}>
                            <Typography
                                variant="body1"
                                sx={{ fontWeight: 'bold', textAlign: 'right' }}
                            >
                                First Name:
                            </Typography>
                        </Grid>
                        <Grid item xs={8}>
                            <Typography variant="body1">{firstName}</Typography>
                        </Grid>

                        {/* Last Name */}
                        <Grid item xs={4}>
                            <Typography
                                variant="body1"
                                sx={{ fontWeight: 'bold', textAlign: 'right' }}
                            >
                                Last Name:
                            </Typography>
                        </Grid>
                        <Grid item xs={8}>
                            <Typography variant="body1">{lastName}</Typography>
                        </Grid>

                        {/* Email */}
                        <Grid item xs={4}>
                            <Typography
                                variant="body1"
                                sx={{ fontWeight: 'bold', textAlign: 'right' }}
                            >
                                Email:
                            </Typography>
                        </Grid>
                        <Grid item xs={8}>
                            <Typography variant="body1">{email}</Typography>
                        </Grid>

                        {/* Occupation */}
                        <Grid item xs={4}>
                            <Typography
                                variant="body1"
                                sx={{ fontWeight: 'bold', textAlign: 'right' }}
                            >
                                Occupation:
                            </Typography>
                        </Grid>
                        <Grid item xs={8}>
                            <Typography variant="body1">{occupation}</Typography>
                        </Grid>

                        {/* City */}
                        <Grid item xs={4}>
                            <Typography
                                variant="body1"
                                sx={{ fontWeight: 'bold', textAlign: 'right' }}
                            >
                                City:
                            </Typography>
                        </Grid>
                        <Grid item xs={8}>
                            <Typography variant="body1">{city}</Typography>
                        </Grid>

                        {/* Bio */}
                        <Grid item xs={4}>
                            <Typography
                                variant="body1"
                                sx={{ fontWeight: 'bold', textAlign: 'right' }}
                            >
                                Bio:
                            </Typography>
                        </Grid>
                        <Grid item xs={8}>
                            <Typography variant="body1">{bio}</Typography>
                        </Grid>
                    </Grid>
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