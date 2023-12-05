import { collection, addDoc } from "firebase/firestore"; 
import { db } from "../Firebase";
export const addUser = async(data) => {
    const {fullname, email, password} = data;
    try {
        const docRef = await addDoc(collection(db, "users"), {
          fullname,
          email,
          password
        });
        return docRef.id
      } catch (e) {
        console.error("Error adding document: ", e);
      }
}