import{_ as a,r as s,o as n,c as r,a as o,b as e}from"./app-Ba_ts8M_.js";const l={},i=e("p",null,"This is a bug fix release that fixes cron expression parsing bug and reverts IRemotableQuartzScheduler interface back to its original form without Tasks and CancellationTokens - so that's it's actually usable through .NET Remoting infrastructure. Now zip packing is also back and includes Quartz.Server.",-1),c=e("p",null,[e("strong",null,"FIXES")],-1),u=e("ul",null,[e("li",null,"Create zip package as part of release, including Quartz.Server (#572)"),e("li",null,'A specific CronExpression fails with "Input string was not in a correct format." (#568)'),e("li",null,"Cannot use remoting due to Task and CancellationToken signatures (#571)")],-1);function d(p,_){const t=s("Download");return n(),r("div",null,[i,c,u,o(t)])}const h=a(l,[["render",d],["__file","2018-01-21-quartznet-3.0.1-released.html.vue"]]),f=JSON.parse('{"path":"/posts/2018-01-21-quartznet-3.0.1-released.html","title":"Quartz.NET 3.0.1 Released","lang":"en-US","frontmatter":{"title":"Quartz.NET 3.0.1 Released","tags":["releases"]},"headers":[],"git":{"updatedTime":1735723320000,"contributors":[{"name":"JT","email":"975824+Hawxy@users.noreply.github.com","commits":1}]},"filePathRelative":"_posts/2018-01-21-quartznet-3.0.1-released.md"}');export{h as comp,f as data};
