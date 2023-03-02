# IPER Personal Information Validation - Norway only

Background: [https://iper.no/en/](https://iper.no/en/){rel="nofollow"}
in Norway offer a external lookup solution to get personal information
using the phone number. The donor needs to enter their mobile phone on
the form, and via IPER we would fetch :

-   first name (`firstName`)
-   middle Name (`middleName`)
-   last name (`lastName`)
-   Street name and house number (`addressLine`)
-   post code (`zipCode`)
-   city (`city`)
-   dob (`dob`)

Note - we concatenate the first name and middle name in our \"First
name\" field.

You can test it how it works:

-   Go to
    [https://www.legerutengrenser.no/stott-oss/bli-feltpartner](https://www.legerutengrenser.no/stott-oss/bli-feltpartner){rel="nofollow"}
-   Enter the phone number 93626272 in the field "Ditt telefonnummer"
-   Click on \'HENT OPPLYSNINGER\' in red
-   Open the console to see the JSON respond

Full user guides are available in the issue the feature was launched
through <https://github.com/waysact/evergiving/issues/5542>.

**Setup**

The fields need to be configured in the campaign setup

![Screen_Shot_2021-11-30_at_12.20.16_pm.png](https://support.waysact.com/hc/article_attachments/4410680919055/Screen_Shot_2021-11-30_at_12.20.16_pm.png)

and the form fields configured accordingly. When the \"Lookup\" button
is pressed, the validation occurs and the fields will be populated with
the relevant data.

![Screen_Shot_2021-11-30_at_12.21.36_pm.png](https://support.waysact.com/hc/article_attachments/4410688372879/Screen_Shot_2021-11-30_at_12.21.36_pm.png){width="408"
height="446"}

 

If the lookup doesn\'t result in any matches, the fundraisers should see
an error message letting them know the search failed and details in the
first name, last name, date of birth and address fields will be erased.

 

**Test numbers**

`94200363` will work, returning an address with building number and
subbuilding (31 B)\
`93626272` will work, returning an address with building number only\
`11111111` is a company number (lastname will be empty)\
`00110011` will return no result and will restart firstname, lastname,
dob and address fields.
