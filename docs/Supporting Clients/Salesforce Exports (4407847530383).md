# Salesforce Exports

More information available at
<https://github.com/waysact/support-documentation/blob/3a8a5b12e07226bf24bb858a32bbf53154e33368/internal/exports/salesforce/README.md>

 

In Exporter Settings, where the Output Type is set to Salesforce, there
is now a button labeled \'Run now\' that will override the cron so that
in testing (primarily) I don\'t need to wait for the cron to fire.

## Setup

::: {#:6bm .a3s .aiL}
::: {dir="ltr"}
::: {dir="ltr"}
Customers will have to create the connected app themselves\

<div>

[https://help.[salesforce]{.il}.com/articleView?id=connected_app_create_api_integration.htm&type=5](https://help.salesforce.com/articleView?id=connected_app_create_api_integration.htm&type=5){style="background-color: rgba(184, 234, 184, 0.6);"
target="_blank" rel="noopener"
saferedirecturl="https://www.google.com/url?q=https://help.salesforce.com/articleView?id%3Dconnected_app_create_api_integration.htm%26type%3D5&source=gmail&ust=1634272100029000&usg=AFQjCNE_pk3OOGwCWDne50AJfMqOpQDlMA"}

</div>

<div>

</div>

<div>

Here a step-by-step explanation:

</div>

<div>

</div>

<div>

<div>

<div>

In Apps, click on \"New\"

</div>

<div>

</div>

</div>

</div>
:::

> ::: {dir="ltr"}
> <div>
>
> <div>
>
> <div>
>
> <div>
>
> ![](https://mail.google.com/mail/u/0?ui=2&ik=e0c95ebbda&attid=0.2&permmsgid=msg-f:1659682964221111050&th=170860dcd22aab0a&view=fimg&sz=s0-l75-ft&attbid=ANGjdJ8dqjrQYcvgU_hbhEbBHJLJQs3oiPN8hxxDwvHURelrM8K9N4K90SC-qkeTgCCT2ZZU2o1f80RWGKlSaxzTm_P7eG0cDNvajjNt83aU4vvnHc_Pg1mep50pzvI&disp=emb&realattid=ii_jiycnkiu0_16445bc1d323a220){.CToWUd
> .a6T style="outline: currentcolor none 0px; margin-right: 0px;"
> tabindex="0" width="915" height="824" image-whitelisted=""}
>
> </div>
>
> </div>
>
> </div>
>
> </div>
> :::
:::
:::

::: {dir="ltr"}
<div>

<div>

<div>

<div>

</div>

<div>

Enter the name for the App \"Evergiving Replication Bot\" for example

</div>

<div>

Contact: [james@evergiving.com](mailto:james@evergiving.com){target="_blank"
rel="noopener"}

</div>

<div>

</div>

<div>

Select \"Access and manage your data (API)\" (at the bottom right on the
screenshot)

</div>

<div>

</div>

</div>

</div>

</div>
:::

> ::: {dir="ltr"}
> <div>
>
> <div>
>
> <div>
>
> <div>
>
> <div>
>
> ![](https://mail.google.com/mail/u/0?ui=2&ik=e0c95ebbda&attid=0.3&permmsgid=msg-f:1659682964221111050&th=170860dcd22aab0a&view=fimg&sz=s0-l75-ft&attbid=ANGjdJ8VYRkAj55euK-sx8xAdKJ5zCKlXKVx4phklk2gyCFdvY7IRGve-ABB6v9HJcv-0cctrUnTdhSdSma10GtJynWvVNLwpZIiYk1M7quDvdR2KFM8FJfSWG64UKY&disp=emb&realattid=ii_jiycnugk1_16445bc482034afd){.CToWUd
> .a6T style="outline: currentcolor none 0px; margin-right: 0px;"
> tabindex="0" width="945" height="850" image-whitelisted=""}
>
> </div>
>
> </div>
>
> </div>
>
> </div>
>
> </div>
> :::

::: {dir="ltr"}
<div>

<div>

<div>

<div>

<div>

</div>

<div>

The \"Consumer Key\" and \"Consumer Key\" will be displayed. We will
need both to connect to SF.

</div>

</div>

</div>

</div>

</div>
:::

