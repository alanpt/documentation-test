# Importing & Exporting Child Data

# Importing Child Data

## Prepare a csv file in the format:

CSV (no headers) row format is:

    <Child ID>,<Name>,<Date of birth (DD-MM-YYYY)>,<Gender (Male/Female)>,<Region>,<Campaign,<Reserved Group ID>,<Other>
    , Narrative

-   `<Child ID>` must be unique.
-   `<Campaign>` must match the Waysact campaign name.
-   `<Child ID>` `<Name>` and `<Campaign>` are required.

Some common issues with the file:

1.  The last field, `<Narrative>` is easy to cut off, but the import
    requires it. If you don't have any `<Narrative>` data, you need to
    preserve the column, even though it is empty. In order to create an
    empty column (since there are no headers in the file) you'll need to
    use the string `=""` in the top row.
2.  The file needs to be in `UTF-8` format. To save the file with
    `UTF-8` formatting in Excel:
    1.  Click Menu \| Save As (Other Formats).
    2.  Put any name for the file and choose \"Unicode Text (\*.txt)\"
        for "Save as type :."
    3.  Click Save.

## Once the file is done, it should be a simple process to upload it.

1.  Login to Waysact as an admin user, and go to the "Manage Children"
    page. Once there, it will list the children in the database, in your
    case it will say there are no children.
2.  In the top right is a button that says \"Import Children\". Click
    that and it will take to you the import children page, where you
    will see a file chooser.
3.  Click that and navigate to the file.
4.  Once you've chosen it, click "Preview" to ensure the file has no
    errors and looks to be properly formatted.
5.  Finally, click "Save" if everything looks good. The children will be
    imported in a background process, so you are safe to work on other
    things while it is importing. And you'll receive an email when the
    import it complete.

# Exporting Child Data

You can also export data from the Manage Children section, in order to
upload this information into your database. To export data, use the
filters on the right hand side of the page to refine the information (if
necessary), then click on the Export as CSV button. This will export the
required information in the following format:

    <Child ID>,<Name>,<Date of birth (DD-MM-YYYY)>,<Gender (Male/Female)>,<Region>,<Campaign>,<Reserved Group>,<Other>,<Pledge ID (if linked)>

# FAQ

1.  Why do I get a format error when the formatting look right?

    One issue is that the final column ("Other") is not being saved in
    the CSV. If you look at the file in a text editor, each line needs
    to end in a comma to reflect the final column. You can do this in
    LibreOffice/Excel by entering:

         =""

    on the first row of the column after Reserved Group ID (H). And then
    saving the file. This will force LibreOffice/Excel to include that
    empty column at the end of each row in the CSV export.

2.  What is the Reserved Group?

    The reserved group field in the import allows users to import child
    data with a reservation key so that the children can be pooled and
    reserved for a certain campaign. This process ensures that the
    reserved children are not available for other sponsorship campaigns.
    Each reserved child has a unique Child ID and a Reservation Key. The
    Reservation Key is shared by all children within the reserved group.
