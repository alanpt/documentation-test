# Timesheet exports

::: {.row ._2ojKlEpy4bByUcwUWCiSv4 __source="[object Object]"}
::: {__source="[object Object]"}
::: {.col-sm-offset-4 .col-sm-8 ._13w1MP-uIJKo9Qi1XpmDLF ._1xQZiw0ZqRuGBdYsLV3_Jt __source="[object Object]"}
::: {._12dIHZzXxXY2YaY5DLKIcD __source="[object Object]"}
A record of the day\'s activity per person will be sent to the database
when the day\'s corresponding timesheet is locked. Locking can happen
manually on the Timesheets page or automatically where configured on the
Account overview page. Changing a filter, or a column on the schema,
will force a complete reload of the database.
:::

::: {._12dIHZzXxXY2YaY5DLKIcD __source="[object Object]"}
:::
:::
:::
:::

Now we have both Agent and Fundraiser timesheets, there is a Fundraising
domain filter available on the Timesheet exports to segment Face to Face
users from Call Centre users. Other filters for flat file timesheet
exports are :

-   External Reference Number
-   Fundraising Domain
-   Has worked on a team in exported date range
-   Status
-   Campaign Manager (Fundraiser)
-   Campaign Manager (Team)

(Note, not all the above filters work on Timesheet EBICs - only the date
filter is active there).

**Further sources will be available through
<https://github.com/waysact/evergiving/issues/7153>**

 

### Link for JS sources:

[For
fundraisers](https://github.com/waysact/support-documentation/blob/master/internal/exports/sources_JS_fundraiser.md)

[For
pledges1](https://github.com/waysact/support-documentation/blob/master/internal/exports/exporter_schemas/sources.md)
and [For
pledges2](https://github.com/waysact/support-documentation/blob/master/internal/exports/exporter_schemas/sources.md)

[For
EBIC](https://github.com/waysact/support-documentation/tree/master/internal/exports/EBIC)

JS for Fundraiser exports:
<https://github.com/waysact/support-documentation/blob/master/internal/exports/fundraiser_exports/readme.md>

JS for Pledge exports:
<https://github.com/waysact/support-documentation/blob/master/internal/exports/pledge_exports/readme.md>

###  

### List of source available for JS:

-   amount
-   campaign_id
-   campaign_manager_id
-   cancellation_date
-   cancellation_year_and_week
-   contact_consents
-   contact_preferences
-   created_at
-   frequency
-   gift_aid
-   id
-   is_cancelled
-   mob_phone
-   office_id
-   override_cancellation_week
-   payment_method
-   phone
-   reporting_year_and_week
-   share_details_with_other_organisations
-   state
-   supporter_age_at_creation
-   supporter_email
-   team_id
-   team_leader_id
-   validation_outcome_id
-   validation_outcome_name
-   validation_outcome_status

### Useful JS

1.  TIMESHEET Weekstart of the date of the last time a fundraiser was
    assigned to a team

::: {.snippet-clipboard-content .position-relative}
    var myDate = moment(pledge.teams[0].date);
    if (myDate.day() === 0)
      myDate = myDate.add(-1, 'days');
    return myDate.startOf('week').add(1,'day').format('DD-MM-YYYY');    
:::

2.  TIMESHEET Non-fundraising hours and the ID

::: {.snippet-clipboard-content .position-relative}
    return JSON.stringify(pledge.timesheet_hours);
:::

3.  TIMESHEET Hours of a specific Non-fundraising activity (replace the
    ID)

::: {.snippet-clipboard-content .position-relative}
    return pledge.timesheet_hours[123];
:::

4.  TIMESHEET Week number of the day

::: {.snippet-clipboard-content .position-relative}
    function getWeekNumber(d) {
        d = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()));
        d.setUTCDate(d.getUTCDate() + 4 - (d.getUTCDay()||7));
        var yearStart = new Date(Date.UTC(d.getUTCFullYear(),0,1));
        var weekNo = Math.ceil(( ( (d - yearStart) / 86400000) + 1)/7);
        return [d.getUTCFullYear(), weekNo];
    }
    var result = getWeekNumber(new Date(pledge.date));
    return result[1];
:::

5.  TEAM LOCATIONS as csv

::: {.snippet-clipboard-content .position-relative}
    if (pledge.teams && pledge.teams[0] && pledge.teams[0].locations && pledge.teams[0].locations[0]) 
    {
      var locations = [];
      for (var i=0; i<pledge.teams[0].locations.length; i++)
      {
        locations.push(pledge.teams[0].locations[i].name);
      }
      return locations.join();
    }
:::

6.  Campaign

::: {.snippet-clipboard-content .position-relative}
    if (pledge.teams && pledge.teams[0] && pledge.teams[0].campaign_name) 
    {
      return pledge.teams[0].campaign_name;
    }
:::

7.  Number of pledges

::: {.snippet-clipboard-content .position-relative}
    var pledge_count = 0;
    pledge.pledges.forEach(function (item){
     if (item.amount >= 0)
     {
      pledge_count++;
     }
    });
    return pledge_count;
:::

8.  Pledges per hour

::: {.snippet-clipboard-content .position-relative}
    var pledge_count = 0;
    pledge.pledges.forEach(function (item){
      if (item.supporter_age_at_creation >= 0) 
      {
       pledge_count++;
      }
    });

    var pledges_per_hour='';
    if (pledge_count > 0 && pledge.hours_worked > 0)
    {pledges_per_hour = pledge_count / pledge.hours_worked;}
    else 
    {pledges_per_hour = '';}


    var final='';
    if (pledge_count > 0 && pledge.hours_worked > 0)
    {final = Number(pledges_per_hour).toFixed(2);}
    else 
    {final = 0;}
    return final;
:::

9.  Pledges created before 1pm

::: {.snippet-clipboard-content .position-relative}
    var pledge_count = 0;
    pledge.pledges.forEach(function (item){
      if (moment(item.created_at).hour() <= 13) 
      {
       pledge_count++;
      }
    });
    return pledge_count;
:::
