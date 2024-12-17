import React, { Component } from 'react';
import FormUserDetails from './FormUserDetails';
import FormPersonalDetails from './FormPersonalDetails';
import Confirm from './Confirm';
import Success from './Success';

export class UserForm extends Component {
    state = {
        step: 1,
        firstName: '',
        lastName: '',
        email: '',
        occupation: '',
        city: '',
        bio: '',
        errors: {}
    };

    // Proceed to next step
    nextStep = () => {
        const { step } = this.state;
        if (step === 1) {
            if (this.validateUserDetails()) {
                this.setState({ step: step + 1});
            }
        } else if (step === 2) {
            if (this.validatePersonalDetails()) {
                this.setState({ step: step + 1});
            }
        } else {
            this.setState({ step: step + 1});
        }
    };

    // Go back to prev step
    prevStep = () => {
        const { step } = this.state;
        this.setState({
            step: step - 1
        });
    };

    // restart form
    restartForm = () => {
        this.setState({
            step: 1,
            firstName: '',
            lastName: '',
            email: '',
            occupation: '',
            city: '',
            bio: '',
            errors: {}
        });
    }

    // Handle fields change
    handleChange = input => e => {
        this.setState({[input]: e.target.value, errors: { ...this.state.errors, [input]: ''}
        });
    };

    validateUserDetails = () => {
        const { firstName, lastName, email } = this.state;
        const errors = {};

        if (!firstName.trim()) errors.firstName = 'First Name is required';
        if (!lastName.trim()) errors.lastName = 'Last Name is required';
        if (!email.trim()) {
            errors.email = 'Email is required';
        } else if (!email.includes('@')) {
            errors.email = 'Email must contain a @';
        }

        this.setState({ errors });

        return Object.keys(errors).length === 0;

    };

    validatePersonalDetails = () => {
        const { occupation, city, bio } = this.state;
        const errors = {};

        if (!occupation.trim()) errors.occupation = 'Occupation is required';
        if (!city.trim()) errors.city = 'City is required';

        if (!bio.trim()) {
            errors.bio = 'Bio must be at least 1 character';
        } else if (bio.length > 100) {
            errors.bio = 'Bioo must be at most 100 characters';
        }

        this.setState({ errors });
        return Object.keys(errors).length === 0;
    };

    render() {
        const { step } = this.state;
        const { firstName, lastName, email, occupation, city, bio, errors } = this.state;
        const values = {firstName, lastName, email, occupation, city, bio };
        
        switch(step) {
            case 1:
                return (
                    <FormUserDetails
                        nextStep={this.nextStep}
                        handleChange={this.handleChange}
                        values={values}
                        errors={errors}
                    />
                    );
            case 2:
                return (
                    <FormPersonalDetails
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
                        values={values}
                        errors={errors}
                    />
                    );
            case 3:
                return (
                    <Confirm
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        values={values}
                    />
                );
                
            case 4:
                return <Success restartForm={this.restartForm} />;
        }
        return (
        <div>
        </div>
        )
    }
}

export default UserForm;
