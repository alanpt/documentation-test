# Pledges - general information

::: {#readme .Box-body .readme .blob .js-code-block-container .p-5 .p-xl-6 .gist-border-0}
**Pledge statuses**

By default, all new pledges are automatically saved with a Status of
Pending. This means they are pending, awaiting the result of a
validation workflow being applied to them. The exceptions to this rule
are (a) where instant payments are active on the campaign and validation
outcomes have been assigned in the campaign setup for the different
payment outcomes (b) pledges with a payment type of \"Other\" where a
validation outcome has been assigned in the \"Other\" workflow in the
campaign setup.

The result of an interaction in a validation workflow typically falls in
to three categories, the pledge is either OK, not OK, or something else
(Alien). Alien) pledges usually indicates the donor does not meet
minimum criteria for quality required for your face to face fundraising
campaign. It\'s likely this donor will have their payments transacted
but they are neither Invalid nor Approved from the fundraiser\'s
perspective (statuses typically used to reward or otherwise). Evergiving
calls these \'Status\' and labels them as follows:\
\'Approved\'\
\'Invalid\'\
\'Alien\'

In the Account setup in Waysact, you can change the default label for
Alien pledges.

**Capture Date**

The capture date is saved inside the raw pledge data and it\'s used to
set the pledge creation date. It does not change even if the iPad is
taken offline and sits on the iPad for a period of time. The \"Date
created\" timestamp on the pledges page is the time the pledge was
captured in the team\'s timezone.

**What pledges are listed in the Pledge Captures page?**

The pledges listed in the Pledge Captures page with \'Processed\' =
\'Yes\' are ones that have been picked up by the background job
processing but failed to be created in the customer\'s account for
various reasons. Pledges listed as \'Processed\' = \'No means that the
pledge was captured but was never submitted to Waysact for processing.

 **What does the card type `CREDIT/DEBIT` mean?**

This means that BinDB can't determine if it is a credit or a debit card.
This occurs when a bank uses the same BIN for credit and debit cards.

**Credit card / bank validation** 

We make a call to BinDB upon saving the pledge to get the BIN data
(issuing bank, etc) just in case we didn\'t have it already or the
pledge was captured offline. It can happen that the call to BinDB failed
when the fundraiser tried from the device or something along those
lines. It could also be that we need to update the database - if the
bank data is blank in Evergiving but shows on a BIN search via BinDB,
then likely we need to update our database. This can be done through a
Github issue like <https://github.com/waysact/devops/issues/8001> or
<https://github.com/waysact/evergiving/issues/6907>.

**Why is the location data not always correct?**

The operating system on the iPad keeps track of the iPad\'s location
using a combination of sources, including GPS data, IP address lookups
and Wi-Fi location matching. Evergiving picks this information up and
adds it to the pledge data. In most cases, this will give a very
accurate result. However, in some cases the location reported by the
iPad might be wrong or old. This can happen when the iPad isn\'t able to
reliably determine its location (for example, if it can\'t get a GPS
lock), or if it is low on power, or if location services is disabled, or
if it is getting inconsistent results from the different location
sources.

To maximise the chances of an accurate location being reported please
ensure that location services is turned on, a data connection is
available and the iPad is kept well charged. If all of the above is
true, and the location still appears to be stuck, you may be able to
persuade the iPad into updating it\'s location data by launching the
Maps or Compass apps. It can also be helpful to do this after the iPad
has traveled a long distance while offline to ensure it picks up the new
location quickly.

**Duplicate Checking**

Fields checked in the duplicate check process are first/last name,
gender, mobile phone, home phone, email, direct debit account number and
IBAN, and credit card number.

**Can you attempt tokenisation if it fails on the street?**

Yes, as a Super Admin you have access to re-tokenise a pledge. The
button will appear in the edit pledge screen on a pledge by pledge basis
... and based on the campaign have tokenisation enabled. Instant
Payments don't come into play. The checks before we display the button
in the Edit Pledge screen are:

-   campaign has tokenisation enabled
-   pledge has payment method = creditcard
-   payment gateway token does not exist
-   there's an encrypted credit card number
-   user viewing the page is a super admin

### Pledge captures

While most pledge captures in waysact.me/admin/pledge_captures are
pledges with issues or duplicates, not all the captures in there are
stuck. That table also holds all the captures sent by the F2F and SD
forms for processing. When they are queued they will have a status of
pending. When the form was transferred to the donor, they will have a
status of transferred and will be moved to back to pending when the
donors submits the SD Form. The only captures that are stuck are the
ones with status failed because of an error during their processing. The
column status will show this information.

pending -\> :ok: -\> waiting for the worker to process it\
transferred -\> :ok: -\> waiting for the donor to submit the SD form.
D[on\'t re-submit
]{style="color: #1d1c1d; font-family: Slack-Lato, appleLogo, sans-serif; font-size: 15px; font-style: normal; font-variant-ligatures: common-ligatures; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: left; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: #f8f8f8; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; display: inline !important; float: none;"}[transferred
captures, they will be automatically expired/cancelled by a scheduled
background job if
needed]{style="color: #1d1c1d; font-family: Slack-Lato, appleLogo, sans-serif; font-size: 15px; font-style: normal; font-variant-ligatures: common-ligatures; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: left; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: #f8f8f8; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; display: inline !important; float: none;"}\
failed -\> :not ok: -\> stuck due error, the column Outcome will have
the error details.
:::
