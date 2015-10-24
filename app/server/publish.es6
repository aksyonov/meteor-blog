Meteor.publish('articles', () => {
  return Articles.find();
});

Meteor.publish('article', (id) => {
  return Articles.find({_id: id});
});
