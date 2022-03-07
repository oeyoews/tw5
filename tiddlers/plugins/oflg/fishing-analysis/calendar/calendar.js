/*\
title: $:/plugins/oflg/fishing-analysis/calendar/calendar.js
type: application/javascript
module-type: echarts-component
Calendar for Fishing.
\*/
exports.shouldUpdate = "[{$:/temp/fishing}]";

exports.onUpdate = function (myChart) {
    var calendarLan = $tw.wiki.filterTiddlers("[{$:/language}removeprefix[$:/]addprefix[$:/plugins/oflg/fishing-analysis/]getindex[calendar]]~[[$:/plugins/oflg/fishing-analysis/languages/en-GB]getindex[calendar]]")[0],
        memorizeLan = $tw.wiki.filterTiddlers("[{$:/language}removeprefix[$:/]addprefix[$:/plugins/oflg/fishing-analysis/]getindex[memorize]]~[[$:/plugins/oflg/fishing-analysis/languages/en-GB]getindex[memorize]]")[0],
        dueLan = $tw.wiki.filterTiddlers("[{$:/language}removeprefix[$:/]addprefix[$:/plugins/oflg/fishing-analysis/]getindex[due]]~[[$:/plugins/oflg/fishing-analysis/languages/en-GB]getindex[due]]")[0],
        year1stLan = $tw.wiki.filterTiddlers("[{$:/language}removeprefix[$:/]addprefix[$:/plugins/oflg/fishing-analysis/]getindex[year1st]]~[[$:/plugins/oflg/fishing-analysis/languages/en-GB]getindex[year1st]]")[0],
        year2stLan = $tw.wiki.filterTiddlers("[{$:/language}removeprefix[$:/]addprefix[$:/plugins/oflg/fishing-analysis/]getindex[year2st]]~[[$:/plugins/oflg/fishing-analysis/languages/en-GB]getindex[year2st]]")[0];

    var year = Number($tw.wiki.filterTiddlers("[{$:/temp/fishing!!year}]")[0]) || new Date().getFullYear();

    var fishArry = $tw.wiki.filterTiddlers("[has[due]][has[history]]");

    var dueDayArry = [],
        reviewDayArry = [];

    function twTime2twDayArry(twTime, dayArry) {
        var day = $tw.wiki.filterTiddlers("[[" + twTime + "]format:date[YYYY-0MM-0DD]]")[0];

        var dayIndex = dayArry.findIndex(function (df) {
            return df[0] == day;
        });

        if (dayIndex == -1) {
            dayArry.push([
                day,
                1
            ]);

        } else {
            dayArry.splice(dayIndex, 1, [
                day,
                dayArry[dayIndex][1] + 1
            ]);
        }
    }

    for (var f = 0; f < fishArry.length; f++) {

        var fishDue = $tw.wiki.filterTiddlers("[{" + fishArry[f] + "!!due}]")[0],
            fishReview = $tw.wiki.filterTiddlers("[{" + fishArry[f] + "!!review}]")[0],
            fishHistoryArry = JSON.parse($tw.wiki.filterTiddlers("[{" + fishArry[f] + "!!history}]")[0] || "[]");

        if (fishDue) {
            twTime2twDayArry(fishDue, dueDayArry);
        }

        if (fishReview) {
            twTime2twDayArry(fishReview, reviewDayArry);
        }

        if (fishHistoryArry.length > 0) {

            for (var h = 0; h < fishHistoryArry.length; h++) {
                var historyReview = fishHistoryArry[h].review;

                twTime2twDayArry(historyReview, reviewDayArry);
            }

        }
    }

    var option = {
        tooltip: {
            trigger: "item",
            formatter: '{a}<br>{c}'
        },
        toolbox: {
            show: true,
            orient: "herizontal",
            itemSize: 8,
            feature: {
                mark: { show: true },
                restore: { show: true },
                saveAsImage: {
                    show: true,
                    name: calendarLan
                }
            }
        },
        legend: {
            top: "0",
            height: "10%",
            left: "center",
            data: [memorizeLan, dueLan],
            textStyle: {
                color: ""
            }
        },
        calendar: [
            {
                top: "15%",
                left: "center",
                width: "80%",
                height: "35%",
                range: [year + "-01-01", year + "-06-30"],
                splitLine: {
                    show: true,
                    lineStyle: {
                        // color: "#000",
                        width: 1,
                        type: "solid"
                    }
                },
                yearLabel: {
                    formatter: year1stLan
                },
                itemStyle: {
                    // color: "#323c48",
                    borderWidth: 1,
                    // borderColor: "#111"
                }
            },
            {
                top: "60%",
                left: "center",
                width: "80%",
                height: "35%",
                range: [year + "-07-01", year + "-12-31"],
                splitLine: {
                    show: true,
                    lineStyle: {
                        // color: "#000",
                        width: 1,
                        type: "solid"
                    }
                },
                yearLabel: {
                    formatter: year2stLan
                },
                itemStyle: {
                    // color: "#323c48",
                    borderWidth: 1,
                    // borderColor: "#111"
                }
            }
        ],
        series: [
            {
                name: memorizeLan,
                type: "scatter",
                coordinateSystem: "calendar",
                data: reviewDayArry,
                symbolSize: function (val) {
                    return val[1] <= 20 ? val[1] / 2 : 10;
                },
                itemStyle: {
                    opacity: 0.8,
                    color: "#547599"
                }
            },
            {
                name: memorizeLan,
                type: "scatter",
                coordinateSystem: "calendar",
                calendarIndex: 1,
                data: reviewDayArry,
                symbolSize: function (val) {
                    return val[1] <= 20 ? val[1] / 2 : 10;
                },
                itemStyle: {
                    opacity: 0.8,
                    color: "#547599"
                }
            },
            {
                name: dueLan,
                type: "effectScatter",
                coordinateSystem: "calendar",
                calendarIndex: 1,
                data: dueDayArry,
                symbolSize: function (val) {
                    return val[1] <= 20 ? val[1] / 2 : 10;
                },
                showEffectOn: "render",
                rippleEffect: {
                    brushType: "stroke"
                },
                itemStyle: {
                    opacity: 0.8,
                    color: "#5778d8",
                    shadowBlur: 10,
                    shadowColor: "#333"
                },
                zlevel: 1
            },
            {
                name: dueLan,
                type: "effectScatter",
                coordinateSystem: "calendar",
                data: dueDayArry,
                symbolSize: function (val) {
                    return val[1] <= 20 ? val[1] / 2 : 10;
                },
                showEffectOn: "render",
                rippleEffect: {
                    brushType: "stroke"
                },
                itemStyle: {
                    opacity: 0.8,
                    color: "#5778d8",
                    shadowBlur: 10,
                    shadowColor: "#333"
                },
                zlevel: 1
            }
        ]
    };

    option && myChart.setOption(option);

    myChart.on('click', 'series', function (params) {

        if (params.seriesName == dueLan) {

            var day = params.data[0].replace(/\-/g, '');

            var filter = "[sameday:due[" + day + "]]";

            $tw.rootWidget.invokeActionString('<$action-setfield $tiddler="$:/temp/advancedsearch" text="""' + filter + '"""/><$action-setfield $tiddler="$:/temp/advancedsearch/input" text="""' + filter + '"""/><$action-setfield $tiddler="$:/temp/advancedsearch/refresh" text="yes"/><$action-setfield $tiddler="$:/state/tab--1498284803" text="$:/core/ui/AdvancedSearch/Filter"/>');

            new $tw.Story().navigateTiddler("$:/AdvancedSearch");
        }

    });
};