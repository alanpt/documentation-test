# Gateways - Paypal

[https://github.com/waysact/evergiving/issues/6672.](https://github.com/waysact/evergiving/issues/6672)
The flow in the fundraiser form could shows a QR code, then donors
should process the payment in PayPal using the QR and we have to listen
to that event using [Instant Payment
Notification](https://developer.paypal.com/docs/api-basics/notifications/ipn/IPNIntro/){rel="nofollow"}
(IPN)

There are many ways to integrate this gateway, we choose a server-side
integration called \[Checkout\] - see
<https://developer.paypal.com/docs/checkout/>. Developer documentation
is at
https://developer.paypal.com/docs/archive/checkout/how-to/server-integration/).

One good reason why to do server-side is because integrating on the
client-side is considered insecure as it can be manipulated in a
browser's console, the amount could be easily changed and then it would
be a nightmare to dispute the charge afterward. By integrating it with
server intermediate we have evidence of what is trying to be charged.

For the client side we integrate \*Smart Payment Buttons\* this is the
official PayPal payment button that will call our server when clicked.

![Screen_Shot_2021-11-11_at_5.13.23_pm.png](https://support.waysact.com/hc/article_attachments/4409413226127/Screen_Shot_2021-11-11_at_5.13.23_pm.png)

**To configure a Paypal integration:**

-   Remove all credit and debits components
-   Configure `Payment Type` component to use PayPal as option
    `options:paypal`
-   Add a new component (`PayPal`) to the *Payment Details Form*
-   Edit the campaign to use PayPal Gateway. You need to grab
    credentials from PayPal account. Using [developer paypal
    site](https://developer.paypal.com/){rel="nofollow"} you have to
    create a new app, each PayPal App has the credentials (you need
    Currency Code, Client Id and Secret Key).
-   if donor don\'t use the Social Distancing you will see the PayPal
    button in F2F.
-   Donor only needs to click on PayPal button and PayPal form will
    appear to complete the transaction

**Here a classic configuration of payment form**

![Form_Config.png](https://support.waysact.com/hc/article_attachments/4410120982671/Form_Config.png)

**Configuring the Campaign**\
Configure the campaign to use PayPal Gateway. You need to grab
credentials from PayPal account. Using \[developer paypal
site\](https://developer.paypal.com/) you have to create a new app, each
PayPal App has the credentials (you need Client Id and Secret Key).

![Paypal_setup.png](https://support.waysact.com/hc/article_attachments/4410120999951/Paypal_setup.png)

![Campaign_setup.png](https://support.waysact.com/hc/article_attachments/4410120990351/Campaign_setup.png)

**Fundraiser/Donor view**\
You will notice a unique payment method (PayPal).

If fundraiser doesn\'t use the Social Distancing you will see the PayPal
button in
F2F ![F2F_view.png](https://support.waysact.com/hc/article_attachments/4410134656143/F2F_view.png)

 

On transferred form something like the following will be showed

![Social_distance_view.png](https://support.waysact.com/hc/article_attachments/4410121005583/Social_distance_view.png)

The Donor only needs to click on PayPal button and PayPal form will
appear to complete the transaction

![Donor_Paypal_view.png](https://support.waysact.com/hc/article_attachments/4410134663951/Donor_Paypal_view.png)

 
