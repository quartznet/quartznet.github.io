import{_ as s,r as o,o as i,c as r,b as d,d as e,a,w as n,e as c}from"./app-Ba_ts8M_.js";const u={},h=c(`<p>As mentioned previously, you can make .NET component executable by the scheduler simply by making it implement the IJob interface. Here is the interface:</p><p><strong>IJob Interface</strong></p><div class="language-csharp line-numbers-mode" data-ext="cs" data-title="cs"><pre class="language-csharp"><code>    <span class="token keyword">namespace</span> <span class="token namespace">Quartz</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">IJob</span>
        <span class="token punctuation">{</span>
            <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">Execute</span><span class="token punctuation">(</span><span class="token class-name">JobExecutionContext</span> context<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>In case you couldn&#39;t guess, when the job&#39;s trigger fires (more on that in a moment), the Execute(..) method is invoked by the scheduler. The JobExecutionContext object that is passed to this method provides the job instance with information about its &quot;run-time&quot; environment - a handle to the IScheduler that executed it, a handle to the Trigger that triggered the execution, the job&#39;s JobDetail object, and a few other items.</p><p>The JobDetail object is created by the Quartz.NET client (your program) at the time the Job is added to the scheduler. It contains various property settings for the Job, as well as a JobDataMap, which can be used to store state information for a given instance of your job class.</p><p>Trigger objects are used to trigger the execution (or &#39;firing&#39;) of jobs. When you wish to schedule a job, you instantiate a trigger and &#39;tune&#39; its properties to provide the scheduling you wish to have. Triggers may also have a JobDataMap associated with them - this is useful to passing parameters to a Job that are specific to the firings of the trigger. Quartz.NET ships with a handful of different trigger types, but the most commonly used types are SimpleTrigger and CronTrigger.</p><p>SimpleTrigger is handy if you need &#39;one-shot&#39; execution (just single execution of a job at a given moment in time), or if you need to fire a job at a given time, and have it repeat N times, with a delay of T between executions. CronTrigger is useful if you wish to have triggering based on calendar-like schedules - such as &quot;every Friday, at noon&quot; or &quot;at 10:15 on the 10th day of every month.&quot;</p><h2 id="why-jobs-and-triggers" tabindex="-1"><a class="header-anchor" href="#why-jobs-and-triggers"><span>Why Jobs AND Triggers?</span></a></h2><p>Many job schedulers do not have separate notions of jobs and triggers. Some define a &#39;job&#39; as simply an execution time (or schedule) along with some small job identifier. Others are much like the union of Quartz.NET&#39;s job and trigger objects. While developing Quartz for Java, Quartz team decided that it made sense to create a separation between the schedule and the work to be performed on that schedule. This has (in our opinion) many benefits.</p><p>For example, jobs can be created and stored in the job scheduler independent of a trigger, and many triggers can be associated with the same job. Another benefit of this loose-coupling is the ability to configure jobs that remain in the scheduler after their associated triggers have expired, so that that it can be rescheduled later, without having to re-define it. It also allows you to modify or replace a trigger without having to re-define its associated job.</p><h2 id="identifiers" tabindex="-1"><a class="header-anchor" href="#identifiers"><span>Identifiers</span></a></h2><p>Jobs and Triggers are given identifying names as they are registered with the Quartz.NET scheduler. Jobs and triggers can also be placed into &#39;groups&#39; which can be useful for organizing your jobs and triggers into categories for later maintenance. The name of a job or trigger must be unique within its group - or in other words, the true identifier of a job or trigger is its name + group. If you leave the group of the Job or Trigger &#39;null&#39;, it is equivalent to having specified SchedulerConstants.DefaultGroup.</p>`,12);function l(g,p){const t=o("RouteLink");return i(),r("div",null,[h,d("p",null,[e("You now have a general idea about what Jobs and Triggers are, you can learn more about them in "),a(t,{to:"/documentation/quartz-1.x/tutorial/more-about-jobs.html"},{default:n(()=>[e("Lesson 3: More About Jobs & JobDetails")]),_:1}),e(" and "),a(t,{to:"/documentation/quartz-1.x/tutorial/more-about-triggers.html"},{default:n(()=>[e("Lesson 4: More About Triggers")]),_:1})])])}const m=s(u,[["render",l],["__file","jobs-and-triggers.html.vue"]]),f=JSON.parse('{"path":"/documentation/quartz-1.x/tutorial/jobs-and-triggers.html","title":"Lesson 2: Jobs And Triggers","lang":"en-US","frontmatter":{"title":"Lesson 2: Jobs And Triggers"},"headers":[{"level":2,"title":"Why Jobs AND Triggers?","slug":"why-jobs-and-triggers","link":"#why-jobs-and-triggers","children":[]},{"level":2,"title":"Identifiers","slug":"identifiers","link":"#identifiers","children":[]}],"git":{"updatedTime":1735723320000,"contributors":[{"name":"JT","email":"975824+Hawxy@users.noreply.github.com","commits":1}]},"filePathRelative":"documentation/quartz-1.x/tutorial/jobs-and-triggers.md"}');export{m as comp,f as data};