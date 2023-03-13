# Signature panel merge fields

These merge fields are added in the Component Resources for the
signature page:

 

CAMPAIGN_SIGNATURE_CREDITCARD_DISCLAIMER

CAMPAIGN_SIGNATURE_DIRECTDEBIT_DISCLAIMER

CAMPAIGN_SIGNATURE_SINGLE_DONATION_DISCLAIMER

CAMPAIGN_SIGNATURE_RGPSMS_DISCLAIMER

CAMPAIGN_SIGNATURE_OTHER_DISCLAIMER

CAMPAIGN_SIGNATURE_LEAD_DISCLAIMER

 

CAMPAIGN_SOCIAL_DISTANCING_CREDITCARD_DISCLAIMER

CAMPAIGN_SOCIAL_DISTANCING_DIRECTDEBIT_DISCLAIMER

CAMPAIGN_SOCIAL_DISTANCING_SINGLE_DONATION_DISCLAIMER

CAMPAIGN_SOCIAL_DISTANCING_RGPSMS_DISCLAIMER

CAMPAIGN_SOCIAL_DISTANCING_OTHER_DISCLAIMER

CAMPAIGN_SOCIAL_DISTANCING_LEAD_DISCLAIMER

 

  ------------------------------------- --------------------------------------------------- -------------------- -------------- --------------
  **FIELD**                             **DETAILS**                                         **EXAMPLE TEXT**     **EXAMPLE      **Works in
                                                                                                                 OUTPUT**       Social
                                                                                                                                Distance
                                                                                                                                Forms?\
                                                                                                                                **

  {ADDRESS}                             Address from the component on the form.             Donor\'s address:    3100 San Pablo  
                                                                                            `{ADDRESS}`          Ave. BERKELEY  
                                                                                                                 CA 94702       

  {CONTACT_PREFERENCE_EMAIL}                                                                                                    Yes

  {CONTACT_PREFERENCE_MAIL}                                                                                                     Yes

  {CONTACT_PREFERENCE_PHONE}                                                                                                    Yes

  {CONTACT_PREFERENCE_SMS}                                                                                                      Yes

  {CONTACT_PREFERENCE_DO_NOT_CONTACT}                                                                                           Yes

  {CONSENT_EMAIL}                                                                                                                

  {CONSENT_MOBILE}                                                                                                               

  {CONSENT_SMS}                                                                                                                  

  {CONSENT_POST}                                                                                                                 

  {CONSENT_PHONE}                                                                                                                

  {CONSENT_VIDEO}                                                                                                                

  {CUSTOM\_\<TAG\>}                     where \<TAG\> is the label of the custom input on                                        
                                        the form) as a merge field, then populate the value                                     
                                        stored by the custom input component in the email,                                      
                                        signature disclaimers and signature checklists.                                         

  {DOB}                                                                                                                          

  {EMAIL}                                                                                                                        

  {GIFT_AID}                            UK Donors have the option to select Gift Aid for    I acknowledge Gift   Yes / No        
                                        matching gifts from the government.                 Aid support:                        
                                                                                            {GIFT_AID}                          

  {GIFT_AID_COPY}                       https://github.com/waysact/evergiving/issues/4194                                        

  {INTERESTED_IN}                       Interested in from the component on the form.                                            

  {MOBILE_PHONE}                                                                                                                 

  {monthlyamount}                                                                                                                

  {NAME}                                The first and last name of the supporter as entered I, {NAME},                           
                                        with a space inbetween.                             understand that my                  
                                                                                            gift is ongoing                     

  {PIN}                                 Personal identification number from the component   Donor\'s PIN: {PIN}  Donor\'s PIN:   
                                        on the form.                                                             AA123456       

  {PHONE}                                                                                                                        

  {START_DATE}                          start date in the ISO 8601 format of YYYY-MM-DD                                          

  {TEAM_LOCATIONS}                                                                                                               

  {TEAM_METHOD}                                                                                                                  

  {TODAYS_DATE}                         The date today in locale appropriate format using   Signed:              Signed:         
                                        the time zone of the iPad i.e. DD/MM/YYYY for       {TODAYS_DATE}        27/2/2022      
                                        everyone except North America: MM/DD/YYYY                                               

  {TRANSACTION_TYPE}                    Payment frequency from the component on the form.   My payment method    My payment      
                                                                                            will be charged      method will be 
                                                                                            {TRANSACTION_TYPE}   charged        
                                                                                                                 annually       

  {YEARLY_AMOUNT}                                                                                                                
  ------------------------------------- --------------------------------------------------- -------------------- -------------- --------------

 \
Source:
<https://github.com/waysact/waysact/blob/master/app/models/campaign.rb#L133-L144>

**Date formats**

The following formats can be used in **Signature**:

\'DDMMYY\': \"#{date}#{month}#{year\[2..3\]}\"\
\'YYMMDD\' \"#{year\[2..3\]}#{month}#{date}\"\
\'DD/MM/YYYY\' \"#{date}/#{month}/#{year}\"\
\'MM/DD/YYYY\' \"#{month}/#{date}/#{year}\"\
\'YYYYMMDD\' \"#{year}#{month}#{date}\"\
\'YYYY/MM/DD\' \"#{year}/#{month}/#{date}\"

*Examples:*

{DOB(YYYY/MM/DD)} -\> 1990/04/15\
{DOB(YYYYMMDD)} -\> 19900415\
{DOB(DD/MM/YYYY)} -\> 15-04-1990

If no format is passed, for example {DOB}, the default format based on
the locale of the campaign is taken.

 

***Merge fields for other locations:***

#Campaign Checklist

See
https://github.com/waysact/support-documentation/blob/04db6c7962f922c3c013c7e0079b68c71bedd682/internal/forms/campaign_checklists.md

 

#SMS

See
https://github.com/waysact/support-documentation/blob/312f712eefba03405307efdae8d4dedd7a12bdc5/internal/sms/merge%20fields.md

 

#SEPA\
See
https://github.com/waysact/waysact/blob/25cdc3c9bcd50cd7b517fea9e0827ef7f28b01f4/spec/models/sepa_spec.rb
for the full list
