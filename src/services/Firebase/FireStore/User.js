import { collection, addDoc, setDoc, doc, getDoc } from "firebase/firestore"; 
import { db } from "../Firebase";

export const addUser = (data) => {
  return new Promise(async(resolve, reject) => {
    const {uid} = data
    try {
        const userRef = doc(db, 'users',uid);
        const docRef = await setDoc(userRef, data);
        console.log(docRef)
        resolve(data)
      } catch (e) {
        reject(e);
      }
  })
    
}

export const getCurrentUserFromFireStore= (uid) => {
  return new Promise(async(resolve,reject)=> {
    const userRef = doc(db, 'users',uid);
    const docSnap = await getDoc(userRef)
    if(docSnap.exists()){
      if(docSnap.data().emailVerified){
        resolve(docSnap.data());
      }else{
        const data=docSnap.data();
        data.emailVerified=true;
        addUser(data);
        getCurrentUserFromFireStore(docSnap.data().uid)
      }
      
    }else{
      reject(null)
    }
  })
}