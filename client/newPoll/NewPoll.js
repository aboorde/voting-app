/*
Template.NewPoll.events({
    'click .fa-close': function() {
        Session.set('newRecipe', false);
    }
});
*/
Template.NewPoll.events({
    'submit form': function(e, t) {
        FlowRouter.go('my-polls');
    }
});