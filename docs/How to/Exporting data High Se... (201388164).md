# Exporting data High Security

**File Naming convention**

The file naming convention is Export-{batch number}.csv (e.g.
Export-1378181286.csv). The same batch number is automatically stored
against each pledge for reference and retrieval. The batch number is a
Unix or Epoch date time stamp e.g. 1378181286. This means it is:
completely unique; a searchable and cross reference-able number; and
also a date (see http://www.epochconverter.com/ for more info) . The
file name may be personalised by inserting an alphanumeric value before
the timestamp Export-{YOUR REF}1378181286.csv

**Security**\
All High Security exports must be encrypted with GPG or PGP before
transmission. Please
see https://waysact.zendesk.com/hc/en-us/articles/201467910-Understanding-GPG-PGP-for-normal-people-
for help with GPG.

**Export process\
**We have two methods of configuring Waysact to transfer data:

1\. transfer the file to your SFTP (port 22, SSH); or the standard
method\
2. transfer the file to a secure location in the cloud (a newly spawned
S3 bucket), and send an email with a https:// link to it so all you need
to do is click the link and the file downloads. The database is then
securely wiped 24 hours later.

**Email**\
The email can go to a single email address or a distribution list. The
email will come from export-bot@waysact.com. It will have the following
contents:

Hello,

An encrypted file of {CHARITY_NAME} data from {WAYSACT_ACCOUNT} is ready
to download from
https://waysact-high-sec-export-production.s3.amazonaws.com/Export-{FILE_NA...
and will be available for one day before it expires.

Sincerely yours, the waysact bot
