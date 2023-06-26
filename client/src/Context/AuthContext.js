// import React, { createContext, useState, useEffect, useContext } from "react";
// import { useNavigate } from "react-router-dom";
// import { signin } from "../../src/services/authService";

// const AuthContext = createContext();

// const AuthProvider = ({ children }) => {
//   const navigate = useNavigate();

//   const [currentUser, setCurrentUser] = useState(null);
//   const [loggedIn, setLoggedIn] = useState(false);
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   const login = async (email, password) => {
//     try {
//       setIsSubmitting(true);
//       const data = await signin(email, password);
//       if (data.token) {
//         setCurrentUser(data.email);
//         setLoggedIn(true);
//         localStorage.setItem("token", data.token);
//         localStorage.setItem("user", JSON.stringify(data.email));
//         console.log("Login successful!");
//       } else {
//         throw new Error("Login failed. Please check your credentials.");
//       }
//     } catch (error) {
//       console.error("Error while signing in:", error.message);
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   const logout = () => {
//     localStorage.removeItem("user");
//     setCurrentUser(null);
//     setLoggedIn(false);
//   };

//   useEffect(() => {
//     const token = localStorage.getItem("token");
//     const user = JSON.parse(localStorage.getItem("user"));
//     if (token && user) {
//       setCurrentUser(user);
//       setLoggedIn(true);
//     }
//   }, []);

//   const value = {
//     currentUser,
//     loggedIn,
//     isSubmitting,
//     login,
//     logout,
//   };

//   return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
// };

// const useAuth = () => useContext(AuthContext);

// export { AuthProvider, useAuth };
