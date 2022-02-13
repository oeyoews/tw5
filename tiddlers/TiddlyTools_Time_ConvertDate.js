/*\
title:TiddlyTools/Time/ConvertDate
type: application/javascript
module-type: macro
source: https://TiddlyTools.com/timer.html
author: Eric Shulman

Macro to convert a formatted date to another format

Usage: <<convertdate from:inputdate to:outputformat>>

* The input date can use any date format recognized by the Javascript Date.parse() function.
* Generally this conforms to ISO 8601 standard date format (see https://en.wikipedia.org/wiki/ISO_8601]]).
* The input date can also use day number suffixes ("st", "nd", "rd", and "th"), which are automatically removed before parsing.
* The output format uses TiddlyWiki Date Format codes (see https://tiddlywiki.com/#DateFormat), and defaults to "[UTC]YYYY0MM0DD0hh0mm0ss0XXX".

\*/
(function(){

/*jslint node: true, browser: true */
/*global $tw: false */
"use strict";

/*
Information about this macro
*/

exports.name = "convertdate";

exports.params = [
	{name: "from"},
	{name: "to"}
];

/*
Run the macro
*/
exports.run = function(from,to) {
    const re = /(\d+)(st|nd|rd|th)/;  /* removes day number suffixes */
	return $tw.utils.formatDateString(new Date(from.replace(re,"$1")),to || "[UTC]YYYY0MM0DD0hh0mm0ss0XXX");
};

})();