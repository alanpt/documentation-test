# Merge Fields

These fields are dynamically generated text that queries our database
when generated to use the correct value instead of the placeholder.

# Signature Page

  FIELD                  DETAILS                                                                                                                             EXAMPLE TEXT                                             EXAMPLE OUTPUT
  ---------------------- ----------------------------------------------------------------------------------------------------------------------------------- -------------------------------------------------------- ---------------------------------------
  `{NAME}`               The first and last name of the supporter as entered with a space between.                                                           I, `{NAME}`, understand that my gift is ongoing          John Lund
  `{TODAYS_DATE}`        The date today in locale appropriate format; i.e. DD/MM/YYYY for everyone except North America: MM/DD/YYYY. Timezone of the iPad.   Signed: `{TODAYS_DATE}`                                  27/2/2015
  `{TRANSACTION_TYPE}`   Payment frequency from the component on the form.                                                                                   My payment method will be charged `{TRANSACTION_TYPE}`   monthly/quarterly/annual
  `{GIFT_AID}`           UK Donors have the option to select Gift Aid for matching gifts from the government.                                                I acknowledge Gift Aid support: `{GIFT_AID}`             Yes/No
  `{ADDRESS}`            Address from the component on the form.                                                                                             Donor\'s address: `{ADDRESS}`                            3100 San Pablo Ave. BERKELEY CA 94702
  `{PIN}`                Personal identification number from the component on the form.                                                                      Donor\'s PIN: `{PIN}`                                    AA123456

 

# SMS

  FIELD                  DETAILS                                                          EXAMPLE TEXT                                         EXAMPLE OUTPUT
  ---------------------- ---------------------------------------------------------------- ---------------------------------------------------- ----------------
  `{FIRST_NAME}`         Donor\'s first name                                              `{FIRST_NAME}`, Thank you for supporting our work!   John
  `{PLEDGE_ID}`          Waysact Pledge ID - Only available on SMS sent after sign-up     Your donation reference number is `{PLEDGE_ID}`      873234
  `{FUNDRAISER_FIRST}`   Fundraiser\'s first name                                         Nice talking with you today, `{FUNDRAISER_FIRST}`    Herman
  `{AMOUNT}`             Donation amount (only available on SMS sent after the sign-up)   Thanks for your generous donation of {AMOUNT}.       \$30

 

# Welcome Email

  ------------------------ ------------------------------------------------------------------------------------------- ---------------------------- ---------------------------------------------
  FIELD                    DETAILS                                                                                     COMPONENT                    EXAMPLE OUTPUT
  {FIRST_NAME}             Donor first name                                                                            First name                   John
  {LAST_NAME}              Donor last name                                                                             Last name                    Lund
  {DONATION_AMOUNT}        Amount donated                                                                              Amount                       25
  {FUNDRAISER}             Fundraiser full name                                                                        N/A                          Herman Jones
  {PLEDGE_ID}              Waysact pledge ID                                                                           N/A                          823643
  {PAYMENT_METHOD}         Payment method                                                                              Payment type                 creditcard
  {LOCATION}               GPS coordinates of signup                                                                   Location                     38.3813934976656,-122.8834696589162
  {TRANSACTION_TYPE}       Payment frequency                                                                           Amount                       monthly
  {PAYMENT_DAY}            Donor-selected payment day                                                                  Payment days                 25
  {FUNDRAISER_FIRST}       Fundraiser\'s first name                                                                    N/A                          Herman
  {ADDRESS}                Donor address line 1                                                                        Address1                     3100 San Pablo Ave. BERKELEY CA 94702
  {ACCOUNT_NAME}           Donor bank account/credit card name                                                         Account name                 John Lund
  {ACCOUNT_NUMBER_LAST4}   Last 4 digits of the account/credit card number                                             Account number               4321
  {ACCOUNT_BSB}            Bank sort code/routing number                                                               BSB                          123456789
  {INTERESTED_IN}          Donor-selected interests                                                                    Interested In                Dogs
  {TRANSACTION_AMOUNT}     Donor-selected transaction amount                                                           Amount                       25
  {YEARLY_AMOUNT}          Monthly amount \* 12                                                                        Amount                       300
  {GIFT_AID}               Donor Gift Aid acknowledgement                                                              Gift Aid                     Yes
  {SUPPORTER_SIGNATURE}    Image of signed signature page                                                              N/A                          \<image\>
  {DOB}                    Donor date of birth (DD/MM/YYYY)                                                            Date of birth                01/31/1950
  {IBAN_LAST4}             Last 4 digits of the direct debit IBAN                                                      Direct Debit IBAN            4321
  {MOBILE_PHONE}           Donor mobile phone                                                                          Mobile phone                 555-555-5555
  {HOME_PHONE}             Donor home phone                                                                            Home phone                   555-555-5555
  {EMAIL_ADDRESS}          Donor email address                                                                         eMail                        test@waysact.com
  {TITLE}                  Donor title                                                                                 Title                        Mrs.
  {FULL_ADDRESS}           Donor complete address                                                                      Address                      3100 San Pablo Ave. Apt 2 BERKELEY CA 94702
  {NEXT_PAYMENT_DAY(n)}    Pledge creation date + n days, then advance to payment day from the new date (DD/MM/YYYY)   Payment days/Payment month   01/25/2016
  {CHILD_AGE}              Child age                                                                                   Child Selection              2-4
  {CHILD_REGION}           Child region                                                                                Child Selection              Haiti
  {CHILD_PHOTO}            Child photo                                                                                 Child Selection              \<image\>
                                                                                                                                                     
  ------------------------ ------------------------------------------------------------------------------------------- ---------------------------- ---------------------------------------------
