# Emails - Merge Fields

 

The email merge fields differ slightly between welcome emails and lead
emails, and only a few specific merge fields are available for the lead
emails.

 

+-------------+-------------+-------------+-------------+-------------+
| FIELD       | DETAILS     | COMPONENT   | EXAMPLE     | EMAIL TYPE  |
|             |             |             | OUTPUT      |             |
+-------------+-------------+-------------+-------------+-------------+
| {{ACC       | Donor bank  | Account     | John Lund   | Welcome     |
| OUNT_NAME}} | acc         | name        |             |             |
|             | ount/credit |             |             |             |
|             | card name   |             |             |             |
+-------------+-------------+-------------+-------------+-------------+
| {{          | Last 4      | Account     | 4321        | Welcome     |
| ACCOUNT_NUM | digits of   | number      |             |             |
| BER_LAST4}} | the account |             |             |             |
|             | number      |             |             |             |
+-------------+-------------+-------------+-------------+-------------+
| {{AC        | Bank sort   | BSB         | 123456789   | Welcome     |
| COUNT_BSB}} | c           |             |             |             |
|             | ode/routing |             |             |             |
|             | number      |             |             |             |
+-------------+-------------+-------------+-------------+-------------+
| {{ADDRESS}} | Donor       | Address1    | 3100 San    | Welcome /   |
|             | address     |             | Pablo Ave.  | Lead        |
|             | line 1      |             | BERKELEY CA |             |
|             |             |             | 94702.      |             |
+-------------+-------------+-------------+-------------+-------------+
| {{AG        | AGENT first | Agent       | John        | Lead        |
| ENT_FIRST}} | name        |             |             |             |
+-------------+-------------+-------------+-------------+-------------+
| {{CARD_NUM  | Last 4      | Account     | 3765        | Welcome     |
| BER_LAST4}} | digits of   | number      |             |             |
|             | the credit  |             |             |             |
|             | card number |             |             |             |
+-------------+-------------+-------------+-------------+-------------+
| {{CARD_EX   | Credit card |             | 12/2022     | Welcome     |
| PIRY_DATE}} | expiry      |             |             |             |
|             | date:       |             |             |             |
|             | {MM/YYYY}   |             |             |             |
+-------------+-------------+-------------+-------------+-------------+
| {{CLEAR_N   | Custom      | N/A         | N/A         | Welcome     |
| AS_PAYDAY}} | er-specific |             |             |             |
+-------------+-------------+-------------+-------------+-------------+
| {{          | Child age   | Child       | 2-Apr       | Welcome     |
| CHILD_AGE}} |             | Selection   |             |             |
+-------------+-------------+-------------+-------------+-------------+
| {{C         | Child Code  |             | 12345       | Welcome     |
| HILD_CODE}} |             |             |             |             |
+-------------+-------------+-------------+-------------+-------------+
| {{CHI       | Child       | Child       | Haiti       | Welcome     |
| LD_REGION}} | region      | Selection   |             |             |
+-------------+-------------+-------------+-------------+-------------+
| {{CH        | Child photo | Child       | \<image\>   | Welcome     |
| ILD_PHOTO}} |             | Selection   |             |             |
+-------------+-------------+-------------+-------------+-------------+
| {{C         | Child Name  | Child Name  | Jane Bloggs | Welcome     |
| HILD_NAME}} |             |             |             |             |
+-------------+-------------+-------------+-------------+-------------+
| {{C         | First name  |             | Jane        | Welcome     |
| HILDRENS_FI |             |             |             |             |
| RST_NAMES}} |             |             |             |             |
+-------------+-------------+-------------+-------------+-------------+
| {{CLEAR_N   | Custom      |             |             | Welcome     |
| AS_PAYDAY}} | er-specific |             |             |             |
+-------------+-------------+-------------+-------------+-------------+
| {{CONTA     | Contact     |             | Yes or No   | Welcome     |
| CT_PREFEREN | Preference  |             | depending   |             |
| CE_EMAIL}}\ |             |             | on value    |             |
| \           |             |             | selected on |             |
|             |             |             | form        |             |
+-------------+-------------+-------------+-------------+-------------+
| {{CONT      | Contact     |             | Yes or No   | Welcome     |
| ACT_PREFERE | Preference  |             | depending   |             |
| NCE_MAIL}}\ |             |             | on value    |             |
| \           |             |             | selected on |             |
|             |             |             | form        |             |
+-------------+-------------+-------------+-------------+-------------+
| {{CONTA     | Contact     |             | Yes or No   | Welcome     |
| CT_PREFEREN | Preference  |             | depending   |             |
| CE_PHONE}}\ |             |             | on value    |             |
| \           |             |             | selected on |             |
|             |             |             | form        |             |
+-------------+-------------+-------------+-------------+-------------+
| {{CO        | Contact     |             | Yes or No   | Welcome     |
| NTACT_PREFE | Preference  |             | depending   |             |
| RENCE_SMS}} |             |             | on value    |             |
|             |             |             | selected on |             |
|             |             |             | form        |             |
+-------------+-------------+-------------+-------------+-------------+
| {           | Individual  | Custom      |             | Welcome     |
| {CUSTOM_1}} | merge       | Components  |             |             |
|             | fields for  | 1-5         |             |             |
| {           | Custom      |             |             |             |
| {CUSTOM_2}} | fields      |             |             |             |
|             |             |             |             |             |
| {           |             |             |             |             |
| {CUSTOM_3}} |             |             |             |             |
|             |             |             |             |             |
| {           |             |             |             |             |
| {CUSTOM_4}} |             |             |             |             |
|             |             |             |             |             |
| {           |             |             |             |             |
| {CUSTOM_5}} |             |             |             |             |
+-------------+-------------+-------------+-------------+-------------+
| {{C         | if your     | Custom      |             | Welcome     |
| USTOM_TAG}} | custom      | Input       |             |             |
|             | input tag   |             |             |             |
|             | is xxx you  |             |             |             |
|             | can use the |             |             |             |
|             | placeholder |             |             |             |
|             | CUSTOM_xxx  |             |             |             |
|             | and it will |             |             |             |
|             | be replaced |             |             |             |
|             | by the      |             |             |             |
|             | value of    |             |             |             |
|             | that custom |             |             |             |
|             | input i.e.  |             |             |             |
|             | {{C         |             |             |             |
|             | USTOM_Yes}} |             |             |             |
|             | would send  |             |             |             |
|             | if Yes was  |             |             |             |
|             | the tag on  |             |             |             |
|             | the custom  |             |             |             |
|             | input field |             |             |             |
+-------------+-------------+-------------+-------------+-------------+
| {{CONS      |             |             |             | Welcome     |
| ENT_PHONE}} |             |             |             |             |
+-------------+-------------+-------------+-------------+-------------+
| {{CON       |             |             |             | Welcome     |
| SENT_POST}} |             |             |             |             |
+-------------+-------------+-------------+-------------+-------------+
| {{CO        |             |             |             | Welcome     |
| NSENT_SMS}} |             |             |             |             |
+-------------+-------------+-------------+-------------+-------------+
| {{CONSE     |             |             |             | Welcome     |
| NT_MOBILE}} |             |             |             |             |
+-------------+-------------+-------------+-------------+-------------+
| {{CONS      |             |             |             | Welcome     |
| ENT_EMAIL}} |             |             |             |             |
+-------------+-------------+-------------+-------------+-------------+
| {{DIGITAL   | URL of      |             |             | Digital     |
| _FORM_URL}} | digital     |             |             |             |
|             | form        |             |             |             |
+-------------+-------------+-------------+-------------+-------------+
| {{DOB}}     | Donor date  | Date of     | 01/31/1950  | Welcome /   |
|             | of birth    | birth       |             | Lead        |
|             | (           |             |             |             |
|             | DD/MM/YYYY) |             |             |             |
+-------------+-------------+-------------+-------------+-------------+
| {{DONATI    | Amount      | Amount      | 25          | Welcome     |
| ON_AMOUNT}} | donated     |             |             |             |
+-------------+-------------+-------------+-------------+-------------+
| {{EMAI      | Donor email | eMail       | <test@w     | Welcome /   |
| L_ADDRESS}} | address     |             | aysact.com> | Lead        |
+-------------+-------------+-------------+-------------+-------------+
| {{F         | Donor first | First name  | John        | Welcome /   |
| IRST_NAME}} | name        |             |             | Lead        |
+-------------+-------------+-------------+-------------+-------------+
| {{F         | Financial   |             |             | Welcome     |
| INANCIAL_IN | Institution |             |             |             |
| STITUTION}} |             |             |             |             |
+-------------+-------------+-------------+-------------+-------------+
| {{F         | Fundraiser  | N/A         | Herman      | Welcome     |
| UNDRAISER}} | full name   |             | Jones       |             |
+-------------+-------------+-------------+-------------+-------------+
| {FUNDRAI    | Fu          | N/A         | Herman      | Welcome     |
| SER_FIRST}} | ndraiser\'s |             |             |             |
|             | first name  |             |             |             |
+-------------+-------------+-------------+-------------+-------------+
| {{FUNDRA    | Fundraiser  |             |             | Welcome     |
| ISER_CODE}} | Code        |             |             |             |
+-------------+-------------+-------------+-------------+-------------+
| {{FUL       | Donor       | Address     | 3100 San    | Welcome     |
| L_ADDRESS}} | complete    |             | Pablo Ave.  |             |
|             | address     |             | Apt 2       |             |
|             |             |             | BERKELEY CA |             |
|             |             |             | 94702       |             |
+-------------+-------------+-------------+-------------+-------------+
| {           | Donor Gift  | Gift Aid    | Yes         | Welcome     |
| {GIFT_AID}} | Aid         |             |             |             |
|             | ackn        |             |             |             |
|             | owledgement |             |             |             |
+-------------+-------------+-------------+-------------+-------------+
| {{H         | Donor home  | Home phone  | 5           | Welcome /   |
| OME_PHONE}} | phone       |             | 55-555-5555 | Lead        |
+-------------+-------------+-------------+-------------+-------------+
| {{I         | Last 4      | Direct      | 4321        | Welcome     |
| BAN_LAST4}} | digits of   | Debit IBAN  |             |             |
|             | the direct  |             |             |             |
|             | debit IBAN  |             |             |             |
+-------------+-------------+-------------+-------------+-------------+
| {{INTE      | Don         | Interested  | Dogs        | Welcome     |
| RESTED_IN}} | or-selected | In          |             |             |
|             | interests   |             |             |             |
+-------------+-------------+-------------+-------------+-------------+
| {{ID_TYP    |             | ID Type     |             | Welcome     |
| E_SIGHTED}} |             | Sighted     |             |             |
+-------------+-------------+-------------+-------------+-------------+
| {{          | Donor last  | Last name   | Lund        | Welcome     |
| LAST_NAME}} | name        |             |             |             |
+-------------+-------------+-------------+-------------+-------------+
| {           | GPS         | Location    | 38          | Welcome     |
| {LOCATION}} | coordinates |             | .3813934976 |             |
|             | of signup   |             | 656,-122.88 |             |
|             |             |             | 34696589162 |             |
+-------------+-------------+-------------+-------------+-------------+
| {{MOB       | Donor       | Mobile      | 5           | Welcome /   |
| ILE_PHONE}} | mobile      | phone       | 55-555-5555 | Lead        |
|             | phone       |             |             |             |
+-------------+-------------+-------------+-------------+-------------+
| {           | Pledge      | Payment     | 01/25/2016  | Welcome     |
| {NEXT_PAYME | creation    | d           |             |             |
| NT_DAY(n)}} | date + n    | ays/Payment |             |             |
|             | days, then  | month       |             |             |
|             | advance to  |             |             |             |
|             | payment day |             |             |             |
|             | (and        |             |             |             |
|             | payment     |             |             |             |
|             | month if    |             |             |             |
|             | that        |             |             |             |
|             | component   |             |             |             |
|             | is being    |             |             |             |
|             | used) from  |             |             |             |
|             | the new     |             |             |             |
|             | date        |             |             |             |
|             | (           |             |             |             |
|             | DD/MM/YYYY) |             |             |             |
+-------------+-------------+-------------+-------------+-------------+
| {{          | Waysact     | N/A         | 823643      | Welcome     |
| PLEDGE_ID}} | pledge ID   |             |             |             |
+-------------+-------------+-------------+-------------+-------------+
| {{PAYME     | Payment     | Payment     | creditcard  | Welcome     |
| NT_METHOD}} | method      | type        |             |             |
+-------------+-------------+-------------+-------------+-------------+
| {{PA        | Don         | Payment     | 25          | Welcome     |
| YMENT_DAY}} | or-selected | days        |             |             |
|             | payment day |             |             |             |
+-------------+-------------+-------------+-------------+-------------+
| {{          | Pledge      |             | 01/25/2016  | Welcome     |
| PLEDGE_CREA | creation    |             |             |             |
| TION_DATE}} | date        |             | **\* see    |             |
|             |             |             | bottom of   |             |
|             |             |             | page for    |             |
|             |             |             | date        |             |
|             |             |             | formats**   |             |
+-------------+-------------+-------------+-------------+-------------+
| {{PIN}}     |             |             |             |             |
+-------------+-------------+-------------+-------------+-------------+
| {{P         | Profession  |             |             | Welcome     |
| ROFESSION}} |             |             |             |             |
+-------------+-------------+-------------+-------------+-------------+
| {           | Products    | Products    |             | Welcome     |
| {PRODUCTS}} | selected    |             |             |             |
+-------------+-------------+-------------+-------------+-------------+
| {{SECOND    | Secondary   | Secondary   | Ms.         | Welcome     |
| ARY_TITLE}} | person\'s   | Title       |             |             |
|             | title       |             |             |             |
+-------------+-------------+-------------+-------------+-------------+
| {{          | Secondary   | Secondary   | Lisa        | Welcome     |
| SECONDARY_F | person\'s   | First name  |             |             |
| IRST_NAME}} | first name  |             |             |             |
+-------------+-------------+-------------+-------------+-------------+
| {           | Secondary   | Secondary   | Britt       | Welcome     |
| {SECONDARY_ | person\'s   | Last name   |             |             |
| LAST_NAME}} | first name  |             |             |             |
+-------------+-------------+-------------+-------------+-------------+
| {{SECO      | Secondary   | Secondary   | 01/31/1950  | Welcome     |
| NDARY_DOB}} | person\'s   | Date of     |             |             |
|             | date of     | birth       |             |             |
|             | birth       |             |             |             |
|             | (           |             |             |             |
|             | DD/MM/YYYY) |             |             |             |
+-------------+-------------+-------------+-------------+-------------+
| {{SECONDA   | Secondary   | Secondary   |             | Welcome     |
| RY_GENDER}} | person\'s   | Gender      |             |             |
|             | gender      |             |             |             |
+-------------+-------------+-------------+-------------+-------------+
| {           | Signup city |             | Sydney      | Welcome     |
| {SIGNUP_ADD |             |             |             |             |
| RESS_CITY}} |             |             |             |             |
+-------------+-------------+-------------+-------------+-------------+
| {{S         | Start date  | Amount      | 3/12/15     | Welcome     |
| TART_DATE}} | for 4       |             |             |             |
|             | weekly      |             | **\* see    |             |
|             | payment     |             | bottom of   |             |
|             |             |             | page for    |             |
|             |             |             | date        |             |
|             |             |             | formats**   |             |
+-------------+-------------+-------------+-------------+-------------+
| {{SUPPORT   | Supporter   | Income      |             | Welcome     |
| ER_INCOME}} | Income      | component   |             |             |
+-------------+-------------+-------------+-------------+-------------+
| {{SUPPOR    | Track n     |             |             | Welcome     |
| TER_PHOTO}} | Snap photo  |             |             |             |
+-------------+-------------+-------------+-------------+-------------+
| {           | Image of    | N/A         | Note - this | Welcome     |
| {SUPPORTER_ | signed      |             | throws out  |             |
| SIGNATURE}} | signature   |             | the margins |             |
|             | page        |             | of the      |             |
|             |             |             | email so it |             |
|             |             |             | better      |             |
|             |             |             | placed at   |             |
|             |             |             | the end of  |             |
|             |             |             | the table.  |             |
+-------------+-------------+-------------+-------------+-------------+
| {{SWIFT}}   | Swift Code  |             |             | Welcome     |
+-------------+-------------+-------------+-------------+-------------+
| {{TE        |             |             |             | Welcome     |
| AM_METHOD}} |             |             |             |             |
+-------------+-------------+-------------+-------------+-------------+
| {{TEAM_     |             |             |             | Welcome     |
| LOCATIONS}} |             |             |             |             |
+-------------+-------------+-------------+-------------+-------------+
| {{TEAM_ID}} |             |             |             | Welcome     |
+-------------+-------------+-------------+-------------+-------------+
| {{TE        |             |             |             | Welcome     |
| AM_LABELS}} |             |             |             |             |
+-------------+-------------+-------------+-------------+-------------+
| {{TER       | Tertiary    | Date of     | 01/31/1950  | Welcome     |
| TIARY_DOB}} | person\'s   | birth       |             |             |
|             | date of     |             |             |             |
|             | birth       |             |             |             |
|             | (           |             |             |             |
|             | DD/MM/YYYY) |             |             |             |
+-------------+-------------+-------------+-------------+-------------+
| {{TERTIARY_ | Tertiary    | First name  | Goodridge   | Welcome     |
| LAST_NAME}} | person\'s   |             |             |             |
|             | first name  |             |             |             |
+-------------+-------------+-------------+-------------+-------------+
| {           | Tertiary    | First name  | James       | Welcome     |
| {TERTIARY_F | person\'s   |             |             |             |
| IRST_NAME}} | first name  |             |             |             |
+-------------+-------------+-------------+-------------+-------------+
| {{TERTI     | Tertiary    | Tertiary    | Ms          | Welcome     |
| ARY_TITLE}} | person      | Person      |             |             |
|             | title       | Details     |             |             |
+-------------+-------------+-------------+-------------+-------------+
| {{TITLE}}   | Donor title | Title       | Mrs.        | Welcome /   |
|             |             |             |             | Lead        |
+-------------+-------------+-------------+-------------+-------------+
| {{T         | Total       |             |             |             |
| OTAL_YEARLY | yearly      |             |             |             |
| _DONATION}} | donation    |             |             |             |
+-------------+-------------+-------------+-------------+-------------+
| {{TRANSAC   | Payment     | Amount      | per month   | Welcome     |
| TION_TYPE}} | frequency   |             |             |             |
+-------------+-------------+-------------+-------------+-------------+
| {{TRANSACTI | Don         | Amount      | 25          | Welcome /   |
| ON_AMOUNT}} | or-selected |             |             | Lead        |
|             | transaction |             |             |             |
|             | amount \*\* |             |             |             |
|             | Aug 2015:   |             |             |             |
|             | for Annual  |             |             |             |
|             | donations   |             |             |             |
|             | this is     |             |             |             |
|             | multiplying |             |             |             |
|             | the amount  |             |             |             |
|             | on the form |             |             |             |
|             | by 12       |             |             |             |
|             | \*\*\*      |             |             |             |
+-------------+-------------+-------------+-------------+-------------+
| {{YEAR      | Donation    | Amount      | 300         | Welcome /   |
| LY_AMOUNT}} | amount \*   |             |             | Lead        |
|             | 12          |             |             |             |
+-------------+-------------+-------------+-------------+-------------+
| {{VSO_ANL}} | Custom      | N/A         | N/A         | Welcome     |
|             | er-specific |             |             |             |
+-------------+-------------+-------------+-------------+-------------+

**Date formats:**

The following formats can be used in `Welcome Email` and `SEPAs` for
**PLEDGE_CREATION_DATE** and **START_DATE** placeholders:

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
