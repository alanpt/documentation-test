# Importing pledge updates, payments & cancellations

Information on importing leads can be found here
[https://waysact.zendesk.com/knowledge/articles/360003697395/en-us?brand_id=230874](https://support.waysact.com/knowledge/articles/360003697395/en-us?brand_id=230874)

The following relates to importing updates to
[pledges]{.wysiwyg-underline}:\
\
For all imports, you drag a drop a file and we\'ll then display a
preview table which shows what the data looks like so you can check the
data formats are correct, and we will highlight any invalid data formats
in a separate table. You should review data before approving the import
and initiating the import process, and cancel the import if some data
needs to be fixed.

## **Importing Cancellations**

For importing cancellations, head to Import -\> Pledges
[https://manage.evergiving.com/en-AU/pledges/import](https://manage.evergiving.com/en-AU/pledges/import){rel="noreferrer"}
and import a csv or xlsx file of up to 2500 records with 4 columns:

Pledge ID\
Cancellation Date\
Cancellation Reason\
Cancellation Category

Cancellation Imported Week (optional import field formatted as YYYY-WW
released through <https://github.com/waysact/evergiving/issues/8250>).
Yet to be released is filter conditions
<https://github.com/waysact/evergiving/issues/8366>.

**Note:**

-   the date format must be DD.MM.YYYY
-   the Cancellation Category is optional, you can leave this out of the
    import file. You can see your existing Cancellation Categories here
    [https://manage.evergiving.com/en-AU/account/cancellationCategories](https://manage.evergiving.com/en-AU/account/cancellationCategories){rel="noreferrer"}
-   for the Cancellation Reasons, you can choose to import individual
    cancellation reasons for each donor (i.e. financial reasons, partner
    said no etc) however to make it easier for you to use the
    cancellation data for reporting, we recommend restricting the
    reasons to simply \"Actively Cancelled\" (the supporter contacted
    the charity and requested their donation stop); and \"Passively
    Cancelled\" (the supporter is considered canceled due to failed
    delinquency procedures and a period of time without payment). You
    can see your existing Cancellation Outcomes here
    [https://manage.evergiving.com/en-AU/account/cancellationOutcomes](https://manage.evergiving.com/en-AU/account/cancellationOutcomes){rel="noreferrer"}
-   If you do decide to import individual cancellation reasons, it is
    best to come up with a preset list of reasons, and only use those
    because unless the value you import is identical to an existing
    cancellation reason, a new reason will be created and you will
    likely have multiple duplicate cancellation reasons. 

Once you have imported the cancellations, the pledge status will change
to Cancelled and the cancel date and cancel reason will be recorded
against the pledge.

 

## **Importing Payments**

For importing payments, head to Retention-\> Payments Import
[https://manage.evergiving.com/en-AU/retention/paymentsImport](https://manage.evergiving.com/en-AU/retention/paymentsImport){rel="noreferrer"}
and import a csv or xlsx file of up to 2500 records with no header row
but data in the following 4 columns:

Pledge ID\
Amount\
Payment Date\
Attempted Payment Date (optional)

Payment Imported Week (optional import field formatted as YYYY-WW
released through <https://github.com/waysact/evergiving/issues/8250>).
Yet to be released is filter conditions
<https://github.com/waysact/evergiving/issues/8366>. 

**Note:\
**

-   the date format must be DD.MM.YYYY

-   you can also import an attempted payment date if the charity
    attempted the first debit but it failed. *Attempted payment date* is
    the date the first payment should have gone out. Failed payments are
    identified by their absence. E.g.

    Attempted first payment 15.01.2021\
    Payment taken on 15.02.2021 (earn 0.5 at month 2))\
    Payment taken on 15.03.2021 (earn 0.666 at month 3)\
    No payment Apr (earn 0.5 at month 4)\
    \
    If we did not set attempted payment date in that example we would
    have considered Feb as the first payment and started with earn 1 at
    month 1.

## **Pledge payment updates via API**

Via API you can also create a new payment record in a given pledge, for
example because the payment was processed on your side and you wish to
include the record on Evergiving. Currently there can be only one
payment per calendar day per pledge. See
<https://jsapi.apiary.io/apis/waysact/reference/0/pledge-payments-collection.html>
for more information.

##  

## **Importing Pledge Updates**

For importing updates to pledges, head to Import -\> Pledges
[https://manage.evergiving.com/en-AU/pledges/import](https://manage.evergiving.com/en-AU/pledges/import){rel="noreferrer"}
and import a csv or xlsx file. The following fields can be updated via
import:

-   Account Number
-   Amount
-   BSB
-   Campaign Name
-   Cancellation Date
-   Cancellation Reason
-   Date of Birth
-   Direct Debit Name
-   Email
-   External Reference Number
-   Financial Institution
-   First Name
-   Frequency
-   Gender
-   IBAN
-   Last Name
-   Mobile Phone Number
-   Payment Day
-   Payment Month
-   Phone Number
-   Pledge ID
-   Profession
-   Reporting week & Reporting week year
-   Starting Date
-   SWIFT
-   Title
-   Validation Contact Made
-   Validation Detail By
-   Validation Detail Comment
-   Validation Detail Date
-   Validation Outcome

You can also import address data.

-   Primary Address Line 1 & 2 (new - \`Supporter primary address: line
    1\` and \`Address 2\`)

 Note - the edit pledge preview will only display the imported address
if it is set to display Address 1 instead of Street & House Number. This
can change locale by locale. If the locale displays Street & House
Number in the edit pledge view, then those fields should be updated via
import instead as you can import Building Number, Street, City, Suburb
and Postcode.

## Other imports

Lead imports & lead update imports
[https://waysact.zendesk.com/knowledge/articles/360003697395/en-us?brand_id=230874](https://support.waysact.com/knowledge/articles/360003697395/en-us?brand_id=230874)

Location imports
[https://waysact.zendesk.com/knowledge/articles/360002913015/en-us?brand_id=230874](https://support.waysact.com/knowledge/articles/360002913015/en-us?brand_id=230874)

 
