import{_ as o,r as c,o as p,c as l,b as n,d as s,a as e,e as t}from"./app-Ba_ts8M_.js";const i={},u=t(`<h1 id="rescheduling-jobs" tabindex="-1"><a class="header-anchor" href="#rescheduling-jobs"><span>Rescheduling Jobs</span></a></h1><p>A few ways to approach a need to reschedule a job.</p><h2 id="manually-retry" tabindex="-1"><a class="header-anchor" href="#manually-retry"><span>Manually Retry</span></a></h2><p>When a Quartz job is running, and an unhandled exception escapes the <code>IJob</code>, the Quartz system will mark the job in an error state. This would then allow you to reschedule the job using any method that would be work for your system.</p><h2 id="using-jobexecutionexception" tabindex="-1"><a class="header-anchor" href="#using-jobexecutionexception"><span>Using JobExecutionException</span></a></h2><p>One simple option is to use the <code>JobExecutionException</code> to control if the job should refire immediately or not.</p><div class="language-csharp line-numbers-mode" data-ext="cs" data-title="cs"><pre class="language-csharp"><code><span class="token keyword">public</span> <span class="token keyword">async</span> <span class="token return-type class-name">Task</span> <span class="token function">Execute</span><span class="token punctuation">(</span><span class="token class-name">IJobExecutionContext</span> context<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">try</span> 
    <span class="token punctuation">{</span>
        <span class="token comment">// do work</span>
    <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> ex<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">JobExecutionException</span><span class="token punctuation">(</span>ex<span class="token punctuation">,</span> <span class="token named-parameter punctuation">refireImmediately</span><span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            UnscheduleFiringTrigger <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
            UnscheduleAllTriggers <span class="token operator">=</span> <span class="token boolean">true</span>
        <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="polly-retries" tabindex="-1"><a class="header-anchor" href="#polly-retries"><span>Polly Retries</span></a></h2>`,8),r={href:"https://github.com/App-vNext/Polly",target:"_blank",rel:"noopener noreferrer"},d=t(`<h2 id="self-rescheduling" tabindex="-1"><a class="header-anchor" href="#self-rescheduling"><span>Self-Rescheduling</span></a></h2><p>If your job needs more time, say it needs to wait 5 minutes, the <code>IJobExecutionContext</code> has access to the scheduler on it. You could use that to reschedule the job, and let it exit normally.</p><div class="language-csharp line-numbers-mode" data-ext="cs" data-title="cs"><pre class="language-csharp"><code><span class="token keyword">public</span> <span class="token keyword">async</span> <span class="token return-type class-name">Task</span> <span class="token function">Execute</span><span class="token punctuation">(</span><span class="token class-name">IJobExecutionContext</span> context<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token comment">// something happens, that tells you to delay the processing</span>
    <span class="token comment">// like getting an HTTP 429 - Too Many requests</span>
    <span class="token class-name"><span class="token keyword">var</span></span> oldTrigger <span class="token operator">=</span> context<span class="token punctuation">.</span>Trigger<span class="token punctuation">;</span>
    <span class="token class-name"><span class="token keyword">var</span></span> newTrigger <span class="token operator">=</span> TriggerBuilder<span class="token punctuation">.</span><span class="token function">Create</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">ForJob</span><span class="token punctuation">(</span>context<span class="token punctuation">.</span>JobDetail<span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">WithIdentity</span><span class="token punctuation">(</span><span class="token interpolation-string"><span class="token string">$&quot;</span><span class="token interpolation"><span class="token punctuation">{</span><span class="token expression language-csharp">oldTrigger<span class="token punctuation">.</span>Key<span class="token punctuation">.</span>Name</span><span class="token punctuation">}</span></span><span class="token string">-retry&quot;</span></span><span class="token punctuation">,</span> oldTrigger<span class="token punctuation">.</span>Key<span class="token punctuation">.</span>Group<span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">StartAt</span><span class="token punctuation">(</span>DateTimeOffset<span class="token punctuation">.</span>UtcNow<span class="token punctuation">.</span><span class="token function">AddMinutes</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">Build</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">await</span> context<span class="token punctuation">.</span>Scheduler<span class="token punctuation">.</span><span class="token function">ScheduleJob</span><span class="token punctuation">(</span>newTrigger<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="self-descheduling" tabindex="-1"><a class="header-anchor" href="#self-descheduling"><span>Self-Descheduling</span></a></h2><p>Another approach, is to have the job run every 5 minutes (or some other suitable cadence) and after succeeding cancel itself. This has the added benefit of being easier to logically reason about, but could still be making calls to the downstream services.</p><div class="language-csharp line-numbers-mode" data-ext="cs" data-title="cs"><pre class="language-csharp"><code><span class="token keyword">public</span> <span class="token keyword">async</span> <span class="token return-type class-name">Task</span> <span class="token function">Execute</span><span class="token punctuation">(</span><span class="token class-name">IJobExecutionContext</span> context<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token comment">// work succeeds</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>success<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">await</span> context<span class="token punctuation">.</span>Scheduler<span class="token punctuation">.</span><span class="token function">UnscheduleJob</span><span class="token punctuation">(</span>context<span class="token punctuation">.</span>Trigger<span class="token punctuation">.</span>Key<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>`,7),k={href:"https://github.com/quartznet/quartznet/discussions/2073",target:"_blank",rel:"noopener noreferrer"};function h(m,b){const a=c("ExternalLinkIcon");return p(),l("div",null,[u,n("p",null,[s("If your job simply needs to retry its work, then you could wrap the job in a "),n("a",r,[s("Polly"),e(a)]),s(" policy, and use the policy definitions to retry it. Note that using Polly to implement long running retries will maintain a job slot, and prevent the job engine for performing more work.")]),d,n("p",null,[n("a",k,[s("GitHub Discussion"),e(a)])])])}const g=o(i,[["render",h],["__file","rescheduling-jobs.html.vue"]]),y=JSON.parse('{"path":"/documentation/quartz-3.x/how-tos/rescheduling-jobs.html","title":"Rescheduling Jobs","lang":"en-US","frontmatter":{},"headers":[{"level":2,"title":"Manually Retry","slug":"manually-retry","link":"#manually-retry","children":[]},{"level":2,"title":"Using JobExecutionException","slug":"using-jobexecutionexception","link":"#using-jobexecutionexception","children":[]},{"level":2,"title":"Polly Retries","slug":"polly-retries","link":"#polly-retries","children":[]},{"level":2,"title":"Self-Rescheduling","slug":"self-rescheduling","link":"#self-rescheduling","children":[]},{"level":2,"title":"Self-Descheduling","slug":"self-descheduling","link":"#self-descheduling","children":[]}],"git":{"updatedTime":1735723320000,"contributors":[{"name":"JT","email":"975824+Hawxy@users.noreply.github.com","commits":1}]},"filePathRelative":"documentation/quartz-3.x/how-tos/rescheduling-jobs.md"}');export{g as comp,y as data};
