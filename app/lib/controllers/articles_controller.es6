ArticlesController = RouteController.extend({
  waitOn() {
    return Meteor.subscribe('articles');
  }
});
