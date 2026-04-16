# Know Your College - MERN Web Application

A full-stack MERN (MongoDB, Express, React, Node.js) web application designed to help students explore and learn about their college. Built with modern web technologies, secure authentication, and an intuitive user interface.

---

## 🎯 Project Overview

**Know Your College** is a comprehensive single-page application (SPA) that provides students with detailed information about their college. The application features a responsive, user-friendly interface designed using FIGMA, combined with a robust backend authentication system using JWT (JSON Web Tokens).

### Key Highlights
- ✅ Full-stack MERN architecture
- ✅ Client-side rendering with React
- ✅ Secure JWT-based authentication system
- ✅ MongoDB database integration
- ✅ Multi-component single-page application
- ✅ Professional UI/UX designed with FIGMA
- ✅ RESTful API backend with OpenAI integration

---

## 🛠️ Technology Stack

### Frontend
- **React** (v19.1.1) - Modern UI library for dynamic interfaces
- **React Router DOM** (v7.8.0) - Client-side routing and navigation
- **Vite** (v7.1.0) - Lightning-fast build tool and dev server
- **JavaScript (ES Module)** - Modern ES6+ JavaScript

### Backend
- **Node.js** - JavaScript runtime environment
- **Express.js** (v5.1.0) - Minimalist web application framework
- **MongoDB** - NoSQL database for flexible data storage
- **Mongoose** (v8.17.1) - ODM (Object Data Modeling) for MongoDB
- **JWT** (jsonwebtoken v9.0.2) - Secure token-based authentication
- **bcrypt** (v6.0.0) - Password hashing and encryption
- **Express Session** - Server-side session management
- **Connect Mongo** - MongoDB session store adapter

### Additional Tools & Libraries
- **Nodemon** (v3.1.10) - Automatic server restart during development
- **CORS** (v2.8.5) - Cross-origin resource sharing middleware
- **dotenv** (v17.2.2) - Environment variable management
- **OpenAI** (v5.20.2) - AI integration capabilities
- **ESLint** (v9.32.0) - Code quality and linting

---

## 📁 Project Structure

```
Know-your-college-MERN-/
├── CollegeApp/
│   ├── src/                    # React frontend components
│   ├── public/                 # Static assets (images, icons)
│   ├── package.json            # Frontend dependencies
│   └── vite.config.js          # Vite configuration
│
├── CollegeApp/Mongoose/
│   ├── models/                 # MongoDB schemas (User, College, etc.)
│   ├── routes/                 # API endpoint definitions
│   ├── middleware/             # Authentication & authorization middleware
│   ├── script.js               # Server entry point
│   └── package.json            # Backend dependencies
│
├── .env                        # Environment variables (DO NOT COMMIT)
├── .gitignore                  # Git ignore rules
└── README.md                   # Project documentation
```

---

## ✨ Features

### User Authentication & Security
- **JWT-based Authentication** - Secure token-based authentication system
- **Password Hashing** - Bcrypt encryption for secure password storage
- **Session Management** - MongoDB-backed persistent sessions
- **Protected Routes** - Authorization checks on sensitive endpoints
- **Login/Registration** - Complete user onboarding flow

### Core Functionality
- **Student Profiles** - View and manage student information
- **College Information Portal** - Comprehensive college details and resources
- **Multi-component Interface** - Modular, reusable React components
- **Responsive Design** - Works seamlessly on desktop, tablet, and mobile
- **Single Page Application** - Smooth navigation without full page reloads
- **AI Integration** - OpenAI capabilities for enhanced features

### Backend API
- **RESTful Endpoints** - Clean, standard API design
- **Data Validation** - Input validation and error handling
- **CORS Support** - Cross-origin requests properly configured
- **MongoDB Integration** - Persistent data storage with Mongoose ODM

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn package manager
- MongoDB (local installation or MongoDB Atlas cloud)
- Git for version control

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/SanskarThakur5251/Know-your-college-MERN-.git
   cd Know-your-college-MERN-
   ```

2. **Set up environment variables**
   Create a `.env` file in the root directory:
   ```env
   # Backend Configuration
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_secure_jwt_secret_key
   PORT=5000
   
   # Optional: AI Integration
   OPENAI_API_KEY=your_openai_api_key
   
   # Session Configuration
   SESSION_SECRET=your_session_secret
   ```

3. **Install Backend Dependencies**
   ```bash
   cd CollegeApp/Mongoose
   npm install
   ```

4. **Install Frontend Dependencies**
   ```bash
   cd ../
   npm install
   ```

### Running the Application

**Development Mode - Backend**
```bash
cd CollegeApp/Mongoose
npm run dev
```
Backend server runs on `http://localhost:5000`

**Development Mode - Frontend**
```bash
cd CollegeApp
npm run dev
```
Frontend runs on `http://localhost:5173` (Vite default)

**Production Build - Frontend**
```bash
cd CollegeApp
npm run build
npm run preview
```

---

## 📚 API Endpoints

### Authentication Endpoints
| Method | Endpoint | Description | Authentication |
|--------|----------|-------------|-----------------|
| POST | `/api/auth/register` | Register new user account | None |
| POST | `/api/auth/login` | User login | None |
| POST | `/api/auth/logout` | User logout | JWT Required |
| GET | `/api/auth/profile` | Get authenticated user profile | JWT Required |

### College Information Endpoints
| Method | Endpoint | Description | Authentication |
|--------|----------|-------------|-----------------|
| GET | `/api/college/info` | Fetch college information | Optional |
| GET | `/api/college/departments` | Get all department details | Optional |
| GET | `/api/college/events` | Fetch upcoming college events | Optional |
| GET | `/api/college/departments/:id` | Get specific department info | Optional |

