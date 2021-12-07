import React, { useContext } from "react";
import { StyleSheet } from "react-native";
import BlogPostForm from "../components/BlogPostForm";
import { Context } from "../context/BlogContext";

const CreateScreen = ({ navigation }) => {
  const { addBlogPost } = useContext(Context);
  // onPress={() => {  addBlogPost(title, content);   navigation.navigate("Index"); --this can be a way to navigate user to index page
  // immmediately after adding the blog post , but if there is any delay in getting the result like adding via a rest call
  // then this approach will not work --by the time page display happens, the result may not be available..
  return (
    <BlogPostForm
      //from BlogPostForm -onsubmit will be called with two arguments -title and content , this has been passed as prop to the function
      //when this function has been called back, it will call addBlogPost defined in the context
      //addBlogPost in context takes three arguments (title, content, callback) -title content and the call back function , this is the callback funtion which is being passed on
      //the  context to navigate to the index screen
      onSubmit={(title, content) => {
        addBlogPost(title, content, () => navigation.navigate("Index"));
      }}
    />
  );
};

const styles = StyleSheet.create({});
export default CreateScreen;
