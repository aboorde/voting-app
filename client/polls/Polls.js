//Meteor.subscribe('recipes');
Template.Polls.onCreated(function() {
    var self = this;
    self.autorun(function() {
        self.subscribe('polls');
    });
});
Template.Polls.helpers({
    polls: ()=> {
        return Polls.find({});
    }
});
