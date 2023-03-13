# Call Centre scripts

# Importing Call Centre scripts

As an Admin user importing data in to Evergiving I have four use cases:

1.  Edit - I want Agents to be able to edit the data
2.  Script - I want the data to be displayed to the Agent in a
    [Script](https://github.com/waysact/evergiving/issues/8406){hovercard-type="issue"
    hovercard-url="/waysact/evergiving/issues/8406/hovercard"}
3.  Filter - I want the data to be able to inform call lists
4.  Export - I want to be able to export the data

Points 2 and 4 are where there are often large amounts of custom data
that I want to import.

Where I import a file and it contains fields that don\'t match the
import headers, import the fields as key/value pairs in a single string
e.g. [This
file](https://github.com/waysact/evergiving/files/9448637/Display.and.export.fields.csv)
would store the following in a single field called \'Script and Export\'

::: {.snippet-clipboard-content .notranslate .position-relative .overflow-auto}
``` {.notranslate .notranslate}
"TPS Flag":"Yes to Mobile", "Favourite colour":"Orange", "MRCommitAdjust_AdjustmentReason":"No Change"
```
:::

The field would be available to the exporters as a Source, and follow
the format used by the key/value pairs so that the transformations in
the exports would be able to be used.

It would be prudent to add the fields to the first column in the import
preview so that people can easily see if they\'ve mispelled a column
name.

I also want the same feature to work with the API in the future.

You can import data into a column \"Script and Export\" and there is a
source for exports \"[Key/Value data from Script and
Export]{#react-select-13--value-item .Select-value-label
aria-selected="true"}\". More information at
<https://github.com/waysact/evergiving/issues/8455>

# Call Centre Scripts

There is a page for Call Centre scripts in the Campaigns section.

Through <https://github.com/waysact/evergiving/issues/8406> we released
the ability to add scripts which appear in the call panel:

-Add a script to a Campaign, which I can name\
-Add copy in markdown, allowing [collapsible
tags](https://michaelcurrin.github.io/dev-cheatsheets/cheatsheets/markdown/collapsible-items.html){rel="nofollow"}\
-Add merge fields, the same as are available to emails, including all
fields imported in a lead, all the segmentation data available to the
Reference section currently.\
-Add conditions which the pledge must meet for this particular script to
display

The last point means I can add multiple scripts, which can cater for
whether e.g. payment is credit card vs debit, they signed up to the
\'wilderness defender\' package or child sponsorship, their payment was
taken instantly etc. I think we can have a consistent design for these
conditions borrowed from the schema feature.

Support link in Github
https://github.com/waysact/waysact-support/issues/119<https://github.com/waysact/waysact-support/issues/119>
