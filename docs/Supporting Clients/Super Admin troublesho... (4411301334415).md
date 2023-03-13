# Super Admin troubleshooting views

# **Gateway transcripts**

First log into staging.waysact.me as a Super Admin you can then load
[https://api.waysactstaging.com/super/transcripts/](https://api.waysactstaging.com/super/transcripts/){rel="nofollow"}
(or for production log into waysact.me and load
<https://waysact.me/super/transcripts/>).

![Screen_Shot_2021-12-09_at_10.21.20_am.png](https://support.waysact.com/hc/article_attachments/4411287591695/Screen_Shot_2021-12-09_at_10.21.20_am.png)

Find the `request_id` or [`transcript_uuid`
]{style="color: #1d1c1d; font-family: Slack-Lato, appleLogo, sans-serif; font-size: 15px; font-style: normal; font-variant-ligatures: common-ligatures; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: left; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: #f8f8f8; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; display: inline !important; float: none;"}from
Papertrail and enter it in the UUID field

`Dec 02 09:23:39 INFO: [pid=15008] [transcript] calling gateway.direct_debit_store(), request_id: 1537a7b0-f055-4b39-81ff-b3609715e94f`

and it should display the transcript

![Screen_Shot_2021-12-09_at_10.21.35_am.png](https://support.waysact.com/hc/article_attachments/4411287608719/Screen_Shot_2021-12-09_at_10.21.35_am.png)

# **Agent Activity**

Log in as Super Admin and then visit
<https://www.waysact.me/super/agent_activity> and you should see this
page

![Screen_Shot_2021-12-09_at_11.32.47_am.png](https://support.waysact.com/hc/article_attachments/4411309130767/Screen_Shot_2021-12-09_at_11.32.47_am.png)

This then gives you the Agent\'s full activity that day

![Screen_Shot_2021-12-09_at_11.41.00_am.png](https://support.waysact.com/hc/article_attachments/4411294025615/Screen_Shot_2021-12-09_at_11.41.00_am.png)

 

# **Queues and Worker overview status **

[https://www.waysact.me/admin/jobs/overview.poll](https://www.waysact.me/admin/jobs/overview.poll){target="_self"}

 

![Screen_Shot_2022-02-07_at_2.45.26_pm.png](https://support.waysact.com/hc/article_attachments/4415405931407/Screen_Shot_2022-02-07_at_2.45.26_pm.png)

 

# EBIC Errors

There is now a progress bar in each EBIC schema that shows the
percentage of database that has been filled. It will also show an error
reference if there is an error (for example
[Se2e494ca17294b618774cbdded114c90]{style="color: #e01e5a; font-family: Monaco, Menlo, Consolas, 'Courier New', monospace; font-size: 12px; font-style: normal; font-variant-ligatures: none; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: left; text-indent: 0px; text-transform: none; white-space: pre-wrap; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgba(29, 28, 29, 0.04); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; display: inline !important; float: none;"}).
The S indicates Sentry and the remainder of the error can be inserted
[`https://sentry.io/organizations/evergiving/issues/?query=`{.c-mrkdwn__code
.c-mrkdwn__code--no_right_cap
style="box-sizing: inherit; padding: 2px 0px 1px 3px; border-right: 0px; border-radius: 3px 0px 0px 3px; background-color: rgba(var(--sk_foreground_min,29,28,29),0.04); color: #e01e5a; --saf-0: rgba(var(--sk_foreground_low,29,28,29),0.13); font-size: 12px; line-height: 1.50001; font-variant-ligatures: none; white-space: pre-wrap; overflow-wrap: break-word; word-break: normal; tab-size: 4; font-family: Monaco, Menlo, Consolas, 'Courier New', monospace !important; font-style: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: left; text-indent: 0px; text-transform: none; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;"
stringify-type="code"}](https://sentry.io/organizations/evergiving/issues/?query=){.c-link
style="box-sizing: inherit; color: inherit; text-decoration: none;"
tabindex="-1" target="_blank" rel="noopener noreferrer"
stringify-link="https://sentry.io/organizations/evergiving/issues/?query="
sk="tooltip_parent"
remove-tab-index="true"}`<error-ref-without-S>`{.c-mrkdwn__code
.c-mrkdwn__code--no_left_cap
style="box-sizing: inherit; padding: 2px 3px 1px 0px; border-left: 0px; border-radius: 0px 3px 3px 0px; background-color: rgba(var(--sk_foreground_min,29,28,29),0.04); color: #e01e5a; --saf-0: rgba(var(--sk_foreground_low,29,28,29),0.13); font-size: 12px; line-height: 1.50001; font-variant-ligatures: none; white-space: pre-wrap; overflow-wrap: break-word; word-break: normal; tab-size: 4; font-family: Monaco, Menlo, Consolas, 'Courier New', monospace !important; font-style: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: left; text-indent: 0px; text-transform: none; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;"
stringify-type="code"}

# App Errors

We\'ve started using event references similar to those described
[here](https://github.com/waysact/evergiving/issues/7872){target="_blank"
rel="noopener" hovercard-type="issue"
hovercard-url="/waysact/evergiving/issues/7872/hovercard"} (but for now
more rudimentary.)

Log into Waysact as a Super Admin and then visit
[https://staging.waysact.me/super/events/](https://staging.waysact.me/super/events/){rel="nofollow"}
or
[https://waysact.com/super/events/](https://app.waysactstaging.com/super/events/){rel="nofollow"}
and enter the error reference

# Pledge restores

Super Admins can now restore pledges without having to raise a ticket
for DevOps. The process for this is documented here
<https://docs.google.com/document/d/1_xhT9Ktlquir6fAO4lbSh-D3olmUpoKrGUtRkh3mLU0/edit>

# Team Call Queue

Log in as Super Admin and visit
[https://staging.waysact.me/super/team_call_queue](https://staging.waysact.me/super/team_call_queue){rel="nofollow"}
or
[https://waysact.me/super/team_call_queue](https://waysact.me/super/team_call_queue){target="_self"
rel="undefined"} and enter the Team ID to see the expected call queue
for that team. 

 

![Screen_Shot_2022-10-31_at_3.56.48_pm.png](https://support.waysact.com/hc/article_attachments/5767984346767)

 

 
