# Creating and exporting SEPA

SEPA is a PDF export that exports information about the charity, the
donor and the signature file in one PDF. It is a requirement in some EU
countries but can be used in all locales. The SEPA is configured in the
campaign setup - you\'ll see \"Attach sepa receipt to welcome email\"
and if the SEPA has been created as a hard coded class, you\'ll see an
option \"SEPA Document Klass Name\*\". Only hard code a SEPA if you
can\'t get what you need through the standard fields.

When \"Attach sepa receipt to welcome email\" is selected a new section
at the very bottom of the campaign setup will appear \"SEPA
Configuration\". Here you control the text and images that appear on the
SEPA.

SEPA merge fields can be found
<https://github.com/waysact/waysact/blob/25cdc3c9bcd50cd7b517fea9e0827ef7f28b01f4/spec/models/sepa_spec.rb>.
The external reference number is now available as a merge field, as is
{PIN_UNMASKED} where the placeholder {PIN} is in plaint text as opposed
to masked where the PIN is replaced by \*\*\*\*.  Custom Components are
also available through
<https://github.com/waysact/evergiving/issues/8799> and
<https://github.com/waysact/evergiving/issues/8831>. The current
placeholder {DOB} has the format DD/MM/YYYY. The following formats can
be used in `Welcome Email` and `SEPAs` for **PLEDGE_CREATION_DATE** and
**START_DATE** placeholders:

dmy: \'%d/%m/%Y\',\
dmy_short: \'%d/%m/%y\',\
dmy_dashes: \'%d-%m-%Y\',\
dmy_dots: \'%d.%m.%Y\',\
dmy_without: \'%d%m%Y\',\
dmy_short_wo: \'%d%m%y\',\
dmyhm: \'%d/%m/%Y %H:%M\',\
dmyhms: \'%d/%m/%Y %H:%M:%S\',\
dmy_short_hms: \'%d/%m/%y %H:%M:%S\',\
dmyhms_dashes: \'%d-%m-%Y %H:%M\',\
dby: \'%d/%b/%Y\',\
dby_dashes: \'%d-%b-%Y\',\
mdy: \'%m/%d/%Y\',\
mdy_dashes: \'%m-%d-%Y\',\
mdy_without: \'%m%d%Y\',\
hm: \'%H:%M\',\
hms: \'%H:%M:%S\',\
yyyymmdd: \'%Y%m%d\',\
ymd: \'%Y/%m/%d\',\
ymd_without: \'%Y%m%d\',\
ymd_short_wo: \'%y%m%d\',\
ymd_dashes: \'%Y-%m-%d\',\
approx_iso8601: \'%Y-%m-%dT%H:00:00\',\
dby_short_dashes: \'%d-%b-%y\',\
a: \'%a\',\
B: \'%B\'

Examples:

{DOB(YMD)} -\> 1990/04/15\
{DOB(DMY)} -\> 15/04/1990\
{DOB(YMD_DASHES)} -\> 1990-04-15\
{DOB(DMY_DASHES)} -\> 15-04-1990\
{DOB(YYYYMMDD)} -\> 19900415

{DOB(DBY_SHORT_DASHES)} -\> 28-Jan-22\
{DOB(A)} -\> Fri\
{DOB(B)} -\> January

 

An example of a SEPA setup
[https://waysact.me/admin/campaigns/2219/edit](https://waysact.me/admin/campaigns/2219/edit){.c-link
style="box-sizing: inherit; color: rgba(var(--sk_highlight_hover,11,76,140),1); text-decoration: underline; font-family: Slack-Lato, appleLogo, sans-serif; font-size: 15px; font-style: normal; font-variant-ligatures: common-ligatures; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: left; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: #f8f8f8;"
target="_blank" rel="noopener noreferrer" sk="tooltip_parent"} and an
example of the SEPA and some of the requirements can be found here
<https://drive.google.com/file/d/1Nw7vWY3HnJXC_dRgnl5fzyP-GEI5B7Bp/view?usp=sharing>.

If you use the SEPA Statements export option in the old export menu,
you\'ll get the default SEPA - if you want the hard coded SEPA, in the
schema builder Export Destination section, you can add merge fields into
the email body for the PDFs: \[form pdf download link\] and \[form pdf
filename\]. If the export is being sent to a SFTP, you\'ll see the field
\"Form PDF File Name Template\".

**Notes:**

-   The length of the text determine the pagination in the exported PFD
    and we don\'t have control over it. The text centres in the page and
    there is a large margin at the top and bottom of the page.[ if you
    need something cleaner, the devs can create a PDF class. 
    ]{style="color: #1d1c1d; font-family: Slack-Lato, appleLogo, sans-serif; font-size: 15px; font-style: normal; font-variant-ligatures: common-ligatures; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: left; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: #f8f8f8; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; display: inline !important; float: none;"}
-   **[[There\'s some logic in the code to set to \"Yes\" or \"No\" when
    checkboxes are used, instead of exporting the value selected on the
    form.
    ]{style="color: #1d1c1d; font-family: Slack-Lato, appleLogo, sans-serif; font-size: 15px; font-style: normal; font-variant-ligatures: common-ligatures; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: left; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: #f8f8f8; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; display: inline !important; float: none;"}]{style="color: #1d1c1d; font-family: Slack-Lato, appleLogo, sans-serif; font-size: 15px; font-style: normal; font-variant-ligatures: common-ligatures; font-variant-caps: normal; letter-spacing: normal; text-align: left; text-indent: 0px; text-transform: none; white-space: normal; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: #f8f8f8; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; display: inline !important; float: none;"}**
-   **[[You can upload an image as footer in the standard sepa as well.
    You can't choose where in the footer it will be shown and you can't
    choose the size but it avoids the custom development of an PDF
    class.\
    ]{style="color: #1d1c1d; font-family: Slack-Lato, appleLogo, sans-serif; font-size: 15px; font-style: normal; font-variant-ligatures: common-ligatures; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: left; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: #f8f8f8; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; display: inline !important; float: none;"}]{style="color: #1d1c1d; font-family: Slack-Lato, appleLogo, sans-serif; font-size: 15px; font-style: normal; font-variant-ligatures: common-ligatures; font-variant-caps: normal; letter-spacing: normal; text-align: left; text-indent: 0px; text-transform: none; white-space: normal; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: #f8f8f8; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; display: inline !important; float: none;"}**
-   **[[You can export the SEPA PDFs to Salesforce (see Amnesty
    International France\'s setup) and the PDF is attached as a document
    on the donor's profile. You will need developer assistance
    <https://github.com/waysact/evergiving/issues/5862>
    ]{style="color: #1d1c1d; font-family: Slack-Lato, appleLogo, sans-serif; font-size: 15px; font-style: normal; font-variant-ligatures: common-ligatures; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: left; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: #f8f8f8; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; display: inline !important; float: none;"}]{style="color: #1d1c1d; font-family: Slack-Lato, appleLogo, sans-serif; font-size: 15px; font-style: normal; font-variant-ligatures: common-ligatures; font-variant-caps: normal; letter-spacing: normal; text-align: left; text-indent: 0px; text-transform: none; white-space: normal; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: #f8f8f8; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; display: inline !important; float: none;"}**
