import { collection, doc, getDoc, getDocs, query } from "firebase/firestore";
import { db } from "../Firebase";


export const getAllSection = async() => {
    return new Promise(async(resolve, reject) => {
        const q = query(collection(db,'section'));
        const querySnapshot = await getDocs(q);
        const sections = [];
            querySnapshot.forEach((doc) => {
                const result = doc.id;
                sections.push(doc.id);
            })
            resolve(sections)
    })
}

export const getSubSection = async(sectionId) => {
    return new Promise(async(resolve,reject) => {
        const userRef = doc(db, 'section',sectionId);
        const docSnap = await getDoc(userRef)
        if(docSnap.exists()){
            resolve(docSnap.data())
          }else{
            reject(null)
          }
    })
}

export const getSubSubSection = async(subSectionId) => {
    return new Promise(async(resolve,reject) => {
        const userRef = doc(db, 'subSection',subSectionId);
        const docSnap = await getDoc(userRef)
        if(docSnap.exists()){
            resolve(docSnap.data())
          }else{
            reject(null)
          }
    })
}

export const getQuestions = async(subSubSectionId) => {
    return new Promise(async(resolve,reject) => {
        const userRef = doc(db, 'subSubSection',subSubSectionId);
        const docSnap = await getDoc(userRef)
        if(docSnap.exists()){
            resolve(docSnap.data())
          }else{
            reject(null)
          }
    })
}

  