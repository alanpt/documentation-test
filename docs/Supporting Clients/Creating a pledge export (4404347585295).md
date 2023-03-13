# Creating a pledge export

Admin users, Admin Ops users with read / write access to the Exports and
at least read only access to Campaigns, Field and Pledges will be able
to create Pledge, Timesheet and Fundraiser exports. Currently the Agent
exports are accessible by Super Admins, but this should change.

Head to *Exports -\> Pledges* for pledge exports where the format is one
row per pledge.

Head to *Exports -\> Fundraisers* for Fundraiser exports where the
format is one row per Fundraiser.

Head to *Exports -\> Timesheets* for timesheet exports where the format
is one row per Fundraiser.

Head to *Exports -\> Agents* for pledge exports where the format is one
row per Agent.

\
The export builder page contains 2 parts: *Exporter Settings* where you
set the format and settings for the export & *Schema* where you build
the template.

**1) Exporter Settings**

![ExportSettings.png](https://support.waysact.com/hc/article_attachments/4404347619727/ExportSettings.png)1.1
*Name* (it must be unique)

*1.2 Tags* (these automatically added but you can manually add either
\"Final export\", \"Reporting\" or \"Workflow\"

*1.3 Description* (optional)

*1.4 Type* (mandatory - select either Pledge or Lead data)

1.4a *Campaign Selection Type -* select from *All Campaigns, All Active
Campaigns and Select Campaigns. *

1.5 Campaigns (mandatory - select campaign/s this export should be
available on)

1.6 Output Type (CSV, XLS, Salesforce, API, EBIC or Blackbaud - note,
even though XML is listed as available it isn\'t one of our available
schema types. XML files need to be built by developers).

*1.7 Last Used Approx* will populate to show the last time an export was
run (x days ago or unknown if it hasn\'t been run since that feature was
released).

 

**2. Filename options**

![ExportFilenameOptions.png](https://support.waysact.com/hc/article_attachments/4404347641999/ExportFilenameOptions.png)

*2.1 Filename prefix* (a prefix for the export filename)

*2.2 Filename suffix* (a suffix for the export filename)

*2.3 Export Reference Prefix* (prefix to the export reference (i.e. the
unix timestamp of the export)

*2.4 Append Export Reference Prefix To Export Filename* (Yes if you want
to add the prefix entered in the \"Export Reference Prefix\" field, else
No)

2.5 *Prepend External Reference to Call Recording Filename* (Yes to
prepend the value stored in the External Reference Number field to the
call recording filename, else No),

*2.6 Filename Date Format* (allows you to pick a format for the filename
instead of the standard date stamp e.g. DD-MM-YYYY-HH:MM instead of the
default),

*2.7 Override File Extension* (when a value is added here, this
overrides the extension used for naming the output file - this doesn\'t
change the format of the file, just the extension. The default
extensions are .csv for CSV files, .xls for Excel Spreadsheet). 

**\
3. Output format options**

![ExportOutputOptions.png](https://support.waysact.com/hc/article_attachments/4404341632783/ExportOutputOptions.png)\
3.1 *Include Column Headers in Output* (Yes / No). This setting is only
visible when the output type is set to *Comma-separated Values (CSV)* or
*Excel Spreadsheet (XLS)*. If it is enabled, the first line of the
generated CSV or XLS data will contain the header names. Otherwise,
column headers are omitted during export.

3.1 *CSV Field Separator* & *CSV Record Separator* (this setting is only
visible when the output type is set to Comma-separated Values (CSV). It
can be used to configure the character or string used to separate
individual fields in a record (line). Just as with other text input
fields, if the setting begins and ends with a double quote, it is
interpreted as a [JSON
string](http://tools.ietf.org/html/rfc7159#section-7){target="_blank"
rel="noopener"} -- in short, it can contain escape sequences for
newlines, tab characters, unicode characters, and so on) :

-   The standard csv record separator is \"\\r\\n\" (\'r\' is carriage
    return and \'n\' is line feed)
-   CSV with only a carriage return as the separator would be just "/r"
    as the record separator
-   Pipe Text Delimited (use csv format & add '\|' in the csv field
    separator column).
-   Tab delimited file put \"\\t\" in the field separator box. You can't
    type this in normally so as a workaround you can bring up the
    JavaScript console with Cmd+Alt+i and type:
    `$("#csv-field-sep").val('"\\t"x')` and hit enter. Then go back to
    the schema and in the field separator box you will see \"\\t\"x.
    Remove the \"x\" at the end.

3.2 *CSV character set* (this setting is only visible when the output
type is set to Comma-separated Values (CSV) and allows you to select the
encoding for the file.

**4. Export Destination**

![ExportDestination.png](https://support.waysact.com/hc/article_attachments/4404347875343/ExportDestination.png)

*4.1 Distribution List* (list of email addresses who should receive the
export)

*4.2 Template for email subject* (it appears blank in the export builder
but the default subject is \`\[account name\] Export of \[campaign
charity name\] data\`. To override this, just type a subject in the
template).

*4.3 Template for email body (it appears blank in the export builder but
the default text is copied below. To override this, just add new text in
the email body in the template). *

    Hello,
    A file from [account name] is ready to download from [file download link] and will be available until  [link expiry date and time].
    This file was exported through: [schema name]
    Sincerely yours, the Evergiving bot
    --
    Evergiving (c) 2017

The export email can be edited within the schema template and additional
merge fields are available:

-   \[my full name\]
-   \[total number of records\]
-   \[total number of alien pledges\]
-   \[total number of approved pledges\]
-   \[total number of pending pledges\]
-   \[total number of invalid pledges\]
-   \[total number of cancelled pledges\]
-   \[total number of direct debit pledges\]
-   \[total number of pledges with successful instant payments\]
-   \[total number of credit card pledges\]
-   \[amount sum\]
-   \[amount average\]
-   \[condition\]
-   \[active filter set\]
-   \[campaign name\]
-   \[campaign charity name\]
-   \[account name\]
-   \[schema name\]
-   \[file download link\]
-   \[link expiry date and time\]
-   \[signature download link\]
-   \[photograph download link\]
-   \[form pdf download link\]
-   \[call recording download link\]

*4.4 Output Destination (*Upload to SFTP and notify by email) or Upload
to S3 and send secure download link by email).  If you select SFTP,
additional options will appear to allow you to also export signatures,
call recordings, form PDFs (i..e SEPA) and photographs.

*4.5 Signature File Name Template /* *Photograph File Name Template /*
*Form PDF File Name Template /* *Call Recording File Name Template*
(these allow you modify the default file name format for each of these
exports). For example [{{ pledge.supporter_lastname }}\_{{
pledge.supporter_firstname }}\_{{ pledge.created_at \| date: \"%Y%m%d\"
}}.png]{style="color: #e01e5a; font-family: Monaco, Menlo, Consolas, 'Courier New', monospace; font-size: 12px; font-style: normal; font-variant-ligatures: none; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: left; text-indent: 0px; text-transform: none; white-space: pre-wrap; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgba(29, 28, 29, 0.04); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; display: inline !important; float: none;"}
as a file name will output something like
[doe_john_20190812.png]{style="color: #e01e5a; font-family: Monaco, Menlo, Consolas, 'Courier New', monospace; font-size: 12px; font-style: normal; font-variant-ligatures: none; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: left; text-indent: 0px; text-transform: none; white-space: pre-wrap; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgba(29, 28, 29, 0.04); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; display: inline !important; float: none;"}
and `{{ pledge.id }}_signature_{{ office.name }}.jpg`{.c-mrkdwn__code
style="box-sizing: inherit; padding: 2px 3px 1px; border: 1px solid var(--saf-0); border-radius: 3px; background-color: rgba(var(--sk_foreground_min,29,28,29),0.04); color: #e01e5a; --saf-0: rgba(var(--sk_foreground_low,29,28,29),0.13); font-size: 12px; line-height: 1.50001; font-variant-ligatures: none; white-space: pre-wrap; overflow-wrap: break-word; word-break: normal; tab-size: 4; font-family: Monaco, Menlo, Consolas, 'Courier New', monospace !important; font-style: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: left; text-indent: 0px; text-transform: none; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;"
stringify-type="code"}[ would output something
like ]{style="color: #1d1c1d; font-family: Slack-Lato, appleLogo, sans-serif; font-size: 15px; font-style: normal; font-variant-ligatures: common-ligatures; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: left; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: #f8f8f8; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; display: inline !important; float: none;"}`9876543_signature_London.jpg`{.c-mrkdwn__code
style="box-sizing: inherit; padding: 2px 3px 1px; border: 1px solid var(--saf-0); border-radius: 3px; background-color: rgba(var(--sk_foreground_min,29,28,29),0.04); color: #e01e5a; --saf-0: rgba(var(--sk_foreground_low,29,28,29),0.13); font-size: 12px; line-height: 1.50001; font-variant-ligatures: none; white-space: pre-wrap; overflow-wrap: break-word; word-break: normal; tab-size: 4; font-family: Monaco, Menlo, Consolas, 'Courier New', monospace !important; font-style: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: left; text-indent: 0px; text-transform: none; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;"
stringify-type="code"}.\
\
For more information about liquid templates see
<https://shopify.github.io/liquid/tags/iteration/>\
Notes: You can only change the file type if they are compatible e.g. png
and jpg. The files will still be exported in a zip file. Only the
filenames inside the zip file will change, and not the name of the
containing folder.

**Note -** through <https://github.com/waysact/evergiving/issues/8873>
transliterate is now available (see
<https://api.rubyonrails.org/classes/ActiveSupport/Inflector.html#method-i-transliterate>)\
\
It is possible to add a lot of information in the filename using liquid
template. Below the list of elements available:\
**Pledge ** account_id, account_type, amount, anonymised, approved_date,
automatic_export_trigger, bank_validation, campaign_id,
cancelled_reason, child_gender, child_name, child_name_and_gender,
child_profile_number, child_region, child_selection, child_sponsorship,
consumer_price_index, contact_consents, contact_preferences, created_at,
credit_card_bin, credit_card_failed_validations, credit_card_uuid,
currency_locale, custom_1, custom_2, custom_3, custom_4, custom_5,
debit_communications, debit_tax, delivery_status,
direct_debit_account_number, direct_debit_bsb,
direct_debit_failed_validations, direct_debit_financial_institution,
direct_debit_iban, direct_debit_iban_details, direct_debit_name,
direct_debit_swift, direct_debit_swift_details, direct_debit_type,
direct_debit_validation_status, export_reference_number,
exported_high_security_at, exported_low_security_at,
external_reference_number, flagged_address, fundraiser_code,
fundraiser_score, gift_aid, gifts, global_version,
has_valid_direct_debit, have_heard_of, highsec_export_error, id,
id_type_sighted, interested_in_volunteering, is_lead, latitude,
location, location_type, longitude, lowsec_export_error, mob_phone,
mothership_validation_contact_made, mothership_validation_detail_by,
mothership_validation_detail_comment, mothership_validation_detail_date,
mothership_validation_outcome_id, override_reporting_week, payment_day,
payment_gateway_token, payment_method, payment_month, payments_count,
personal_identification_number, phone,
pledge.per_campaign_serial_number_formatted, pledge.team.event_names,
prefers_email_updates, receive_communication, regular_giving,
reporting_week, reporting_week_year,
share_details_with_other_organisations, shopping_centre, start_date,
state, supporter_age_at_creation, supporter_dob, supporter_email,
supporter_firstname, supporter_gender, supporter_incomes,
supporter_interested_in, supporter_language, supporter_lastname,
supporter_pref_comms, supporter_profession, supporter_title, survey,
team_id, team_leader_code, team_manager_code, tied_funding,
transaction_type, unique_identifier, updated_at, user_id,
validation_contact_made, validation_detail_by,
validation_detail_comment, validation_detail_date,
validation_outcome_id, work_phone, comments

**Campaign** account_id, active, allow_instant_payments,
allow_prepaid_cards, alternative_languages, amount_pledges,
append_export_reference_prefix_to_export_filename,
attach_sepa_receipt_to_welcome_email, auto_export_cron_custom_lowsec,
auto_export_cron_highsec, auto_export_query_custom_lowsec,
auto_export_query_highsec, auto_export_sftp_custom_lowsec,
auto_export_sftp_highsec, avoid_stalkers, charity,
child_regions_set_name, contact_preferences_options, country,
created_at, custom_1_set_name, custom_2_set_name, custom_3_set_name,
custom_4_set_name, custom_5_set_name, custom_css,
custom_high_security_triage_processor, donation_monthly_debit_day,
enable_add_another_button, enable_child_selection_form,
enable_human_filename, enable_sftp_export, enable_supporter_photo,
enable_terms_and_conditions, end_date, export_filename_prefix,
export_notification_recipient, export_reference_prefix,
exporter_klass_name, fundraisers_called, gpg_key_recipient,
gpg_public_key, human_filename_format, id, id_types_set_name,
incomes_set_name, interests_set_name, invoicing_account_id,
is_lead_campaign, last_auto_export_custom_lowsec,
last_auto_export_highsec, locale, location_types_set_name,
lock_form_with_signature, lowsec_exporter_klass_name,
lowsec_exporter_klass_name_2, lowsec_exporter_klass_name_3,
lowsec_exporter_klass_name_4, name,
other_payment_type_validation_outcome_id, padding, payment_gateway_id,
professions_set_name, regular_giving_sms_id, run_all_high_sec_exporters,
scheduled_anonymisation_enabled, send_sms_after, sepa_id, sftp_host,
sftp_path, sftp_port, sftp_username, shopping_centres_set_name,
signature_export_format, sms_send_as_unicode, sms_sender, start_date,
title_salutations_set_name, transaction_approved_outcome_id,
transaction_declined_outcome_id, transaction_none_outcome_id,
transaction_types, updated_at, validate_card_with_authvoid,
void_validation_outcome_id, workflow, workflow_validation_outcome_id,
anonymise_older_than_months

**Team** campaign_id, campaign_manager_id, created_at, from_date, id,
interaction_category_id, leadname, respawn, pledge.team.event_names,
status, time_zone, to_date, updated_at, office_id

**User** account_id, account_main_admin, active,
can_only_view_campaign_id, created_at, disable_pledge_edit, email,
first_name, id, last_name, level, manager_id, office_id, phone,
ui_locale, updated_at, user_code, username, form_constraints

**Office** account_id, created_at, id, name, ui_locale, updated_at

::: {style="color: transparent; position: absolute; white-space: pre; cursor: text; transform-origin: 0px 0px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; left: 113.625px; top: 870.638px; font-size: 13.5px; font-family: monospace; transform: scaleX(0.999837);"}
{{ pledge.supporter_lastname }}\_{{ pledge.supporter_firstname }}\_{{
pledge.created_at \|
:::

::: {style="color: transparent; position: absolute; white-space: pre; cursor: text; transform-origin: 0px 0px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; left: 113.625px; top: 888.188px; font-size: 13.5px; font-family: monospace; transform: scaleX(0.999837);"}
date: \"%Y%m%d\" }}.png
:::

::: {style="color: transparent; position: absolute; white-space: pre; cursor: text; transform-origin: 0px 0px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; left: 113.625px; top: 870.638px; font-size: 13.5px; font-family: monospace; transform: scaleX(0.999837);"}
{{ pledge.supporter_lastname }}\_{{ pledge.supporter_firstname }}\_{{
pledge.created_at \|
:::

::: {style="color: transparent; position: absolute; white-space: pre; cursor: text; transform-origin: 0px 0px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; left: 113.625px; top: 888.188px; font-size: 13.5px; font-family: monospace; transform: scaleX(0.999837);"}
date: \"%Y%m%d\" }}.png
:::

 

**5. Export Encryption**

![ExportEncyrption.png](https://support.waysact.com/hc/article_attachments/4404363194127/ExportEncyrption.png)

The Encrypt for Recipient drop list displays all the GPG keys uploaded
to Account -\> GPG Keys.

If you want to export credit card numbers, you need to first add a GPG
key and save that change before the \"Card Number - full plain text
PAN\" source will become available. Without an encryption key you can
only export the Display Card i.e. 413373XXXXXX1234.

 

**6. Export Filter**

![ExportFilter.png](https://support.waysact.com/hc/article_attachments/4404348733583/ExportFilter.png)

Add filters to control the type of pledges allowed to be exported with
this schema. The ActiveRecord isn\'t really needed now, only in rare
cases where the export needs are so complex that the standard filters
won\'t meet the full requirements.

 

**7. Export
Schedule![ExportSchedule.png](https://support.waysact.com/hc/article_attachments/4404348745615/ExportSchedule.png)**

You can set an export to run automatically so the customer doesn\'t need
to manually export. If you do this, it is mandatory to add a filter to
the export. It is advisable in automated exports to add a filter to only
allow through pledges that have not previously been exported with that
schema. This means the charity will only receive each pledge once and
prevents duplications. Most customers will be using the calendar based
schedule but Super Admins can add a cron expression to schedule an
automatic export (e.g *0 11 \* \* 1-5* to run the export only on
weekdays at 11am). The CRON scheduler run on the account's time zone.
[http://crontab.guru/examples.html](http://crontab.guru/examples.html){target="_blank"
rel="noopener"}.

** **

**8. Schema builder**

**![Schema.png](https://support.waysact.com/hc/article_attachments/4404348841231/Schema.png)**

For each column in the schema you will see the above fields. Directly
below you will see a series of buttons whic[h are: Add a new column,
Delete column, Move column left, Move column right, Copy column, Paste
column, Bulk import column header names from a CSV file (you can import
a CSV file containing the headers and the descriptions of the columns.
CSV text should use comma as field separator, newline as record
separator and double quotes for quoting. Only the first one or two lines
of CSV text will be used, subsequent lines are ignored. The first line
defines the column names. The second line, if present, contains a
description for each column), Toggle View (the table view shows you a
live preview of the output, displayed as a simple table - only available
for CSV exports). ]{.wysiwyg-color-black} [\
]{.wysiwyg-color-blue}

### [Source]{.wysiwyg-color-black}

[Use this setting to select the data source for this column - it can be
one of the following:]{.wysiwyg-color-black}

-   [a *data source* (an attribute of the pledge, the row number, or the
    export timestamp)]{.wysiwyg-color-black}
-   [a *column source*, in which case the output of another column is
    used as the input for this column.]{.wysiwyg-color-black}
-   [*JavaScript*. Columns of this type are populated with the return
    value of a JavaScript snippet. The editor uses JSHint to validate
    your JavaScript code. Any issues it finds will be flagged by a
    warning right under the line that contains the problem. The editor
    supports auto-completion. Press \"ctrl+space\" to complete, if there
    is only one possible completion, or bring up a list of completions
    otherwise.\
    ]{.wysiwyg-color-black}

### [Add Transformation]{.wysiwyg-color-black}

[Unless the column source is set to *JavaScript*, you will see the *Add
Transformation* option which is a dropdown menu with a list of
transformations, all of which are described in detail below. Select a
transformation to add it to the list of transformations. 
]{.wysiwyg-color-black}[]{.wysiwyg-color-black}

[You can still apply transformations with mismatching type (i.e. format
date on a text field), but the results most likely won't be useful.
Mismatched transformations have an orange warning sign next to them.
Hover over it with your mouse to see what the problem is. You can also
reorder transformations using drag-and-drop.]{.wysiwyg-color-black}

Transformations can :

-   change how the data is displayed (*Convert to Uppercase*, *Convert
    to Lowercase*, *Convert to Title Case*). 
-   add a string to the Source (*Append String* or *Prepend String*) -
    for example to append/prepend an agency reference or code to the
    Pledge ID. Just as with other text input fields, if the string
    begins and ends with a double quote, it is interpreted as a JSON
    string -- in short, it can contain escape sequences for newlines,
    tab characters, unicode characters, and so on. Note that any leading
    and trailing whitespace characters are stripped from the string
    unless it is quoted.
-   add a Source to another Source (*Append Source* or *Prepend
    Source*) - for example, to join a supporter's first and last name.
-   map data (*Map*). This transformation lets you apply a mapping to
    the source value. For each pair of values in the mapping table
    displayed when you add this transformation, if the source value
    matches the value in the first column it will be replaced by the
    value in the second column. If you enable the \`Keep the original
    value\` option, if the data doesn\'t match any of the values in the
    mapping table, the original value will be exported. If you use the
    \"Replace with\" option, you set a replacement value that should be
    used when the source value doesn't match any of the mappings. If the
    Original Value option is disabled and there is no replacement for a
    source value then it will be left as-is. Just as with other text
    input fields, if any string in the mapping table begins and ends
    with a double quote it is interpreted as a JSON string.
-   format data : *Format Number* (takes a number and formats it as a
    string using the numeral.js library), *Format Date* (takes a date
    and formats it as a string using the moment.js library - see
    <https://momentjs.com/docs/#/displaying/>), *Convert to Time Zone*
    (converts the data to the given time zone. You can either select a
    constant time zone, or the team's or account's time zone), *Replace
    Regexp* (applies a regular expression to it, then replaces the match
    with the given string). *Round* (rounds up the value which must be a
    number. Midway values are always rounded up. For example, the value
    23.5 becomes 24, and −23.5 is rounded to −23.). *Pad Left* (adds the
    given padding string at the left side of the source string until the
    minimum string length has been reached).
-   Changes dates - *Add Days to Date* (takes a date and advances it by
    the given number of days. For example, using this transformation
    with the number 1 sets the date to the following day ("tomorrow")
    and the number -1 sets the date to the previous day. It returns the
    new date) or *Advance to Month* (takes a date and advances it until
    the first day of the month given by the selected source,
    incrementing the year by one if necessary). The source must yield a
    number between 1 (for January) and 12 (for December). Behaviour is
    currently undefined if the number is outside this range (no error is
    raised). Note that if the date is already on the first of the given
    month then it will be left unchanged. Use the Add Days to Date
    transformation if this behaviour is not desired. *Advance to Day of
    Month* (takes a date and advances it until the day of the month
    given by the selected source, incrementing the month (and possibly
    the year) by one if necessary. If the given value is too large it
    will be set to the last day in the month. For example, if the value
    is 40 and the month is February in a leap year, the day of month
    will be set to the 29th. Note that if the date is already on the
    given day of month then it will be left unchanged. Use the Add Days
    to Date transformation if this behaviour is not desired).
-   Changes phone numbers - *Format Phone Number* (uses Google's
    libphonenumber to format phone numbers. It should be applied to a
    phone number source. libphonenumber is pretty smart about handling
    numbers so there should be no need for prior massaging of the input
    phone numbers in any way. For example, it's fine if the number
    contains spaces, dashes or parentheses. Use the Source for Country
    Code argument to choose the country that should be used when
    interpreting the phone number. It defaults to the country of the
    supporter's primary address. Note that his is only used for phone
    numbers that don't include a country code. The source selected must
    contain a ISO_3166-1 alpha-2 country code, not a country name. The
    Format drop-down box lets you select how the phone number should be
    formatted. National prints the number as it would be dialed from
    another phone in the same country. International prints the number
    with international country prefix. E.164 prints the number in the
    E.164 standardized format. Mobile Dialing prints the number as it
    should be dialed from a mobile phone. Number type doesn't format the
    phone number, instead it outputs the phone number's type as
    determined by libphonenumber: one of FIXED_LINE, MOBILE,
    FIXED_LINE_OR_MOBILE, TOLL_FREE, PREMIUM_RATE, SHARED_COST, VOIP,
    PERSONAL_NUMBER, PAGER, UAN, VOICEMAIL, or UNKNOWN. If the Filter
    Invalid checkbox is unchecked, a best effort is made to format
    numbers even when they are invalid (e.g. too short). If it is
    checked, invalid numbers are instead replaced by a string Invalid:
    \<reason\>, where \<reason\> is one of +INVALID_COUNTRY_CODE,
    TOO_SHORT, TOO_LONG, and NOT_A_NUMBER. What does IS_POSSIBLE mean,
    you ask? It means that there is nothing obviously wrong with the
    number: it's not too short or too long, for example. But through
    validation checking has determined that it's not a valid number
    after all. For example, it could mean that while at first glance the
    number is long enough, a number starting with certain digits needs
    to be longer.
-   Conditional display of data - *Set Blank unless Source equals* (this
    transformation looks at a given source and compares it to a given
    value. If the source matches the comparison value, the
    transformation does nothing. If the source doesn't match the
    comparison value, the transformation sets the column blank). *Set
    Blank if Source matches* (looks at a given source and tries to match
    it against a given regular expression. If the source matches the
    regular expression, the transformation sets the current column
    blank. If it doesn't match then the transformation does nothing).
    *Set Blank if equal to Source* (looks at a given source and compares
    it to the value in the current column. If the values are identical,
    the current column is set blank. If the values are different then
    the transformation does nothing. *Use Source if Blank* (uses the
    given source if the column source (perhaps after transformations) is
    blank. *Set Blank if Source Blank* (sets the current column value to
    blank if the given source is blank).

New transformations added in 2022 `Force numeric data`{.notranslate},
`Force boolean data`{.notranslate}, `Force string data`{.notranslate}
for ensuring a column outputs as the given data type and
`Validate with JSON Schema`{.notranslate} to validate the column output
against a given JSON schema. Failed validations will reveal the actual
data type in the error message.

### [Title]{.wysiwyg-color-black}

[The title / column name that will appear in the export.
]{.wysiwyg-color-black}[If left blank, the name of the Source will be
exported as title. ]{.wysiwyg-color-black}[]{.wysiwyg-color-black}

### [Comment]{.wysiwyg-color-black}

[Enter a comment for the column. It can be really useful to share
information about the data requirements for that column, or to record
other useful information. It isn\'t included in the export file the
customer receives.\
]{.wysiwyg-color-black}

### [Hide Column in Output ]{.wysiwyg-color-black}

[When enabled, the selected column will not be included in the export
file. Use cases are to create a hidden column is so that it can be used
as a source for other columns or to cross check transformations used on
other columns.]{.wysiwyg-color-black}

### [Additional options ]{.wysiwyg-color-black}

[In addition, for CSV exports you will see an additional feature
\`Always quote this column in CSV output\`. When enabled, CSV fields
corresponding to the selected column will always be quoted, even if
quoting would otherwise be unnecessary (because the data doesn't contain
spaces or any other special character.)]{.wysiwyg-color-black}

[For XLS exports you will see an additional feature \`Cell format\`.
Most data will display in Excel with the cell format \"General\". To
have the data export in a different format, put the @ symbol in the Cell
Format column to have the data in Text format or put a 0 in the Cell
Format column to have the data in Number format. The Transformation
feature available in all exports changes the actual values in the
column, turning them into string values. The Cell Format, on the other
hand, leaves the values untouched. For example, if you used the *Format
Number* transformation, you could no longer use the number in an Excel
formula to add some amount to it (because it would actually be a string,
not a number). But using cell format, the number is still a number and
can be used in calculations. You can also add a date format like
DD/MM/YYYY in the cell format field, although this causes an error in
the preview so the preferable setup might be adding Date in the Cell
Format field and using the transformation to set the date format.\
]{.wysiwyg-color-black}

[The \`Cell Type\` feature is only available for columns with the Source
Javascript in exports with the Output Type XLS. It specifies the Excel
Cell Format to use for this column.]{.wysiwyg-color-black}
[]{.wysiwyg-color-blue}
