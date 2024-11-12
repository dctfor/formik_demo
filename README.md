# Formik Demo

This project is a simple React application that demonstrates the use of Formik for form handling and validation. The application allows users to add, edit, and delete patient information, which includes name, email, age, and address. The patient data is stored in the browser's local storage. The basic usage is in the PatientForm.js File

## What is Formik?

Formik is a popular open-source library for building and managing forms in React applications. It simplifies form handling by providing a set of tools and components that help manage form state, validation, and submission. Formik aims to reduce the complexity of form management in React by offering a declarative approach to form creation and validation, making it easier to build robust and maintainable forms.

Key features of Formik include:

- Easy form state management
- Built-in validation and error handling
- Integration with Yup for schema-based validation
- Support for custom form components
- Simplified form submission handling

Formik is widely used in the React community due to its flexibility and ease of use, making it a go-to solution for form management in React applications.


## Setup Instructions

To set up the project locally, follow these steps:

1. **Clone the repository**:
    ```sh
    git clone https://github.com/your-username/formik_demo.git
    cd formik_demo
    ```

2. **Install dependencies**:
    ```sh
    npm install
    ```

3. **Start the development server**:
    ```sh
    npm start
    ```

4. **Open the application**:
    Open your browser and navigate to `http://localhost:3000` to see the application in action.

5. **Run tests**:
    To run the tests, use the following command:
    ```sh
    npm test
    ```

6. **Build the project**:
    To create a production build, use the following command:
    ```sh
    npm run build
    ```

These steps will help you get the project up and running on your local machine.

## Features

- Add new patients
- Edit existing patients
- Delete patients
- Form validation using Formik
- Persistent storage using local storage

## Technologies Used

- React
- Formik
- Bootstrap
- React-Bootstrap
- Local Storage

## Project Structure

```
/c:/proyectos/formik_demo/
├── public/
│   ├── favicon.ico
│   ├── index.html
│   ├── manifest.json
│   └── robots.txt
├── src/
│   ├── components/
│   │   ├── PatientForm.js
│   │   └── PatientList.js
│   ├── utils/
│   │   └── localStorage.js
│   ├── App.css
│   ├── App.js
│   ├── App.test.js
│   ├── index.css
│   ├── index.js
│   ├── reportWebVitals.js
│   └── setupTests.js
├── .gitignore
├── package.json
└── README.md
```

### File Descriptions

- **public/**: Contains static files such as the HTML template and icons.
- **src/**: Contains the source code of the application.
    - **components/**: Contains React components.
        - **PatientForm.js**: Form component for adding and editing patient information.
        - **PatientList.js**: Component for displaying the list of patients.
    - **utils/**: Contains utility functions.
        - **localStorage.js**: Functions for interacting with the browser's local storage.
    - **App.css**: CSS file for styling the App component.
    - **App.js**: Main component that sets up the application.
    - **App.test.js**: Test file for the App component.
    - **index.css**: Global CSS file.
    - **index.js**: Entry point of the application.
    - **reportWebVitals.js**: File for measuring performance.
    - **setupTests.js**: Configuration file for setting up tests.
- **.gitignore**: Specifies files to be ignored by Git.
- **package.json**: Contains project metadata and dependencies.
- **README.md**: Project documentation.
