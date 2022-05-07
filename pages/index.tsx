import Layout from "@/components/Layouts/Layout";
import { userSelector } from "@/store/slices/userSlice";
import React from "react";
import { useSelector } from "react-redux";

type Props = {};

export default function Index({}: Props) {
  const user = useSelector(userSelector);

  return (
    <Layout>
      <div>Lek {user.username}</div>
    </Layout>
  );
}
