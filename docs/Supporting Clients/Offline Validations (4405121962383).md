# Offline Validations

Evergiving fundraiser forms uses many different types of validation on
various pieces of data entered into the form. However, some validations
are only possible when the tablet/form has access to the internet
because they validate data using online services. Where possible we will
validate everything that can be validated offline. Some examples of
offline validations include:\
- Final digit of card number Luhn algorithm\
- Phone number prefix/length\
- Email pattern (presence of @ and domain)

Some examples of checks that can only take place when the form is online
include:\
- Lookup of card information (brand, type, issuing bank, level)\
- Autocomplete/validation of postal addresses\
- Reliability score of email address (does the email look real)

### **IBAN Offline Validation**

**If Online:**

IBAN will be checked against the EISCD database of valid IBAN\'s :\
If Valid -\> Continue with pledge\
If Invalid -\> Prompt invalid entry exclude, prompt retry. Log all
activity

**If Offline**

IBAN will be checked against local logic and use modulas checking :\
If Validated by local logic, Continue\
If outside of logic range: Double entry on conditional acceptance.

*Once Online:*

Offline validation by local logic will be passed through the EISCD
database for counter-validation\
If found to be invalid -\> discard and log failed pledge\
Conditionally accepted pledges will face same validation once online
