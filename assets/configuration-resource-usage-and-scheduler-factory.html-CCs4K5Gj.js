import{_ as s,r,o as i,c,b as e,d as n,a as t,e as a}from"./app-Ba_ts8M_.js";const l={},d=e("h1",{id:"configuration-resource-usage-and-schedulerfactory",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#configuration-resource-usage-and-schedulerfactory"},[e("span",null,"Configuration, Resource Usage and SchedulerFactory")])],-1),u=e("p",null,'Quartz is designed in modular way, and therefore to get it running, several components need to be "snapped" together. Fortunately, some helpers exist for making this happen.',-1),g=e("p",null,"The major components that need to be configured before Quartz can do its work are:",-1),h=e("ul",null,[e("li",null,"ThreadPool"),e("li",null,"JobStore"),e("li",null,"DataSources (if necessary)"),e("li",null,"The Scheduler itself")],-1),p=e("code",null,"DefaultThreadPool",-1),f={href:"https://docs.microsoft.com/en-us/dotnet/standard/threading/the-managed-thread-pool",target:"_blank",rel:"noopener noreferrer"},m=a('<p>JobStores and DataSources were discussed in Lesson 9 of this tutorial. Worth noting here, is the fact that all JobStores implement the <code>IJobStore</code> interface - and that if one of the bundled JobStores does not fit your needs, then you can make your own.</p><p>Finally, you need to create your Scheduler instance. The Scheduler itself needs to be given a name and handed instances of a JobStore and ThreadPool.</p><h2 id="stdschedulerfactory" tabindex="-1"><a class="header-anchor" href="#stdschedulerfactory"><span>StdSchedulerFactory</span></a></h2><p><code>StdSchedulerFactory</code> is an implementation of the <code>ISchedulerFactory</code> interface. It uses a set of properties (<code>NameValueCollection</code>) to create and initialize a Quartz Scheduler. The properties are generally stored in and loaded from a file, but can also be created by your program and handed directly to the factory. Simply calling <code>GetScheduler()</code> on the factory will produce the scheduler, initialize it (and its ThreadPool, JobStore and DataSources), and return a handle to its public interface.</p><p>You can find complete documentation in the &quot;Configuration Reference&quot; section of the Quartz documentation.</p><h2 id="directschedulerfactory" tabindex="-1"><a class="header-anchor" href="#directschedulerfactory"><span>DirectSchedulerFactory</span></a></h2><p><code>DirectSchedulerFactory</code> is another <code>ISchedulerFactory</code> implementation. It is useful to those wishing to create their Scheduler instance in a more programmatic way. Its use is generally discouraged for the following reasons:</p><ul><li>It requires the user to have a greater understanding of what they&#39;re doing, and</li><li>it does not allow for declarative configuration - or in other words, you end up hard-coding all of the scheduler&#39;s settings.</li></ul><h2 id="logging" tabindex="-1"><a class="header-anchor" href="#logging"><span>Logging</span></a></h2>',9),b={class:"custom-container tip"},y=e("p",{class:"custom-container-title"},"TIP",-1),k={href:"https://www.nuget.org/packages/Microsoft.Extensions.Logging.Abstractions/",target:"_blank",rel:"noopener noreferrer"},v=e("h3",{id:"liblog",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#liblog"},[e("span",null,"LibLog")])],-1),_={href:"https://github.com/damianh/LibLog",target:"_blank",rel:"noopener noreferrer"},S={href:"https://github.com/damianh/LibLog/wiki",target:"_blank",rel:"noopener noreferrer"},x=e("h3",{id:"microsoft-extensions-logging-abstractions",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#microsoft-extensions-logging-abstractions"},[e("span",null,"Microsoft.Extensions.Logging.Abstractions")])],-1),L={href:"https://www.nuget.org/packages/Quartz.Extensions.DependencyInjection",target:"_blank",rel:"noopener noreferrer"},w=a(`<h4 id="manual-configuration" tabindex="-1"><a class="header-anchor" href="#manual-configuration"><span>Manual configuration</span></a></h4><div class="language-csharp line-numbers-mode" data-ext="cs" data-title="cs"><pre class="language-csharp"><code><span class="token comment">// obtain your logger factory, for example from IServiceProvider</span>
<span class="token class-name">ILoggerFactory</span> loggerFactory <span class="token operator">=</span> <span class="token range operator">..</span><span class="token punctuation">.</span><span class="token punctuation">;</span>

<span class="token comment">// Quartz 3.1</span>
Quartz<span class="token punctuation">.</span>LogContext<span class="token punctuation">.</span><span class="token function">SetCurrentLogProvider</span><span class="token punctuation">(</span>loggerFactory<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// Quartz 3.2 onwards</span>
Quartz<span class="token punctuation">.</span>Logging<span class="token punctuation">.</span>LogContext<span class="token punctuation">.</span><span class="token function">SetCurrentLogProvider</span><span class="token punctuation">(</span>loggerFactory<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="configuration-using-microsoft-di-integration" tabindex="-1"><a class="header-anchor" href="#configuration-using-microsoft-di-integration"><span>Configuration using Microsoft DI integration</span></a></h4><div class="language-csharp line-numbers-mode" data-ext="cs" data-title="cs"><pre class="language-csharp"><code>services<span class="token punctuation">.</span><span class="token function">AddQuartz</span><span class="token punctuation">(</span>q <span class="token operator">=&gt;</span>
<span class="token punctuation">{</span>
    <span class="token comment">// this automatically registers the Microsoft Logging</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4);function z(F,I){const o=r("ExternalLinkIcon");return i(),c("div",null,[d,u,g,h,e("p",null,[n("Thread pooling has changed a lot since the Task-based jobs were introduced. Now the default implementation, "),p,n(" uses "),e("a",f,[n("CLR's managed thread pool"),t(o)]),n(" to execute jobs as tasks. You can configure the pool that have max concurrency, which effectively limits how many concurrent tasks can be scheduled to the CLR's thread pool. See configuration reference for more details on how to configure the thread pool implementation.")]),m,e("div",b,[y,e("p",null,[n("As of Quartz.NET 3.1, you can configure "),e("a",k,[n("Microsoft.Extensions.Logging.Abstractions"),t(o)]),n(" to be used instead of LibLog.")])]),v,e("p",null,[n("Quartz.NET uses "),e("a",_,[n("LibLog"),t(o)]),n(' library for all of its logging needs. Quartz does not produce much logging information - generally just some information during initialization, and then only messages about serious problems while Jobs are executing. In order to "tune" the logging settings (such as the amount of output, and where the output goes), you need to actually configure your logging framework of choice as LibLog mostly delegates the work to more full-fledged logging framework like log4net, SeriLog etc.')]),e("p",null,[n("Please see "),e("a",S,[n("LibLog Wiki"),t(o)]),n(" for more information.")]),x,e("p",null,[n("You can configure Microsoft.Extensions.Logging.Abstractions either manually or using services found in "),e("a",L,[n("Quartz.Extensions.DependencyInjection"),t(o)]),n(".")]),w])}const Q=s(l,[["render",z],["__file","configuration-resource-usage-and-scheduler-factory.html.vue"]]),C=JSON.parse('{"path":"/documentation/quartz-4.x/tutorial/configuration-resource-usage-and-scheduler-factory.html","title":"Configuration, Resource Usage and SchedulerFactory","lang":"en-US","frontmatter":{"title":"Configuration, Resource Usage and SchedulerFactory"},"headers":[{"level":2,"title":"StdSchedulerFactory","slug":"stdschedulerfactory","link":"#stdschedulerfactory","children":[]},{"level":2,"title":"DirectSchedulerFactory","slug":"directschedulerfactory","link":"#directschedulerfactory","children":[]},{"level":2,"title":"Logging","slug":"logging","link":"#logging","children":[{"level":3,"title":"LibLog","slug":"liblog","link":"#liblog","children":[]},{"level":3,"title":"Microsoft.Extensions.Logging.Abstractions","slug":"microsoft-extensions-logging-abstractions","link":"#microsoft-extensions-logging-abstractions","children":[]}]}],"git":{"updatedTime":1735723320000,"contributors":[{"name":"JT","email":"975824+Hawxy@users.noreply.github.com","commits":1}]},"filePathRelative":"documentation/quartz-4.x/tutorial/configuration-resource-usage-and-scheduler-factory.md"}');export{Q as comp,C as data};