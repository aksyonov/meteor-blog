Template.Articles.helpers({
  articles() {
    return Articles.find({}, {sort: {createdAt: -1}});
  }
});
