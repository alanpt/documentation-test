# Team Locations

**Location Settings**

Settings can be made mandatory or optional by adding a minimum required
on the Team Settings page, found under the Account menu.

 

**Adding new locations**

Team locations are added individually in the Account section under the
Team Settings page or by import under the Import section on the
Locations page.

The import format is as follows, with example allowed data:

Name,Status,Latitude,Longitude,Data\
Berlin Ostkreuz,Active,52.505535,13.469398,\
Berlin Alexanderplatz,,,,\
Berlin Ostbahnhof,Inactive,52.51031,13.434692,\
Berlin Brandenburger Tor,Inactive,52.5162595,13.377754,\
Berlin Postdamerplatz,,,,\"\[{\"\"key\"\":\"\"Site Type\"\",
\"\"value\"\":\"\"Woolworths\"\"}\]\"

Note - the required format for importing key/value is 
`"[{""key"":"xyz"", ""value"":""xyz""}]"`

If the status is left blank, the location imports as an Active location.

 

**Using locations**

Locations are added when creating a team and then every pledge this team
takes will have these locations assigned to them.

You can also use the locations component - see enhancements here
https://github.com/waysact/evergiving/issues/5883
