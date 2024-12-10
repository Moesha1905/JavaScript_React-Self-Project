import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import { List, ListItem } from 'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton';
import * as XLSX from 'xlsx';

export class Confirm extends Component {
    // Method to handle the confirmation and download action
    continue = e => {
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
    back = e => {
        e.preventDefault();
        this.props.prevStep();
    };

    render() {
        const { values: { firstName, lastName, email, occupation, city, bio } } = this.props;
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar
                        title="Confirm User Data"
                        style={{ backgroundColor: '#0047AB' }}
                    />
                    <List>
                        <ListItem
                            primaryText="First Name"
                            secondaryText={firstName}
                        />
                        <ListItem
                            primaryText="Last Name"
                            secondaryText={lastName}
                        />
                        <ListItem
                            primaryText="Email"
                            secondaryText={email}
                        />
                        <ListItem
                            primaryText="Occupation"
                            secondaryText={occupation}
                        />
                        <ListItem
                            primaryText="City"
                            secondaryText={city}
                        />
                        <ListItem
                            primaryText="Bio"
                            secondaryText={bio}
                        />
                    </List>
                    <br />
                    <RaisedButton
                        label="Confirm & Continue"
                        style={styles.button}
                        backgroundColor="#0047AB"
                        labelColor="#ffffff"
                        onClick={this.continue}
                    />
                    <RaisedButton
                        label="Back"
                        style={styles.button}
                        backgroundColor="#7393B3"
                        labelColor="#ffffff"
                        onClick={this.back}
                    />
                </React.Fragment>
            </MuiThemeProvider>
        );
    }
}

const styles = {
    button: {
        margin: 15
    }
}

export default Confirm;