# CSV - Excel - Displaying Accented Characters

**[Problem:]{.wysiwyg-font-size-large}**

How can I get Excel to properly display accented characters in the `CSV`
file saved from Waysact?

[**Solution:**]{.wysiwyg-font-size-large}

Waysact creates `CSV` files that are compliant with the `UTF-8`
standard. We do this to ensure that it works well for our customers
using different operating systems and different software packages to
process these `CSV` files.

If you use Microsoft Excel to open the `CSV` files, everything works
fine when the file contains just English characters. However, you may
run into an issue when your CSV file also contains non-English
characters (such as é, ç, ü, etc):

Microsoft Excel is unable to properly display `UTF-8` compliant `CSV`
files when they contain non-English characters.

To resolve this issue, please do the following after exporting the `CSV`
file from Waysact.

### [](https://github.com/waysact/support-documentation/blob/master/External/CSV%20-%20Excel%20-%20Displaying%20Accented%20Characters.md#on-a-windows-machine){#user-content-on-a-windows-machine .anchor}On a Windows machine:

#### [](https://github.com/waysact/support-documentation/blob/master/External/CSV%20-%20Excel%20-%20Displaying%20Accented%20Characters.md#method-1){#user-content-method-1 .anchor}Method 1

-   On a Windows computer, open the `CSV` file using Notepad.
-   Click \"File \> Save As\".
-   In the dialog window that appears - select \"ANSI\" from the
    \"Encoding\" field. Then click \"Save\".
-   That\'s all! Open this new `CSV` file using Excel - your non-English
    characters should be displayed properly.

#### [](https://github.com/waysact/support-documentation/blob/master/External/CSV%20-%20Excel%20-%20Displaying%20Accented%20Characters.md#method-2){#user-content-method-2 .anchor}Method 2

-   On a Windows computer, click \"File \> New\" in Excel.
-   Click \"Data\" tab.
-   Then click \"From Text\" option. Select the CSV you file you
    exported from Waysact.
-   Excel will display \"Text Import Wizard\".
-   In step-1 of this wizard:
    -   Select \"Delimited\" radiobutton.
    -   In \"File origin\" field - select \"65001 : Unicode (UTF-8)\".
-   Click \"Next \>\" button.
-   In step-2 of this wizard:
    -   Select \"Comma\" checkbox.
-   Click \"Finish\" button.
-   In the dialog window that appears - click \"OK\" button.
-   Excel will display your CSV file - including non-English
    characters - properly.

### [](https://github.com/waysact/support-documentation/blob/master/External/CSV%20-%20Excel%20-%20Displaying%20Accented%20Characters.md#on-a-mac){#user-content-on-a-mac .anchor}On a Mac:

You should use either the \"Numbers\" application, or the free
[LibreOffice](http://www.libreoffice.org/), instead of Excel.
