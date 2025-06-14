import React from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import App from "./App";
import { SinglePost } from "./SinglePost";
import { Posts } from "./Posts";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/posts/:id" element={<SinglePost />} />
      </Routes>
    </BrowserRouter>
  );
};
