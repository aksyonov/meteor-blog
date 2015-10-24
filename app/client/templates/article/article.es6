Template.Article.helpers({
  isOwner: function () {
    return this.userId === Meteor.userId();
  }
});
