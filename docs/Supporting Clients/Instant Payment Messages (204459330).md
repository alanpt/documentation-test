# Instant Payment Messages

There are two separate processes that occur regarding pledge data when a
user attempts to submit an instant payment transaction.

1.  The instant payment process

    This process attempts to send the required transaction information
    to a payment gateway for processing, and returns success or failure.

2.  The pledge submission process

    This process attempts to send the pledge data to Waysact\'s server
    to be stored in the Waysact database.

When you successfully submit an instant payment, the first process will
run. Depending on the outcome of that process, the pledge will either be
held on the iPad, or sent to the Waysact server.

If the payment is successfully processed, the donor and fundraiser will
see this message:

![](https://support.waysact.com/hc/en-us/article_attachments/202200440/success.png)

The message here states that the payment was successfully processed,
**AND** the pledge was submitted successfully to Waysact.

If the payment was declined for some reason by the payment gateway, the
donor and fundraiser will see this message:

![](https://support.waysact.com/hc/en-us/article_attachments/202200670/failed.png)

This message states that the instant payment transaction failed.

**N.B.**

> This message does **NOT** state that the pledge was successfully
> submitted to Waysact. The reason we do not submit pledges on failed
> transactions is to give the donor and fundraiser the chance to modify
> the transaction data to try and get a successful payment transaction.

For security and processing reasons, we do not allow the same payment
data to be submitted more than twice. If the payment attempt fails
twice, the last page of the form will change to this:

![](https://support.waysact.com/hc/en-us/article_attachments/202200680/save.png)

This means that Waysact is not going to attempt a third payment
transaction, but will attempt to **SAVE** the pledge record to the
Waysact server. When the fundraiser touches \"save\" the iPad will
attempt to send the pledge data to Waysact. If successful, they will see
this screen:

![](https://support.waysact.com/hc/en-us/article_attachments/202200690/saved.png)

This message confirms that the pledge was successfully saved to the
Waysact server.

**N.B.**

> This message does **NOT** state that the transaction was successfully
> processed. In this case, the pledge payment will need to be processed
> at a later date.
