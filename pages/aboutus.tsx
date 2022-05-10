import Layout from "@/components/Layouts/Layout";
import withAuth from "@/components/withAuth";
import React from "react";

type Props = {};

const AboutUs = ({}: Props) => {
  return (
    <Layout>
      <div>AboutUs</div>
    </Layout>
  );
};

export default withAuth(AboutUs);