> ::: {dir="ltr"}
> <div>
>
> <div>
>
> <div>
>
> <div>
>
> <div>
>
> ![](https://mail.google.com/mail/u/0?ui=2&ik=e0c95ebbda&attid=0.4&permmsgid=msg-f:1659682964221111050&th=170860dcd22aab0a&view=fimg&sz=s0-l75-ft&attbid=ANGjdJ97TYzd_o6nQPpJXnnpiDrkmgGkd60pSJfBokprpq0nPlHAQQJJIRFUCRvGxJTpoFBWX_udXORD9tcWgruJeVHvSSzSEl5vqkoG9p1zrGPTji4rhHue_r2zBbc&disp=emb&realattid=ii_jiyco0v12_16445bc66f46200d){.CToWUd
> .a6T style="outline: currentcolor none 0px; margin-right: 0px;"
> tabindex="0" width="937" height="843" image-whitelisted=""}
>
> </div>
>
> </div>
>
> </div>
>
> </div>
>
> </div>
> :::

<div>

</div>

<div>

Errors can be picked up using Javascript
`JSON.stringify(pledge.lowsec_export_error)`

</div>

<div>

<div>

</div>

<div>

::: {.p-rich_text_section style="box-sizing: inherit; counter-reset: list-0 0 list-1 0 list-2 0 list-3 0 list-4 0 list-5 0 list-6 0 list-7 0 list-8 0 list-9 0; color: #1d1c1d; font-family: Slack-Lato, Slack-Fractions, appleLogo, sans-serif; font-size: 15px; font-style: normal; font-variant-ligatures: common-ligatures; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: left; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: #f8f8f8; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;"}
We can upload PDF and signatures to Salesforce as *attachments* to the
record.\
To activate this upload option on an Saleforce export schema, you need a
devops. Open a ticket. You can copy these examples:
:::

-   to ask to upload
    PDF: [https://github.com/waysact/devops/issues/8484](https://github.com/waysact/devops/issues/8484){.c-link
    style="box-sizing: inherit; color: rgba(var(--sk_highlight,18,100,163),1); text-decoration: none;"
    target="_blank" rel="noopener noreferrer"
    stringify-link="https://github.com/waysact/devops/issues/8484"
    sk="tooltip_parent"}
-   to ask to upload
    signature: [https://github.com/waysact/devops/issues/8603](https://github.com/waysact/devops/issues/8603){.c-link
    style="box-sizing: inherit; color: rgba(var(--sk_highlight,18,100,163),1); text-decoration: none;"
    target="_blank" rel="noopener noreferrer"
    stringify-link="https://github.com/waysact/devops/issues/8603"
    sk="tooltip_parent"}

::: {.p-rich_text_section style="box-sizing: inherit; counter-reset: list-0 0 list-1 0 list-2 0 list-3 0 list-4 0 list-5 0 list-6 0 list-7 0 list-8 0 list-9 0; color: #1d1c1d; font-family: Slack-Lato, Slack-Fractions, appleLogo, sans-serif; font-size: 15px; font-style: normal; font-variant-ligatures: common-ligatures; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: left; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: #f8f8f8; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;"}
You can link to those issues to help the devops find out quickly how
they did it the previous time.[]{.c-mrkdwn__br
style="box-sizing: inherit; display: block; height: 8px;"
stringify-type="paragraph-break"}If you need a specific filename format,
please specify it in the ticket. We can have fancy name, even containing
dates in it, but the devops need to configure it as well on campaign
level. It is not in the Salesforce exporter schema editor.
Example. [https://github.com/waysact/devops/issues/7899](https://github.com/waysact/devops/issues/7899){.c-link
style="box-sizing: inherit; color: rgba(var(--sk_highlight,18,100,163),1); text-decoration: none;"
target="_blank" rel="noopener noreferrer"
stringify-link="https://github.com/waysact/devops/issues/7899"
sk="tooltip_parent"}[]{.c-mrkdwn__br
style="box-sizing: inherit; display: block; height: 8px;"
stringify-type="paragraph-break"}Last information that could save you
some time:
:::

-   To upload records in Salesforce, we need a user with the right to
    create records (duh!)
-   To upload records and signature/PDF in Salesforce, we need a user
    with the right to create **and edit** records, because we first
    create the record then "edit" it when uploading an attachment.

</div>

</div>

<div>

</div>

<div>

**UNICEF Salesforce API Connector**

</div>

<div>

</div>

<div>

Released through <https://github.com/waysact/evergiving/issues/8083>.
UNICEF has built a middleware API for suppliers to send data to
Salesforce. They want us to integrate with it. 

</div>

<div>

 

</div>
