Router.configure({
  layoutTemplate: 'MasterLayout',
  loadingTemplate: 'Loading',
  notFoundTemplate: 'NotFound'
});

Router.route('/', () => {
  Router.go('articles');
});

Router.route('articles', {
  name: 'articles',
  controller: 'ArticlesController',
  where: 'client'
});

Router.route('articles/:_id', {
  name: 'article',
  controller: 'ArticleController',
  where: 'client'
});

Router.route('articles/:_id/edit', {
  name: 'articleEdit',
  controller: 'ArticleController',
  where: 'client'
});
