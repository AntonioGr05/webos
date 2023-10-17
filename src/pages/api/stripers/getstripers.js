import { collection, getDoc,getDocs, addDoc, setDoc, doc, Timestamp, updateDoc, runTransaction } from "firebase/firestore";
import { db } from "../../../../firebase";

export default async function handler(req, res) {
    const ciudadesRef = collection(db, "cities");
    const ciudadesRefSnapshot = await getDocs(ciudadesRef)
    const ciudades = {}
    ciudadesRefSnapshot.forEach((doc) => {
        ciudades[doc.id] = doc.data()
    })
    return res.status(200).json({ciudades})
}   