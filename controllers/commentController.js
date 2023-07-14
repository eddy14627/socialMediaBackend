import Post from "../models/Post.js";

export const getComments = () => {
  console.log("Get comments");
};
export const addComment = async (req, res) => {
  try {
    const { postId, commentText, commentPicture, userId } = req.body;
    console.log(req.body);
    const uniquePost = await Post.findById(postId);
    uniquePost.comments.push({ commentText, commentPicture, userId });
    await uniquePost.save();
    console.log(uniquePost);
    res.status(200).json(uniquePost);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};
