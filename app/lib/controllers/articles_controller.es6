ArticlesController = RouteController.extend({
  waitOn() {
    Meteor.subscribe('articles');
  }
});
