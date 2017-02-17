Polls = new Mongo.Collection('polls');

Polls.allow({
    insert: function(userId, doc) {
        return !!userId;
    },
    update: function(userId, doc) {
        return !!userId;
    }
});

PollOption = new SimpleSchema({
    name: {
        type: String,
        autoform: {
            placeholder: "Enter a Polling Choice"
        }
    },
    votes: {
        type: Number,
        defaultValue: 0,
        autoform: {
            type: "hidden"
        }
    }
});

PollSchema = new SimpleSchema({
    name: {
        type: String,
        label: "Name"
    },
    pollOptions: {
        type: [PollOption]
    },
    isPublic: {
        type: Boolean,
        defaultValue: false,
        optional: true,
        autoform: {
            type: "hidden"
        }
    },
    author: {
        type: String,
        label: "Author",
        autoValue: function() {
            return this.userId;
        },
        autoform: {
            type: "hidden"
        }
    },
    createdAt: {
        type: Date,
        label: "Created At",
        autoValue: function() {
            return new Date();
        },
        autoform: {
            type: "hidden"
        }
    }
});

Meteor.methods({
    togglePublicItem: function(id, currentState) {
        Polls.update(id, {
            $set: {
                isPublic: !currentState
            }
        });
    },
    deletePoll: function(id) {
        Polls.remove(id);
    },
    increasePollChoice: function(id, choice) {
        //console.log(Polls.find({}));
    }
});

Polls.attachSchema( PollSchema );