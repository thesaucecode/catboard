Router.map(function () {
  this.route('catboard', {
    path: '/',
    waitOn: function() {
      return Meteor.subscribe('cats');
    },
    data: { 
      cat_selector: {
        selected: 'all',
        dep: new Tracker.Dependency,
        db_selector: {},
        available: Cat.find()
      } 
    }
  });
});