import Layout from "@/components/Layouts/Layout";
import { userSelector, resetUsername } from "@/store/slices/userSlice";
import { useAppDispatch } from "@/store/store";
import React from "react";
import { useSelector } from "react-redux";

type Props = {};

export default function Index({}: Props) {
  const user = useSelector(userSelector);
  const dispatch = useAppDispatch();

  return (
    <Layout>
      <div>Lek {user.username}</div>
      <button onClick={() => dispatch(resetUsername({ newUsername: "5555" }))}>
        Reset
      </button>
    </Layout>
  );
}
