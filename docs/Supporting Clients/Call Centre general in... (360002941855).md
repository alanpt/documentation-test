# Call Centre general information

The Call Centre page on the Evergiving website has a lot of information
for customers about how to set up and use the feature
<https://www.evergiving.com/callcenter/>.

Pricing information is available here
<https://www.evergiving.com/pricing/> and the cost to re-route inbound
calls to a different number is the same price as the call costs for that
customer - it is classed as a normal call.

E[very time a number get spammed there\'s a cost to the customer of lost
productivity and burnt leads before they notice and swap the number.
Customers should have as many numbers per campaign as they make call
attempts, and set them to cycle.
]{style="color: #1d1c1d; font-family: Slack-Lato, appleLogo, sans-serif; font-size: 15px; font-style: normal; font-variant-ligatures: common-ligatures; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: left; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: #f8f8f8; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; display: inline !important; float: none;"}

[Prior to, \"Please enter your credit card\" the donor should now hear a
message \"Your payment will be {amount} {currency} {frequency}\" for all
frequencies except donation.\
]{style="color: #1d1c1d; font-family: Slack-Lato, appleLogo, sans-serif; font-size: 15px; font-style: normal; font-variant-ligatures: common-ligatures; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: left; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: #f8f8f8; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; display: inline !important; float: none;"}

