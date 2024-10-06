import { BaseService } from './baseService';

class PostService extends BaseService {
  constructor() {
    super('/posts');
  }

  getAllPosts = (page, limit) => this.get('', { params: { page, limit } });
  getPost = (id) => this.get(`/${id}`);
  createPost = (postData) => this.post('', postData);
  updatePost = (id, postData) => this.put(`/${id}`, postData);
  deletePost = (id) => this.delete(`/${id}`);
  getUserPosts = (userId, page, limit) => this.get(`/user/${userId}`, { params: { page, limit } });
  incrementShareCount = (id) => this.post(`/${id}/share`);
  retweetPost = (postId, content) => this.post('/retweet', { postId, content });
  addToFavorites = (postId) => this.post('/favorites', { postId });
  getUserRetweets = () => this.get('/retweets');
  getUserFavorites = () => this.get('/favorites/f');
  deleteFromFavorites = (postId) => this.delete(`/favorites/${postId}`);
  sharePost = (postId, recipients) => this.post('/share', { postId, recipients });
  recordView = (postId) => this.post('/view', { postId });
}

export const postService = new PostService();