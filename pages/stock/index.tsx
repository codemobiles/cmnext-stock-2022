import Layout from "@/components/Layouts/Layout";
import withAuth from "@/components/withAuth";
import React from "react";

type Props = {};

const Stock = ({}: Props) => {
  return (
    <Layout>
      <div>Stock</div>
    </Layout>
  );
};

export default withAuth(Stock);
