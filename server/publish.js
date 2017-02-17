Meteor.publish('polls', function() {
    return Polls.find({author: this.userId});
});

Meteor.publish('pollList', function() {
    return Polls.find({isPublic: true});
});
