Comments = new Mongo.Collection('comments');
Comments.attachBehaviour('timestampable', {
  createdBy: 'userId',
  updatedBy: false
});
Comments.before.insert((userId, doc) => {
  let user = Meteor.user();
  doc.authorName = user.username || user.profile.name;
});
