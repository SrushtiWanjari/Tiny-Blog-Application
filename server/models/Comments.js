import {model, Schema} from "mongoose";

const commentsSchema = new Schema({});

const Comments = model("Comments", userSchema);

export default Comments;