import { collection, addDoc, setDoc, doc } from "firebase/firestore"; 
import { db } from "../Firebase";
export const addUser = (data) => {
  return new Promise(async(resolve, reject) => {
    const {fullname, email, password,uid,emailVerified,type,feedback,projectQuota} = data;
    try {
        const userRef = doc(db, 'users',uid);
        const docRef = await setDoc(userRef, {
          fullname,
          email,
          password,
          uid,
          emailVerified,
          type,
          feedback,
          projectQuota
        });
        console.log(docRef)
        resolve(data)
      } catch (e) {
        reject(e);
      }
  })
    
}