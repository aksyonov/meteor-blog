Meteor.methods({
  updateArticle: function (id, body) {
    Articles.update(id, {$set: body});
  },
  createArticle: function (body) {
    Articles.insert(body);
  }
});
