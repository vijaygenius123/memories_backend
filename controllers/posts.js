import PostMessage from "../models/posts.js";

export const getPosts = async (req, res) => {

   try {
        const postMessages = await PostMessage.find();
        console.log(postMessages);
        res.status(200).json(postMessages);
   } catch (e){
        res.status(404).json({message: e});
   }

}

export const createPost = async (req, res) => {
    const body = req.body;
    const newPost = new PostMessage(body);

    try{
        await newPost.save();
        res.status(201).json(newPost);
    }
    catch (e) {
        res.status(404).json({message: e});
    }
}
