# Social Distancing Form Configurations

**Workflow**

[https://blog.evergiving.com/face-to-face-fundraising-in-a-socially-distant-world-f34fd65d9000](https://blog.evergiving.com/face-to-face-fundraising-in-a-socially-distant-world-f34fd65d9000){rel="nofollow"}
[https://www.evergiving.com/socialdistancing/](https://www.evergiving.com/socialdistancing/){rel="nofollow"}

-   For every fundraiser generate a QR code with url containing
    fundraisers\' ID and an AES key and display it on a page accessible
    to the fundraiser and make it printable. A recent change has now
    added the QR code to the fundraiser form along with the social
    distance code
-   Fundraiser fills in the normal campaign form, gets to payment
    details then selects \'Transfer the Form to the Donor\' that then
    collapses the payment fields and displays a \'Transfer form\' button
    on the signature page, with a workflow similar to the \'Take
    Payment\' button.
-   On pressing the \'Transfer to Donor\' button (a) data from the form
    is sent to server, which generates a 4 digit code which is then sent
    back and displayed on the form, and (b) a formatted SMS with
    fundraiser\'s link is sent if Send SMS option chosen. New buttons
    will appear on the Fundraiser form for \'Check\' (to check and see
    if the donor has completed the form on their phone) and \'Walked
    Away / Offline\' (which allows a lead to be saved with all the
    details entered into the form to date if the donor walks away
    without completing the form) and \'Cancel\' (which cancels the
    transfer to the donor\'s phone, invalidates the donor\'s form and on
    the Fundraiser\'s form they will see all the data they entered. The
    fundraiser can then proceed to a regular (signature) signup where
    the donor signs the iPads, make any changes and transfer the form
    back to the donor, or discard all of the information using the
    \"Reset\" button on the signature page).
-   Donor scans the Fundraiser\'s QR code (either on the form or a
    printed version) or clicks the link in the SMS they receive (both
    options will send the donor to the same url). They will then see a
    blank page that asks for the 4 digit code the fundraiser gives them
    and a \'Submit\' button.
-   \'Submit\' redirects donor to a page displaying their first and last
    name and the fields not yet completed by the Fundraiser (payment
    information and the terms and conditions copy). The donor completes
    the mandatory fields and agrees to the terms and conditions and hits
    submit. If instant payments are active, the donor will see the
    result of the instant payment attempt on their phone.
-   On submit, we run all the processes that would normally happen on
    form submit, including attempting payment (and retry if card fails)
    then return the result to the Form and display \'Thanks\'
-   On fundraiser form \'Check\' will force check to see if pledge is
    complete, returns \'Not Yet\' if not.
-   If the fundraiser submits another record to the server and there is
    still a QR record pending; or there is still a QR record when the
    team deactivates; then we create a lead with \'Other\' as the
    payment method and expire the 4 digit code unless this feature has
    been turned off for that particular campaign.

 If the donor completes the payment fields, it will be created as a
normal pledge. If the donor walks away, it will be created as a lead
pledge (a pledge with payment type = other). The Walked Away/Offline
button can be removed from the form through the locale.

 

**Setup**

Traditionally, the social distance forms were created/controlled through
component locales. Through
<https://github.com/waysact/evergiving/issues/7177,> the setup was moved
to the actual campaign configuration. See
<https://github.com/waysact/support-documentation/blob/master/internal/campaigns/social_distancing.md>

Firstly, edit the campaign and enable social distancing, and select
whether you want to create Leads from Walked Away/Form Expiration and
whether to turn on the Agent Approval feature (see below).

