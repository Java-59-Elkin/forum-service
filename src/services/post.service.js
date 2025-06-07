import postRepository from "../repositories/post.repository.js";

class PostService {
    async createPost(author, data) {
        return await postRepository.createPost({author, ...data})
    }

    async getPostById(id) {
        const post = await postRepository.findPostById(id);
        if (!post) {
            throw new Error(`Post with id ${id} not found`);
        }
        return post;
    }

    async addLike(id){
        const post = await postRepository.addLike(id);
        if (!post) {
            throw new Error(`Post with id ${id} not found`);
        }
        return post;
    }

    async getPostByAuthor(author) {
        return await postRepository.findPostsByAuthor(author);
    }

    async addComment(id, commenter, message) {
        const comment = {user: commenter, message};
        const post = await postRepository.addComment(id, comment);
        if (!post) {
            throw new Error(`Post with id ${id} not found`);
        }
        return post;
    }

    async deletePost(id) {
        const post = await postRepository.deletePost(id);
        if (!post) {
            throw new Error(`Post with id ${id} not found`);
        }
    }

    async getPostsByTags(tagsString) {
        let tags;
        if (Array.isArray(tagsString)) {
            tags = tagsString.flatMap(val => val.split(',')).map(tag => tag.trim().toLowerCase());
        } else {
            tags = tagsString.split(',').map(tag => tag.trim().toLowerCase());
        }
        return await postRepository.findPostsByTags(tags);
    }

    async getPostsByPeriod(dateFrom, dateTo){
        return await postRepository.findPostsByPeriod(new Date(dateFrom), new Date(dateTo));
    }

    async updatePost(id, data) {
        const post = await postRepository.findPostById(id);
        if(!post) {
            throw new Error(`Post with id ${id} not found`);
        }
        if(data.tags) {
            data.tags.push(...post.tags);
        }
        return await postRepository.updatePost(id, post);
    }
}

export default new PostService();