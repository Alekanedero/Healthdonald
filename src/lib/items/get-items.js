import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase";

export const getItems = async (category) => {
  const docRef = collection(db, "items");

  const docSnap = await getDocs(docRef);

  const data = [];
  docSnap.forEach((d) => {
    data.push({
      id: d.id,
      ...d.data(),
    });
  });

  return data;
};
// Create a reference with an initial file path and name
