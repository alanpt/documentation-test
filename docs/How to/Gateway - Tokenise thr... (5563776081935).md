# Gateway - Tokenise through BBMS

Even if instant payments are through a different gateway, you can
tokenise through BBMS. The setup is via the edit campaign page and you
enable it by ticking \"Enable Tokenisation in Blackbaud BBPS\". The
charity needs to provide you with Blackbaud URL\*, Blackbaud Username\*,
Blackbaud Password\* and Blackbaud Database To Use\*.

In order to find that information:

[[1) Developer
must ]{style="background-color: white;"}]{style="color: #212327; font-size: 12.0pt;"}[[sign-up]{style="background-color: white; color: #1870b8; font-size: 12.0pt;"}](https://developer.sky.blackbaud.com/){style="color: blue; text-decoration: none none;"
rel="noreferrer"}[ for a developer
account ]{style="background-color: white; color: #212327; font-size: 12.0pt;"}[\
[2) The Organization will invite the Developer to their NXT
tenant/environment as a user.  If this is for Raiser\'s Edge, the
user **must **have Supervisor rights within Raiser\'s Edge in order to
use SKY API.]{style="background-color: white;"}\
[3) Developer must request and be approved for an API subscription key.
It will be automatically approved if the developer is already a user in
an NXT tenant/environment. (They need to accept the invitation sent in
Step 2)]{style="background-color: white;"}\
[4)
Developer ]{style="background-color: white;"}]{style="color: #212327; font-size: 12.0pt;"}[[creates
an
application]{style="background-color: white; color: #1870b8; font-size: 12.0pt;"}](https://developer.blackbaud.com/skyapi/docs/createapp){style="color: blue; text-decoration: none none;"
rel="noreferrer"}[, using
the ]{style="background-color: white; color: #212327; font-size: 12.0pt;"}[[Endpoint
Reference]{style="background-color: white; color: #1870b8; font-size: 12.0pt;"}](https://developer.sky.blackbaud.com/docs/services){style="color: blue; text-decoration: none none;"
rel="noreferrer"}[ to send data to NXT, and registers it to
his/her ]{style="background-color: white; color: #212327; font-size: 12.0pt;"}[[Developer
Account]{style="background-color: white; color: #1870b8; font-size: 12.0pt;"}](https://developer.blackbaud.com/skyapi/docs/addins){style="color: blue; text-decoration: none none;"
rel="noreferrer"}[. Registering it creates an Application
ID.]{style="background-color: white; color: #212327; font-size: 12.0pt;"}[\
[5) The Developer sends the Application ID to an Admin user of the NXT
tenant. The admin uses the ID to allow the Application to access the NXT
tenant\'s data.]{style="background-color: white;"}\
[5) Authenticated End User(s) must authorize
application]{style="background-color: white;"}]{style="color: #212327; font-size: 12.0pt;"}

Once created, you can create an app called Evergiving:

![BBPS.png](https://support.waysact.com/hc/article_attachments/5563774435599/BBPS.png)

 

![BBPS2.png](https://support.waysact.com/hc/article_attachments/5563768276495/BBPS2.png)

 

# []{#_Toc499554167}Credit card tokenization using Blackbaud CRM

## []{#_Toc499554168}1.1       Overview

 

Blackbaud CRM implements a SOAP web services API that exposes every
application feature.

Developer guide on the API can be accessed here -
<https://www.blackbaud.com/files/support/guides/infinitydevguide/infsdk-developer-help.htm#../Subsystems/inwebapi-developer-help/Content/InfinityWebAPI/coAPIOverview.htm%3FTocPath%3DWeb%2520API%7CAPI%2520Overview%7C_____0>

One such feature is Credit card tokenization.

The API implements a CreditCardVault method that takes in credit card
information and returns a token.

BB CRM makes use of BBPS service to tokenize the Credit card. The
tokenized card information is stored in the CRM Database. The token can
then be used in place of the full credit card number for any financial
transaction in CRM(like recurring gift payments)

API methods description can be accessed here -
<https://bbec1.blackbaud.com.au/bbAppFx/appfxwebservice.asmx>

 
