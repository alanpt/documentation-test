# Personal Identification Number Component

The Personal Identification Number component is needed in specific
Countries and is custom coded for country-specific identification.

Add the locale \`masked:true\` and as soon as the user leaves the field
on the form, the value are replaced by \"XXX\", similar to the credit
card number. \`masked:false\` will turn off the masking.

**Costa Rica**

Logic used
[https://www.holadevs.com/pregunta/67231/regular-expression-to-validate-costa-rican-identity-card](https://www.holadevs.com/pregunta/67231/regular-expression-to-validate-costa-rican-identity-card){rel="nofollow"}

**Indonesia**

Three types of identication are accepted:

KTP (16 digits) e.g.3515 0841 0493 0003

SIM (12-13 digits) e.g. 7911 1514 3685 or 9304 1553 1064 1

Passport (7-8 digits) e.g. X375 534 or A734 9043

**Malaysia**

The last digit odd numbers should denote male while the last digit even
numbers denote female (e.g. xxxxxxxxxxx1 = Male donor, xxxxxxxxxxx2 =
female donor)

The Personal Identification Number validation for Malysia has been
updated to:

-   When donor selects Gender Male, validiate the Personal
    Identification Number is 12 digits long where last digit is 1, 3, 5,
    7 or 9
-   When donor selects Gender Female, validiate the Personal
    Identification Number is 12 digits long where last digit is 2, 4, 6,
    8, or 0
-   When donor selects Gender Other, validation the Personal
    Identification Number is 12 digits

**South Korea**

The logic used is \^\[0-9\]{6}-(\[0-9\]{6}\|\[0-9\]{7})\$.

**Spain**

In Spain, there are three types of ID:

-   **DNI** (Documento Nacional de Identidad): This is the ID number for
    Spanish citizens
-   **NIE** (Número de Identidad de Extranjero): This is the ID number
    for Foreigners living in Spain
-   **CIF** (Certificado de Identificación Fiscal): This is the tax ID
    number for all companies.

The componenent `Personal Identification Number` for the locale es-ES
accepts the three types of Identification number. Add a constraint to
the component to reject the CIF for \'Personal Identification Number\'
for es-ES: `allow_tax_id:false`

A CIF has the following format:

-   It begins with one of the following consonants: A, B, C, D, E, F, G,
    H, J, N, P, Q, R, S, U, V, WW
-   It has 8 number after the consonant
-   Total length is 9 (CNNNNNNNN)

**Sweden**

The personal identification number in Sweden contains 10 digits. the
first 6 digits are the birthdate, and we ask the last 4 digits. There is
a validation of those 4 digits based on the birth date.
