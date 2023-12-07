import { useEffect, useState } from "react";
import { auth } from "../services/Firebase/Firebase";

const useFirebaseAuth = () => {
    const [authData, setAuthData] = useState({
      user: null,
      type: 'home' // Default type when user is not logged in
    });
  
    useEffect(() => {
      const unsubscribe = auth.onAuthStateChanged(user => {
        if (user) {
          // User is signed in
          if (user.emailVerified) {
            setAuthData({ user, type: 'login' });
          } else {
            setAuthData({ user, type: 'home' });
          }
        } else {
          // No user is signed in
          setAuthData({ user: null, type: 'home' });
        }
      });
  
      return () => {
        // Clean up the listener when the component unmounts
        unsubscribe();
      };
    }, []); // Run once on component mount
  
    return authData;
  };
  
  export default useFirebaseAuth;