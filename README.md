

---

# Recrewva

## Proof of Concept Video

We have prepared a detailed proof of concept video demonstrating the key features and functionalities of the Smart Recruitment Platform. You can watch the video through the following link:

[**Watch the Proof of Concept Video**](https://drive.google.com/file/d/1jgiPpJeyi4IpDt2jx91qSC8hlfiV3-fw/view?usp=sharing)

## Project Overview

Recrewva is an innovative recruitment platform designed to streamline the hiring process, integrating advanced features with a modern tech stack. This project primarily utilizes the MERN stack (MongoDB, Express.js, React.js, Node.js) and includes various modules like job creation, custom reports, and an application form.

## Project Structure

The project is organized into several key directories, each containing specific implementations that integrate into the main Recrewva platform:

- **[Recrewva/](Recrewva/)** - Main directory for the recruitment platform, housing the core logic and entry point for the application.
- **[applicationform/](applicationform/)** - Handles candidate application forms, submission, and validation processes.
- **[custom-reports-app/](custom-reports-app/)** - Manages custom reporting features, providing insights and analytics for recruitment data.
- **[jobcreation/](jobcreation/)** - Facilitates the creation, editing, and management of job postings within the platform.

Each of these modules integrates seamlessly into the main Recrewva application, contributing to a cohesive and efficient recruitment platform.

## Technologies Used

The project is built on the MERN stack, which includes:

- **MongoDB**: NoSQL database used to store all application data, including user information, job postings, and reports.
- **Express.js**: Backend framework for Node.js, used to handle API requests, routing, and server-side logic.
- **React.js**: Frontend library for building the user interface, including forms, dashboards, and job management screens.
- **Node.js**: JavaScript runtime used to build the server-side of the application, managing the backend services and database interactions.

  Versions used:
1.Node.js: 18.x (LTS)

2.Python: 3.9.x

3.TensorFlow: 2.6.x (for Python) or TensorFlow.js 3.x (for Node.js)

4.MongoDB: 6.0.x (Community Edition) or MongoDB Atlas (Free Tier)

5.Visual Studio Code: Latest version

## Dependencies

### Frontend (React.js)

```json
{
  "name": "my-react-app",
  "version": "0.1.0",
  "private": true,
  "dependencies": {
    "@testing-library/jest-dom": "^5.17.0",
    "@testing-library/react": "^13.4.0",
    "@testing-library/user-event": "^13.5.0",
    "axios": "^1.7.6",
    "chart.js": "^4.4.4",
    "react": "^18.3.1",
    "react-beautiful-dnd": "^13.1.1",
    "react-chartjs-2": "^5.2.0",
    "react-dom": "^18.3.1",
    "react-icons": "^5.3.0",
    "react-router-dom": "^6.26.1",
    "react-scripts": "5.0.1",
    "recharts": "^2.12.7",
    "web-vitals": "^2.1.4"
  },
  "devDependencies": {
    "@babel/plugin-proposal-private-property-in-object": "^7.21.11"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  }
}
```

### Backend (Node.js)

```json
{
  "name": "server",
  "version": "1.0.0",
  "dependencies": {
    "bcryptjs": "^2.4.3",
    "body-parser": "^1.20.2",
    "cors": "^2.8.5",
    "dotenv": "^16.4.5",
    "express": "^4.19.2",
    "jsonwebtoken": "^9.0.2",
    "mongoose": "^8.6.0"
  },
  "devDependencies": {
    "nodemon": "^3.1.4"
  },
  "scripts": {
    "start": "node src/app.js",
    "dev": "nodemon src/app.js"
  }
}
```

## Installation and Setup

To get started with Recrewva, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/Recrewva.git
   ```

2. Navigate to the main project directory:
   ```bash
   cd Recrewva
   ```

3. Install backend dependencies:
   ```bash
   cd backend
   npm install
   ```

4. Install frontend dependencies:
   ```bash
   cd ../frontend
   npm install
   ```

5. Start the development server:
   - For backend:
     ```bash
     cd backend
     npm start
     ```
   - For frontend:
     ```bash
     cd frontend
     npm start
     ```

## Usage

Once you have completed the installation and setup, you can begin using Recrewva to manage recruitment processes efficiently. Below are the key features and how to use them:

### 1. **Job Creation and Management**
   - **Create a New Job Posting**: Navigate to the "Job Creation" section on the platform. Fill in the necessary details such as Job Title, Department, Description, and Requirements. You can save the job as a draft or publish it immediately.
   - **Edit or Delete Draft Jobs**: Access the "Draft Jobs" section to view, edit, or delete any job postings saved as drafts.
   - **Manage Published Jobs**: Go to the "Published Jobs" section to view all active job postings. You can edit, unpublish, or view detailed statistics for each job.

### 2. **Candidate Application Forms**
   - **View and Manage Applications**: Under the "Applications" section, you can see all submitted candidate applications. Each application can be reviewed in detail, including the candidate's resume and cover letter.
   - **Form Customization**: Customize the application form fields to collect the specific information you need from candidates. This can include text inputs, file uploads, or multiple-choice questions.

### 3. **Custom Reporting**
   - **Generate Custom Reports**: Use the "Custom Reports" feature to generate reports based on various recruitment metrics such as application count, job posting performance, or candidate demographics.
   - **Data Export**: Export the generated reports as CSV files for further analysis or for sharing with other stakeholders.

### 4. **User Authentication**
   - **Registration and Login**: Users can register for an account and log in to access the platform’s features. Ensure that user roles are properly assigned to limit access to sensitive data.
   - **Password Recovery**: If a user forgets their password, they can use the "Forgot Password" feature to reset it. This process involves receiving a recovery email with a link to set a new password.

### 5. **Dashboard Overview**
   - **View Key Metrics**: Upon logging in, users are greeted with a dashboard that provides an overview of key recruitment metrics such as total job postings, active applications, and recent activity.
   - **Quick Navigation**: The dashboard offers quick links to important sections like Job Creation, Applications, and Reports.

### 6. **Notifications**
   - **Receive Notifications**: Users will receive notifications for important events such as new applications submitted, job postings nearing expiration, or reports generated. These notifications can be viewed in the notification panel on the dashboard.

## Future Integration of Generative AI

 Recrewva: AI-Powered Smart Recruiting PlatformWelcome to Recrewva, the next-generation recruitment platform combining AI and GenAI to revolutionize talent acquisition. Built with Azure OpenAI, Llama Index, and Hackingface models, Recrewva transforms traditional hiring with real-time, data-driven insights.
 
 Key Innovations:Intelligent Candidate Matching: Leveraging Azure OpenAI and Llama Index, our AI interprets resumes and job descriptions contextually—beyond keyword matching.
 
 1.AI-Guided Interviews: Adaptive AI interviewers powered by Hackingface models, tailored in real-time to candidates’ responses.
 
 2.Predictive Analytics: Using vector embeddings for deep insights into talent trends and long-term fit.

 3.Interactive Dashboards: Recruiter-focused real-time insights using Streamlit for data-driven hiring decisions.
 
 4.Scalable Cloud Architecture: Powered by Azure/AWS, ensuring robust, secure, and flexible operations.
 
 How It Works:Analyze & Match: Our AI parses resumes, understands candidate strengths, and provides real-time job matching.
 
 AI Interviews: Smart interviewers evolve with each conversation, learning and improving dynamically.
 
 Data Insights: Predict candidate success with multi-dimensional analysis using Python 3.11 and vector databases.
 
 Cloud Scale: Seamless cloud integration ensures efficiency and adaptability for high-volume recruitment.

## Contributors

We would like to thank the following people who have contributed to this project:

- **[ABINAYA S](https://github.com/Abi2713)** - MERN Development,UI/UX Developer,Research Analyst
- **[AKSHAYA SRINITHI S.V](https://github.com/akshayasrinithi)** - MERN Development,Stress Testing Specialist,System Administrator
- **[SATHISH C](https://github.com/Sb-ragava)** - MERN Development,Software Architect
- **[SIVAPRASATH R](https://github.com/Sivaprasath2003)** - Documentation

---

