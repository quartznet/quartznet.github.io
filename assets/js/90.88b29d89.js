(window.webpackJsonp=window.webpackJsonp||[]).push([[90],{464:function(t,s,n){"use strict";n.r(s);var e=n(26),a=Object(e.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("p",[t._v("CronTriggers are often more useful than SimpleTrigger, if you need a job-firing schedule that recurs based on calendar-like notions,\nrather than on the exactly specified intervals of SimpleTrigger.")]),t._v(" "),n("p",[t._v('With CronTrigger, you can specify firing-schedules such as "every Friday at noon", or "every weekday and 9:30 am",\nor even "every 5 minutes between 9:00 am and 10:00 am on every Monday, Wednesday and Friday".')]),t._v(" "),n("p",[t._v("Even so, like SimpleTrigger, CronTrigger has a startTime which specifies when the schedule is in force, and an (optional)\nendTime that specifies when the schedule should be discontinued.")]),t._v(" "),n("h3",{attrs:{id:"cron-expressions"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#cron-expressions"}},[t._v("#")]),t._v(" Cron Expressions")]),t._v(" "),n("p",[n("em",[t._v("Cron-Expressions")]),t._v(" are used to configure instances of CronTrigger. Cron-Expressions are strings that are actually made up\nof seven sub-expressions, that describe individual details of the schedule. These sub-expression are separated with white-space, and represent:")]),t._v(" "),n("ul",[n("li",[n("ol",[n("li",[t._v("Seconds")])])]),t._v(" "),n("li",[n("ol",{attrs:{start:"2"}},[n("li",[t._v("Minutes")])])]),t._v(" "),n("li",[n("ol",{attrs:{start:"3"}},[n("li",[t._v("Hours")])])]),t._v(" "),n("li",[n("ol",{attrs:{start:"4"}},[n("li",[t._v("Day-of-Month")])])]),t._v(" "),n("li",[n("ol",{attrs:{start:"5"}},[n("li",[t._v("Month")])])]),t._v(" "),n("li",[n("ol",{attrs:{start:"6"}},[n("li",[t._v("Day-of-Week")])])]),t._v(" "),n("li",[n("ol",{attrs:{start:"7"}},[n("li",[t._v("Year (optional field)")])])])]),t._v(" "),n("p",[t._v('An example of a complete cron-expression is the string "0 0 12 ? * WED" - which means "every Wednesday at 12:00 pm".')]),t._v(" "),n("p",[t._v('Individual sub-expressions can contain ranges and/or lists. For example, the day of week field in the previous (which reads "WED")\nexample could be replaces with "MON-FRI", "MON, WED, FRI", or even "MON-WED,SAT".')]),t._v(" "),n("p",[t._v("Wild-cards (the '"),n("em",[t._v("' character) can be used to say \"every\" possible value of this field. Therefore the '")]),t._v('\' character in the\n"Month" field of the previous example simply means "every month". A \'*\' in the Day-Of-Week field would obviously mean "every day of the week".')]),t._v(" "),n("p",[t._v("All of the fields have a set of valid values that can be specified. These values should be fairly obvious - such as the numbers\n0 to 59 for seconds and minutes, and the values 0 to 23 for hours. Day-of-Month can be any value 0-31, but you need to be careful\nabout how many days are in a given month! Months can be specified as values between 0 and 11, or by using the strings\nJAN, FEB, MAR, APR, MAY, JUN, JUL, AUG, SEP, OCT, NOV and DEC. Days-of-Week can be specified as vaules between 1 and 7 (1 = Sunday)\nor by using the strings SUN, MON, TUE, WED, THU, FRI and SAT.")]),t._v(" "),n("p",[t._v("The '/' character can be used to specify increments to values. For example, if you put '0/15' in the Minutes field, it means 'every 15 minutes,\nstarting at minute zero'. If you used '3/20' in the Minutes field, it would mean 'every 20 minutes during the hour,\nstarting at minute three' - or in other words it is the same as specifying '3,23,43' in the Minutes field.")]),t._v(" "),n("p",[t._v("The '?' character is allowed for the day-of-month and day-of-week fields. It is used to specify \"no specific value\".\nThis is useful when you need to specify something in one of the two fields, but not the other.\nSee the examples below (and CronTrigger API documentation) for clarification.")]),t._v(" "),n("p",[t._v('The \'L\' character is allowed for the day-of-month and day-of-week fields. This character is short-hand for "last",\nbut it has different meaning in each of the two fields. For example, the value "L" in the day-of-month field means\n"the last day of the month" - day 31 for January, day 28 for February on non-leap years. If used in the day-of-week field by itself,\nit simply means "7" or "SAT". But if used in the day-of-week field after another value, it means "the last xxx day of the month" -\nfor example "6L" or "FRIL" both mean "the last friday of the month". When using the \'L\' option, it is important not to specify lists,\nor ranges of values, as you\'ll get confusing results.')]),t._v(" "),n("p",[t._v('The \'W\' is used to specify the weekday (Monday-Friday) nearest the given day. As an example, if you were to specify "15W" as the value for the day-of-month field, the meaning is: "the nearest weekday to the 15th of the month".')]),t._v(" "),n("p",[t._v('The \'#\' is used to specify "the nth" XXX weekday of the month. For example, the value of "6#3" or "FRI#3" in the day-of-week field means "the third Friday of the month".')]),t._v(" "),n("h2",{attrs:{id:"example-cron-expressions"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#example-cron-expressions"}},[t._v("#")]),t._v(" Example Cron Expressions")]),t._v(" "),n("p",[t._v("Here are a few more examples of expressions and their meanings - you can find even more in the API documentation for CronTrigger")]),t._v(" "),n("p",[n("strong",[t._v("CronTrigger Example 1 - an expression to create a trigger that simply fires every 5 minutes")])]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[t._v('"0 0/5 * * * ?"\n')])])]),n("p",[n("strong",[t._v("CronTrigger Example 2 - an expression to create a trigger that fires every 5 minutes, at 10 seconds after the minute (i.e. 10:00:10 am, 10:05:10 am, etc.).")])]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[t._v('"10 0/5 * * * ?"\n')])])]),n("p",[n("strong",[t._v("CronTrigger Example 3 - an expression to create a trigger that fires at 10:30, 11:30, 12:30, and 13:30, on every Wednesday and Friday.")])]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[t._v('"0 30 10-13 ? * WED,FRI"\n')])])]),n("p",[n("strong",[t._v("CronTrigger Example 4 - an expression to create a trigger that fires every half hour between the hours of 8 am and 10 am on the 5th and 20th of every month.\nNote that the trigger will NOT fire at 10:00 am, just at 8:00, 8:30, 9:00 and 9:30")])]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[t._v('"0 0/30 8-9 5,20 * ?"\n')])])]),n("p",[t._v('Note that some scheduling requirements are too complicated to express with a single trigger - such as "every 5 minutes between 9:00 am and 10:00 am,\nand every 20 minutes between 1:00 pm and 10:00 pm". The solution in this scenario is to simply create two triggers, and register both of them to run the same job.')]),t._v(" "),n("h2",{attrs:{id:"building-crontriggers"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#building-crontriggers"}},[t._v("#")]),t._v(" Building CronTriggers")]),t._v(" "),n("p",[t._v("CronTrigger instances are built using "),n("strong",[t._v("TriggerBuilder")]),t._v(" (for the trigger's main properties) and "),n("strong",[t._v("WithCronSchedule")]),t._v(" extension method (for the CronTrigger-specific properties).")]),t._v(" "),n("p",[t._v("You can also use CronScheduleBuilder's static methods to create schedules.")]),t._v(" "),n("p",[n("strong",[t._v("Build a trigger that will fire every other minute, between 8am and 5pm, every day:")])]),t._v(" "),n("div",{staticClass:"language-csharp extra-class"},[n("pre",{pre:!0,attrs:{class:"language-csharp"}},[n("code",[t._v("trigger "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" TriggerBuilder"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Create")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("WithIdentity")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"trigger3"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"group1"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("WithCronSchedule")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"0 0/2 8-17 * * ?"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("ForJob")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"myJob"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"group1"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Build")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),n("p",[n("strong",[t._v("Build a trigger that will fire daily at 10:42 am:")])]),t._v(" "),n("div",{staticClass:"language-csharp extra-class"},[n("pre",{pre:!0,attrs:{class:"language-csharp"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// we use CronScheduleBuilder's static helper methods here")]),t._v("\ntrigger "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" TriggerBuilder"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Create")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("WithIdentity")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"trigger3"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"group1"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("WithSchedule")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("CronScheduleBuilder"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("DailyAtHourAndMinute")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("42")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("ForJob")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("myJobKey"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Build")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),n("p",[t._v("or -")]),t._v(" "),n("div",{staticClass:"language-csharp extra-class"},[n("pre",{pre:!0,attrs:{class:"language-csharp"}},[n("code",[t._v("trigger "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" TriggerBuilder"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Create")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("WithIdentity")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"trigger3"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"group1"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("WithCronSchedule")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"0 42 10 * * ?"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("ForJob")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"myJob"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"group1"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Build")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),n("p",[n("strong",[t._v("Build a trigger that will fire on Wednesdays at 10:42 am, in a TimeZone other than the system's default:")])]),t._v(" "),n("div",{staticClass:"language-csharp extra-class"},[n("pre",{pre:!0,attrs:{class:"language-csharp"}},[n("code",[t._v("trigger "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" TriggerBuilder"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Create")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("WithIdentity")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"trigger3"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"group1"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("WithSchedule")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("CronScheduleBuilder\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("WeeklyOnDayAndHourAndMinute")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("DayOfWeek"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Wednesday"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("42")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("InTimeZone")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("TimeZoneInfo"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("FindSystemTimeZoneById")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Central America Standard Time"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("ForJob")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("myJobKey"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Build")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),n("p",[t._v("or -")]),t._v(" "),n("div",{staticClass:"language-csharp extra-class"},[n("pre",{pre:!0,attrs:{class:"language-csharp"}},[n("code",[t._v("trigger "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" TriggerBuilder"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Create")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("WithIdentity")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"trigger3"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"group1"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("WithCronSchedule")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"0 42 10 ? * WED"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" x "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" x\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("InTimeZone")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("TimeZoneInfo"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("FindSystemTimeZoneById")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Central America Standard Time"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("ForJob")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("myJobKey"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Build")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),n("h2",{attrs:{id:"crontrigger-misfire-instructions"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#crontrigger-misfire-instructions"}},[t._v("#")]),t._v(" CronTrigger Misfire Instructions")]),t._v(" "),n("p",[t._v("The following instructions can be used to inform Quartz what it should do when a misfire occurs for CronTrigger.\n(Misfire situations were introduced in the More About Triggers section of this tutorial). These instructions are defined in  as\nconstants (and API documentation has description for their behavior). The instructions include:")]),t._v(" "),n("ul",[n("li",[t._v("MisfireInstruction.IgnoreMisfirePolicy")]),t._v(" "),n("li",[t._v("MisfireInstruction.CronTrigger.DoNothing")]),t._v(" "),n("li",[t._v("MisfireInstruction.CronTrigger.FireOnceNow")])]),t._v(" "),n("p",[t._v("All triggers have the MisfireInstrution.SmartPolicy instruction available for use, and this instruction is also the default for all trigger types.\nThe 'smart policy' instruction is interpreted by CronTrigger as MisfireInstruction.CronTrigger.FireOnceNow. The API documentation for the\nCronTrigger.UpdateAfterMisfire() method explains the exact details of this behavior.")]),t._v(" "),n("p",[t._v("When building CronTriggers, you specify the misfire instruction as part of the cron schedule (via WithCronSchedule extension method):")]),t._v(" "),n("div",{staticClass:"language-csharp extra-class"},[n("pre",{pre:!0,attrs:{class:"language-csharp"}},[n("code",[t._v("trigger "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" TriggerBuilder"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Create")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("WithIdentity")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"trigger3"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"group1"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("WithCronSchedule")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"0 0/2 8-17 * * ?"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" x "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" x\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("WithMisfireHandlingInstructionFireAndProceed")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("ForJob")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"myJob"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"group1"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Build")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=a.exports}}]);