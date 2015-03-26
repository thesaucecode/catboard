if (Meteor.isClient) {
  Template.catboard.helpers({
    total_matching_cats: function() {
      this.dep.depend();
      return Cat.find(this.db_selector).count();
    },
    matching_cats: function() {
      this.cat_selector.dep.depend();
      return Cat.find(this.cat_selector.db_selector);
    },
    selected_value: function() {
      this.dep.depend();
      return this.selected;
    }
  });

  Template.catboard.events({
    'click button.filter-button': function(event, template) {
      var target = $(event.target);
      // 'this' inside event handlers is the data context of the template!  Hooray!
      this.cat_selector.db_selector = target.data('filter-value');
      this.cat_selector.selected = target.data('filter-title');
      this.cat_selector.dep.changed();
    }
  });
}
