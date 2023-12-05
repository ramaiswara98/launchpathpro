import { addDoc, collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../Firebase";

export const addProject = async(project, user)=>{
    const {uid} = user;
    try{
    const userRef = await addDoc(collection(db, 'projects'),project);
    console.log(userRef.id);
    }catch(e){
        console.log(e)
    }
}

export const getProjectByUID = (uid) => {
    return new Promise(async(resolve, reject) => {
        const q = query(collection(db,'projects'), where('uid','==',uid));
        const querySnapshot = await getDocs(q);
        const projects = [];
        // if(querySnapshot.length > 0){
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
                // console.log(doc.id, "==>", doc.data());
            })
            resolve(projects)
        // }else{
        //     reject(null)
        // }
       
    })
    
}