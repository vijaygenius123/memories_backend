import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
    title: String,
    message: String,
    createdBy: String,
    tags: [String],
    file: String,
    likeCount: {
        type: Number,
        default: 0
    },
    createdAt: {
        type: Date,
        default: new Date()
    },
});

const PostMessage = mongoose.Model('PostMessage', postSchema);

export default PostMessage;
