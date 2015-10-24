Template.ArticleEdit.events({
  'submit form'(event) {
    event.preventDefault();
    let {_id} = Router.current().params;
    let title = event.target.title.value;
    let body = event.target.body.value;

    Meteor.call('updateArticle', _id, {title, body});
    Router.go('article', {_id});
  }
});
