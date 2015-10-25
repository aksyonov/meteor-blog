ArticleController = RouteController.extend({
  subscriptions() {
    this.subscribe('comments', this.params._id);
  },

  waitOn() {
    return Meteor.subscribe('article', this.params._id);
  },

  data() {
    return Articles.findOne({_id: this.params._id});
  }
});
