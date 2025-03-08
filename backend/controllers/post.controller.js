import Post from '../models/post.model.js';
import User from '../models/user.model.js';

export const getPosts = async (req, res) => {

    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 2;
    const skipIndex = (page - 1) * limit;
    try {
        const posts = await Post.find().
        populate('user', 'username')
        .limit(limit)
        .skip(skipIndex);

        const totalPosts = await Post.countDocuments();
        const hasmore = page * limit < totalPosts;


        res.status(200).json({posts, hasmore});
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}
export const getPost = async (req, res) => {
    try {
        const post = await Post.findOne({ slug: req.params.slug }).populate('user', 'username img');

        res.status(200).json(post);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}
export const createPost = async (req, res) => {
    const clerkUserId = req.auth.userId;


    if (!clerkUserId) {
        return res.status(401).json({ message: "Unauthorized" });
    }
    const user = await User.findOne({clerkUserId});
    if (!user) {
        return res.status(404).json({ message: "User not found" });
    }
    
    let slug = req.body.title.toLowerCase().replace(/ /g, '-');
    const sameSlugPost = await Post
        .findOne({ slug });
    if (sameSlugPost) {
        slug = slug + '-' + Date.now();
    } 


    try {
        const newPost = new Post({ user: user._id, slug, ...req.body });
        const post = await newPost.save();
        res.status(200).json(post);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}
export const deletePost = async (req, res) => {
    try {
        const clerkUserId = req.auth.userId;
        if (!clerkUserId) {
            return res.status(401).json({ message: "Unauthorized" });
        }
        const user = await User.findOne({ clerkUserId });


        const deletedPost = await Post.findOneAndDelete({
            _id: req.params.id,
            user: user._id
        });
        if(!deletedPost){
            return res.status(404).json({ message: "You can delete only your posts!" });
        } 
        res.status(200).json("Post has been deleted");
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}


