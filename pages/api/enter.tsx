import React, { useCallback, useContext } from "react";
import { auth, googleAuthProvider, firestore } from "../../lib/firebase";
import { signInWithPopup } from "firebase/auth";
import { UserContext } from "@/lib/context";
import { useState, useEffect } from "react";
import { addDoc, doc, getDoc, setDoc, collection } from "firebase/firestore";
import { debounce } from "lodash";

export const Enter = () => {
  const { user, username } = useContext(UserContext);
  // let val = addDoc(firestore, "f22plugin");
  // addDoc(firestore , 'f22plugin')

  // const collectionref = collection(val, "f22plugin");
  // console.log(user, "HERE", val);

  async function handleclick() {
    const userCollection = collection(firestore, "usernames");
    // await addDoc(userCollection, {
    //   name: "test",
    //   address: "test",
    // });

    // await addDoc(userCollection, {
    //   name: "Sai",
    //   first_name: "Sai Harshith",
    // });
    const docRef = await addDoc(collection(firestore, "usernames"), {
      displayName: "Display",
      photoURL: "www.something.com",
      username: "Test",
    });
    await setDoc();
    console.log("Document written with ID: ", docRef);
  }

  return (
    <main>
      <button onClick={handleclick}>Hello</button>

      {user ? (
        !username ? (
          <UsernameForm />
        ) : (
          <>
            <UsernameForm />
            <SignOutButton />
          </>
        )
      ) : (
        <>
          <SignInButton />
          <UsernameForm />
        </>
      )}
    </main>
  );
};

function SignInButton() {
  const signInWithGoogle = async () => {
    await signInWithPopup(auth, googleAuthProvider);
  };
  return (
    <button className="signInWithGoogle" onClick={() => signInWithGoogle()}>
      Sign in with Google
    </button>
  );
}

function SignOutButton() {
  return <button onClick={() => auth.signOut()}>Sign out</button>;
}

function UsernameForm() {
  const [formValue, setFormValue] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [loading, setLoading] = useState(false);
  const { user, username } = useContext(UserContext);
  useEffect(() => {
    checkUsername(formValue);
  }, [formValue]);
  const onSubmit = async (e: React.MouseEvent) => {
    e.preventDefault();
    const db = doc(firestore, `users/${user?.uid}`);
    const userDoc = await getDoc(db);
    console.log(userDoc);
  };
  const onChange = (e: any) => {
    const val = e?.target?.value?.toLowerCase();
    const regex = /^(?=[a-zA-Z0-9._]{3,15$})(?!.*[_.]{2})[^_.].*[^_.]$/;
    if (val < 3) {
      setIsValid(false);
      setLoading(false);
    }
    if (regex.test(val)) {
      setIsValid(false);
      setLoading(false);
    }
    setFormValue(val);
    console.log(val);
  };

  const checkUsername = useCallback(
    debounce(async (username: string) => {
      if (username.length >= 3) {
        const ref = doc(firestore, `usernames/${username}`);
        console.log(ref, "line");
        const refSnap = await getDoc(ref);
        if (refSnap.exists()) {
          // console.log(refSnap.data());
        } else {
          console.log();
          setIsValid(!refSnap.exists());
        }
      }
    }, 500),
    []
  );
  return (
    <>
      {!username && (
        <section>
          <h3>Choose Username</h3>
          <form onSubmit={onSubmit}>
            <input
              name="username"
              placeholder="username"
              value={formValue}
              onChange={onChange}
            />
            <button>Choose</button>
            <h3>Debug State</h3>
            <div>
              Username: {formValue}
              <br />
              Loading: {loading.toString()}
              <br />
              Username valid: {isValid.toString()}
            </div>
          </form>
        </section>
      )}
    </>
  );
}
