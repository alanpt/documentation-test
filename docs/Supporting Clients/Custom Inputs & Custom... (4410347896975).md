# Custom Inputs & Custom Components

::: {#readme .Box-body .readme .blob .js-code-block-container .p-5 .p-xl-6 .gist-border-0}
# Custom Inputs

We now have the custom input component that can be used in place of the
traditional custom 1-5 components on any screen except for the signature
screen. You can use this one component multiple times on the one
campaign form. The tag is the unique identifier, not the component
itself (note - tags should not have spaces - use underscores instead).

Originally built through
[https://www.pivotaltracker.com/n/projects/353021/stories/107173994](https://www.pivotaltracker.com/n/projects/353021/stories/107173994){rel="nofollow"},
we\'ve had various improvements including editing the data via the edit
pledge screen <https://github.com/waysact/evergiving/issues/3933>.

**Setup**

::: {.snippet-clipboard-content .position-relative .overflow-auto}
    * Optional or mandatory: `required:false` `required:true`, require_all:true (makes all answer options mandatory in checkbox format)
    * Type : `type:radio`, `type:text`, `type:select`, `type:checkbox`, `type:score`
    * Custom inputs interact with each other with `show` and `hide` functions i.e. `show_with_dedicate_this_donation_eq:In Honour of`.  
    * Label and error messages are available as form constraints  
    * You can style individual questions i.e. `style:vertical-layout`, `horizontal-layout`, `center`, `big-label`
    * Values are available to exporter in JS `pledge.custom_inputs`
:::

 

*Styling* big-label =\> works as the know big label, spreading the
label, centered, the absence of this will render the label as usual, on
the left.

horizontal-layout =\> renders the options in the same row, as the first
two custom inputs in the form above

vertical-layout =\> renders the options in a vertical grid, as the 3rd
and 4th custom inputs in the form above

center =\> is an addition to the horizontal-layout, it makes the options
centered on the form, otherwise they will be aligned with the rest of
the options. You can see the centered options in the 5th and 6th custom
inputs

so you can combine those

style:big-label\|horizontal-layout\|center

style:big-label\|vertical-layout

style:horizontal-layout\|center

style:vertical-layout

style:horizontal-layout

when adding two or more style options, you separate them with a `|` as
usual

There is also a new type to render a numeric range to rate something, as
in the surveys, this type is the `score` type (the default range for the
score type is 1..10). You can configure that with score_min:2,
score_max:4

Example uses:

  CAMPAIGN                                       FORM              COMPONENT      CONSTRAINT
  ---------------------------------------------- ----------------- -------------- ----------------------------------------------------------------------------------------------------------------------------------------
  New World Vision UK Form                       Payment details   Custom Input   type:radio, data_set:LWT_YES_NO, label:Are you choosing a specific child to sponsor today?, tag:if_yes, error:choose one
  New World Vision UK Form                       Payment details   Custom Input   type:text, tag:Child_Profile_No, label:Child profile number, required:false, show_with_if_yes_eq:Yes
  New World Vision UK Form                       Payment details   Custom Input   type:text, tag:Child_Name, label:Child name, required:false, show_with_if_yes_eq:Yes
  New World Vision UK Form                       Payment details   Custom Input   type:select, data_set:World Vision UK ages2, label:Child age, tag:Child_age, show_with_if_yes_eq:No, required:false
  New World Vision UK Form                       Payment details   Custom Input   type:select, data_set:World Vision UK gender, label:Child gender, tag:Child_gender, show_with_if_yes_eq:No, required:false
  New World Vision UK Form                       Payment details   Custom Input   type:select, data_set:World Vision UK regions - Updated, label:Child region, required:false, show_with_if_yes_eq:No, tag:Child_Region
  UNICEF Mexico iZettle test (Dialogue Direct)   Payment details   Custom Input   type:text, tag:izettle, required:false, label:Referencia iZettle
  UNICEF MEXICO IZETTLE TEST (UNICEF MEXICO)     Payment details   Custom Input   type:text, tag:izettle, required:false, label:Referencia iZettle
  New World Vision UK Form                       Payment details   Custom Input   type:checkbox, data_set:WVUK_Children_Question, label:Do you have young children?, tag:children, style:vertical-layout, required:false
  New World Vision UK Form                       Payment details   Custom Input   type:checkbox, data_set:WVUKPrayerAnswer, tag:children1, required:false
  McGrath Foundation (PCA Group)                 Payment details   Custom Input   type:radio, tag:dedicate_this_donation, data_set:Dedicate donation, label:I would like to dedicate this donation, required:false
  Four Paws (GIG)                                Payment details   Custom Input   type:checkbox, tag:restricted_fund, data_set:custom input yesno, label:Restricted, Fund required:false
  McGrath Foundation (PCA Group)                 Payment details   Custom Input   type:text, tag:in_memory, label:In Memory of name, show_with_dedicate_this_donation_eq:In Memory of
  McGrath Foundation (PCA Group)                 Payment details   Custom Input   type:text, tag:in_honour, label:In Honour of name, show_with_dedicate_this_donation_eq:In Honour of

**Schema sources** `return JSON.stringify(pledge.custom_inputs);`
returns all the data

In a these Campaign with 3 Custom Inputs set up like this :

type:radio tag:dedicate_this_donation data_set:Dedicate donation label:I
would like to dedicate this donation required:false type:text
tag:in_memory label:In Memory of name
show_with_dedicate_this_donation_eq:In Memory of type:text tag:in_honour
label:In Honour of name show_with_dedicate_this_donation_eq:In Honour of

The following JS works to export the appropriate values:

switch (pledge.custom_inputs\[0\].value) { case \"In Honour of\": return
pledge.custom_inputs\[2\].value; case \"In Memory of\": return
pledge.custom_inputs\[1\].value; default: return \"\"; }

\-\-\-- You can also use something like the following

if (pledge.custom_inputs\[0\].value == \"No\") return \"N\"; else if
(pledge.custom_inputs\[0 \].value == \"Yes\") return \"Y\"; else return
\"\";

however we can\'t guarantee that \[0\] will be the first question listed
on the form. So the best way to get the data in exports is:

1.  hidden column with the JS
    `return JSON.stringify(pledge.custom_inputs);`
2.  a second column sourcing the hidden column with the transformation
    `key/value data lookup point`.

An example see
[https://manage.evergiving.com/en-AU/exportBuilders/pledge/6538?accountId=510](https://manage.evergiving.com/en-AU/exportBuilders/pledge/6538?accountId=510){rel="nofollow"}

 

## **AR conditions**

You can use the following to set up an export AR Condition based on the
response to a custom input:

custom_inputs::jsonb @\> \'\[{ \"key\":\"accountType\",
\"value\":\"BNI-BA\" }\]\'

 

## **Datasets **

For both custom components and custom inputs I want to be able to merge
metadata from a custom components\' selected dataset in to an email so
that I don\'t have to have multiple versions of an email for different
datasets chosen. The data is entered into the Other field.

 

Assuming you have a custom data set item like this:

::: {.snippet-clipboard-content .notranslate .position-relative .overflow-auto}
``` notranslate
{
    set_name:  'My Data Set',
    description: 'Option A',
    other: 'name:Billy, age:10'
}
```
:::

### For Emails

Using `custom_1`{.notranslate}

::: {.snippet-clipboard-content .notranslate .position-relative .overflow-auto}
``` notranslate
Option A Details:  Name {{CUSTOM_1_OTHER(name)}}, with age: {{CUSTOM_1_OTHER(AGE)}}
```
:::

Or you can render the full content of the `other`{.notranslate} field on
the dataset

::: {.snippet-clipboard-content .notranslate .position-relative .overflow-auto}
``` notranslate
Option A Details: {{CUSTOM_1_OTHER}}
```
:::

Using a custom input with tag: `one`{.notranslate}

::: {.snippet-clipboard-content .notranslate .position-relative .overflow-auto}
``` notranslate
Option A Details:  Name {{CUSTOM_ONE_OTHER(name)}}, with age: {{CUSTOM_ONE_OTHER(AGE)}}
```
:::

rendering the full content of the `other`{.notranslate} field on the
dataset

::: {.snippet-clipboard-content .notranslate .position-relative .overflow-auto}
``` notranslate
Option A Details: {CUSTOM_ONE_OTHER}
```
:::

###  

### For SEPA

(outstanding issue to fix a bug with this is
<https://github.com/waysact/evergiving/issues/8831>)

 

Using `custom_1`{.notranslate}

::: {.snippet-clipboard-content .notranslate .position-relative .overflow-auto}
``` notranslate
Option A Details:  Name {CUSTOM_1_OTHER(name)}, with age: {CUSTOM_1_OTHER(AGE)}
```
:::

Or you can render the full content of the `other`{.notranslate} field on
the dataset

::: {.snippet-clipboard-content .notranslate .position-relative .overflow-auto}
``` notranslate
Option A Details: {CUSTOM_1_OTHER}
```
:::

Using a custom input with tag: `one`{.notranslate}

::: {.snippet-clipboard-content .notranslate .position-relative .overflow-auto}
``` notranslate
Option A Details:  Name {CUSTOM_ONE_OTHER(name)}, with age: {CUSTOM_ONE_OTHER(AGE)}
```
:::

rendering the full content of the `other`{.notranslate} field on the
dataset

::: {.snippet-clipboard-content .notranslate .position-relative .overflow-auto}
``` notranslate
Option A Details: {CUSTOM_ONE_OTHER}
```

 

# Custom Components

The Custom 1, Custom 2, Custom 3, Custom 4 and Custom 5 Components have
essentially been replaced by Custom Inputs but are still valid and being
used.
:::
:::