### User Endpoints
| Method | Endpoint | Description | Authentication |
|--------|----------|-------------|-----------------|
| GET | `/api/users/:id` | Get user profile by ID | JWT Required |
| PUT | `/api/users/:id` | Update user profile | JWT Required |
| DELETE | `/api/users/:id` | Delete user account | JWT Required |

---

## 🔐 Security Features

### Authentication & Authorization
- **JWT Authentication** - Token-based secure authentication with expiration
- **Password Hashing** - Bcrypt with configurable salt rounds for secure password storage
- **Session Management** - Secure session handling with MongoDB store
- **Token Verification** - Middleware to verify JWT tokens on protected routes

### Data Protection
- **CORS Protection** - Configured cross-origin policies to prevent unauthorized requests
- **Environment Variables** - Sensitive data stored in .env file (never committed to repository)
- **SQL Injection Prevention** - MongoDB/Mongoose prevents injection attacks
- **XSS Protection** - React automatically escapes content

### Best Practices
- **HTTPS Ready** - Application designed for HTTPS deployment
- **Input Validation** - Server-side validation for all user inputs
- **Error Handling** - Secure error messages without exposing sensitive information
- **Rate Limiting Ready** - Architecture supports rate limiting implementation
- **Secure Headers** - CORS headers properly configured

---

## 🎨 UI/UX Design

- **FIGMA Design** - Professional interface mockups and prototypes
- **Responsive Layout** - Mobile-first design approach
- **Intuitive Navigation** - User-friendly interface with clear navigation paths
- **Clean Component Architecture** - Reusable React components following best practices
- **Consistent Styling** - Unified design system across all pages
- **Accessibility** - Semantic HTML for better accessibility

---

## 📝 Code Quality

- **ESLint Configured** - Enforces code quality standards and best practices
- **Modern JavaScript** - ES6+ features including arrow functions, destructuring, async/await
- **Component-Based Architecture** - Reusable, maintainable React components
- **Separation of Concerns** - Frontend and backend clearly separated
- **DRY Principle** - Don't Repeat Yourself - reusable functions and utilities
- **Modular Code** - Well-organized file structure for scalability

---

## 🤝 Contributing

We welcome contributions! Follow these steps to contribute:

1. **Fork the repository**
   ```bash
   git clone https://github.com/YOUR_USERNAME/Know-your-college-MERN-.git
   ```

2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```

3. **Make your changes**
   - Write clean, well-documented code
   - Follow the existing code style
   - Test your changes thoroughly

4. **Commit your changes**
   ```bash
   git commit -m 'Add amazing feature'
   ```

5. **Push to the branch**
   ```bash
   git push origin feature/amazing-feature
   ```

6. **Open a Pull Request**
   - Provide a clear description of changes
   - Reference any related issues
   - Await review and feedback

### Contribution Guidelines
- Follow the existing code style
- Write meaningful commit messages
- Update documentation as needed
- Test your changes before submitting
- Be respectful and collaborative

---

## 📞 Contact & Support

**Developer:** Sanskar Thakur  
**GitHub:** [@SanskarThakur5251](https://github.com/SanskarThakur5251)  
**Repository:** [Know-your-college-MERN-](https://github.com/SanskarThakur5251/Know-your-college-MERN-)  
**Issues:** [GitHub Issues](https://github.com/SanskarThakur5251/Know-your-college-MERN-/issues)

For questions, suggestions, or bug reports, please open an issue on GitHub or reach out directly.

---

## 📄 License

This project is open source and available under the **ISC License**.

See the LICENSE file for full details.

---

## 🎓 Learning Outcomes

This project demonstrates comprehensive proficiency in:

### Full-Stack Development
- ✅ Full-stack MERN application development
- ✅ Client-side rendering with React
- ✅ Server-side development with Node.js and Express

### Frontend Skills
- ✅ React component architecture and lifecycle
- ✅ React Router for client-side routing
- ✅ State management and props handling
- ✅ Responsive design and CSS
- ✅ Vite build tool and modern development workflow

### Backend Skills
- ✅ RESTful API design and implementation
- ✅ Express.js middleware and routing
- ✅ Server-side rendering considerations
- ✅ Error handling and validation
- ✅ API documentation

### Authentication & Security
- ✅ JWT-based authentication systems
- ✅ Password security with bcrypt
- ✅ Session management
- ✅ CORS configuration and security
- ✅ Environment variable management
- ✅ Secure coding practices

### Database Management
- ✅ MongoDB database design
- ✅ Mongoose ODM and schema design
- ✅ Database relationships and references
- ✅ Data validation and indexing
- ✅ Query optimization

### Development Practices
- ✅ Version control with Git
- ✅ Code quality with ESLint
- ✅ Modular and maintainable code structure
- ✅ Separation of concerns
- ✅ Documentation writing
- ✅ Debugging and troubleshooting

### Additional Technologies
- ✅ OpenAI API integration
- ✅ CORS and cross-origin communication
- ✅ Modern JavaScript (ES6+)
- ✅ npm package management

---

## 🚀 Future Enhancements

Planned features and improvements:
- [ ] Email verification for registration
- [ ] Password reset functionality
- [ ] User role-based access control (RBAC)
- [ ] Advanced search and filtering
- [ ] Real-time notifications
- [ ] Mobile application (React Native)
- [ ] Performance optimization
- [ ] Unit and integration tests
- [ ] CI/CD pipeline setup
- [ ] Docker containerization

---

**Last Updated:** April 16, 2026  
**Version:** 1.0.0

⭐ If you found this project helpful, please consider giving it a star on GitHub!
