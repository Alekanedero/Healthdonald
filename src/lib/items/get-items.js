import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

export const getItems = async () => {
  const itemsCollections = collection(db, "items");

  const itemsResult = await getDocs(itemsCollections);

  const data = [];
  itemsResult.forEach((item) => {
    data.push({
      id: item.id,
      ...item.data(),
    });
  });

  return data;
};
// Create a reference with an initial file path and name
