import postRepository from "../repositories/post.repository.js";

class PostService {
    async createPost(author, data) {
        return await postRepository.createPost({author, ...data})
    }

    async getPostById(id) {
        try {
            const post = await postRepository.findPostById(id);
            if (!post) {
                const err = new Error(`Post with id ${id} not found`);
                err.status = 404;
                throw err;
            }
            return post;
        } catch (err) {
            if (err.name === 'CastError' && err.kind === 'ObjectId') {
                err.status = 404;
                err.message = `Invalid post id: ${id}`;
            }
            throw err;
        }
    }

    async addLike(id){
        // TODO like post
    }

    async findPostByAuthor(author) {
        // TODO find post by author
    }

    async addComment(id, commentator, message) {
        // TODO add comment to post
    }

    async deletePost(id) {
        // TODO delete post
    }

    async findPostsByTags(tags) {
        // TODO find posts by tags
    }

    async getPostsByPeriod(dateFtor, dateTo){
        // TODO find posts by period
    }

    async updatePost(id, data) {
        // TODO update post title, tags, content
    }
}

export default new PostService();