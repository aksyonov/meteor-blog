Comments.deny({
  insert(userId, doc) {
    return !userId;
  },

  update(userId, doc, fieldNames, modifier) {
    return !userId || !doc || userId !== doc.userId;
  },

  remove(userId, doc) {
    return true;
  }
});
