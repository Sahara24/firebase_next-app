import { Navbar } from "@/components/Navbar";
import { UserContext } from "@/lib/context";
import { auth, firestore, storage } from "@/lib/firebase";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Toaster } from "react-hot-toast";
import { useAuthState } from "react-firebase-hooks/auth";
import { useEffect, useState } from "react";
// import { collection, doc, addDoc } from 'firebase/firestore';
import { useUserData } from "../lib/hooks";
import {
  doc,
  onSnapshot,
  collection,
  addDoc,
  setDoc,
} from "firebase/firestore";

export default function App({ Component, pageProps }: AppProps) {
  const { user, username } = useUserData();
  return (
    <UserContext.Provider value={{ user: user!, username: username! }}>
      <Navbar />
      <Component {...pageProps} />
      <Toaster position="bottom-right" />
    </UserContext.Provider>
  );
}
