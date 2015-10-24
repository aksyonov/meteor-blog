ArticleController = RouteController.extend({
  waitOn() {
    return Meteor.subscribe('article', this.params._id);
  },

  data() {
    return Articles.findOne({_id: this.params._id});
  }
});
