# Instant Payment Processes

There are two separate processes that occur regarding pledge data when a
user attempts to submit an instant payment transaction.\
**1. The instant payment process**\
This process attempts to send the required transaction information to a
payment gateway for processing, and returns success or failure.\
**2. The pledge submission process**\
This process attempts to send the pledge data to Evergiving\'s server to
be stored in the Evergiving\
database.

When you successfully submit an instant payment, the first process will
run. Depending on the outcome of that process, the pledge will either be
held on the iPad, or sent to the Evergiving server.\
If the payment is successfully processed, the donor and fundraiser will
see a confirmation message. The message will state that the payment was
successfully processed, **AND** the pledge was submitted successfully to
Evergiving.

If the payment was declined for some reason by the payment gateway, the
donor and fundraiser will see a message indicating that the instant
payment transaction failed. Note: This message does NOT state that the
pledge was successfully submitted to Evergiving. The reason we do not
submit pledges on failed transactions is to give the donor and
fundraiser the chance to modify the transaction\
data to try and get a successful payment transaction. For security and
processing reasons, we do not allow the same payment data to be
submitted more than twice.

If the payment attempt fails twice, the last page of the form will
change to say \"Transaction has failed. Pledge submitted
successfully!\".\
 

**Double payments**

Recently we instituted a change to prevent double payments
https://github.com/waysact/evergiving/issues/6713
