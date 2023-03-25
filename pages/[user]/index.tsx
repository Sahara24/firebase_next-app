import React from "react";
import { useRouter } from "next/router";
import Loader from "@/components/Loader";

const User = () => {
  const router = useRouter();
  const param = router.query;
  return (
    <div className="h-screen bg-red-700">
      <Loader show />
      <div className="bg-green-500">User {param.user} </div>
    </div>
  );
};

export default User;
