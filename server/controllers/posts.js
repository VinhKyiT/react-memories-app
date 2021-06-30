import PostMesssage from "../models/postMessage.js"


export const getPosts = async (req, res) => {
    try {
        const postMessages = await PostMesssage.find();

        res.status(200).json(postMessages)
    } catch (error) {
        res.status(404).send(error.message);
    }
}

export const createPost = async (req, res) => {
    const post = req.body;

    const newPost = new PostMesssage(post);

    try {
        await newPost.save()
        res.status(201).json(newPost);
    } catch (error) {
        res.status(409).send(error.message);
    }
}