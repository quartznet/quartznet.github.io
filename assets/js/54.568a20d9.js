(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{428:function(e,t,r){"use strict";r.r(t);var a=r(26),n=Object(a.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("p",[e._v("This release concentrates on performance and bringing support for standard integrations.\nQuartz 3.1 supports "),r("code",[e._v("netstandard2.0")]),e._v(" and "),r("code",[e._v("net461")]),e._v(" targets (for integrations they may be different).")]),e._v(" "),r("p"),r("div",{staticClass:"table-of-contents"},[r("ul",[r("li",[r("a",{attrs:{href:"#new-integrations"}},[e._v("New Integrations")]),r("ul",[r("li",[r("a",{attrs:{href:"#support-for-asp-net-core-dependency-injection-and-hosted-services"}},[e._v("Support for ASP.NET Core Dependency Injection and Hosted Services")])]),r("li",[r("a",{attrs:{href:"#opentelemetry-integration"}},[e._v("OpenTelemetry Integration")])])])]),r("li",[r("a",{attrs:{href:"#database"}},[e._v("Database")]),r("ul",[r("li",[r("a",{attrs:{href:"#better-indexes-for-sql-server-and-smarter-parametrized-queries"}},[e._v("Better Indexes for SQL Server and smarter parametrized queries")])]),r("li",[r("a",{attrs:{href:"#bug-fix-for-cluster-locking"}},[e._v("Bug fix for cluster locking")])]),r("li",[r("a",{attrs:{href:"#microsoft-data-sqlclient-as-sql-server-connection-library"}},[e._v("Microsoft.Data.SqlClient as SQL Server connection library")])]),r("li",[r("a",{attrs:{href:"#upgrade-mysqlconnector-to-1-0-namespace-has-changed"}},[e._v("Upgrade MySqlConnector to 1.0 (namespace has changed)")])])])]),r("li",[r("a",{attrs:{href:"#known-issues"}},[e._v("Known Issues")])]),r("li",[r("a",{attrs:{href:"#github-issues"}},[e._v("GitHub Issues")])])])]),r("p"),e._v(" "),r("h2",{attrs:{id:"new-integrations"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#new-integrations"}},[e._v("#")]),e._v(" New Integrations")]),e._v(" "),r("h3",{attrs:{id:"support-for-asp-net-core-dependency-injection-and-hosted-services"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#support-for-asp-net-core-dependency-injection-and-hosted-services"}},[e._v("#")]),e._v(" Support for ASP.NET Core Dependency Injection and Hosted Services")]),e._v(" "),r("p",[e._v("New NuGet packages "),r("a",{attrs:{href:"/documentation/quartz-3.x/packages/aspnet-core-integration"}},[e._v("ASP.NET Core Integration")]),e._v(" and "),r("a",{attrs:{href:"/documentation/quartz-3.x/packages/microsoft-di-integration"}},[e._v("Quartz.Extensions.DependencyInjection")]),e._v("\nfinally bring built-in support for integrating Quartz.NET with reliable manner with the Microsoft DI container and hosted services infrastructure.")]),e._v(" "),r("p",[e._v("The best resource the see the new DI integration in progress is to head to "),r("a",{attrs:{href:"https://github.com/quartznet/quartznet/tree/master/src/Quartz.Examples.AspNetCore",target:"_blank",rel:"noopener noreferrer"}},[e._v("the example ASP.NET Core application"),r("OutboundLink")],1),e._v(".")]),e._v(" "),r("p",[e._v("I would like to thank both "),r("a",{attrs:{href:"https://github.com/fglaeser",target:"_blank",rel:"noopener noreferrer"}},[e._v("Facundo Glaeser"),r("OutboundLink")],1),e._v(" and "),r("a",{attrs:{href:"https://github.com/zlzforever",target:"_blank",rel:"noopener noreferrer"}},[e._v("Lewis Zou"),r("OutboundLink")],1),e._v(" for working with the new integration packages and their logistics.")]),e._v(" "),r("h3",{attrs:{id:"opentelemetry-integration"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#opentelemetry-integration"}},[e._v("#")]),e._v(" OpenTelemetry Integration")]),e._v(" "),r("p",[e._v("New experimental NuGet package "),r("RouterLink",{attrs:{to:"/documentation/quartz-3.x/packages/opentelemetry-integration.html"}},[e._v("Quartz.OpenTelemetry.Instrumentation")]),e._v(" brings support for emerging OpenTelemetry standard.")],1),e._v(" "),r("p",[e._v("First version of integration is able transmit job execution ("),r("code",[e._v("Started")]),e._v(", "),r("code",[e._v("Ended")]),e._v(", "),r("code",[e._v("Exception")]),e._v(") information to exporters. With this infrastructure is should also be easier to implement job history\nusing battle-tested log backends for storing data. "),r("a",{attrs:{href:"https://github.com/quartznet/quartznet/tree/master/src/Quartz.Examples.AspNetCore",target:"_blank",rel:"noopener noreferrer"}},[e._v("The example ASP.NET Core application"),r("OutboundLink")],1),e._v(" integrates\nwith Jaeger and transmits this data.")]),e._v(" "),r("h2",{attrs:{id:"database"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#database"}},[e._v("#")]),e._v(" Database")]),e._v(" "),r("h3",{attrs:{id:"better-indexes-for-sql-server-and-smarter-parametrized-queries"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#better-indexes-for-sql-server-and-smarter-parametrized-queries"}},[e._v("#")]),e._v(" Better Indexes for SQL Server and smarter parametrized queries")]),e._v(" "),r("p",[e._v("A big change on the persistent store side is that now SQL queries use parametrized scheduler name, which allows database server to reuse query plans and use indexes more optimally.\nThis will help especially clusters which have large number of nodes. The SQL server indexes were also revisited and their amount reduced by using smarter covering indexes.")]),e._v(" "),r("p",[e._v("See the "),r("a",{attrs:{href:"https://github.com/quartznet/quartznet/blob/42af207fa815789936e8e4ce5ebd4516a23d7c72/database/tables/tables_sqlServer.sql#L349-L388",target:"_blank",rel:"noopener noreferrer"}},[e._v("updated create index definition"),r("OutboundLink")],1),e._v(" for more details.")]),e._v(" "),r("div",{staticClass:"custom-block tip"},[r("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),r("p",[e._v("You need to re-run the index script to take advantage of changes, this will drop old indexes and rebuild/create new ones, it can be time-consuming!")])]),e._v(" "),r("h3",{attrs:{id:"bug-fix-for-cluster-locking"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#bug-fix-for-cluster-locking"}},[e._v("#")]),e._v(" Bug fix for cluster locking")]),e._v(" "),r("p",[e._v("There is also a very important bug fix present for lock handling on retries. There was a possibility for a deadlock in cluster's database lock handling in some situations.")]),e._v(" "),r("h3",{attrs:{id:"microsoft-data-sqlclient-as-sql-server-connection-library"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#microsoft-data-sqlclient-as-sql-server-connection-library"}},[e._v("#")]),e._v(" Microsoft.Data.SqlClient as SQL Server connection library")]),e._v(" "),r("p",[e._v("Quartz now uses "),r("a",{attrs:{href:"https://www.nuget.org/packages/Microsoft.Data.SqlClient/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Microsoft.Data.SqlClient"),r("OutboundLink")],1),e._v(" as the connection library for SQL Server as it's the one going to get new features.\nIt is dependency for Quartz library (for now) so you shouldn't need to do any manual install steps.")]),e._v(" "),r("h3",{attrs:{id:"upgrade-mysqlconnector-to-1-0-namespace-has-changed"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#upgrade-mysqlconnector-to-1-0-namespace-has-changed"}},[e._v("#")]),e._v(" Upgrade MySqlConnector to 1.0 (namespace has changed)")]),e._v(" "),r("p",[e._v("You need to use the latest "),r("a",{attrs:{href:"https://www.nuget.org/packages/MySqlConnector/",target:"_blank",rel:"noopener noreferrer"}},[e._v("MySqlConnector 1.0.0"),r("OutboundLink")],1),e._v(" in order to use with default Quartz configuration.\nAs the namespace for library has changed it's not backwards compatible.\nIf you need to use the old version, you should manually register DB provider with the old details.")]),e._v(" "),r("h2",{attrs:{id:"known-issues"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#known-issues"}},[e._v("#")]),e._v(" Known Issues")]),e._v(" "),r("p",[e._v("No known issues. Documentation might require additions and community contributions are welcomed. Edits should be easy now with the new publishing framework.")]),e._v(" "),r("h2",{attrs:{id:"github-issues"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#github-issues"}},[e._v("#")]),e._v(" GitHub Issues")]),e._v(" "),r("p",[r("strong",[e._v("BREAKING CHANGES")])]),e._v(" "),r("ul",[r("li",[e._v("minimum supported .NET Full Framework is now 4.6.1")]),e._v(" "),r("li",[e._v("changed SQL commands format in "),r("code",[e._v("Quartz.Impl.AdoJobStore.JobStoreSupport")]),e._v(" (see also "),r("a",{attrs:{href:"https://github.com/quartznet/quartznet/pull/818",target:"_blank",rel:"noopener noreferrer"}},[e._v("#818"),r("OutboundLink")],1),e._v("). Affected are only schedulers that use customized configurations of SQL commands in "),r("code",[e._v("Quartz.Impl.AdoJobStore.JobStoreSupport")]),e._v(", e.g. "),r("code",[e._v("SelectWithLockSQL")]),e._v(". Migration example:")])]),e._v(" "),r("div",{staticClass:"language-xml extra-class"},[r("pre",{pre:!0,attrs:{class:"language-xml"}},[r("code",[r("span",{pre:!0,attrs:{class:"token comment"}},[e._v("\x3c!-- Quartz <=3.0.7 --\x3e")]),e._v("\n"),r("span",{pre:!0,attrs:{class:"token tag"}},[r("span",{pre:!0,attrs:{class:"token tag"}},[r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("<")]),e._v("item")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token attr-name"}},[e._v("key")]),r("span",{pre:!0,attrs:{class:"token attr-value"}},[r("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[e._v("=")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v('"')]),e._v("quartz.jobStore.selectWithLockSQL"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v('"')])]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(">")])]),e._v("SELECT * FROM {0}LOCKS WITH (UPDLOCK,ROWLOCK) WHERE SCHED_NAME = {1} AND LOCK_NAME = @lockName"),r("span",{pre:!0,attrs:{class:"token tag"}},[r("span",{pre:!0,attrs:{class:"token tag"}},[r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("</")]),e._v("item")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(">")])]),e._v("\n"),r("span",{pre:!0,attrs:{class:"token comment"}},[e._v("\x3c!-- Quartz >=3.1.0 --\x3e")]),e._v("\n"),r("span",{pre:!0,attrs:{class:"token tag"}},[r("span",{pre:!0,attrs:{class:"token tag"}},[r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("<")]),e._v("item")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token attr-name"}},[e._v("key")]),r("span",{pre:!0,attrs:{class:"token attr-value"}},[r("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[e._v("=")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v('"')]),e._v("quartz.jobStore.selectWithLockSQL"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v('"')])]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(">")])]),e._v("SELECT * FROM {0}LOCKS WITH (UPDLOCK,ROWLOCK) WHERE SCHED_NAME = @schedulerName AND LOCK_NAME = @lockName"),r("span",{pre:!0,attrs:{class:"token tag"}},[r("span",{pre:!0,attrs:{class:"token tag"}},[r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("</")]),e._v("item")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(">")])]),e._v("\n")])])]),r("p",[r("strong",[e._v("NEW FEATURE")])]),e._v(" "),r("ul",[r("li",[e._v("Microsoft DI integration via package Quartz.Extensions.DependencyInjection (also allows bridging to Microsoft Logging)")]),e._v(" "),r("li",[e._v("DI configuration now supports adding scheduler, job and trigger listeners (#877)")]),e._v(" "),r("li",[e._v('DI configuration now processes appsettings.json section "Quartz" looking for key value pairs (#877)')]),e._v(" "),r("li",[e._v("Add diagnostics source and OpenTelemetry support (#901)")]),e._v(" "),r("li",[e._v("Use Microsoft.Data.SqlClient as SQL Server connection library (#839)")]),e._v(" "),r("li",[e._v("ASP.NET Core / Hosting integration and health checks via revisited NuGet package Quartz.AspNetCore (thank you zlzforever for contributing the work)")]),e._v(" "),r("li",[e._v("Introduced a config parameter "),r("code",[e._v("ClusterCheckinMisfireThreshold")]),e._v(" (#692)")]),e._v(" "),r("li",[e._v("Giving meaningful names to examples folders (#701)")]),e._v(" "),r("li",[e._v("Added search patterns/sub directory search to directory scanner job (#411, #708)")]),e._v(" "),r("li",[e._v("Fluent interface for scheduler configuration (#791)")]),e._v(" "),r("li",[e._v("Support every nth week in cron expression (#790)")]),e._v(" "),r("li",[e._v("Enable SQLite job store provider for NetStandard (#802)")]),e._v(" "),r("li",[e._v("Add configurable params for StdRowLockSemaphore for Failure obtaining db row lock")]),e._v(" "),r("li",[e._v("SchedName added to queries as sql parameter (#818)")]),e._v(" "),r("li",[e._v("Server, example and test projects upgraded to user .NET Core 3.1")]),e._v(" "),r("li",[e._v("Nullable reference type annotations have been enabled")]),e._v(" "),r("li",[e._v("Symbols are now provided as a separate NuGet symbol package (snupkg)")]),e._v(" "),r("li",[e._v("SQL Server indexes have been fine-tuned, redundancies were removed and you can follow the current scripts to update to latest version of them")]),e._v(" "),r("li",[e._v("Upgrade MySqlConnector to 1.0 (namespace has changed) (#890)")]),e._v(" "),r("li",[e._v("Support Microsoft.Extensions.Logging.Abstractions (#756)")]),e._v(" "),r("li",[e._v("Support Microsoft.Data.SQLite with full framework (#893)")]),e._v(" "),r("li",[e._v("Support custom calendar JSON serialization (#697)")]),e._v(" "),r("li",[e._v("DI configuration now supports adding scheduler, job and trigger listeners (#877)")]),e._v(" "),r("li",[e._v('DI configuration now processes appsettings.json section "Quartz" looking for key value pairs (#877)')]),e._v(" "),r("li",[e._v("Use Microsoft.Data.SqlClient as SQL Server connection library (#839)")])]),e._v(" "),r("p",[r("strong",[e._v("FIXES")])]),e._v(" "),r("ul",[r("li",[e._v("Allow binary serialization for DirectoryScanJob data (#658)")]),e._v(" "),r("li",[e._v("LibLog - Fixed NLog + Log4net callsite. Added support for NLog structured logging. Optimized Log4net-logger (#705)")]),e._v(" "),r("li",[e._v("Upgrade LibLog to latest version (#749)")]),e._v(" "),r("li",[e._v("RAMJobStore performance improvements (#718, #719, #720)")]),e._v(" "),r("li",[e._v("General performance improvements (#725, #723, #727)")]),e._v(" "),r("li",[e._v("GetTimeBefore() and GetFinalFireTime() should throw NotImplementedException instead of returning null (#731)")]),e._v(" "),r("li",[e._v("Switch to official TimeZoneConverter NuGet package (#739)")]),e._v(" "),r("li",[e._v("Remove invalid TimeSpanParseRule.Days (#782)")]),e._v(" "),r("li",[e._v("Update tables_sqlServer.sql to follow current SQL syntax and structures (#787)")]),e._v(" "),r("li",[e._v("Fix China Standard Time mapping in TimeZoneUtil.cs (#765)")]),e._v(" "),r("li",[e._v("Release BLOCKED triggers in ReleaseAcquiredTrigger (#741 #800)")]),e._v(" "),r("li",[e._v("DailyTimeIntervalTrigger failed to set endingDailyAfterCount = 1")]),e._v(" "),r("li",[e._v("CronTrigger: cover all valid misfire policies, and provide a sensible default and logging when seeing an invalid one")]),e._v(" "),r("li",[e._v("Remove internal dependencies from examples (#742)")]),e._v(" "),r("li",[e._v("Properly assign MaxConcurrency in CreateVolatileScheduler (#726)")]),e._v(" "),r("li",[e._v("Fix potential scheduler deadlock caused by changed lock request id inside ExecuteInNonManagedTXLock (#794)")]),e._v(" "),r("li",[e._v("Ensure NuGet.exe is part of produced zip to ensure build works (#881)")]),e._v(" "),r("li",[e._v("JobDataMap with enum values persisted as JSON can now be set back to job members via PropertySettingJobFactory (#770)")]),e._v(" "),r("li",[e._v("Ensure GetScheduleBuilder for triggers respects IgnoreMisfirePolicy (#750)")]),e._v(" "),r("li",[e._v("Remove cron expression validation from XML schema and rely on CronExpression itself (#729)")])]),e._v(" "),r("Download")],1)}),[],!1,null,null,null);t.default=n.exports}}]);