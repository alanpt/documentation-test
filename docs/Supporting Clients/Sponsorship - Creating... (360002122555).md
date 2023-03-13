# Sponsorship - Creating, deleting, exporting & releasing children

Currently this can only be done in Waysact but we will eventually move
this across to Evergiving.

## Manually create a child

For now, you need to go to the Manage Children section in Waysact and
either manually create a child by clicking on New Child and filling in
the child details.

## Import new children

For now, you need to go to the Manage Children section in Waysact and
click the Import Children button. Search the computer until you have
found the file you want to import (it needs to be a CSV file with no
headers and in the following row format) :

    <Child ID>,<Name>,<Date of birth (DD-MM-YYYY)>,<Gender (Male/Female)>,<Region>,<Campaign,<Reserved Group ID>,<Other>,<Narrative>

**Notes:**

-   `<Child ID>` must be unique.
-   `<Campaign>` must match the Waysact campaign name.
-   `<Child ID>` `<Name>` and `<Campaign>` are required.
-   The reserved group field allows users to import child data with a
    reservation key so that the children can be pooled and reserved for
    a certain campaign. This process ensures that the reserved children
    are not available for other sponsorship campaigns. Each reserved
    child has a unique Child ID and a Reservation Key. The Reservation
    Key is shared by all children within the reserved group.
-   Narrative adds the ability to import a child\'s story (text up to
    2000 characters) to display where component resources
    `CHILD_SELECTION_DETAILS_TEXT1` and `CHILD_SELECTION_DETAILS_TEXT2`
    currently show. Currently we can display the child photo and
    personal details (dob, name, gender) on the Child Selection search
    results by clicking on their photo, and displaying their story will
    give the donor a full picture of each child.

Once you've selected the import file, click "Preview" to ensure the data
has no errors and looks to be properly formatted. If so, click "Save"
and the children will be imported in a background process. You'll
receive an email when the import it complete.

**Some common issues with the import file:**

1.  The last field, `<Other>` is easy to cut off, but the import
    requires it. If you don't have any `<Other>` data, you need to
    preserve the column, even though it is empty. In order to create an
    empty column (since there are no headers in the file) you'll need to
    add a space in manually via a text editor or if using
    LibreOffice/Excel, then use the string `=""` in the top row.
2.  The file needs to be in `UTF-8` format. To save the file with
    `UTF-8` formatting in Excel:
    -   Click Menu \| Save As (Other Formats).
    -   Put any name for the file and choose \"Unicode Text (\*.txt)\"
        for "Save as type :."
    -   Click Save.

## Exporting Child Data

You can also export data from the Manage Children section, in order to
upload this information into your database. To export data, use the
filters on the right hand side of the page to refine the information (if
necessary), then click on the Export as CSV button. This will export the
required information in the following format (the Pledge ID will only
populate if the child has been sponsored):

    <Code>,<Name>,<Date of birth (DD-MM-YYYY)>,<Gender (Male/Female)>,<Region>,<Campaign>,<Reserved Group>,<Other>,<Pledge ID>

## Deleting Child Data

Head to Manage Children in Waysact and click Delete beside the child to
delete an individual child (that has not yet been sponsored). To delete
multiple children, you can run filters to segment the children and then
press Delete Children, but a word of caution there is no edit undo if
you run the filters incorrectly and delete children that weren\'t
supposed to be deleted.

## Releasing a Sponsored Child

Once a child has been sponsored, the child will remain locked while the
pledge is in Pending or Approved status. If a donor cancels and you need
to release a child from the pledge, set the pledge to Cancel, Alien or
Invalid and this will break the association between the pledge and the
child. This will allow the child to go back into the sponsorship pool to
be sponsored again. You can see the children released from pledges using
the Unlocked filter on the Manage Children page.
