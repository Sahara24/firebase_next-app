import React from "react";
import { useRouter } from "next/router";

const Slug = () => {
  const router = useRouter();
  const param = router.query;
  return <div>Blog {param.id}</div>;
};

export default Slug;
