# Campaigns - Controls for multiple components

[**Show/hide** ]{.wysiwyg-font-size-large}

As of July 2020: All components can now accept
show_with\_{tag}*eq:values* and *hide_with*{tag}\_eq:values. All
components have a default tag that you can see and edit from the Form
Components UI. PLEASE DON\'T COMBINE SHOW AND HIDE constraints as the
behaviour may be not the one you except. *SHOW* constraints are
evaluated first, that means if you have both, SHOW and HIDE constraints
the one that will decide the faith of your component visibility is the
HIDE one (as its evaluated last). Example:
`hide_with_email_present:true, show_with_email_present:true` will hide
the component if email has a value.

 

+-----------------------+-----------------------+-----------------------+
| **Component**         | **Component Locale**  | **Notes\              |
|                       |                       | **                    |
+-----------------------+-----------------------+-----------------------+
| Amount                | show_with_amo         | **You can only        |
|                       | unt_eq:257\|550\|1836 | show_with amounts and |
|                       |                       | not frequency at this |
|                       |                       | stage.** In order to  |
|                       |                       | get this to happen we |
|                       |                       | need to reconcile     |
|                       |                       | frequency in the      |
|                       |                       | Amount component and  |
|                       |                       | Products              |
+-----------------------+-----------------------+-----------------------+
| Custom Input          | show_wi               | You can use the tag   |
|                       | th\_{tag}\_eq:{value} | from a different      |
|                       |                       | custom input instead  |
|                       |                       | of the component name |
|                       |                       | and use the value     |
|                       |                       | from the other custom |
|                       |                       | input as a trigger.   |
+-----------------------+-----------------------+-----------------------+
| Interested_in         | hide_with_i           |                       |
|                       | nterested_in_eq:Poppy |                       |
|                       | Supporter             |                       |
+-----------------------+-----------------------+-----------------------+
| Frequency             | show_with_amount_     |                       |
|                       | frequency_eq:monthly, |                       |
|                       | hide_with_amount_     |                       |
|                       | frequency_eq:donation |                       |
+-----------------------+-----------------------+-----------------------+
| Show / hide           | show_with\_{COM       | The first two         |
|                       | PONENT}\_present:true | show/hide if a        |
|                       | hide_with\_{COM       | component is blank or |
|                       | PONENT}\_present:true | not selected.         |
|                       |                       |                       |
|                       |                       |                       |
|                       |                       |                       |
|                       | show                  | The other show/hide   |
|                       | _with\_{tag}eq:values | locales work based on |
|                       | and                   | a particular value    |
|                       | hide                  | being entered in a    |
|                       | _with{tag}\_eq:values | particular component. |
|                       |                       |                       |
|                       |                       |                       |
|                       |                       |                       |
|                       | show_with             | false values will be  |
|                       | \_{TAG}\_present:true | ignored, always use   |
|                       | and                   | true for              |
|                       | hide_with\            | show_with\_{TAG}.     |
|                       | _{TAG}\_present:true\ |                       |
|                       | \                     | You can combine show  |
|                       |                       | constraints:\         |
|                       |                       | `show_wit             |
|                       |                       | h_home_phone_present: |
|                       |                       | true, show_with_mobil |
|                       |                       | e_phone_present:true` |
|                       |                       | and the component     |
|                       |                       | will be shown if any  |
|                       |                       | of the two conditions |
|                       |                       | returns `true`.       |
|                       |                       |                       |
|                       |                       | You can combine       |
|                       |                       | `_present` with `_eq` |
|                       |                       | constraints, if any   |
|                       |                       | of them return `true` |
|                       |                       | the condition will be |
|                       |                       | applied:\             |
|                       |                       | `show_with_email_p    |
|                       |                       | resent:true, show_wit |
|                       |                       | h_custom_1_eq:email`, |
|                       |                       | if the email has a    |
|                       |                       | value OR custom_1     |
|                       |                       | value is `email`,     |
|                       |                       | component will be     |
|                       |                       | shown.                |
|                       |                       |                       |
|                       |                       | `show` conditions     |
|                       |                       | will be grouped, if   |
|                       |                       | any of the show       |
|                       |                       | conditions is TRUE,   |
|                       |                       | component will be     |
|                       |                       | shown\                |
|                       |                       | Same with `hide`,     |
|                       |                       | hide conditions will  |
|                       |                       | be grouped, if any of |
|                       |                       | the conditions is     |
|                       |                       | TRUE, component will  |
|                       |                       | be hidden.            |
+-----------------------+-----------------------+-----------------------+

 

 

 

 

  ---------------------------------- ------------------------------------------------------------------- ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- ---------------------------------------------------------
  CONTROLS FOR MULTIPLE COMPONENTS   LOCALES                                                             OUTCOMES                                                                                                                                                                                                                                        EXAMPLE USES
  Copy                               copy_on_next:true                                                   When True, this makes the fundraiser only need to provide a response once and all new pledges that day should automatically completed (i.e. tick the checkbox component once and each new pledge form you load that day will have it ticked).   True / False
  Formatting                         render_as:\'radiobutton\'                                           Answer options display as radio buttons                                                                                                                                                                                                          
  Formatting                         render_as:\'checkbox\'                                              Answer options display as check boxes                                                                                                                                                                                                            
  Formatting                         render_as:\'dropdown\'                                              Answer options display in a drop box                                                                                                                                                                                                             
  Formatting                         render_as:\'freetext\'                                              Answer options displays as a box for the user to enter text in.                                                                                                                                                                                  
  Formatting                         render_as:\'datetime\', start_year:2020, end_year:2025              Displays a date drop box in the format of the Date of Birth question. Optional start_year and end_year allow you to control the dates displayed on the form                                                                                      
  Formatting                         render_as:autosuggest                                               Turns custom 1-5 components into auto suggest - when you start typing in the field, we return matches from the dataset that match the letters entered.                                                                                           
  Formatting                         type:autosuggest                                                    Turns custom input component into auto suggest - when you start typing in the field, we return matches from the dataset that match the letters entered.                                                                                          
  Formatting                         label:\'big\'                                                       The text is displayed across the whole screen and not in the format / alignment of the questions. This is useful for long lines of text.                                                                                                         
  Formatting                         render_as:\'freetext\',format:\'\^\[0-9\]{7}\$\'                    Render as freetext, accept digits between 0-9 with a 7 character limit i.e. a 7 digit passport number                                                                                                                                           World Vision Australia Custom 5 for passport number
  Formatting                         format:\'\^(\[0-9\]{3}\|\[0-9\]{4}\|\[0-9\]{5})\$\',required:true   Accepts characters 0-9 and must be between 3 and 5 digits (the pipe acts as an \'or\' function)                                                                                                                                                  
  Formatting                         format:\'\^\[0-9+\]{6}\$\'                                          Accepts characters 0-9 or the \'+\' sign and must be between 5 digits (to escape a special character that has a meaning in regular expressions (`+` usually means \_match one or more) you use the backwards slash and not the forward one)     +12345
  Formatting                         display:\'block\'                                                   ..... To be confirmed .....                                                                                                                                                                                                                      
                                                                                                                                                                                                                                                                                                                                                          
  Mandatory/Optional rules           required:false                                                      Question is NOT mandatory                                                                                                                                                                                                                        
  Mandatory/Optional rules           required:true                                                       Question IS mandatory                                                                                                                                                                                                                            
  Mandatory/Optional rules           required_if\_{componentname}:\'x\'                                  Question is mandatory only if a certain response is given to another question i.e. required_if_interestedin:\'Non-resident\'                                                                                                                    required_if_interestedin:\'No\',restricts:\'childregion
  Mandatory/Optional rules           required_by_regular_giving:\'child_sponsorship\'                    ..... To be confirmed .....                                                                                                                                                                                                                      
  Mandatory/Optional rules           CONTACT_BLOCK_ONE_PHONE                                             Either the home or mobile phone is required. When one is supplied the other one becomes an optional field                                                                                                                                        
  Mandatory/Optional rules           CONTACT_BLOCK_EMAIL_ADDRESS                                         Email address is mandatory                                                                                                                                                                                                                       
  Mandatory/Optional rules           CONTACT_BLOCK_TWO_PHONES                                            Two phone numbers are mandatory                                                                                                                                                                                                                  
  Mandatory/Optional rules           CONTACT_BLOCK_TWO_OFF                                               The email is mandatory and at least one of the phone numbers must be supplied. Once one phone number has been supplied, the other phone number becomes optional.                                                                                 
  Mandatory/Optional rules           CONTACT_BLOCK_MOBILE_EMAIL_ADDRESS                                  Either the mobile phone number or the email or the address is mandatory                                                                                                                                                                          
  Mandatory/Optional rules           CONTACT_BLOCK_ONE_PHONE_NUMBER_SOMETHNGELSE                         One phone number is mandatory and Either the mobile phone number or the email or address is mandatory                                                                                                                                            
  ---------------------------------- ------------------------------------------------------------------- ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- ---------------------------------------------------------
