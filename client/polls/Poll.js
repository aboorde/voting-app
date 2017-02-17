Template.Poll.onCreated(function() {
    this.editMode = new ReactiveVar();
    this.editMode.set(false);
});

Template.Poll.helpers({
    updatePollId: function() {
        return this._id;
    },
    editMode: function() {
        return Template.instance().editMode.get();
    }
});

Template.Poll.events({
    'click .toggle-public': function() {
        //console.log('click')
        Meteor.call('togglePublicItem', this._id, this.isPublic);     
    },
    'click .fa-trash' : function() {
        Meteor.call('deletePoll', this._id);
    },
    'click .fa-pencil' : function(event, template) {
        //Session.set('editMode', !Session.get('editMode'));
        template.editMode.set(!template.editMode.get());
    },
    'submit form': function(event, template) {
        template.editMode.set(!template.editMode.get());
    }
});
