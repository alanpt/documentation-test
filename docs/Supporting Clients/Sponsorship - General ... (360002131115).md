# Sponsorship - General Information

There are several setup options for child sponsorship depending on the
charity\'s preference and needs :

-   Child Sponsorship : enter the Child ID on the form and we validate
    the ID and display the Child Name. Requires the account holder to
    import a CSV file of child data.\
    \
    ![Screen_Shot_2021-01-05_at_3.12.07_pm.png](https://support.waysact.com/hc/article_attachments/360005872736/Screen_Shot_2021-01-05_at_3.12.07_pm.png)\
    \
-   Child Region / Gender / Age: drop lists are displayed on the form
    the donor can choose their preferences. Requires the account holder
    to import a CSV file of child data. Can be used in conjunction with
    the Child Sponsorship component - the Child ID field can be
    optional, allowing the donor to either select a set of preferences
    to sponsor a child most in need, or enter a specific child ID to
    sponsor a particular
    child.![Screen_Shot_2021-01-05_at_3.10.30_pm.png](https://support.waysact.com/hc/article_attachments/360005872796/Screen_Shot_2021-01-05_at_3.10.30_pm.png)\
    \
-   Child Profile Number + Child Name: enter the Child Profile Number
    and we validate the number and populate the Child Name. Requires the
    account holder to import a CSV file of child data.\
    ![Screen_Shot_2021-01-05_at_3.11.30_pm.png](https://support.waysact.com/hc/article_attachments/360005872816/Screen_Shot_2021-01-05_at_3.11.30_pm.png)
-   Child Selection: use the Country/Region, Gender, Age and Birthday
    filters to select preferences then search to display images and
    stories of available children who meet the selection criteria. If
    the number of children that meet the search results criteria is less
    than 7 records (which is the max number of records we can return) we
    pad the result with extra records by relaxing the search conditions.
    First we remove the `age` filter and if we still have room to
    complete the 7 limit, we remove the `gender` filter and pad the
    result until we complete the batch of 7. Additional filters for
    Child Age and Birthday Month can be added through a locale. Requires
    the account holder to import a CSV file of child data, and a zip
    file of the child photos. To set up tick \"Enable child selection
    form\" in the campaign setup then add the Child Selection Campaign
    Form and enable the default filters. When a Child is viewed on the
    fundraiser front end, the child is locked for a period of 15 minutes
    and won\'t appear in future searches. This is in order to prevent
    the same child being sponsored by multiple donors at the one time.\
    \
    In Child Selection, the \"No Preference\" option has a component
    resource, so can be edited.      This component should respect the
    `required:true` component locale to ensure a child must always be
    selected. The export source `pledge.child_selection` should give you
    the search data about the child.

Campaign component locale options for sponsorship components can be
found here
[https://waysact.zendesk.com/knowledge/articles/360002133036/en-us?brand_id=230874](https://support.waysact.com/knowledge/articles/360002133036/en-us?brand_id=230874)

![Screen_Shot_2021-01-05_at_3.09.58_pm.png](https://support.waysact.com/hc/article_attachments/360005784735/Screen_Shot_2021-01-05_at_3.09.58_pm.png)

 
