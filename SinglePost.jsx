import React from "react";
import { useParams } from "react-router";
import { useGetPostQuery } from "./api";
import { Loader } from "@chakra-ui/react";

export const SinglePost = () => {
  const { id } = useParams();

  const { isFetching, data } = useGetPostQuery(id);

  return (
    <>
      {isFetching ? (
        <Loader />
      ) : (
        <>
          {" "}
          <br />
          id: {data?.id}
          <br />
          userId: {data?.userId}
          <br />
          title: {data?.title}
          <br />
          body: {data?.body}
          <br />
        </>
      )}
    </>
  );
};
