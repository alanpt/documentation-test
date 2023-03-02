# Banking - locale specific validation

## **Australia**

-   Do we validate bank account numbers?

We do validate on length and format of the account number but we don\'t
validate the actual number  as such validations do not exist in
Australia. This is why we have the \'Validate Bank Accounts\' feature
(Pledges section -\> Validate Bank Accounts) where agencies can call the
banks helplines to read out the details and validate account details
individually over the phone.

Even BSB validation is not 100% reliable as APCA only publishes updates
once a quarter - there is no real-time feed. We download the update from
<https://bsb.auspaynet.com.au/> and get the developers to upload it. If
banking information is missing in Evergiving but exists on this site,
then we need an update.

In 2021 we released validation in the edit pledge view for the AU locale
where the Financial Institution is now read only. If you update the BSB
in the edit pledge page then the Financial Institution will
automatically update.

The Branch data was recently made available in the edit pledge view and
there is a source for Australia and NZ. This will pick up sub-banks
which are saved in the banking data as Branches.

## **Canada**

Through <https://github.com/waysact/evergiving/issues/7464> we released
mandatory BSB validation on and offline. The Canadian BSB check is just
a lookup against a list of valid numbers in our database, so we send
this information to the tablet on login and do the check locally
(offline + online). Add the constraint `invalidate_if_not_found:true` to
the Debit Account BSB component to invalidate if the branch info cannot
be found in our database.

## **Ireland**

You can prevent fundraisers from entering a specific IBAN by using the
campaign dataset `iban_black_list`. It only works for the `en-IE`
locale.

## **Italy (Codice Fiscale)**

The Codice Fiscale is the Italian fiscal code card. This tax code is an
alphanumeric code of 16 characters. The card serves to identify
unambiguously individuals residing in Italy irrespective of residency
status. For a correct Codice Fiscale generation, the PIN component must
be the last one visited. First complete: Firstname, Lastname, DOB,
Gender, and Place Of Birth. The first 15 characters of the Codice
Fiscale will be generated. The 16th character should be filled in by the
fundraiser.

## **Indonesia** (**Card Bank Account Number / Nomor Kartu Debit)**

Indonesia doesn\'t use the Direct Debit payment method in Evergiving,
they just have Credit Card, as donors have a card associated with bank
accounts. For these debit cards only, there is a mandatory field Card
Bank Account number (Nomor Kartu Debit). The Expiry date is not needed
for debit cards so the required fields are: Account Holder Name, Debit
Card Number (entered into the credit card field), Debit Card Account
Number, Bank Name.

Indonesia also now have a SEPA style PDF with the following fields as
the banks require a PDF to approve - to activate go to Edit Campaign on
any `id-ID` campaign and change the SEPA document klass name to
*IndonesiaBankApprovalSEPA* :

Pledge ID: pledge id\
Monthly Donasi Bulanan: amount\
Nama pemilik kartu: Name on card\
No Kartu: Masked Card number\
Card Typ: Card type\
Issuing Bank: Card issuing bank\
Nomor Rekening Debit: Card Account Number

Signature screen

To export the PDFs, add \[form pdf download link\] to the export email.

 

**Indonesia credit card validation** - on top of the standard card
validation, through
[https://github.com/waysact/evergiving/issues/6043](https://github.com/waysact/evergiving/issues/6043){.c-link
style="box-sizing: inherit; color: rgba(var(--sk_highlight_hover,11,76,140),1); text-decoration: underline; font-family: Slack-Lato, Slack-Fractions, appleLogo, sans-serif; font-size: 15px; font-style: normal; font-variant-ligatures: common-ligatures; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: left; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: #f8f8f8;"
tabindex="-1" target="_blank" rel="noopener noreferrer"
stringify-link="https://github.com/waysact/evergiving/issues/6043"
sk="tooltip_parent" remove-tab-index="true"
aria-describedby="sk-tooltip-2730"} we added special rules in Indonesia
to allow the following BINS on top of what is contained in the BIN
database

