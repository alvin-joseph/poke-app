import { useState, useEffect } from "react";
import { db } from "../firebase";
import { getDocs, collection } from "firebase/firestore";

const useFirestore = () => {
  const [pokemen, setPokemenn] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const pokemenRef = collection(db, "pokemen");
    const getPokemen = async () => {
      const querySnapshot = await getDocs(pokemenRef);
      setPokemenn(
        querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
      );
    };
    getPokemen();
    setLoading(false);
  }, []);
  return { pokemen, loading };
};

export default useFirestore;
