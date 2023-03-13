# Gateways - Blackbaud Payment (SkyAPI)

The main steps are also listed in
[https://developer.blackbaud.com/skyapi/apis/payments/getting-started](https://developer.blackbaud.com/skyapi/apis/payments/getting-started){rel="nofollow"}
but to elaborate:

Steps One through Four are already completed

Step Five: Customer needs to give permission to the Evergiving \"app\"
they will need to search by the App ID
`9a3a9bc5-4086-4635-86ff-94f91886156e` (also in 1Password). [They create
and then authorise the Evergiving user with the Payments API Role. They
then send an invite to <support@evergiving.com> that you\'ll need to
accept. If it doesn\'t arrive, check in Junk in Zendesk. If for some
reason you can\'t get it work through Zendesk, you can
]{style="color: #2b2e2f;"}ask the customer to invite
<you@evergiving.com> but do not accept the link in email - **make sure
you are signed into Blackbaud as <support@evergiving.com>** before using
the invite link in your personal email. It should prompt which user to
use - choose <support@evergiving.com>. There is a \"Shared Access\"
login in 1Password under \"Blackbaud\". You\'ll need a 2FA app like
Authy to use after the username/password step. 

[Step Seven is not required.]{style="color: #2b2e2f;"}

Now\...

-   In the Waysact campaign page, first create a campaign
-   Pick `Blackbaud Payment` as the gateway, fill in the currency, and
    with details from 1password: App ID, App Secret, API key (this is
    subscription key), save changes

![Blackbaud_Payment.png](https://support.waysact.com/hc/article_attachments/360007276836/Blackbaud_Payment.png)

Once the above is done, make sure you are logged in to
[https://www.waysact.me/](http://www.waysact.me/){.c-link
style="box-sizing: inherit; color: rgba(var(--sk_highlight_hover,11,76,140),1); text-decoration: underline; font-family: Slack-Lato, appleLogo, sans-serif; font-size: 15px; font-style: normal; font-variant-ligatures: common-ligatures; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: left; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: #f8f8f8;"
target="_blank" rel="noopener noreferrer"
stringify-link="http://www.waysact.me/" sk="tooltip_parent"
aria-describedby="sk-tooltip-1226"} and not waysact.me. Then edit the
campaign and press \"Start Token Auth\" and you\'ll go to a page where
you select the charity :

![Blackaud_Payment_2.png](https://support.waysact.com/hc/article_attachments/360007276876/Blackaud_Payment_2.png)

-   You will be redirected back to the campaign edit page and fields
    \"Blackbaud Bearer Access Token\" and \"Blackbaud Refresh\" will now
    be filled in and you just need to save the change.
-   To add the merchant ID you will need one more step\...

Open a console run this command (replacing xxx with the \'Blackbaud
Bearer Access Token\' from the campaign setup as the jwt_token and \'API
key\' from the campaign setup as the subscription_key)

::: {.snippet-clipboard-content .notranslate .position-relative .overflow-auto}
jwt_token=xxx\
subscription_key=xxx\
curl https://api.sky.blackbaud.com/payments/v1/paymentconfigurations \\
-H \"Authorization: Bearer \$jwt_token\" \\ -H
\"Bb-Api-Subscription-Key: \$subscription_key\"
:::

The response will look something like this:

::: {.snippet-clipboard-content .notranslate .position-relative .overflow-auto}
``` notranslate
{
    "count":3,
    "value":[
        {
            "active":true,
            "avs_level":"Light",
            "csc_level":"Full",
            "currency":"CAD",
            "id":"abc588ff-f401-4ad8-a244-12fc99c24ad1",
            "name":"Blackbaud Merchant Services",
            "process_mode":"Live",
            "supported_cards":["AmericanExpress","MasterCard","Visa","Discover"],"use3ds":false},
        {
            "active":true,
            "avs_level":"None",
            "csc_level":"None",
            "currency":"CAD",
            "id":"def98a48-8770-4dc8-b31f-5d26ffd5f6cd",
            "name":"EVG Payment Processing test",
            "process_mode":"Test",
            "supported_cards":["AmericanExpress","Discover","JCB","Maestro","MasterCard","Visa"],"use3ds":false},
        {
            "active":true,
            "avs_level":"None",
            "csc_level":"None",
            "currency":"CAD",
            "id":"adaaa4d7-01b3-4a47-9055-59aa585ba1d5",
            "name":"Test - GFD DOES NOT CHARGE",
            "process_mode":"Test",
            "supported_cards":["AmericanExpress","MasterCard","Visa","Discover"],"use3ds":false}]}
```
:::

Find the `id` value of the merchant to use, save this in the campaign
edit page \"Merchant ID\" field, save and\... ready to go!

 
