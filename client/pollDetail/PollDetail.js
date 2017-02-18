Template.PollDetail.onCreated(function() {
    var self = this;
    self.autorun(function() {
        var id = FlowRouter.getParam('id');
        self.subscribe('pollDetail', id);
    });
});
Template.PollDetail.helpers({
    poll: ()=> {
        var id = FlowRouter.getParam('id');
        return Polls.findOne({_id: id});
    }
});