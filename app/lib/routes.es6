Router.configure({
  layoutTemplate: 'MasterLayout',
  loadingTemplate: 'Loading',
  notFoundTemplate: 'NotFound'
});

Router.route('/', {
  name: 'home',
  controller: 'HomeController',
  where: 'client'
});


Router.route('articles', {
  name: 'articles',
  controller: 'ArticlesController',
  where: 'client'
});