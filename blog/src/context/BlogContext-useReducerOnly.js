import React, { useReducer } from "react";

const BlogContext = React.createContext();

const blogReducer = (state, action) => {
  switch (action.type) {
    case "add_blogpost":
      return [...state, { title: `Blog post #${state.length + 1}` }];
    case "default":
      return state;
  }
};
//Notice this is not export default ... just export , export default will be used for blogcontext
export const BlogProvider = ({ children }) => {
  const [blogPosts, dispatch] = useReducer(blogReducer, []);

  const addBlogPost = () => {
    dispatch({ type: "add_blogpost" });
  };
  //this children is a prop which is passed by the parent to its child as prop giving access to all the nested elements in child ---
  //validate this concept even better .. this is bit confusing..
  //so basically , this component is going to take another component as it's argument and it will display that component
  //since the key and value is same , it can be squizzed in to one addBlogPost:addBlogPost  to addBlogPost
  //this value is passed on to the children , so whenever we change the structure of the value, make sure to change the child down the line ...
  return (
    <BlogContext.Provider value={{ data: blogPosts, addBlogPost }}>
      {children}
    </BlogContext.Provider>
  );
};

export default BlogContext;
