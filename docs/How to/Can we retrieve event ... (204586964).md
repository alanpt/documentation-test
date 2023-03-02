# Can we retrieve event information for emails sent by Waysact?

 

All pledges with emails sent by Waysact ***after 17th May 2015*** will
have **events** tracked and reported against them. An **event** is
information recorded as your emails are processed by Waysact; and
interacted with by the recipient.

 

Below is a table of the events returned by Waysact and their meaning.

 

  ------------------------------------------------------------- ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  [**Event**]{.wysiwyg-color-black .wysiwyg-font-size-medium}   [**Criteria**]{.wysiwyg-color-black .wysiwyg-font-size-medium}
  Processed                                                     Message has been received and is ready to be delivered.
  Dropped                                                       As a result of any of the following drop reasons: Invalid SMTPAPI header, Spam Content (if spam checker app enabled), Unsubscribed Address, Bounced Address, Spam Reporting Address, Invalid, Recipient List over Package Quota
  Delivered                                                     Message has been successfully delivered to the receiving server.
  Deferred                                                      Recipient's email server temporarily rejected message.
  Bounce                                                        Receiving server could not or would not accept message.
  Open                                                          Recipient has opened the HTML message.
  Click                                                         Recipient clicked on a link within the message.
  Spam Report                                                   Recipient marked message as spam. (incorrectly)\*
                                                                 
  ------------------------------------------------------------- ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

**Please N.B. these events are updated as they occur so exports
containing email events higher in the tree will instantly decay.** The
rate of decay will be proportionate to the amount of time since the
email was sent, as the majority of events will happen in the first 24
hours. Many, including \'Open\' or \'Click\' may take weeks to be
registered. Below is the workflow of events recorded in Waysact.

![](https://support.waysact.com/hc/en-us/article_attachments/202547800/Email_events.png)

Please N.B. there are [no unsubscribe links in Waysact
emails](https://support.waysact.com/hc/en-us/articles/204786180-Can-we-include-an-unsubscribe-link-in-our-welcome-email-){target="_blank"} so
you will not see Unsubscribes. It is also important to note any Spam
reports will be errant. We keep these to a minimum by [policing email
copy](https://support.waysact.com/hc/en-us/articles/202637090-How-are-welcome-emails-sent-to-supporters-){target="_blank"}
to ensure emails we send are only ever transactional in nature.

 

 
