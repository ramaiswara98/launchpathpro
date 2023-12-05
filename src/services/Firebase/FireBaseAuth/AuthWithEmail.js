import { createUserWithEmailAndPassword, getAuth, sendEmailVerification, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../Firebase";

export const createNewUserWithEmailAndPassword = (data) => {
    return new Promise((resolve, reject) => {
        const {email,password,fullname} = data;
    createUserWithEmailAndPassword(auth,email, password)
    .then((userCredential) => {
        updateProfile(auth.currentUser,{
            displayName:fullname
        })
        const user = userCredential.user;
        const data = {
            uid:user.uid,
            email:user.email,
            emailVerified:user.emailVerified
        }
        resolve(data);
    })
    .catch((error) => {
        const errorCode = error.code;
        reject(errorCode);
    })
    })
}

export const sendEmailVerificationToUser = ()=> {
        sendEmailVerification(auth.currentUser)
        .then(() => {
            return true;
            // Email verification sent!
            // ...
        });
}

export const loginUsingEmailAndPassword = (data) => {
    return new Promise((resolve, reject) => {
        const {email,password} = data
        signInWithEmailAndPassword(auth, email,password)
        .then((userCredential) => {
            const user = userCredential.user;
            if(user.emailVerified){
                resolve(true)
            }else{
                resolve(false)
            }
        })
        .catch((error)=>{
            reject('error')
        })
    })
    
}

export const checkCurrentUser = async(show) => {
    const login  = await getAuth();
    console.log(login)
    console.log(auth.currentUser)
    if(login.currentUser === null){
      window.location.href='/';
    }else{
      if(login.currentUser.emailVerified){
        show(true)
      }else{
        window.location.href='/';
      }
      
    }
}
