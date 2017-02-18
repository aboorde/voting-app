Template.PollGraph.onCreated(function() {
    var self = this;
    self.autorun(function() {
        var id = FlowRouter.getParam('id');
        self.subscribe('pollDetail', id);
    });
});
Template.PollGraph.helpers({
    poll: ()=> {
        var id = FlowRouter.getParam('id');
        return Polls.findOne({_id: id});
    }
});

// myTemplate.js
Template.PollGraph.topGenresChart = function(template) {
    var id = FlowRouter.getParam('id')
    var pollData = Polls.findOne({_id:id});
    //console.log(pollData);
    var chartData = [];
    pollData.pollOptions.forEach(function(choice) {
        var tempArr = [];
        tempArr.push(choice.name);
        tempArr.push(choice.votes);
        //console.log(choice);
        chartData.push(tempArr);
    });
    return {
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false
        },
        title: {
            text: pollData.name
        },
        tooltip: {
            pointFormat: '<b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: true,
                    format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                    style: {
                        color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                    },
                    connectorColor: 'silver'
                }
            }
        },
        series: [{
            type: 'pie',
            name: 'genre',
            data: chartData
        }]
    };
};