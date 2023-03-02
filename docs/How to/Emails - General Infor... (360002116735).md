# Emails - General Information

# **Sendgrid Email delivery**

All pledges with emails sent by Evergiving after 17th May 2015 will have
events tracked and reported against them. An event is information
recorded as your emails are processed by Evergiving; and interacted with
by the recipient
([https://sendgrid.com/blog/the-nine-events-of-email).](https://sendgrid.com/blog/the-nine-events-of-email/.)

Note - as of late 2021 when Apple releases [Mail Privacy
Protection]{style="font-weight: 400;"} (MPP) through iOS15, [every
message you send to an Apple Mail user with MPP enabled will look like
it has been opened (whether or not the particular message was actually
opened by that user).]{style="font-weight: 400;"} 
<https://sendgrid.com/blog/how-to-prepare-apples-mail-privacy-protection/>

There is no direct cost to the customer for sending / re-sending emails.

BCC is now available if the charity wants to receive a copy of the
welcome emails.

 

  ----------------------------------- -----------------------------------
  **Event**                           **Criteria**

  Processed                           Message has been received and is
                                      ready to be\
                                      delivered.

  Dropped                             As a result of any of the following
                                      drop reasons: Invalid SMTPAPI
                                      header, Spam Content (if spam
                                      checker app enabled), Unsubscribed
                                      Address, Bounced Address, Spam
                                      Reporting Address, Invalid,
                                      Recipient List over\
                                      Package Quota

  Delivered                           Message has been successfully
                                      delivered to the receiving server.

  Deferred                            Recipient's email server
                                      temporarily rejected message.

  Bounce                              Receiving server could not or would
                                      not accept message. Sendgrid
                                      distinguishes between soft and hard
                                      bounces but in our reports we only
                                      see \'bounce\' - they are working
                                      on giving us access to information
                                      on hard bounces.

  Open                                Recipient has opened the HTML
                                      message.

  Click                               Recipient clicked on a link within
                                      the message (if there are more than
                                      one links, we aren\'t able to
                                      differentiate which one was
                                      clicked).

  Spam                                Report Recipient marked message as
                                      spam. (incorrectly)\*
  ----------------------------------- -----------------------------------

\
\*\*Please N.B. these events are updated as they occur so exports
containing email events higher in the tree will instantly decay\*\*. The
rate of decay will be proportionate to the amount of time since the
email was sent, as the majority of events will happen in the first 24
hours. Many, including \'Open\' or \'Click\' may take weeks to be
registered. Below is the workflow of events recorded in Evergiving.

![Email_delivery.png](https://support.waysact.com/hc/article_attachments/4405487335055/Email_delivery.png)

There are no unsubscribe links in Evergiving emails so you will not see
Unsubscribes. It is also important to note any Spam reports will be
errant. We keep these to a minimum by policing email copy to ensure
emails we send are only ever transactional in nature.

# **Sendgrid IP Address **

Evergiving has a single dedicated IP with www.sendgrid.com that is
whitelisted so we can send emails on behalf of an email address provided
by your charity. We don\'t require an SPF record as the emails are
coming from this trusted source. We are very careful of maintaining the
highest reputation to maintain whitelisting by:

-   We employ numerous controls on the form to ensure email addresses
    are valid. These include disabling copy/paste for email match
    retyping, using fuzzy logic to suggest the user might have
    misspelled any of the top 100 email domains globally (hotmale -\>
    hotmail); we even send a ping to the mail server to check the email
    account exists. This matters because bounced/invalid emails affect
    our reputation.
-   We ensure the emails are coded to the latest/highest standards -
    again this affects deliverability.
-   We police emails to ensure there are no further asks, that they are
    purely transactional in nature to prevent any errant spam reports.

Evergiving sends many thousands of individual transactional emails to
new email addresses every day worldwide. We have a delivery rate of 94%
across all our customers as a result of these measures.

Ideally the Sendgrid IP address shouldn\'t be given to
charities/customers but if they insist it is 167.89.24.3.

 

# **Gmail issue - email addresses containing \'.\'**

There is a known quirk with Gmail. The . (dot) is ignored in email
addresses so it is not a different email address - so emails sent to
NAME.NAME@gmail.com or NAME\...NAME@gmail.comwill be received by
NAMENAME@gmail.com. Each Gmail address is unique so if anyone tries to
create a Gmail account with a dotted version of your username, they\'ll
get an error saying the username is already taken.

For example, if your address is johnsmith@gmail.com, no one can sign up
for j.o.h.n.s.m.i.t.h@gmail.com.

https://support.google.com/mail/answer/7436150?hl=en&ref_topic=7065107

https://gmail.googleblog.com/2008/03/2-hidden-ways-to-get-more-from-your.html

<https://www.youtube.com/watch?v=zL5-N8c18VE>

 

# **DNS Records**

[[DNS records are instructions that live in authoritative DNS servers
and provide information about a domain including what IP address is
associated with that domain and how to handle requests for that domain.
]{.hgKElc}]{.ILfuVd}

Customers can set up the following DNS records in their DNS
infrastructure. They will need to configure the three entries below

CNAME sg.charity.com\
CNAME s1.\_domainkey.charity.com\
CNAME s2.\_domainkey.charity.com

and point them at the entries listed below here respectively:\
u1311295.wl046.sendgrid.net\
s1.domainkey.u1311295.wl046.sendgrid.net\
s2.domainkey.u1311295.wl046.sendgrid.net

ie\
Type Host Data\
CNAME sg.charity.com points to u1311295.wl046.sendgrid.net\
CNAME s1.\_domainkey.charity.com points to
s1.domainkey.u1311295.wl046.sendgrid.net\
CNAME s2.\_domainkey.charity.com points to
s2.domainkey.u1311295.wl046.sendgrid.net

 

The domain name to be used will need to be the one that\'s after the @
in the email address of the sender configured in the campaigns
(charity.com is used as an example only).

 

# Sender Authentication (DMARC) DKIM and SPF settings

1.  Log into Sendgrid:
2.  Settings \> Sender Authentication \> Authenticate Your Domain
3.  Ignore which DNS host, leave blank. Select Yes to rebrand links
    (recommended). Next
4.  Enter domain and click Next. There are Advanced Settings for SPF and
    DKIM but unless asked for, leave them as automated.
5.  Select 'Send To A Coworker' and enter your own email address. You'll
    receive an email, click the link and then manually copy and paste
    the url in to an email to the customer. Ensure to ask them to let
    you know when added; and when they tell you..
6.  Come back to Sendgrid, find the domain and click Verify to test
    they've been added.
