# bd.timedistance
[![Build Status](https://travis-ci.org/B-sides/angular-timedistance.png)](https://travis-ci.org/B-sides/angular-timedistance)


## Getting Started

Download the [production version][min] or the [development version][max].

[min]: https://raw.github.com/mdesjardins/jquery-bd.timedistance/master/dist/angular-bd.timedistance.min.js
[max]: https://raw.github.com/mdesjardins/jquery-bd.timedistance/master/dist/angular-bd.timedistance.js

In your web page:

```html
<script src="angular.js"></script>
<script src="dist/bd.timedistance.min.js"></script>
```

## Documentation

This library was heavily inspired by Ruby on Rails' [built in helper function](http://apidock.com/rails/ActionView/Helpers/DateHelper/distance_of_time_in_words)
that converts the difference between two times to a human-readable text approximation of that
time difference. 

Distances are reported based on the following table:

| Difference                                                             | Text                            |
| ---------------------------------------------------------------------- |:-------------------------------:|
| 0 to 30 secs                                                           | less than a minute              |
| 31 secs to 1 min, 30 secs                                              | 1 minute                        |
| 1 min, 31 secs to 44 mins, 30 secs                                     | 2 minutes .. 44 minutes         |
| 44 mins, 31 secs to 89 mins, 30 secs                                   | about 1 hour                    |
| 89 mins, 31 secs to 23 hrs, 59 mins, 30 secs                           | about 2 hours .. about 24 hours |
| 23 hrs, 59 mins, 31 secs to 41 hrs, 59 mins, 30 secs                   | 1 day                           |
| 41 hrs, 59 mins, 41 secs to 29 days, 23 hrs, 59 mins, 30 secs          | 2 days .. 29 days               |
| 29 days, 23 hrs, 59 mins, 30 secs to 59 days, 23 hrs, 59 mins, 30 secs | about 1 month                   |
| 59 days, 23 hrs, 59 mins, 30 secs to 1 yr                              | 2 months .. 12 months           |
| 1 yr, 1 sec to 1 yr 3 mos                                              | about 1 year                    |
| 1 yr, 3 mos to 1 yr, 9 mos                                             | over 1 year                     |
| 1 yr, 9 mos to 2 yrs                                                   | almost 2 years                  |
| 1 yr +                                                                 | (same rules as 1 yr)            |

The date to compare against is an optional second argument, otherwise it is assumed
that the date you are piping into the filter is getting compared with the current
time.

## Examples

```html
<span>{{myDate | timeDistance}}</span>
<span>{{myDate | timeDistance:myOtherDate}}</span>
```

## TO-DO
* Add support for "ago" and "from now" based on the direction.
* i18n support (right now only supports English).
* Configurability of the windows
* (Optional) support for sub-minute differences (e.g., 23 seconds)
