import{_ as n,o as s,c as a,e as t}from"./app-Ba_ts8M_.js";const e={},p=t(`<p>Quartz is designed with the ability to register a job with multiple triggers. Each job can have a base line set of data, and then each trigger can bring its own set of data as well. During the job execution Quartz will merge the data for you, with the data in the trigger overriding the data in the job.</p><p>Our example job:</p><div class="language-csharp line-numbers-mode" data-ext="cs" data-title="cs"><pre class="language-csharp"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">HelloJob</span> <span class="token punctuation">:</span> <span class="token type-list"><span class="token class-name">IJob</span></span>
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">readonly</span> <span class="token class-name">JobKey</span> Key <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">JobKey</span><span class="token punctuation">(</span><span class="token string">&quot;customer-process&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;group&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token keyword">async</span> <span class="token return-type class-name">Task</span> <span class="token function">Execute</span><span class="token punctuation">(</span><span class="token class-name">IJobExecutionContext</span> context<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token class-name"><span class="token keyword">var</span></span> customerId <span class="token operator">=</span> context<span class="token punctuation">.</span>MergedJobDataMap<span class="token punctuation">.</span><span class="token function">GetString</span><span class="token punctuation">(</span><span class="token string">&quot;CustomerId&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name"><span class="token keyword">var</span></span> batchSize <span class="token operator">=</span> context<span class="token punctuation">.</span>MergedJobDataMap<span class="token punctuation">.</span><span class="token function">GetString</span><span class="token punctuation">(</span><span class="token string">&quot;batch-size&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">await</span> Console<span class="token punctuation">.</span><span class="token function">WriteLineAsync</span><span class="token punctuation">(</span><span class="token interpolation-string"><span class="token string">$&quot;CustomerId=</span><span class="token interpolation"><span class="token punctuation">{</span><span class="token expression language-csharp">customerId</span><span class="token punctuation">}</span></span><span class="token string"> batch-size=</span><span class="token interpolation"><span class="token punctuation">{</span><span class="token expression language-csharp">batchSize</span><span class="token punctuation">}</span></span><span class="token string">&quot;</span></span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Below, we have two triggers, each with their own set of data, but we only had to register the one job.</p><div class="language-csharp line-numbers-mode" data-ext="cs" data-title="cs"><pre class="language-csharp"><code><span class="token keyword">public</span> <span class="token return-type class-name">Task</span> <span class="token function">DoSomething</span><span class="token punctuation">(</span><span class="token class-name">IScheduler</span> schedule<span class="token punctuation">,</span> <span class="token class-name">CancellationToken</span> ct<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token class-name"><span class="token keyword">var</span></span> job <span class="token operator">=</span> JobBuilder<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">Create</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>HelloJob<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span>
                        <span class="token punctuation">.</span><span class="token function">WithIdentity</span><span class="token punctuation">(</span>HelloJob<span class="token punctuation">.</span>Key<span class="token punctuation">)</span>
                        <span class="token punctuation">.</span><span class="token function">Build</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    
    <span class="token keyword">await</span> schedule<span class="token punctuation">.</span><span class="token function">AddJob</span><span class="token punctuation">(</span>job<span class="token punctuation">,</span> <span class="token named-parameter punctuation">replace</span><span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token named-parameter punctuation">storeNonDurableWhileAwaitingScheduling</span><span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> ct<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// Trigger 1</span>
    <span class="token class-name"><span class="token keyword">var</span></span> jobData1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">JobDataMap</span> <span class="token punctuation">{</span> <span class="token punctuation">{</span> <span class="token string">&quot;CustomerId&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;1&quot;</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token keyword">await</span> scheduler<span class="token punctuation">.</span><span class="token function">TriggerJob</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token constructor-invocation class-name">JobKey</span><span class="token punctuation">(</span><span class="token string">&quot;customer-process&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;group&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> jobData1<span class="token punctuation">,</span> ct<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// Trigger 2</span>
    <span class="token class-name"><span class="token keyword">var</span></span> jobData2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">JobDataMap</span> <span class="token punctuation">{</span> <span class="token punctuation">{</span> <span class="token string">&quot;CustomerId&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;2&quot;</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token keyword">await</span> scheduler<span class="token punctuation">.</span><span class="token function">TriggerJob</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token constructor-invocation class-name">JobKey</span><span class="token punctuation">(</span><span class="token string">&quot;customer-process&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;group&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> jobData2<span class="token punctuation">,</span> ct<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>When this runs you will see:</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>CustomerId=1 batch-size=
CustomerId=2 batch-size=
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="job-data-and-trigger-data" tabindex="-1"><a class="header-anchor" href="#job-data-and-trigger-data"><span>Job Data and Trigger Data</span></a></h3><p>You could even set common data parameters on the job itself. Here we are adding some job data to the job itself.</p><div class="language-csharp line-numbers-mode" data-ext="cs" data-title="cs"><pre class="language-csharp"><code><span class="token keyword">public</span> <span class="token return-type class-name">Task</span> <span class="token function">DoSomething</span><span class="token punctuation">(</span><span class="token class-name">IScheduler</span> schedule<span class="token punctuation">,</span> <span class="token class-name">CancellationToken</span> ct<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token class-name"><span class="token keyword">var</span></span> job <span class="token operator">=</span> JobBuilder<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">Create</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>AnExampleJob<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span>
                        <span class="token punctuation">.</span><span class="token function">WithIdentity</span><span class="token punctuation">(</span>HelloJob<span class="token punctuation">.</span>Key<span class="token punctuation">)</span>
                        <span class="token punctuation">.</span><span class="token function">UsingJobData</span><span class="token punctuation">(</span><span class="token string">&quot;batch-size&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;50&quot;</span><span class="token punctuation">)</span>
                        <span class="token punctuation">.</span><span class="token function">Build</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    
    <span class="token keyword">await</span> schedule<span class="token punctuation">.</span><span class="token function">AddJob</span><span class="token punctuation">(</span>job<span class="token punctuation">,</span> <span class="token named-parameter punctuation">replace</span><span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token named-parameter punctuation">storeNonDurableWhileAwaitingScheduling</span><span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> ct<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// Trigger 1</span>
    <span class="token class-name"><span class="token keyword">var</span></span> jobData1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">JobDataMap</span> <span class="token punctuation">{</span> <span class="token punctuation">{</span> <span class="token string">&quot;CustomerId&quot;</span><span class="token punctuation">,</span> <span class="token number">1</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token keyword">await</span> scheduler<span class="token punctuation">.</span><span class="token function">TriggerJob</span><span class="token punctuation">(</span>HelloJob<span class="token punctuation">.</span>Key<span class="token punctuation">,</span> jobData1<span class="token punctuation">,</span> ct<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// Trigger 2</span>
    <span class="token class-name"><span class="token keyword">var</span></span> jobData2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">JobDataMap</span> <span class="token punctuation">{</span> <span class="token punctuation">{</span> <span class="token string">&quot;CustomerId&quot;</span><span class="token punctuation">,</span> <span class="token number">2</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token keyword">await</span> scheduler<span class="token punctuation">.</span><span class="token function">TriggerJob</span><span class="token punctuation">(</span>HelloJob<span class="token punctuation">.</span>Key<span class="token punctuation">,</span> jobData2<span class="token punctuation">,</span> ct<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>When this runs you will see:</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>CustomerId=1 batch-size=50
CustomerId=2 batch-size=50
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,12),o=[p];function c(l,i){return s(),a("div",null,o)}const r=n(e,[["render",c],["__file","multiple-triggers.html.vue"]]),k=JSON.parse('{"path":"/documentation/quartz-3.x/how-tos/multiple-triggers.html","title":"Multiple Triggers","lang":"en-US","frontmatter":{"title":"Multiple Triggers"},"headers":[{"level":3,"title":"Job Data and Trigger Data","slug":"job-data-and-trigger-data","link":"#job-data-and-trigger-data","children":[]}],"git":{"updatedTime":1735723320000,"contributors":[{"name":"JT","email":"975824+Hawxy@users.noreply.github.com","commits":1}]},"filePathRelative":"documentation/quartz-3.x/how-tos/multiple-triggers.md"}');export{r as comp,k as data};
