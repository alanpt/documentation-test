# Card validation

## **Luhn Algorithm**

We use an industry-standard Luhn validation on credit cards to ensure
they are properly formatted:
[https://en.wikipedia.org/wiki/Luhn_algorithm](https://en.wikipedia.org/wiki/Luhn_algorithm){rel="nofollow"}.
This simply applies an algorithm to the credit card number to determine
various characteristics of the card. If the number does not match any
known credit card formats, it is rejected by the system.

Luhn algorithm: From the rightmost digit, which is the check digit, and
moving left, double the value of every second digit. The check digit is
not doubled; the first digit doubled is immediately to the left of the
check digit. If the result of this doubling operation is greater than 9
(e.g., 8 × 2 = 16), then add the digits of the result (e.g., 16: 1 + 6 =
7, 18: 1 + 8 = 9) or, alternatively, the same final result can be found
by subtracting 9 from that result (e.g., 16: 16 − 9 = 7, 18: 18 − 9 =
9).

Take the sum of all the digits.

If the total modulo 10 is equal to 0 (if the total ends in zero) then
the number is valid according to the Luhn formula; otherwise it is not
valid.

For testing, you can use sample numbers that have been set aside by the
various credit card companies for testing:
https://www.paypalobjects.com/en_US/vhelp/paypalmanager_help/credit_card_numbers.htm
https://docs.balancedpayments.com/1.1/overview/resources/#test-credit-card-numbers
Instant payment transactions add an additional level of validation to
the Luhn check above. The input card number must pass a Luhn check, and
then it will be submitted to the bank along with other donor data used
for verification and be approved or declined by the bank.

Instant payment transactions add an additional level of validation to
the luhn check above. The input card number must pass a luhn check, and
then it will be submitted to the bank along with other donor data used
for verification and be approved or declined by the bank.

## Why does the credit card number field allow so many digits?

Currently, the card number field is flexible in order to ensure that all
credit cards are accepted. The way that the validations work mean that
the card number is input first, then the validation runs. It tests the
card to ensure it is in the proper format for the type of credit card
that it is. If there are too many numbers in the field, it will not
validate or be accepted by the form. So, you should never see any credit
card numbers come through that are too many numbers. We have found
through our tests that not restricting the field improves the quality of
the card data coming through, that is why we don\'t make the field a
shorter length.

 

## **Prepaid Cards**

[The invalid prepaid bins are pulled up from the BIN
database.]{style="color: #1d1c1d; font-family: Slack-Lato, appleLogo, sans-serif; font-size: 15px; font-style: normal; font-variant-ligatures: common-ligatures; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: #f8f8f8; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; display: inline !important; float: none;"}

Prepaid Cards are also listed on the Invalid Credit Cards list. You can
see the list under the Custom Forms menu as a Super Admin. The list
works by filtering ranges of bin numbers, you can use regex there, and
we use these values to disallow the cards that match them.

 