``` {.c-mrkdwn__pre style="box-sizing: inherit; margin: 4px 0px; padding: 8px; --saf-0: rgba(var(--sk_foreground_low,29,28,29),0.13); overflow-wrap: break-word; font-size: 12px; font-variant-ligatures: none; line-height: 1.50001; tab-size: 4; white-space: pre-wrap; word-break: normal; font-family: Monaco, Menlo, Consolas, ' Courier New' , monospace !important; background: rgba(var(--sk_foreground_min,29,28,29),0.04); border: 1px solid var(--saf-0); border-radius: 4px; counter-reset: list-0 0 list-1 0 list-2 0 list-3 0 list-4 0 list-5 0 list-6 0 list-7 0 list-8 0 list-9 0; color: #1d1c1d; font-style: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: left; text-indent: 0px; text-transform: none; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;" stringify-type="pre"}
valid ||= /^(168870|168888|188980|123481)[0-9]{10}$/.test(@number) # BCA
```

BCA bank in Indonesia issues their own credit card which does not have a
card type and are not listed on bindb. These cards are all 16 digits
long and the first 6 digits are:

-   168870
-   168888
-   188980
-   123481

## **Korea**

Through <https://github.com/waysact/evergiving/issues/7541> we released
a SEPA specific for South Korea.

Korea accepts all cards by default, including prepaid.

## **New Zealand**

