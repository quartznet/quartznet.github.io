import{_ as r,r as n,o as s,c as l,b as t,d as e,a,w as d,e as h}from"./app-Ba_ts8M_.js";const p={},c=t("p",null,"This is the first alpha release from the long-awaited v3 branch. This is a big overhaul (and still in progress). Internals are being modernized whilst still trying to keep sane upgrade path.",-1),m={href:"https://github.com/mjrousos",target:"_blank",rel:"noopener noreferrer"},u={href:"https://github.com/danielmarbach",target:"_blank",rel:"noopener noreferrer"},g=h("<p><strong>Use at your own risk, might not be that production ready yet</strong></p><p>What does alpha mean?</p><ul><li>All existing (and new) tests passing</li><li>Cheese might still get moved, alpha means that APIs can change, features can come and go</li></ul><p><strong>NEW FEATURE</strong></p><ul><li>Task based jobs with async/await support, internals work in async/await manner</li><li>Support .NET Core / netstandard 1.3</li><li>Separate NuGet package Quartz.Serialization.Json to enable JSON based AdoJobStore serialization (no binary serialization available in .NET Core)</li><li>Common.Logging removed from dependencies</li><li>C5 Collections removed from ILMerge process, no longer needed</li></ul><p><strong>BREAKING CHANGES</strong></p><ul><li>.NET 4.5/netstandard1.3 required</li><li>SimpleThreadPool is gone, old owned threads are gone</li><li>Scheduler methods have been changed to be Task based, remember to await them</li><li>IJob interface now returns a task</li><li>Some IList properties have been changed to IReadOnlyList to properly reflect intent</li><li>SQL Server CE support has been dropped</li><li>DailyCalendar uses now datetimes for excluded dates and has ISet interface to access them</li><li>IObjectSerializer has new method, void Initialize(), that has to be implemented</li><li>IInterruptableJob removed in favor of context&#39;s CancellationToken</li></ul><p><strong>KNOWN ISSUES</strong></p><ul><li>Issues with time zone ids between Windows and Linux, they use different ids for the same zone</li><li>No remoting support</li><li>Documentation lacking</li></ul><p>Check NuGet for pre-release packages.</p>",10);function b(f,_){const o=n("ExternalLinkIcon"),i=n("RouteLink");return s(),l("div",null,[c,t("p",null,[e("A big thank you goes to "),t("a",m,[e("Mike Rousos"),a(o)]),e(" who really made it possible to get Quartz.NET working on .NET Core. "),t("a",u,[e("Daniel Marbach"),a(o)]),e(" also contributed a lot with ideas and code to async side. And of course never forgetting the community members that have provided feedback and fixes.")]),t("p",null,[e("Please see the "),a(i,{to:"/documentation/quartz-3.x/migration-guide.html"},{default:d(()=>[e("migration guide")]),_:1}),e(" that is a work in progess.")]),g])}const w=r(p,[["render",b],["__file","2016-08-16-quartznet-3.0-alpha1-released.html.vue"]]),N=JSON.parse('{"path":"/posts/2016-08-16-quartznet-3.0-alpha1-released.html","title":"Quartz.NET 3.0 Alpha 1 Released","lang":"en-US","frontmatter":{"title":"Quartz.NET 3.0 Alpha 1 Released","tags":["releases"]},"headers":[],"git":{"updatedTime":1735723320000,"contributors":[{"name":"JT","email":"975824+Hawxy@users.noreply.github.com","commits":1}]},"filePathRelative":"_posts/2016-08-16-quartznet-3.0-alpha1-released.md"}');export{w as comp,N as data};
