import { collection } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, firestore } from "./firebase";

export const useUserData = () => {
  const collectionref = collection(firestore, "Users");
  const [user] = useAuthState(auth);
  const [username, setUsername] = useState<string | null>();
  console.log(username, "USERNAME");
  useEffect(() => {
    if (user) {
      setUsername(user.displayName);
    } else {
      setUsername(null);
    }
  }, [user]);
  return { user, username };
};
