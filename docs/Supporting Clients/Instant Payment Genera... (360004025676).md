# Instant Payment General Information

A major refactor of instant payments is being proposed currently - more
information here
<https://github.com/waysact/waysact/blob/ef3334091ce3348eee8cbf915aab49db95d7211f/rfc-payments.md#rfc-refactoring-payment-flow-and-card-data-handling>

 - - - - - -

The setup cost is usually \$7,500 USD for customers outside AU / \$7,500
AUD + GST for Australian customers - with the exception of Flo2Cash
which is free. This one off fee is for the development work involved in
the setup process of the gateway implementation. Waysact bears the costs
of all future maintenance of that particular connection. Once
established, the connection can be copied and used for multiple
agencies. Any kickback on the setup costs, see James for pricing
options.

 

# **Setup Process**

Assuming that the campaign is already setup and needs only instant
payments to be turned on:

1.  Determine the payment gateway that will be used for payment
    processing.

2.  Determine the data requirements for the new process that will be
    used.

    a\. Will tokenization work?

    b\. How will the transaction data be reconciled with the rest of the
    pledge data in Waysact?

    c\. How will the transaction data be reconciled with the rest of the
    pledge data in the customer\'s CRM?

    d\. What additional data fields are required in the current exporter
    to ensure transaction data is recorded?

    e\. Once done, build data systems to suit: Waysact Exporter, CRM
    importer, Payment Gateway transaction fields.

3.  Once all those questions are reconciled, and the new data format is
    implemented, turn on the instant payments, and test the data flow
    with some test transactions.

4.  Verify that the transactions are working correctly on the front-end
    and back-end.

    a\. Verify data flow within Waysact, i.e. transaction data is
    processed properly from form to admin backend.

    b\. Verify transaction details with merchant processors, i.e. donors
    are seeing their transaction being withdrawn, and customer is seeing
    the transaction enter their account.

    c\. If not working, go back to #3 and confirm account settings both
    with payment gateway and in Waysact setup.

5.  Verify the data flow is working.

    a\. Ensure transaction data can be reconciled between CRM, merchant
    account and Waysact.

    b\. Ensure new data fields contain all of the information necessary
    in use cases, i.e. refunds, modifications, support, etc.

    c\. If not working, go back to #2 and confirm data setup and flow
    process.

6.  Done!

7.  If customers need to whitelist our IP Address, you can give them the
    following information:

    What are the Waysact IP addresses for whitelisting?

    Production IP addresses: 54.72.193.67 54.72.189.223

8.   

    Staging IP addresses: 54.194.40.53 54.194.38.255

# **What gateways does Evergiving connect with? **

Connect your own payment gateway to Evergiving and on or offline we\'ll
tokenise\
cards in to your merchant account, store them for you in our vault,
process payments at point of sale, even trigger the recurring payments
for you. Only Evergiving with level 1 PCI DSS certification offers this
flexibility. Evergiving has standardised connections to payment gateways
all around the world. If your gateway isn\'t listed below yet, please
get in touch :

 