[If the fundraiser has transferred the donor to the card capture and
needs to get the donor back (e.g. if they think the donor is having
issues or need to correct information they\'ve given the donor) they can
click the card capture icon a second time and this will bring the donor
back to the call so they can speak. We will be introducing an escape for
the donor so they can end the card capture process and go back to the
conference with the agent, but that isn\'t available as yet.
]{style="color: #1d1c1d; font-family: Slack-Lato, appleLogo, sans-serif; font-size: 15px; font-style: normal; font-variant-ligatures: common-ligatures; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: left; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: #f8f8f8; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; display: inline !important; float: none;"}

## **[Permissions]{style="color: #1d1c1d; font-family: Slack-Lato, appleLogo, sans-serif; font-size: 15px; font-style: normal; font-variant-ligatures: common-ligatures; font-variant-caps: normal; letter-spacing: normal; text-align: left; text-indent: 0px; text-transform: none; white-space: normal; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: #f8f8f8; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; display: inline !important; float: none;"}**

[Only Admin Operations users have access to the Call Centre menu in
Evergiving to create call lists, agents and teams. Call Centre Agent
Admins has read/write access to teams / call lists / inbound calls but
cannot edit or create Agents. You need to be a full and unrestricted
Admin Ops user in order to create a Call Centre Admin user.\
]{style="color: #1d1c1d; font-family: Slack-Lato, appleLogo, sans-serif; font-size: 15px; font-style: normal; font-variant-ligatures: common-ligatures; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: left; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: #f8f8f8; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; display: inline !important; float: none;"}

## **[Next lead button]{style="color: #1d1c1d; font-family: Slack-Lato, appleLogo, sans-serif; font-size: 15px; font-style: normal; font-variant-ligatures: common-ligatures; font-variant-caps: normal; letter-spacing: normal; text-align: left; text-indent: 0px; text-transform: none; white-space: normal; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: #f8f8f8; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; display: inline !important; float: none;"}**

[The functionality of the Next Lead button was changed through
<https://github.com/waysact/evergiving/issues/6802> so that we
p]{style="color: #1d1c1d; font-family: Slack-Lato, appleLogo, sans-serif; font-size: 15px; font-style: normal; font-variant-ligatures: common-ligatures; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: left; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: #f8f8f8; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; display: inline !important; float: none;"}rioritise
calls by:

1.  Call backs (most overdue first)
2.  Weighting of call list - On the teams page where I add a call list
    from a dropdown field, display a text field next to it with the
    default weighting of 1. Also display an \'Add Call List\' button to
    open another field (a field array).
3.  Descending record ID (newest record first)

For 2 and 3 respect the minimum time between calls, max call attempts in
8 hours and max attempts per record. Where a record is in multiple call
lists, it inherits the higher of the priorities assigned to a call list.

When an agent accesses a lead this puts a \"lock\" on the lead and if
another agent manually opens the lead they will see the lead has been
locked by another agent. They can manually over the lead if needed but
this should be the exception rather than the rule. The \"lock\" has been
removed for users other than agents (such as Admin Operations users
calling via the edit pledge view). We\'ve made a change to hide the
phone console until pledge locking is successful to prevent issues.

## **Calling Remove, Do Not Call or Complete Statuses**

Through <https://github.com/waysact/evergiving/issues/7181> we disabled
the phone if a record has a **most recent call status** of Remove, Do
Not Call or Complete on both the Leads and Pledges pages. In place of
the phone button, the agent will see \"You can\'t call a record in the
Call Statuses of Remove, Do Not Call or Complete. Please edit the most
recent Call Status if you wish to enable the phone\". It might be
worthwhile reminding customers that a status of Remove or Do Not Call
has been added for a reason so there should be a manual check done
before those donors are called again.

If the Agent is using The Autodial or Next Lead button, leads with these
call statuses will be removed automatically.

## **Returning to agent **

If the donor has issues entering their card details, they can press
[\##]{#ember863 .ember-view} and they will be returned to agent.

## **Call Statuses (Twilio)**

<https://support.twilio.com/hc/en-us/articles/223132547-What-are-the-Possible-Call-Statuses-and-What-do-They-Mean->

**Outbound Call Status Progression**

When placing outbound calls with the REST API this is a typical sequence
of status values:

  --------------- -----------------------------------------------------------------------------------------------------------
  `queued`        Twilio has received your request to create the call. All new calls are created with a status of queued.
  `initiated`     Twilio has dialed the call.
  `ringing`       The destination number has started ringing.
  `in-progress`   The call has been connected, and the connection is currently active.
  `completed`     The connected call has now been disconnected. Completed calls will remain in this state in going forward.
  --------------- -----------------------------------------------------------------------------------------------------------

**Note**: A `completed` call indicates that a connection was
established, and audio data was transferred. This could be seen when a
phone is answered by a person, an IVR phone tree menu, or even a
voicemail. Completed calls, regardless of the outcome, are charged
against your project balance.

**Twilio Final Call Statuses**

After a call has finished, the following final status options are
possible:

  ------------- -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  `busy`        Twilio dialed the number, but received a busy response.
  `no-answer`   Twilio dialed the number but no one answered before the timeout parameter value elapsed. This can be configured for each call, but by default is set to 60 seconds on [outbound API calls](https://www.twilio.com/docs/voice/api/call#parameters), and 30 seconds on [outbound \<Dial\> calls](https://www.twilio.com/docs/voice/twiml/dial#timeout).
  `canceled`    Prior to being answered, an outbound call was canceled via an **HTTP POST** request to the [REST API](https://www.twilio.com/docs/voice/api/call#update-a-call-terminate), or an incoming call was disconnected by the calling party
  `failed`      Twilio\'s carriers could not connect the call. Possible causes include the destination is unreachable, or the number may have been [input incorrectly](https://support.twilio.com/hc/en-us/articles/223183008-Formatting-International-Phone-Numbers).
  ------------- -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

**Note**: A call status of `busy`, `no-answer`, `canceled`, or `failed`
will not be charged against your project balance. However, a `completed`
parent or child call related to a call with these statuses would still
be charged.

 

**Call recordings\
**

You can listen to call recordings either in the edit pledge view or on
the Call Recordings page (we only display recordings for active agents)
unless the call has been archived (see below).

 

**Call recording archiving**

We are now by default archiving any call recording older than 2 months.
This means if the recording won\'t play in-app and exports with those
recordings will fail.

Customers can request we obtain the recordings for them and we write a
restore ticket like we do for lost pledges. There is a label \"Call
recording restore\" in <https://github.com/waysact/devops/issues>.
Generally the recordings should be available on the same or next day
after the story was written, excluding Fridays when the Devops aren\'t
working. Depending on demand, we may need to custom build a feature to
allow super admins to retrieve the recordings but we\'ll see how we go. 

 

**Call Centre Payments**

Currently, during a Twilio call with gather PAN on a campaign with
instant payment and tokens enabled the order of actions is to create
token first then process a payment against the token.

A client has requested (specifically the request was for iATS but this
can be a generic setting) to allow process card payment first (using
PAN) then create token in a second action. This is the same flow that is
used in F2F and direct debit payments via call centre. This was achieved
through <https://github.com/waysact/evergiving/issues/7949> we released
the feature in the campaign\'s gateway setup \"First run a payment and
then tokenize cards on Call Center processing\". When it\'s checked and
a pledge is taken from call centre, first we attempt a payment and then
we tokenize the card, and vice versa when it\'s not checked.

One outstanding piece of development on this feature is for when payment
details are updated on a pledge and a card is taken over the phone
<https://github.com/waysact/evergiving/issues/8163>

**Add ons**

Some external services our call centre customers are using

**[https://conversr.com/](https://conversr.com/){.c-link
style="box-sizing: inherit; color: rgba(var(--sk_highlight,18,100,163),1); text-decoration: none; font-family: Slack-Lato, Slack-Fractions, appleLogo, sans-serif; font-size: 15px; font-style: normal; font-variant-ligatures: common-ligatures; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: left; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: #f8f8f8;"
tabindex="-1" target="_blank" rel="noopener noreferrer"
stringify-link="https://conversr.com/" sk="tooltip_parent"
remove-tab-index="true"}[uses a bot to qualify large lists of leads
prior to calling, with part human/part AI engagement, via SMS
afaict.]{style="color: #1d1c1d; font-family: Slack-Lato, Slack-Fractions, appleLogo, sans-serif; font-size: 15px; font-style: normal; font-variant-ligatures: common-ligatures; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: left; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: #f8f8f8; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; display: inline !important; float: none;"}\
[https://www.daisee.com/](https://www.daisee.com/){.c-link
style="box-sizing: inherit; color: rgba(var(--sk_highlight,18,100,163),1); text-decoration: none; font-family: Slack-Lato, Slack-Fractions, appleLogo, sans-serif; font-size: 15px; font-style: normal; font-variant-ligatures: common-ligatures; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: left; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: #f8f8f8;"
tabindex="-1" target="_blank" rel="noopener noreferrer"
stringify-link="https://www.daisee.com/" sk="tooltip_parent"
remove-tab-index="true"}[listens to transcripts in bulk and scores and
flags
calls]{style="color: #1d1c1d; font-family: Slack-Lato, Slack-Fractions, appleLogo, sans-serif; font-size: 15px; font-style: normal; font-variant-ligatures: common-ligatures; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: left; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: #f8f8f8; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; display: inline !important; float: none;"}\
[https://enfonica.com/](https://enfonica.com/){.c-link
style="box-sizing: inherit; color: rgba(var(--sk_highlight,18,100,163),1); text-decoration: none; font-family: Slack-Lato, Slack-Fractions, appleLogo, sans-serif; font-size: 15px; font-style: normal; font-variant-ligatures: common-ligatures; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: left; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: #f8f8f8;"
tabindex="-1" target="_blank" rel="noopener noreferrer"
stringify-link="https://enfonica.com/" sk="tooltip_parent"
remove-tab-index="true"}[monitors outbound numbers (CLIs) and flags them
as soon as they\'re marked
spam]{style="color: #1d1c1d; font-family: Slack-Lato, Slack-Fractions, appleLogo, sans-serif; font-size: 15px; font-style: normal; font-variant-ligatures: common-ligatures; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: left; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: #f8f8f8; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; display: inline !important; float: none;"}**
