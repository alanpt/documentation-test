# Getting started

A new customer has several things they need to set up or customise for
their account:

1\. Create all users needed for their campaigns: (Field -\> Fundraiser,
Field -\> Campaign Manager, Call Centre -\> Agent, Account -\> Users for
Admin, Admin Operations etc).

2\. Create team default settings (Account -\> Team Settings).

3\. Create Final Call Outcomes if they are making calls through
Evergiving (Account -\> Final Call Outcomes).

4\. Create Dashboards (Dashboard).

5\. Create Validation Outcomes (Donors -\> Validation Outcomes).

6\. Create Cancellation Outcomes & Categories (Account -\> Cancellation
Outcomes, Account -\> Cancellation Categories).

 

**Creating Administrator users**

We recommend this as the first step in configuring your account. Log in
as the Administrator user, using the credentials provided to you by
Evergiving, navigate to the Account section and on the Users page, click
\'Add User\'.

For new customers we recommend they only use Admin Operations users, and
there is an option in the account setup to only allow this type of user.
For customers who have previously used Waysact, they prefer Admin users
as that role works in both sites, although we should discourage this.

To create an Admin Operations User, fill in the required information,
making sure all of the fields marked with an asterisk are completed. At
the bottom section of the page, there are drop lists of permissions for
the various sections in Evergiving that have three options: Disallowed,
Allow Read-Only, Allow Viewing and Editing. We have an upgrade to
simplify the setup <https://github.com/waysact/evergiving/issues/4432>
but until then there are some restrictions such as users needing access
to \'Campaigns\' and \'Field\' if they are viewing / editing pledges or
needing read only access to Exports in order to export data from the
pledges page.

 

**Creating Fundraiser users**

Next create your Fundraiser users. Navigate to the Fundraisers tab under
the \"Field\" section and click on \'Add a Fundraiser\'. Enter all the
required information, making sure all of the mandatory fields marked
with an asterisk are completed. Note - the name entered will appear on
the signature screen of the fundraiser form, the email will be used for
password reset and the password only needs to be 6 characters long. Each
fundraiser must have an office they are assigned to. 

 

**Create your team settings\
**

Under Account on the Team Settings page, you can create (and set the
minimum / maximum number required for team creation) of Methods of
Fundraising and Locations.

 

**Create a team to test the fundraiser form**

There is a way to access the form from within manage.evergiving.com -
head to Campaigns, hover over the campaign name and choose \"F2F
(offline) Form\". Log in using any credentials and you can view the
form. If you take a pledge via this method, it will create the pledge
but it won\'t be visible in the customer\'s account. [If It you can find
the pledge ID in logs you can type it into the URL, edit and reassign to
a different fundraiser to make it
visible]{style="color: #1d1c1d; font-family: Slack-Lato, appleLogo, sans-serif; font-size: 15px; font-style: normal; font-variant-ligatures: common-ligatures; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: left; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: #f8f8f8; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; display: inline !important; float: none;"},
but if you are wanting a Pledge in the account to test the exports or
something similar, it will be easier to log in as a Fundraiser :

Before a Fundraiser is able to access a campaign form, you must first
allocate them to a Team.\
Go to Teams in the Field section and select \'Add Team\'. From the drop
down list, select the Campaign you want to allocate the team to.\
Select a Campaign manager and click on \'Add a new Team Member\' and
select a fundraiser to add them to the team.

Some points to note:

-   The first Fundraiser you add will be nominated as the Team Leader.
    You can change this by clicking Team Leader on the Fundraiser who
    you want to be the team Leader. This will transfer the Team Leader
    to the other Fundraiser.
-   Under each Fundraiser you add to the team, you\'ll see the default
    hours for that account. When you add a Fundraiser to a team we
    automatically record the default hours for that Fundraiser. This can
    be updated on a Fundraiser by Fundraiser basis when creating the
    team or after the fact in the Timesheets section.
-   If the \'Enable teams schedule\' has been set at an account level at
    waysact.me/admin/accounts then the user will see a calendar when
    creating a team and can select all the days this exact team should
    be active on. So you can create teams in advance. If this feature
    isn\'t enabled in the account, the user will see today\'s date and
    can only create teams for the current day. Teams automatically
    expire after midnight.
-   Don\'t forget to check the timezone - this defaults to the account
    timezone but can be updated on a team by team basis.
-   Interaction Category is only needed if the customer is using
    Interactions through the Track n Snap app.
-   There are many different layers of permissions involved in setting
    up a team. Keep in mind, each team can only be assigned to one
    office. Firstly, Campaigns can be restricted to specific Offices or
    Campaign Managers in Campaigns -\> General Settings. So when you
    select the Campaign in the Team setup page, the Campaign Managers
    and Fundraisers shown are only those that have permission to work on
    the Campaign. Then when you select a Campaign Manager in the Teams
    setup page, that then restricts the Fundraisers shown as Fundraisers
    can be restricted in their profiles to only be accessed by a
    specific Campaign Manager and only Fundraisers in the same office as
    the Campaign Manager will be able to be assigned to the team.

**Create a test pledge\
**

Once you\'ve logged in as a Fundraiser you will see the Fundraiser\'s
Dashboard. Click on the green \'Form\' button and you will be able to
view the campaign form. Complete the form and submit a test pledge
looking carefully at the wording to ensure you are happy with it, as
well as testing the validation to make sure all the questions have the
correct validation (mandatory, optional etc). Once the pledge is
submitted, you will receive the welcome email, and depending on the
campaign configuration, the SMS.

 
