Template.Articles.helpers({
  articles() {
    return Articles.find({}, {sort: {createdAt: -1}});
  }
});

Template.ArticleLine.helpers({
  isOwner() {
    return this.userId === Meteor.userId();
  }
});
