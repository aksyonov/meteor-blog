Meteor.publish('articles', () => {
  return Articles.find();
});

Meteor.publish('article', (_id) => {
  return Articles.find({_id});
});

Meteor.publish('comments', (articleId) => {
  return Comments.find({articleId});
});
