# Gateways - Apple Pay

See
<https://github.com/waysact/waysact/wiki/Apple-Pay#using-the-demo-page>

\
Apple Pay only works using capture.evergiving.com in production - it
doesn't work if a fundraiser uses www.waysact.me. We also have
certificates on api.evergiving.com, api.waysactstaging.com and
api.waysactdev.com.

https://support.stripe.com/questions/enable-apple-pay-on-your-stripe-account

There are two types of certificates (in addition to the domains):\
 - for Payments\
 - for Merchant Identification

Since we are not using Digital Forms in production yet, Apple Pay
hasn\'t been configured / tested end-to-end on Digital Forms

 

Documentation for Apple Pay and Blackbaud (yet to be developed)
[https://developer.blackbaud.com/skyapi/apis/payments/checkout/digital-wallets/configuration](https://developer.blackbaud.com/skyapi/apis/payments/checkout/digital-wallets/configuration){.c-link
style="box-sizing: inherit; color: rgba(var(--sk_highlight_hover,11,76,140),1); text-decoration: underline; font-family: Slack-Lato, Slack-Fractions, appleLogo, sans-serif; font-size: 15px; font-style: normal; font-variant-ligatures: common-ligatures; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: left; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: #f8f8f8;"
target="_blank" rel="noopener noreferrer"
stringify-link="https://developer.blackbaud.com/skyapi/apis/payments/checkout/digital-wallets/configuration"
sk="tooltip_parent" aria-describedby="sk-tooltip-1353"}
