import{_ as n,o as s,c as a,e}from"./app-Ba_ts8M_.js";const t={},o=e(`<p>CronTriggers are often more useful than SimpleTrigger, if you need a job-firing schedule that recurs based on calendar-like notions, rather than on the exactly specified intervals of SimpleTrigger.</p><p>With CronTrigger, you can specify firing-schedules such as &quot;every Friday at noon&quot;, or &quot;every weekday and 9:30 am&quot;, or even &quot;every 5 minutes between 9:00 am and 10:00 am on every Monday, Wednesday and Friday&quot;.</p><p>Even so, like SimpleTrigger, CronTrigger has a startTime which specifies when the schedule is in force, and an (optional) endTime that specifies when the schedule should be discontinued.</p><h3 id="cron-expressions" tabindex="-1"><a class="header-anchor" href="#cron-expressions"><span>Cron Expressions</span></a></h3><p><em>Cron-Expressions</em> are used to configure instances of CronTrigger. Cron-Expressions are strings that are actually made up of seven sub-expressions, that describe individual details of the schedule. These sub-expression are separated with white-space, and represent:</p><ul><li><code>1. Seconds</code></li><li><code>2. Minutes</code></li><li><code>3. Hours</code></li><li><code>4. Day-of-Month</code></li><li><code>5. Month</code></li><li><code>6. Day-of-Week</code></li><li><code>7. Year (optional field)</code></li></ul><p>An example of a complete cron-expression is the string &quot;0 0 12 ? * WED&quot; - which means &quot;every Wednesday at 12:00 pm&quot;.</p><p>Individual sub-expressions can contain ranges and/or lists. For example, the day of week field in the previous (which reads &quot;WED&quot;) example could be replaces with &quot;MON-FRI&quot;, &quot;MON, WED, FRI&quot;, or even &quot;MON-WED,SAT&quot;.</p><p>Wild-cards (the &#39;<em>&#39; character) can be used to say &quot;every&quot; possible value of this field. Therefore the &#39;</em>&#39; character in the &quot;Month&quot; field of the previous example simply means &quot;every month&quot;. A &#39;*&#39; in the Day-Of-Week field would obviously mean &quot;every day of the week&quot;.</p><p>All of the fields have a set of valid values that can be specified. These values should be fairly obvious - such as the numbers 0 to 59 for seconds and minutes, and the values 0 to 23 for hours. Day-of-Month can be any value 1-31, but you need to be careful about how many days are in a given month! Months can be specified as values between 1 and 12, or by using the strings JAN, FEB, MAR, APR, MAY, JUN, JUL, AUG, SEP, OCT, NOV and DEC. Days-of-Week can be specified as values between 1 and 7 (1 = Sunday) or by using the strings SUN, MON, TUE, WED, THU, FRI and SAT.</p><p>The &#39;/&#39; character can be used to specify increments to values. For example, if you put &#39;0/15&#39; in the Minutes field, it means &#39;every 15 minutes, starting at minute zero&#39;. If you used &#39;3/20&#39; in the Minutes field, it would mean &#39;every 20 minutes during the hour, starting at minute three&#39; - or in other words it is the same as specifying &#39;3,23,43&#39; in the Minutes field.</p><p>The &#39;?&#39; character is allowed for the day-of-month and day-of-week fields. It is used to specify &quot;no specific value&quot;. This is useful when you need to specify something in one of the two fields, but not the other. See the examples below (and CronTrigger API documentation) for clarification.</p><p>The &#39;L&#39; character is allowed for the day-of-month and day-of-week fields. This character is short-hand for &quot;last&quot;, but it has different meaning in each of the two fields. For example, the value &quot;L&quot; in the day-of-month field means &quot;the last day of the month&quot; - day 31 for January, day 28 for February on non-leap years. If used in the day-of-week field by itself, it simply means &quot;7&quot; or &quot;SAT&quot;. But if used in the day-of-week field after another value, it means &quot;the last xxx day of the month&quot; - for example &quot;6L&quot; or &quot;FRIL&quot; both mean &quot;the last Friday of the month&quot;. When using the &#39;L&#39; option, it is important not to specify lists, or ranges of values, as you&#39;ll get confusing results.</p><p>The &#39;W&#39; is used to specify the weekday (Monday-Friday) nearest the given day. As an example, if you were to specify &quot;15W&quot; as the value for the day-of-month field, the meaning is: &quot;the nearest weekday to the 15th of the month&quot;.</p><p>The &#39;#&#39; is used to specify &quot;the nth&quot; XXX weekday of the month. For example, the value of &quot;6#3&quot; or &quot;FRI#3&quot; in the day-of-week field means &quot;the third Friday of the month&quot;.</p><h2 id="example-cron-expressions" tabindex="-1"><a class="header-anchor" href="#example-cron-expressions"><span>Example Cron Expressions</span></a></h2><p>Here are a few more examples of expressions and their meanings - you can find even more in the API documentation for CronTrigger</p><p><strong>CronTrigger Example 1 - an expression to create a trigger that simply fires every 5 minutes</strong></p><p><code>0 0/5 * * * ?</code></p><p><strong>CronTrigger Example 2 - an expression to create a trigger that fires every 5 minutes, at 10 seconds after the minute (i.e. 10:00:10 am, 10:05:10 am, etc.).</strong></p><p><code>10 0/5 * * * ?</code></p><p><strong>CronTrigger Example 3 - an expression to create a trigger that fires at 10:30, 11:30, 12:30, and 13:30, on every Wednesday and Friday.</strong></p><p><code>0 30 10-13 ? * WED,FRI</code></p><p><strong>CronTrigger Example 4 - an expression to create a trigger that fires every half hour between the hours of 8 am and 10 am on the 5th and 20th of every month. Note that the trigger will NOT fire at 10:00 am, just at 8:00, 8:30, 9:00 and 9:30</strong></p><p><code>0 0/30 8-9 5,20 * ?</code></p><p>Note that some scheduling requirements are too complicated to express with a single trigger - such as &quot;every 5 minutes between 9:00 am and 10:00 am, and every 20 minutes between 1:00 pm and 10:00 pm&quot;. The solution in this scenario is to simply create two triggers, and register both of them to run the same job.</p><h2 id="building-crontriggers" tabindex="-1"><a class="header-anchor" href="#building-crontriggers"><span>Building CronTriggers</span></a></h2><p>CronTrigger instances are built using <strong>TriggerBuilder</strong> (for the trigger&#39;s main properties) and <strong>WithCronSchedule</strong> extension method (for the CronTrigger-specific properties).</p><p>You can also use CronScheduleBuilder&#39;s static methods to create schedules.</p><p><strong>Build a trigger that will fire every other minute, between 8am and 5pm, every day:</strong></p><div class="language-csharp line-numbers-mode" data-ext="cs" data-title="cs"><pre class="language-csharp"><code>trigger <span class="token operator">=</span> TriggerBuilder<span class="token punctuation">.</span><span class="token function">Create</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">WithIdentity</span><span class="token punctuation">(</span><span class="token string">&quot;trigger3&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;group1&quot;</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">WithCronSchedule</span><span class="token punctuation">(</span><span class="token string">&quot;0 0/2 8-17 * * ?&quot;</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">ForJob</span><span class="token punctuation">(</span><span class="token string">&quot;myJob&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;group1&quot;</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">Build</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Build a trigger that will fire daily at 10:42 am:</strong></p><div class="language-csharp line-numbers-mode" data-ext="cs" data-title="cs"><pre class="language-csharp"><code><span class="token comment">// we use CronScheduleBuilder&#39;s static helper methods here</span>
trigger <span class="token operator">=</span> TriggerBuilder<span class="token punctuation">.</span><span class="token function">Create</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">WithIdentity</span><span class="token punctuation">(</span><span class="token string">&quot;trigger3&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;group1&quot;</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">WithSchedule</span><span class="token punctuation">(</span>CronScheduleBuilder<span class="token punctuation">.</span><span class="token function">DailyAtHourAndMinute</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">42</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">ForJob</span><span class="token punctuation">(</span>myJobKey<span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">Build</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>or -</p><div class="language-csharp line-numbers-mode" data-ext="cs" data-title="cs"><pre class="language-csharp"><code>trigger <span class="token operator">=</span> TriggerBuilder<span class="token punctuation">.</span><span class="token function">Create</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">WithIdentity</span><span class="token punctuation">(</span><span class="token string">&quot;trigger3&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;group1&quot;</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">WithCronSchedule</span><span class="token punctuation">(</span><span class="token string">&quot;0 42 10 * * ?&quot;</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">ForJob</span><span class="token punctuation">(</span><span class="token string">&quot;myJob&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;group1&quot;</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">Build</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Build a trigger that will fire on Wednesdays at 10:42 am, in a TimeZone other than the system&#39;s default:</strong></p><div class="language-csharp line-numbers-mode" data-ext="cs" data-title="cs"><pre class="language-csharp"><code>trigger <span class="token operator">=</span> TriggerBuilder<span class="token punctuation">.</span><span class="token function">Create</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">WithIdentity</span><span class="token punctuation">(</span><span class="token string">&quot;trigger3&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;group1&quot;</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">WithSchedule</span><span class="token punctuation">(</span>CronScheduleBuilder
        <span class="token punctuation">.</span><span class="token function">WeeklyOnDayAndHourAndMinute</span><span class="token punctuation">(</span>DayOfWeek<span class="token punctuation">.</span>Wednesday<span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">42</span><span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">InTimeZone</span><span class="token punctuation">(</span>TimeZoneInfo<span class="token punctuation">.</span><span class="token function">FindSystemTimeZoneById</span><span class="token punctuation">(</span><span class="token string">&quot;Central America Standard Time&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">ForJob</span><span class="token punctuation">(</span>myJobKey<span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">Build</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>or -</p><div class="language-csharp line-numbers-mode" data-ext="cs" data-title="cs"><pre class="language-csharp"><code>trigger <span class="token operator">=</span> TriggerBuilder<span class="token punctuation">.</span><span class="token function">Create</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">WithIdentity</span><span class="token punctuation">(</span><span class="token string">&quot;trigger3&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;group1&quot;</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">WithCronSchedule</span><span class="token punctuation">(</span><span class="token string">&quot;0 42 10 ? * WED&quot;</span><span class="token punctuation">,</span> x <span class="token operator">=&gt;</span> x
        <span class="token punctuation">.</span><span class="token function">InTimeZone</span><span class="token punctuation">(</span>TimeZoneInfo<span class="token punctuation">.</span><span class="token function">FindSystemTimeZoneById</span><span class="token punctuation">(</span><span class="token string">&quot;Central America Standard Time&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">ForJob</span><span class="token punctuation">(</span>myJobKey<span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">Build</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="crontrigger-misfire-instructions" tabindex="-1"><a class="header-anchor" href="#crontrigger-misfire-instructions"><span>CronTrigger Misfire Instructions</span></a></h2><p>The following instructions can be used to inform Quartz what it should do when a misfire occurs for CronTrigger. (Misfire situations were introduced in the More About Triggers section of this tutorial). These instructions are defined in as constants (and API documentation has description for their behavior). The instructions include:</p><ul><li>MisfireInstruction.IgnoreMisfirePolicy</li><li>MisfireInstruction.CronTrigger.DoNothing</li><li>MisfireInstruction.CronTrigger.FireOnceNow</li></ul><p>All triggers have the MisfireInstruction.SmartPolicy instruction available for use, and this instruction is also the default for all trigger types. The &#39;smart policy&#39; instruction is interpreted by CronTrigger as MisfireInstruction.CronTrigger.FireOnceNow. The API documentation for the CronTrigger.UpdateAfterMisfire() method explains the exact details of this behavior.</p><p>When building CronTriggers, you specify the misfire instruction as part of the cron schedule (via WithCronSchedule extension method):</p><div class="language-csharp line-numbers-mode" data-ext="cs" data-title="cs"><pre class="language-csharp"><code>trigger <span class="token operator">=</span> TriggerBuilder<span class="token punctuation">.</span><span class="token function">Create</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">WithIdentity</span><span class="token punctuation">(</span><span class="token string">&quot;trigger3&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;group1&quot;</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">WithCronSchedule</span><span class="token punctuation">(</span><span class="token string">&quot;0 0/2 8-17 * * ?&quot;</span><span class="token punctuation">,</span> x <span class="token operator">=&gt;</span> x
        <span class="token punctuation">.</span><span class="token function">WithMisfireHandlingInstructionFireAndProceed</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">ForJob</span><span class="token punctuation">(</span><span class="token string">&quot;myJob&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;group1&quot;</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">Build</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,45),i=[o];function p(u,r){return s(),a("div",null,i)}const l=n(t,[["render",p],["__file","crontriggers.html.vue"]]),d=JSON.parse('{"path":"/documentation/quartz-2.x/tutorial/crontriggers.html","title":"Lesson 6: CronTrigger","lang":"en-US","frontmatter":{"title":"Lesson 6: CronTrigger"},"headers":[{"level":3,"title":"Cron Expressions","slug":"cron-expressions","link":"#cron-expressions","children":[]},{"level":2,"title":"Example Cron Expressions","slug":"example-cron-expressions","link":"#example-cron-expressions","children":[]},{"level":2,"title":"Building CronTriggers","slug":"building-crontriggers","link":"#building-crontriggers","children":[]},{"level":2,"title":"CronTrigger Misfire Instructions","slug":"crontrigger-misfire-instructions","link":"#crontrigger-misfire-instructions","children":[]}],"git":{"updatedTime":1735723320000,"contributors":[{"name":"JT","email":"975824+Hawxy@users.noreply.github.com","commits":1}]},"filePathRelative":"documentation/quartz-2.x/tutorial/crontriggers.md"}');export{l as comp,d as data};
