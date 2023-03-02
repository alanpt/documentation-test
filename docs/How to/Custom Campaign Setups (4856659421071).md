# Custom Campaign Setups

# **RSL Australia**

**Direct Sales** use dataset *RSL Starting art union numbers* for custom
1

*Campaign    /    Pledge ID prefix for email*\
RSL Shopping Centre (Community Collective Group) - C\
RSL Shopping Centre (AIDA Evergiving) - A\
RSL Shopping Centre (GIG) - G\
RSL Shopping Centre (Ponder & Partners) - P

* This is their F2F channel email version is email without notice to
consumer*

**Reactivations** use dataset *RSL Starting art union numbers
Reactivations* for custom 1

*Campaign    /    Pledge ID prefix for email*\
RSL OBT Reactivations (Sector 3) - SR\
RSL Call Centre Reactivation (GIG) - GR\
RSL OBT (Community Collective Group) - CR

*\* This is their Reactivation channel email version is email without
notice to consumer*

**OBT** - there are 2 type of OBT leads, Warm and Cold. CCG and GIG use
the same campaign with a lead type selection managed by custom field 4.

Vendor Leads uses data *RSL Starting art union numbers OBT Vender* for
custom 1

*Campaign    /    Pledge ID prefix for email*\
RSL OBT Vendor (Community Collective Group) - CV\
RSL Call Centre Cold Call (GIG) - GV\
RSL OBT Vendor (Sector 3) - SV

*\* This is their Cold list (list from agencies I assume) channel. The
email version is email with notice to consumer*

**RSL Warm Leads** uses data *RSL Starting art union numbers* for custom
5

*Campaign    /    Pledge ID prefix for email*\
RSL OBT (Sector 3) - SW\
RSL OBT Vendor (Community Collective Group) - CW\
RSL Call Centre Cold Call (GIG) - GW

*\* This is their warm list (list from RSL acquired leads from other
channel I assume) channel email version is email without notice to
consumer*

**RSL Residential** are no longer active. This wa[s their D2D channel
email version is email with notice to
consumer]{style="color: #1d1c1d; font-family: Slack-Lato, Slack-Fractions, appleLogo, sans-serif; font-size: 15px; font-style: normal; font-variant-ligatures: common-ligatures; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: left; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: #f8f8f8; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; display: inline !important; float: none;"}

 

# SLSF Australia

  ---------------------------------------------------------------------- ------------- -------------------------------
  **Campaign name**                                                      **Lottery**   **Schemas require updates**
  ADFLEX (SLSF)                                                          Form          N/A - selected on form 
  SLSF project team (SLSF)                                               Form          N/A - selected on form 
  SLSF Surf Clubs Singles Campaign (SLSF)                                Script        3489, 5566, 8891, 8935
  PrizeHomeEven_Surf Life Saving Foundation Singles & Champions (SLSF)   Script        4282, 7825, 8891, 8930
  PrizeHomeOdd_Surf Life Saving Foundation Singles & Champions (SLSF)    Script        4282, 7252, 8891, 8935, 10544
  BOLS/BOSS L186 (SLSF)                                                  Not in use    N/A
  MJ & KM DODDS (SLSF)                                                   Not in use    N/A
  CCC Surf Life Saving Foundation -- Single (SLSF)                       Not in use    N/A
  BolsBoss_Surf Life Saving Foundation Single (SLSF)                     Not in use    N/A
  PFS Marketing SLSF (SLSF)                                              Not in use    N/A
  SLSF Pre Sell Ticket (SLSF)                                            Not in use    N/A
  Surf Life Saving Foundation Lotteries (SLSF)                           Not in use    N/A
  Surf Life Saving Foundation Single (SLSF)                              Not in use    N/A
  SLSF Project Singles Campaign (SLSF)                                   Not in use    N/A
  ---------------------------------------------------------------------- ------------- -------------------------------

 

# **DOBO (predominately used in Asia)**

**Mandatory fields**\
Secondary Person details\
Secondary Address\
Relationship\
DOBO type (for Salesworks and any campaign process by SG)

**Ensure following campaign settings are enabled:**\
- Add another pledge\
- Copy Personal Details\
- Copy Contact Details\
- Copy Payment Details

**There are 2 DOBO options during sign up**\
*Option 1: Donor*\
Note: Customer in Asia rename DONATION_ON_BEHALF_OF_DONOR_OPTION from\
Donor to 1+)

Donor signs up 2 or more pledges where one pledges is donating in the
donors' own name\
and the subsequent pledge/s on behalf of family/friends.

*Option 2: Payee*\
Note: Customer in Asia rename DONATION_ON_BEHALF_OF_PAYEE_OPTION from\
Payee to 0+)

Donor signs up 1 or more pledge/s where all pledges are donating on
behalf of family/friends.

**Completing the form:**\
Enter donor personal information, contact information, payment
information.

For Option 1, Donation on Behalf Of field leave blank, submit the pledge
click on Add\
Another (might be renamed to Add DOBO) to start a new form for DOBO.\
On the new form the donor personal, contact and payment details would be
copied over from\
the previous form.

Donation on Behalf Of field will have Donor (1+) preselected, and the
DOBO fields are\
visible. Enter DOBO name, address, relation and DOBO type\*

Submit pledge, click on Add Another for more DOBO signups or click on
Start Again for a\
new Donor.

For Option 2, Donation on Behalf Of field leave select Payee (0+) to
bring up DOBO fields.\
Enter DOBO name, address, relationship and DOBO type\*

Submit pledge, click on Add Another for more DOBO signups or click on
Start Again for a\
new Donor.

Additional DOBO signups will bring up a new form with donor personal,
contact and\
payment details would be copied over from the previous form.

Donation on Behalf Of field will have Payee (0+) preselected, and the
DOBO fields are\
visible. Enter DOBO name, address, relation and DOBO type\*

Submit pledge, click on Add Another for more DOBO signups or click on
Start Again for a\
new Donor.

\*DOBO type -- is a field for Salesworks and SG only. This is a
reference for their database on\
the number of Signup/s the donor makes. The options are 0+n, 1+n, X+n
where n is number\
of DOBO pledges. For example\
0+1 is where the donor makes a single DOBO pledge only\
0+2 is where donor makes a 2 DOBO donations\
1+1 is where donor donates 2 pledges with 1 pledge in the donors' name
and another DOBO\
pledge.\
1+2 is where donor donates 3 pledges with 1 pledge in the donors' name
and another 2\
DOBO pledge.\
X+1 is where the donor is an existing donor on the charities database
and is making 1 DOBO\
pledge only

DOBO pledges are linked together with the Donation on Behalf of Pledge,
it is the pledge ID\
of the first form completed. The ID is available in the Evergiving
pledge edit screen and for\
export. This field is locked and cannot be edit, if the pledge was
marked incorrectly as DOBO\
during sign-up as a workaround if the back office will update DOBO type
to No.

Note: There are no validation on the DOBO Type field to the number of
pledges signed up,\
fundraiser sometime incorrect select incorrect DOBO type and office
admin will correct\
under pledge edit screen.

 

# **UNICEF Columbia\'s Salesforce Check**

This is a check for existing customers while fundraisers are out of the
field - it was a paid custom build and one we advised against 
<https://github.com/waysact/evergiving/issues/8152>
