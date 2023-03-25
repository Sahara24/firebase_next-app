import { UserContext } from "@/lib/context";
import Image from "next/image";
import Link from "next/link";
import React, { useContext } from "react";

export const Navbar = () => {
  const { username } = useContext(UserContext);
  return (
    <nav className="Navbar">
      <ul className="list">
        <li>
          <Link href="/">
            <Image src="/next.svg" alt="Next icon" width={50} height={50} />
          </Link>
        </li>
        {username && (
          <div className="listBtns">
            <Link href="/about">
              <li>
                <button className="loginBtn">About</button>
              </li>
            </Link>

            <li>
              <button className="loginBtn">Logout</button>
            </li>
          </div>
        )}
        {!username && (
          <li>
            <button className="loginBtn">Login</button>
          </li>
        )}
      </ul>
    </nav>
  );
};
