# Emails - Email Conditions

The conditions in the email templates, confusingly enough, are not
ar_conditions like in the Exporter Schemas - they are pure ruby, so you
need to be super careful when using them and writing them.

For example, don't use capital OR like you would in the ar_conditions -
it needs to be either \|\| or or in lowercase.

Please ask in #dev if you have questions about creating new conditions.

**#FAQ**

-   To add OR condition use \`\|\|\` instead of OR and \`&&\` instead of
    AND
-   Use
    [double ]{style="color: #1d1c1d; font-family: Slack-Lato, appleLogo, sans-serif; font-size: 15px; font-style: normal; font-variant-ligatures: common-ligatures; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: left; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: #f8f8f8; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; display: inline !important; float: none;"}`==`{.c-mrkdwn__code
    style="box-sizing: inherit; padding: 2px 3px 1px; border: 1px solid var(--saf-0); border-radius: 3px; background-color: rgba(var(--sk_foreground_min,29,28,29),0.04); color: #e01e5a; --saf-0: rgba(var(--sk_foreground_low,29,28,29),0.13); font-size: 12px; line-height: 1.50001; font-variant-ligatures: none; white-space: pre-wrap; overflow-wrap: break-word; word-break: normal; tab-size: 4; font-family: Monaco, Menlo, Consolas, 'Courier New', monospace !important; font-style: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: left; text-indent: 0px; text-transform: none; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;"
    stringify-type="code"}[ for comparison,
    single ]{style="color: #1d1c1d; font-family: Slack-Lato, appleLogo, sans-serif; font-size: 15px; font-style: normal; font-variant-ligatures: common-ligatures; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: left; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: #f8f8f8; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; display: inline !important; float: none;"}`=`{.c-mrkdwn__code
    style="box-sizing: inherit; padding: 2px 3px 1px; border: 1px solid var(--saf-0); border-radius: 3px; background-color: rgba(var(--sk_foreground_min,29,28,29),0.04); color: #e01e5a; --saf-0: rgba(var(--sk_foreground_low,29,28,29),0.13); font-size: 12px; line-height: 1.50001; font-variant-ligatures: none; white-space: pre-wrap; overflow-wrap: break-word; word-break: normal; tab-size: 4; font-family: Monaco, Menlo, Consolas, 'Courier New', monospace !important; font-style: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: left; text-indent: 0px; text-transform: none; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;"
    stringify-type="code"}[ for
    assignation]{style="color: #1d1c1d; font-family: Slack-Lato, appleLogo, sans-serif; font-size: 15px; font-style: normal; font-variant-ligatures: common-ligatures; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: left; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: #f8f8f8; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; display: inline !important; float: none;"}

```{=html}
<!-- -->
```
-   Use ! to negate a condition to trigger its opposite e.g.
    [pledge.pledge_type ]{style="color: #1d1c1d; font-family: Slack-Lato, appleLogo, sans-serif; font-size: 15px; font-style: normal; font-variant-ligatures: common-ligatures; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: left; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: #ffffff; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; display: inline !important; float: none;"}[!=]{.c-mrkdwn__highlight
    style="box-sizing: inherit; background: rgba(242, 199, 68, 0.4); color: #1d1c1d; font-family: Slack-Lato, appleLogo, sans-serif; font-size: 15px; font-style: normal; font-variant-ligatures: common-ligatures; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: left; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;"}[ 
    \'cc_lead\']{style="color: #1d1c1d; font-family: Slack-Lato, appleLogo, sans-serif; font-size: 15px; font-style: normal; font-variant-ligatures: common-ligatures; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: left; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: #ffffff; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; display: inline !important; float: none;"}
    .

```{=html}
<!-- -->
```
-   Can I use regexp? Yes, for example: pledge.custom_3 =\~ /yes/i.

```{=html}
<!-- -->
```
-   Why isn\'t my email condition being triggered:

The script to trigger emails runs through the list one by one, when it
finds a match, it sends the email and stops running through the list. In
order for the email condition to be read, it has to be properly ordered
to be picked up where appropriate. See Child Sponsorship below for an
example.

Also, emails with no conditions will always be sent. So, in order for a
less common condition to be triggered, all emails must have conditions.

 

+-----------------------+-----------------------+-----------------------+
| **CONDITION**         | **DETAILS**           | **CODE**              |
+-----------------------+-----------------------+-----------------------+
| Amount                | Triggers based on     | pledge.amount == 8.68 |
|                       | pledge amount x       |                       |
+-----------------------+-----------------------+-----------------------+
| Campaign Manager      |                       | pledge.tea            |
|                       |                       | m.campaign_manager_id |
|                       |                       | == 123456             |
+-----------------------+-----------------------+-----------------------+
| Call attempts         | to send an email only | pledge.most_rece      |
|                       | to pledges with the   | nt_call_attempt&.fina |
|                       | final call outcome    | l_call_outcome&.label |
|                       | "Successful"          | == \'Successful\'     |
+-----------------------+-----------------------+-----------------------+
| Child name and gender | If child name and     | ple                   |
|                       | gender is present on  | dge.child_name_and_ge |
|                       | the pleddge           | nder.any?(&:present?) |
+-----------------------+-----------------------+-----------------------+
| Child Region          | Email is sent if      | pledge.child_region   |
|                       | child region is       | == \'xxxxx\'          |
|                       | Australia             |                       |
+-----------------------+-----------------------+-----------------------+
| Child name            | Email is sent if      | ple                   |
|                       | child name is not     | dge.child_name.blank? |
|                       | present               |                       |
+-----------------------+-----------------------+-----------------------+
| Child Sponsorship     | Email is sent if      | pledge.child          |
|                       | Child Sponsorship     | _sponsorship.present? |
|                       | Component is          | or                    |
|                       | populated with data.  | pled                  |
|                       | The condition on the  | ge.child_selection.va |
|                       | other email should be | lues.compact.present? |
|                       | left blank and if     |                       |
|                       | Child Sponsorship     |                       |
|                       | Component is empty    |                       |
|                       | the other email with  |                       |
|                       | no condition will be  |                       |
|                       | sent. The conditional |                       |
|                       | email with child      |                       |
|                       | sponsorship present   |                       |
|                       | must be first in the  |                       |
|                       | email template list   |                       |
|                       | for the campaign      |                       |
+-----------------------+-----------------------+-----------------------+
| Child Name and Gender | Email is sent if      | \`!pledge.child_      |
|                       | there Child Name and  | name_and_gender.any?{ |
|                       | Gender are present    |                       |
+-----------------------+-----------------------+-----------------------+
| Consumer Price Index  | Email is sent if CPI  | pledge                |
|                       | = yes                 | .consumer_price_index |
|                       |                       | == true               |
+-----------------------+-----------------------+-----------------------+
| Custom 1-5 Fields     | Email is sent if      | ple                   |
|                       | there is an entry in  | dge.custom_2.present? |
|                       | the custom 2 free     |                       |
|                       | text box              |                       |
+-----------------------+-----------------------+-----------------------+
| Custom 1-5 Fields     | Checks if the         | pledge.custom_4.to_i  |
|                       | custom_4 has an       | \> 0                  |
|                       | integer \> 0 - the    |                       |
|                       | email is sent if      |                       |
|                       | Custom 4 is not blank |                       |
|                       | and has a value       |                       |
|                       | greater than zero     |                       |
+-----------------------+-----------------------+-----------------------+
| Custom 1-5 Fields     | Checks if the         | pledge.custom_4.to_i  |
|                       | custom_4 has a value. | == 0                  |
|                       | The email is sent if  |                       |
|                       | Custom 4 is blank     |                       |
+-----------------------+-----------------------+-----------------------+
| Custom 1-5 Fields     | Email is sent based   | pledge.custom_1 !=    |
|                       | on response to Custom | \"Please don\'t send  |
|                       | 1                     | me a print\"          |
+-----------------------+-----------------------+-----------------------+
| Custom 1-5 Fields     | Email is sent based   | pledge.custom_1 ==    |
|                       | on response to Custom | \"Please don\'t send  |
|                       | 1                     | me a print\"          |
+-----------------------+-----------------------+-----------------------+
| Custom Input          | if you have a         | pledg                 |
|                       | custom_input with a   | e.custom_inputs.any?{ |
|                       | tag name and you want | \|ci\| ci\[\"key\"\]  |
|                       | to send an email if   | == \"name\" &&        |
|                       | that custom input has | ci\[\"value\"\] ==    |
|                       | a value of Christina  | \"Christina\" }       |
+-----------------------+-----------------------+-----------------------+
| Custom Input          | if you have a         | pledg                 |
|                       | custom_input with a   | e.custom_inputs.any?{ |
|                       | tag name and you want | \|ci\| ci\[\"key\"\]  |
|                       | to send an email if   | == \"name\" &&        |
|                       | that custom input has | Arra                  |
|                       | a value of Christina  | y(ci\[\"value\"\]).in |
|                       | (and the custom       | clude?(\"Christina\") |
|                       | inputs are            | }                     |
|                       | checkboxes)           |                       |
+-----------------------+-----------------------+-----------------------+
| Custom Input          | The 1st where         | custom_inputs::jsonb  |
| (example where data   | there\'s a value in   | @\> \'\[{             |
| is being sent in 2    | the \"razon\" field   | \"key\":\"razon\",    |
| exports depending on  |                       | \"value\":\"\" }\]\'  |
| the value of a custom | and the other where   |                       |
| input)                | there isn\'t          |                       |
|                       |                       |                       |
|                       |                       |                       |
|                       |                       |                       |
|                       |                       | \                     |
|                       |                       | NOT                   |
|                       |                       | (custom_inputs::jsonb |
|                       |                       | @\> \'\[{             |
|                       |                       | \"key\":\"razon\",    |
|                       |                       | \"value\":\"\" }\]\') |
+-----------------------+-----------------------+-----------------------+
| Fundraiser Code       | Email is sent based   | p                     |
|                       | on Fundraiser Code    | ledge.fundraiser_code |
|                       |                       | =\~ /EM/              |
+-----------------------+-----------------------+-----------------------+
| Final Call Outcome    |                       |                       |
+-----------------------+-----------------------+-----------------------+
| Gender                | Email is sent if      | pl                    |
|                       | donor is male         | edge.supporter_gender |
|                       |                       | == \'male\'           |
+-----------------------+-----------------------+-----------------------+
| Gender                | Email is sent if      | pl                    |
|                       | donor is female       | edge.supporter_gender |
|                       |                       | == \'female\'         |
+-----------------------+-----------------------+-----------------------+
| Gifts                 | Email is sent if      | pledge.gifts &&       |
|                       | \'one off donation\'  | pledge.gifts.any?{    |
|                       | is selected from the  | \|g\| g\[\"name\"\]   |
|                       | Gifts data set        | ==                    |
|                       |                       | \"one_off_donation\"  |
|                       |                       | }                     |
+-----------------------+-----------------------+-----------------------+
| Gift Aid              | Email is sent if gift | pledge.gift_aid ==    |
|                       | aid is selected       | \'true\'              |
+-----------------------+-----------------------+-----------------------+
| Gift Aid              | Email is sent if gift | pledge.gift_aid ==    |
|                       | aid isn\'t selected   | \'false\'             |
+-----------------------+-----------------------+-----------------------+
| Income                |                       | !pledge.supp          |
|                       |                       | orter_income.present? |
+-----------------------+-----------------------+-----------------------+
| Instant payment       | Email is sent if      | pledge.in             |
|                       | instant payment was   | stant_payment_transac |
|                       | successful            | tions.where(\"success |
|                       |                       | = \'t\' AND           |
|                       |                       | g                     |
|                       |                       | ateway_transaction_id |
|                       |                       | is not null\")        |
+-----------------------+-----------------------+-----------------------+
| Instant payment       | Email is sent if      | pl                    |
|                       | instant payment was   | edge.instant_payment_ |
|                       | successful            | transactions.present? |
|                       |                       | &&                    |
|                       |                       | pledge.in             |
|                       |                       | stant_payment_transac |
|                       |                       | tions.where(\"success |
|                       |                       | = \'t\' AND           |
|                       |                       | g                     |
|                       |                       | ateway_transaction_id |
|                       |                       | is not                |
|                       |                       | null\").present?      |
|                       |                       |                       |
|                       |                       |                       |
|                       |                       |                       |
|                       |                       | \~                    |
|                       |                       |                       |
|                       |                       | pledge.instan         |
|                       |                       | t_payment_transaction |
|                       |                       | s.successful.present? |
+-----------------------+-----------------------+-----------------------+
| Instant payment       | Email is sent if no   | pledge.instant_paymen |
|                       | instant payment       | t_transactions.empty? |
|                       | present               |                       |
+-----------------------+-----------------------+-----------------------+
| Interested In         | Email is sent if      | pledge.su             |
|                       | Interested In =       | pporter_interested_in |
|                       | Supporter of Change   | == \'Supporter of     |
|                       |                       | Change\'              |
+-----------------------+-----------------------+-----------------------+
| Interested In         | Email is sent if      | pledge.su             |
|                       | Interested In = Child | pporter_interested_in |
|                       | Sponsorship           | == \'Child            |
|                       |                       | Sponsorship\'         |
+-----------------------+-----------------------+-----------------------+
| Leads                 | Email is sent from    | pledge.pledge_type == |
|                       | the edit lead page    | \'cc_lead\'           |
|                       | for leads when        |                       |
|                       | triggered manually by |                       |
|                       | an Agent              |                       |
+-----------------------+-----------------------+-----------------------+
| Locale/Language       | For campaigns with    | pled                  |
|                       | multiple languages,   | ge.supporter_language |
|                       | the email is sent     | == \'en-AU\'          |
|                       | depending on the      |                       |
|                       | language enabled on   |                       |
|                       | the form when the     |                       |
|                       | pledge was taken. The |                       |
|                       | condition on the      |                       |
|                       | other email should be |                       |
|                       | for the other         |                       |
|                       | language activated on |                       |
|                       | the campaign.         |                       |
+-----------------------+-----------------------+-----------------------+
| Office                | Email is sent based   | pledge.office.name == |
|                       | on the office         | \'XXX\'               |
|                       |                       |                       |
|                       |                       |                       |
+-----------------------+-----------------------+-----------------------+
| Office (multiple)     | Email is sent based   | Email 1 office is SNG |
|                       | on the office         | Collective or SNG 2:  |
|                       |                       | pledge.offic          |
|                       |                       | e.name.match?(/\^(SNG |
|                       |                       | Collective\|SNG       |
|                       |                       | 2)\$/) for the first  |
|                       |                       | one                   |
|                       |                       |                       |
|                       |                       | Email 2 for all other |
|                       |                       | offices:              |
|                       |                       |                       |
|                       |                       | !pledge.offic         |
|                       |                       | e.name.match?(/\^(SNG |
|                       |                       | Collective\|SNG       |
|                       |                       | 2)\$/)                |
|                       |                       |                       |
|                       |                       |                       |
|                       |                       |                       |
|                       |                       | (alternatively        |
|                       |                       | pledge.office.name != |
|                       |                       | \'SNG Collective\' && |
|                       |                       | pledge.office.name != |
|                       |                       | \'SNG 2\'  and        |
|                       |                       | pledge.office.name == |
|                       |                       | \'SNG Collective\'    |
|                       |                       | \|\|                  |
|                       |                       | pledge.office.name == |
|                       |                       | \'SNG 2\' will also   |
|                       |                       | work)                 |
|                       |                       |                       |
|                       |                       | ::: {#1               |
|                       |                       | 660829115.873559 .c-v |
|                       |                       | irtual_list__item sty |
|                       |                       | le="box-sizing: inher |
|                       |                       | it; position: absolut |
|                       |                       | e; width: 882px; colo |
|                       |                       | r: #1d1c1d; font-fami |
|                       |                       | ly: Slack-Lato, Slack |
|                       |                       | -Fractions, appleLogo |
|                       |                       | , sans-serif; font-si |
|                       |                       | ze: 15px; font-style: |
|                       |                       |  normal; font-variant |
|                       |                       | -ligatures: common-li |
|                       |                       | gatures; font-variant |
|                       |                       | -caps: normal; font-w |
|                       |                       | eight: 400; letter-sp |
|                       |                       | acing: normal; orphan |
|                       |                       | s: 2; text-align: sta |
|                       |                       | rt; text-indent: 0px; |
|                       |                       |  text-transform: none |
|                       |                       | ; white-space: normal |
|                       |                       | ; widows: 2; word-spa |
|                       |                       | cing: 0px; -webkit-te |
|                       |                       | xt-stroke-width: 0px; |
|                       |                       |  background-color: #f |
|                       |                       | fffff; text-decoratio |
|                       |                       | n-thickness: initial; |
|                       |                       |  text-decoration-styl |
|                       |                       | e: initial; text-deco |
|                       |                       | ration-color: initial |
|                       |                       | ; top: 2805.7px;" tab |
|                       |                       | index="-1" qa="virtua |
|                       |                       | l-list-item" item-key |
|                       |                       | ="1660829115.873559"} |
|                       |                       | ::: {.c-message       |
|                       |                       | _kit__background .c-m |
|                       |                       | essage_kit__backgroun |
|                       |                       | d--hovered .p-message |
|                       |                       | _pane_message__messag |
|                       |                       | e .c-message_kit__mes |
|                       |                       | sage style="box-sizin |
|                       |                       | g: inherit; backgroun |
|                       |                       | d: rgba(var(--sk_fore |
|                       |                       | ground_min_solid,248, |
|                       |                       | 248,248),1); overflow |
|                       |                       | -wrap: break-word; us |
|                       |                       | er-select: text; font |
|                       |                       | -size: 15px; line-hei |
|                       |                       | ght: 1.46668;" qa="me |
|                       |                       | ssage_container" qa-u |
|                       |                       | nprocessed="false" qa |
|                       |                       | -placeholder="false"} |
|                       |                       | ::: {.c-              |
|                       |                       | message_kit__hover .c |
|                       |                       | -message_kit__hover-- |
|                       |                       | hovered style="box-si |
|                       |                       | zing: inherit;" aria- |
|                       |                       | roledescription="mess |
|                       |                       | age" qa-hover="true"} |
|                       |                       | :::                   |
|                       |                       | {.c-message_kit__acti |
|                       |                       | ons .c-message_kit__a |
|                       |                       | ctions--above style=" |
|                       |                       | box-sizing: inherit;  |
|                       |                       | position: relative;"} |
|                       |                       | ::: {.c               |
|                       |                       | -message_kit__gutter  |
|                       |                       | style="box-sizing: in |
|                       |                       | herit; display: flex; |
|                       |                       |  padding: 8px 20px;"} |
|                       |                       | ::: {.c               |
|                       |                       | -message_kit__gutter_ |
|                       |                       | _right style="box-siz |
|                       |                       | ing: inherit; flex: 1 |
|                       |                       |  1 0px; margin: -12px |
|                       |                       |  -8px -16px -16px; mi |
|                       |                       | n-width: 0px; padding |
|                       |                       | : 8px 8px 8px 16px;"  |
|                       |                       | qa="message_content"} |
|                       |                       | ::                    |
|                       |                       | : {.c-message_kit__bl |
|                       |                       | ocks .c-message_kit__ |
|                       |                       | blocks--rich_text sty |
|                       |                       | le="box-sizing: inher |
|                       |                       | it; max-width: none;  |
|                       |                       | margin-bottom: 4px;"} |
|                       |                       | ::: {.c-messag        |
|                       |                       | e__message_blocks .c- |
|                       |                       | message__message_bloc |
|                       |                       | ks--rich_text style=" |
|                       |                       | box-sizing: inherit;  |
|                       |                       | max-width: none; over |
|                       |                       | flow-wrap: break-word |
|                       |                       | ;" qa="message-text"} |
|                       |                       | ::: {.p-bl            |
|                       |                       | ock_kit_renderer styl |
|                       |                       | e="box-sizing: inheri |
|                       |                       | t; width: 798px;" qa= |
|                       |                       | "block-kit-renderer"} |
|                       |                       | :::                   |
|                       |                       | {.p-block_kit_rendere |
|                       |                       | r__block_wrapper .p-b |
|                       |                       | lock_kit_renderer__bl |
|                       |                       | ock_wrapper--first st |
|                       |                       | yle="box-sizing: inhe |
|                       |                       | rit; display: flex;"} |
|                       |                       | ::: {.p-rich_text_    |
|                       |                       | block style="box-sizi |
|                       |                       | ng: inherit; counter- |
|                       |                       | reset: list-0 0 list- |
|                       |                       | 1 0 list-2 0 list-3 0 |
|                       |                       |  list-4 0 list-5 0 li |
|                       |                       | st-6 0 list-7 0 list- |
|                       |                       | 8 0 list-9 0; text-al |
|                       |                       | ign: left; user-selec |
|                       |                       | t: text; width: 798px |
|                       |                       | ; font-size: 15px; li |
|                       |                       | ne-height: 1.46668;"} |
|                       |                       | ::: {.p-rich_t        |
|                       |                       | ext_section style="bo |
|                       |                       | x-sizing: inherit; co |
|                       |                       | unter-reset: list-0 0 |
|                       |                       |  list-1 0 list-2 0 li |
|                       |                       | st-3 0 list-4 0 list- |
|                       |                       | 5 0 list-6 0 list-7 0 |
|                       |                       |  list-8 0 list-9 0;"} |
|                       |                       | `pledge.              |
|                       |                       | office.name.match?(/^ |
|                       |                       | (SNG Collective|SNG 2 |
|                       |                       | )$/)`{.c-mrkdwn__code |
|                       |                       | st                    |
|                       |                       | yle="box-sizing: inhe |
|                       |                       | rit; background-color |
|                       |                       | : rgba(var(--sk_foreg |
|                       |                       | round_min,29,28,29),0 |
|                       |                       | .04); border: 1px sol |
|                       |                       | id var(--saf-0); bord |
|                       |                       | er-radius: 3px; color |
|                       |                       | : #e01e5a; padding: 2 |
|                       |                       | px 3px 1px; --saf-0:  |
|                       |                       | rgba(var(--sk_foregro |
|                       |                       | und_low,29,28,29),0.1 |
|                       |                       | 3); overflow-wrap: br |
|                       |                       | eak-word; font-size:  |
|                       |                       | 12px; font-variant-li |
|                       |                       | gatures: none; line-h |
|                       |                       | eight: 1.50001; tab-s |
|                       |                       | ize: 4; white-space:  |
|                       |                       | pre-wrap; word-break: |
|                       |                       |  normal; font-family: |
|                       |                       |  Monaco, Menlo, Conso |
|                       |                       | las, 'Courier New', m |
|                       |                       | onospace !important;" |
|                       |                       | strin                 |
|                       |                       | gify-type="code"} for |
|                       |                       | the first one         |
|                       |                       | :::                   |
|                       |                       | :::                   |
|                       |                       | :::                   |
|                       |                       | :::                   |
|                       |                       | :::                   |
|                       |                       | :::                   |
|                       |                       | :::                   |
|                       |                       | :::                   |
|                       |                       |                       |
|                       |                       | ::: {.c-message_      |
|                       |                       | actions__container .c |
|                       |                       | -message__actions sty |
|                       |                       | le="box-sizing: inher |
|                       |                       | it; display: inline-f |
|                       |                       | lex; position: absolu |
|                       |                       | te; right: 17px; top: |
|                       |                       |  -28px; z-index: 1;"} |
|                       |                       | ::: {.c-mes           |
|                       |                       | sage_actions__group s |
|                       |                       | tyle="box-sizing: inh |
|                       |                       | erit; --saf-0: rgba(v |
|                       |                       | ar(--sk_foreground_lo |
|                       |                       | w,29,28,29),0.13); ba |
|                       |                       | ckground: rgba(var(-- |
|                       |                       | sk_primary_background |
|                       |                       | ,255,255,255),1); bor |
|                       |                       | der: unset; border-ra |
|                       |                       | dius: 0.375em; box-sh |
|                       |                       | adow: 0 0 0 1px var(- |
|                       |                       | -saf-0),0 1px 3px 0 # |
|                       |                       | 00000014; display: fl |
|                       |                       | ex; line-height: 1; m |
|                       |                       | argin-left: 8px; padd |
|                       |                       | ing: 2px;" aria-label |
|                       |                       | ="Message shortcuts"  |
|                       |                       | qa="message-actions"} |
|                       |                       | :::                   |
|                       |                       | :::                   |
|                       |                       | :::                   |
|                       |                       | :::                   |
|                       |                       | :::                   |
|                       |                       | :::                   |
|                       |                       |                       |
|                       |                       | ::: {                 |
|                       |                       | #1660829149.232499 .c |
|                       |                       | -virtual_list__item . |
|                       |                       | c-virtual_list__item- |
|                       |                       | -initial-activeitem s |
|                       |                       | tyle="box-sizing: inh |
|                       |                       | erit; position: absol |
|                       |                       | ute; width: 882px; ou |
|                       |                       | tline-style: none; ou |
|                       |                       | tline-width: 0px; col |
|                       |                       | or: #1d1c1d; font-fam |
|                       |                       | ily: Slack-Lato, Slac |
|                       |                       | k-Fractions, appleLog |
|                       |                       | o, sans-serif; font-s |
|                       |                       | ize: 15px; font-style |
|                       |                       | : normal; font-varian |
|                       |                       | t-ligatures: common-l |
|                       |                       | igatures; font-varian |
|                       |                       | t-caps: normal; font- |
|                       |                       | weight: 400; letter-s |
|                       |                       | pacing: normal; orpha |
|                       |                       | ns: 2; text-align: st |
|                       |                       | art; text-indent: 0px |
|                       |                       | ; text-transform: non |
|                       |                       | e; white-space: norma |
|                       |                       | l; widows: 2; word-sp |
|                       |                       | acing: 0px; -webkit-t |
|                       |                       | ext-stroke-width: 0px |
|                       |                       | ; background-color: # |
|                       |                       | ffffff; text-decorati |
|                       |                       | on-thickness: initial |
|                       |                       | ; text-decoration-sty |
|                       |                       | le: initial; text-dec |
|                       |                       | oration-color: initia |
|                       |                       | l; top: 2835.7px;" ta |
|                       |                       | bindex="0" qa="virtua |
|                       |                       | l-list-item" item-key |
|                       |                       | ="1660829149.232499"} |
|                       |                       | ::: {.c-message_kit   |
|                       |                       | __background .p-messa |
|                       |                       | ge_pane_message__mess |
|                       |                       | age .c-message_kit__m |
|                       |                       | essage style="box-siz |
|                       |                       | ing: inherit; backgro |
|                       |                       | und: rgba(var(--sk_pr |
|                       |                       | imary_background,255, |
|                       |                       | 255,255),1); overflow |
|                       |                       | -wrap: break-word; us |
|                       |                       | er-select: text; font |
|                       |                       | -size: 15px; line-hei |
|                       |                       | ght: 1.46668;" qa="me |
|                       |                       | ssage_container" qa-u |
|                       |                       | nprocessed="false" qa |
|                       |                       | -placeholder="false"} |
|                       |                       | ::: {.c-message_kit   |
|                       |                       | __hover style="box-si |
|                       |                       | zing: inherit;" aria- |
|                       |                       | roledescription="mess |
|                       |                       | age" qa-hover="true"} |
|                       |                       | :::                   |
|                       |                       | {.c-message_kit__acti |
|                       |                       | ons .c-message_kit__a |
|                       |                       | ctions--above style=" |
|                       |                       | box-sizing: inherit;  |
|                       |                       | position: relative;"} |
|                       |                       | ::: {.c               |
|                       |                       | -message_kit__gutter  |
|                       |                       | style="box-sizing: in |
|                       |                       | herit; display: flex; |
|                       |                       |  padding: 8px 20px;"} |
|                       |                       | ::: {.c-              |
|                       |                       | message_kit__gutter__ |
|                       |                       | left style="box-sizin |
|                       |                       | g: inherit; display:  |
|                       |                       | flex; flex-shrink: 0; |
|                       |                       |  margin-right: 8px;"} |
|                       |                       | :                     |
|                       |                       | :: {.p-message_pane_m |
|                       |                       | essage__compact_times |
|                       |                       | tamp .p-message_pane_ |
|                       |                       | message__compact_time |
|                       |                       | stamp--light .p-messa |
|                       |                       | ge_pane_message__comp |
|                       |                       | act_timestamp--adjace |
|                       |                       | nt style="box-sizing: |
|                       |                       |  inherit; margin: -4p |
|                       |                       | x 0px -4px -20px; tex |
|                       |                       | t-align: right; width |
|                       |                       | : 56px; opacity: 0;"} |
|                       |                       | [[11:25               |
|                       |                       | ]{.c-timestamp__label |
|                       |                       | style="box-           |
|                       |                       | sizing: inherit; colo |
|                       |                       | r: rgba(var(--sk_fore |
|                       |                       | ground_max_solid,97,9 |
|                       |                       | 6,97),1);"}](https:// |
|                       |                       | waysact.slack.com/arc |
|                       |                       | hives/D02JCR6S8/p1660 |
|                       |                       | 829149232499){.c-link |
|                       |                       | .c-timestamp          |
|                       |                       | style="box-sizing:    |
|                       |                       | inherit; color: rgba( |
|                       |                       | var(--sk_foreground_m |
|                       |                       | ax_solid,97,96,97),1) |
|                       |                       | ; text-decoration: no |
|                       |                       | ne; font-size: 12px;" |
|                       |                       | tabindex="-1"         |
|                       |                       | str                   |
|                       |                       | ingify-type="replace" |
|                       |                       | string                |
|                       |                       | ify-text="[11:25 PM]" |
|                       |                       | stringify-req         |
|                       |                       | uires-siblings="true" |
|                       |                       | t                     |
|                       |                       | s="1660829149.232499" |
|                       |                       | sk="tooltip_parent"   |
|                       |                       | rem                   |
|                       |                       | ove-tab-index="true"} |
|                       |                       | :::                   |
|                       |                       | :::                   |
|                       |                       |                       |
|                       |                       | ::: {.c               |
|                       |                       | -message_kit__gutter_ |
|                       |                       | _right style="box-siz |
|                       |                       | ing: inherit; flex: 1 |
|                       |                       |  1 0px; margin: -12px |
|                       |                       |  -8px -16px -16px; mi |
|                       |                       | n-width: 0px; padding |
|                       |                       | : 8px 8px 8px 16px;"  |
|                       |                       | qa="message_content"} |
|                       |                       | ::                    |
|                       |                       | : {.c-message_kit__bl |
|                       |                       | ocks .c-message_kit__ |
|                       |                       | blocks--rich_text sty |
|                       |                       | le="box-sizing: inher |
|                       |                       | it; max-width: none;  |
|                       |                       | margin-bottom: 4px;"} |
|                       |                       | ::: {.c-messag        |
|                       |                       | e__message_blocks .c- |
|                       |                       | message__message_bloc |
|                       |                       | ks--rich_text style=" |
|                       |                       | box-sizing: inherit;  |
|                       |                       | max-width: none; over |
|                       |                       | flow-wrap: break-word |
|                       |                       | ;" qa="message-text"} |
|                       |                       | ::: {.p-bl            |
|                       |                       | ock_kit_renderer styl |
|                       |                       | e="box-sizing: inheri |
|                       |                       | t; width: 798px;" qa= |
|                       |                       | "block-kit-renderer"} |
|                       |                       | :::                   |
|                       |                       | {.p-block_kit_rendere |
|                       |                       | r__block_wrapper .p-b |
|                       |                       | lock_kit_renderer__bl |
|                       |                       | ock_wrapper--first st |
|                       |                       | yle="box-sizing: inhe |
|                       |                       | rit; display: flex;"} |
|                       |                       | ::: {.p-rich_text_    |
|                       |                       | block style="box-sizi |
|                       |                       | ng: inherit; counter- |
|                       |                       | reset: list-0 0 list- |
|                       |                       | 1 0 list-2 0 list-3 0 |
|                       |                       |  list-4 0 list-5 0 li |
|                       |                       | st-6 0 list-7 0 list- |
|                       |                       | 8 0 list-9 0; text-al |
|                       |                       | ign: left; user-selec |
|                       |                       | t: text; width: 798px |
|                       |                       | ; font-size: 15px; li |
|                       |                       | ne-height: 1.46668;"} |
|                       |                       | ::: {.p-rich_t        |
|                       |                       | ext_section style="bo |
|                       |                       | x-sizing: inherit; co |
|                       |                       | unter-reset: list-0 0 |
|                       |                       |  list-1 0 list-2 0 li |
|                       |                       | st-3 0 list-4 0 list- |
|                       |                       | 5 0 list-6 0 list-7 0 |
|                       |                       |  list-8 0 list-9 0;"} |
|                       |                       | and the second one is |
|                       |                       | the negation          |
|                       |                       | (`!`{.c-mrkdwn__code  |
|                       |                       | st                    |
|                       |                       | yle="box-sizing: inhe |
|                       |                       | rit; background-color |
|                       |                       | : rgba(var(--sk_foreg |
|                       |                       | round_min,29,28,29),0 |
|                       |                       | .04); border: 1px sol |
|                       |                       | id var(--saf-0); bord |
|                       |                       | er-radius: 3px; color |
|                       |                       | : #e01e5a; padding: 2 |
|                       |                       | px 3px 1px; --saf-0:  |
|                       |                       | rgba(var(--sk_foregro |
|                       |                       | und_low,29,28,29),0.1 |
|                       |                       | 3); overflow-wrap: br |
|                       |                       | eak-word; font-size:  |
|                       |                       | 12px; font-variant-li |
|                       |                       | gatures: none; line-h |
|                       |                       | eight: 1.50001; tab-s |
|                       |                       | ize: 4; white-space:  |
|                       |                       | pre-wrap; word-break: |
|                       |                       |  normal; font-family: |
|                       |                       |  Monaco, Menlo, Conso |
|                       |                       | las, 'Courier New', m |
|                       |                       | onospace !important;" |
|                       |                       | st                    |
|                       |                       | ringify-type="code"}) |
|                       |                       | of the first one,     |
|                       |                       | resulting             |
|                       |                       | in `!pledge.          |
|                       |                       | office.name.match?(/^ |
|                       |                       | (SNG Collective|SNG 2 |
|                       |                       | )$/)`{.c-mrkdwn__code |
|                       |                       | st                    |
|                       |                       | yle="box-sizing: inhe |
|                       |                       | rit; background-color |
|                       |                       | : rgba(var(--sk_foreg |
|                       |                       | round_min,29,28,29),0 |
|                       |                       | .04); border: 1px sol |
|                       |                       | id var(--saf-0); bord |
|                       |                       | er-radius: 3px; color |
|                       |                       | : #e01e5a; padding: 2 |
|                       |                       | px 3px 1px; --saf-0:  |
|                       |                       | rgba(var(--sk_foregro |
|                       |                       | und_low,29,28,29),0.1 |
|                       |                       | 3); overflow-wrap: br |
|                       |                       | eak-word; font-size:  |
|                       |                       | 12px; font-variant-li |
|                       |                       | gatures: none; line-h |
|                       |                       | eight: 1.50001; tab-s |
|                       |                       | ize: 4; white-space:  |
|                       |                       | pre-wrap; word-break: |
|                       |                       |  normal; font-family: |
|                       |                       |  Monaco, Menlo, Conso |
|                       |                       | las, 'Courier New', m |
|                       |                       | onospace !important;" |
|                       |                       | s                     |
|                       |                       | tringify-type="code"} |
|                       |                       | :::                   |
|                       |                       | :::                   |
|                       |                       | :::                   |
|                       |                       | :::                   |
|                       |                       | :::                   |
|                       |                       | :::                   |
|                       |                       | :::                   |
|                       |                       | :::                   |
|                       |                       | :::                   |
|                       |                       | :::                   |
|                       |                       | :::                   |
|                       |                       | :::                   |
|                       |                       |                       |
|                       |                       | ::: {#1               |
|                       |                       | 660829115.873559 .c-v |
|                       |                       | irtual_list__item sty |
|                       |                       | le="box-sizing: inher |
|                       |                       | it; position: absolut |
|                       |                       | e; width: 882px; colo |
|                       |                       | r: #1d1c1d; font-fami |
|                       |                       | ly: Slack-Lato, Slack |
|                       |                       | -Fractions, appleLogo |
|                       |                       | , sans-serif; font-si |
|                       |                       | ze: 15px; font-style: |
|                       |                       |  normal; font-variant |
|                       |                       | -ligatures: common-li |
|                       |                       | gatures; font-variant |
|                       |                       | -caps: normal; font-w |
|                       |                       | eight: 400; letter-sp |
|                       |                       | acing: normal; orphan |
|                       |                       | s: 2; text-align: sta |
|                       |                       | rt; text-indent: 0px; |
|                       |                       |  text-transform: none |
|                       |                       | ; white-space: normal |
|                       |                       | ; widows: 2; word-spa |
|                       |                       | cing: 0px; -webkit-te |
|                       |                       | xt-stroke-width: 0px; |
|                       |                       |  background-color: #f |
|                       |                       | fffff; text-decoratio |
|                       |                       | n-thickness: initial; |
|                       |                       |  text-decoration-styl |
|                       |                       | e: initial; text-deco |
|                       |                       | ration-color: initial |
|                       |                       | ; top: 2805.7px;" tab |
|                       |                       | index="-1" qa="virtua |
|                       |                       | l-list-item" item-key |
|                       |                       | ="1660829115.873559"} |
|                       |                       | ::: {.c-message       |
|                       |                       | _kit__background .c-m |
|                       |                       | essage_kit__backgroun |
|                       |                       | d--hovered .p-message |
|                       |                       | _pane_message__messag |
|                       |                       | e .c-message_kit__mes |
|                       |                       | sage style="box-sizin |
|                       |                       | g: inherit; backgroun |
|                       |                       | d: rgba(var(--sk_fore |
|                       |                       | ground_min_solid,248, |
|                       |                       | 248,248),1); overflow |
|                       |                       | -wrap: break-word; us |
|                       |                       | er-select: text; font |
|                       |                       | -size: 15px; line-hei |
|                       |                       | ght: 1.46668;" qa="me |
|                       |                       | ssage_container" qa-u |
|                       |                       | nprocessed="false" qa |
|                       |                       | -placeholder="false"} |
|                       |                       | ::: {.c-              |
|                       |                       | message_kit__hover .c |
|                       |                       | -message_kit__hover-- |
|                       |                       | hovered style="box-si |
|                       |                       | zing: inherit;" aria- |
|                       |                       | roledescription="mess |
|                       |                       | age" qa-hover="true"} |
|                       |                       | :::                   |
|                       |                       | {.c-message_kit__acti |
|                       |                       | ons .c-message_kit__a |
|                       |                       | ctions--above style=" |
|                       |                       | box-sizing: inherit;  |
|                       |                       | position: relative;"} |
|                       |                       | ::: {.c               |
|                       |                       | -message_kit__gutter  |
|                       |                       | style="box-sizing: in |
|                       |                       | herit; display: flex; |
|                       |                       |  padding: 8px 20px;"} |
|                       |                       | ::: {.c               |
|                       |                       | -message_kit__gutter_ |
|                       |                       | _right style="box-siz |
|                       |                       | ing: inherit; flex: 1 |
|                       |                       |  1 0px; margin: -12px |
|                       |                       |  -8px -16px -16px; mi |
|                       |                       | n-width: 0px; padding |
|                       |                       | : 8px 8px 8px 16px;"  |
|                       |                       | qa="message_content"} |
|                       |                       | ::                    |
|                       |                       | : {.c-message_kit__bl |
|                       |                       | ocks .c-message_kit__ |
|                       |                       | blocks--rich_text sty |
|                       |                       | le="box-sizing: inher |
|                       |                       | it; max-width: none;  |
|                       |                       | margin-bottom: 4px;"} |
|                       |                       | ::: {.c-messag        |
|                       |                       | e__message_blocks .c- |
|                       |                       | message__message_bloc |
|                       |                       | ks--rich_text style=" |
|                       |                       | box-sizing: inherit;  |
|                       |                       | max-width: none; over |
|                       |                       | flow-wrap: break-word |
|                       |                       | ;" qa="message-text"} |
|                       |                       | ::: {.p-bl            |
|                       |                       | ock_kit_renderer styl |
|                       |                       | e="box-sizing: inheri |
|                       |                       | t; width: 798px;" qa= |
|                       |                       | "block-kit-renderer"} |
|                       |                       | :::                   |
|                       |                       | {.p-block_kit_rendere |
|                       |                       | r__block_wrapper .p-b |
|                       |                       | lock_kit_renderer__bl |
|                       |                       | ock_wrapper--first st |
|                       |                       | yle="box-sizing: inhe |
|                       |                       | rit; display: flex;"} |
|                       |                       | ::: {.p-rich_text_    |
|                       |                       | block style="box-sizi |
|                       |                       | ng: inherit; counter- |
|                       |                       | reset: list-0 0 list- |
|                       |                       | 1 0 list-2 0 list-3 0 |
|                       |                       |  list-4 0 list-5 0 li |
|                       |                       | st-6 0 list-7 0 list- |
|                       |                       | 8 0 list-9 0; text-al |
|                       |                       | ign: left; user-selec |
|                       |                       | t: text; width: 798px |
|                       |                       | ; font-size: 15px; li |
|                       |                       | ne-height: 1.46668;"} |
|                       |                       | ::: {.p-rich_t        |
|                       |                       | ext_section style="bo |
|                       |                       | x-sizing: inherit; co |
|                       |                       | unter-reset: list-0 0 |
|                       |                       |  list-1 0 list-2 0 li |
|                       |                       | st-3 0 list-4 0 list- |
|                       |                       | 5 0 list-6 0 list-7 0 |
|                       |                       |  list-8 0 list-9 0;"} |
|                       |                       | `pledge.              |
|                       |                       | office.name.match?(/^ |
|                       |                       | (SNG Collective|SNG 2 |
|                       |                       | )$/)`{.c-mrkdwn__code |
|                       |                       | st                    |
|                       |                       | yle="box-sizing: inhe |
|                       |                       | rit; background-color |
|                       |                       | : rgba(var(--sk_foreg |
|                       |                       | round_min,29,28,29),0 |
|                       |                       | .04); border: 1px sol |
|                       |                       | id var(--saf-0); bord |
|                       |                       | er-radius: 3px; color |
|                       |                       | : #e01e5a; padding: 2 |
|                       |                       | px 3px 1px; --saf-0:  |
|                       |                       | rgba(var(--sk_foregro |
|                       |                       | und_low,29,28,29),0.1 |
|                       |                       | 3); overflow-wrap: br |
|                       |                       | eak-word; font-size:  |
|                       |                       | 12px; font-variant-li |
|                       |                       | gatures: none; line-h |
|                       |                       | eight: 1.50001; tab-s |
|                       |                       | ize: 4; white-space:  |
|                       |                       | pre-wrap; word-break: |
|                       |                       |  normal; font-family: |
|                       |                       |  Monaco, Menlo, Conso |
|                       |                       | las, 'Courier New', m |
|                       |                       | onospace !important;" |
|                       |                       | strin                 |
|                       |                       | gify-type="code"} for |
|                       |                       | the first one         |
|                       |                       | :::                   |
|                       |                       | :::                   |
|                       |                       | :::                   |
|                       |                       | :::                   |
|                       |                       | :::                   |
|                       |                       | :::                   |
|                       |                       | :::                   |
|                       |                       | :::                   |
|                       |                       |                       |
|                       |                       | ::: {.c-message_      |
|                       |                       | actions__container .c |
|                       |                       | -message__actions sty |
|                       |                       | le="box-sizing: inher |
|                       |                       | it; display: inline-f |
|                       |                       | lex; position: absolu |
|                       |                       | te; right: 17px; top: |
|                       |                       |  -28px; z-index: 1;"} |
|                       |                       | ::: {.c-mes           |
|                       |                       | sage_actions__group s |
|                       |                       | tyle="box-sizing: inh |
|                       |                       | erit; --saf-0: rgba(v |
|                       |                       | ar(--sk_foreground_lo |
|                       |                       | w,29,28,29),0.13); ba |
|                       |                       | ckground: rgba(var(-- |
|                       |                       | sk_primary_background |
|                       |                       | ,255,255,255),1); bor |
|                       |                       | der: unset; border-ra |
|                       |                       | dius: 0.375em; box-sh |
|                       |                       | adow: 0 0 0 1px var(- |
|                       |                       | -saf-0),0 1px 3px 0 # |
|                       |                       | 00000014; display: fl |
|                       |                       | ex; line-height: 1; m |
|                       |                       | argin-left: 8px; padd |
|                       |                       | ing: 2px;" aria-label |
|                       |                       | ="Message shortcuts"  |
|                       |                       | qa="message-actions"} |
|                       |                       | :::                   |
|                       |                       | :::                   |
|                       |                       | :::                   |
|                       |                       | :::                   |
|                       |                       | :::                   |
|                       |                       | :::                   |
|                       |                       |                       |
|                       |                       | ::: {                 |
|                       |                       | #1660829149.232499 .c |
|                       |                       | -virtual_list__item . |
|                       |                       | c-virtual_list__item- |
|                       |                       | -initial-activeitem s |
|                       |                       | tyle="box-sizing: inh |
|                       |                       | erit; position: absol |
|                       |                       | ute; width: 882px; ou |
|                       |                       | tline-style: none; ou |
|                       |                       | tline-width: 0px; col |
|                       |                       | or: #1d1c1d; font-fam |
|                       |                       | ily: Slack-Lato, Slac |
|                       |                       | k-Fractions, appleLog |
|                       |                       | o, sans-serif; font-s |
|                       |                       | ize: 15px; font-style |
|                       |                       | : normal; font-varian |
|                       |                       | t-ligatures: common-l |
|                       |                       | igatures; font-varian |
|                       |                       | t-caps: normal; font- |
|                       |                       | weight: 400; letter-s |
|                       |                       | pacing: normal; orpha |
|                       |                       | ns: 2; text-align: st |
|                       |                       | art; text-indent: 0px |
|                       |                       | ; text-transform: non |
|                       |                       | e; white-space: norma |
|                       |                       | l; widows: 2; word-sp |
|                       |                       | acing: 0px; -webkit-t |
|                       |                       | ext-stroke-width: 0px |
|                       |                       | ; background-color: # |
|                       |                       | ffffff; text-decorati |
|                       |                       | on-thickness: initial |
|                       |                       | ; text-decoration-sty |
|                       |                       | le: initial; text-dec |
|                       |                       | oration-color: initia |
|                       |                       | l; top: 2835.7px;" ta |
|                       |                       | bindex="0" qa="virtua |
|                       |                       | l-list-item" item-key |
|                       |                       | ="1660829149.232499"} |
|                       |                       | ::: {.c-message_kit   |
|                       |                       | __background .p-messa |
|                       |                       | ge_pane_message__mess |
|                       |                       | age .c-message_kit__m |
|                       |                       | essage style="box-siz |
|                       |                       | ing: inherit; backgro |
|                       |                       | und: rgba(var(--sk_pr |
|                       |                       | imary_background,255, |
|                       |                       | 255,255),1); overflow |
|                       |                       | -wrap: break-word; us |
|                       |                       | er-select: text; font |
|                       |                       | -size: 15px; line-hei |
|                       |                       | ght: 1.46668;" qa="me |
|                       |                       | ssage_container" qa-u |
|                       |                       | nprocessed="false" qa |
|                       |                       | -placeholder="false"} |
|                       |                       | ::: {.c-message_kit   |
|                       |                       | __hover style="box-si |
|                       |                       | zing: inherit;" aria- |
|                       |                       | roledescription="mess |
|                       |                       | age" qa-hover="true"} |
|                       |                       | :::                   |
|                       |                       | {.c-message_kit__acti |
|                       |                       | ons .c-message_kit__a |
|                       |                       | ctions--above style=" |
|                       |                       | box-sizing: inherit;  |
|                       |                       | position: relative;"} |
|                       |                       | ::: {.c               |
|                       |                       | -message_kit__gutter  |
|                       |                       | style="box-sizing: in |
|                       |                       | herit; display: flex; |
|                       |                       |  padding: 8px 20px;"} |
|                       |                       | ::: {.c-              |
|                       |                       | message_kit__gutter__ |
|                       |                       | left style="box-sizin |
|                       |                       | g: inherit; display:  |
|                       |                       | flex; flex-shrink: 0; |
|                       |                       |  margin-right: 8px;"} |
|                       |                       | :                     |
|                       |                       | :: {.p-message_pane_m |
|                       |                       | essage__compact_times |
|                       |                       | tamp .p-message_pane_ |
|                       |                       | message__compact_time |
|                       |                       | stamp--light .p-messa |
|                       |                       | ge_pane_message__comp |
|                       |                       | act_timestamp--adjace |
|                       |                       | nt style="box-sizing: |
|                       |                       |  inherit; margin: -4p |
|                       |                       | x 0px -4px -20px; tex |
|                       |                       | t-align: right; width |
|                       |                       | : 56px; opacity: 0;"} |
|                       |                       | [[11:25               |
|                       |                       | ]{.c-timestamp__label |
|                       |                       | style="box-           |
|                       |                       | sizing: inherit; colo |
|                       |                       | r: rgba(var(--sk_fore |
|                       |                       | ground_max_solid,97,9 |
|                       |                       | 6,97),1);"}](https:// |
|                       |                       | waysact.slack.com/arc |
|                       |                       | hives/D02JCR6S8/p1660 |
|                       |                       | 829149232499){.c-link |
|                       |                       | .c-timestamp          |
|                       |                       | style="box-sizing:    |
|                       |                       | inherit; color: rgba( |
|                       |                       | var(--sk_foreground_m |
|                       |                       | ax_solid,97,96,97),1) |
|                       |                       | ; text-decoration: no |
|                       |                       | ne; font-size: 12px;" |
|                       |                       | tabindex="-1"         |
|                       |                       | str                   |
|                       |                       | ingify-type="replace" |
|                       |                       | string                |
|                       |                       | ify-text="[11:25 PM]" |
|                       |                       | stringify-req         |
|                       |                       | uires-siblings="true" |
|                       |                       | t                     |
|                       |                       | s="1660829149.232499" |
|                       |                       | sk="tooltip_parent"   |
|                       |                       | rem                   |
|                       |                       | ove-tab-index="true"} |
|                       |                       | :::                   |
|                       |                       | :::                   |
|                       |                       |                       |
|                       |                       | ::: {.c               |
|                       |                       | -message_kit__gutter_ |
|                       |                       | _right style="box-siz |
|                       |                       | ing: inherit; flex: 1 |
|                       |                       |  1 0px; margin: -12px |
|                       |                       |  -8px -16px -16px; mi |
|                       |                       | n-width: 0px; padding |
|                       |                       | : 8px 8px 8px 16px;"  |
|                       |                       | qa="message_content"} |
|                       |                       | ::                    |
|                       |                       | : {.c-message_kit__bl |
|                       |                       | ocks .c-message_kit__ |
|                       |                       | blocks--rich_text sty |
|                       |                       | le="box-sizing: inher |
|                       |                       | it; max-width: none;  |
|                       |                       | margin-bottom: 4px;"} |
|                       |                       | ::: {.c-messag        |
|                       |                       | e__message_blocks .c- |
|                       |                       | message__message_bloc |
|                       |                       | ks--rich_text style=" |
|                       |                       | box-sizing: inherit;  |
|                       |                       | max-width: none; over |
|                       |                       | flow-wrap: break-word |
|                       |                       | ;" qa="message-text"} |
|                       |                       | ::: {.p-bl            |
|                       |                       | ock_kit_renderer styl |
|                       |                       | e="box-sizing: inheri |
|                       |                       | t; width: 798px;" qa= |
|                       |                       | "block-kit-renderer"} |
|                       |                       | :::                   |
|                       |                       | {.p-block_kit_rendere |
|                       |                       | r__block_wrapper .p-b |
|                       |                       | lock_kit_renderer__bl |
|                       |                       | ock_wrapper--first st |
|                       |                       | yle="box-sizing: inhe |
|                       |                       | rit; display: flex;"} |
|                       |                       | ::: {.p-rich_text_    |
|                       |                       | block style="box-sizi |
|                       |                       | ng: inherit; counter- |
|                       |                       | reset: list-0 0 list- |
|                       |                       | 1 0 list-2 0 list-3 0 |
|                       |                       |  list-4 0 list-5 0 li |
|                       |                       | st-6 0 list-7 0 list- |
|                       |                       | 8 0 list-9 0; text-al |
|                       |                       | ign: left; user-selec |
|                       |                       | t: text; width: 798px |
|                       |                       | ; font-size: 15px; li |
|                       |                       | ne-height: 1.46668;"} |
|                       |                       | ::: {.p-rich_t        |
|                       |                       | ext_section style="bo |
|                       |                       | x-sizing: inherit; co |
|                       |                       | unter-reset: list-0 0 |
|                       |                       |  list-1 0 list-2 0 li |
|                       |                       | st-3 0 list-4 0 list- |
|                       |                       | 5 0 list-6 0 list-7 0 |
|                       |                       |  list-8 0 list-9 0;"} |
|                       |                       | and the second one is |
|                       |                       | the negation          |
|                       |                       | (`!`{.c-mrkdwn__code  |
|                       |                       | st                    |
|                       |                       | yle="box-sizing: inhe |
|                       |                       | rit; background-color |
|                       |                       | : rgba(var(--sk_foreg |
|                       |                       | round_min,29,28,29),0 |
|                       |                       | .04); border: 1px sol |
|                       |                       | id var(--saf-0); bord |
|                       |                       | er-radius: 3px; color |
|                       |                       | : #e01e5a; padding: 2 |
|                       |                       | px 3px 1px; --saf-0:  |
|                       |                       | rgba(var(--sk_foregro |
|                       |                       | und_low,29,28,29),0.1 |
|                       |                       | 3); overflow-wrap: br |
|                       |                       | eak-word; font-size:  |
|                       |                       | 12px; font-variant-li |
|                       |                       | gatures: none; line-h |
|                       |                       | eight: 1.50001; tab-s |
|                       |                       | ize: 4; white-space:  |
|                       |                       | pre-wrap; word-break: |
|                       |                       |  normal; font-family: |
|                       |                       |  Monaco, Menlo, Conso |
|                       |                       | las, 'Courier New', m |
|                       |                       | onospace !important;" |
|                       |                       | st                    |
|                       |                       | ringify-type="code"}) |
|                       |                       | of the first one,     |
|                       |                       | resulting             |
|                       |                       | in `!pledge.          |
|                       |                       | office.name.match?(/^ |
|                       |                       | (SNG Collective|SNG 2 |
|                       |                       | )$/)`{.c-mrkdwn__code |
|                       |                       | st                    |
|                       |                       | yle="box-sizing: inhe |
|                       |                       | rit; background-color |
|                       |                       | : rgba(var(--sk_foreg |
|                       |                       | round_min,29,28,29),0 |
|                       |                       | .04); border: 1px sol |
|                       |                       | id var(--saf-0); bord |
|                       |                       | er-radius: 3px; color |
|                       |                       | : #e01e5a; padding: 2 |
|                       |                       | px 3px 1px; --saf-0:  |
|                       |                       | rgba(var(--sk_foregro |
|                       |                       | und_low,29,28,29),0.1 |
|                       |                       | 3); overflow-wrap: br |
|                       |                       | eak-word; font-size:  |
|                       |                       | 12px; font-variant-li |
|                       |                       | gatures: none; line-h |
|                       |                       | eight: 1.50001; tab-s |
|                       |                       | ize: 4; white-space:  |
|                       |                       | pre-wrap; word-break: |
|                       |                       |  normal; font-family: |
|                       |                       |  Monaco, Menlo, Conso |
|                       |                       | las, 'Courier New', m |
|                       |                       | onospace !important;" |
|                       |                       | s                     |
|                       |                       | tringify-type="code"} |
|                       |                       | :::                   |
|                       |                       | :::                   |
|                       |                       | :::                   |
|                       |                       | :::                   |
|                       |                       | :::                   |
|                       |                       | :::                   |
|                       |                       | :::                   |
|                       |                       | :::                   |
|                       |                       | :::                   |
|                       |                       | :::                   |
|                       |                       | :::                   |
|                       |                       | :::                   |
+-----------------------+-----------------------+-----------------------+
| Payment amount        | Email is sent if      | pledge.amount \<=     |
|                       | pledge amount is less | 10.99                 |
|                       | than or equal to      |                       |
|                       | 10.99                 |                       |
+-----------------------+-----------------------+-----------------------+
| Payment amount        | Email is sent if      | pledge.amount \>      |
|                       | pledge amount is      | 10.99                 |
|                       | greater than 10.99    |                       |
+-----------------------+-----------------------+-----------------------+
| Payment amount        | Email is sent if      | \`pledge.amount \>=   |
|                       | pledge amount is      | 10 && pledge.amount   |
|                       | greater than or equal | \<= 100\`\`           |
|                       | to 10 and less than   |                       |
|                       | or equal to 100       |                       |
+-----------------------+-----------------------+-----------------------+
| Payment amount        | Email is sent if      | \`pledge.amount ==    |
|                       | pledge amount is 4.34 | 4.34                  |
|                       | or 52.08              |                       |
+-----------------------+-----------------------+-----------------------+
| Payment day           | Email is sent if      | pledge.payment_day == |
|                       | donor selected that   | 4                     |
|                       | payment day           |                       |
+-----------------------+-----------------------+-----------------------+
| For payment           |                       |                       |
| frequency, you can    |                       |                       |
| use (for example)     |                       |                       |
| *either* [*==         |                       |                       |
| 'monthly'* or *==     |                       |                       |
| Pledge::TRANS         |                       |                       |
| ACTION_TYPE_MONTHLY*. |                       |                       |
| Both are correct, the |                       |                       |
| later is a constant   |                       |                       |
| defined in Pledge     |                       |                       |
| Model that holds the  |                       |                       |
| value `'mont          |                       |                       |
| hly'`{.c-mrkdwn__code |                       |                       |
| style="b              |                       |                       |
| ox-sizing: inherit; p |                       |                       |
| adding: 2px 3px 1px;  |                       |                       |
| border: 1px solid var |                       |                       |
| (--saf-0); border-rad |                       |                       |
| ius: 3px; background- |                       |                       |
| color: rgba(var(--sk_ |                       |                       |
| foreground_min,29,28, |                       |                       |
| 29),0.04); color: #e0 |                       |                       |
| 1e5a; --saf-0: rgba(v |                       |                       |
| ar(--sk_foreground_lo |                       |                       |
| w,29,28,29),0.13); fo |                       |                       |
| nt-size: 12px; line-h |                       |                       |
| eight: 1.50001; font- |                       |                       |
| variant-ligatures: no |                       |                       |
| ne; white-space: pre- |                       |                       |
| wrap; overflow-wrap:  |                       |                       |
| break-word; word-brea |                       |                       |
| k: normal; tab-size:  |                       |                       |
| 4; font-family: Monac |                       |                       |
| o, Menlo, Consolas, ' |                       |                       |
| Courier New', monospa |                       |                       |
| ce !important; font-s |                       |                       |
| tyle: normal; font-va |                       |                       |
| riant-caps: normal; f |                       |                       |
| ont-weight: 400; lett |                       |                       |
| er-spacing: normal; o |                       |                       |
| rphans: 2; text-align |                       |                       |
| : left; text-indent:  |                       |                       |
| 0px; text-transform:  |                       |                       |
| none; widows: 2; word |                       |                       |
| -spacing: 0px; -webki |                       |                       |
| t-text-stroke-width:  |                       |                       |
| 0px; text-decoration- |                       |                       |
| thickness: initial; t |                       |                       |
| ext-decoration-style: |                       |                       |
|  initial; text-decora |                       |                       |
| tion-color: initial;" |                       |                       |
| st                    |                       |                       |
| ringify-type="code"}. |                       |                       |
| We use the constant   |                       |                       |
| in the code as a      |                       |                       |
| guard if the value    |                       |                       |
| changes however that  |                       |                       |
| is unlikely so the    |                       |                       |
| former shorter        |                       |                       |
| version may be easier |                       |                       |
| to use.               |                       |                       |
| ]{style="color: #1    |                       |                       |
| d1c1d; font-family: S |                       |                       |
| lack-Lato, appleLogo, |                       |                       |
|  sans-serif; font-siz |                       |                       |
| e: 15px; font-style:  |                       |                       |
| normal; font-variant- |                       |                       |
| ligatures: common-lig |                       |                       |
| atures; font-variant- |                       |                       |
| caps: normal; font-we |                       |                       |
| ight: 400; letter-spa |                       |                       |
| cing: normal; orphans |                       |                       |
| : 2; text-align: left |                       |                       |
| ; text-indent: 0px; t |                       |                       |
| ext-transform: none;  |                       |                       |
| white-space: normal;  |                       |                       |
| widows: 2; word-spaci |                       |                       |
| ng: 0px; -webkit-text |                       |                       |
| -stroke-width: 0px; b |                       |                       |
| ackground-color: #f8f |                       |                       |
| 8f8; text-decoration- |                       |                       |
| thickness: initial; t |                       |                       |
| ext-decoration-style: |                       |                       |
|  initial; text-decora |                       |                       |
| tion-color: initial;  |                       |                       |
| display: inline !impo |                       |                       |
| rtant; float: none;"} |                       |                       |
+-----------------------+-----------------------+-----------------------+
| Payment frequency     | Email is sent if the  | pl                    |
|                       | payment frequency is  | edge.transaction_type |
|                       | 4 weekly              | ==                    |
|                       |                       | Pledge::TRANSA        |
|                       |                       | CTION_TYPE_FOURWEEKLY |
|                       |                       |                       |
|                       |                       |                       |
|                       |                       |                       |
|                       |                       | [pl                   |
|                       |                       | edge.transaction_type |
|                       |                       | ==                    |
|                       |                       | \'four-weekl          |
|                       |                       | y\']{style="color: #1 |
|                       |                       | d1c1d; font-family: S |
|                       |                       | lack-Lato, appleLogo, |
|                       |                       |  sans-serif; font-siz |
|                       |                       | e: 15px; font-style:  |
|                       |                       | normal; font-variant- |
|                       |                       | ligatures: common-lig |
|                       |                       | atures; font-variant- |
|                       |                       | caps: normal; font-we |
|                       |                       | ight: 400; letter-spa |
|                       |                       | cing: normal; orphans |
|                       |                       | : 2; text-align: left |
|                       |                       | ; text-indent: 0px; t |
|                       |                       | ext-transform: none;  |
|                       |                       | white-space: normal;  |
|                       |                       | widows: 2; word-spaci |
|                       |                       | ng: 0px; -webkit-text |
|                       |                       | -stroke-width: 0px; b |
|                       |                       | ackground-color: #f8f |
|                       |                       | 8f8; text-decoration- |
|                       |                       | thickness: initial; t |
|                       |                       | ext-decoration-style: |
|                       |                       |  initial; text-decora |
|                       |                       | tion-color: initial;  |
|                       |                       | display: inline !impo |
|                       |                       | rtant; float: none;"} |
+-----------------------+-----------------------+-----------------------+
| Payment frequency     | Email is sent if the  | pl                    |
|                       | payment frequency is  | edge.transaction_type |
|                       | monthly               | ==                    |
|                       |                       | Pledge::TRA           |
|                       |                       | NSACTION_TYPE_MONTHLY |
|                       |                       |                       |
|                       |                       |                       |
|                       |                       |                       |
|                       |                       | [pl                   |
|                       |                       | edge.transaction_type |
|                       |                       | ==                    |
|                       |                       | \'monthl              |
|                       |                       | y\']{style="color: #1 |
|                       |                       | d1c1d; font-family: S |
|                       |                       | lack-Lato, appleLogo, |
|                       |                       |  sans-serif; font-siz |
|                       |                       | e: 15px; font-style:  |
|                       |                       | normal; font-variant- |
|                       |                       | ligatures: common-lig |
|                       |                       | atures; font-variant- |
|                       |                       | caps: normal; font-we |
|                       |                       | ight: 400; letter-spa |
|                       |                       | cing: normal; orphans |
|                       |                       | : 2; text-align: left |
|                       |                       | ; text-indent: 0px; t |
|                       |                       | ext-transform: none;  |
|                       |                       | white-space: normal;  |
|                       |                       | widows: 2; word-spaci |
|                       |                       | ng: 0px; -webkit-text |
|                       |                       | -stroke-width: 0px; b |
|                       |                       | ackground-color: #f8f |
|                       |                       | 8f8; text-decoration- |
|                       |                       | thickness: initial; t |
|                       |                       | ext-decoration-style: |
|                       |                       |  initial; text-decora |
|                       |                       | tion-color: initial;  |
|                       |                       | display: inline !impo |
|                       |                       | rtant; float: none;"} |
+-----------------------+-----------------------+-----------------------+
| Payment frequency     | Email is sent if the  | pl                    |
|                       | payment frequency is  | edge.transaction_type |
|                       | annual                | ==                    |
|                       |                       | Pledge::TR            |
|                       |                       | ANSACTION_TYPE_ANNUAL |
|                       |                       |                       |
|                       |                       |                       |
|                       |                       |                       |
|                       |                       | [pl                   |
|                       |                       | edge.transaction_type |
|                       |                       | ==                    |
|                       |                       | \'annua               |
|                       |                       | l\']{style="color: #1 |
|                       |                       | d1c1d; font-family: S |
|                       |                       | lack-Lato, appleLogo, |
|                       |                       |  sans-serif; font-siz |
|                       |                       | e: 15px; font-style:  |
|                       |                       | normal; font-variant- |
|                       |                       | ligatures: common-lig |
|                       |                       | atures; font-variant- |
|                       |                       | caps: normal; font-we |
|                       |                       | ight: 400; letter-spa |
|                       |                       | cing: normal; orphans |
|                       |                       | : 2; text-align: left |
|                       |                       | ; text-indent: 0px; t |
|                       |                       | ext-transform: none;  |
|                       |                       | white-space: normal;  |
|                       |                       | widows: 2; word-spaci |
|                       |                       | ng: 0px; -webkit-text |
|                       |                       | -stroke-width: 0px; b |
|                       |                       | ackground-color: #f8f |
|                       |                       | 8f8; text-decoration- |
|                       |                       | thickness: initial; t |
|                       |                       | ext-decoration-style: |
|                       |                       |  initial; text-decora |
|                       |                       | tion-color: initial;  |
|                       |                       | display: inline !impo |
|                       |                       | rtant; float: none;"} |
+-----------------------+-----------------------+-----------------------+
| Payment frequency     | Email is sent if the  | pl                    |
|                       | payment frequency is  | edge.transaction_type |
|                       | weekly                | ==                    |
|                       |                       | Pledge::TR            |
|                       |                       | ANSACTION_TYPE_WEEKLY |
|                       |                       |                       |
|                       |                       |                       |
|                       |                       |                       |
|                       |                       | [pl                   |
|                       |                       | edge.transaction_type |
|                       |                       | ==                    |
|                       |                       | \'weekl               |
|                       |                       | y\']{style="color: #1 |
|                       |                       | d1c1d; font-family: S |
|                       |                       | lack-Lato, appleLogo, |
|                       |                       |  sans-serif; font-siz |
|                       |                       | e: 15px; font-style:  |
|                       |                       | normal; font-variant- |
|                       |                       | ligatures: common-lig |
|                       |                       | atures; font-variant- |
|                       |                       | caps: normal; font-we |
|                       |                       | ight: 400; letter-spa |
|                       |                       | cing: normal; orphans |
|                       |                       | : 2; text-align: left |
|                       |                       | ; text-indent: 0px; t |
|                       |                       | ext-transform: none;  |
|                       |                       | white-space: normal;  |
|                       |                       | widows: 2; word-spaci |
|                       |                       | ng: 0px; -webkit-text |
|                       |                       | -stroke-width: 0px; b |
|                       |                       | ackground-color: #f8f |
|                       |                       | 8f8; text-decoration- |
|                       |                       | thickness: initial; t |
|                       |                       | ext-decoration-style: |
|                       |                       |  initial; text-decora |
|                       |                       | tion-color: initial;  |
|                       |                       | display: inline !impo |
|                       |                       | rtant; float: none;"} |
+-----------------------+-----------------------+-----------------------+
| Payment frequency     | Email is sent if the  | pl                    |
|                       | payment frequency is  | edge.transaction_type |
|                       | semi-annual           | ==                    |
|                       |                       | Pledge::TRANSAC       |
|                       |                       | TION_TYPE_SEMI-ANNUAL |
|                       |                       |                       |
|                       |                       |                       |
|                       |                       |                       |
|                       |                       | [pl                   |
|                       |                       | edge.transaction_type |
|                       |                       | ==                    |
|                       |                       | \'semi-annua          |
|                       |                       | l\']{style="color: #1 |
|                       |                       | d1c1d; font-family: S |
|                       |                       | lack-Lato, appleLogo, |
|                       |                       |  sans-serif; font-siz |
|                       |                       | e: 15px; font-style:  |
|                       |                       | normal; font-variant- |
|                       |                       | ligatures: common-lig |
|                       |                       | atures; font-variant- |
|                       |                       | caps: normal; font-we |
|                       |                       | ight: 400; letter-spa |
|                       |                       | cing: normal; orphans |
|                       |                       | : 2; text-align: left |
|                       |                       | ; text-indent: 0px; t |
|                       |                       | ext-transform: none;  |
|                       |                       | white-space: normal;  |
|                       |                       | widows: 2; word-spaci |
|                       |                       | ng: 0px; -webkit-text |
|                       |                       | -stroke-width: 0px; b |
|                       |                       | ackground-color: #f8f |
|                       |                       | 8f8; text-decoration- |
|                       |                       | thickness: initial; t |
|                       |                       | ext-decoration-style: |
|                       |                       |  initial; text-decora |
|                       |                       | tion-color: initial;  |
|                       |                       | display: inline !impo |
|                       |                       | rtant; float: none;"} |
+-----------------------+-----------------------+-----------------------+
| Payment frequency     | Email is sent if the  | pl                    |
|                       | payment frequency is  | edge.transaction_type |
|                       | half-yearly           | ==                    |
|                       |                       | Pledge::TRANSA        |
|                       |                       | CTION_TYPE_HALFYEARLY |
|                       |                       |                       |
|                       |                       |                       |
|                       |                       |                       |
|                       |                       | [pl                   |
|                       |                       | edge.transaction_type |
|                       |                       | ==                    |
|                       |                       | \'half-yearl          |
|                       |                       | y\']{style="color: #1 |
|                       |                       | d1c1d; font-family: S |
|                       |                       | lack-Lato, appleLogo, |
|                       |                       |  sans-serif; font-siz |
|                       |                       | e: 15px; font-style:  |
|                       |                       | normal; font-variant- |
|                       |                       | ligatures: common-lig |
|                       |                       | atures; font-variant- |
|                       |                       | caps: normal; font-we |
|                       |                       | ight: 400; letter-spa |
|                       |                       | cing: normal; orphans |
|                       |                       | : 2; text-align: left |
|                       |                       | ; text-indent: 0px; t |
|                       |                       | ext-transform: none;  |
|                       |                       | white-space: normal;  |
|                       |                       | widows: 2; word-spaci |
|                       |                       | ng: 0px; -webkit-text |
|                       |                       | -stroke-width: 0px; b |
|                       |                       | ackground-color: #f8f |
|                       |                       | 8f8; text-decoration- |
|                       |                       | thickness: initial; t |
|                       |                       | ext-decoration-style: |
|                       |                       |  initial; text-decora |
|                       |                       | tion-color: initial;  |
|                       |                       | display: inline !impo |
|                       |                       | rtant; float: none;"} |
+-----------------------+-----------------------+-----------------------+
| Payment frequency     | Email is sent if the  | pl                    |
|                       | payment frequency is  | edge.transaction_type |
|                       | donation              | ==                    |
|                       |                       | Pledge::TRAN          |
|                       |                       | SACTION_TYPE_DONATION |
|                       |                       |                       |
|                       |                       |                       |
|                       |                       |                       |
|                       |                       | [pl                   |
|                       |                       | edge.transaction_type |
|                       |                       | ==                    |
|                       |                       | \'donatio             |
|                       |                       | n\']{style="color: #1 |
|                       |                       | d1c1d; font-family: S |
|                       |                       | lack-Lato, appleLogo, |
|                       |                       |  sans-serif; font-siz |
|                       |                       | e: 15px; font-style:  |
|                       |                       | normal; font-variant- |
|                       |                       | ligatures: common-lig |
|                       |                       | atures; font-variant- |
|                       |                       | caps: normal; font-we |
|                       |                       | ight: 400; letter-spa |
|                       |                       | cing: normal; orphans |
|                       |                       | : 2; text-align: left |
|                       |                       | ; text-indent: 0px; t |
|                       |                       | ext-transform: none;  |
|                       |                       | white-space: normal;  |
|                       |                       | widows: 2; word-spaci |
|                       |                       | ng: 0px; -webkit-text |
|                       |                       | -stroke-width: 0px; b |
|                       |                       | ackground-color: #f8f |
|                       |                       | 8f8; text-decoration- |
|                       |                       | thickness: initial; t |
|                       |                       | ext-decoration-style: |
|                       |                       |  initial; text-decora |
|                       |                       | tion-color: initial;  |
|                       |                       | display: inline !impo |
|                       |                       | rtant; float: none;"} |
+-----------------------+-----------------------+-----------------------+
| Payment frequency     | Email is sent if the  | pl                    |
|                       | payment frequency is  | edge.transaction_type |
|                       | quarterly             | ==                    |
|                       |                       | Pledge::TRANS         |
|                       |                       | ACTION_TYPE_QUARTERLY |
|                       |                       |                       |
|                       |                       |                       |
|                       |                       |                       |
|                       |                       | [pl                   |
|                       |                       | edge.transaction_type |
|                       |                       | ==                    |
|                       |                       | \'quarterl            |
|                       |                       | y\']{style="color: #1 |
|                       |                       | d1c1d; font-family: S |
|                       |                       | lack-Lato, appleLogo, |
|                       |                       |  sans-serif; font-siz |
|                       |                       | e: 15px; font-style:  |
|                       |                       | normal; font-variant- |
|                       |                       | ligatures: common-lig |
|                       |                       | atures; font-variant- |
|                       |                       | caps: normal; font-we |
|                       |                       | ight: 400; letter-spa |
|                       |                       | cing: normal; orphans |
|                       |                       | : 2; text-align: left |
|                       |                       | ; text-indent: 0px; t |
|                       |                       | ext-transform: none;  |
|                       |                       | white-space: normal;  |
|                       |                       | widows: 2; word-spaci |
|                       |                       | ng: 0px; -webkit-text |
|                       |                       | -stroke-width: 0px; b |
|                       |                       | ackground-color: #f8f |
|                       |                       | 8f8; text-decoration- |
|                       |                       | thickness: initial; t |
|                       |                       | ext-decoration-style: |
|                       |                       |  initial; text-decora |
|                       |                       | tion-color: initial;  |
|                       |                       | display: inline !impo |
|                       |                       | rtant; float: none;"} |
+-----------------------+-----------------------+-----------------------+
| Payment Type          | Email is sent if      | pledge.payment_method |
|                       | payment method is     | == \'directdebit\'    |
|                       | direct debit          |                       |
+-----------------------+-----------------------+-----------------------+
| Payment Type          | Email is sent if      | pledge.payment_method |
|                       | payment method is     | == \'creditcard\'     |
|                       | credit card           |                       |
|                       | (including debit      |                       |
|                       | cards)                |                       |
+-----------------------+-----------------------+-----------------------+
| Payment Type          | Email is sent if      | pledge.payment_method |
|                       | payment method is a   | == \'creditcard\' &&  |
|                       | credit card           | pledge.bank_card_d    |
|                       | (excluding debit      | etail.try(:card_type) |
|                       | cards)                | =\~ /credit/i         |
+-----------------------+-----------------------+-----------------------+
| Payment Type          | Email is sent if      | pledge.payment_method |
|                       | payment method is a   | == \'creditcard\' &&  |
|                       | debit card            | pledge.bank_card_d    |
|                       |                       | etail.try(:card_type) |
|                       |                       | =\~ /debit/i          |
+-----------------------+-----------------------+-----------------------+
| Payment Type          | Email is sent if      | pledge.payment_method |
|                       | payment method is a   | == \'wallet\'         |
|                       | wallet                |                       |
+-----------------------+-----------------------+-----------------------+
| Payment Type          | Email is sent if      | pledge.payment_method |
|                       | payment method is a   | == \'paypal\'         |
|                       | paypal                |                       |
+-----------------------+-----------------------+-----------------------+
| Payment Type          | Email is sent if      | pledge.payment_method |
|                       | payment method is a   | == \'rgpsms\'         |
|                       | RGPSMS                |                       |
+-----------------------+-----------------------+-----------------------+
| Pledge ID             | Email is sent if      | (pledge.id % 2) == 0  |
|                       | pledge ID is even     |                       |
+-----------------------+-----------------------+-----------------------+
| Pledge ID             | Email is sent if      | (pledge.id % 2) == 1  |
|                       | pledge ID is odd      |                       |
+-----------------------+-----------------------+-----------------------+
| Pledge Type           | Email is sent         | pledge.pledge_type == |
|                       | depending on pledge   | \'captured\' will     |
|                       | type                  | give you all          |
|                       |                       | non-leads             |
|                       |                       |                       |
|                       |                       | pledge.pledge_type == |
|                       |                       | \'cc_lead\' will give |
|                       |                       | you all leads         |
+-----------------------+-----------------------+-----------------------+
| Products              | Email is sent if      | pledg                 |
|                       | product \"Water\" is  | e.products.any?{\|p\| |
|                       | selected              | p\[\"name\"\] ==      |
|                       |                       | \"Water\"}            |
+-----------------------+-----------------------+-----------------------+
| Record Source         | Email is sent based   | pledge.record_source  |
|                       | on the record source  | == \'f2f\'            |
|                       |                       |                       |
|                       |                       | pledge.record_source  |
|                       |                       | == \'sd\'             |
|                       |                       |                       |
|                       |                       | pledge.record_source  |
|                       |                       | == \'imported\'       |
|                       |                       |                       |
|                       |                       | pledge.record_source  |
|                       |                       | == \'digital\'        |
+-----------------------+-----------------------+-----------------------+
| Secondary Person      | Email sent if second  | pledge.secondar       |
|                       | person name present   | y_person_details.try( |
|                       |                       | :first_name).present? |
+-----------------------+-----------------------+-----------------------+
| Shopping Centre       | Email is sent based   | p                     |
|                       | on Shopping Centre    | ledge.shopping_centre |
|                       |                       | != \'Socio Aquí       |
|                       |                       | También\'             |
+-----------------------+-----------------------+-----------------------+
| State (Primary        | Email is sent if the  | pledge.               |
| address)              | donor\'s State from   | primary_address.state |
|                       | their primary address | == \'NSW\'            |
|                       | is NSW                |                       |
+-----------------------+-----------------------+-----------------------+
| Team Events           | Email is sent if the  | pledge.t              |
|                       | team event of the     | eam.events.map(&:name |
|                       | pledge matches        | ).include?(\"EVENT\") |
|                       |                       | or                    |
|                       |                       | pledge.team           |
|                       |                       | .events.exists?(name: |
|                       |                       | \'EVENT\')            |
+-----------------------+-----------------------+-----------------------+
| State (pledge state)  | Email is sent to      | pledge.state !=       |
|                       | donors whose pledge   | \'alien\'             |
|                       | is in a particular    |                       |
|                       | State                 |                       |
+-----------------------+-----------------------+-----------------------+
| Team Locations        | Email is sent if the  | pledge.team           |
| (previously known as  | team location of the  | .locations.map(&:name |
| team labels)          | pledge matches        | ).include?(\"LABEL\") |
|                       |                       | or                    |
|                       |                       | pledge.team.lo        |
|                       |                       | cations.exists?(name: |
|                       |                       | \'LOCATION\')         |
+-----------------------+-----------------------+-----------------------+
| Title                 | Email is sent to      | p                     |
|                       | donors based on their | ledge.supporter_title |
|                       | title                 | == \'Madame\'. Can    |
|                       |                       | also combine with     |
|                       |                       | other criteria i.e.   |
|                       |                       | p                     |
|                       |                       | ledge.supporter_title |
|                       |                       | == \'Madame\' &&      |
|                       |                       | pledge.signup_        |
|                       |                       | address.city.present? |
+-----------------------+-----------------------+-----------------------+
