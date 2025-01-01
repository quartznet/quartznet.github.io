import{_ as t,r as o,o as s,c as i,a as n,e as a}from"./app-Ba_ts8M_.js";const r={},c=a('<p>This is a maintenance release containing mostly bug fixes.</p><p>MS dependency injection job factory configuration was unified and you can now configure relevant options like whether to create a separate scope with using just the <code>UseMicrosoftDependencyInjectionJobFactory</code> and its callback. Now scoped jobs also get their properties set from job data map.</p><p>Pre-configuring Quartz options from <code>appsettings.json</code> with <code>services.Configure&lt;QuartzOptions&gt;(Configuration.GetSection(&quot;Quartz&quot;));</code> now also works as expected.</p><h2 id="github-issues" tabindex="-1"><a class="header-anchor" href="#github-issues"><span>GitHub Issues</span></a></h2><p><strong>FIXES</strong></p><ul><li>Make QuartzOptions Triggers and JobDetails public (#981)</li><li>Fix configuration system injection for dictionary/quartz.jobStore.misfireThreshold in DI (#983)</li><li>XMLSchedulingDataProcessor can cause IOException due to file locking (#993)</li></ul><p><strong>IMPROVEMENTS</strong></p><ul><li>Unify MS dependency injection job factory logic and configuration (#995)</li><li>Improve job dispatch performance to reduce latency before hitting Execute (RAMJobStore) (#996)</li></ul>',8);function l(u,d){const e=o("Download");return s(),i("div",null,[c,n(e)])}const g=t(r,[["render",l],["__file","2020-10-18-quartznet-3.2.1-released.html.vue"]]),h=JSON.parse('{"path":"/posts/2020-10-18-quartznet-3.2.1-released.html","title":"Quartz.NET 3.2.1 Released","lang":"en-US","frontmatter":{"title":"Quartz.NET 3.2.1 Released","tags":["releases"]},"headers":[{"level":2,"title":"GitHub Issues","slug":"github-issues","link":"#github-issues","children":[]}],"git":{"updatedTime":1735723320000,"contributors":[{"name":"JT","email":"975824+Hawxy@users.noreply.github.com","commits":1}]},"filePathRelative":"_posts/2020-10-18-quartznet-3.2.1-released.md"}');export{g as comp,h as data};