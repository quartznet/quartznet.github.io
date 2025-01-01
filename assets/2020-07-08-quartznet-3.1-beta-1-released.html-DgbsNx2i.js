import{_ as o,r as a,o as s,c as l,b as e,d as t,a as r,e as d}from"./app-Ba_ts8M_.js";const c={},u=e("h2",{id:"quartz-net-3-1-beta-1-released",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#quartz-net-3-1-beta-1-released"},[e("span",null,"Quartz.NET 3.1 beta 1 Released")])],-1),p=e("p",null,"The wait is almost over, after more than two years of hiatus, Quartz.NET 3.1 beta 1 is here with exciting new features. This release concentrates on performance and bringing support to de facto Microsoft libraries like dependency injection and ASP.NET Core hosting.",-1),h=e("h3",{id:"support-for-asp-net-core-dependency-injection-and-hosted-services",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#support-for-asp-net-core-dependency-injection-and-hosted-services"},[e("span",null,"Support for ASP.NET Core Dependency Injection and Hosted Services")])],-1),g=e("p",null,"You can find the revisited packages as:",-1),m={href:"https://www.nuget.org/packages/Quartz.Extensions.DependencyInjection/",target:"_blank",rel:"noopener noreferrer"},f={href:"https://www.nuget.org/packages/Quartz.AspNetCore",target:"_blank",rel:"noopener noreferrer"},b={href:"https://github.com/fglaeser",target:"_blank",rel:"noopener noreferrer"},v={href:"https://github.com/zlzforever",target:"_blank",rel:"noopener noreferrer"},_={href:"https://github.com/quartznet/quartznet/tree/master/src/Quartz.Examples.AspNetCore",target:"_blank",rel:"noopener noreferrer"},w=e("h3",{id:"index-and-query-performance-improvements",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#index-and-query-performance-improvements"},[e("span",null,"Index and query performance improvements")])],-1),k=e("p",null,"A big change on the persistent store side is that now SQL queries use parametrized scheduler name, which allows database server to reuse query plans and use indexes more optimally. This will help especially clusters which have large number of nodes. The SQL server indexes were also revisited and their amount reduced by using smarter covering indexes.",-1),x={href:"https://github.com/quartznet/quartznet/blob/42af207fa815789936e8e4ce5ebd4516a23d7c72/database/tables/tables_sqlServer.sql#L349-L388",target:"_blank",rel:"noopener noreferrer"},y=d('<p>There are also some minor bug fixes present.</p><h3 id="known-issues" tabindex="-1"><a class="header-anchor" href="#known-issues"><span>Known Issues</span></a></h3><p>The documentation for the new integration features is still being worked on.</p><h3 id="github-issues" tabindex="-1"><a class="header-anchor" href="#github-issues"><span>GitHub Issues</span></a></h3><p><strong>BREAKING CHANGES</strong></p><ul><li>minimum supported .NET Full Framework is now 4.6.1</li></ul><p><strong>NEW FEATURE</strong></p><ul><li>Microsoft DI integration via package Quartz.Extensions.DependencyInjection (also allows briding to Microsoft Logging)</li><li>ASP.NET Core / Hosting integration and health checks via revisited NuGet package Quartz.AspNetCore (thank you zlzforever for contributing the work)</li><li>Introduced a config parameter <code>ClusterCheckinMisfireThreshold</code> (#692)</li><li>Giving meaningful names to examples folders (#701)</li><li>Added search patterns/sub directory search to directoty scanner job (#411, #708)</li><li>Fluent interface for scheduler configuration (#791)</li><li>Support every nth week in cron expression (#790)</li><li>Enable SQLite job store provider for NetStandard (#802)</li><li>Add configurable params for StdRowLockSemaphore for Failure obtaining db row lock</li><li>SchedName added to queries as sql paramteter (#818)</li><li>Server, example and test projects upgraded to user .NET Core 3.1</li><li>Nullable reference type annotations have been enabled</li><li>Symbols are now provided as a separate NuGet symbol package (snupkg)</li><li>SQL Server indexes have been fine-tuned, redudancies were removed and you can follow the current scripts to update to latest version of them</li></ul><p><strong>FIXES</strong></p><ul><li>Allow binary serialization for DirectoryScanJob data (#658)</li><li>LibLog - Fixed NLog + Log4net callsite. Added support for NLog structured logging. Optimized Log4net-logger (#705)</li><li>Upgrade LibLog to latest version (#749)</li><li>RAMJobStore performance improvements (#718, #719, #720)</li><li>General performance improvements (#725, #723, #727)</li><li>GetTimeBefore() and GetFinalFireTime() should throw NotImplementedException instead of returning null (#731)</li><li>Switch to official TimeZoneConverter NuGet package (#739)</li><li>Remove invalid TimeSpanParseRule.Days (#782)</li><li>Update tables_sqlServer.sql to follow current SQL syntax and structures (#787)</li><li>Fix China Standard Time mapping in TimeZoneUtil.cs (#765)</li><li>Release BLOCKED triggers in ReleaseAcquiredTrigger (#741 #800)</li><li>DailyTimeIntervalTrigger failed to set endingDailyAfterCount = 1</li><li>CronTrigger: cover all valid misfire policies, and provide a sensible default and logging when seeing an invalid one</li></ul>',10);function S(T,N){const n=a("ExternalLinkIcon"),i=a("Download");return s(),l("div",null,[u,p,h,g,e("ul",null,[e("li",null,[e("a",m,[t("Quartz.Extensions.DependencyInjection"),r(n)]),t(" - Microsoft DI integration")]),e("li",null,[e("a",f,[t("Quartz.AspNetCore"),r(n)]),t(" - ASP.NET Core integration")])]),e("p",null,[t("I would like to thank both "),e("a",b,[t("Facundo Glaeser"),r(n)]),t(" and "),e("a",v,[t("Lewis Zou"),r(n)]),t(" for working with the new integration packages and their logistics.")]),e("p",null,[t("The best resource the see the new DI integration in progress is to head to "),e("a",_,[t("the example ASP.NET Core application"),r(n)]),t(".")]),w,k,e("p",null,[t("See the "),e("a",x,[t("updated create index definition"),r(n)]),t(" for more details.")]),y,r(i)])}const E=o(c,[["render",S],["__file","2020-07-08-quartznet-3.1-beta-1-released.html.vue"]]),q=JSON.parse('{"path":"/posts/2020-07-08-quartznet-3.1-beta-1-released.html","title":"Quartz.NET 3.1 beta 1 Released","lang":"en-US","frontmatter":{"title":"Quartz.NET 3.1 beta 1 Released","tags":["releases"],"promote":false},"headers":[{"level":2,"title":"Quartz.NET 3.1 beta 1 Released","slug":"quartz-net-3-1-beta-1-released","link":"#quartz-net-3-1-beta-1-released","children":[{"level":3,"title":"Support for ASP.NET Core Dependency Injection and Hosted Services","slug":"support-for-asp-net-core-dependency-injection-and-hosted-services","link":"#support-for-asp-net-core-dependency-injection-and-hosted-services","children":[]},{"level":3,"title":"Index and query performance improvements","slug":"index-and-query-performance-improvements","link":"#index-and-query-performance-improvements","children":[]},{"level":3,"title":"Known Issues","slug":"known-issues","link":"#known-issues","children":[]},{"level":3,"title":"GitHub Issues","slug":"github-issues","link":"#github-issues","children":[]}]}],"git":{"updatedTime":1735723320000,"contributors":[{"name":"JT","email":"975824+Hawxy@users.noreply.github.com","commits":1}]},"filePathRelative":"_posts/2020-07-08-quartznet-3.1-beta-1-released.md"}');export{E as comp,q as data};
