import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import { RaisedButton } from 'material-ui';

export class Success extends Component {
    continue = e => {
        e.preventDefault();
        // process form //
        this.props.nextStep();

    };

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    };

  render() {
    const { restartForm } = this.props;
    return (
      <MuiThemeProvider>
        <React.Fragment>
            <AppBar 
              title="Success" 
              style={{ backgroundColor: '#0047AB' }}
            />
            <h1>Thank You For Your Submission</h1>
            <p>You will get an email with further instructions</p>
            <RaisedButton 
              label="Redo Form"
              style={styles.button} 
              backgroundColor="#0047AB"
              labelColor="#ffffff"
              onClick={restartForm}
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

export default Success;
