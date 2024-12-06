import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

export class FormPersonalDetails extends Component {
  
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    };

    back = e => {
        e.preventDefault();
        this.props.prevStep();

    };

  render() {
    const { values, handleChange } = this.props;

    return (
      <MuiThemeProvider>
        <React.Fragment>
            <AppBar 
                title="Enter Personal Details" 
                style={{ backgroundColor: '#0047AB' }}
            />
            <TextField
                hintText="Enter Your Occupation"
                floatingLabelText="Occupation"
                onChange={handleChange('occupation')}
                defaultValue={values.occupation}
            />
            <br/>
            <TextField
                hintText="Enter Your City"
                floatingLabelText="City"
                onChange={handleChange('city')}
                defaultValue={values.city}
            />
            <br/>
            <TextField
                hintText="Enter Your Bio"
                floatingLabelText="Bio"
                onChange={handleChange('bio')}
                defaultValue={values.bio}
            />
            <br/>
            <RaisedButton
                label="Continue"
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
    )
  }
}

const styles = {
    button: {
        margin: 15
    }
}

export default FormPersonalDetails;
