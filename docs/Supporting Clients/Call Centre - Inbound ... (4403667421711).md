# Call Centre - Inbound Calls

In order for Inbound calls to work you need to have a number rented
through Twilio that is restricted to a particular campaign, and a
voicemail should be added into Evergiving (Campaigns -\> {Campaign ID
xx} -\> General Settings - Voice Mail Greeting.

Inbound calls from a fundraiser (when they call from the mobile number
in their profile) will ring indefinitely and won\'t go to voicemail like
a donor call. We will open the most recent pledge signed up by that
fundraiser on the agent\'s view.

## **Workflow**[]{style="color: #1d1c1d; font-family: Slack-Lato, appleLogo, sans-serif; font-size: 15px; font-style: normal; font-variant-ligatures: common-ligatures; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: left; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: #f8f8f8; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; display: inline !important; float: none;"}[]{style="color: #1d1c1d; font-family: Slack-Lato, appleLogo, sans-serif; font-size: 15px; font-style: normal; font-variant-ligatures: common-ligatures; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: left; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: #f8f8f8; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; display: inline !important; float: none;"}[]{style="color: #1d1c1d; font-family: Slack-Lato, appleLogo, sans-serif; font-size: 15px; font-style: normal; font-variant-ligatures: common-ligatures; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: left; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: #f8f8f8; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; display: inline !important; float: none;"}

Through <https://github.com/waysact/evergiving/issues/6318> we added a
feature to the Teams setup page 'Allow inbound calls'.

If set to yes, the following calls can be answered:

\* Where there is an inbound call from a number that matches an outbound
number called in the last 24 hours by that number (matches record of
most recent call).\
\* Where there is an inbound call from the \'Mobile Phone\' number of a
fundraiser user that is the team member on a pledge submitted in the
last 24 hours (match most recent pledge).

\* Where an inbound call is placed to a dedicated Fundraiser Dial-In
number (see below)

If set to no, callers will be diverted to the voicemail and will hear
the recorded message and they can then leave a voicemail message. Admin
Ops users can listen to the calls and mark the recordings as having been
listened to on the Inbound Calls page found under the Call Centre menu.

## **What it looks like **

Agents will see a blue phone icon in the top right hand corner of the
screen and they will hear the inbound call ring. They can click either
the blue phone icon or the Next Lead button to answer the call.

**![Inbound_calls.png](https://support.waysact.com/hc/article_attachments/4403660884751/Inbound_calls.png)**

## **How it works**

**Manual accept**

Where a call may be answered and:

an Agent that has the record in their call list is logged in, not on
Auto Dial, allowed inbound calls and not on a call, OR Admin Ops user
with read and write **and call (i.e. pledges only)** permissions for
that record is logged in, then display in the left hand menu a button to
\'Accept Call\' to those users; a ringing tone and a browser
notification. Where the user accepts the call, take them to the record.

**Auto Dial accept**

Where a call may be answered and:

an Agent that has the record in their call list is logged in, on Auto
Dial and allowed inbound calls, then play me a tone, take me to that
record and answer the call. Please ensure the record has loaded before
connecting them. As an Agent answering calls I'd like to see the logo
[#6888](https://github.com/waysact/evergiving/issues/6888){.issue-link
.js-issue-link error-text="Failed to load title" data-id="885488308"
permission-text="Title is private"
url="https://github.com/waysact/evergiving/issues/6888"
hovercard-type="issue"
hovercard-url="/waysact/evergiving/issues/6888/hovercard"} so I can more
easily answer the call correctly.

**Inbound call allocation**

Where a call is answered, please create a normal call attempt with a
default call status of `Complete` and leave the Final Call Outcome to be
selected by the user.

**Not answerable or no answer**

Wait x amount of rings and if no user accepts the call, send to
voicemail/terminate as happens now. (there is a field in the Campaign
General Settings for \'Number of rings for inbound calls before caller
is sent to Voicemail\')

Where the phone number of an inbound call is not detected or is blocked,
or more than 24 hours ago, send to voicemail/terminate.

**Volume Options**

As an Agent user, if I click on my name in the bottom left corner of
Evergiving, I\'ll see a Settings option. If I click on Settings, I\'m
able to set a Ringer Volume which will control the volume of the
incoming call ringing.

**Troubleshooting**

[If as an Agent you hear an automated voice from Twillio telling you to
configure URL for voicemail, you need to go into Twilio and delete the
webhook URL. You can\'t have a voicemail uploaded into Evergiving and a
webhook set up in Twilio for the same
number.]{style="color: #1d1c1d; font-family: Slack-Lato, appleLogo, sans-serif; font-size: 15px; font-style: normal; font-variant-ligatures: common-ligatures; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: left; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: #f8f8f8; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; display: inline !important; float: none;"}

## **[Future change requests]{style="color: #1d1c1d; font-family: Slack-Lato, appleLogo, sans-serif; font-size: 15px; font-style: normal; font-variant-ligatures: common-ligatures; font-variant-caps: normal; letter-spacing: normal; text-align: left; text-indent: 0px; text-transform: none; white-space: normal; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: #f8f8f8; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; display: inline !important; float: none;"}**

[Currently if inbound calls are enabled, Admin Ops will see/hear the
inbound call and can answer the call. Through
https://github.com/waysact/evergiving/issues/7064 we will introduce a
feature where you can allow/disallow inbound calls for Admin Ops
users.]{style="color: #1d1c1d; font-family: Slack-Lato, appleLogo, sans-serif; font-size: 15px; font-style: normal; font-variant-ligatures: common-ligatures; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: left; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: #f8f8f8; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; display: inline !important; float: none;"}[]{style="color: #1d1c1d; font-family: Slack-Lato, appleLogo, sans-serif; font-size: 15px; font-style: normal; font-variant-ligatures: common-ligatures; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: left; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: #f8f8f8; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; display: inline !important; float: none;"}

[**Fundraiser Dial-In Number**\
]{style="color: #1d1c1d; font-family: Slack-Lato, appleLogo, sans-serif; font-size: 15px; font-style: normal; font-variant-ligatures: common-ligatures; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: left; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: #f8f8f8; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; display: inline !important; float: none;"}

[Under Account -\> Phone Numbers you can manage your numbers. If you
edit an existing number (or create a new one) you should see an option
to make that number the Fundraiser Dial-In number. Make sure you have
Agent users set up in the Call Center section, and that they\'re
assigned to a Team with a Call List set to at least \'Calling Type: is
Welcome or Verification follow up call\' and Inbound Calls is set to
Yes.
]{style="color: #1d1c1d; font-family: Slack-Lato, appleLogo, sans-serif; font-size: 15px; font-style: normal; font-variant-ligatures: common-ligatures; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: left; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: #f8f8f8; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; display: inline !important; float: none;"}The
Thanks screen at the end of every pledge will now show the Fundraiser
Dial-in number. When the fundraiser calls in, the last record signed up
by the fundraiser will load when the Agent answers. How do we know which
fundraiser is calling in?

-   They use the phone number registered against their user profile; or
-   They enter the code from the Thanks screen (the fundraiser sees the
    message\
    `To speak to an agent, call {phone_number-e.164} and enter {fundraiser_id} if you are prompted.`{.notranslate}
    Where multiple numbers are configured, we will display 2 options.

Where a call is received on the fundraiser dial-in number, and the call
is from:

-   a number allocated to a fundraiser in that account with a recent
    pledge, then ring for available users as we would normally.
-   a withheld number or a number that does not belong to a pledge nor
    an eligible fundraiser, play the following, \"Please enter your 6
    digit fundraiser code\" and if matches =\
    TRUE - \"Thanks, you\'ll be connected to an agent soon. Register and
    call from your mobile number to be automatically connected in
    future\", then link the inbound call to the pledge with that code on
    it, and ring for available users as normal.\
    FALSE - \"Sorry, that code doesn\'t match a valid fundraiser ID.
    Your fundraiser ID is displayed on the Thank you page of every
    pledge. Please try again.\" then terminate the call.

 
