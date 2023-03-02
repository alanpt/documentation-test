# Campaigns - Campaign Component Locales

Note: it is proposed to depreciate some of these components (see the In
Use column at
https://github.com/waysact/support-documentation/blob/master/internal/forms/components.md).

As of July 2020 All components can now accept
show_with\_{tag}\_eq:values and hide_with\_{tag}\_eq:values. All
components have a default tag that you can see and edit from the Form
Components UI.

 

+-----------------+-----------------+-----------------+-----------------+
| Component       | Constraint      | Description/Use | Options         |
+-----------------+-----------------+-----------------+-----------------+
| Account Name    | `country:'XX'`  |                 | Country Code    |
+-----------------+-----------------+-----------------+-----------------+
| Account Number  | `generate       |                 | true/false      |
|                 | _bic_iban:true` |                 |                 |
+-----------------+-----------------+-----------------+-----------------+
| Account Number  | `country:'XX'`  |                 | Country Code    |
+-----------------+-----------------+-----------------+-----------------+
| Account Number  | [`length:1      | Sets account    |                 |
|                 | 1`]{.status_tag | number length   |                 |
|                 | .active .gray   |                 |                 |
|                 | .               |                 |                 |
|                 | constraints_tag |                 |                 |
|                 | }[]{.status_tag |                 |                 |
|                 | .active .gray   |                 |                 |
|                 | .c              |                 |                 |
|                 | onstraints_tag} |                 |                 |
+-----------------+-----------------+-----------------+-----------------+
| Account Type    | [`data_set: Sh  |                 |                 |
|                 | ared USA debit  |                 |                 |
|                 | account type S/ |                 |                 |
|                 | C`]{.status_tag |                 |                 |
|                 | .active .gray   |                 |                 |
|                 | .c              |                 |                 |
|                 | onstraints_tag} |                 |                 |
+-----------------+-----------------+-----------------+-----------------+
| Account Type    | [`sh            |                 |                 |
|                 | ow_with_is_debi |                 |                 |
|                 | t_card_eq:Débit |                 |                 |
|                 | o`]{.status_tag |                 |                 |
|                 | .active .gray   |                 |                 |
|                 | .               |                 |                 |
|                 | constraints_tag |                 |                 |
|                 | }[]{.status_tag |                 |                 |
|                 | .active .gray   |                 |                 |
|                 | .c              |                 |                 |
|                 | onstraints_tag} |                 |                 |
+-----------------+-----------------+-----------------+-----------------+
| Account Type    | [`rende         |                 |                 |
|                 | r_as:radiobutto |                 |                 |
|                 | n`]{.status_tag |                 |                 |
|                 | .active .gray   |                 |                 |
|                 | .               |                 |                 |
|                 | constraints_tag |                 |                 |
|                 | }[]{.status_tag |                 |                 |
|                 | .active .gray   |                 |                 |
|                 | .c              |                 |                 |
|                 | onstraints_tag} |                 |                 |
+-----------------+-----------------+-----------------+-----------------+
| Address         | `po_box:false`  | Displays/Hides  | true/false      |
|                 |                 | PO Box tick box |                 |
|                 |                 | in address      |                 |
|                 |                 | component,      |                 |
|                 |                 | inverts the     |                 |
|                 |                 | display of the  |                 |
|                 |                 | Street field    |                 |
+-----------------+-----------------+-----------------+-----------------+
| Address         | `inte           | True: Adds a    | true/false      |
|                 | rnational:true` | drop list of    |                 |
|                 |                 | countries to    |                 |
|                 |                 | the address     |                 |
|                 |                 | block on the    |                 |
|                 |                 | form. The       |                 |
|                 |                 | country must be |                 |
|                 |                 | selected first  |                 |
|                 |                 | by the          |                 |
|                 |                 | fundraiser and  |                 |
|                 |                 | then the        |                 |
|                 |                 | relevant        |                 |
|                 |                 | address         |                 |
|                 |                 | validation will |                 |
|                 |                 | be applied to   |                 |
|                 |                 | the address     |                 |
|                 |                 | fields. The     |                 |
|                 |                 | default country |                 |
|                 |                 | will be the     |                 |
|                 |                 | locale of the   |                 |
|                 |                 | form.           |                 |
|                 |                 | `inter          |                 |
|                 |                 | national:true`{ |                 |
|                 |                 | .c-mrkdwn__code |                 |
|                 |                 | style="box-     |                 |
|                 |                 | sizing: inherit |                 |
|                 |                 | ; background-co |                 |
|                 |                 | lor: rgba(var(- |                 |
|                 |                 | -sk_foreground_ |                 |
|                 |                 | min,29,28,29),0 |                 |
|                 |                 | .04); border: 1 |                 |
|                 |                 | px solid var(-- |                 |
|                 |                 | saf-0); border- |                 |
|                 |                 | radius: 3px; co |                 |
|                 |                 | lor: rgba(var(- |                 |
|                 |                 | -sk_raspberry_r |                 |
|                 |                 | ed,224,30,90),1 |                 |
|                 |                 | ); padding: 2px |                 |
|                 |                 |  3px 1px; --saf |                 |
|                 |                 | -0: rgba(var(-- |                 |
|                 |                 | sk_foreground_l |                 |
|                 |                 | ow,29,28,29),0. |                 |
|                 |                 | 13); overflow-w |                 |
|                 |                 | rap: break-word |                 |
|                 |                 | ; font-size: 12 |                 |
|                 |                 | px; font-varian |                 |
|                 |                 | t-ligatures: no |                 |
|                 |                 | ne; line-height |                 |
|                 |                 | : 1.50001; tab- |                 |
|                 |                 | size: 4; white- |                 |
|                 |                 | space: pre-wrap |                 |
|                 |                 | ; word-break: n |                 |
|                 |                 | ormal; font-fam |                 |
|                 |                 | ily: Monaco, Me |                 |
|                 |                 | nlo, Consolas,  |                 |
|                 |                 | ' Courier New'  |                 |
|                 |                 | , monospace !im |                 |
|                 |                 | portant; font-s |                 |
|                 |                 | tyle: normal; f |                 |
|                 |                 | ont-variant-cap |                 |
|                 |                 | s: normal; font |                 |
|                 |                 | -weight: 400; l |                 |
|                 |                 | etter-spacing:  |                 |
|                 |                 | normal; orphans |                 |
|                 |                 | : 2; text-align |                 |
|                 |                 | : left; text-in |                 |
|                 |                 | dent: 0px; text |                 |
|                 |                 | -transform: non |                 |
|                 |                 | e; widows: 2; w |                 |
|                 |                 | ord-spacing: 0p |                 |
|                 |                 | x; -webkit-text |                 |
|                 |                 | -stroke-width:  |                 |
|                 |                 | 0px; text-decor |                 |
|                 |                 | ation-thickness |                 |
|                 |                 | : initial; text |                 |
|                 |                 | -decoration-sty |                 |
|                 |                 | le: initial; te |                 |
|                 |                 | xt-decoration-c |                 |
|                 |                 | olor: initial;" |                 |
|                 |                 | stringi         |                 |
|                 |                 | fy-type="code"} |                 |
|                 |                 | [uses the       |                 |
|                 |                 | google          |                 |
|                 |                 | lib]{st         |                 |
|                 |                 | yle="color: #1d |                 |
|                 |                 | 1c1d; font-fami |                 |
|                 |                 | ly: Slack-Lato, |                 |
|                 |                 |  Slack-Fraction |                 |
|                 |                 | s, appleLogo, s |                 |
|                 |                 | ans-serif; font |                 |
|                 |                 | -size: 15px; fo |                 |
|                 |                 | nt-style: norma |                 |
|                 |                 | l; font-variant |                 |
|                 |                 | -ligatures: com |                 |
|                 |                 | mon-ligatures;  |                 |
|                 |                 | font-variant-ca |                 |
|                 |                 | ps: normal; fon |                 |
|                 |                 | t-weight: 400;  |                 |
|                 |                 | letter-spacing: |                 |
|                 |                 |  normal; orphan |                 |
|                 |                 | s: 2; text-alig |                 |
|                 |                 | n: left; text-i |                 |
|                 |                 | ndent: 0px; tex |                 |
|                 |                 | t-transform: no |                 |
|                 |                 | ne; white-space |                 |
|                 |                 | : normal; widow |                 |
|                 |                 | s: 2; word-spac |                 |
|                 |                 | ing: 0px; -webk |                 |
|                 |                 | it-text-stroke- |                 |
|                 |                 | width: 0px; bac |                 |
|                 |                 | kground-color:  |                 |
|                 |                 | #f8f8f8; text-d |                 |
|                 |                 | ecoration-thick |                 |
|                 |                 | ness: initial;  |                 |
|                 |                 | text-decoration |                 |
|                 |                 | -style: initial |                 |
|                 |                 | ; text-decorati |                 |
|                 |                 | on-color: initi |                 |
|                 |                 | al; display: in |                 |
|                 |                 | line !important |                 |
|                 |                 | ; float: none;" |                 |
|                 |                 | }`phoneFormat`{ |                 |
|                 |                 | .c-mrkdwn__code |                 |
|                 |                 | style="box-     |                 |
|                 |                 | sizing: inherit |                 |
|                 |                 | ; background-co |                 |
|                 |                 | lor: rgba(var(- |                 |
|                 |                 | -sk_foreground_ |                 |
|                 |                 | min,29,28,29),0 |                 |
|                 |                 | .04); border: 1 |                 |
|                 |                 | px solid var(-- |                 |
|                 |                 | saf-0); border- |                 |
|                 |                 | radius: 3px; co |                 |
|                 |                 | lor: rgba(var(- |                 |
|                 |                 | -sk_raspberry_r |                 |
|                 |                 | ed,224,30,90),1 |                 |
|                 |                 | ); padding: 2px |                 |
|                 |                 |  3px 1px; --saf |                 |
|                 |                 | -0: rgba(var(-- |                 |
|                 |                 | sk_foreground_l |                 |
|                 |                 | ow,29,28,29),0. |                 |
|                 |                 | 13); overflow-w |                 |
|                 |                 | rap: break-word |                 |
|                 |                 | ; font-size: 12 |                 |
|                 |                 | px; font-varian |                 |
|                 |                 | t-ligatures: no |                 |
|                 |                 | ne; line-height |                 |
|                 |                 | : 1.50001; tab- |                 |
|                 |                 | size: 4; white- |                 |
|                 |                 | space: pre-wrap |                 |
|                 |                 | ; word-break: n |                 |
|                 |                 | ormal; font-fam |                 |
|                 |                 | ily: Monaco, Me |                 |
|                 |                 | nlo, Consolas,  |                 |
|                 |                 | ' Courier New'  |                 |
|                 |                 | , monospace !im |                 |
|                 |                 | portant; font-s |                 |
|                 |                 | tyle: normal; f |                 |
|                 |                 | ont-variant-cap |                 |
|                 |                 | s: normal; font |                 |
|                 |                 | -weight: 400; l |                 |
|                 |                 | etter-spacing:  |                 |
|                 |                 | normal; orphans |                 |
|                 |                 | : 2; text-align |                 |
|                 |                 | : left; text-in |                 |
|                 |                 | dent: 0px; text |                 |
|                 |                 | -transform: non |                 |
|                 |                 | e; widows: 2; w |                 |
|                 |                 | ord-spacing: 0p |                 |
|                 |                 | x; -webkit-text |                 |
|                 |                 | -stroke-width:  |                 |
|                 |                 | 0px; text-decor |                 |
|                 |                 | ation-thickness |                 |
|                 |                 | : initial; text |                 |
|                 |                 | -decoration-sty |                 |
|                 |                 | le: initial; te |                 |
|                 |                 | xt-decoration-c |                 |
|                 |                 | olor: initial;" |                 |
|                 |                 | stringify-      |                 |
|                 |                 | type="code"}[to |                 |
|                 |                 | validate the    |                 |
|                 |                 | number. Except  |                 |
|                 |                 | in PH and       |                 |
|                 |                 | HK.]{sty        |                 |
|                 |                 | le="color: #1d1 |                 |
|                 |                 | c1d; font-famil |                 |
|                 |                 | y: Slack-Lato,  |                 |
|                 |                 | Slack-Fractions |                 |
|                 |                 | , appleLogo, sa |                 |
|                 |                 | ns-serif; font- |                 |
|                 |                 | size: 15px; fon |                 |
|                 |                 | t-style: normal |                 |
|                 |                 | ; font-variant- |                 |
|                 |                 | ligatures: comm |                 |
|                 |                 | on-ligatures; f |                 |
|                 |                 | ont-variant-cap |                 |
|                 |                 | s: normal; font |                 |
|                 |                 | -weight: 400; l |                 |
|                 |                 | etter-spacing:  |                 |
|                 |                 | normal; orphans |                 |
|                 |                 | : 2; text-align |                 |
|                 |                 | : left; text-in |                 |
|                 |                 | dent: 0px; text |                 |
|                 |                 | -transform: non |                 |
|                 |                 | e; white-space: |                 |
|                 |                 |  normal; widows |                 |
|                 |                 | : 2; word-spaci |                 |
|                 |                 | ng: 0px; -webki |                 |
|                 |                 | t-text-stroke-w |                 |
|                 |                 | idth: 0px; back |                 |
|                 |                 | ground-color: # |                 |
|                 |                 | f8f8f8; text-de |                 |
|                 |                 | coration-thickn |                 |
|                 |                 | ess: initial; t |                 |
|                 |                 | ext-decoration- |                 |
|                 |                 | style: initial; |                 |
|                 |                 |  text-decoratio |                 |
|                 |                 | n-color: initia |                 |
|                 |                 | l; display: inl |                 |
|                 |                 | ine !important; |                 |
|                 |                 |  float: none;"} |                 |
|                 |                 |                 |                 |
|                 |                 | [`intern        |                 |
|                 |                 | ational:false`{ |                 |
|                 |                 | .c-mrkdwn__code |                 |
|                 |                 | style="box-     |                 |
|                 |                 | sizing: inherit |                 |
|                 |                 | ; background-co |                 |
|                 |                 | lor: rgba(var(- |                 |
|                 |                 | -sk_foreground_ |                 |
|                 |                 | min,29,28,29),0 |                 |
|                 |                 | .04); border: 1 |                 |
|                 |                 | px solid var(-- |                 |
|                 |                 | saf-0); border- |                 |
|                 |                 | radius: 3px; co |                 |
|                 |                 | lor: rgba(var(- |                 |
|                 |                 | -sk_raspberry_r |                 |
|                 |                 | ed,224,30,90),1 |                 |
|                 |                 | ); padding: 2px |                 |
|                 |                 |  3px 1px; --saf |                 |
|                 |                 | -0: rgba(var(-- |                 |
|                 |                 | sk_foreground_l |                 |
|                 |                 | ow,29,28,29),0. |                 |
|                 |                 | 13); overflow-w |                 |
|                 |                 | rap: break-word |                 |
|                 |                 | ; font-size: 12 |                 |
|                 |                 | px; font-varian |                 |
|                 |                 | t-ligatures: no |                 |
|                 |                 | ne; line-height |                 |
|                 |                 | : 1.50001; tab- |                 |
|                 |                 | size: 4; white- |                 |
|                 |                 | space: pre-wrap |                 |
|                 |                 | ; word-break: n |                 |
|                 |                 | ormal; font-fam |                 |
|                 |                 | ily: Monaco, Me |                 |
|                 |                 | nlo, Consolas,  |                 |
|                 |                 | ' Courier New'  |                 |
|                 |                 | , monospace !im |                 |
|                 |                 | portant; font-s |                 |
|                 |                 | tyle: normal; f |                 |
|                 |                 | ont-variant-cap |                 |
|                 |                 | s: normal; font |                 |
|                 |                 | -weight: 400; l |                 |
|                 |                 | etter-spacing:  |                 |
|                 |                 | normal; orphans |                 |
|                 |                 | : 2; text-align |                 |
|                 |                 | : left; text-in |                 |
|                 |                 | dent: 0px; text |                 |
|                 |                 | -transform: non |                 |
|                 |                 | e; widows: 2; w |                 |
|                 |                 | ord-spacing: 0p |                 |
|                 |                 | x; -webkit-text |                 |
|                 |                 | -stroke-width:  |                 |
|                 |                 | 0px; text-decor |                 |
|                 |                 | ation-thickness |                 |
|                 |                 | : initial; text |                 |
|                 |                 | -decoration-sty |                 |
|                 |                 | le: initial; te |                 |
|                 |                 | xt-decoration-c |                 |
|                 |                 | olor: initial;" |                 |
|                 |                 | stringify-t     |                 |
|                 |                 | ype="code"}uses |                 |
|                 |                 | the local       |                 |
|                 |                 | constraint      |                 |
|                 |                 | rules of length |                 |
|                 |                 | and             |                 |
|                 |                 | prefixes]{sty   |                 |
|                 |                 | le="color: #1d1 |                 |
|                 |                 | c1d; font-famil |                 |
|                 |                 | y: Slack-Lato,  |                 |
|                 |                 | Slack-Fractions |                 |
|                 |                 | , appleLogo, sa |                 |
|                 |                 | ns-serif; font- |                 |
|                 |                 | size: 15px; fon |                 |
|                 |                 | t-style: normal |                 |
|                 |                 | ; font-variant- |                 |
|                 |                 | ligatures: comm |                 |
|                 |                 | on-ligatures; f |                 |
|                 |                 | ont-variant-cap |                 |
|                 |                 | s: normal; font |                 |
|                 |                 | -weight: 400; l |                 |
|                 |                 | etter-spacing:  |                 |
|                 |                 | normal; orphans |                 |
|                 |                 | : 2; text-align |                 |
|                 |                 | : left; text-in |                 |
|                 |                 | dent: 0px; text |                 |
|                 |                 | -transform: non |                 |
|                 |                 | e; white-space: |                 |
|                 |                 |  normal; widows |                 |
|                 |                 | : 2; word-spaci |                 |
|                 |                 | ng: 0px; -webki |                 |
|                 |                 | t-text-stroke-w |                 |
|                 |                 | idth: 0px; back |                 |
|                 |                 | ground-color: # |                 |
|                 |                 | f8f8f8; text-de |                 |
|                 |                 | coration-thickn |                 |
|                 |                 | ess: initial; t |                 |
|                 |                 | ext-decoration- |                 |
|                 |                 | style: initial; |                 |
|                 |                 |  text-decoratio |                 |
|                 |                 | n-color: initia |                 |
|                 |                 | l; display: inl |                 |
|                 |                 | ine !important; |                 |
|                 |                 |  float: none;"} |                 |
+-----------------+-----------------+-----------------+-----------------+
| Address         | `in             |                 |                 |
|                 | ternational_res |                 |                 |
|                 | tricted_to:'X'` |                 |                 |
+-----------------+-----------------+-----------------+-----------------+
| Address         | `enabl          | Turns off       | true/false      |
|                 | e_lookup:false` | Postcode        |                 |
|                 |                 | Anywhere        |                 |
|                 |                 | address lookup  |                 |
|                 |                 | as the          |                 |
|                 |                 | validation      |                 |
|                 |                 | doesn\'t work   |                 |
|                 |                 | in some         |                 |
|                 |                 | p               |                 |
|                 |                 | laces/countries |                 |
|                 |                 | such as         |                 |
|                 |                 | Malaysia, Hong  |                 |
|                 |                 | Kong, Thailand, |                 |
|                 |                 | Mexico etc      |                 |
+-----------------+-----------------+-----------------+-----------------+
| Address         | `country:'XX'`  |                 | Country Code    |
+-----------------+-----------------+-----------------+-----------------+
| Address         | `language:'XX'` |                 | Language code   |
+-----------------+-----------------+-----------------+-----------------+
| Address         | `house_no_      | Sets \'House,   | true/false      |
|                 | mandatory:true` | Bldg, or PO     |                 |
|                 |                 | Box\' as        |                 |
|                 |                 | mandatory       |                 |
+-----------------+-----------------+-----------------+-----------------+
| Address         | [`enable_same_  |                 |                 |
|                 | as_primary:fals |                 |                 |
|                 | e`]{.status_tag |                 |                 |
|                 | .required:true  |                 |                 |
|                 | .green}         |                 |                 |
+-----------------+-----------------+-----------------+-----------------+
| Address         | `pos            | Untested        | Integer         |
|                 | tcode_length:X` |                 |                 |
+-----------------+-----------------+-----------------+-----------------+
| Address         | `               | Adds a          | true/false      |
|                 | address_lines_m | \'Street\' tick |                 |
|                 | andatory:false` | box to the      |                 |
|                 |                 | address         |                 |
|                 |                 | component for   |                 |
|                 |                 | when there is   |                 |
|                 |                 | no street name  |                 |
+-----------------+-----------------+-----------------+-----------------+
| Address         | `fields:'X|Y'`  | Choose which    | Fields to       |
|                 |                 | fields are      | choose from     |
|                 |                 | displayed in    | are:            |
|                 |                 | the address     | \`              |
|                 |                 | component       | address_lines\` |
|                 |                 |                 | ,\`floor\`,\`po |
|                 |                 |                 | stcode\`,\`hous |
|                 |                 |                 | e_number_pobox\ |
|                 |                 |                 | `,\`suburb_stat |
|                 |                 |                 | e\`,\`SubBuildi |
|                 |                 |                 | ng\`,\`Building |
|                 |                 |                 | Number\`,\`Buil |
|                 |                 |                 | dingName\`,\`St |
|                 |                 |                 | reet\`,\`Block\ |
|                 |                 |                 | `,\`Neighbourho |
|                 |                 |                 | od\`,\`District |
|                 |                 |                 | \`,\`City\`,\`A |
|                 |                 |                 | dminAreaName\`, |
|                 |                 |                 | \`Province\`,\` |
|                 |                 |                 | ProvinceName\`, |
|                 |                 |                 | \`PostalCode\`, |
|                 |                 |                 | \`CountryName\` |
+-----------------+-----------------+-----------------+-----------------+
| Address         | `optin:radio`   |                 |                 |
+-----------------+-----------------+-----------------+-----------------+
| Address         | `use_alternati  | Valid for       |                 |
|                 | ve_states:true` | Thailand and ?  |                 |
+-----------------+-----------------+-----------------+-----------------+
| Address Capture | `auto           | This will       | true/false      |
|                 | complete:false` | remove the      |                 |
|                 |                 | search field    |                 |
|                 |                 | from the form   |                 |
|                 |                 | so it will      |                 |
|                 |                 | always be in    |                 |
|                 |                 | manual mode.    |                 |
+-----------------+-----------------+-----------------+-----------------+
| Address Capture | `autocomplete   |                 |                 |
|                 | :true, fields:b |                 |                 |
|                 | uildingnumber*+ |                 |                 |
|                 | poboxnumber*|st |                 |                 |
|                 | reet*|city*+pro |                 |                 |
|                 | vince*|postalco |                 |                 |
|                 | de|countryname* |                 |                 |
|                 | , poboxoptions: |                 |                 |
|                 | PO Box|CARE PO| |                 |                 |
|                 | CMA|CMBCPA|GPO  |                 |                 |
|                 | Box|LOCKED BAG| |                 |                 |
|                 | MS|POSTE RESTAN |                 |                 |
|                 | TE|PRIVATE BAG| |                 |                 |
|                 | RSD|RMB|RMSpobo |                 |                 |
|                 | xoptions:'PO Bo |                 |                 |
|                 | x|CARE PO', cou |                 |                 |
|                 | ntryList:'NZ'`\ |                 |                 |
+-----------------+-----------------+-----------------+-----------------+
| Address Capture | PROVIDER:LOQATE |                 |                 |
+-----------------+-----------------+-----------------+-----------------+
| Address Form    | `ex             | Moves the field |                 |
|                 | pand_view:true` | labels from the |                 |
|                 |                 | left of the     |                 |
|                 |                 | free text box   |                 |
|                 |                 | to above the    |                 |
|                 |                 | free text       |                 |
+-----------------+-----------------+-----------------+-----------------+
| Address Form    | [`mix           |                 |                 |
|                 | ed_address:fals |                 |                 |
|                 | e`]{.status_tag |                 |                 |
|                 | .required:true  |                 |                 |
|                 | .green}         |                 |                 |
+-----------------+-----------------+-----------------+-----------------+
| Address Form    | [`              | For example     |                 |
|                 | fields:X|Y*, co | fields:street   |                 |
|                 | untries:'US|FR' | \*\|building_nu |                 |
|                 |  `]{.status_tag | mber\*\|sub_bui |                 |
|                 | .required:true  | lding\|postcode |                 |
|                 | .green          | \*\|neighborhoo |                 |
|                 | }[]{.status_tag | d\*\|district\* |                 |
|                 | .required:true  | \|state\*\|city |                 |
|                 | .green}         |                 |                 |
+-----------------+-----------------+-----------------+-----------------+
| Address Form    | [STREETS_PR     |                 |                 |
|                 | OVIDER:FREETEXT |                 |                 |
|                 | ]{.status_tag   |                 |                 |
|                 | .required:true  |                 |                 |
|                 | .green}         |                 |                 |
|                 |                 |                 |                 |
|                 | [ADDRESS        |                 |                 |
|                 | _VALIDATOR:NONE |                 |                 |
|                 | ]{.status_tag   |                 |                 |
|                 | .required:true  |                 |                 |
|                 | .green}         |                 |                 |
|                 |                 |                 |                 |
|                 | [LOA            |                 |                 |
|                 | D_ON_DEMAND:FAL |                 |                 |
|                 | SE]{.status_tag |                 |                 |
|                 | .required:true  |                 |                 |
|                 | .green}         |                 |                 |
+-----------------+-----------------+-----------------+-----------------+
| Amount          | `donation_res   | Enable or       |                 |
|                 | tricts:credit|o | disable the     |                 |
|                 | ther, monthly_r | \'Payment       |                 |
|                 | estricts:debit` | type\' methods  |                 |
|                 |                 | according to    |                 |
|                 |                 | amount          |                 |
|                 |                 | frequency so    |                 |
|                 |                 | that only the   |                 |
|                 |                 | options         |                 |
|                 |                 | allowable for   |                 |
|                 |                 | different       |                 |
|                 |                 | frequencies are |                 |
|                 |                 | shown on the    |                 |
|                 |                 | form\|Only      |                 |
|                 |                 | works with the  |                 |
|                 |                 | Amount          |                 |
|                 |                 | component. See  |                 |
|                 |                 | https:          |                 |
|                 |                 | //www.pivotaltr |                 |
|                 |                 | acker.com/n/pro |                 |
|                 |                 | jects/353021/st |                 |
|                 |                 | ories/120903411 |                 |
|                 |                 | for more        |                 |
|                 |                 | information     |                 |
+-----------------+-----------------+-----------------+-----------------+
| Amount          | `donation_pa    | Specify payment |                 |
|                 | yment_types:cre | types per       |                 |
|                 | dit, monthly_pa | frequency       |                 |
|                 | yment_types:cre | (default_fre    |                 |
|                 | dit|debit, annu | quency:monthly, |                 |
|                 | al_payment_type | default_freq    |                 |
|                 | s:credit|debit` | uency:donation, |                 |
|                 |                 | default_frequ   |                 |
|                 |                 | ency:quarterly, |                 |
|                 |                 | default_fr      |                 |
|                 |                 | equency:annual, |                 |
|                 |                 | default_frequen |                 |
|                 |                 | cy:fortnightly, |                 |
|                 |                 | default_fr      |                 |
|                 |                 | equency:weekly, |                 |
|                 |                 | default_frequen |                 |
|                 |                 | cy:half-yearly, |                 |
|                 |                 | default_frequen |                 |
|                 |                 | cy:four-weekly) |                 |
+-----------------+-----------------+-----------------+-----------------+
| Amount          | `cents:true`    | Adds a cents    |                 |
|                 |                 | box to the      |                 |
|                 | [`currency:     | amount free     |                 |
|                 | £`]{.status_tag | text box        |                 |
|                 | .required:true  |                 |                 |
|                 | .green          | Adds a currency |                 |
|                 | }[]{.status_tag | to the amount   |                 |
|                 | .required:true  |                 |                 |
|                 | .green}         |                 |                 |
+-----------------+-----------------+-----------------+-----------------+
| Amount          | `default_fre    | Sets the        |                 |
|                 | quency:monthly` | default         |                 |
|                 |                 | frequency to    |                 |
|                 |                 | whatever        |                 |
|                 |                 | frequency is    |                 |
|                 |                 | specified       |                 |
+-----------------+-----------------+-----------------+-----------------+
| Amount          | format_th       |                 |                 |
|                 | ousands:false   |                 |                 |
|                 | format          |                 |                 |
|                 | _thousands:true |                 |                 |
+-----------------+-----------------+-----------------+-----------------+
| BSB             | `country:'x'`   | Country Code    |                 |
+-----------------+-----------------+-----------------+-----------------+
| BSB             | `split_b        | For Canada - it | true/false      |
|                 | sb_fields:true` | changes the     |                 |
|                 |                 | Direct Debit    |                 |
|                 |                 | field into two  |                 |
|                 |                 | separate fields |                 |
|                 |                 | that mimic the  |                 |
|                 |                 | Canadian cheque |                 |
+-----------------+-----------------+-----------------+-----------------+
| BSB             | [`length:       |                 |                 |
|                 | 5`]{.status_tag |                 |                 |
|                 | .active .gray   |                 |                 |
|                 | .c              |                 |                 |
|                 | onstraints_tag} |                 |                 |
+-----------------+-----------------+-----------------+-----------------+
| Card Number     | `a              | Will allow      | [h              |
|                 | llowed_numbers: | cards that      | ttps://www.pivo |
|                 | '^1[0-9]{15}$'` | start with      | taltracker.com/ |
|                 |                 | \'1\'           | story/show/1544 |
|                 |                 |                 | 33160](https:// |
|                 |                 |                 | www.pivotaltrac |
|                 |                 |                 | ker.com/story/s |
|                 |                 |                 | how/154433160){ |
|                 |                 |                 | rel="nofollow"} |
+-----------------+-----------------+-----------------+-----------------+
| Card Number     | `instant_c      | Will add a      | [h              |
|                 | heckbox:true`   | pre-selected    | ttps://www.pivo |
|                 |                 | box \"Take      | taltracker.com/ |
|                 |                 | first payment   | story/show/1508 |
|                 |                 | now\" the form. | 25150](https:// |
|                 |                 | Fundraisers can | www.pivotaltrac |
|                 |                 | remove the tick | ker.com/story/s |
|                 |                 | to hide the CVV | how/150825150){ |
|                 |                 | field and turn  | rel="nofollow"} |
|                 |                 | off the instant |                 |
|                 |                 | payment process |                 |
|                 |                 | for that        |                 |
|                 |                 | particular      |                 |
|                 |                 | donor. \        |                 |
|                 |                 | This locale     |                 |
|                 |                 | also works with |                 |
|                 |                 | Debit Account   |                 |
|                 |                 | Number          |                 |
|                 |                 | component where |                 |
|                 |                 | the gateway is  |                 |
|                 |                 | setup for       |                 |
|                 |                 | direct debit    |                 |
|                 |                 | payments.       |                 |
|                 |                 |                 |                 |
|                 |                 | **Please N.B.   |                 |
|                 |                 | this setting is |                 |
|                 |                 | strongly        |                 |
|                 |                 | discouraged.    |                 |
|                 |                 | The value of    |                 |
|                 |                 | instant         |                 |
|                 |                 | payments is     |                 |
|                 |                 | largely derived |                 |
|                 |                 | from the        |                 |
|                 |                 | commitment      |                 |
|                 |                 | people are      |                 |
|                 |                 | making there    |                 |
|                 |                 | and then vs.    |                 |
|                 |                 | the \'you have  |                 |
|                 |                 | a bit of time   |                 |
|                 |                 | to think about  |                 |
|                 |                 | it and cancel   |                 |
|                 |                 | before your     |                 |
|                 |                 | first payment   |                 |
|                 |                 | comes out in    |                 |
|                 |                 | maybe a few     |                 |
|                 |                 | weeks time\'    |                 |
|                 |                 | type sentiment. |                 |
|                 |                 | There is no     |                 |
|                 |                 | other scenario  |                 |
|                 |                 | where a card    |                 |
|                 |                 | holder presents |                 |
|                 |                 | their card and  |                 |
|                 |                 | money is not    |                 |
|                 |                 | taken off it    |                 |
|                 |                 | immediately,    |                 |
|                 |                 | and so it is    |                 |
|                 |                 | not considered  |                 |
|                 |                 | a valid         |                 |
|                 |                 | objection to    |                 |
|                 |                 | wish to delay   |                 |
|                 |                 | payment. This   |                 |
|                 |                 | setting almost  |                 |
|                 |                 | destroys the    |                 |
|                 |                 | entire purpose  |                 |
|                 |                 | of instant      |                 |
|                 |                 | payments.**     |                 |
+-----------------+-----------------+-----------------+-----------------+
| Card Number     | `instant_ch     | Same as the     |                 |
|                 | eckbox:true, in | above but the   |                 |
|                 | stant_checkbox_ | option is not   |                 |
|                 | default:false`  | selected by     |                 |
|                 |                 | default.        |                 |
|                 |                 | Fundraisers     |                 |
|                 |                 | need to         |                 |
|                 |                 | manually tick   |                 |
|                 |                 | to turn on the  |                 |
|                 |                 | instant         |                 |
|                 |                 | payment.        |                 |
+-----------------+-----------------+-----------------+-----------------+
| Card Number     | [`invalid       | The form        |                 |
|                 | ate_prepaid:tru | rejects prepaid |                 |
|                 | e`]{.status_tag | cards when true |                 |
|                 | .required:true  | and accepts     |                 |
|                 | .green}         | them when       |                 |
|                 |                 | false.          |                 |
+-----------------+-----------------+-----------------+-----------------+
| Card Number     | [`invali        | The form        |                 |
|                 | date_debit:fals | rejects Visa    |                 |
|                 | e`]{.status_tag | Debit cards     |                 |
|                 | .required:true  | when true and   |                 |
|                 | .green}         | accepts them    |                 |
|                 |                 | when false      |                 |
+-----------------+-----------------+-----------------+-----------------+
| Card Number     | [`card_info:tru | This component  |                 |
|                 | e`]{.status_tag | locale replaces |                 |
|                 | .required:true  | the Card Type   |                 |
|                 | .green}         | component and   |                 |
|                 |                 | should be       |                 |
|                 |                 | present on all  |                 |
|                 |                 | campaigns where |                 |
|                 |                 | cards are being |                 |
|                 |                 | collected       |                 |
|                 |                 | https           |                 |
|                 |                 | ://www.pivotalt |                 |
|                 |                 | racker.com/n/pr |                 |
|                 |                 | ojects/353021/s |                 |
|                 |                 | tories/91345078 |                 |
+-----------------+-----------------+-----------------+-----------------+
| Checkpoint      | [[`c            |                 |                 |
|                 | opy_on_next:tru |                 |                 |
|                 | e`]{.status_tag |                 |                 |
|                 | .active .gray   |                 |                 |
|                 | .constraints_ta |                 |                 |
|                 | g}]{.status_tag |                 |                 |
|                 | .required:true  |                 |                 |
|                 | .green}         |                 |                 |
+-----------------+-----------------+-----------------+-----------------+
| Child Gender    | N/A             |                 |                 |
+-----------------+-----------------+-----------------+-----------------+
| Child Name      | [[`re           |                 |                 |
|                 | nder_as:freetex |                 |                 |
|                 | t`]{.status_tag |                 |                 |
|                 | .required:true  |                 |                 |
|                 | .gree           |                 |                 |
|                 | n}]{.status_tag |                 |                 |
|                 | .active .gray   |                 |                 |
|                 | .               |                 |                 |
|                 | constraints_tag |                 |                 |
|                 | }[]{.status_tag |                 |                 |
|                 | .active .gray   |                 |                 |
|                 | .c              |                 |                 |
|                 | onstraints_tag} |                 |                 |
+-----------------+-----------------+-----------------+-----------------+
| Child name and  | `title_d        | Define the      | Campaign        |
| gender          | ata_set:'xxxx'` | dataset for the | dataset title   |
|                 |                 | title option    |                 |
+-----------------+-----------------+-----------------+-----------------+
| Child name and  | `gift_d         | Define the      | Campaign        |
| gender          | ata_set:'xxxx'` | dataset for the | dataset title   |
|                 |                 | gift option     |                 |
+-----------------+-----------------+-----------------+-----------------+
| Child name and  | `max:X`         | Limit the       | Integer         |
| gender          |                 | number of       |                 |
|                 |                 | children that   |                 |
|                 |                 | can be added    |                 |
+-----------------+-----------------+-----------------+-----------------+
| Child name and  | `fields:titl    |                 |                 |
| gender          | e|firstname|las |                 |                 |
|                 | tname|dob|gift` |                 |                 |
+-----------------+-----------------+-----------------+-----------------+
| Child name and  | `hide_date_     |                 |                 |
| gender          | and_month:true` |                 |                 |
+-----------------+-----------------+-----------------+-----------------+
| Child Profile   | `valid          | Validate the    | true/false      |
| Number          | ate_child:true` | child profile   |                 |
|                 |                 | number against  |                 |
|                 |                 | the account\'s  |                 |
|                 |                 | database        |                 |
+-----------------+-----------------+-----------------+-----------------+
| Child Region    | N/A             |                 |                 |
+-----------------+-----------------+-----------------+-----------------+
| Child           | `valida         | Validate the    | true/false      |
| Sponsorship     | te_child:false` | child profile   |                 |
|                 |                 | number against  |                 |
|                 |                 | the account\'s  |                 |
|                 |                 | database        |                 |
+-----------------+-----------------+-----------------+-----------------+
| Child           | `               | Nominates the   | Component       |
| Sponsorship     | required_by_reg | other           | internal name   |
|                 | ular_giving:chi | components      |                 |
|                 | ld_sponsorship` | required        |                 |
+-----------------+-----------------+-----------------+-----------------+
| Child           | [`hide          | Makes           |                 |
| Sponsorship     | _with_otg_eq:Ye | sponsorship     |                 |
|                 | s`]{.status_tag | available only  |                 |
|                 | .active .gray   | for recurring   |                 |
|                 | .               | donors and not  |                 |
|                 | constraints_tag | one off         |                 |
|                 | }[]{.status_tag | donations       |                 |
|                 | .active .gray   |                 |                 |
|                 | .c              |                 |                 |
|                 | onstraints_tag} |                 |                 |
+-----------------+-----------------+-----------------+-----------------+
| Child Selection | [`birth         | Shows / hides   |                 |
|                 | day_search:fals | the Birthday    |                 |
|                 | e`]{.status_tag | drop lists in   |                 |
|                 | .required:true  | the search      |                 |
|                 | .green}         | filters on the  |                 |
|                 | [`birt          | fundraiser form |                 |
|                 | hday_search:tru |                 |                 |
|                 | e`]{.status_tag | Birthday ranges |                 |
|                 | .required:true  | controls the    |                 |
|                 | .green}         | date ranges     |                 |
|                 |                 | displayed       |                 |
|                 | [`birth         |                 |                 |
|                 | day_ranges:1-7| |                 |                 |
|                 | 8-15|16-23|23-3 |                 |                 |
|                 | 1`]{.status_tag |                 |                 |
|                 | .required:true  |                 |                 |
|                 | .green}         |                 |                 |
+-----------------+-----------------+-----------------+-----------------+
| Child Selection | `allow_no_pr    | Hides or shows  |                 |
|                 | eference:false` | the \"No        |                 |
|                 |                 | preference\"    |                 |
|                 | `allow_no_p     | option. There   |                 |
|                 | reference:true` | is now a        |                 |
|                 |                 | component       |                 |
|                 |                 | resource to     |                 |
|                 |                 | allow you to    |                 |
|                 |                 | change the      |                 |
|                 |                 | wording of \"No |                 |
|                 |                 | preference\".   |                 |
+-----------------+-----------------+-----------------+-----------------+
| Child Selection | `sco            | Currently the   |                 |
|                 | pe:unsponsored` | country/region  |                 |
|                 |                 | drop down that  |                 |
|                 | `scope:all`     | shows on the    |                 |
|                 |                 | F2F form has    |                 |
|                 |                 | options built   |                 |
|                 |                 | dynamically     |                 |
|                 |                 | from the list   |                 |
|                 |                 | of children     |                 |
|                 |                 | that have ever  |                 |
|                 |                 | been imported   |                 |
|                 |                 | on that         |                 |
|                 |                 | campaign. Scope |                 |
|                 |                 | unsponsored     |                 |
|                 |                 | only shows      |                 |
|                 |                 | countries from  |                 |
|                 |                 | children who    |                 |
|                 |                 | have not been   |                 |
|                 |                 | sponsored.      |                 |
|                 |                 | Scope all shows |                 |
|                 |                 | all countries   |                 |
|                 |                 | imported with   |                 |
|                 |                 | child data      |                 |
+-----------------+-----------------+-----------------+-----------------+
| Child Selection | `               |                 |                 |
|                 | age_ranges:1-2| |                 |                 |
|                 | 3-6|7-11|12-14` |                 |                 |
+-----------------+-----------------+-----------------+-----------------+
| Child Selection | `allow_with_    | Turns on or off |                 |
|                 | donation:true`\ | the option to   |                 |
|                 | `allow_with_    | make            |                 |
|                 | donation:false` | sponsorship     |                 |
|                 |                 | available only  |                 |
|                 |                 | for recurring   |                 |
|                 |                 | donors and not  |                 |
|                 |                 | one off         |                 |
|                 |                 | donations       |                 |
+-----------------+-----------------+-----------------+-----------------+
| Child Selection | `format_d       |                 |                 |
|                 | ate:MM/DD/YYYY` |                 |                 |
+-----------------+-----------------+-----------------+-----------------+
| Comments        | `op             | Comments is     |                 |
|                 | tions:debit|oth | expandable free |                 |
|                 | er, other_compo | text box. This  |                 |
|                 | nents:comments` | shows comments  |                 |
|                 |                 | with Payment    |                 |
|                 |                 | type Other      |                 |
+-----------------+-----------------+-----------------+-----------------+
| Consent Block   | `s              |                 | True / False    |
|                 | tandalone:true` |                 |                 |
+-----------------+-----------------+-----------------+-----------------+
| Consumer Price  | N/A             |                 |                 |
| Index           |                 |                 |                 |
+-----------------+-----------------+-----------------+-----------------+
| Contact block   | `validati       | If the          | Phone component |
|                 | on_workflow:'Ph | Preferred Phone | internal name   |
|                 | one_home_phone` | is home phone,  |                 |
|                 | or              | then home phone |                 |
|                 | `Phone          | is mandatory    |                 |
|                 | _mobile_phone'` | and mobile is   |                 |
|                 |                 | optional. If    |                 |
|                 |                 | Preferred Phone |                 |
|                 |                 | is mobile then  |                 |
|                 |                 | mobile is       |                 |
|                 |                 | mandatory and   |                 |
|                 |                 | home phone is   |                 |
|                 |                 | optional.       |                 |
+-----------------+-----------------+-----------------+-----------------+
| Contact block   | `validatio      |                 |                 |
|                 | n_workflow_err_ |                 |                 |
|                 | msg:'CONTACT_BL |                 |                 |
|                 | OCK_ONE_PHONE'` |                 |                 |
+-----------------+-----------------+-----------------+-----------------+
| Contact         | `r              | This changes    |                 |
| Preferences     | ender_as:radio` | the check boxes |                 |
|                 |                 | to radio        |                 |
|                 | `rend           | buttons and you |                 |
|                 | er_as:checkbox` | will have to    |                 |
|                 |                 | select one to   |                 |
|                 | `r              | validate        |                 |
|                 | ender_as:yesno` |                 |                 |
+-----------------+-----------------+-----------------+-----------------+
| Contact         | `               | This changes    |                 |
| Preferences     | options:email|m | the check boxes |                 |
|                 | ail|phone|sms|d | to radio        |                 |
|                 | o_not_contact`\ | buttons and     |                 |
|                 |                 | adds \'Yes\'    |                 |
|                 |                 | and \'No\'      |                 |
|                 |                 | radio buttons   |                 |
|                 |                 | to each contact |                 |
|                 |                 | type. You can   |                 |
|                 |                 | select NO on    |                 |
|                 |                 | all of them,    |                 |
|                 |                 | YES on all of   |                 |
|                 |                 | them, but you   |                 |
|                 |                 | cannot leave    |                 |
|                 |                 | any contact     |                 |
|                 |                 | type without a  |                 |
|                 |                 | proper          |                 |
|                 |                 | selection to    |                 |
|                 |                 | validate        |                 |
+-----------------+-----------------+-----------------+-----------------+
| Contact         | `rende          | This adds check |                 |
| Preferences     | r_as:'checkbox` | boxes to each   |                 |
|                 |                 | contact type    |                 |
|                 |                 | and you will    |                 |
|                 |                 | have to select  |                 |
|                 |                 | one to validate |                 |
+-----------------+-----------------+-----------------+-----------------+
| Contact         | `options:email| | as part of      |                 |
| Preferences     | mail|phone|sms| | <https          |                 |
|                 | do_not_contact` | ://github.com/w |                 |
|                 |                 | aysact/evergivi |                 |
|                 |                 | ng/issues/5072> |                 |
|                 |                 | we migrated the |                 |
|                 |                 | Contact         |                 |
|                 |                 | Preferences     |                 |
|                 |                 | Options from    |                 |
|                 |                 | the campaign    |                 |
|                 |                 | into the        |                 |
|                 |                 | Contact         |                 |
|                 |                 | Preferences     |                 |
|                 |                 | component       |                 |
|                 |                 | constraints     |                 |
+-----------------+-----------------+-----------------+-----------------+
| Credit card     | N/A             |                 |                 |
| failed          |                 |                 |                 |
| validations     |                 |                 |                 |
+-----------------+-----------------+-----------------+-----------------+
| Credit Card     | N/A             |                 |                 |
| Type            |                 |                 |                 |
+-----------------+-----------------+-----------------+-----------------+
| Currency Locale | `currency:'€'`  | Currency Locale |                 |
|                 |                 | is designed to  |                 |
|                 |                 | work only with  |                 |
|                 |                 | GB and IE       |                 |
|                 |                 | campaigns, to   |                 |
|                 |                 | have the        |                 |
|                 |                 | ability to pay  |                 |
|                 |                 | in Euros or     |                 |
|                 |                 | Pounds          |                 |
+-----------------+-----------------+-----------------+-----------------+
| Custom          | [`rende         |                 |                 |
| Components      | r_as:autosugges |                 |                 |
|                 | t`]{.status_tag |                 |                 |
|                 | .active .gray   |                 |                 |
|                 | .c              |                 |                 |
|                 | onstraints_tag} |                 |                 |
|                 |                 |                 |                 |
|                 | [`re            |                 |                 |
|                 | nder_as:checkbo |                 |                 |
|                 | x`]{.status_tag |                 |                 |
|                 | .active .gray   |                 |                 |
|                 | .c              |                 |                 |
|                 | onstraints_tag} |                 |                 |
|                 |                 |                 |                 |
|                 | [`re            |                 |                 |
|                 | nder_as:dropdow |                 |                 |
|                 | n`]{.status_tag |                 |                 |
|                 | .active .gray   |                 |                 |
|                 | .c              |                 |                 |
|                 | onstraints_tag} |                 |                 |
|                 |                 |                 |                 |
|                 | [`re            |                 |                 |
|                 | nder_as:freetex |                 |                 |
|                 | t`]{.status_tag |                 |                 |
|                 | .active .gray   |                 |                 |
|                 | .c              |                 |                 |
|                 | onstraints_tag} |                 |                 |
|                 |                 |                 |                 |
|                 | [`rend          |                 |                 |
|                 | er_as:datetime, |                 |                 |
|                 |  start_year:202 |                 |                 |
|                 | 0, end_year:202 |                 |                 |
|                 | 5`]{.status_tag |                 |                 |
|                 | .active .gray   |                 |                 |
|                 | .c              |                 |                 |
|                 | onstraints_tag} |                 |                 |
|                 |                 |                 |                 |
|                 | [`rende         |                 |                 |
|                 | r_as:autosugges |                 |                 |
|                 | t`]{.status_tag |                 |                 |
|                 | .active .gray   |                 |                 |
|                 | .c              |                 |                 |
|                 | onstraints_tag} |                 |                 |
+-----------------+-----------------+-----------------+-----------------+
| Custom          | For more see:   |                 |                 |
| Components      | Controls for    |                 |                 |
|                 | multiple        |                 |                 |
|                 | components.md   |                 |                 |
|                 | https:          |                 |                 |
|                 | //waysact.zende |                 |                 |
|                 | sk.com/knowledg |                 |                 |
|                 | e/articles/3600 |                 |                 |
|                 | 02131335/en-us? |                 |                 |
|                 | brand_id=230874 |                 |                 |
+-----------------+-----------------+-----------------+-----------------+
| Custom Input    | `type:text`     | Type: text,     |                 |
|                 |                 | radio, select,  |                 |
|                 | [`              | checkbox,       |                 |
|                 | type:autosugges | aut0-suggest,   |                 |
|                 | t`]{.status_tag | score           |                 |
|                 | .active .gray   |                 |                 |
|                 | .c              | ( score renders |                 |
|                 | onstraints_tag} | a numeric range |                 |
|                 |                 | to rate         |                 |
|                 | [`type:radi     | something, as   |                 |
|                 | o`]{.status_tag | in the surveys, |                 |
|                 | .active .gray   | this type is    |                 |
|                 | .c              | the `score`     |                 |
|                 | onstraints_tag} | type (the       |                 |
|                 |                 | default range   |                 |
|                 | [`type:selec    | for the score   |                 |
|                 | t`]{.status_tag | type is 1..10). |                 |
|                 | .active .gray   | You can         |                 |
|                 | .c              | configure that  |                 |
|                 | onstraints_tag} | with            |                 |
|                 |                 | score_min:2,    |                 |
|                 | [`type:scor     | score_max:4)    |                 |
|                 | e`]{.status_tag |                 |                 |
|                 | .active .gray   |                 |                 |
|                 | .c              |                 |                 |
|                 | onstraints_tag} |                 |                 |
|                 |                 |                 |                 |
|                 | [`type:checkbo  |                 |                 |
|                 | x`]{.status_tag |                 |                 |
|                 | .active .gray   |                 |                 |
|                 | .c              |                 |                 |
|                 | onstraints_tag} |                 |                 |
+-----------------+-----------------+-----------------+-----------------+
| Custom Input    | `label:Notes`   | Adds a label    |                 |
|                 |                 | for the         |                 |
|                 |                 | question        |                 |
+-----------------+-----------------+-----------------+-----------------+
| Custom Input    | `err            | Adds an error   |                 |
|                 | or:Please enter | message for the |                 |
|                 |  a valid value  | question        |                 |
|                 | 請輸入正確編碼` |                 |                 |
+-----------------+-----------------+-----------------+-----------------+
| Custom Input    | `f              | Allowed formats |                 |
|                 | ormat:^(.{2})$` | for data entry  |                 |
|                 |                 | into that       |                 |
|                 |                 | field.          |                 |
+-----------------+-----------------+-----------------+-----------------+
| Custom Input    | `tag:notes`     | Creates a tag   |                 |
|                 |                 | for that        |                 |
|                 |                 | question /      |                 |
|                 |                 | answer          |                 |
+-----------------+-----------------+-----------------+-----------------+
| Custom Input    | [`data_set      | The data set    |                 |
|                 | :Language - enM | for that        |                 |
|                 | Y`]{.status_tag | question        |                 |
|                 | .active .gray   |                 |                 |
|                 | .               |                 |                 |
|                 | constraints_tag |                 |                 |
|                 | }[]{.status_tag |                 |                 |
|                 | .active .gray   |                 |                 |
|                 | .c              |                 |                 |
|                 | onstraints_tag} |                 |                 |
+-----------------+-----------------+-----------------+-----------------+
| Custom Input    | [`              | Options:v       |                 |
|                 | style:vertical- | ertical-layout, |                 |
|                 | layout|big-labe | hor             |                 |
|                 | l`]{.status_tag | izontal-layout, |                 |
|                 | .active .gray   | center,         |                 |
|                 | .               | big-label\      |                 |
|                 | constraints_tag |                 |                 |
|                 | }[]{.status_tag | big-label =\>   |                 |
|                 | .active .gray   | works as the    |                 |
|                 | .c              | know big label, |                 |
|                 | onstraints_tag} | spreading the   |                 |
|                 |                 | label,          |                 |
|                 |                 | centered, the   |                 |
|                 |                 | absence of this |                 |
|                 |                 | will render the |                 |
|                 |                 | label as usual, |                 |
|                 |                 | on the left.    |                 |
|                 |                 |                 |                 |
|                 |                 | ho              |                 |
|                 |                 | rizontal-layout |                 |
|                 |                 | =\> renders the |                 |
|                 |                 | options in the  |                 |
|                 |                 | same row, as    |                 |
|                 |                 | the first two   |                 |
|                 |                 | custom inputs   |                 |
|                 |                 | in the form     |                 |
|                 |                 | above           |                 |
|                 |                 |                 |                 |
|                 |                 | vertical-layout |                 |
|                 |                 | =\> renders the |                 |
|                 |                 | options in a    |                 |
|                 |                 | vertical grid,  |                 |
|                 |                 | as the 3rd and  |                 |
|                 |                 | 4th custom      |                 |
|                 |                 | inputs in the   |                 |
|                 |                 | form above      |                 |
|                 |                 |                 |                 |
|                 |                 | center =\> is   |                 |
|                 |                 | an addition to  |                 |
|                 |                 | the             |                 |
|                 |                 | hor             |                 |
|                 |                 | izontal-layout, |                 |
|                 |                 | it makes the    |                 |
|                 |                 | options         |                 |
|                 |                 | centered on the |                 |
|                 |                 | form, otherwise |                 |
|                 |                 | they will be    |                 |
|                 |                 | aligned with    |                 |
|                 |                 | the rest of the |                 |
|                 |                 | options. You    |                 |
|                 |                 | can see the     |                 |
|                 |                 | centered        |                 |
|                 |                 | options in the  |                 |
|                 |                 | 5th and 6th     |                 |
|                 |                 | custom inputs   |                 |
+-----------------+-----------------+-----------------+-----------------+
| Custom input    | [`              | Will make all   |                 |
|                 | require_all:tru | the options in  |                 |
|                 | e`]{.status_tag | checkbox setup  |                 |
|                 | .active .gray   | mandatory,      |                 |
|                 | .c              | whereas         |                 |
|                 | onstraints_tag} | `required:true` |                 |
|                 |                 | only makes it   |                 |
|                 |                 | mandatory to    |                 |
|                 |                 | complete one    |                 |
|                 |                 | answer          |                 |
+-----------------+-----------------+-----------------+-----------------+
| Date of birth   | `hide_date_     | Shows only the  | true/false      |
|                 | and_month:true` | year of birth   |                 |
|                 |                 | in Date of      |                 |
|                 |                 | Birth           |                 |
+-----------------+-----------------+-----------------+-----------------+
| Date of birth   | `               | Shows only the  |                 |
|                 | hide_date:true` | month and year  |                 |
|                 |                 | of birth in     |                 |
|                 |                 | Date of Birth   |                 |
+-----------------+-----------------+-----------------+-----------------+
| Date of birth   | `               | The required    | Integer         |
|                 | required_age:X` | minimum age is  |                 |
|                 |                 | set to the      |                 |
|                 |                 | value you       |                 |
|                 |                 | replace x with  |                 |
|                 |                 | (it can be set  |                 |
|                 |                 | to 0)           |                 |
+-----------------+-----------------+-----------------+-----------------+
| Date of birth   | `r              | Default:true;   | true/false      |
|                 | equired_age_is_ | if false, will  |                 |
|                 | mandatory:true` | give a fuzzy    |                 |
|                 |                 | warning when    |                 |
|                 |                 | validation      |                 |
|                 |                 | fails           |                 |
+-----------------+-----------------+-----------------+-----------------+
| Date of birth   | `calend         | Adds the        |                 |
|                 | ar:'gregorian'` | Gregorian       |                 |
|                 |                 | calendar to     |                 |
|                 |                 | campaigns whose |                 |
|                 |                 | DOB defaults to |                 |
|                 |                 | the Buddhist    |                 |
|                 |                 | Calendar        |                 |
+-----------------+-----------------+-----------------+-----------------+
| Date of birth   | `calen          | Adds the        |                 |
|                 | dar:'buddhist'` | Buddhist        |                 |
|                 |                 | calendar to the |                 |
|                 |                 | DOB component   |                 |
+-----------------+-----------------+-----------------+-----------------+
| Date of birth   | `low_ag         | Adds a warning  | integer         |
|                 | e_threshold:25` | to the date of  |                 |
|                 |                 | brith component |                 |
|                 |                 | for ages under  |                 |
|                 |                 | a certain       |                 |
|                 |                 | value. It comes |                 |
|                 |                 | with resources: |                 |
|                 |                 | l               |                 |
|                 |                 | ow_age_warning, |                 |
|                 |                 | which has a     |                 |
|                 |                 | {threshold}     |                 |
|                 |                 | placeholder     |                 |
|                 |                 | that will be    |                 |
|                 |                 | replaced with   |                 |
|                 |                 | the actual      |                 |
|                 |                 | value in        |                 |
|                 |                 | runtime.        |                 |
+-----------------+-----------------+-----------------+-----------------+
| Date of birth   | `high_ag        | Adds a warning  | integer         |
|                 | e_threshold:90` | to the date of  |                 |
|                 |                 | brith component |                 |
|                 |                 | for ages over a |                 |
|                 |                 | certain value.  |                 |
|                 |                 | It comes with   |                 |
|                 |                 | resources:      |                 |
|                 |                 | hi              |                 |
|                 |                 | gh_age_warning, |                 |
|                 |                 | which has a     |                 |
|                 |                 | {threshold}     |                 |
|                 |                 | placeholder     |                 |
|                 |                 | that will be    |                 |
|                 |                 | replaced with   |                 |
|                 |                 | the actual      |                 |
|                 |                 | value in        |                 |
|                 |                 | runtime.        |                 |
+-----------------+-----------------+-----------------+-----------------+
| Date of birth   | `ADULT_         | Designed for    |                 |
|                 | CHECK_MODE:true | Digital Forms   |                 |
|                 | `{.notranslate} | this will       |                 |
|                 |                 | replace DOB     |                 |
|                 |                 | with a checkbox |                 |
|                 |                 | to confirm the  |                 |
|                 |                 | donor is over a |                 |
|                 |                 | certain age. It |                 |
|                 |                 | comes with two  |                 |
|                 |                 | new component   |                 |
|                 |                 | resources       |                 |
|                 |                 | DATE_OF_B       |                 |
|                 |                 | IRTH_DF_ADULT_C |                 |
|                 |                 | HECK_MODE_LABEL |                 |
|                 |                 | and             |                 |
|                 |                 | DATE_OF_BIRTH   |                 |
|                 |                 | _DF_ADULT_CHECK |                 |
|                 |                 | _MODE_CHECKBOX. |                 |
+-----------------+-----------------+-----------------+-----------------+
| Debit Account   | `instant        | This locale     |                 |
| Number          | _checkbox:true` | also works with |                 |
|                 |                 | the Card Number |                 |
|                 |                 | component.      |                 |
|                 |                 |                 |                 |
|                 |                 | This will add a |                 |
|                 |                 | pre-selected    |                 |
|                 |                 | box \"Take      |                 |
|                 |                 | first payment   |                 |
|                 |                 | now\" the form. |                 |
|                 |                 | Fundraisers can |                 |
|                 |                 | remove the tick |                 |
|                 |                 | to hide the CVV |                 |
|                 |                 | field and turn  |                 |
|                 |                 | off the instant |                 |
|                 |                 | payment process |                 |
|                 |                 | for that        |                 |
|                 |                 | particular      |                 |
|                 |                 | donor.          |                 |
|                 |                 |                 |                 |
|                 |                 | **Please N.B.   |                 |
|                 |                 | this setting is |                 |
|                 |                 | strongly        |                 |
|                 |                 | discouraged.    |                 |
|                 |                 | The value of    |                 |
|                 |                 | instant         |                 |
|                 |                 | payments is     |                 |
|                 |                 | largely derived |                 |
|                 |                 | from the        |                 |
|                 |                 | commitment      |                 |
|                 |                 | people are      |                 |
|                 |                 | making there    |                 |
|                 |                 | and then vs.    |                 |
|                 |                 | the \'you have  |                 |
|                 |                 | a bit of time   |                 |
|                 |                 | to think about  |                 |
|                 |                 | it and cancel   |                 |
|                 |                 | before your     |                 |
|                 |                 | first payment   |                 |
|                 |                 | comes out in    |                 |
|                 |                 | maybe a few     |                 |
|                 |                 | weeks time\'    |                 |
|                 |                 | type sentiment. |                 |
|                 |                 | There is no     |                 |
|                 |                 | other scenario  |                 |
|                 |                 | where a card    |                 |
|                 |                 | holder presents |                 |
|                 |                 | their card and  |                 |
|                 |                 | money is not    |                 |
|                 |                 | taken off it    |                 |
|                 |                 | immediately,    |                 |
|                 |                 | and so it is    |                 |
|                 |                 | not considered  |                 |
|                 |                 | a valid         |                 |
|                 |                 | objection to    |                 |
|                 |                 | wish to delay   |                 |
|                 |                 | payment. This   |                 |
|                 |                 | setting almost  |                 |
|                 |                 | destroys the    |                 |
|                 |                 | entire purpose  |                 |
|                 |                 | of instant      |                 |
|                 |                 | payments.**     |                 |
|                 |                 |                 |                 |
|                 |                 |                 |                 |
+-----------------+-----------------+-----------------+-----------------+
| Debit Account   | `instant_chec   | Same as the     |                 |
| Number          | kbox:true, inst | above but the   |                 |
|                 | ant_checkbox_de | option is not   |                 |
|                 | fault:false  `  | selected by     |                 |
|                 |                 | default.        |                 |
|                 |                 | Fundraisers     |                 |
|                 |                 | need to         |                 |
|                 |                 | manually tick   |                 |
|                 |                 | to turn on the  |                 |
|                 |                 | instant         |                 |
|                 |                 | payment.        |                 |
+-----------------+-----------------+-----------------+-----------------+
| Debit           | N/A             | en-IE locale    |                 |
| Communications  |                 | only            |                 |
+-----------------+-----------------+-----------------+-----------------+
| Debit Failed    | N/A             |                 |                 |
| Validations     |                 |                 |                 |
+-----------------+-----------------+-----------------+-----------------+
| Debit Tax       | N/A             | en-IE locale    |                 |
|                 |                 | only            |                 |
+-----------------+-----------------+-----------------+-----------------+
| Direct Debit    | N/A             |                 |                 |
| IBAN            |                 |                 |                 |
+-----------------+-----------------+-----------------+-----------------+
| Direct Debit    | N/A             |                 |                 |
| SWIFT           |                 |                 |                 |
+-----------------+-----------------+-----------------+-----------------+
| Direct debit    | `generate       | Adds the        | true/false      |
| type            | _bic_iban:true` | BIC/IBAN        |                 |
|                 |                 | components to   |                 |
|                 |                 | the form        |                 |
+-----------------+-----------------+-----------------+-----------------+
| Donation on     | `component      |                 |                 |
| behalf of       | s:PersonalDetai |                 |                 |
|                 | ls|secondary_ad |                 |                 |
|                 | dress|custom_4` |                 |                 |
+-----------------+-----------------+-----------------+-----------------+
| Email           | `aut            | common domain   |                 |
|                 | ocomplete:true` | names           |                 |
|                 |                 | suggestions     |                 |
|                 |                 | appear after    |                 |
|                 |                 | pressing the @  |                 |
|                 |                 | character in    |                 |
|                 |                 | both the email  |                 |
|                 |                 | field and in    |                 |
|                 |                 | the email       |                 |
|                 |                 | confirmation    |                 |
|                 |                 | field.          |                 |
+-----------------+-----------------+-----------------+-----------------+
| Email           | `               | Designed for    |                 |
|                 | show_confirmati | blind           |                 |
|                 | on_field:false` | fundraisers     |                 |
|                 |                 | using the       |                 |
|                 |                 | accessibility   |                 |
|                 |                 | tools on a      |                 |
|                 |                 | tablet, this    |                 |
|                 |                 | locale will     |                 |
|                 |                 | hide the        |                 |
|                 |                 | Confirm Email   |                 |
|                 |                 | field. **Not    |                 |
|                 |                 | for general use |                 |
|                 |                 | in campaigns -  |                 |
|                 |                 | don\'t          |                 |
|                 |                 | advertise the   |                 |
|                 |                 | feature and     |                 |
|                 |                 | only use where  |                 |
|                 |                 | needed.**       |                 |
+-----------------+-----------------+-----------------+-----------------+
| Expiry Date     | `mi             | Logic to        | Integer         |
|                 | nimum_months:X` | control the     |                 |
|                 |                 | number of       |                 |
|                 |                 | months from the |                 |
|                 |                 | current date    |                 |
|                 |                 | that the credit |                 |
|                 |                 | card expiry     |                 |
|                 |                 | date must have  |                 |
|                 |                 | before it is    |                 |
|                 |                 | accepted. The   |                 |
|                 |                 | minimum time is |                 |
|                 |                 | the value you   |                 |
|                 |                 | replace x with: |                 |
|                 |                 | m               |                 |
|                 |                 | inimum_months:2 |                 |
|                 |                 | creates logic   |                 |
|                 |                 | to only accept  |                 |
|                 |                 | credit cards    |                 |
|                 |                 | that expire     |                 |
|                 |                 | after 2 months  |                 |
|                 |                 | from the        |                 |
|                 |                 | current date.   |                 |
|                 |                 | Can be 0 for    |                 |
|                 |                 | current date.   |                 |
+-----------------+-----------------+-----------------+-----------------+
| Financial       | You can create  |                 |                 |
| Institution     | a `bank` data   |                 |                 |
|                 | set and then    |                 |                 |
|                 | link it to the  |                 |                 |
|                 | financial       |                 |                 |
|                 | institution     |                 |                 |
|                 | component with  |                 |                 |
|                 | the constraint  |                 |                 |
|                 | `data_set:      |                 |                 |
|                 | data set name`. |                 |                 |
|                 | This will then  |                 |                 |
|                 | create a drop   |                 |                 |
|                 | list instead of |                 |                 |
|                 | the standard    |                 |                 |
|                 | Free Text field |                 |                 |
+-----------------+-----------------+-----------------+-----------------+
| First Name      | N/A             |                 |                 |
+-----------------+-----------------+-----------------+-----------------+
| Gender          | `other:true`    | Adds \'other\'  |                 |
|                 |                 | as an           |                 |
|                 |                 | additional      |                 |
|                 |                 | gender option   |                 |
+-----------------+-----------------+-----------------+-----------------+
| Gift Aid        | `n              | Adds \'Not a UK | true/false      |
|                 | tp_option:true` | tax payer\' as  |                 |
|                 |                 | an option on    |                 |
|                 | `nt             | the form        |                 |
|                 | p_option:false` |                 |                 |
|                 |                 | Removes \'Not a |                 |
|                 |                 | UK tax payer\'  |                 |
|                 |                 | as an option on |                 |
|                 |                 | the form        |                 |
+-----------------+-----------------+-----------------+-----------------+
| Gifts           | `data           | Attaches a      | Campaign        |
|                 | _set:'dataset'` | Campaign Data   | dataset title   |
|                 |                 | Set as the      |                 |
|                 |                 | answer option   |                 |
|                 |                 | for the Gifts   |                 |
|                 |                 | component       |                 |
+-----------------+-----------------+-----------------+-----------------+
| Gifts           | `one_off_       | Displays the    |                 |
|                 | donation:true'` | default one off |                 |
|                 |                 | donation option |                 |
|                 | `one_off_d      | in the Gifts    |                 |
|                 | onation:false'` | component       |                 |
|                 |                 |                 |                 |
|                 |                 | Hides the       |                 |
|                 |                 | default one off |                 |
|                 |                 | donation option |                 |
|                 |                 | in the Gifts    |                 |
|                 |                 | component       |                 |
+-----------------+-----------------+-----------------+-----------------+
| Have Heard Of   |  N/A            |                 |                 |
+-----------------+-----------------+-----------------+-----------------+
| Home Phone      | [`prefixe       |                 |                 |
|                 | s:02|03|04|07|0 |                 |                 |
|                 | 8`]{.status_tag |                 |                 |
|                 | .active .gray   |                 |                 |
|                 | .c              |                 |                 |
|                 | onstraints_tag} |                 |                 |
+-----------------+-----------------+-----------------+-----------------+
| Home Phone      | `length:'X'`    | Enforces a      | Integer         |
|                 |                 | character limit |                 |
|                 |                 | of \'x\'        |                 |
|                 |                 | characters.     |                 |
|                 |                 | This can also   |                 |
|                 |                 | be used to      |                 |
|                 |                 | enforce a range |                 |
|                 |                 | if the number   |                 |
|                 |                 | isn\'t always a |                 |
|                 |                 | set length i.e. |                 |
|                 |                 | `length         |                 |
|                 |                 | :'10|11|12|13'` |                 |
+-----------------+-----------------+-----------------+-----------------+
| Home Phone      | `inte           | Adds a drop box | true/false      |
|                 | rnational:true` | with country    |                 |
|                 |                 | phone prefixes  |                 |
+-----------------+-----------------+-----------------+-----------------+
| Home Phone      | [`internation   | Restricts the   |                 |
|                 | al_restricted_t | drop list of    |                 |
|                 | o:AT|BE|BG|HR|C | phone prefixes  |                 |
|                 | Y|CZ|DK|EE|FI|F | to certain      |                 |
|                 | R|DE|GR|HU|IE|I | countries       |                 |
|                 | T|LV|LT|LU|MT|N |                 |                 |
|                 | L|NO|PL|PT|RO|S |                 |                 |
|                 | K|SI|ES|SE|CH|G |                 |                 |
|                 | B`]{.status_tag |                 |                 |
|                 | .active .gray   |                 |                 |
|                 | .c              |                 |                 |
|                 | onstraints_tag} |                 |                 |
+-----------------+-----------------+-----------------+-----------------+
| ID Type Sighted | N/A             |                 |                 |
+-----------------+-----------------+-----------------+-----------------+
| Income          | N/A             |                 |                 |
+-----------------+-----------------+-----------------+-----------------+
| Interested In   | `               | Based on the    | Component       |
|                 | interestedin_re | response to the | internal name   |
|                 | stricts:'xxxx'` | Interested In   |                 |
|                 |                 | component,      |                 |
|                 |                 | other           |                 |
|                 |                 | components are  |                 |
|                 |                 | hidden or       |                 |
|                 |                 | displayed       |                 |
+-----------------+-----------------+-----------------+-----------------+
| Interested In   | `interestedin_  | Based on the    | Value of        |
|                 | trigger:'xxxx'` | response to the | component       |
|                 |                 | Interested In   | selection       |
|                 |                 | component,      | option          |
|                 |                 | other           |                 |
|                 |                 | components are  |                 |
|                 |                 | hidden or       |                 |
|                 |                 | displayed       |                 |
+-----------------+-----------------+-----------------+-----------------+
| Interested      | `Child Sponsors | The layout 1    |                 |
| In\`            | hip + Raw Hope` | and 2 and 3 are |                 |
| consent_layout_ |                 | component       |                 |
| 1_trigger:\'Raw |                 | resources and   |                 |
| Hope\',         |                 | you need to     |                 |
| co              |                 | set/edit the    |                 |
| nsent_layout_2_ |                 | layouts, which  |                 |
| trigger:\'Child |                 | are component   |                 |
| Sponsorship     |                 | resources. You  |                 |
|                 |                 | can use any if  |                 |
|                 |                 | you will use it |                 |
|                 |                 | with            |                 |
|                 |                 | `interestedin`  |                 |
|                 |                 | and triggers.   |                 |
|                 |                 | If you will use |                 |
|                 |                 | it as a         |                 |
|                 |                 | standalone      |                 |
|                 |                 | component, you  |                 |
|                 |                 | must provide    |                 |
|                 |                 | the layout_1.   |                 |
|                 |                 | [ht             |                 |
|                 |                 | tps://www.pivot |                 |
|                 |                 | altracker.com/n |                 |
|                 |                 | /projects/35302 |                 |
|                 |                 | 1/stories/15762 |                 |
|                 |                 | 6143](https://w |                 |
|                 |                 | ww.pivotaltrack |                 |
|                 |                 | er.com/n/projec |                 |
|                 |                 | ts/353021/stori |                 |
|                 |                 | es/157626143){r |                 |
|                 |                 | el="nofollow"}. |                 |
|                 |                 | All checkboxes  |                 |
|                 |                 | are opt-ins,    |                 |
|                 |                 | there are no    |                 |
|                 |                 | opt outs.       |                 |
+-----------------+-----------------+-----------------+-----------------+
| Interested In   | `show_with_in   |                 |                 |
|                 | terested_in_eq` |                 |                 |
|                 |                 |                 |                 |
|                 | `hide_with_in   |                 |                 |
|                 | terested_in_eq` |                 |                 |
+-----------------+-----------------+-----------------+-----------------+
| Interested In   | [`label:Sí      |                 |                 |
|                 | quiero colabora |                 |                 |
|                 | r`]{.status_tag |                 |                 |
|                 | .active .gray   |                 |                 |
|                 | .               |                 |                 |
|                 | constraints_tag |                 |                 |
|                 | }[]{.status_tag |                 |                 |
|                 | .active .gray   |                 |                 |
|                 | .c              |                 |                 |
|                 | onstraints_tag} |                 |                 |
+-----------------+-----------------+-----------------+-----------------+
| Last Name       | `               | Last name can   |                 |
|                 | required:false` | be optional if  |                 |
|                 |                 | needed          |                 |
+-----------------+-----------------+-----------------+-----------------+
| Location        | `               | classic input   |                 |
|                 | render_as:text` | field           |                 |
+-----------------+-----------------+-----------------+-----------------+
|                 | `re             | dropdown with   |                 |
|                 | nder_as:dropdow | active          |                 |
|                 | n, data_set:acc | locations in    |                 |
|                 | ount_locations` | account (if     |                 |
|                 |                 | there are no    |                 |
|                 |                 | options to      |                 |
|                 |                 | select, the     |                 |
|                 |                 | component will  |                 |
|                 |                 | be              |                 |
|                 |                 | **optional**)   |                 |
+-----------------+-----------------+-----------------+-----------------+
|                 | `render_as:drop | dropdown with   |                 |
|                 | down, data_set: | team locations  |                 |
|                 | team_locations` | (if there are   |                 |
|                 |                 | no options to   |                 |
|                 |                 | select, the     |                 |
|                 |                 | component will  |                 |
|                 |                 | be              |                 |
|                 |                 | **optional**)   |                 |
+-----------------+-----------------+-----------------+-----------------+
|                 | `rende          | autocomplete    |                 |
|                 | r_as:autosugges | input with      |                 |
|                 | t, data_set:acc | active          |                 |
|                 | ount_locations` | locations in    |                 |
|                 |                 | account (if     |                 |
|                 |                 | there are no    |                 |
|                 |                 | options to      |                 |
|                 |                 | select, the     |                 |
|                 |                 | component will  |                 |
|                 |                 | be              |                 |
|                 |                 | **optional**)   |                 |
+-----------------+-----------------+-----------------+-----------------+
|                 | `re             | autocomplete    |                 |
|                 | nder_as:autosug | input with team |                 |
|                 | gest, data_set: | locations (if   |                 |
|                 | team_locations` | there are no    |                 |
|                 |                 | options to      |                 |
|                 |                 | select, the     |                 |
|                 |                 | component will  |                 |
|                 |                 | be              |                 |
|                 |                 | **optional**)   |                 |
+-----------------+-----------------+-----------------+-----------------+
| Location Type   | N/A             |                 |                 |
+-----------------+-----------------+-----------------+-----------------+
| Mobile Phone    | `length:'X'`    | Enforces a      | Integer         |
|                 |                 | character limit |                 |
|                 |                 | of \'x\'        |                 |
|                 |                 | characters.     |                 |
|                 |                 | This can also   |                 |
|                 |                 | be used to      |                 |
|                 |                 | enforce a range |                 |
|                 |                 | if the number   |                 |
|                 |                 | isn\'t always a |                 |
|                 |                 | set length i.e. |                 |
|                 |                 | `length         |                 |
|                 |                 | :'10|11|12|13'` |                 |
+-----------------+-----------------+-----------------+-----------------+
| Mobile Phone    | `prefixes:''`   |                 |                 |
+-----------------+-----------------+-----------------+-----------------+
| Monthly Amount  | `currency:'X'`  | When you        | String          |
|                 |                 | replace \'x\'   |                 |
|                 |                 | with the        |                 |
|                 |                 | currency symbol |                 |
|                 |                 | for your        |                 |
|                 |                 | currency (\$, £ |                 |
|                 |                 | etc), it will   |                 |
|                 |                 | display that    |                 |
|                 |                 | symbol on the   |                 |
|                 |                 | signature       |                 |
|                 |                 | screen          |                 |
+-----------------+-----------------+-----------------+-----------------+
| Monthly Amount  | `fre            | Removes the     | true/false      |
|                 | e_amount:false` | free text box   |                 |
|                 |                 | from the screen |                 |
|                 |                 | along with any  |                 |
|                 |                 | associated text |                 |
+-----------------+-----------------+-----------------+-----------------+
| Monthly Amount  | `cents:true`    | Changes the     | true/false      |
|                 |                 | \'Other\' box   |                 |
|                 |                 | into two boxes  |                 |
|                 |                 | so the donor    |                 |
|                 |                 | can enter an    |                 |
|                 |                 | amout in        |                 |
|                 |                 | dollars and     |                 |
|                 |                 | cents           |                 |
+-----------------+-----------------+-----------------+-----------------+
| Name on Card    | use_donor       |                 |                 |
|                 | _name:false     |                 |                 |
|                 | use_d           |                 |                 |
|                 | onor_name:true\ |                 |                 |
|                 | max_length:100  |                 |                 |
+-----------------+-----------------+-----------------+-----------------+
| Payment days    | on              |                 |                 |
|                 | <https          |                 |                 |
|                 | ://github.com/w |                 |                 |
|                 | aysact/evergivi |                 |                 |
|                 | ng/issues/6017> |                 |                 |
|                 | the donation    |                 |                 |
|                 | debit dates     |                 |                 |
|                 | config for the  |                 |                 |
|                 | Payment Days    |                 |                 |
|                 | component, was  |                 |                 |
|                 | moved from the  |                 |                 |
|                 | campaign INTO   |                 |                 |
|                 | the component   |                 |                 |
|                 | constraints. A  |                 |                 |
|                 | rake task was   |                 |                 |
|                 | ejecuted to     |                 |                 |
|                 | migrate these   |                 |                 |
|                 | values. To set  |                 |                 |
|                 | the dates on    |                 |                 |
|                 | new forms, just |                 |                 |
|                 | use the         |                 |                 |
|                 | options: 8\|15  |                 |                 |
|                 | constraint. \<- |                 |                 |
|                 | will set the    |                 |                 |
|                 | debit dates to  |                 |                 |
|                 | 8th and 15th.   |                 |                 |
|                 | If no options   |                 |                 |
|                 | is set, it will |                 |                 |
|                 | use the full    |                 |                 |
|                 | month as usual. |                 |                 |
+-----------------+-----------------+-----------------+-----------------+
| Payment Days    | `               | Displays the    | true/false      |
|                 | use_campaign_cs | Payment Day are |                 |
|                 | v_values:false` | represented as  |                 |
|                 |                 | a drop list of  |                 |
|                 |                 | dates in the    |                 |
|                 |                 | month, from     |                 |
|                 |                 | 1st - 28th      |                 |
+-----------------+-----------------+-----------------+-----------------+
| Payment Days    | `or             | Displays the    | true/false      |
|                 | dinalize:false` | Payment Days    |                 |
|                 |                 | from the        |                 |
|                 |                 | campaign setup  |                 |
|                 |                 | as numbers      |                 |
|                 |                 | (false) or as   |                 |
|                 |                 | as 1st, 2nd,    |                 |
|                 |                 | 3rd etc         |                 |
+-----------------+-----------------+-----------------+-----------------+
| Payment Month   | `max_days       | When you        | Integer         |
|                 | _for_payment:X` | replace x with  |                 |
|                 |                 | the maximum     |                 |
|                 |                 | days of         |                 |
|                 |                 | payment, it     |                 |
|                 |                 | will display    |                 |
|                 |                 | that number of  |                 |
|                 |                 | days in months  |                 |
|                 |                 | i.e.            |                 |
|                 |                 | max_da          |                 |
|                 |                 | ys_for_payment: |                 |
|                 |                 | 60 will display |                 |
|                 |                 | the next two    |                 |
|                 |                 | months from the |                 |
|                 |                 | current date    |                 |
+-----------------+-----------------+-----------------+-----------------+
| Payment type    | `options:'x'`   | Adds x, y, z    | `credit`,       |
|                 |                 | options as      | `debit`,        |
|                 |                 | payment types   | `other`,        |
|                 |                 |                 | `wallet` for    |
|                 |                 |                 | Apple Pay,      |
|                 |                 |                 | `rgpsms`,       |
|                 |                 |                 | `paypal`        |
+-----------------+-----------------+-----------------+-----------------+
| Payment type    | `debi           | Only if Direct  | `d              |
|                 | t_components:'c | Debit is        | ebit_components |
|                 | omponent name'` | selected, the   | :'paymentdays'` |
|                 |                 | component/s     | would display   |
|                 |                 | named in the    | the Payment     |
|                 |                 | expression will | Days for donors |
|                 |                 | be shown.       | paying by       |
|                 |                 |                 | direct debit    |
|                 |                 |                 | only            |
+-----------------+-----------------+-----------------+-----------------+
| Payment type    | `othe           | `o              | Component       |
|                 | r_components:'c | ptions:'other'` | internal name   |
|                 | omponent name'` | must be         |                 |
|                 |                 | enabled. Only   |                 |
|                 |                 | if Other is     |                 |
|                 |                 | selected, the   |                 |
|                 |                 | component/s     |                 |
|                 |                 | named in the    |                 |
|                 |                 | expression will |                 |
|                 |                 | be shown.       |                 |
+-----------------+-----------------+-----------------+-----------------+
| Payment type    | `default:credit | Allows you to   |                 |
|                 | `{.notranslate} | set a default   |                 |
|                 |                 | Payment Type -  |                 |
|                 |                 | credit, debit,  |                 |
|                 |                 | wallet etc      |                 |
+-----------------+-----------------+-----------------+-----------------+
| Paypal          |                 | Used when       |                 |
|                 |                 | Paypal is a     |                 |
|                 |                 | payment option  |                 |
|                 |                 | [h              |                 |
|                 |                 | ttps://waysact. |                 |
|                 |                 | zendesk.com/kno |                 |
|                 |                 | wledge/articles |                 |
|                 |                 | /4409413220879/ |                 |
|                 |                 | en-us?brand_id= |                 |
|                 |                 | 230874&return_t |                 |
|                 |                 | o=%2Fhc%2Fen-us |                 |
|                 |                 | %2Farticles%2F4 |                 |
|                 |                 | 409413220879](h |                 |
|                 |                 | ttps://support. |                 |
|                 |                 | waysact.com/kno |                 |
|                 |                 | wledge/articles |                 |
|                 |                 | /4409413220879) |                 |
+-----------------+-----------------+-----------------+-----------------+
| Personal        | `allo           | In Spain, there |                 |
| Identification  | w_tax_id:false` | are three types |                 |
| Number          |                 | of ID:DNI       |                 |
|                 |                 | (Documento      |                 |
|                 |                 | Nacional de     |                 |
|                 |                 | Identidad):     |                 |
|                 |                 | This is the ID  |                 |
|                 |                 | number for      |                 |
|                 |                 | Spanish         |                 |
|                 |                 | citizens, NIE   |                 |
|                 |                 | (Número de      |                 |
|                 |                 | Identidad de    |                 |
|                 |                 | Extranjero):    |                 |
|                 |                 | This is the ID  |                 |
|                 |                 | number for      |                 |
|                 |                 | Foreigners      |                 |
|                 |                 | living in Spain |                 |
|                 |                 | and CIF         |                 |
|                 |                 | (Certificado de |                 |
|                 |                 | Identificación  |                 |
|                 |                 | Fiscal): This   |                 |
|                 |                 | is the tax ID   |                 |
|                 |                 | number for all  |                 |
|                 |                 | companies. This |                 |
|                 |                 | locale will     |                 |
|                 |                 | reject CIF in   |                 |
|                 |                 | the es-ES       |                 |
|                 |                 | locale.         |                 |
+-----------------+-----------------+-----------------+-----------------+
| Personal        | `masked:true`   | This will mask  |                 |
| Identification  |  `masked:false` | the PIN on the  |                 |
| Number          |                 | form but not on |                 |
|                 |                 | the signature   |                 |
|                 |                 | page or edit    |                 |
|                 |                 | pledge view     |                 |
+-----------------+-----------------+-----------------+-----------------+
| Place of Birth  | N/A             |                 |                 |
+-----------------+-----------------+-----------------+-----------------+
| Preferred Phone | N/A             |                 |                 |
+-----------------+-----------------+-----------------+-----------------+
| Prefers Email   | N/A             |                 |                 |
| Updates         |                 |                 |                 |
+-----------------+-----------------+-----------------+-----------------+
| Profession      | N/A             |                 |                 |
+-----------------+-----------------+-----------------+-----------------+
| Receive         | N/A             |                 |                 |
| Communications  |                 |                 |                 |
+-----------------+-----------------+-----------------+-----------------+
| Restrict        | `re             | Hides the x     | Component       |
| Component       | stricts:'xxxx'` | components      | internal name   |
| Visibility      |                 |                 |                 |
+-----------------+-----------------+-----------------+-----------------+
| Restrict        | `re             | Sets the        | Component       |
| Component       | quired_if_inter | component as    | selection       |
| Visibility      | estedin:'xxxx'` | required based  | option value    |
|                 |                 | on the response |                 |
|                 |                 | to another      |                 |
|                 |                 | question        |                 |
+-----------------+-----------------+-----------------+-----------------+
| Secondary       | Multiple        | See `Address`   |                 |
| Address         |                 |                 |                 |
+-----------------+-----------------+-----------------+-----------------+
| Secondary       | `               | The required    | Integer         |
| Person Details  | required_age:X` | minimum age is  |                 |
|                 |                 | set to the      |                 |
|                 |                 | value you       |                 |
|                 |                 | replace x with  |                 |
|                 |                 | (it can be set  |                 |
|                 |                 | to 0)           |                 |
+-----------------+-----------------+-----------------+-----------------+
| Share Details   | N/A             |                 |                 |
+-----------------+-----------------+-----------------+-----------------+
| Shopping Centre | `editable:true` | Displays a free | true/false      |
|                 |                 | text box for    |                 |
|                 |                 | shopping centre |                 |
+-----------------+-----------------+-----------------+-----------------+
| Terms &         | N/A             |                 |                 |
| Conditions      |                 |                 |                 |
+-----------------+-----------------+-----------------+-----------------+
| Tertiary        | Multiple        | See `Address`   |                 |
| Address         |                 |                 |                 |
+-----------------+-----------------+-----------------+-----------------+
| Tertiary Person | `               | The required    | Integer         |
| Details         | required_age:X` | minimum age is  |                 |
|                 |                 | set to the      |                 |
|                 |                 | value you       |                 |
|                 |                 | replace x with  |                 |
|                 |                 | (it can be set  |                 |
|                 |                 | to 0)           |                 |
+-----------------+-----------------+-----------------+-----------------+
| Tied Funding    | N/A             |                 |                 |
+-----------------+-----------------+-----------------+-----------------+
| Title           | N/A             |                 |                 |
+-----------------+-----------------+-----------------+-----------------+
| Transaction     | N/A             |                 |                 |
| Type            |                 |                 |                 |
+-----------------+-----------------+-----------------+-----------------+
| Work phone      | `length:'X'`    | Enforces a      | Integer         |
|                 |                 | character limit |                 |
|                 |                 | of \'x\'        |                 |
|                 |                 | characters.     |                 |
|                 |                 | This can also   |                 |
|                 |                 | be used to      |                 |
|                 |                 | enforce a range |                 |
|                 |                 | if the number   |                 |
|                 |                 | isn\'t always a |                 |
|                 |                 | set length i.e. |                 |
|                 |                 | `length         |                 |
|                 |                 | :'10|11|12|13'` |                 |
+-----------------+-----------------+-----------------+-----------------+

 

 

 

 