<table style="height: 1785px; width: 1032px;" width="1369">
<colgroup>
<col style="width: 10%" />
<col style="width: 10%" />
<col style="width: 10%" />
<col style="width: 10%" />
<col style="width: 10%" />
<col style="width: 10%" />
<col style="width: 10%" />
<col style="width: 10%" />
<col style="width: 10%" />
<col style="width: 10%" />
</colgroup>
<tbody>
<tr class="odd" style="height: 112px;">
<td
style="width: 116.033px; height: 112px"><strong>Gateway</strong></td>
<td
style="width: 103.233px; height: 112px"><strong>Tokenisation</strong></td>
<td style="width: 84.15px; height: 112px"><strong>Instant
Payment</strong></td>
<td style="width: 92.5px; height: 112px"><strong>ARB (Automate Recurring
Billing)</strong></td>
<td style="width: 77.8167px; height: 112px"><strong>Call Centre
Support</strong></td>
<td style="width: 62.2px; height: 112px"><strong>Direct Debit
(EFT)</strong></td>
<td style="width: 102.683px; height: 112px"><strong>Direct Debit
Tokenisation</strong></td>
<td style="width: 76.9167px; height: 112px"><strong>Recurring
Debit</strong></td>
<td style="width: 119.833px; height: 112px"><strong>Direct Debit (EFT)
(donation and recurring frequencies)</strong></td>
<td style="width: 85.6333px; height: 112px"><p><strong>Direct
Debit</strong></p>
<p><strong>(EFT) (PSE)</strong></p></td>
</tr>
<tr class="even" style="height: 22px;">
<td style="width: 116.033px; height: 22px">2C2P</td>
<td style="width: 103.233px; height: 22px">Yes</td>
<td style="width: 84.15px; height: 22px">Yes</td>
<td style="width: 92.5px; height: 22px"> </td>
<td style="width: 77.8167px; height: 22px"> </td>
<td style="width: 62.2px; height: 22px"> </td>
<td style="width: 102.683px; height: 22px"> </td>
<td style="width: 76.9167px; height: 22px"> </td>
<td style="width: 119.833px; height: 22px"> </td>
<td style="width: 85.6333px; height: 22px"> </td>
</tr>
<tr class="odd" style="height: 22px;">
<td style="width: 116.033px; height: 22px">Authorize Net</td>
<td style="width: 103.233px; height: 22px">Yes</td>
<td style="width: 84.15px; height: 22px">Yes</td>
<td style="width: 92.5px; height: 22px">Yes</td>
<td style="width: 77.8167px; height: 22px"> </td>
<td style="width: 62.2px; height: 22px"> </td>
<td style="width: 102.683px; height: 22px"> </td>
<td style="width: 76.9167px; height: 22px"> </td>
<td style="width: 119.833px; height: 22px"> </td>
<td style="width: 85.6333px; height: 22px"> </td>
</tr>
<tr class="even" style="height: 22px;">
<td style="width: 116.033px; height: 22px">Bambora</td>
<td style="width: 103.233px; height: 22px">Yes</td>
<td style="width: 84.15px; height: 22px">Yes</td>
<td style="width: 92.5px; height: 22px"> </td>
<td style="width: 77.8167px; height: 22px"> </td>
<td style="width: 62.2px; height: 22px"> </td>
<td style="width: 102.683px; height: 22px"> </td>
<td style="width: 76.9167px; height: 22px"> </td>
<td style="width: 119.833px; height: 22px"> </td>
<td style="width: 85.6333px; height: 22px"> </td>
</tr>
<tr class="odd" style="height: 22px;">
<td style="width: 116.033px; height: 22px">Bancard vPOS </td>
<td style="width: 103.233px; height: 22px"> </td>
<td style="width: 84.15px; height: 22px">Yes</td>
<td style="width: 92.5px; height: 22px"> </td>
<td style="width: 77.8167px; height: 22px"> </td>
<td style="width: 62.2px; height: 22px"> </td>
<td style="width: 102.683px; height: 22px"> </td>
<td style="width: 76.9167px; height: 22px"> </td>
<td style="width: 119.833px; height: 22px"> </td>
<td style="width: 85.6333px; height: 22px"> </td>
</tr>
<tr class="even" style="height: 22px;">
<td style="width: 116.033px; height: 22px">Banwire</td>
<td style="width: 103.233px; height: 22px">Yes</td>
<td style="width: 84.15px; height: 22px">Yes</td>
<td style="width: 92.5px; height: 22px"> </td>
<td style="width: 77.8167px; height: 22px"> </td>
<td style="width: 62.2px; height: 22px"> </td>
<td style="width: 102.683px; height: 22px"> </td>
<td style="width: 76.9167px; height: 22px"> </td>
<td style="width: 119.833px; height: 22px"> </td>
<td style="width: 85.6333px; height: 22px"> </td>
</tr>
<tr class="odd" style="height: 22px;">
<td style="width: 116.033px; height: 22px">Billdesk</td>
<td style="width: 103.233px; height: 22px">Yes</td>
<td style="width: 84.15px; height: 22px">Yes</td>
<td style="width: 92.5px; height: 22px"> </td>
<td style="width: 77.8167px; height: 22px"> </td>
<td style="width: 62.2px; height: 22px"> </td>
<td style="width: 102.683px; height: 22px"> </td>
<td style="width: 76.9167px; height: 22px"> </td>
<td style="width: 119.833px; height: 22px"> </td>
<td style="width: 85.6333px; height: 22px"> </td>
</tr>
<tr class="even" style="height: 44px;">
<td style="width: 116.033px; height: 44px">Blackbaud Payment</td>
<td style="width: 103.233px; height: 44px">Yes</td>
<td style="width: 84.15px; height: 44px">Yes</td>
<td style="width: 92.5px; height: 44px"> </td>
<td style="width: 77.8167px; height: 44px">Yes</td>
<td style="width: 62.2px; height: 44px">Yes</td>
<td style="width: 102.683px; height: 44px">Yes</td>
<td style="width: 76.9167px; height: 44px"> </td>
<td style="width: 119.833px; height: 44px"> </td>
<td style="width: 85.6333px; height: 44px"> </td>
</tr>
<tr class="odd" style="height: 22px;">
<td style="width: 116.033px; height: 22px">BPoint</td>
<td style="width: 103.233px; height: 22px">Yes</td>
<td style="width: 84.15px; height: 22px">Yes</td>
<td style="width: 92.5px; height: 22px"> </td>
<td style="width: 77.8167px; height: 22px"> </td>
<td style="width: 62.2px; height: 22px"> </td>
<td style="width: 102.683px; height: 22px"> </td>
<td style="width: 76.9167px; height: 22px"> </td>
<td style="width: 119.833px; height: 22px"> </td>
<td style="width: 85.6333px; height: 22px"> </td>
</tr>
<tr class="even" style="height: 22px;">
<td style="width: 116.033px; height: 22px">Braintree Blue</td>
<td style="width: 103.233px; height: 22px">Yes</td>
<td style="width: 84.15px; height: 22px">Yes</td>
<td style="width: 92.5px; height: 22px">Yes</td>
<td style="width: 77.8167px; height: 22px"> </td>
<td style="width: 62.2px; height: 22px"> </td>
<td style="width: 102.683px; height: 22px"> </td>
<td style="width: 76.9167px; height: 22px"> </td>
<td style="width: 119.833px; height: 22px"> </td>
<td style="width: 85.6333px; height: 22px"> </td>
</tr>
<tr class="odd" style="height: 22px;">
<td style="width: 116.033px; height: 22px">Cardnet</td>
<td style="width: 103.233px; height: 22px"> </td>
<td style="width: 84.15px; height: 22px">Yes</td>
<td style="width: 92.5px; height: 22px"> </td>
<td style="width: 77.8167px; height: 22px"> </td>
<td style="width: 62.2px; height: 22px"> </td>
<td style="width: 102.683px; height: 22px"> </td>
<td style="width: 76.9167px; height: 22px"> </td>
<td style="width: 119.833px; height: 22px"> </td>
<td style="width: 85.6333px; height: 22px"> </td>
</tr>
<tr class="even" style="height: 22px;">
<td style="width: 116.033px; height: 22px">Charity Engine</td>
<td style="width: 103.233px; height: 22px">Yes</td>
<td style="width: 84.15px; height: 22px">Yes</td>
<td style="width: 92.5px; height: 22px"> </td>
<td style="width: 77.8167px; height: 22px"> </td>
<td style="width: 62.2px; height: 22px"> </td>
<td style="width: 102.683px; height: 22px"> </td>
<td style="width: 76.9167px; height: 22px"> </td>
<td style="width: 119.833px; height: 22px"> </td>
<td style="width: 85.6333px; height: 22px"> </td>
</tr>
<tr class="odd" style="height: 44px;">
<td style="width: 116.033px; height: 44px">Convio Luminate</td>
<td style="width: 103.233px; height: 44px"> </td>
<td style="width: 84.15px; height: 44px">Yes</td>
<td style="width: 92.5px; height: 44px"> </td>
<td style="width: 77.8167px; height: 44px"> </td>
<td style="width: 62.2px; height: 44px"> </td>
<td style="width: 102.683px; height: 44px"> </td>
<td style="width: 76.9167px; height: 44px"> </td>
<td style="width: 119.833px; height: 44px"> </td>
<td style="width: 85.6333px; height: 44px"> </td>
</tr>
<tr class="even" style="height: 22px;">
<td style="width: 116.033px; height: 22px">CredibanCo</td>
<td style="width: 103.233px; height: 22px">Yes</td>
<td style="width: 84.15px; height: 22px">Yes</td>
<td style="width: 92.5px; height: 22px"> </td>
<td style="width: 77.8167px; height: 22px">Yes</td>
<td style="width: 62.2px; height: 22px"> </td>
<td style="width: 102.683px; height: 22px"> </td>
<td style="width: 76.9167px; height: 22px"> </td>
<td style="width: 119.833px; height: 22px"> </td>
<td style="width: 85.6333px; height: 22px"> </td>
</tr>
<tr class="odd" style="height: 22px;">
<td style="width: 116.033px; height: 22px">CyberSource</td>
<td style="width: 103.233px; height: 22px">Yes</td>
<td style="width: 84.15px; height: 22px">Yes</td>
<td style="width: 92.5px; height: 22px"> </td>
<td style="width: 77.8167px; height: 22px">Yes</td>
<td style="width: 62.2px; height: 22px"> </td>
<td style="width: 102.683px; height: 22px"> </td>
<td style="width: 76.9167px; height: 22px"> </td>
<td style="width: 119.833px; height: 22px"> </td>
<td style="width: 85.6333px; height: 22px"> </td>
</tr>
<tr class="even" style="height: 44px;">
<td style="width: 116.033px; height: 44px">Engaging Networks</td>
<td style="width: 103.233px; height: 44px"> </td>
<td style="width: 84.15px; height: 44px"> </td>
<td style="width: 92.5px; height: 44px"> </td>
<td style="width: 77.8167px; height: 44px"> </td>
<td style="width: 62.2px; height: 44px"> </td>
<td style="width: 102.683px; height: 44px"> </td>
<td style="width: 76.9167px; height: 44px"> </td>
<td style="width: 119.833px; height: 44px">Yes</td>
<td style="width: 85.6333px; height: 44px"> </td>
</tr>
<tr class="odd" style="height: 22px;">
<td style="width: 116.033px; height: 22px">ePayco</td>
<td style="width: 103.233px; height: 22px"> </td>
<td style="width: 84.15px; height: 22px">Yes</td>
<td style="width: 92.5px; height: 22px"> </td>
<td style="width: 77.8167px; height: 22px">Yes</td>
<td style="width: 62.2px; height: 22px"> </td>
<td style="width: 102.683px; height: 22px"> </td>
<td style="width: 76.9167px; height: 22px"> </td>
<td style="width: 119.833px; height: 22px"> </td>
<td style="width: 85.6333px; height: 22px">Yes</td>
</tr>
<tr class="even" style="height: 22px;">
<td style="width: 116.033px; height: 22px">Euplatesc</td>
<td style="width: 103.233px; height: 22px"> </td>
<td style="width: 84.15px; height: 22px">Yes</td>
<td style="width: 92.5px; height: 22px">Yes</td>
<td style="width: 77.8167px; height: 22px"> </td>
<td style="width: 62.2px; height: 22px"> </td>
<td style="width: 102.683px; height: 22px"> </td>
<td style="width: 76.9167px; height: 22px"> </td>
<td style="width: 119.833px; height: 22px"> </td>
<td style="width: 85.6333px; height: 22px"> </td>
</tr>
<tr class="odd" style="height: 22px;">
<td style="width: 116.033px; height: 22px">Eway Rapid</td>
<td style="width: 103.233px; height: 22px">Yes</td>
<td style="width: 84.15px; height: 22px">Yes</td>
<td style="width: 92.5px; height: 22px"> </td>
<td style="width: 77.8167px; height: 22px"> </td>
<td style="width: 62.2px; height: 22px"> </td>
<td style="width: 102.683px; height: 22px"> </td>
<td style="width: 76.9167px; height: 22px"> </td>
<td style="width: 119.833px; height: 22px"> </td>
<td style="width: 85.6333px; height: 22px"> </td>
</tr>
<tr class="even" style="height: 22px;">
<td style="width: 116.033px; height: 22px">Ezidebit</td>
<td style="width: 103.233px; height: 22px">Yes</td>
<td style="width: 84.15px; height: 22px">Yes</td>
<td style="width: 92.5px; height: 22px">Yes</td>
<td style="width: 77.8167px; height: 22px"> </td>
<td style="width: 62.2px; height: 22px"> </td>
<td style="width: 102.683px; height: 22px"> </td>
<td style="width: 76.9167px; height: 22px"> </td>
<td style="width: 119.833px; height: 22px"> </td>
<td style="width: 85.6333px; height: 22px"> </td>
</tr>
<tr class="odd" style="height: 22px;">
<td style="width: 116.033px; height: 22px">Fat Zebra</td>
<td style="width: 103.233px; height: 22px">Yes</td>
<td style="width: 84.15px; height: 22px">Yes</td>
<td style="width: 92.5px; height: 22px"> </td>
<td style="width: 77.8167px; height: 22px"> </td>
<td style="width: 62.2px; height: 22px"> </td>
<td style="width: 102.683px; height: 22px"> </td>
<td style="width: 76.9167px; height: 22px"> </td>
<td style="width: 119.833px; height: 22px"> </td>
<td style="width: 85.6333px; height: 22px"> </td>
</tr>
<tr class="even" style="height: 44px;">
<td style="width: 116.033px; height: 44px">Finansbank (Nestpay)</td>
<td style="width: 103.233px; height: 44px">Yes</td>
<td style="width: 84.15px; height: 44px">Yes</td>
<td style="width: 92.5px; height: 44px"> </td>
<td style="width: 77.8167px; height: 44px"> </td>
<td style="width: 62.2px; height: 44px"> </td>
<td style="width: 102.683px; height: 44px"> </td>
<td style="width: 76.9167px; height: 44px"> </td>
<td style="width: 119.833px; height: 44px"> </td>
<td style="width: 85.6333px; height: 44px"> </td>
</tr>
<tr class="odd" style="height: 22px;">
<td style="width: 116.033px; height: 22px">Flo2Cash</td>
<td style="width: 103.233px; height: 22px">Yes</td>
<td style="width: 84.15px; height: 22px">Yes</td>
<td style="width: 92.5px; height: 22px">Yes</td>
<td style="width: 77.8167px; height: 22px"> </td>
<td style="width: 62.2px; height: 22px"> </td>
<td style="width: 102.683px; height: 22px"> </td>
<td style="width: 76.9167px; height: 22px"> </td>
<td style="width: 119.833px; height: 22px"> </td>
<td style="width: 85.6333px; height: 22px"> </td>
</tr>
<tr class="even" style="height: 22px;">
<td style="width: 116.033px; height: 22px">Flo2Cash REST</td>
<td style="width: 103.233px; height: 22px">Yes</td>
<td style="width: 84.15px; height: 22px">Yes</td>
<td style="width: 92.5px; height: 22px">Yes</td>
<td style="width: 77.8167px; height: 22px"> </td>
<td style="width: 62.2px; height: 22px"> </td>
<td style="width: 102.683px; height: 22px"> </td>
<td style="width: 76.9167px; height: 22px">Yes</td>
<td style="width: 119.833px; height: 22px"> </td>
<td style="width: 85.6333px; height: 22px"> </td>
</tr>
<tr class="odd" style="height: 22px;">
<td style="width: 116.033px; height: 22px">HSBC</td>
<td style="width: 103.233px; height: 22px"> </td>
<td style="width: 84.15px; height: 22px"> </td>
<td style="width: 92.5px; height: 22px"> </td>
<td style="width: 77.8167px; height: 22px"> </td>
<td style="width: 62.2px; height: 22px">Yes</td>
<td style="width: 102.683px; height: 22px"> </td>
<td style="width: 76.9167px; height: 22px"> </td>
<td style="width: 119.833px; height: 22px"> </td>
<td style="width: 85.6333px; height: 22px"> </td>
</tr>
<tr class="even" style="height: 22px;">
<td style="width: 116.033px; height: 22px">iATS</td>
<td style="width: 103.233px; height: 22px">Yes</td>
<td style="width: 84.15px; height: 22px">Yes</td>
<td style="width: 92.5px; height: 22px">Yes</td>
<td style="width: 77.8167px; height: 22px"> </td>
<td style="width: 62.2px; height: 22px">Yes</td>
<td style="width: 102.683px; height: 22px">Yes</td>
<td style="width: 76.9167px; height: 22px">Yes</td>
<td style="width: 119.833px; height: 22px"> </td>
<td style="width: 85.6333px; height: 22px"> </td>
</tr>
<tr class="odd" style="height: 22px;">
<td style="width: 116.033px; height: 22px">IP Payments</td>
<td style="width: 103.233px; height: 22px">Yes</td>
<td style="width: 84.15px; height: 22px">Yes</td>
<td style="width: 92.5px; height: 22px"> </td>
<td style="width: 77.8167px; height: 22px"> </td>
<td style="width: 62.2px; height: 22px"> </td>
<td style="width: 102.683px; height: 22px"> </td>
<td style="width: 76.9167px; height: 22px"> </td>
<td style="width: 119.833px; height: 22px"> </td>
<td style="width: 85.6333px; height: 22px"> </td>
</tr>
<tr class="even" style="height: 22px;">
<td style="width: 116.033px; height: 22px">Jackson River</td>
<td style="width: 103.233px; height: 22px"> </td>
<td style="width: 84.15px; height: 22px">Yes</td>
<td style="width: 92.5px; height: 22px"> </td>
<td style="width: 77.8167px; height: 22px"> </td>
<td style="width: 62.2px; height: 22px">Yes</td>
<td style="width: 102.683px; height: 22px"> </td>
<td style="width: 76.9167px; height: 22px"> </td>
<td style="width: 119.833px; height: 22px"> </td>
<td style="width: 85.6333px; height: 22px"> </td>
</tr>
<tr class="odd" style="height: 22px;">
<td style="width: 116.033px; height: 22px">Mercado Pago</td>
<td style="width: 103.233px; height: 22px"> </td>
<td style="width: 84.15px; height: 22px">Yes</td>
<td style="width: 92.5px; height: 22px"> </td>
<td style="width: 77.8167px; height: 22px"> </td>
<td style="width: 62.2px; height: 22px"> </td>
<td style="width: 102.683px; height: 22px"> </td>
<td style="width: 76.9167px; height: 22px"> </td>
<td style="width: 119.833px; height: 22px"> </td>
<td style="width: 85.6333px; height: 22px"> </td>
</tr>
<tr class="even" style="height: 22px;">
<td style="width: 116.033px; height: 22px">Merchant First</td>
<td style="width: 103.233px; height: 22px">Yes</td>
<td style="width: 84.15px; height: 22px">Yes</td>
<td style="width: 92.5px; height: 22px"> </td>
<td style="width: 77.8167px; height: 22px"> </td>
<td style="width: 62.2px; height: 22px"> </td>
<td style="width: 102.683px; height: 22px"> </td>
<td style="width: 76.9167px; height: 22px"> </td>
<td style="width: 119.833px; height: 22px"> </td>
<td style="width: 85.6333px; height: 22px"> </td>
</tr>
<tr class="odd" style="height: 22px;">
<td style="width: 116.033px; height: 22px">Merchant Suite</td>
<td style="width: 103.233px; height: 22px">Yes</td>
<td style="width: 84.15px; height: 22px">Yes</td>
<td style="width: 92.5px; height: 22px"> </td>
<td style="width: 77.8167px; height: 22px"> </td>
<td style="width: 62.2px; height: 22px"> </td>
<td style="width: 102.683px; height: 22px"> </td>
<td style="width: 76.9167px; height: 22px"> </td>
<td style="width: 119.833px; height: 22px"> </td>
<td style="width: 85.6333px; height: 22px"> </td>
</tr>
<tr class="even" style="height: 22px;">
<td style="width: 116.033px; height: 22px">Mobile Express</td>
<td style="width: 103.233px; height: 22px">Yes</td>
<td style="width: 84.15px; height: 22px">Yes</td>
<td style="width: 92.5px; height: 22px"> </td>
<td style="width: 77.8167px; height: 22px"> </td>
<td style="width: 62.2px; height: 22px"> </td>
<td style="width: 102.683px; height: 22px"> </td>
<td style="width: 76.9167px; height: 22px"> </td>
<td style="width: 119.833px; height: 22px"> </td>
<td style="width: 85.6333px; height: 22px"> </td>
</tr>
<tr class="odd" style="height: 22px;">
<td style="width: 116.033px; height: 22px">Moneris CA</td>
<td style="width: 103.233px; height: 22px">Yes</td>
<td style="width: 84.15px; height: 22px">Yes</td>
<td style="width: 92.5px; height: 22px"> </td>
<td style="width: 77.8167px; height: 22px"> </td>
<td style="width: 62.2px; height: 22px"> </td>
<td style="width: 102.683px; height: 22px"> </td>
<td style="width: 76.9167px; height: 22px"> </td>
<td style="width: 119.833px; height: 22px"> </td>
<td style="width: 85.6333px; height: 22px"> </td>
</tr>
<tr class="even" style="height: 22px;">
<td style="width: 116.033px; height: 22px">NAB Transact</td>
<td style="width: 103.233px; height: 22px">Yes</td>
<td style="width: 84.15px; height: 22px">Yes</td>
<td style="width: 92.5px; height: 22px"> </td>
<td style="width: 77.8167px; height: 22px"> </td>
<td style="width: 62.2px; height: 22px"> </td>
<td style="width: 102.683px; height: 22px"> </td>
<td style="width: 76.9167px; height: 22px"> </td>
<td style="width: 119.833px; height: 22px"> </td>
<td style="width: 85.6333px; height: 22px"> </td>
</tr>
<tr class="odd" style="height: 44px;">
<td style="width: 116.033px; height: 44px">Netbanx Paysafe</td>
<td style="width: 103.233px; height: 44px">Yes</td>
<td style="width: 84.15px; height: 44px">Yes</td>
<td style="width: 92.5px; height: 44px"> </td>
<td style="width: 77.8167px; height: 44px"> </td>
<td style="width: 62.2px; height: 44px"> </td>
<td style="width: 102.683px; height: 44px"> </td>
<td style="width: 76.9167px; height: 44px"> </td>
<td style="width: 119.833px; height: 44px"> </td>
<td style="width: 85.6333px; height: 44px"> </td>
</tr>
<tr class="even" style="height: 44px;">
<td style="width: 116.033px; height: 44px">Network International</td>
<td style="width: 103.233px; height: 44px"> </td>
<td style="width: 84.15px; height: 44px">Yes</td>
<td style="width: 92.5px; height: 44px"> </td>
<td style="width: 77.8167px; height: 44px"> </td>
<td style="width: 62.2px; height: 44px"> </td>
<td style="width: 102.683px; height: 44px"> </td>
<td style="width: 76.9167px; height: 44px"> </td>
<td style="width: 119.833px; height: 44px"> </td>
<td style="width: 85.6333px; height: 44px"> </td>
</tr>
<tr class="odd" style="height: 22px;">
<td style="width: 116.033px; height: 22px">Ogone</td>
<td style="width: 103.233px; height: 22px">Yes</td>
<td style="width: 84.15px; height: 22px">Yes</td>
<td style="width: 92.5px; height: 22px"> </td>
<td style="width: 77.8167px; height: 22px"> </td>
<td style="width: 62.2px; height: 22px"> </td>
<td style="width: 102.683px; height: 22px"> </td>
<td style="width: 76.9167px; height: 22px"> </td>
<td style="width: 119.833px; height: 22px"> </td>
<td style="width: 85.6333px; height: 22px"> </td>
</tr>
<tr class="even" style="height: 22px;">
<td style="width: 116.033px; height: 22px">Openpay</td>
<td style="width: 103.233px; height: 22px">Yes</td>
<td style="width: 84.15px; height: 22px">Yes</td>
<td style="width: 92.5px; height: 22px"> </td>
<td style="width: 77.8167px; height: 22px"> </td>
<td style="width: 62.2px; height: 22px"> </td>
<td style="width: 102.683px; height: 22px"> </td>
<td style="width: 76.9167px; height: 22px"> </td>
<td style="width: 119.833px; height: 22px"> </td>
<td style="width: 85.6333px; height: 22px"> </td>
</tr>
<tr class="odd" style="height: 22px;">
<td style="width: 116.033px; height: 22px">Orbital Chase</td>
<td style="width: 103.233px; height: 22px">Yes</td>
<td style="width: 84.15px; height: 22px">Yes</td>
<td style="width: 92.5px; height: 22px"> </td>
<td style="width: 77.8167px; height: 22px"> </td>
<td style="width: 62.2px; height: 22px"> </td>
<td style="width: 102.683px; height: 22px"> </td>
<td style="width: 76.9167px; height: 22px"> </td>
<td style="width: 119.833px; height: 22px"> </td>
<td style="width: 85.6333px; height: 22px"> </td>
</tr>
<tr class="even" style="height: 22px;">
<td style="width: 116.033px; height: 22px">PayDock</td>
<td style="width: 103.233px; height: 22px">Yes</td>
<td style="width: 84.15px; height: 22px">Yes</td>
<td style="width: 92.5px; height: 22px"> </td>
<td style="width: 77.8167px; height: 22px"> </td>
<td style="width: 62.2px; height: 22px"> </td>
<td style="width: 102.683px; height: 22px"> </td>
<td style="width: 76.9167px; height: 22px"> </td>
<td style="width: 119.833px; height: 22px"> </td>
<td style="width: 85.6333px; height: 22px"> </td>
</tr>
<tr class="odd" style="height: 22px;">
<td style="width: 116.033px; height: 22px">Payeezy</td>
<td style="width: 103.233px; height: 22px">Yes</td>
<td style="width: 84.15px; height: 22px">Yes</td>
<td style="width: 92.5px; height: 22px"> </td>
<td style="width: 77.8167px; height: 22px"> </td>
<td style="width: 62.2px; height: 22px"> </td>
<td style="width: 102.683px; height: 22px"> </td>
<td style="width: 76.9167px; height: 22px"> </td>
<td style="width: 119.833px; height: 22px"> </td>
<td style="width: 85.6333px; height: 22px"> </td>
</tr>
<tr class="even" style="height: 22px;">
<td style="width: 116.033px; height: 22px">Payflow Pro</td>
<td style="width: 103.233px; height: 22px">Yes</td>
<td style="width: 84.15px; height: 22px">Yes</td>
<td style="width: 92.5px; height: 22px"> </td>
<td style="width: 77.8167px; height: 22px"> </td>
<td style="width: 62.2px; height: 22px"> </td>
<td style="width: 102.683px; height: 22px"> </td>
<td style="width: 76.9167px; height: 22px"> </td>
<td style="width: 119.833px; height: 22px"> </td>
<td style="width: 85.6333px; height: 22px"> </td>
</tr>
<tr class="odd" style="height: 44px;">
<td style="width: 116.033px; height: 44px">Payment Express</td>
<td style="width: 103.233px; height: 44px">Yes</td>
<td style="width: 84.15px; height: 44px">Yes</td>
<td style="width: 92.5px; height: 44px"> </td>
<td style="width: 77.8167px; height: 44px"> </td>
<td style="width: 62.2px; height: 44px"> </td>
<td style="width: 102.683px; height: 44px"> </td>
<td style="width: 76.9167px; height: 44px"> </td>
<td style="width: 119.833px; height: 44px"> </td>
<td style="width: 85.6333px; height: 44px"> </td>
</tr>
<tr class="even" style="height: 67px;">
<td style="width: 116.033px; height: 67px">Payment Solution Inc
(PSI)</td>
<td style="width: 103.233px; height: 67px">Yes</td>
<td style="width: 84.15px; height: 67px">Yes</td>
<td style="width: 92.5px; height: 67px"> </td>
<td style="width: 77.8167px; height: 67px"> </td>
<td style="width: 62.2px; height: 67px"> </td>
<td style="width: 102.683px; height: 67px"> </td>
<td style="width: 76.9167px; height: 67px"> </td>
<td style="width: 119.833px; height: 67px"> </td>
<td style="width: 85.6333px; height: 67px"> </td>
</tr>
<tr class="odd" style="height: 22px;">
<td style="width: 116.033px; height: 22px">Payway</td>
<td style="width: 103.233px; height: 22px">Yes</td>
<td style="width: 84.15px; height: 22px">Yes</td>
<td style="width: 92.5px; height: 22px"> </td>
<td style="width: 77.8167px; height: 22px"> </td>
<td style="width: 62.2px; height: 22px"> </td>
<td style="width: 102.683px; height: 22px"> </td>
<td style="width: 76.9167px; height: 22px"> </td>
<td style="width: 119.833px; height: 22px"> </td>
<td style="width: 85.6333px; height: 22px"> </td>
</tr>
<tr class="even" style="height: 22px;">
<td style="width: 116.033px; height: 22px">Place To Pay</td>
<td style="width: 103.233px; height: 22px"> </td>
<td style="width: 84.15px; height: 22px">Yes</td>
<td style="width: 92.5px; height: 22px">Yes</td>
<td style="width: 77.8167px; height: 22px"> </td>
<td style="width: 62.2px; height: 22px"> </td>
<td style="width: 102.683px; height: 22px"> </td>
<td style="width: 76.9167px; height: 22px"> </td>
<td style="width: 119.833px; height: 22px"> </td>
<td style="width: 85.6333px; height: 22px"> </td>
</tr>
<tr class="odd" style="height: 22px;">
<td style="width: 116.033px; height: 22px">QValent</td>
<td style="width: 103.233px; height: 22px">Yes</td>
<td style="width: 84.15px; height: 22px">Yes</td>
<td style="width: 92.5px; height: 22px"> </td>
<td style="width: 77.8167px; height: 22px"> </td>
<td style="width: 62.2px; height: 22px"> </td>
<td style="width: 102.683px; height: 22px"> </td>
<td style="width: 76.9167px; height: 22px"> </td>
<td style="width: 119.833px; height: 22px"> </td>
<td style="width: 85.6333px; height: 22px"> </td>
</tr>
<tr class="even" style="height: 22px;">
<td style="width: 116.033px; height: 22px">Rapidata</td>
<td style="width: 103.233px; height: 22px">TBC</td>
<td style="width: 84.15px; height: 22px">TBC</td>
<td style="width: 92.5px; height: 22px"> </td>
<td style="width: 77.8167px; height: 22px"> </td>
<td style="width: 62.2px; height: 22px"> </td>
<td style="width: 102.683px; height: 22px"> </td>
<td style="width: 76.9167px; height: 22px"> </td>
<td style="width: 119.833px; height: 22px"> </td>
<td style="width: 85.6333px; height: 22px"> </td>
</tr>
<tr class="odd" style="height: 22px;">
<td style="width: 116.033px; height: 22px">Realex</td>
<td style="width: 103.233px; height: 22px">Yes</td>
<td style="width: 84.15px; height: 22px">Yes</td>
<td style="width: 92.5px; height: 22px"> </td>
<td style="width: 77.8167px; height: 22px"> </td>
<td style="width: 62.2px; height: 22px"> </td>
<td style="width: 102.683px; height: 22px"> </td>
<td style="width: 76.9167px; height: 22px"> </td>
<td style="width: 119.833px; height: 22px"> </td>
<td style="width: 85.6333px; height: 22px"> </td>
</tr>
<tr class="even" style="height: 22px;">
<td style="width: 116.033px; height: 22px">Sage</td>
<td style="width: 103.233px; height: 22px">Yes</td>
<td style="width: 84.15px; height: 22px">Yes</td>
<td style="width: 92.5px; height: 22px"> </td>
<td style="width: 77.8167px; height: 22px"> </td>
<td style="width: 62.2px; height: 22px"> </td>
<td style="width: 102.683px; height: 22px"> </td>
<td style="width: 76.9167px; height: 22px"> </td>
<td style="width: 119.833px; height: 22px"> </td>
<td style="width: 85.6333px; height: 22px"> </td>
</tr>
<tr class="odd" style="height: 22px;">
<td style="width: 116.033px; height: 22px">SecureCo</td>
<td style="width: 103.233px; height: 22px">Yes</td>
<td style="width: 84.15px; height: 22px">Yes</td>
<td style="width: 92.5px; height: 22px"> </td>
<td style="width: 77.8167px; height: 22px"> </td>
<td style="width: 62.2px; height: 22px"> </td>
<td style="width: 102.683px; height: 22px"> </td>
<td style="width: 76.9167px; height: 22px"> </td>
<td style="width: 119.833px; height: 22px"> </td>
<td style="width: 85.6333px; height: 22px"> </td>
</tr>
<tr class="even" style="height: 22px;">
<td style="width: 116.033px; height: 22px">SecurePay AU</td>
<td style="width: 103.233px; height: 22px">Yes</td>
<td style="width: 84.15px; height: 22px">Yes</td>
<td style="width: 92.5px; height: 22px"> </td>
<td style="width: 77.8167px; height: 22px"> </td>
<td style="width: 62.2px; height: 22px"> </td>
<td style="width: 102.683px; height: 22px"> </td>
<td style="width: 76.9167px; height: 22px"> </td>
<td style="width: 119.833px; height: 22px"> </td>
<td style="width: 85.6333px; height: 22px"> </td>
</tr>
<tr class="odd" style="height: 22px;">
<td style="width: 116.033px; height: 22px">Secure Trading</td>
<td style="width: 103.233px; height: 22px">Yes</td>
<td style="width: 84.15px; height: 22px">Yes</td>
<td style="width: 92.5px; height: 22px"> </td>
<td style="width: 77.8167px; height: 22px">Yes</td>
<td style="width: 62.2px; height: 22px"> </td>
<td style="width: 102.683px; height: 22px"> </td>
<td style="width: 76.9167px; height: 22px"> </td>
<td style="width: 119.833px; height: 22px"> </td>
<td style="width: 85.6333px; height: 22px"> </td>
</tr>
<tr class="even" style="height: 22px;">
<td style="width: 116.033px; height: 22px">Seerbit</td>
<td style="width: 103.233px; height: 22px"> </td>
<td style="width: 84.15px; height: 22px">Yes</td>
<td style="width: 92.5px; height: 22px">Yes</td>
<td style="width: 77.8167px; height: 22px"> </td>
<td style="width: 62.2px; height: 22px"> </td>
<td style="width: 102.683px; height: 22px"> </td>
<td style="width: 76.9167px; height: 22px"> </td>
<td style="width: 119.833px; height: 22px"> </td>
<td style="width: 85.6333px; height: 22px"> </td>
</tr>
<tr class="odd" style="height: 22px;">
<td style="width: 116.033px; height: 22px">Smile Train</td>
<td style="width: 103.233px; height: 22px">Yes</td>
<td style="width: 84.15px; height: 22px">Yes</td>
<td style="width: 92.5px; height: 22px"> </td>
<td style="width: 77.8167px; height: 22px"> </td>
<td style="width: 62.2px; height: 22px"> </td>
<td style="width: 102.683px; height: 22px"> </td>
<td style="width: 76.9167px; height: 22px"> </td>
<td style="width: 119.833px; height: 22px"> </td>
<td style="width: 85.6333px; height: 22px"> </td>
</tr>
<tr class="even" style="height: 22px;">
<td style="width: 116.033px; height: 22px">Spreedly</td>
<td style="width: 103.233px; height: 22px">Yes</td>
<td style="width: 84.15px; height: 22px">Yes</td>
<td style="width: 92.5px; height: 22px"> </td>
<td style="width: 77.8167px; height: 22px"> </td>
<td style="width: 62.2px; height: 22px"> </td>
<td style="width: 102.683px; height: 22px"> </td>
<td style="width: 76.9167px; height: 22px"> </td>
<td style="width: 119.833px; height: 22px"> </td>
<td style="width: 85.6333px; height: 22px"> </td>
</tr>
<tr class="odd" style="height: 44px;">
<td style="width: 116.033px; height: 44px">Spreedly (3rd) Party</td>
<td style="width: 103.233px; height: 44px">Yes</td>
<td style="width: 84.15px; height: 44px">Yes</td>
<td style="width: 92.5px; height: 44px"> </td>
<td style="width: 77.8167px; height: 44px"> </td>
<td style="width: 62.2px; height: 44px"> </td>
<td style="width: 102.683px; height: 44px"> </td>
<td style="width: 76.9167px; height: 44px"> </td>
<td style="width: 119.833px; height: 44px"> </td>
<td style="width: 85.6333px; height: 44px"> </td>
</tr>
<tr class="even" style="height: 22px;">
<td style="width: 116.033px; height: 22px">Stripe</td>
<td style="width: 103.233px; height: 22px">Yes</td>
<td style="width: 84.15px; height: 22px">Yes</td>
<td style="width: 92.5px; height: 22px">Yes</td>
<td style="width: 77.8167px; height: 22px"> </td>
<td style="width: 62.2px; height: 22px"> </td>
<td style="width: 102.683px; height: 22px"> </td>
<td style="width: 76.9167px; height: 22px"> </td>
<td style="width: 119.833px; height: 22px"> </td>
<td style="width: 85.6333px; height: 22px"> </td>
</tr>
<tr class="odd" style="height: 44px;">
<td style="width: 116.033px; height: 44px">Stripe Payment Intents</td>
<td style="width: 103.233px; height: 44px">Yes</td>
<td style="width: 84.15px; height: 44px">Yes</td>
<td style="width: 92.5px; height: 44px">Yes</td>
<td style="width: 77.8167px; height: 44px">Yes</td>
<td style="width: 62.2px; height: 44px"> </td>
<td style="width: 102.683px; height: 44px"> </td>
<td style="width: 76.9167px; height: 44px"> </td>
<td style="width: 119.833px; height: 44px"> </td>
<td style="width: 85.6333px; height: 44px"> </td>
</tr>
<tr class="even" style="height: 22px;">
<td style="width: 116.033px; height: 22px">Vantiv/Litle</td>
<td style="width: 103.233px; height: 22px">Yes</td>
<td style="width: 84.15px; height: 22px">Yes</td>
<td style="width: 92.5px; height: 22px"> </td>
<td style="width: 77.8167px; height: 22px">Yes</td>
<td style="width: 62.2px; height: 22px"> </td>
<td style="width: 102.683px; height: 22px">Yes</td>
<td style="width: 76.9167px; height: 22px"> </td>
<td style="width: 119.833px; height: 22px"> </td>
<td style="width: 85.6333px; height: 22px"> </td>
</tr>
<tr class="odd" style="height: 22px;">
<td style="width: 116.033px; height: 22px">Wompi</td>
<td style="width: 103.233px; height: 22px"> </td>
<td style="width: 84.15px; height: 22px">Yes</td>
<td style="width: 92.5px; height: 22px"> </td>
<td style="width: 77.8167px; height: 22px"> </td>
<td style="width: 62.2px; height: 22px">Yes</td>
<td style="width: 102.683px; height: 22px"> </td>
<td style="width: 76.9167px; height: 22px"> </td>
<td style="width: 119.833px; height: 22px"> </td>
<td style="width: 85.6333px; height: 22px"> </td>
</tr>
<tr class="even" style="height: 22px;">
<td style="width: 116.033px; height: 22px">WorldNet TPS</td>
<td style="width: 103.233px; height: 22px">Yes</td>
<td style="width: 84.15px; height: 22px">Yes</td>
<td style="width: 92.5px; height: 22px">Yes</td>
<td style="width: 77.8167px; height: 22px"> </td>
<td style="width: 62.2px; height: 22px"> </td>
<td style="width: 102.683px; height: 22px"> </td>
<td style="width: 76.9167px; height: 22px"> </td>
<td style="width: 119.833px; height: 22px"> </td>
<td style="width: 85.6333px; height: 22px"> </td>
</tr>
<tr class="odd" style="height: 22px;">
<td style="width: 116.033px; height: 22px">Worldpay Global</td>
<td style="width: 103.233px; height: 22px">Yes</td>
<td style="width: 84.15px; height: 22px">Yes</td>
<td style="width: 92.5px; height: 22px"> </td>
<td style="width: 77.8167px; height: 22px"> </td>
<td style="width: 62.2px; height: 22px"> </td>
<td style="width: 102.683px; height: 22px"> </td>
<td style="width: 76.9167px; height: 22px"> </td>
<td style="width: 119.833px; height: 22px"> </td>
<td style="width: 85.6333px; height: 22px"> </td>
</tr>
<tr class="even" style="height: 44px;">
<td style="width: 116.033px; height: 44px">Worldpay Global Business</td>
<td style="width: 103.233px; height: 44px">Yes</td>
<td style="width: 84.15px; height: 44px">Yes</td>
<td style="width: 92.5px; height: 44px"> </td>
<td style="width: 77.8167px; height: 44px"> </td>
<td style="width: 62.2px; height: 44px"> </td>
<td style="width: 102.683px; height: 44px"> </td>
<td style="width: 76.9167px; height: 44px"> </td>
<td style="width: 119.833px; height: 44px"> </td>
<td style="width: 85.6333px; height: 44px"> </td>
</tr>
<tr class="odd" style="height: 22px;">
<td style="width: 116.033px; height: 22px">Zuora</td>
<td style="width: 103.233px; height: 22px">Yes</td>
<td style="width: 84.15px; height: 22px">Yes</td>
<td style="width: 92.5px; height: 22px"> </td>
<td style="width: 77.8167px; height: 22px"> </td>
<td style="width: 62.2px; height: 22px"> </td>
<td style="width: 102.683px; height: 22px"> </td>
<td style="width: 76.9167px; height: 22px"> </td>
<td style="width: 119.833px; height: 22px"> </td>
<td style="width: 85.6333px; height: 22px"> </td>
</tr>
<tr class="even">
<td style="width: 116.033px"><em>Current at</em></td>
<td style="width: 103.233px"><em>2 Nov 2021</em></td>
<td style="width: 84.15px"> </td>
<td style="width: 92.5px"> </td>
<td style="width: 77.8167px"> </td>
<td style="width: 62.2px"> </td>
<td style="width: 102.683px"> </td>
<td style="width: 76.9167px"> </td>
<td style="width: 119.833px"> </td>
<td style="width: 85.6333px"> </td>
</tr>
</tbody>
</table>

 

