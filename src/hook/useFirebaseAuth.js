import { useEffect, useState } from "react";
import { auth } from "../services/Firebase/Firebase";
import { getCurrentUserFromFireStore } from "../services/Firebase/FireStore/User";

const useFirebaseAuth = () => {
    const [authData, setAuthData] = useState({
      user: null,
      type: 'home',
      userFireStore:null // Default type when user is not logged in
    });
  
    useEffect(() => {
      const unsubscribe = auth.onAuthStateChanged(user => {
        if (user) {
          // User is signed in
          if (user.emailVerified) {
            setAuthData({ user, type: 'login',userFireStore:null });
            getCurrentUserFromFireStore(user.uid).then((result) => {
              setAuthData({ user, type: 'login',userFireStore:result });
            })
          } else {
            setAuthData({ user, type: 'home',userFireStore:null });
          }
        } else {
          // No user is signed in
          setAuthData({ user: null, type: 'home',userFireStore:null });
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