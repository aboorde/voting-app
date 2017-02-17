if (Meteor.isClient) {
    Accounts.onLogin(function() {
        FlowRouter.go('my-polls');
    });

    Accounts.onLogout(function() {
        FlowRouter.go('home');
    });
}

FlowRouter.triggers.enter([function(context, redirect) {
    if(!Meteor.userId()) {
        FlowRouter.go('home');
    }
}]);

FlowRouter.route('/', {
    name: 'home',
    action() {
        if(Meteor.userId()) {
            FlowRouter.go('my-polls');
        }
        GAnalytics.pageview();
        BlazeLayout.render('HomeLayout');
    }
});

FlowRouter.route('/my-polls', {
    name: 'my-polls',
    action() {
        GAnalytics.pageview();
        BlazeLayout.render('MainLayout', {main: 'Polls'});
    }
});

FlowRouter.route('/new-poll', {
    name: 'new-poll',
    action() {
        GAnalytics.pageview();
        BlazeLayout.render('MainLayout', {main: 'NewPoll'});
    }
});

FlowRouter.route('/poll-list', {
    name: 'poll-list',
    action() {
        GAnalytics.pageview();
        BlazeLayout.render('MainLayout', {main: 'PollList'});
    }
});