# **FAQ**

*1.  Can an instant payment be processed if it was captured offline,
then re-sent once online?*

There is a business rule against submitting a re-sent pledge for instant
payment processing. It has to do with the credit card being present at
the time of processing. It is illegal for businesses to store the CVV of
a credit card, so we can\'t process instant payments from pledges that
are re-submitted due to being offline at the time of pledge capture. We
can\'t process an instant payment for a pledge that is not actively
typing in their CVV.

Some gateways do cater for offline instant payments and these can be
enabled in the campaign setup page. The payment will be attempted as
soon as the pledge hits our servers - so offline payments are just a
process that triggers the payment call when the pledge data is received
and not from the device with the "take instant payment" button.

 

*2. Do we receive a transaction token for failed transactions?*

Yes.

 

*3. If there is no token created, can we create one at a later stage?*

Yes, through the Waysact edit pledge page.

 

*4. When an iPad loses connection or is not able to take payment live,
will the 4th page of the pledge form will ask for the pledge to be
saved?*

Yes. If the iPad is offline, the iPad will first attempt to save the
transaction, but then when it realizes it is offline, it will change the
\"Take Instant Payment\" button to \"Save\". The fundraiser must press
the \"Save\" button to save the pledge, then it will be saved to the
iPad until the iPad has data service again. Then, it will automatically
upload the pledge to the Waysact server as a \"pending\" pledge.

 

