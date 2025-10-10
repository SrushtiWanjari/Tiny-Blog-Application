import {model, Schema} from "mongoose";

const blogSchema = new Schema({});

const Blog = model("Blog", userSchema);

export default Blog;