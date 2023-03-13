# Account setup options

+-----------------------------------+-----------------------------------+
| Note, through                     |                                   |
| <https://github.co                |                                   |
| m/waysact/evergiving/issues/8030> |                                   |
| we have launch darkly where we    |                                   |
| can feature flag some changes for |                                   |
| specific accounts                 |                                   |
|                                   |                                   |
|                                   |                                   |
+-----------------------------------+-----------------------------------+
| Name\*                            | Account name                      |
+-----------------------------------+-----------------------------------+
| Domain\*                          | Whatever domain is entered here   |
|                                   | controls the ending of the        |
|                                   | usernames for this account (e.g.  |
|                                   | \@evergiving.app).                |
+-----------------------------------+-----------------------------------+
| Mothership                        | n/a - depreciated feature. Leave  |
|                                   | blank.                            |
+-----------------------------------+-----------------------------------+
| Low Security Email                | Mostly depreciated. Emails        |
|                                   | entered here will be sent the old |
|                                   | hard coded low security exports.  |
+-----------------------------------+-----------------------------------+
| Ui locale\*                       | Language for the account UI       |
+-----------------------------------+-----------------------------------+
| Default Timezone\*                | This TZ is used as the default    |
|                                   | for the users in this account.    |
|                                   | This can be overriden with the    |
|                                   | team specific timezones.          |
+-----------------------------------+-----------------------------------+
| SMS From                          | Always use: EVERGIVING            |
+-----------------------------------+-----------------------------------+
| Hours to work                     | This is used as the default hours |
|                                   | to work for the fundraisers in    |
|                                   | this account when they are added  |
|                                   | to a team. This can be adjusted   |
|                                   | at a team level each day if       |
|                                   | needed.                           |
+-----------------------------------+-----------------------------------+
| Enable achievements               | Add Achievements to the           |
|                                   | Fundraiser Dashboard options.     |
+-----------------------------------+-----------------------------------+
| Enable all campaigns in single    | Allows all campaigns to be        |
| export                            | exported in the one export        |
|                                   | template. Negates having to add   |
|                                   | the \"Campaign\" filter before    |
|                                   | exporting.                        |
+-----------------------------------+-----------------------------------+
| Enable automatic export trigger   | When this is turned on a button   |
|                                   | appears on the pledges page to    |
|                                   | apply a flag to all of the        |
|                                   | pledges in the current filter set |
|                                   | that can be queryed in the AR     |
|                                   | query.                            |
+-----------------------------------+-----------------------------------+
| Enable fundraiser call back       | Adds the Call Back feature to     |
| feature                           | Fundraiser\'s Dashboard           |
+-----------------------------------+-----------------------------------+
| Disable fundraiser dashboard      |                                   |
| stats breakdown.                  |                                   |
+-----------------------------------+-----------------------------------+
| Disable Last Three Donors         | Will add \'Disabled\' where the   |
| Fundraiser Dashboard              | Last 3 Donors used to be          |
+-----------------------------------+-----------------------------------+
| Disable logs                      |                                   |
+-----------------------------------+-----------------------------------+
| Disable system activity           |                                   |
+-----------------------------------+-----------------------------------+
| Disable checking features on      | This will disable the check for   |
| device                            | feature functionality like the    |
|                                   | Un-Sent cache                     |
+-----------------------------------+-----------------------------------+
| Capture Geolocation (new feature  | We now have 3 options: \"Never\"  |
| replacing the original Disable    | will not capture geolocation in   |
| geolocation check on device - we  | device. \"Always\" will not allow |
| raked accounts that had           | to open form until enabled in     |
| disable_checking_geo to optional  | device. \"Optional\" will leave   |
| & the rest were set to always.    | it to the fundraiser to           |
| Never is the new option we        | enable/disable the geolocation    |
| introduced)                       | service.                          |
+-----------------------------------+-----------------------------------+
| Disable submit timeout            | This will disable the 30 seconds  |
|                                   | timeout for a response from       |
|                                   | server during pledge submit       |
+-----------------------------------+-----------------------------------+
| Disable Ireland autoaddress       |                                   |
+-----------------------------------+-----------------------------------+
| Disable Swap Fundraiser Feature   | Removes the option from the       |
|                                   | fundraiser dashboard to swap the  |
|                                   | fundraiser logged in with another |
|                                   | fundraiser in their team          |
+-----------------------------------+-----------------------------------+
| Force new users to have admin     |                                   |
| operations role (or fundraiser or |                                   |
| campaign manager)                 |                                   |
+-----------------------------------+-----------------------------------+
| Restrict campaign manager         | This will force Campaign Managers |
|                                   | to see only data attributed to    |
|                                   | them                              |
+-----------------------------------+-----------------------------------+
| Add pledges tab to campaign       | This will allow Campaign Managers |
| manager role                      | to see/edit/update pledges.       |
|                                   | Please make sure to check         |
|                                   | \"Restrict Campaign Manager\" to  |
|                                   | limit access only to the pledges  |
|                                   | attributed to them.               |
+-----------------------------------+-----------------------------------+
| Cleanse pledge addresses          | This will only apply to pledges   |
|                                   | with the \"en-GB\" and \"cy-GB\"  |
|                                   | locale                            |
+-----------------------------------+-----------------------------------+
| Hide campaign stats to campaign   | This will hide campaign           |
| managers                          | statistics to managers            |
+-----------------------------------+-----------------------------------+
| Hide last name in fundraiser logs | Hides the donor\'s last name in   |
|                                   | the Logs and Log Book             |
+-----------------------------------+-----------------------------------+
| Display donor age in fundraiser   |                                   |
| logs                              |                                   |
+-----------------------------------+-----------------------------------+
| Offline storage / Primary Offline | \- iOS13 and above should use     |
| Storage to be used in Capture     | IndexDB.\                         |
| Device                            | - Accounts running on old iOS     |
|                                   | should be websql\                 |
|                                   | - localforage is a new offline    |
|                                   | storage option and Unsent         |
|                                   | Dashboard Refresh option released |
|                                   | here                              |
|                                   | https://github.c                  |
|                                   | om/waysact/evergiving/issues/7888 |
|                                   | that can be used. Note with that  |
|                                   | option manual sending of unsent   |
|                                   | pledges is necessary.             |
+-----------------------------------+-----------------------------------+
| Enable approve pending feature    | This will Show the Approve        |
|                                   | Pending button on Pledges/Donors  |
|                                   | page                              |
+-----------------------------------+-----------------------------------+
| Reporting week creation logic     | Based on pledge creation date,    |
| xx/xx/xxxx                        | each pledge gets assigned a       |
|                                   | reporting week. Many customers    |
| is the first day of week 2        | have a different day of the week  |
| +Add/update                       | they start their weeks on and may |
|                                   | calculate the first week of the   |
|                                   | year differently as it may be a   |
|                                   | half week or an oversized week.   |
|                                   | So the easiest question to ask    |
|                                   | is, \'what is the first day of    |
|                                   | the second week in your reporting |
|                                   | weeks for this year\' then input  |
|                                   | that date and click               |
|                                   | `+Add/update`, and you will see   |
|                                   | the reporting week added to the   |
|                                   | record.                           |
|                                   |                                   |
|                                   | **Any change to the reporting     |
|                                   | weeks is a global change to their |
|                                   | account - so any reporting weeks  |
|                                   | that have been adjusted manually  |
|                                   | in pledges will be overwritten    |
|                                   | and we are unable to amend or     |
|                                   | revert back to the previous       |
|                                   | reporting week.**                 |
+-----------------------------------+-----------------------------------+
| Allow 53 weeks                    | Allows a 53rd reporting week      |
+-----------------------------------+-----------------------------------+
| Cancellation timeframe            |                                   |
+-----------------------------------+-----------------------------------+
| Label for the alien status        |                                   |
+-----------------------------------+-----------------------------------+
| Mandatory Team Label              |                                   |
+-----------------------------------+-----------------------------------+
| Respawn teams                     |                                   |
+-----------------------------------+-----------------------------------+
| Enable teams schedule             |                                   |
+-----------------------------------+-----------------------------------+
| Performance measurement unit      |                                   |
+-----------------------------------+-----------------------------------+
| Currency                          |                                   |
+-----------------------------------+-----------------------------------+
| Notes                             |                                   |
+-----------------------------------+-----------------------------------+
| Enable user code validation       | It will be applied to Fundraisers |
|                                   | and Campaign Managers, make sure  |
|                                   | you provide a regular expression. |
+-----------------------------------+-----------------------------------+
| Account Address                   | Address line 1\                   |
|                                   | Address line 2\                   |
|                                   | City\                             |
|                                   | State\                            |
|                                   | Zip code\                         |
|                                   | Country                           |
+-----------------------------------+-----------------------------------+
| Administrator                     | First name\*\                     |
|                                   | Last name\*\                      |
|                                   | Phone\*\                          |
|                                   | Email\*\                          |
|                                   | Password\* (At least 7            |
|                                   | characters, must contain both     |
|                                   | letters and numbers)              |
+-----------------------------------+-----------------------------------+
| Username\*                        | The username will be appended     |
|                                   | with the Client domain. This is   |
|                                   | used for login                    |
+-----------------------------------+-----------------------------------+
| Team Log SFTP Export Settings     | Enable sftp export\               |
|                                   | Sftp host\                        |
|                                   | Sftp port\                        |
|                                   | Sftp username\                    |
|                                   | Sftp password\                    |
|                                   | Sftp path                         |
|                                   |                                   |
|                                   | The path to the folder you wish   |
|                                   | to upload to, relative to your    |
|                                   | login root e.g.                   |
|                                   | \"exports/folder/subfolder\"      |
+-----------------------------------+-----------------------------------+
| Team Settings                     | Require campaign manager\         |
|                                   | Min num locations\                |
|                                   | Max num locations\                |
|                                   | Min num events\                   |
|                                   | Max num events                    |
+-----------------------------------+-----------------------------------+
| Invoicing Settings                | Monthly Invoicing\                |
|                                   | AR Condition\*\                   |
|                                   | Invoicing Currency\*\             |
|                                   | Monthly Credit Price\*            |
+-----------------------------------+-----------------------------------+
|                                   |                                   |
+-----------------------------------+-----------------------------------+
|                                   |                                   |
+-----------------------------------+-----------------------------------+