This should work exactly the same as the Australian direct debit block,
except it has a different database for returning the Bank name and
address from the BSB. The database is located here:
[https://www.paymentsnz.co.nz/resources/industry-registers/bank-branch-register/](https://www.paymentsnz.co.nz/resources/industry-registers/bank-branch-register/){rel="nofollow"}

Fields: (all mandatory) Account Name BSB Number (Called bank/branch
number) - 6 digits Account number (account number 7 digits + 2 or 3
digit suffix) and Bank

The Branch data was recently made available in the edit pledge view and
there is a source for Australia and NZ. This will pick up sub-banks
which are saved in the banking data as Branches.

 

## **Norway**

::: {#readme .Box-body .readme .blob .js-code-block-container .p-5 .p-xl-6 .gist-border-0}
Norway has a payment method called BankID: a company, NETS, collect
information and set recurring donation. As they don\'t have an API, we
solved it this way:

In direct debit type, e_agreement must be enabled, then we use the
component \"Electronic Agreement\" to show a link (see MSF Norway). The
donor clicks on the button, and it opens a new tab. In the URL of this
new page, we send donors information, including a unique ID that we
generate for Norwegian client (called \"KID number\"). The donor is
prompted to enter his mobile number, to log with Mobile BankID, or his
credentials. The donors can then confirm the donation At the end of the
process, the donor is redirected to a page that we generate (still in
the same extra tab), where we show a 4-digits code. The donor needs to
enter this pin code on the form to confirm that the transaction was
successful. We need this pin code because, as they haven\'t any API, we
can\'t get otherwise the information back on the form that the
transaction was successful or not. If the pin code is correctly entered,
we skip the signature, the donor just clicks on save If the transaction
didn\'t work, they can switch to a regular direct debit, with signature
Additionally, if the donor signed the form (classic Direct Debit), we
can generate a PDF and send it automatically on the SFTP of NETS, they
scan the PDF, and set the recurring donation. This process is automatic
(scheduled export, scan of the pdf, \...) but not as fast as the BankID
on the form, as they need time to process the PDFs.

Camapign 3270 in account 638 is a good example (MSF Norway)

[https://waysact.slack.com/archives/C03KAV5L9/p1601400261105100](https://waysact.slack.com/archives/C03KAV5L9/p1601400261105100){rel="nofollow"}
:::

## **South Africa**

Bankserv Africa are the clearing house for South African payments.
[https://www.bankservafrica.com/Login?returnurl=/Members-Center](https://www.bankservafrica.com/Login?returnurl=/Members-Center){rel="nofollow"}
They hold the check digit verification tables for all the banks and we
can build this in to our app. In the past we have asked the charity to
apply for the CDV docs. They just need to fill in a one page form and
submit it.

For more information see the recent update:
[https://waysact.zendesk.com/agent/tickets/12067](https://support.waysact.com/agent/tickets/12067){rel="nofollow"}

 

## **UK**

[Vocalink]{.wysiwyg-underline}

is the UK bank clearing organisation. It provides all of the data used
in validating bank account details, with a couple of products listed
here:
[http://www.vocalink.com/products/payments/customer-support-services.aspx](http://www.vocalink.com/products/payments/customer-support-services.aspx){rel="nofollow"}.

Vocalink publishes a document for modulus checking the combination of
sort code and account numbers here:
[http://www.vocalink.com/media/700427/vocalink\_-\_validating_account_numbers_v3.20.pdf](http://www.vocalink.com/media/700427/vocalink_-_validating_account_numbers_v3.20.pdf){rel="nofollow"}.
This is supplemented by a periodically updated Modulus weight table
here:
[http://www.vocalink.com/media/700423/valacdos.txt](http://www.vocalink.com/media/700423/valacdos.txt){rel="nofollow"}.
Both documents are found here:
[http://www.vocalink.com/products/payments/customer-support-services/modulus-checking.aspx](http://www.vocalink.com/products/payments/customer-support-services/modulus-checking.aspx){rel="nofollow"}.

N.B. modulus checking *only covers a percentage* of UK banks and
building societies (financial institutions).

::: {#readme .Box-body .readme .blob .js-code-block-container .p-5 .p-xl-6 .gist-border-0}
[EISCD]{.wysiwyg-underline}

The Extended Industry Sort Code Database is a periodically updated list
of all sort codes used in the UK. It contains:

1.  By exclusion from the list, sort codes that are NOT valid.
2.  Bank branch, address and other information as listed below for every
    valid sort code in the UK. Below is how we display this data in the
    edit pledge view (currently returned from postcode anywhere).
    \'Cautious OK\' denotes the sort code is valid but outside the range
    of the modulus weighting, otherwise it would be simply \'OK\'
3.  The EISCD is attached in tab delimited form and explained here:
    [http://www.vocalink.com/media/532557/extended_iscd_tech_spec\_-\_tab_delimited_v2.50.pdf](http://www.vocalink.com/media/532557/extended_iscd_tech_spec_-_tab_delimited_v2.50.pdf){rel="nofollow"}.

![Screen_Shot_2020-12-22_at_5.27.09_pm.png](https://support.waysact.com/hc/article_attachments/360005701815/Screen_Shot_2020-12-22_at_5.27.09_pm.png){width="305"
height="253"}

[Postcode Anywhere]{.wysiwyg-underline}

Postcode anywhere simply resells the EISCD to us via API, described
here:
[http://www.postcodeanywhere.co.uk/bank-account-validation/](http://www.postcodeanywhere.co.uk/bank-account-validation/){rel="nofollow"}.

Summary

In validating sort code and account numbers there are 3 possible
scenarios:

1.  The sort code is in the modulus weight table and we can validate it
    in Javascript nicely.
2.  The sort code is not in the modulus weight table but it is a valid
    sort code
3.  The sort code is neither in the modulus weight table nor a valid
    sort code.

#####Currently we have no offline means of distinguishing between 2 and
3 where the form is offline.

###What we do now

1.  We use the modulus checking to validate sort code and account number
    combinations using Javascript on the form
2.  Where the sort code is outside the range of modulus checking AND the
    form is *online*, we ping the postcode anywhere server from the form
    to check that the sort code is not invalid.
3.  Where the sort code is outside the range of modulus checking AND the
    form is *offline*, we let the validation pass.
4.  Where the pledge is submitted, from the server we ping the postcode
    anywhere API again, every time, to check the sort code is valid.
    Where it isn\'t we display the following message in the edit pledge
    view: \"Direct Debit Validation Failed: Unknown Sort Code\"
5.  We also count the number of times a fundraiser tries to
    unsuccessfully enter a sort code and account number combination.

###Problems with what we do now

1.  Every time a customer sees \"Direct Debit Validation Failed: Unknown
    Sort Code\" the pledge is lost.
2.  Counting the number of failed attempts is only good where the sort
    code falls in the modulus range.
3.  We\'re spending a fortune on postcode anywhere for reselling us data
    we now have.
4.  We can\'t distinguish between invalid sort codes and valid ones
    outside the range of modulus checking so we can\'t add extra
    features to ensure accurate data entry on the valid ones.

###Solutions

1.  Load the EISCD in to tables on our server in a way that can be
    updated.
2.  Load the latest modulus weightings in to tables on our server in a
    way that can be updated.
3.  By exclusion from the EISCD completely invalidate all sort
    code/account number validations that have sort codes not in the
    EISCD.
4.  Modulus check sort code and account number validations that are in
    the modulus range.
5.  Enforce blind repeat entry for sort code and account number
    combinations where the sort code is valid but falls outside the
    modulus tables (and count the attempts - allow infinite attempts to
    create a match from blind repeat entry). If anyone has any other
    ideas for this please let me know.
6.  Have features for a super admin to update these tables as periodic
    updates are released.
7.  Develop a process for monitoring for updates and implementing them.
8.  Deprecate the postcode anywhere API for bank account validations

\~ \~ \~ \~ \~ \~ \~ \~ \~ \~ \~ \~ \~ \~ \~ \~ \~ \~ \~ \~ \~ \~ \~ \~
\~ \~ \~ \~ \~ \~ \~ \~ \~ \~ \~ \~ \~ \~ \~ \~ \~ \~ \~ \~ \~ \~ \~ \~
\~ \~ \~

# IBAN Validation

The International Bank Account Number (IBAN) is an internationally
agreed system of identifying bank accounts across national borders to
facilitate the communication and processing of cross border transactions
with a reduced risk of transcription errors. The IBAN is mostly used in
Europe. It is used for Direct Debit. The IBAN consists of up to 34
alphanumeric characters comprising:

\- a country code\
- two check digits\
- a number that includes the domestic bank account number, branch
identifier, and potential routing information

By checking the digits, Evergiving is enable to run a sanity check of
the bank account number to validate it. If the IBAN is invalid, an error
message will appear \"IBAN code is not valid.\" and the fundraiser
won\'t be able to complete the pledge. This guarantees that the charity
will only receive valid IBAN. If you are using the IBAN component in
your form, you don\'t have to add the \"bank name\", \"bank code\",
\"BIC\" or \"account number\", Evergiving will automatically deduct then
from the IBAN.

Full information on iBAN is available at
[https://github.com/waysact/support-documentation/blob/master/internal/bank_validation/IBAN_Registry.pdf.](https://github.com/waysact/support-documentation/blob/master/internal/bank_validation/IBAN_Registry.pdf)
The IBAN structure for UK IBAN GB2!n4!a6!n8!n

### If Online:

IBAN will be checked against the EISCD database of valid IBAN\'s\
If Valid -\> Continue with pledge\
If Invalid -\> Prompt invalid entry exclude, prompt retry. Log all
activity

### If Offline

IBAN will be checked against local logic and use modulas checking\
If Validated by local logic, Continue\
If outside of logic range: Double entry on conditional acceptance.

*Once Online:*

Offline validation by local logic will be passed through the EISCD
database for counter-validation\
If found to be invalid -\> discard and log failed pledge\
Conditionally accepted pledges will face same validation once online

 

 
:::
