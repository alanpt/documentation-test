# User Management

User management for users above Fundraiser and Campaign Managers is all
done through Evergiving now. The Users page has been removed from
Waysact.

All users should have their own unique login. There are many reasons for
this \-- firstly it is a PCI DSS requirement, secondly it is best
practice for data security and thirdly, if there is an issue with the
login (for example, someone has entered an incorrect password and locked
the account) all users who rely on that login will be locked out. Having
unique logins also creates a clear audit trail for changes that have
been made to pledges and accounts in Evergiving.

Users with access to donor data (Pledges Tab) passwords must be:\
 - a minimum of seven characters in length;\
- contain both numeric and alphabetic characters;\
- be changed every 90 days; and\
- cannot be the same as previous 4 passwords.

Otherwise passwords must be a minimum of six characters.

We would also strongly recommend you to incorporate the following
requirements into your user account management procedures (if you\'re in
scope for PCI these are 8.1.1, 8.1.2 and 8.1.3 respectively):\
- All users should be assigned a unique login (no sharing)\
- You should have some control or policies concerning addition,
deletion, and modification of users\
- You should immediately revoke access for any terminated users\
- If you believe your password to be compromised you should reset your
password immediately.

### **Fundraiser users**

Fundraiser users have a simplified view on login where they see their
personal Dashboard and statistics, and they can also access the
fundraising form to recruit new donors. Fundraisers are created in the
Field section on the Fundraiser page and must always be restricted to an
office.

### **Campaign Manager users**

Campaign Manager users are frontline managers responsible for a number
of teams and are created in the Field section on the Campaign Manager
page. They can also be a Fundraiser user (this is the only dual role
available) and with the one login they can move between roles. Campaign
Managers are always assigned to an Office, and only have visibility of
data attributed to that Office. Where a Campaign Manager is assigned to
a team, the team inherits the Campaign Manager\'s Office.

The results from teams that are set up under a Campaign Manager user are
automatically aggregated and recorded against their statistics. The
Campaign Manager has access to the Admin \'Dashboard\', with powerful
reporting facilities, as well as the Field and Territories sections.
This allows them to manage the parts of the fundraising operation they
have control over. Campaign Managers can be restricted to only have
access to data that is attributable to them via a setting on the Account
Overview page \"Force Campaign Managers to see only data attributed to
them\". Another account option currently only in Waysact is to allow
Campaign Managers access to the Pledges page (by default they have no
access). Each Campaign Manager user can be further restricted in their
profile to not allow editing of pledges.

### **All other users **

All other users are created on the Users page under the Account menu. On
first load, the page will default to only displaying the Admin
Operations users with a overview table of their permissions. Clicking
the
![Screen_Shot_2021-08-16_at_3.05.38_pm.png](https://support.waysact.com/hc/article_attachments/4405120960655/Screen_Shot_2021-08-16_at_3.05.38_pm.png){width="32"
height="28"} icon will change the view and display all Admin, Manager,
Admin Operations users in a list view.

**Admin** users have full access to everything, although in Evergiving
now Admins can\'t access the Dashboards or Call Centre. In Waysact, they
won\'t be able to access the Manage Children section.

**Manager** users have the same level of access as the Admin user except
for the following features they can\'t delete pledges or create Admin or
Admin Operations users. In Evergiving they may see many of the pages in
the Account section (GPG Keys, SFTP Connections etc) but only on a read
only basis and often they don\'t see the data when it exists for other
users. For this reason, Manager users who only are accessing Evergiving
are best changed to Admin Operations users. Manager users can be
restricted to an Office and/or a Campaign and they can also be
restricted from either Exporting or from Exporting and Editing Pledges.

**Admin Operations** users offer granular permissions to the various
sections in Evergiving and for each section you can either deny access,
grant read only access or grant read and write access. There are some
implied permissions that aren\'t currently obvious in the UI, like Field
and Campaign access needed in order to edit pledges. Admin Operations
users can be restricted to an Office and/or a Campaign and also there
are filters to restrict the (a) read only access to pledges and (b) read
and write access to pledges. Through
<https://github.com/waysact/evergiving/issues/7221> if you give a user
read only access to Dashboards, you can select the Dashboard/s to give
them access to.\
Eventually, all users will be automatically upgraded to Admin Operations
users through <https://github.com/waysact/evergiving/issues/5080>. We
have multiple open  issues to upgrade/change the Admin Operations users
referenced on this issue
<https://github.com/waysact/evergiving/issues/6011> and there is also an
UI permissions upgrade via
<https://github.com/waysact/evergiving/issues/4432>.

The Retire button for Admin Operations users has been changed to retire
and not delete like it originally did.
