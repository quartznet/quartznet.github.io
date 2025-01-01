import{_ as n,o as s,c as a,e}from"./app-Ba_ts8M_.js";const t={},o=e(`<h1 id="job-template" tabindex="-1"><a class="header-anchor" href="#job-template"><span>Job Template</span></a></h1><p>This page tries to pull together a variety of common recommendations listed throughout the documentation into one page can be easily referenced.</p><div class="language-csharp line-numbers-mode" data-ext="cs" data-title="cs"><pre class="language-csharp"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">SampleJob</span> <span class="token punctuation">:</span> <span class="token type-list"><span class="token class-name">IJob</span></span>
<span class="token punctuation">{</span>
    <span class="token comment">// have a public key that is easy reference in DI configuration for example</span>
    <span class="token comment">// group helps you with targeting specific jobs in maintenance operations, </span>
    <span class="token comment">// like pause all jobs in group &quot;integration&quot;</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">readonly</span> <span class="token class-name">JobKey</span> Key <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">JobKey</span><span class="token punctuation">(</span><span class="token string">&quot;sample-job&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;examples&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token keyword">async</span> <span class="token return-type class-name">Task</span> <span class="token function">Execute</span><span class="token punctuation">(</span><span class="token class-name">IJobExecutionContext</span> context<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>context<span class="token punctuation">.</span>RefireCount <span class="token operator">&gt;</span> <span class="token number">10</span><span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            <span class="token comment">// we might not ever succeed!</span>
            <span class="token comment">// maybe log a warning, throw another type of error, inform the engineer on call</span>
            <span class="token keyword">return</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">try</span> 
        <span class="token punctuation">{</span>
            <span class="token comment">// get data out of the MergedJobDataMap</span>
            <span class="token class-name"><span class="token keyword">var</span></span> <span class="token keyword">value</span> <span class="token operator">=</span> context<span class="token punctuation">.</span>MergedJobDataMap<span class="token punctuation">.</span><span class="token function">GetString</span><span class="token punctuation">(</span><span class="token string">&quot;some-value&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            
            <span class="token comment">// ... do work</span>
            <span class="token keyword">await</span> Task<span class="token punctuation">.</span><span class="token function">Delay</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> ex<span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            <span class="token comment">// do you want the job to refire?</span>
            <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">JobExecutionException</span><span class="token punctuation">(</span><span class="token named-parameter punctuation">msg</span><span class="token punctuation">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span> <span class="token named-parameter punctuation">refireImmediately</span><span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token named-parameter punctuation">cause</span><span class="token punctuation">:</span> ex<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),p=[o];function c(l,i){return s(),a("div",null,p)}const r=n(t,[["render",c],["__file","job-template.html.vue"]]),d=JSON.parse('{"path":"/documentation/quartz-3.x/how-tos/job-template.html","title":"Job Template","lang":"en-US","frontmatter":{"title":"Job Template"},"headers":[],"git":{"updatedTime":1735723320000,"contributors":[{"name":"JT","email":"975824+Hawxy@users.noreply.github.com","commits":1}]},"filePathRelative":"documentation/quartz-3.x/how-tos/job-template.md"}');export{r as comp,d as data};
