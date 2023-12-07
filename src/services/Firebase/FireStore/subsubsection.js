import {  doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "../Firebase";


export const getSubSubSection = (subSubSectionId) => {
    
    return new Promise(async(resolve,reject)=> {
        const userRef = doc(db, 'subSubSection',subSubSectionId);
        const docSnap = await getDoc(userRef)
        if(docSnap.exists()){
        resolve(docSnap.data())
          
        }else{
          reject(null)
        }
      })
}

export const addQuestion = (subSubSectionId, questions) => {
    return new Promise(async(resolve, reject) => {
        try {
            const projectRef = doc(db, 'subSubSection',subSubSectionId);
            const docRef = await setDoc(projectRef, {questions}, {merge:true});
            console.log(docRef)
            resolve(docRef)
          } catch (e) {
            reject(e);
          }
      })
}