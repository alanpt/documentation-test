# Communication Opt Ins & Consents

Traditionally we had the Contact Preferences component which allowed the
donor to select the ways they would like to be contacted. This was
configured in the campaign setup until recently when it moved to a
component locale (e.g. *options:email\|mail\|phone\|sms\|do_not_contact*
and *render_as:radio / render_as:checkbox / render_as:yesno*).

After GDPR, we had to provide more flexibility and reporting around
consent. The Two main ways of doing this are by granular consent where
the opt in is added at a component level and appears underneath each
component, and the consent block - both detailed below.

The Consent Block has now been enabled for the call centre so should
appear in the lead UI where configured.

## Granular Consent

You can add a component locale under the following components to set a
radio button (Yes/No options) to ask for consent, and comply with GDPR.
It is also possible to add a text/label. It is possible to add two opt
ins for the mobile, one for call and one for SMS. Currently, the opt ins
are not mandatory (donor do not have to select either yes or no). This
might change in the near future.

*ADDRESS COMPONENT*\
Enter the component locale: optin:\'radio\' or optin:\'checkbox\'\
Add content / component resource to: \'ADDRESS_CONTACT_CONSENT_TEXT\'

*ADDRESS FORM COMPONENT*\
Enter the component locale: optin:\'radio\' or optin:\'checkbox\'\
Add content / component resource to:
\'ADDRESS_FORM_CONTACT_CONSENT_TEXT\'

*ADDRESS CAPTURE COMPONENT*\
Enter the component locale: optin:\'radio\' or optin:\'checkbox\'\
Add content / component resource to:
\'ADDRESS_CAPTURE_CONTACT_CONSENT_TEXT\'

*EMAIL COMPONENT*\
Enter the component locale: optin:\'radio\' or optin:\'checkbox\'\
Add content / component resource to:\'EMAIL_CONTACT_CONSENT_TEXT\'

*MOBILE COMPONENT*\
Enter the component locale:  optinsms:\'radio\' or
optinsms:\'checkbox\'\
Add content / component resource to:
MOBILE_PHONE_SMS_CONTACT_CONSENT_TEXT

Enter the component locale:  optinsms:\'radio\' or
optinsms:\'checkbox\'\
Add content / component resource to:
MOBILE_PHONE_PHONE_CONTACT_CONSENT_TEXT

*HOME PHONE COMPONENT*\
Enter the component locale: optin:\'radio\' or optin:\'checkbox\'\
Add content/ component resource to: HOME_PHONE_CONTACT_CONSENT_TEXT

*WORK PHONE COMPONENT*\
Enter the component locale: optin:\'radio\'\
Add content/ component resource to: WORK_PHONE_CONTACT_CONSENT_TEXT\
![Granular_Consent.png](https://support.waysact.com/hc/article_attachments/4413619967375/Granular_Consent.png)

 

## Consent Block Component with Interested In

It is possible to display text with opt ins on the form, triggered by
the interested_in component. This allows you to offer different
newsletters based on the donor\'s interests. It is possible to add up to
3 constraints to the interested_in component - for example:

consent_layout_1_trigger:\'Orange\'

consent_layout_2_trigger:\'Apple + Orange\'

consent_layout_3_trigger:\'Banana\'

If a specific option is selected in interested_in (for example \"Apple\"
or \"Orange\", it will show the text in the corresponding component
resource:\
CONSENT_BLOCK_LAYOUT_1

CONSENT_BLOCK_LAYOUT_2

CONSENT_BLOCK_LAYOUT_3

In the resource component, it is possible to add text, to use \<p\>,
\<strong\>, and the following placeholders:\
{HOME_PHONE} {MOBILE_PHONE} {WORK_PHONE} {ADDRESS} {EMAIL} {MOBILE_SMS}
{VIDEO}

The placeholders will be replaced by a checkbox. If you prefer a radio
button, use instead:\
{HOME_PHONE_RADIO} {MOBILE_PHONE_RADIO} {WORK_PHONE_RADIO}
{ADDRESS_RADIO} {EMAIL_RADIO} {MOBILE_SMS_RADIO} {VIDEO_RADIO}

 

## Consent Block Component without Interested In

If you are wanting to use the Consent Block component without Interested
In, you\'ll need to add the locale \'standalone:true\' to the Consent
Block component. 

![Consent_Block.png](https://support.waysact.com/hc/article_attachments/4413669830543/Consent_Block.png)

## Default opt-in on consent block (NOT GDPR Compliant so can only be used outside the EU)

\
You can add a default optin for radio button in the consent block.\
Just add =YES in the placeholder, after \"RADIO\". Example:\
{EMAIL_RADIO=YES} {WORK_PHONE=YES}

## CSS

To add more distance between the radio button, use CSS:

form div#consent_copy span { margin-right: 50px;\
}

The default distance is 25px.

\
\
