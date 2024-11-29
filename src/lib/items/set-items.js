import { doc, setDoc } from "firebase/firestore";
import { db, storage } from "../firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

export const setItem = async (id, item) => {
  if (item.image instanceof File) {
    const path = `images/${item.image.name}`;
    const storageRef = ref(storage, path);
    await uploadBytes(storageRef, item.image);
    const downloadURL = await getDownloadURL(storageRef);
    item.image = downloadURL;
    item.imagePath = path;
  }

  const file = doc(db, "items", id);
  await setDoc(file, item);
};
