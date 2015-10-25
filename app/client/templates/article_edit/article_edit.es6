Template.ArticleEdit.events({
  'submit form'(event) {
    event.preventDefault();
    let {_id} = Router.current().params;
    let title = event.target.title.value;
    let body = event.target.body.value;

    if (_id) {
      Meteor.call('updateArticle', _id, {title, body});
      Router.go('article', {_id});
    } else {
      Meteor.call('createArticle', {title, body});
      Router.go('articles');
    }
  }
});

Template.ArticleEdit.helpers({
  isEdit() {
    return !!Router.current().params._id;
  }
});
