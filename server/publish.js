Meteor.publish('polls', function() {
    return Polls.find({author: this.userId});
});

Meteor.publish('pollList', function() {
    return Polls.find({isPublic: true});
});

Meteor.publish('pollDetail', function(id) {
    check(id, String);
    return Polls.find({_id: id});
})