# Multi-Step Form Application

## Overview
A React-based multi-step form application designed to collect user details, including basic and personal information. The form features a confirmation page to review the entered details and a success page, where the collected data can be exported as an Excel file.

## Features
- **User-Friendly Navigation**: Navigate between form sections with buttons styled using Material-UI.
- **Form State Management**: Efficient state management using React, allowing seamless interaction between components.
- **Data Export**: Save the collected user data as an Excel file on the success page.
- **Restart Functionality**: Option to restart the form and submit new information.

## Form Sections
1. **Usual Details**:
   - Collects first name, last name, and email.
2. **Personal Details**:
   - Collects occupation, city of residence, and a short biodata.
3. **Confirm**:
   - Displays all entered details for the user to review before submission.
4. **Success**:
   - Shows a completion message and allows data export as an Excel file.

## Technologies Used
- **React**: For building the user interface and managing state.
- **Material-UI**: For pre-styled components like buttons, text fields, and app bars.
- **XLSX Library**: To enable data export to an Excel file.

## React Components
1. **UserForm**:
   - Parent component managing the form state and navigation between sections.
2. **FormUserDetails**:
   - Handles the collection of basic user details (name, email).
3. **FormPersonalDetails**:
   - Handles the collection of personal details (occupation, city, biodata).
4. **Confirm**:
   - Displays the information collected for user verification.
5. **Success**:
   - Final component, displays a success message and allows data export.

## Getting Started
### Prerequisites
- Node.js installed on your system
- REACT imported
- MATERIAL UI library imported
