Meteor.users.after.update(function (userId, doc, fieldNames, modifier) {
  if (doc.username !== this.previous.username) {
    Articles.update({userId: doc._id}, {authorName: doc.username}, {multi: true});
    Comments.update({userId: doc._id}, {authorName: doc.username}, {multi: true});
  }
});
