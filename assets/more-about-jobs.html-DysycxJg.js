import{_ as n,o as a,c as s,e as t}from"./app-Ba_ts8M_.js";const e={},o=t(`<p>As you&#39;ve seen, jobs are rather easy to implement. There are just a few more things that you need to understand about the nature of jobs, about the Execute(..) method of the IJob interface, and about JobDetails.</p><p>While a class that you implement is the actual &quot;job&quot;, Quartz needs to be informed about various attributes that you may wish the job to have. This is done via the JobDetail class, which was mentioned briefly in the previous section. Software &#39;archaeologists&#39; may be interested to know that in an older incarnation of Quartz for Java, the implementation of the functionality of JobDetail was imposed upon the implementor of each Job class by having all of JobDetail&#39;s &#39;getter&#39; methods on the Job interface itself. This forced a cumbersome job of re-implementing virtually identical code on every Job class - which was really dumb... thus JobDetail class was created.</p><p>Let&#39;s take a moment now to discuss a bit about the &#39;nature&#39; of jobs and the life-cycle of job instances within Quartz.NET. First lets take a look back at some of that snippet of code we saw in Lesson 1:</p><p><strong>Using Quartz.NET</strong></p><div class="language-csharp line-numbers-mode" data-ext="cs" data-title="cs"><pre class="language-csharp"><code>    <span class="token comment">// construct a scheduler factory</span>
    <span class="token class-name">ISchedulerFactory</span> schedFact <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">StdSchedulerFactory</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    
    <span class="token comment">// get a scheduler</span>
    <span class="token class-name">IScheduler</span> sched <span class="token operator">=</span> schedFact<span class="token punctuation">.</span><span class="token function">GetScheduler</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    sched<span class="token punctuation">.</span><span class="token function">Start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    
    <span class="token comment">// construct job info</span>
    <span class="token class-name">JobDetail</span> jobDetail <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">JobDetail</span><span class="token punctuation">(</span><span class="token string">&quot;myJob&quot;</span><span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token keyword">typeof</span><span class="token punctuation">(</span><span class="token type-expression class-name">DumbJob</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// fire every hour</span>
    <span class="token class-name">Trigger</span> trigger <span class="token operator">=</span> TriggerUtils<span class="token punctuation">.</span><span class="token function">MakeHourlyTrigger</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// start on the next even hour</span>
    trigger<span class="token punctuation">.</span>StartTime <span class="token operator">=</span> TriggerUtils<span class="token punctuation">.</span><span class="token function">GetEvenHourDate</span><span class="token punctuation">(</span>DateTime<span class="token punctuation">.</span>UtcNow<span class="token punctuation">)</span><span class="token punctuation">;</span>  
    trigger<span class="token punctuation">.</span>Name <span class="token operator">=</span> <span class="token string">&quot;myTrigger&quot;</span><span class="token punctuation">;</span>
    sched<span class="token punctuation">.</span><span class="token function">ScheduleJob</span><span class="token punctuation">(</span>jobDetail<span class="token punctuation">,</span> trigger<span class="token punctuation">)</span><span class="token punctuation">;</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Now consider the job class <em>DumbJob</em> defined as such:</p><div class="language-csharp line-numbers-mode" data-ext="cs" data-title="cs"><pre class="language-csharp"><code>    <span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">DumbJob</span> <span class="token punctuation">:</span> <span class="token type-list"><span class="token class-name">IJob</span></span>
    <span class="token punctuation">{</span>
        <span class="token keyword">public</span> <span class="token function">DumbJob</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token punctuation">}</span>
    
        <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">Execute</span><span class="token punctuation">(</span><span class="token class-name">JobExecutionContext</span> context<span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span><span class="token string">&quot;DumbJob is executing.&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Notice that we &#39;feed&#39; the scheduler a JobDetail instance, and that it refers to the job to be executed by simply providing the job&#39;s class. Each (and every) time the scheduler executes the job, it creates a new instance of the class before calling its Execute(..) method. One of the ramifications of this behavior is the fact that jobs must have a no-argument constructor. Another ramification is that it does not make sense to have data-members defined on the job class - as their values would be &#39;cleared&#39; every time the job executes.</p><p>You may now be wanting to ask &quot;how can I provide properties/configuration for a Job instance?&quot; and &quot;how can I keep track of a job&#39;s state between executions?&quot; The answer to these questions are the same: the key is the JobDataMap, which is part of the JobDetail object.</p><h2 id="jobdatamap" tabindex="-1"><a class="header-anchor" href="#jobdatamap"><span>JobDataMap</span></a></h2><p>The JobDataMap can be used to hold any number of (serializable) objects which you wish to have made available to the job instance when it executes. JobDataMap is an implementation of the IDictionary interface, and has some added convenience methods for storing and retrieving data of primitive types.</p><p>Here&#39;s some quick snippets of putting data into the JobDataMap prior to adding the job to the scheduler:</p><p><strong>Setting Values in a JobDataMap</strong></p><div class="language-csharp line-numbers-mode" data-ext="cs" data-title="cs"><pre class="language-csharp"><code>    jobDetail<span class="token punctuation">.</span>JobDataMap<span class="token punctuation">[</span><span class="token string">&quot;jobSays&quot;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot;Hello World!&quot;</span><span class="token punctuation">;</span>
    jobDetail<span class="token punctuation">.</span>JobDataMap<span class="token punctuation">[</span><span class="token string">&quot;myFloatValue&quot;</span><span class="token punctuation">]</span> <span class="token operator">=</span>  <span class="token number">3.141f</span><span class="token punctuation">;</span>
    jobDetail<span class="token punctuation">.</span>JobDataMap<span class="token punctuation">[</span><span class="token string">&quot;myStateData&quot;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">ArrayList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Here&#39;s a quick example of getting data from the JobDataMap during the job&#39;s execution:</p><p><strong>Getting Values from a JobDataMap</strong></p><div class="language-csharp line-numbers-mode" data-ext="cs" data-title="cs"><pre class="language-csharp"><code>    <span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">DumbJob</span> <span class="token punctuation">:</span> <span class="token type-list"><span class="token class-name">IJob</span></span>
    <span class="token punctuation">{</span>
        <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">Execute</span><span class="token punctuation">(</span><span class="token class-name">JobExecutionContext</span> context<span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            <span class="token class-name"><span class="token keyword">string</span></span> instName <span class="token operator">=</span> context<span class="token punctuation">.</span>JobDetail<span class="token punctuation">.</span>Name<span class="token punctuation">;</span>
            <span class="token class-name"><span class="token keyword">string</span></span> instGroup <span class="token operator">=</span> context<span class="token punctuation">.</span>JobDetail<span class="token punctuation">.</span>Group<span class="token punctuation">;</span>
    
            <span class="token class-name">JobDataMap</span> dataMap <span class="token operator">=</span> context<span class="token punctuation">.</span>JobDetail<span class="token punctuation">.</span>JobDataMap<span class="token punctuation">;</span>
    
            <span class="token class-name"><span class="token keyword">string</span></span> jobSays <span class="token operator">=</span> dataMap<span class="token punctuation">.</span><span class="token function">GetString</span><span class="token punctuation">(</span><span class="token string">&quot;jobSays&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name"><span class="token keyword">float</span></span> myFloatValue <span class="token operator">=</span> dataMap<span class="token punctuation">.</span><span class="token function">GetFloat</span><span class="token punctuation">(</span><span class="token string">&quot;myFloatValue&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">ArrayList</span> state <span class="token operator">=</span> <span class="token punctuation">(</span>ArrayList<span class="token punctuation">)</span> dataMap<span class="token punctuation">[</span><span class="token string">&quot;myStateData&quot;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
            state<span class="token punctuation">.</span><span class="token function">Add</span><span class="token punctuation">(</span>DateTime<span class="token punctuation">.</span>UtcNow<span class="token punctuation">)</span><span class="token punctuation">;</span>
    
            Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span><span class="token string">&quot;Instance {0} of DumbJob says: {1}&quot;</span><span class="token punctuation">,</span> instName<span class="token punctuation">,</span> jobSays<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>If you use a persistent JobStore (discussed in the JobStore section of this tutorial) you should use some care in deciding what you place in the JobDataMap, because the object in it will be serialized, and they therefore become prone to class-versioning problems. Obviously standard .NET types should be very safe, but beyond that, anytime someone changes the definition of a class for which you have serialized instances, care has to be taken not to break compatibility. Optionally, you can put AdoJobStore and JobDataMap into a mode where only primitives and strings can be stored in the map, thus eliminating any possibility of later serialization problems.</p><h3 id="stateful-vs-non-stateful-jobs" tabindex="-1"><a class="header-anchor" href="#stateful-vs-non-stateful-jobs"><span>Stateful vs. Non-Stateful Jobs</span></a></h3><p>Triggers can also have JobDataMaps associated with them. This can be useful in the case where you have a Job that is stored in the scheduler for regular/repeated use by multiple Triggers, yet with each independent triggering, you want to supply the Job with different data inputs.</p><p>The JobDataMap that is found on the JobExecutionContext during Job execution serves as a convenience. It is a merge of the JobDataMap found on the JobDetail and the one found on the Trigger, with the value in the latter overriding any same-named values in the former.</p><p>Here&#39;s a quick example of getting data from the JobExecutionContext&#39;s merged JobDataMap during the job&#39;s execution:</p><p><strong>Getting Values from the JobExecutionContext convenience/merged JobDataMap</strong></p><div class="language-csharp line-numbers-mode" data-ext="cs" data-title="cs"><pre class="language-csharp"><code>    <span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">DumbJob</span> <span class="token punctuation">:</span> <span class="token type-list"><span class="token class-name">IJob</span></span>
    <span class="token punctuation">{</span>
        <span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">Execute</span><span class="token punctuation">(</span><span class="token class-name">JobExecutionContext</span> context<span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            <span class="token class-name"><span class="token keyword">string</span></span> instName <span class="token operator">=</span> context<span class="token punctuation">.</span>JobDetail<span class="token punctuation">.</span>Name<span class="token punctuation">;</span>
            <span class="token class-name"><span class="token keyword">string</span></span> instGroup <span class="token operator">=</span> context<span class="token punctuation">.</span>JobDetail<span class="token punctuation">.</span>Group<span class="token punctuation">;</span>
    
            <span class="token comment">// Note the difference from the previous example</span>
            <span class="token class-name">JobDataMap</span> dataMap <span class="token operator">=</span> context<span class="token punctuation">.</span>MergedJobDataMap<span class="token punctuation">;</span>
    
            <span class="token class-name"><span class="token keyword">string</span></span> jobSays <span class="token operator">=</span> dataMap<span class="token punctuation">.</span><span class="token function">GetString</span><span class="token punctuation">(</span><span class="token string">&quot;jobSays&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name"><span class="token keyword">float</span></span> myFloatValue <span class="token operator">=</span> dataMap<span class="token punctuation">.</span><span class="token function">GetFloat</span><span class="token punctuation">(</span><span class="token string">&quot;myFloatValue&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">ArrayList</span> state <span class="token operator">=</span> <span class="token punctuation">(</span>ArrayList<span class="token punctuation">)</span> dataMap<span class="token punctuation">.</span><span class="token function">Get</span><span class="token punctuation">(</span><span class="token string">&quot;myStateData&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            state<span class="token punctuation">.</span><span class="token function">Add</span><span class="token punctuation">(</span>DateTime<span class="token punctuation">.</span>UtcNow<span class="token punctuation">)</span><span class="token punctuation">;</span>
    
            Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span><span class="token string">&quot;Instance {0} of DumbJob says: {1}&quot;</span><span class="token punctuation">,</span> instName<span class="token punctuation">,</span> jobSays<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="statefuljob" tabindex="-1"><a class="header-anchor" href="#statefuljob"><span>StatefulJob</span></a></h2><p>Now, some additional notes about a job&#39;s state data (aka JobDataMap): A Job instance can be defined as &quot;stateful&quot; or &quot;non-stateful&quot;. Non-stateful jobs only have their JobDataMap stored at the time they are added to the scheduler. This means that any changes made to the contents of the job data map during execution of the job will be lost, and will not seen by the job the next time it executes. You have probably guessed, a stateful job is just the opposite - its JobDataMap is re-stored after every execution of the job. One side-effect of making a job stateful is that it cannot be executed concurrently. Or in other words: if a job is stateful, and a trigger attempts to &#39;fire&#39; the job while it is already executing, the trigger will block (wait) until the previous execution completes.</p><p>You &#39;mark&#39; a Job as stateful by having it implement the IStatefulJob interface, rather than the IJob interface.</p><h2 id="job-instances" tabindex="-1"><a class="header-anchor" href="#job-instances"><span>Job &#39;Instances&#39;</span></a></h2><p>One final point on this topic that may or may not be obvious by now: You can create a single job class, and store many &#39;instance definitions&#39; of it within the scheduler by creating multiple instances of JobDetails - each with its own set of properties and JobDataMap - and adding them all to the scheduler.</p><p>When a trigger fires, the Job it is associated to is instantiated via the JobFactory configured on the Scheduler. The default JobFactory simply calls Activator.CreateInstance behind the scenes on the job class. You may want to create your own implementation of JobFactory to accomplish things such as having your application&#39;s IoC or DI container produce/initialize the job instance.</p><h2 id="other-attributes-of-jobs" tabindex="-1"><a class="header-anchor" href="#other-attributes-of-jobs"><span>Other Attributes Of Jobs</span></a></h2><p>Here&#39;s a quick summary of the other properties which can be defined for a job instance via the JobDetail object:</p><ul><li>Durable - if a job is non-durable, it is automatically deleted from the scheduler once there are no longer any active triggers associated with it.</li><li>Volatile - if a job is volatile, it is not persisted between re-starts of the Quartz scheduler.</li><li>RequestsRecovery - if a job &quot;requests recovery&quot;, and it is executing during the time of a &#39;hard shutdown&#39; of the scheduler (i.e. the process it is running within crashes, or the machine is shut off), then it is re-executed when the scheduler is started again. In this case, the JobExecutionContext.IsRecovering property will return true.</li><li>JobListeners - a job can have a set of zero or more JobListeners associated with it. When the job executes, the listeners are notified. More discussion on JobListeners can be found in the section of this document that is dedicated to the topic of TriggerListeners &amp; JobListeners.</li></ul><h2 id="the-job-execute-method" tabindex="-1"><a class="header-anchor" href="#the-job-execute-method"><span>The Job.Execute(..) Method</span></a></h2><p>Finally, we need to inform you of a few details of the IJob.Execute(..) method. The only type of exception that you are allowed to throw from the execute method is the JobExecutionException. Because of this, you should generally wrap the entire contents of the execute method with a &#39;try-catch&#39; block. You should also spend some time looking at the documentation for the JobExecutionException, as your job can use it to provide the scheduler various directives as to how you want the exception to be handled.</p>`,35),i=[o];function p(c,l){return a(),s("div",null,i)}const r=n(e,[["render",p],["__file","more-about-jobs.html.vue"]]),d=JSON.parse(`{"path":"/documentation/quartz-1.x/tutorial/more-about-jobs.html","title":"Lesson 3: More About Jobs & JobDetails","lang":"en-US","frontmatter":{"title":"Lesson 3: More About Jobs & JobDetails"},"headers":[{"level":2,"title":"JobDataMap","slug":"jobdatamap","link":"#jobdatamap","children":[{"level":3,"title":"Stateful vs. Non-Stateful Jobs","slug":"stateful-vs-non-stateful-jobs","link":"#stateful-vs-non-stateful-jobs","children":[]}]},{"level":2,"title":"StatefulJob","slug":"statefuljob","link":"#statefuljob","children":[]},{"level":2,"title":"Job 'Instances'","slug":"job-instances","link":"#job-instances","children":[]},{"level":2,"title":"Other Attributes Of Jobs","slug":"other-attributes-of-jobs","link":"#other-attributes-of-jobs","children":[]},{"level":2,"title":"The Job.Execute(..) Method","slug":"the-job-execute-method","link":"#the-job-execute-method","children":[]}],"git":{"updatedTime":1735723320000,"contributors":[{"name":"JT","email":"975824+Hawxy@users.noreply.github.com","commits":1}]},"filePathRelative":"documentation/quartz-1.x/tutorial/more-about-jobs.md"}`);export{r as comp,d as data};