*5 Why did tokenization fail for a pledge?*

Papertrail will show the reason for failed tokenization - often you will
see general card declines or insufficient funds as the cause.

 

*6. How come the credit card was validated when the donor used the wrong
address?*

Waysact has no control over what information the banks use to validate
the credit card details. We send all of the information to the bank, and
the bank decides what to use and what not to use to validate the credit
card.

 

*7. How are the payment gateway responses stored on the pledge?*

The most recent attempt is always stored as the first response on the
pledge record. So, if a fundraiser attempts a transaction that is
declined due to a typo, fixes the typo, and attempts a second
transaction that is approved the \"second\", approved transaction will
appear first on the pledge record. Sometimes when the first and second
messages come very close together they are stored in an incorrect order,
but we have an issue to fix that
<https://github.com/waysact/evergiving/issues/3956>.

 

*8. How do you deal with the next payment?*

The creation of the \'next day\' is relatively limitless. You can take
the next available debit on the next payment day (i.e. in one months
time for monthly donors and so on). Or you can use the Payment Day/Start
Date to allow the donors to chose their next debit date. It depends what
the charity wants to do and if they have a fixed debit date that they
take their payments on.

For monthly second date logic we recommend a buffer of about 10 days
between the initial payment and the next payment. Our customers have
implemented this reasonably widely and we haven\'t found that this has
made any change to attrition. With this logic, a donor may have two
payments in the first month but it does mean that the charity could
potentially get 3 monthly payments in 6-7 weeks from sign up. Pretty
well anywhere you present your credit card you expect your payment to be
made on the spot. The messaging from the fundraiser would be that the
next payment will be taken on the \'xth\' of the month. It is entirely
up to the charity with what they are comfortable with.

