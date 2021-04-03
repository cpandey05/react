import React from "react";

const BlogContext = React.createContext();

//Notice this is not export default ... just export , export default will be used for blogcontext
export const BlogProvider = ({ children }) => {
  const blogPosts = [{ title: "Blog post #1" }, { title: "Blog post #2" }];
  //this children is a prop which is passed by the parent to its child as prop giving access to all the nested elements in child ---
  //validate this concept even better .. this is bit confusing..
  //so basically , this component is going to take another component as it's argument and it will display that component
  return (
    <BlogContext.Provider value={blogPosts}>{children}</BlogContext.Provider>
  );
};

export default BlogContext;
