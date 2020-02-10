var orm = require("../db");

var Post = {
  all: async () => {
    const posts = await orm.selectAll("posts");
    return posts;
  },
  getById: async postID => {
    const post = await orm.selectOneById("posts", postID);
    return post;
  },
  create: async post => {
    const result = await orm.insertInto("posts", post);
    return result;
  },
  update: async (postId, post) => {
    const result = await orm.updateOneById("posts", postId, post);
    return result;
  },
  delete: async postId => {
    const result = await orm.deleteOneById("posts", postId);
    return result;
  }
};

module.exports = Post;
