import { addDoc, collection, doc, getDoc, getDocs, query, setDoc, where } from "firebase/firestore";
import { db } from "../Firebase";

export const addProject = (project, user)=>{
    return new Promise(async(resolve, reject) => {
    try{
    const userRef = await addDoc(collection(db, 'projects'),project);
    resolve(userRef.id);
    }catch(e){
        reject(e)
    }
    })
    
}

export const updateProject = (data,projectId) => {
    return new Promise(async(resolve, reject) => {
      try {
          const projectRef = doc(db, 'projects',projectId);
          const docRef = await setDoc(projectRef, data, {merge:true});
          console.log(docRef)
          resolve(data)
        } catch (e) {
          reject(e);
        }
    })
      
  }

export const getProjectByUID = (uid) => {
    return new Promise(async(resolve, reject) => {
        const q = query(collection(db,'projects'), where('uid','==',uid));
        const querySnapshot = await getDocs(q);
        const projects = [];
            querySnapshot.forEach((doc) => {
                const result = doc.data();
                const data = {
                    projectId : doc.id,
                    uid:result.uid,
                    ideaGeneration:result.ideaGeneration,
                    ideaValidation:result.ideaValidation,
                    marketResearch:result.marketResearch,
                    businessPlan:result.businessPlan
    
                }
                projects.push(data);
            })
            resolve(projects)
       
    })
    
}

export const getProjectById = (projectId) => {
    return new Promise(async(resolve,reject) => {
        const docRef = doc(db,"projects",projectId);
        const docSnap = await getDoc(docRef);
        if(docSnap.exists()){
            resolve(docSnap.data())
        }else{
            reject(null)
        }
    })
}