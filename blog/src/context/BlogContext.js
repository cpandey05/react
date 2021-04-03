import createDataContext from "./createDataContext";

const blogReducer = (state, action) => {
  switch (action.type) {
    case "edit_blogpost":
      return state.map((blogPost) => {
        if (blogPost.id === action.payload.id) {
          return action.payload;
        } else {
          return blogPost;
        }
      });
    case "delete_blogpost":
      return state.filter((blogPost) => blogPost.id !== action.payload);
    case "add_blogpost":
      return [
        ...state,
        {
          id: Math.floor(Math.random() * 9999),
          title: action.payload.title,
          content: action.payload.content,
        },
      ];
    case "default":
      return state;
  }
};
//dispatch is only available in the common code which is inside createDataContext .. so it is important to pass on that dispatch
const addBlogPost = (dispatch) => {
  return (title, content, callback) => {
    dispatch({ type: "add_blogpost", payload: { title, content } });

    //call this function only when dispatch is succesfull -an example of rest call and taking action only when that is successfull
    callback();
  };
};
const addBlogPost_async = (dispatch) => {
  return async (title, content, callback) => {
    try {
      //await axios.post --rest call to server , it is async mode and if it is successfull, the only dispatch the callback
      dispatch({ type: "add_blogpost", payload: { title, content } });

      //call this function only when dispatch is succesfull
      callback();
    } catch (e) {
      //if somehting go wrong , do not dispatch callback
    }
  };
};

const editBlogPost = (dispatch) => {
  return (id, title, content, callback) => {
    //since this is all duplicate key and value , they can be squizzed as id, title , content
    dispatch({
      type: "edit_blogpost",
      payload: { id: id, title: title, content: content },
    });
    //to avoid undefined exception -just in case it is not send in by one of the flows, it can be checked first
    if (callback) {
      callback();
    }
  };
};
const deleteBlogPost = (dispatch) => {
  return (id) => {
    dispatch({ type: "delete_blogpost", payload: id });
  };
};
export const { Context, Provider } = createDataContext(
  blogReducer,
  { addBlogPost, deleteBlogPost, editBlogPost },
  [{ title: "Test Post", content: "Test Content", id: 1 }]
);
