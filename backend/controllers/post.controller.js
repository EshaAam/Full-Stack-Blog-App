import Post from '../models/post.model.js';

export const getPosts = async (req, res) => {
    try {
        const posts = await Post.find();
        res.status(200).json(posts);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}
export const getPost = async (req, res) => {
    try {
        const post = await Post.findOne({ slug: req.params.slug });
        res.status(200).json(post);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}
export const createPost = async (req, res) => {
    try {
        const newPost = new Post(req.body);
        const post = await newPost.save();
        res.status(200).json(post);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}
export const deletePost = async (req, res) => {
    try {
       
        const post = await Post.findByIdAndDelete(req.params.id);
        res.status(200).json("Post has been deleted");
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}


