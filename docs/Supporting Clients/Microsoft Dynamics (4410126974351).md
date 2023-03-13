# Microsoft Dynamics

Released through <https://github.com/waysact/evergiving/issues/7379>

Dynamics has data objects called entities. It has standard Entities
called:

-   Contact (for individuals)
-   Account (for businesses)
-   Payment Method
-   Payment Schedule
-   Transaction

There is a new page in the Evergiving UI under the Account section to
add credentials and endpoints, along the lines of Salesforce. Click on
*Add Microsoft Dynamics Connection* and fill the following details:

-   Label: Name of your Dynamics account
-   Organization URI
-   Directory ID
-   Client ID
-   Client Secret

Similar to Salesforce, when you set a schema to be Microsoft Dynamics
output, you\'ll see a Microsoft Dynamics section appear in the schema
with fields for \"Microsoft Dynamics Connection\" and \"External Object
Name\".

Error handling is similar to Salesforce and the following will also work
in Dynamics schemas

`return JSON.stringify(pledge.lowsec_export_error);`

In the present implementation of MS Dynamics exports we had assumed that
the server can accept JSON string representations for all primitive
types, including numbers. It turns out that this is not the case. In the
JSON representation of a record sent to Dynamics we need to ensure that
a number is represented as a number, boolean as boolean, etc.

Note that this means that in existing Dynamics exporters, some columns
might have to be explicitly converted into a string (e.g. using the
\"format number\" transformation.)

 

 

 
