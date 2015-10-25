Template.Article.events({
  'submit #comment'(event) {
    event.preventDefault();
    let {_id} = Router.current().params;
    let body = event.target.body.value;

    if (!body || !body.trim()) return;

    Meteor.call('createComment', _id, body.trim());
    event.target.body.value = '';
  }
});

Template.Article.helpers({
  isOwner() {
    return this.userId === Meteor.userId();
  },
  comments() {
    let articleId = this._id;
    return Comments.find({articleId}, {sort: {createdAt: 1}});
  }
});
