import { userRequest } from "./requestMethods";

export const getComments = async () => {
  // try {
  //   const res = await userRequest.get("/comment");
  //   console.log(res.data)
  //   return [
  //     res.data.comments
  //   ]
  // } catch (err) {
  //   console.log(err);
  // }
  return [
    {
      id: "1",
      body: "hello",
      username: "xuanhai26",
      userId: "1",
      parentId: null,
      createdAt: "2021-11-16T23:00:33.010+02:00",
    },
  
    
  ];
};

export const createComment = async (text, parentId = null) => {
  return {
    id: Math.random().toString(36).substr(2, 9),
    body: text,
    parentId,
    userId: "1",
    username: "duong",
    createdAt: new Date().toISOString(),
  };
};

export const updateComment = async (text) => {
  return { text };
};

export const deleteComment = async () => {
  return {};
};
