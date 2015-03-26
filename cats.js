var Schema = {};

Cat = new Mongo.Collection('cats');

Schema.Cat = new SimpleSchema({
  catName: {
    type: String
  },
  breed: {
    type: String
  }
});

Cat.attachSchema(Schema.Cat);

if (Meteor.isServer) {
  // Seed data for example
  Meteor.startup(function() {
    Cat.remove({});
    Cat.insert({catName: "Cat Stephens", breed: "Tabby"});
    Cat.insert({catName: "St Cat-herine", breed: "Tabby"});
    Cat.insert({catName: "Tabbitha", breed: "Tabby"});
    Cat.insert({catName: "Cathy Freeman", breed: "Tabby"});
    Cat.insert({catName: "Kate", breed: "Tortoiseshell"});
    Cat.insert({catName: "Whiskers", breed: "Tortoiseshell"});
  });
  // Create publication for cats
  Meteor.publish('cats', function() {
    return Cat.find();
  });
}