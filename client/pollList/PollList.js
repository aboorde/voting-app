
Template.PollList.onCreated(function() {
    var self = this;
    self.autorun(function() {
        self.subscribe('pollList');
    });
});


Template.PollList.helpers({
    pollList: ()=> {
        return Polls.find({isPublic: true});
    }
});

Template.PollList.events({
    'change .vote-select': function(e) {
        console.log(e.target.value);
        console.log(this._id);
        Meteor.call('increasePollChoice', this._id, e.target.value)
        //Meteor.call('deletePoll', this._id);
    }
})