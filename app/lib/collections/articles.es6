Articles = new Mongo.Collection('articles');
Articles.attachBehaviour('timestampable', {
  createdBy: 'userId',
  updatedBy: false
});
Articles.before.insert((userId, doc) => {
  let user = Meteor.user();
  doc.authorName = user.username || user.profile.name;
});
