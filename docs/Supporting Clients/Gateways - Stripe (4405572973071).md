# Gateways - Stripe

[See [https://stripe.com/docs](https://stripe.com/docs){tabindex="-1"
target="_blank" rel="noopener noreferrer"} ]{.tracker_markup}and
<https://github.com/waysact/waysact/commit/1b0b17353be7f0811d101de535c42823b1d91034>

::: {#readme .Box-body .readme .blob .js-code-block-container .p-5 .p-xl-6 .gist-border-0}
Test cards:
[https://stripe.com/docs/testing](https://stripe.com/docs/testing){rel="nofollow"}
and credentials for our internal test account are in 1Password. 

Unfortunately, they don't tokenise cards when a decline code is in the
response. They recommend
[https://stripe.com/docs/payments/save-and-reuse](https://stripe.com/docs/payments/save-and-reuse){rel="nofollow"}
and we are looking at implementing this.

Developer questions : URL:
[https://webchat.freenode.net/](https://webchat.freenode.net/){rel="nofollow"}
Nick: (any unique username) Channel: #stripe

Known errors:

-   Doesn\'t work with Monthly amount as it doesn\'t set the transaction
    type
-   `Must provide source or customer` means the customer wasn\'t created
    and has been associated with a card rejection and also with
    Integrations (found under Business Settings)
    [https://dashboard.stripe.com/settings/integration](https://dashboard.stripe.com/account/integration/settings){rel="nofollow"}
    and make sure \'Handle card information directly\' is turned on.

**[Place a hold on a card - Stripe Payment Intents API -
]{.js-issue-title .markdown-title snek-id="issue-title"}**[a new feature
released in 2021]{.js-issue-title .markdown-title
snek-id="issue-title"}[]{.js-issue-title .markdown-title
snek-id="issue-title"}

<https://github.com/waysact/evergiving/issues/7092>

**[Stripe/Stripe Intents - \"Attempt to generate an instant payment on
Card change\" - always flag as MOTO - a new feature released in 2021\
]{.js-issue-title .markdown-title}**

<https://github.com/waysact/evergiving/issues/6956>

 

**Stripe Setup Intent Gateway**

Released through <https://github.com/waysact/evergiving/issues/8278> -
this API doesn\'t charge the customer, it only stores and returns
tokens, these tokens will allow the future charges. However we need to
have Enable Instant Payments for generate the object (I suggest change
the Instant Payment button name, something like \"Store securely card
data\")
:::
