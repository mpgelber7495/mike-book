var orm = require("../db");

var User = {
  all: async () => {
    const users = await orm.selectAll("users");
    return users;
  },
  getById: async userId => {
    const user = await orm.selectOneById("users", userId);
    return user;
  },
  create: async user => {
    const result = await orm.insertInto("users", user);
    return result;
  },
  update: async (userId, user) => {
    const result = await orm.updateOneById("users", userId, user);
    return result;
  },
  delete: async userId => {
    const result = await orm.deleteOneById("users", userId);
    return result;
  }
};

module.exports = User;
