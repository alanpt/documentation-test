# Fundraiser Call Backs

Call Backs enable the fundraiser to save a pledge without payment
information and have the donor\'s details appear on the Fundraiser\'s
Dashboard for them to call and obtain payment information.

\- Edit the account via Waysact and enable \"Enable fundraiser call back
feature\"

\- Add \"other\" as a payment type on the form

\- At at campaign level, add a validation outcome to be applied to
pledges with a payment type of \"other\" (note - the validation outcome
must leave the pledge in a pending status in order for the fundraiser to
see the pledge).

\- After the fundraiser has signed up a donor with the payment type of
\"other\", they can go back to their Dashboard and click the gear icon
in the top right hand corner and select \"My Call Backs\". The donor
they\'ve signed up will appear here and they can call the donor to
obtain payment information and enter it into the fields provided, or
they can submit the pledge without payment details (e.g. if the head
office wants to do the follow up to obtain payment information):

 

![Screen_Shot_2020-03-13_at_10.59.49_am.png](https://support.waysact.com/hc/article_attachments/360006161036/Screen_Shot_2020-03-13_at_10.59.49_am.png)

 

Note - in order to submit the pledge without payment details (for
example, in cases where the\
banking details aren't able to be confirmed or obtained) press "Submit"
without entering\
any payment information and then type "Void Pledge" when prompted.

Once the pledge has been re-submitted by the Fundraiser with either
payment details or as\
a Void pledge with no payment details, the pledge will no longer be
available to the\
fundraiser from their Dashboard.

### Flag

There is a new flag for pledges:
`Converted callback: true/false`{.notranslate}\
Per default the flag will be \"false\". As soon as a pledge created with
the payment type other is saved with payment details, set the flag
\"true\".

-   It doesn\'t matter if the payment details were added via the backend
    or via the callback feature.
-   If after a conversion, the payment type is set to \"other\" again,
    set the flag back to \"false\"
-   If a pledge is created with payment details, then set to \"other\",
    then payment details are added, the flag will still be \"false\", as
    it is not a converted call back.

### \"Conversion\" date:

We now record the date/time when the pledge was converted. As soon as a
pledge created with the payment type other is saved with payment
details, record the date/time. Same rules apply as for the flag:

-   It doesn\'t matter if the payment details were added via the backend
    or via the callback feature.
-   If after a conversion, the payment type is set to \"other\" again,
    erase the conversion date/time.
-   If a pledge is created with payment details, then set to \"other\",
    then payment details are added, we won\'t record the conversion
    date/time, as it is not a callback.

**Exporting callback data for EBIC/Exports**

-   There is a JS source for date is called
    `pledge.callback_converted_at`{.notranslate}.
-   There is no JS source `pledge.converted_callback`{.notranslate}.
    Instead, check for presence of
    `pledge.callback_converted_at`{.notranslate}.
-   There is no filter (Converted Callback \| is \| true/false).
    Instead, use (Callback Conversion Date \| is present/absent).
-   Sources \"[Is Converted Callback?]{._1Fa4u2a1z2LGx87TWHC1Rk
    __source="[object Object]"}\" and \"[Converted Callback: Conversion
    Date\" have been created\
    ]{._1Fa4u2a1z2LGx87TWHC1Rk __source="[object Object]"}

    ::: {.fixedDataTableCellLayout_main .public_fixedDataTableCell_main style="height: 30px; width: 180px; left: 180px;"}
    ::: {.fixedDataTableCellLayout_columnResizerContainer style="height: 30px;"}
    ::: {.fixedDataTableCellLayout_columnResizerKnob .public_fixedDataTableCell_columnResizerKnob style="height: 30px;"}
    :::
    :::

     
    :::
