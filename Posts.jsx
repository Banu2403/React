import React from "react";

import { useLazyGetPostsQuery } from "./api";
import { Button } from "@chakra-ui/react";
import { useNavigate } from "react-router";

export const Posts = () => {
  const navigate = useNavigate();

  const [getPosts, { isFetching, data }] = useLazyGetPostsQuery();

  const onClick = () => {
    getPosts();
  };

  const getSinglePost = (id) => {
    navigate(`/posts/${id}`);
  };

  return isFetching ? (
    <>Yuklenir...</>
  ) : (
    <>
      <Button color="#000" hidden={isFetching} onClick={onClick}>
        Get Posts
      </Button>
      {data?.map((post) => (
        <>
          <br />
          <button
            onClick={() => {
              getSinglePost(post.id);
            }}
          >
            Get this post
          </button>
          <br />
          id: {post.id}
          <br />
          userId: {post.userId}
          <br />
          title: {post.title}
          <br />
          body: {post.body}
          <br />
          ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
          <br />
        </>
      ))}
    </>
  );
};
