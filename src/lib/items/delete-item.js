import { deleteDoc, doc } from "firebase/firestore";
import { db, storage } from "../firebase";
import { deleteObject, ref } from "firebase/storage";

export const deleteItem = async (item) => {
  if (item.imagePath) {
    const storageKey = ref(storage, item.imagePath);
    await deleteObject(storageKey);
  }
  await deleteDoc(doc(db, "items", item.id));
};
