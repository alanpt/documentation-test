# Exports - general information

**File Naming convention**\
The file naming convention is Export-{batch number}.csv (e.g.
Export-1378181286.csv). The same batch number is automatically stored
against each pledge for reference and retrieval. The batch number is a
Unix or Epoch date time stamp e.g. 1378181286. This means it is:
completely unique; a searchable and cross reference-able number; and
also a date (see http://www.epochconverter.com/ for more info).

The file name may be personalised by inserting an alphanumeric value
before the timestamp Export-{YOUR REF}1378181286.csv, using the fields
Filename Prefix and Export Reference Prefix when creating /editing an
Export Builder.

**Security**\
All Exports containing sensitive data (i.e. credit card information)
must be encrypted with GPG or PGP before transmission.

As there is no encryption on the API, full credit card information is
not available to the API. Any charity wanting to establish an API that
includes payment data will need a gateway connected to their campaign so
we can tokenise the cards at the point of signup. 

As EBIC is essentially public facing, personal details about the donor
(name, address etc) are not available.

**Export destinations**\
We have two methods of configuring Evergiving to transfer data:\
1. Upload to SFTP and notify by email: transfer the file to your SFTP
(port 22, SSH) and receive a notification by email.\
2. Upload to S3 and send secure download link by email: transfers the
file to a secure location in the cloud (a newly spawned S3 bucket), and
sends the export distribution list an email with a https:// link to it
so all they need to do is click the link and the file downloads. The
database is then securely wiped 24 hours later for encrypted exports and
7 days later for unencrypted exports.

**Export emails**

The export format and the email are configurable for each export
template created under the Exports menu in Evergiving. For more
information see
[https://waysact.zendesk.com/knowledge/articles/4404347585295/en-us?brand_id=230874](https://support.waysact.com/knowledge/articles/4404347585295/en-us?brand_id=230874)

The old coded exports created by the development team have a default
email template that isn\'t editable. 

**Tags**

Tags are automatically applied to each export template and these tags
feed into the filters on the export overview page (recently used, lead,
pledge etc). The automatic tags appear in grey font, the tags that can
be manually applied appear in pink font (Favourite & Delete).

![Export_Tags.png](https://support.waysact.com/hc/article_attachments/4410120556175/Export_Tags.png)

**Automated exports**

Most exports will be automated through the Automated Export Tigger.
There will only be a few edge cases where you might need to use the CRON
expression. Here is an excellent reference for generating cron
expressions:
[http://crontab.guru/examples.html.](http://crontab.guru/examples.html){rel="nofollow"}
Note - the CRON scheduler runs on the account\'s time zone
([https://github.com/waysact/waysact/blob/master/app/jobs/auto_export_scheduler.rb#L31, ](https://github.com/waysact/waysact/blob/master/app/jobs/auto_export_scheduler.rb#L31)<https://github.com/waysact/waysact/blob/develop/app/jobs/auto_export_scheduler.rb>).

**Pausing exports**

Through
[#7823](https://github.com/waysact/evergiving/issues/7823){target="_self"}
for EBIC and automated exporters, a new feature will pause them when
they aren\'t being used (where a file is generated from an automatic
exporter and it isn\'t accessed before it expires 5 times or where an
EBIC database isn\'t queried in 90 days). Users can click \"Unpause\" to
restart the export.

![Pause.png](https://support.waysact.com/hc/article_attachments/4616309686159/Pause.png)

 

**Export size and delays**

Due to the increasing number of customers exporting massive amounts of
data daily, and the replica lag issues this causes, we\'ve introduced
delays for larger exports through
[https://github.com/waysact/evergiving/issues/7744
: ](https://github.com/waysact/evergiving/issues/7744)

This adds index \< 2000 ? 0 : ((index - 2_000.0) /
100_000_000.0)\*\*(0.4) seconds delay per pledge, where index is the
index of the pledge in the export (0 for first pledge, 1 for second,
etc.) We'd make the individual settings (here: 2,000, 100,000,000 and
0.4) configurable

::: {.snippet-clipboard-content .position-relative .overflow-auto}
    For 1000 pledges, add 0 seconds total delay (0 per pledge)
    For 2000 pledges, add 0.0 seconds total delay (0.0 per pledge)
    For 3000 pledges, add 7.147701525 seconds total delay (0.002382567175109218 per pledge)
    For 4000 pledges, add 18.85655482 seconds total delay (0.004714138704912606 per pledge)
    For 5000 pledges, add 33.261437176 seconds total delay (0.006652287435238349 per pledge)
    For 10000 pledges, add 2 minutes and 11.291143127999987 seconds total delay (0.01312911431280733 per pledge)
    For 20000 pledges, add 6 minutes and 48.57349972700001 seconds total delay (0.02042867498636413 per pledge)
    For 30000 pledges, add 12 minutes and 38.409869727 seconds total delay (0.025280328990893986 per pledge)
    For 40000 pledges, add 19 minutes and 22.992573445000062 seconds total delay (0.029074814336130832 per pledge)
    For 50000 pledges, add 26 minutes and 52.93173941000009 seconds total delay (0.032258634788207605 per pledge)
    For 100000 pledges, add 1 hour, 13 minutes, and 1.184645248000379 seconds total delay (0.04381184645248181 per pledge)
    For 200000 pledges, add 3 hours, 15 minutes, and 27.481601831999797 seconds total delay (0.05863740800915992 per pledge)
    For 300000 pledges, add 5 hours, 46 minutes, and 26.231075514999247 seconds total delay (0.06928743691838497 per pledge)
    For 400000 pledges, add 8 hours, 39 minutes, and 28.006580124998436 seconds total delay (0.07792001645031317 per pledge)
    For 500000 pledges, add 11 hours, 50 minutes, and 57.328464799997164 seconds total delay (0.08531465692960087 per pledge)
:::
