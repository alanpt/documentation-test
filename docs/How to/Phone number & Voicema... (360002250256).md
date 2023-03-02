# Phone number & Voicemail management

**Adding a Twilio phone number**

If a customer requests a new phone number, we need to know the country
and the type of number required (mobile or landline). For landline, we
need to know the area code prefix required. Each country has different
regulatory requirements <https://www.twilio.com/guidelines/regulatory> -
before we can purchase a number we need to make sure we have the
identification documents required by Twilio.

 

**Pricing**

Call / SMS costs can be found here
[https://www.evergiving.com/pricing/ ](https://www.evergiving.com/pricing/)and
the costs for renting a line can be found here
<https://www.twilio.com/voice/pricing> 

-   Prices are quoted in USD, regardless of the country the customer is
    in.
-   Calls are charged per minute so calls will be rounded up the to
    nearest minute.
-   We bear the cost of storing call recordings, so no cost to
    customers.
-   The conference call feature to allow a supervisor to join a call
    **is not available as yet**, but when released this will be an
    optional add on that customers can elect to add to their setup.
    There will be a cost for this feature.

**Adding the customer\'s own phone number**

Head to Account -\> CLI Management (previously Phone Numbers) and click
\"Add own phone number\". Shortly after submission, the number will be
called and a code will be displayed that will have to be entered on the
dial pad.

In Twilio these will appear in the Sub-Account under Verified Caller
IDs. This feature won\'t work in all countries - it depends on the
country specific legislation. For example, in Dubai it won\'t work as
VOIP is illegal.

 

**Deleting a Twilio phone number**

If a customer requests for us to delete a phone number from their
account, you first have to delete the number in Evergiving and this will
release the number in Twilio.

Doing it the other way round pretty well breaks everything, so order is
important! New numbers purchased in Twilio won\'t appear in Evergiving
until any numbers you have removed in Twilio are also removed in
Evergiving.

The sync between Twilio and Evergiving is every 60 minutes.

 

**Adding a voicemail options\
**

1\) Where a phone number provided by Twilio is restricted to one
campaign then under Campaigns \> General Settings you can upload a
\'Voicemail Greeting\' (audio file). Where someone calls in on the
number, they\'ll hear the voicemail greeting and they can leave a
recording (these recordings can be accessed in the Call Centre -\>
Voicemails).

 

2\) For all other scenarios, in Twilio, head to Waysact Production -\>
Settings -\> Subaccounts
<https://www.twilio.com/console/project/subaccounts>. You\'ll see all
the sub accounts account - they all should follow a specific naming
convention. You can search by the name or account number. Click on a
specific number for the details of their setup.

Once you are in their sub-account, to add a voicemail i.e. WVA or MP3
file go to the \`All products and services\` icon and select \`Assets\`.
Click \`Add an Asset\`, upload the file to their servers and they\'ll
give you a URL. Copy the URL and then go to \`Studio\` which maps where
things get routed =\> New Flow, say_play, loop set to. 1. Trigger -
incoming call - play message - add url. Publish. Go back to phone number
page and configure. \"A call comes in\" select Studio Flow and then
select the voicemail you\'ve just added.

![Screen_Shot_2020-12-08_at_3.53.50_pm.png](https://support.waysact.com/hc/article_attachments/360005663676/Screen_Shot_2020-12-08_at_3.53.50_pm.png)![Screen_Shot_2020-12-08_at_3.53.41_pm.png](https://support.waysact.com/hc/article_attachments/360005663636/Screen_Shot_2020-12-08_at_3.53.41_pm.png)

Then go back to the Phone Numbers section while still under the
sub-account -\> Manage Numbers -\> Active Numbers and edit each number
you want the voicemail to play for. In the \'A call comes in\' section
add in Studio Flow and select the audio file you uploaded.

 

![Screen_Shot_2020-12-08_at_3.55.21_pm.png](https://support.waysact.com/hc/article_attachments/360005663716/Screen_Shot_2020-12-08_at_3.55.21_pm.png)

 

**Voicemails (inbound calls)**

Voicemails left by inbound calls can be found in the Call Centre on a
page called Inbound calls. For more information on Inbound Calls see
[https://waysact.zendesk.com/knowledge/articles/4403667421711/en-us?brand_id=230874](https://support.waysact.com/knowledge/articles/4403667421711/en-us?brand_id=230874).

**Caller ID**

This is an experimental feature released through
<https://github.com/waysact/evergiving/issues/7536>. The Caller ID field
is available in the Waysact edit campaign view only, not in Evergiving.

In order for it to work the following might be necessary:

1.  Twilio needs to enable the Caller ID feature on the (sub)account
    first.
2.  A Caller ID potentially needs to be
    [greenlisted](https://support.twilio.com/hc/en-us/articles/223180048-Adding-a-Verified-Phone-Number-or-Caller-ID-with-Twilio){rel="nofollow"}
    first.
3.  A Caller ID can potentially only contain a certain set of
    characters, for example it may have the same [limitations as an
    alphanumerical SMS sender
    ID](https://www.twilio.com/docs/glossary/what-alphanumeric-sender-id){rel="nofollow"}.
4.  Caller ID only works in certain countries.

See also Dan Wong\'s comments on Slack:
[https://waysact.slack.com/archives/C02AGL0UTK8/p1637100179088800](https://waysact.slack.com/archives/C02AGL0UTK8/p1637100179088800){rel="nofollow"}

**Spam Flag**

he only way to tell if a number has been reported is to call a physical
phone using the number and see if it displays \'Spam risk\' or similar
on the screen. Call centers will often only find out when they\'re told
by people they\'re calling; or when they notice a significant drop off
in answer rate. A strategy call centers use to avoid this, is to hire a
person to test call phones one by one. As that person I want some tools
to hep me manage phone numbers:

\- there is now a checkbox labelled, \'flagged as spam\' on the Account
-\> CLI Management page and users can manually flag their numbers as
Spam. Where checked, please store it against the number.

\- Once the above is done we display if a number has been flagged on the
overview page.

**Enfonica**

See https://github.com/waysact/evergiving/issues/8439
