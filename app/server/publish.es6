

Meteor.publish('articles', (/* args */) => {
  return Articles.find();
});