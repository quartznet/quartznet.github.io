import{_ as s,r,o as i,c as l,b as t,d as e,a,e as c}from"./app-Ba_ts8M_.js";const u={},d=t("p",null,"This release contains mainly bug fixes but because there's a behavioral change in DST handling (for the better) that warrants for a minor version number increment.",-1),h={href:"https://github.com/quartznet/quartznet/pull/317",target:"_blank",rel:"noopener noreferrer"},m=c("<p><strong>FIXES</strong></p><ul><li>Jobs get stuck in the Blocked state after the DB connection is lost in NotifyJobListenersComplete (#282)</li><li>Oracle rownum based queries can work wrong after Oracle SQL tuning task has ran (#413)</li><li>Handle DST better (#317)</li><li>RAMJobStore fails to resume when paused without triggers (#433)</li><li>CronExpression doesn&#39;t properly check the range when an &quot;/interval&quot; is specified (#432)</li><li>Fix JobDataMap dirty flag when constructing from existing map (#431)</li><li>Store triggers by job in RAMJobStore for better performance (#430)</li><li>Create WorkerThread in virtual method (#426)</li><li>SqlSelectJobForTrigger is not using primary key join and causes index scan (#407)</li></ul>",2);function p(_,g){const n=r("ExternalLinkIcon"),o=r("Download");return i(),l("div",null,[d,t("p",null,[e("See "),t("a",h,[e("the GitHub issue"),a(n)]),e(" for details.")]),m,a(o)])}const f=s(u,[["render",p],["__file","2017-02-18-quartznet-2.5-released.html.vue"]]),S=JSON.parse('{"path":"/posts/2017-02-18-quartznet-2.5-released.html","title":"Quartz.NET 2.5 Released","lang":"en-US","frontmatter":{"title":"Quartz.NET 2.5 Released","tags":["releases"]},"headers":[],"git":{"updatedTime":1735723320000,"contributors":[{"name":"JT","email":"975824+Hawxy@users.noreply.github.com","commits":1}]},"filePathRelative":"_posts/2017-02-18-quartznet-2.5-released.md"}');export{f as comp,S as data};