*9. If a card is tokenised, can I still export the full card number?*

No, if we tokenise a card we don\'t store the full card number, only the
masked / display number (first 6 & last 4 digits with the middle digits
replaced by X).

 

**Customisation - gateway messages\
**

Now available is displaying the gateway messages to fundraisers and the
\'Thanks\' message is customisable for failed transactions through the
component resource \`CAMPAIGN_SIGNATURE_RECEIPT_DECLINED_MESSAGE\`. It
is configured to parse specific response fields for Mobilexpress, Stripe
and Banwire, for the rest of gateways it will return the gateway_message
as default (we can add custom messages for more gateways in the
following iteration).

**3DS**

There is an issue at the moment with gateways that have 3DS that after 2
failed payments the pledges aren\'t saving. The workaround is to add
the`instant_checkbox:true`{.c-mrkdwn__code
style="box-sizing: inherit; padding: 2px 3px 1px; border: 1px solid var(--saf-0); border-radius: 3px; background-color: rgba(var(--sk_foreground_min,29,28,29),0.04); color: #e01e5a; --saf-0: rgba(var(--sk_foreground_low,29,28,29),0.13); font-size: 12px; line-height: 1.50001; font-variant-ligatures: none; white-space: pre-wrap; overflow-wrap: break-word; word-break: normal; tab-size: 4; font-family: Monaco, Menlo, Consolas, 'Courier New', monospace !important; font-style: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: left; text-indent: 0px; text-transform: none; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;"
stringify-type="code"}[ constraint (take payment now), so if the card
doesn\'t pass 3DS, you can disable the payment and save the
pledge.]{style="color: #1d1c1d; font-family: Slack-Lato, appleLogo, sans-serif; font-size: 15px; font-style: normal; font-variant-ligatures: common-ligatures; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: left; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: #f8f8f8; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; display: inline !important; float: none;"}

**Gateway transcripts**

First log into staging.waysact.me as a Super Admin you can then load
[https://api.waysactstaging.com/super/transcripts/](https://api.waysactstaging.com/super/transcripts/){rel="nofollow"}
(or for production log into waysact.me and load
waysact.me/super/transcripts).

![Screen_Shot_2021-12-09_at_10.21.20_am.png](https://support.waysact.com/hc/article_attachments/4411287591695/Screen_Shot_2021-12-09_at_10.21.20_am.png)

Find the `request_id` from Papertrail and enter it in the UUID field

`Dec 02 09:23:39 INFO: [pid=15008] [transcript] calling gateway.direct_debit_store(), request_id: 1537a7b0-f055-4b39-81ff-b3609715e94f`

and it should display the transcript

![Screen_Shot_2021-12-09_at_10.21.35_am.png](https://support.waysact.com/hc/article_attachments/4411287608719/Screen_Shot_2021-12-09_at_10.21.35_am.png)

 
