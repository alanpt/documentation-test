# Importing leads and lead updates

In Evergiving -\> Import -\> Leads you see two options, \"Drag and drop
Leads\" and \"Drag and drop Do Not Call List\".

### **\"Drag and drop Leads\"**

**1) You can import new leads** (template
<https://drive.google.com/file/d/1FXFno0CUU7a7HQzuBdS0R_D2KnW6vtfC/view?usp=sharing>)
:

-   You can use CSV or XLS/XLSX formats. You might find it easier to use
    XLS/XLSX. You can use Microsoft Excel but do consider using a
    different application, it really isn't built for managing tables of
    data. Unless you're an advanced user and know how to prevent it
    doing what it's designed to do - it can cause you problems. There's
    lots of great alternatives out there. Something like this
    [https://www.ronsplace.eu/products/ronseditor](https://www.ronsplace.eu/products/ronseditor){target="_blank"
    rel="noopener"} is excellent.

-   Columns can be imported in any order

-   These columns are mandatory and cannot be empty: Supporter First
    Name, Supporter Last Name and Supporter Country Code. Any other
    column is optional. Evergiving will detect the fields you're
    importing by matching the title of the column.

-   Supporter Country Code - is ISO 3166
    [https://en.wikipedia.org/wiki/ISO_3166](https://en.wikipedia.org/wiki/ISO_3166){target="_blank"
    rel="noopener"} or
    [https://www.iso.org/iso-3166-country-codes.html](https://www.iso.org/iso-3166-country-codes.html){target="_blank"
    rel="noopener"} e.g. \'US', 'GB' or 'AU'

-   Phone numbers will be validated on import using the Supporter
    Country Code. Evergiving will detect the national phone format and
    if you have dropped leading zeroes in your import add them back.
    Invalid numbers will reject the row.

-   Dates are all YYYY-MM-DD, as per ISO 8601
    [https://www.iso.org/iso-8601-date-and-time-format.html](https://www.iso.org/iso-8601-date-and-time-format.html){target="_blank"
    rel="noopener"}

-   Boolean values are 'Yes'/'No' or 'True'/'False'

-   Currencies are ISO 4217
    [https://www.iso.org/iso-4217-currency-codes.html](https://www.iso.org/iso-4217-currency-codes.html){target="_blank"
    rel="noopener"} e.g. USD, EUR, GBP

-   All validated values are case insensitive e.g. you can import TRUE,
    True or true; USD or usd etc

-   Timezones are values in the tz database
    [https://en.wikipedia.org/wiki/List_of_tz_database_time_zones](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones){target="_blank"
    rel="noopener"} e.g. America/Toronto, Europe/London, or Etc/GMT+5

-   Payment methods allowed are Card (or value contains 'card'), Direct
    Debit (or value contains 'bank'), Wallet, and Other. You can then
    add anything you like in the payment method type column, e.g.
    'PayPal' or Apple Pay for 'Wallet'

-   If you think you've made a mistake, you can go to
    [https://manage.evergiving.com/leadimports](https://manage.evergiving.com/leadimports){target="_blank"
    rel="noopener"} and delete the lead import. Please N.B. as soon as
    you log in as an agent and make a change to a record in the lead
    import, i.e. you log a call attempt or save a change to a field, you
    can no longer delete the lead import. You can then make it
    \'inactive'.

-   using
    [https://libphonenumbers.js.org/docs/getNumberType/](https://libphonenumbers.js.org/docs/getNumberType/){rel="nofollow"}
    where a number is `PREMIUM_RATE`{.notranslate} we wil reject the
    number as invalid.

**2) You can also import updates to existing leads** by importing a new
file and filename with the following template quoting the lead ID in the
Pledge ID column
[https://docs.google.com/spreadsheets/d/1hAj7LfFxnvtv7vj_hjeErnuvjHfS6FqC5RnEABh9-sA/edit?usp=sharing.](https://docs.google.com/spreadsheets/d/1hAj7LfFxnvtv7vj_hjeErnuvjHfS6FqC5RnEABh9-sA/edit?usp=sharing)
In addition to the columns in this template, you should be able to add
any of the original import columns to update those.

You can import updates to the lead details as well as importing a call
attempt outcome or final call outcome. Note required formats for  start
date (YYYY-MM-DD) and Date of Call Attempt (YYYY-MM-DD) and Call
Datetime / Callback Datetime 2021-02-09T04:02:40. Call Status should be
automatically generated based on the Call Attempt Outcome or Final Call
Outcome. If the \"validated by user name\" is left blank, we will
populate this with the name of the person importing the data.

**3) You can import new records to add to a specific lead import file**.
Through <https://github.com/waysact/evergiving/issues/7049> you can
import a filename which is the same as an existing filename to add new
records to the original file. After you drag and drop the file, you\'ll
see \"A lead import for the same filename already exists. Records will
be added to the existing import.\"

 

### **\"Drag and drop Do Not Call List\"**

Through \"Drag and drop Do Not Call List\" you can import a unique
identifier (phone, email etc) and all leads with that identifier will be
marked with the call status Do Not Call (template
<https://docs.google.com/spreadsheets/d/1O4GLVPAAtV4Qu1Lh1IG0DgbjPIpF3IovvL3RdrJLcNc/edit?usp=sharing)>.
After issues with some imports hijacking the database, we\'ve made
either one email or phone number per line mandatory for import and
changed the import to have just one phone number column (we check this
number against the Home, Mobile & Work Phone fields). We have
<https://github.com/waysact/evergiving/issues/7862> to resolve one
outstanding issue of numbers in national format.

 

### **Importing only leads without errors**

Where I upload a file with records that are invalid, show me a button
that says \'Import Valid Rows Only\' and where I select this option,
import the valid rows and discard the invalid rows. On the invalid rows,
show a button \'Download Invalid Rows to CSV\', and where I select this
option download a CSV of the invalid data from the browser.

 

### **Leads API**

You can also import leads using our API:
[https://jsapi.apiary.io/apis/waysact/reference/0/leads.html ](https://jsapi.apiary.io/apis/waysact/reference/0/leads.html){rel="noreferrer"}

This endpoint allows you to create new lead records to be used in the
call center and supports the creation of one lead record per request.
You just need to give customers the link to the apiary, a token created
in the API Tokens page and the campaign name and campaign ID.

James\' test using <https://paw.cloud/> is at
<https://drive.google.com/file/d/12ScQ0-ouLT44AHoUkLHTRGYwjlU8yJLW/view?usp=sharing>

You can also update leads via API - this includes any of the original
fields as per the current import template but also the following. See
<https://jsapi.apiary.io/apis/waysact/reference/0/lead/update.html>

-   Start Date
-   Validation Outcome
-   Validated By Username
-   Validated At
-   Call Username
-   Call Datetime
-   Call Outcome
-   Final Call Outcome Label

`POST` is for creating new records, `PATCH` is for updating existing
ones. When using patch the url changes to something like:
`https://waysact.me/api/v1/leads/:id` (substitute :id with the id of the
pledge).

An example:

[POST /api/v4/leads HTTP/1.1]{style="font-size: 10.0pt;"}

[User-Agent: Databowl/1.0]{style="font-size: 10.0pt;"}

[Host: waysact.me]{style="font-size: 10.0pt;"}

[Connection: close]{style="font-size: 10.0pt;"}

[Accept: application/json]{style="font-size: 10.0pt;"}

[Authorization: Bearer
eyJhbGciOiJIUzI1NiJ9.eyJzdTQzOTA1LCJuYmYiOjE2Mjk5NDM5MDV9.J2wslkEJDAqzIJAQd7HoUhbNEaZ-A]{style="font-size: 10.0pt;"}

[Content-Type: application/json]{style="font-size: 10.0pt;"}

 

[{\"data\":{\"address1\":\"\",\"campaign_id\":\"4027\",\"campaign_name\":\"Starlight
Fundamental -- Telemarketing (Fundamental
Evergiving)\",\"city\":\"Norwest\",\"country\":\"Australia\",\"external_reference_number\":\"145345245\",
\"lead_import_label\":\"Dataphoria\",\"phone\":\"+61412345688\",\"postcode\":\"2153\",\"source\":\"Dataphoria\",\"state\":\"NSW\",
\"supporter_dob\":\"\",\"supporter_email\":[test101@dataphoria.com.au](mailto:test101@dataphoria.com.au){style="color: blue; text-decoration: none none;"
rel="noreferrer"},\"supporter_firstname\":\"Dataphoria\",]{style="font-size: 10.0pt;"}

[\"supporter_lastname\":\"Test1\"}}]{style="font-size: 10.0pt;"}

 

Response Body

[{\"data\":{\"external_reference_number\":\"145345245\",\"start_date\":null,\"supporter_title\":null,\"supporter_firstname\":\"Dataphoria\",]{style="font-size: 10.0pt;"}

[\"supporter_lastname\":\"Test1\",\"supporter_email\":[test101@dataphoria.com.au](mailto:test101@dataphoria.com.au){style="color: blue; text-decoration: none none;"
rel="noreferrer"},\"phone\":\"+61412345688\",\"mob_phone\":null,
\"work_phone\":null,\"supporter_gender\":null,\"supporter_dob\":\"\",\"private_notes\":null,\"validation_detail_comment\":null,
\"validation_detail_by\":null,\"validation_detail_date\":null,\"address1\":\"\",\"city\":\"Norwest\",\"state\":\"NSW\",\"postcode\":\"2153\",
\"country\":\"Australia\",\"last_recurring_payment_amount\":null,\"last_recurring_payment_currency\":null,
\"last_recurring_payment_date\":null,\"last_recurring_payment_frequency\":null,\"last_recurring_payment_payment_method\":null,
\"last_recurring_payment_payment_method_other_type\":null,\"last_recurring_payment_failed\":null,\"last_recurring_payment_status\":null,
\"last_recurring_payment_failed_reason\":null,\"total_number_of_recurring_payments_made\":null,\"sum_of_recurring_payments_made\":null,
\"sum_of_recurring_payments_made_currency\":null,\"highest_recurring_payment_made\":null,\"highest_recurring_payment_made_currency\":null,
\"last_single_payment_amount\":null,\"last_single_payment_currency\":null,\"last_single_payment_date\":null,\"last_single_payment_payment_method\":null,
\"last_single_payment_payment_method_other_type\":null,\"last_single_payment_failed\":null,\"last_single_payment_status\":null,
\"last_single_payment_failed_reason\":null,\"total_number_of_single_payments_made\":null,\"sum_of_single_payments_made\":null,
\"sum_of_single_payments_made_currency\":null,\"highest_single_payment_made\":null,\"highest_single_payment_made_currency\":null,\"previous_upgrade_date\":null,
\"previous_upgrade_amount\":null,\"previous_upgrade_amount_currency\":null,\"last_contact_date\":null,\"last_contact_method\":null,\"product\":null,\"child_sponsored\":null,
\"source\":\"Dataphoria\",\"source_campaign_name\":null,\"source_date\":null,\"source_time\":null,\"preference\":null,\"interest\":null,\"conversation_topic\":null,
\"activity\":null,\"volunteered\":null,\"volunteered_type\":null,\"petition_signed\":null,\"petition_type\":null,\"appeal\":null,\"appeal_type\":null,\"event_participant\":null,
\"event_participant_type\":null,\"campaigner\":null,\"supporter_timezone\":null,\"call_datetime\":null,\"call_outcome\":null,\"final_call_outcome_id\":null,\"errors\":]{style="font-size: 10.0pt;"}

 

**Duplicates and lead import API**

 

Through <https://github.com/waysact/evergiving/issues/6687> we released
duplicate features L

 

duplicates are correctly flagged for
`supporter_email phone mob_phone work_phone`{.notranslate} attributes

-   if campaign name is provided duplicates are scope to only leads with
    matching campaign
-   if campaign is not present then duplicate is flagged for any account
    leads
-   an error is returned if the lead is a duplicate
-   if `duplicate_action`{.notranslate} param is given with value of
    `insert`{.notranslate} then duplicate records are inserted

For the API `POST`{.c-mrkdwn__code
style="box-sizing: inherit; background-color: rgba(var(--sk_foreground_min,29,28,29),0.04); border: 1px solid var(--saf-0); border-radius: 3px; color: #e01e5a; padding: 2px 3px 1px; --saf-0: rgba(var(--sk_foreground_low,29,28,29),0.13); overflow-wrap: break-word; font-size: 12px; font-variant-ligatures: none; line-height: 1.50001; tab-size: 4; white-space: pre-wrap; word-break: normal; font-family: Monaco, Menlo, Consolas, 'Courier New', monospace !important; font-style: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: left; text-indent: 0px; text-transform: none; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;"
stringify-type="code"}[ is for creating new
records, ]{style="color: #1d1c1d; font-family: Slack-Lato, Slack-Fractions, appleLogo, sans-serif; font-size: 15px; font-style: normal; font-variant-ligatures: common-ligatures; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: left; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: #f8f8f8; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; display: inline !important; float: none;"}`PATCH`{.c-mrkdwn__code
style="box-sizing: inherit; background-color: rgba(var(--sk_foreground_min,29,28,29),0.04); border: 1px solid var(--saf-0); border-radius: 3px; color: #e01e5a; padding: 2px 3px 1px; --saf-0: rgba(var(--sk_foreground_low,29,28,29),0.13); overflow-wrap: break-word; font-size: 12px; font-variant-ligatures: none; line-height: 1.50001; tab-size: 4; white-space: pre-wrap; word-break: normal; font-family: Monaco, Menlo, Consolas, 'Courier New', monospace !important; font-style: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: left; text-indent: 0px; text-transform: none; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;"
stringify-type="code"}[ is for updating existing
ones.]{style="color: #1d1c1d; font-family: Slack-Lato, Slack-Fractions, appleLogo, sans-serif; font-size: 15px; font-style: normal; font-variant-ligatures: common-ligatures; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: left; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: #f8f8f8; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; display: inline !important; float: none;"}