![Social_Distance_setup.png](https://support.waysact.com/hc/article_attachments/4410347588367/Social_Distance_setup.png)

Secondly, add social_distancing:true to the components you want to
transfer. There is a list of default components that will be transferred
(Amount, Payment Type, Name On Card, Card Number, Card Expiration Date,
Debit Account Name, BSB, Direct Debit Type (national, international),
swift, iban, Debit Account Number), however if you want to remove one
default component, just add social_distancing:false. 

There are now component resources for the social distance signature
screen text that support SIGNATURE_DISCLAIMERS and support HTML tags:
CAMPAIGN_SOCIAL_DISTANCING_CREDITCARD_DISCLAIMER

CAMPAIGN_SOCIAL_DISTANCING_DIRECTDEBIT_DISCLAIMER

CAMPAIGN_SOCIAL_DISTANCING_LEAD_DISCLAIMER

CAMPAIGN_SOCIAL_DISTANCING_OTHER_DISCLAIMER

    <p>
    Un texto es una composición de signos codificados en un sistema de escritura que forma una unidad de sentido. También es una composición de caracteres imprimibles (con grafema) generados por un algoritmo de cifrado que, aunque no tienen sentido para cualquier persona, sí puede ser descifrado por su destinatario original. En otras palabras, un texto es un entramado de signos con una intención comunicativa que adquiere sentido en determinado contexto. 
    </p>
    <p>
    Transaction Amount: <strong>{TRANSACTION_AMOUNT}</strong><br />
    Donation Amount: <strong>{DONATION_AMOUNT}</strong><br />
    Transaction Type: <strong>{TRANSACTION_TYPE}</strong><br />
    Localtion: <strong>{LOCATION}</strong><br />
    Phone: <strong>{PHONE}</strong><br />
    Dob: <strong>{DOB}</strong><br />
    Office: <strong>{OFFICE}</strong><br />
    Name: <strong>{NAME}</strong><br />
    Today: <strong>{TODAYS_DATE}</strong><br />
    Start Date: <strong>{START_DATE}</strong><br />
    </p>
    <br /> Thanks!

There is also CAMPAIGN_SOCIAL_DISTANCING_PAYMENT_DETAILS which will
display \"You gift {amount} {frequency}\" that needs to be manually
updated to \"Your gift: {amount} {frequency}\"

#### **Auto Expiration of Transferred Forms**

There is a background job that Expires Transferred Forms every 30
minutes, this background job will search SD Forms older than 1 hour,
meaning that a SD Form will be available for 1 hour to 1 hour and a
half. When the background job finds a SD Form older than this, it will
expire and create a walked away lead pledge if the option is enabled in
the campaign, otherwise the capture will be destroyed along with the
donor\'s data. We now have released a feature where if the fundraiser
checks on an expired form, instead of seeing the \"thank you\" screen,
they now see a
message`Transferred Form has expired, Pledge was created with no payment details`
if the `Create Lead on Expiration` option in the campaign setup was
selected, or if that option isn\'t selected they\'ll see
`Transferred Form has expired. No pledge was created`.

So basically at the end of the day all the incomplete transferred forms
will be created as leads. \"Transferring a Form\" is the same as
\"saving/submitting\" it unless the Fundraiser presses the `Cancel`
button on the form.

#### **Require Agent Approval**

When enabled, this option will create a pledge when the form is
transferred and will hide the Social Distancing Form Code to the
fundraiser. The `Walked Away` and `Cancel` options are unavailable in
this workflow as the pledge was already created. The pledge can be
accessed by an agent that will see the Social Distancing Form Code in
the Pledge Summary section, and can share it with the Fundraiser or
Donor. 

From that point the process is the same, the donor opens the
`/sd/fundraiser_token` link and enters the code. SD form loads and it
can be completed by the donor. The pledge will be updated with the
details.

**Auto Expiration of Transferred Forms that Require Agent Approval**

The background job will auto expire Social Distancing Forms that require
agent approvals that are older than a week ago. The pledge will be kept
in the system with the details it was created.

#### **Cancellation**

The Fundraiser has the option to `Cancel` a Transferred Form, that
action will kill the transferred form making it inaccessible to the
donor, no pledge will be created. After cancelling the Transferred Form
the fundraiser can continue capturing the donor\'s details in the
Fundraiser Form or reset and restart a new pledge.

#### **Observations**

Along with the `Check`, `Walked Away` and `Cancel` buttons, the
`Start Over` action is now accessible, that\'s because the restriction
to only have one transferred form at any time was removed. A fundraiser
can transfer as many forms as he wants, but will only be able to check
the status and have the access code of the current one. Transferred
Forms will be accessible by the Donor until they are completed or
expired by the background job.

####  

#### **CSS and form setup **

If you want to adjust the social distancing donor form, you can use this
CSS that should lay out what to change to see the results you want, or
best to ask Dan for help. By default forms usually need a little tweak
to look their best on the donor\'s phone :

/\* \-\-- Put all this UNDERNEATH the existing CSS for your campaign
\-\-- */ /* \-\-- Position the entire form \-\-- \*/

/\* This places the form at the top of the page \*/
#social_distancing_capture .outercontainer { margin-top: 15px; }=

/\* \-\-- Adjust the title section \-\-- \*/

#social_distancing_capture #title h1 {

/\* the background-color \*/ background-color:#ffffff;

/\* the text-color - its either #000000 black or #ffffff white \*/
color:#000000;

text-shadow: none; font-size: 24px; padding: 5px 0;

/\* this is the link to the logo - replace everything in the brackets,
but leave the rest intact including the brackets. The link must end in a
.png, or .jpg, or .gif or .svg So if you\'ve loaded the link into our
remote image hosting site, copy the link address but take the
?attredirects=0 bit off the end \*/ background-image:
url([https://sites.google.com/a/waysact.com/images/surf-lifesaving-australia/logo-donorform.png](https://sites.google.com/a/waysact.com/images/surf-lifesaving-australia/logo-donorform.png){rel="nofollow"});

/\* adjust this to give the logo above some space, you don\'t want that
logo too crammed \*/ padding-top: 50px;

background-repeat: no-repeat; background-position: top center;
background-size: 150px; } /\* \-\-- Adjusting the button \-\-- \*/
#social_distancing_capture .onto_next .createbutton {

/\* the background-color \*/ background-color: #a2a2a2;

/\* the text-color \*/ color:#ffffff; }

 

 
