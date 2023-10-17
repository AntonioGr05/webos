import { db } from "../../../../firebase";
import { doc, setDoc, getDoc } from "firebase/firestore";

export default function handler(res) {
    try {
        const docRef = setDoc(doc(db, "cities", "EFREN"), {
            name: "Efren",
            state: "Colima",
            country: "MEX",
            id: "123124131",
            desc: "Hola soy una chica muy caliente, me gusta el sexo duro y los hombres con dinero"
        });
        console.log("Document written with ID: ", docRef.id);
    } catch (e) {
        console.error("Error adding document: ", e);
    }
}

