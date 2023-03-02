# Gateways - Stripe Greenpeace Token (Greenpeace Australia)

This will work in partnership with Stripe, and is only needed for the
call center. Configure \`Greenpeace Token gateway\`, remember to set a
proper \`external_reference_number\` on the pledge to test the payment.

![Screen_Shot_2021-12-14_at_5.27.20_pm.png](https://support.waysact.com/hc/article_attachments/4411655688847/Screen_Shot_2021-12-14_at_5.27.20_pm.png)

Payment Step 1\
We tokenise a card to Stripe (as normal)

Payment Step 2\
We pass the token with a few other values to the \'Frontend Payment\'
method at
https://greenpeace.github.io/gpap-stripe-payments/#operation/Frontend%20Payment.
N.B. \'Frontend Payment\' is the only method we need to use, for all
frequencies.

We send the \*\*required\*\* fields only, plus\
\`patron\` : \`salesforce_contact_id\` == \'External Reference Number\'

And return the response to indicate successful payment, or not

 

There\'s a captcha implemented on the production instance. To bypass it,
we pass the following in the header:\
Key: X-GPAP-CAPTCHA-BYPASS-KEY\
Value: prod_xg#QIvleSTt42SUbFIbI2fMymSj30InXa8ZPZJSfCfJT\$Tedzry
