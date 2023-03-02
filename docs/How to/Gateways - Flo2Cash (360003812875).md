# Gateways - Flo2Cash

Flo2Cash should work for Face to Face as well as in the Call Centre.

## Support

-   Support : <support@flo2cash.co.nz>
-   Tech Support : <techsupport@flo2cash.co.nz>
-   [New Flo2Cash account manager in 2021 is Iris Bautista
    ]{style="color: #1d1c1d; font-family: Slack-Lato, appleLogo, sans-serif; font-size: 15px; font-style: normal; font-variant-ligatures: common-ligatures; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: left; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: #f8f8f8; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; display: inline !important; float: none;"}[iris.bautista@flo2cash.com[]{style="box-sizing: inherit;"
    aria-label="(opens in new tab)"}](mailto:iris.bautista@flo2cash.com){.c-link
    style="box-sizing: inherit; color: rgba(var(--sk_highlight,18,100,163),1); text-decoration: none; font-family: Slack-Lato, appleLogo, sans-serif; font-size: 15px; font-style: normal; font-variant-ligatures: common-ligatures; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: left; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: #f8f8f8;"
    target="_blank" rel="noopener noreferrer" sk="tooltip_parent"}
-   [https://www.pivotaltracker.com/story/show/100868572](https://www.pivotaltracker.com/story/show/100868572){rel="nofollow"}
-   Developer Documentation (see Payment Web Service API and Demo System
    Manuals):
    [https://flo2cash.com/developers/](https://flo2cash.com/developers/){rel="nofollow"}

## Comments

-   **The manual tokenisation feature in Waysact does not work for
    Flo2Cash.** []{.tracker_markup}

-   [Tokenisation is extremely different and needs to be used with
    caution, as it\'ll create a recurring payment plan]{.tracker_markup}
    (\`Plan ID\`) instead of a token. It[\'s not just storing the
    payment method at the gateway, it\'s also setting up a recurring
    plan to charge that card, the given amount, starting on the
    `start_date`. The token stored in the pledge will be the `PlanID`
    which is the unique identifier of the Plan created in Flo2cash.
    ]{.tracker_markup}A Plan ID is a reference number that identifies a
    recurring schedule created in Flo2Cash. It is created by us using
    the Start date, Frequency and Amount (so start date is a mandatory
    component where tokenisation is required). []{.tracker_markup}

-   A new Plan will be created if there is an update on any of the
    following fields - customers must cancel the existing plan on the
    pledge before these fields otherwise there will be duplicate Plans
    created on F2C:\
    \* direct_debit_name\
    \* direct_debit_bsb\
    \* direct_debit_account_number\
    \* credit card number[]{.tracker_markup}

-   Ensure to add currency, AUD and NZD only supported.

-   Generally, when tokenizing a card, their system does a \$1 auth if
    the charity has requested it to be put in place. Its an optional
    check and this can be removed if required. By default, it is
    enabled. We have a feature to enable/disable it in our campaign
    setup although F2C thinks it can only be disabled their end so who
    knows

-   Some gateways have issues with tokenisation when the cardholder name
    field contains an initial but Flo2Cash confirmed this is not the
    case with their system.

-   Most NZ Campaigns use Flo2Cash 

-   We are using the endpoint:
    [https://secure.flo2cash.co.nz/ccws/tokenmanagement.asmx](https://secure.flo2cash.co.nz/ccws/tokenmanagement.asmx){rel="nofollow"}
    to tokenise credit cards

-   For Instant payments we just send the card details (card holder
    name, pan, cvn, expiry) but no other information.

-   Sometime charities may cancel Plans directly in F2C instead of
    through the Evergiving edit pledge screen (in the Payment section
    there is a \"Cancel Flo2Cash Plan\" button), which means if the
    agency tries to cancel the Plan through Evergiving there will be an
    error "There are no active plan to cancel". In Papertrail, a
    cancelled plan looks like *[INFO:
    \[f076f260-533a-49ab-a06a-b1ca1245312f\] \[transcript\] calling
    gateway.cancel_card_plan(), pledge_identifier:
    dd7f2bd3-2827-449d-8f5d-5370e3ecb2e1, request_id:
    9a206265-f5ee-4fc8-998f-e59cd0f469cd]{.message .css-14uc8v9}*

-   The initial payment feature includes the instant first debit as a
    part of their recurring plan however it causes duplicate payments on
    first recurring payment and currently no customers are using it -
    they have the \"Flo2Cash Skip Initial Payment\" ticked in the
    campaign setup.

-   To enable tokenisation on direct debits you need to enable
    *Recurring on direct debit conversion* and *Tokenise on direct debit
    conversion*

-   Most charities with Flo2Cash require an export \"Flo2Cash automatic
    signature files for DD\" that sends signatures to
    <support@flo2cash.com> via SFTP to IP 52.42.85.50, Port 22, Username
    evergiving and Path /datadir/Merchant Files/Evergiving (for example
    <https://manage.evergiving.com/en-US/exportBuilders/pledge/7888?accountId=468&sort=name%2C-id>)

-   The Token Source in exports doesn\'t return the Plan ID for CC so
    you can use this JS instead which should work for DD and CC donors

if (pledge.payment_tokens != \"\")\
return pledge.payment_tokens\[pledge.payment_tokens.length-1\].token;\
else return \"\";

## Options

The flo2cash platform allows charities to use the system in distinct
methods

    Recurring plans

*Under this method, Flo2cash does not give you a token, but instead a
Plan ID. A Plan ID is a reference number that identifies a recurring
schedule created in Flo2Cash. It is created by us using the Start date,
Frequency and Amount. The point of recurring plans is that everything is
created for the charity by Flo2Cash (Flo2Cash\'s recurring billing
engine that will manage the donation schedules) and all they need to do
is store the \`plan ID\` in their database. For certain clients, it will
also reattempt all transactions that are declined due to insufficient
funds (see
<https://github.com/waysact/waysact/blob/develop/lib/waysact/payment/gateway/flo2cash_payments.rb#L67-L80>).*

    Tokenization

*The Flo2Cash platform allows for tokenization too. Under this method,
the platform will store the card number and provide us a reference that
lets the charity manually schedule payments as per their convenience. *

In both the above methods, you have the capability to include a charity
specific reference to the stored card (token or plan). This data is
replicated across all transactional reports to help with simplified
reconciliation.

    Direct Debit Plans

To create direct debit plans on Flo2Cash the campaign must be set to use
the REST API connection. Family for Every Child is currently setup with
REST.

An automatic export of signature files will need to be created with
notification sending to <support@flo2Cash.com> for all DD pledges.

Signature File Name Template: {{ pledge.payment_gateway_token }}-{{
pledge.id }}.jpg

SFTP details is on 1password.

For REST API we will need an API token to extract the credentials. The
charity will need to let F2C know it's REST API otherwise they will give
them credentials for the old setup. The API key is a base64 encoded
string, so it\'s not really a secret but a way to encode data. 

In order to extract the details from the API key, you can use this
command in a terminal:

::: {.highlight .highlight-source-shell}
    $ echo -n API_KEY_HERE | base64 -D
:::

notes:

-   the `$` represents the prompt of the shell and should not be typed
-   replace `API_KEY_HERE` with the API key you sent me \...

It will output a string that contains (usually) something like:

`12345/USERNAME:UUID`

you might have a `$` (or `%` like in my shell) at the end, after the
`UUID` that\'s because it doesn\'t output a carriage return and should
not be included:

`12345/bruno:23657455-0abf-441b-97eb-2299b46f760e%` is a completely
random and hypothetical output \... on how it could look like. This is
the *merchant_id/username:password* (the merchant_id is usually a series
of digits, like 12345, then / then the username, in general admin and
then : to separate it from the password).

## Setup

-   There are two different gateways setup : Flo2Cash (standard tokens
    and instant payments) and Flo2Cash REST which allows for creations
    of *\`plan IDs\`* for donors paying by direct debit.
-   It\'s important to note that Flo2cash only supports the following
    transaction types:

-- Weekly\
-- Fortnightly\
-- Monthly Fixed Date\
-- Two monthly Fixed Date\
-- Three monthly Fixed Date\
-- Six monthly Fixed Date\
-- Twelve monthly Fixed Date

In our app we have:

RECURRING_TRANSACTION_TYPES =\
TRANSACTION_TYPE_FOURWEEKLY,\
TRANSACTION_TYPE_MONTHLY,\
TRANSACTION_TYPE_QUARTERLY,\
TRANSACTION_TYPE_HALFYEARLY,\
TRANSACTION_TYPE_ANNUAL,\
\

So we can only support the intersection of both, which leaves:

-   Monthly fixed date
-   Three Monthly Fixed Date
-   Six Monthly Fixed Date
-   Twelve Monthly Fixed Date

This is important when configuring campaigns using this payment gateway
as these will be the only supported recurring schedules so only the
frequencies accepted by the gateway will be displayed in the Amount
Presets.

## Test Cards

-   Cards Present in the Demo System Manual Appendix A under [Developer
    Documentation](https://flo2cash.com/developers/){rel="nofollow"}
-   Cards, for ease of searching they are :

  Card Type          Number             Expiry Date   CVV/CSC
  ------------------ ------------------ ------------- ---------
  MasterCard         5123456789012346   0517          111
  Visa               4987654321098769   0517          111
  Visa               4005550000000001   0517          111
  American Express   345678901234564    0517          1111
  Diners Club        30123456789019     0517           

-   Different cent values will drive different authorisation responses

  Cent Value   Result Returned
  ------------ -------------------------------
  00           Successful
  05           Declined - Bank declined
  10           Declined - Bank error
  51           Declined - Insufficient funds
  54           Declined - Expired card
  68           Failed - No reply from bank
