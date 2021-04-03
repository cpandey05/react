import React, { useReducer } from "react";

export default (reducer, actions, initialState) => {
  const Context = React.createContext();
  const Provider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    //actions === addBlogPosts : dispatch , addBlogPosts itself has the dispatch argument which when invoked , invokes the right function from the children

    const boundActions = {};
    for (let key in actions) {
      //key === 'addBlogPosts'
      boundActions[key] = actions[key](dispatch);
      //above will be effectively boundActions.addBlogPosts and we will call that method with the reference of dispatch which is provided here
    }
    // value={{state:state}} can be written as  value={{state}} as key and value is same
    return (
      <Context.Provider value={{ state, ...boundActions }}>
        {children}
      </Context.Provider>
    );
  };

  //we can return multiple objects from inside a java script
  return { Context, Provider };
};
