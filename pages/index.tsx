import Layout from "@/components/Layouts/Layout";
import React from "react";
import { useSelector } from "react-redux";

type Props = {};

export default function Index({}: Props) {
  const userSelector = useSelector((store: any) => store.user);

  return (
    <Layout>
      <div>Lek {userSelector.username}</div>
    </Layout>
  );
}
