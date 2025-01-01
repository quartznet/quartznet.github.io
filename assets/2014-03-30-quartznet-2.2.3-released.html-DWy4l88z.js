import{_ as t,r as o,o as r,c as s,a,e as i}from"./app-Ba_ts8M_.js";const n={},l=i("<p>This is a bug fix release which has some critical fixes, especially for CalendarIntevalTrigger future date calculation and trigger&#39;s next fires not being processed in a timely fashion when AdoJobStore is used with DisallowConcurrentExecutionAttribute and trigger has short repeat interval.</p><p>This update is highly recommended for all users.</p><p><strong>FIXES</strong></p><ul><li>StdAdoConstants.SqlSelectSchedulerStates does not filter on the SCHED_NAME column</li><li>CalendarIntervalTrigger produces incorrect schedule</li><li>Trigger completion signaling from AdoJobStore does not work properly when DisallowConcurrentExecution is set</li></ul><p><strong>NEW FEATURES</strong></p><ul><li>IDisposable jobs should be disposed after execution</li><li>Support for defining DbMetadata via App.config&#39;s quartz section</li></ul>",6);function c(d,u){const e=o("Download");return r(),s("div",null,[l,a(e)])}const h=t(n,[["render",c],["__file","2014-03-30-quartznet-2.2.3-released.html.vue"]]),g=JSON.parse('{"path":"/posts/2014-03-30-quartznet-2.2.3-released.html","title":"Quartz.NET 2.2.3 Released","lang":"en-US","frontmatter":{"title":"Quartz.NET 2.2.3 Released","tags":["releases"]},"headers":[],"git":{"updatedTime":1735723320000,"contributors":[{"name":"JT","email":"975824+Hawxy@users.noreply.github.com","commits":1}]},"filePathRelative":"_posts/2014-03-30-quartznet-2.2.3-released.md"}');export{h as comp,g as data};
