Articles.deny({
  insert(userId, doc) {
    doc.userId = userId;
    return false;
  },

  update(userId, doc, fieldNames, modifier) {
    return !userId || !doc || userId !== doc.userId;
  },

  remove(userId, doc) {
    return true;
  }
});
