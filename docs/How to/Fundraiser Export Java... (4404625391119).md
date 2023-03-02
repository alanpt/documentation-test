# Fundraiser Export Javascript and sources

NOTE - when creating / editing a fundraiser export, the Preview will
ONLY show yesterday\'s data. So if no data is displaying then likely
there was no team active. A new feature will allow you to go back day by
day in the preview data. 

Training Module data is available via Source and
`return JSON.stringify(pledge.training_modules);` - the preview appears
blank for both but data is actually exported where available.

# link for JS sources:

For fundraisers
<https://github.com/waysact/support-documentation/blob/master/internal/exports/sources_JS_fundraiser.md>

For pledges1
<https://github.com/waysact/support-documentation/blob/master/internal/exports/exporter_schemas/sources.md>
and For pledges2
<https://github.com/waysact/support-documentation/blob/master/internal/exports/exporter_schemas/sources.md>

For EBIC
<https://github.com/waysact/support-documentation/tree/master/internal/exports/EBIC>

# JS for other exports

JS for Pledge exports:
<https://github.com/waysact/support-documentation/blob/master/internal/exports/pledge_exports/readme.md>

JS for Timesheet exports:
<https://github.com/waysact/support-documentation/blob/master/internal/exports/timesheet_exports/readme.md>

# Useful JS

Oxfam Great Britain account has some useful examples of fundraiser Data
and EBIC Timesheets.

1.  FUNDRAISERS Sum pledge amount for a fundraiser\'s pledges *if* they
    meet a certain condition, e.g. created after a date

::: {.snippet-clipboard-content .position-relative}
    var ref = moment('2018-03-15 00:00:00');
    var x = 0;
    pledge.pledges.forEach(function (a){
      if (moment(a.created_at) > ref) 
       x += a.amount;
    });
    return x;
:::

2.  FUNDRAISERS 1 Bonus for ten or more pledge with DD, 2 bonus for 20
    or more pledge with DD, etc.

::: {.snippet-clipboard-content .position-relative}
    var bonus='';
    if (pledge.num_pledges_payment_method_directdebit >= 10 && pledge.num_pledges_payment_method_directdebit < 20)
    {commission = 1;}
    else if (pledge.num_pledges_payment_method_directdebit >= 20 && pledge.num_pledges_payment_method_directdebit < 30)
    {commission = 2;}
    else if (pledge.num_pledges_payment_method_directdebit >= 30 && pledge.num_pledges_payment_method_directdebit < 40)
    {commission = 3;}
    else if (pledge.num_pledges_payment_method_directdebit >= 10 && pledge.num_pledges_payment_method_directdebit < 20)
    {commission = 4;}
    else 
    {commission = '0';}
    return commission;
:::

3.  FUNDRAISERS Hours worked x payrate for different users (was written
    before the payrates were available as sources)

::: {.snippet-clipboard-content .position-relative}
    var commission='';
    if (pledge.user_level == 1)
    {commission = pledge.hours_worked * 9;}
    else if (pledge.user_level == 2) 
    {commission = pledge.hours_worked * 11;}
    else 
    {commission = '0';}
    return commission;
:::

4.  FUNDRAISERS Average donation:

::: {.snippet-clipboard-content .position-relative}
    var average_donation='';
    if (pledge.num_pledges > 0 && pledge.total_amount > 0)
    {average_donation = pledge.total_amount / pledge.num_pledges;}
    else 
    {average_donation = '0';}
    return average_donation;
:::

5.  FUNDRAISERS Average donation where donors are over 50 Use
    item.supporter_age_at_creation \> 0 if you want the donors average
    age overall

::: {.snippet-clipboard-content .position-relative}
    var amount_sum = 0;
    var pledge_count = 0;
    pledge.pledges.forEach(function (item){
      if (item.supporter_age_at_creation > 50) 
      {
       amount_sum += item.supporter_age_at_creation;
       pledge_count++;
      }
    });
    return (pledge_count === 0) ? 0 : (amount_sum / pledge_count);
:::

6.  FUNDRAISERS Pledges per hour (rounded to 2 decimals) !NOTE! you can
    use the sources instead of JS

::: {.snippet-clipboard-content .position-relative}
    var pledges_per_hour='';
    if (pledge.num_pledges > 0 && pledge.hours_worked > 0)
    {pledges_per_hour = pledge.num_pledges / pledge.hours_worked;}
    else 
    {pledges_per_hour = '0';}
    return Number(pledges_per_hour).toFixed(2);
:::

7.  FUNDRAISERS Sign Ups between 31 and 40 years old (as a percentage
    rounded to 2 decimals) - can set x to 0 or y to 999 for open ended
    ranges

::: {.snippet-clipboard-content .position-relative}
    var x = 31;
    var y = 40;
    var pledge_x_y_count = 0;
    pledge.pledges.forEach(function (item){
      if (item.supporter_age_at_creation >= x && item.supporter_age_at_creation < y) 
      {
       pledge_x_y_count++;
      }
    });
    var percent_x_y = (pledge.num_pledges === 0) ? 0 : (pledge_x_y_count / pledge.num_pledges) * 100;

    return percent_x_y.toFixed(2);
:::

8.  FUNDRAISERS Sign Ups over 50 years old (as a percentage) + overall
    average age to get: `% over 50: XX%; average age: YY`

::: {.snippet-clipboard-content .position-relative}
    var age_sum = 0;
    var pledge_over_50_count = 0;
    pledge.pledges.forEach(function (item){
      age_sum += item.supporter_age_at_creation;
      if (item.supporter_age_at_creation > 50) 
      {
       pledge_over_50_count++;
      }
    });
    var percent_over_50 = (pledge.num_pledges === 0) ? 0 : (pledge_over_50_count / pledge.num_pledges) * 100;
    var average_age = (pledge.num_pledges === 0) ? 0 : (age_sum / pledge.num_pledges);

    return "% over 50: " + percent_over_50 + "%; average age: " + average_age;
:::

9.  FUNDRAISERS Average age (without decimal)

::: {.snippet-clipboard-content .position-relative}
    var age_sum = 0;
    pledge.pledges.forEach(function (item){
      age_sum += item.supporter_age_at_creation;
    });
    var average_age = (pledge.num_pledges === 0) ? 0 : (age_sum / pledge.num_pledges);
    return average_age.toFixed(0);
:::

10. FUNDRAISERS Number of pledges with the validation outcome
    \"Approved\"

::: {.snippet-clipboard-content .position-relative}
    var pledge_count = 0;
    pledge.pledges.forEach(function (item){
     if (item.validation_outcome_name == 'Upgrade')
     {
      pledge_count++;
     }
    });
    return pledge_count;
:::

11. FUNDRAISERS Average donation of pledges with the validation outcome
    \"Approved\"

::: {.snippet-clipboard-content .position-relative}
    var amount_sum = 0;
    var pledge_count = 0;
    pledge.pledges.forEach(function (item){
      if (item.validation_outcome_name == 'Approved') 
      {
       amount_sum += item.amount;
       pledge_count++;
      }
    });
    return (pledge_count === 0) ? 0 : (amount_sum / pledge_count);
:::

12. FUNDRAISERS Total amount if Payment Method is Direct Debit

::: {.snippet-clipboard-content .position-relative}
    var amount_sum = 0;
    pledge.pledges.forEach(function (item){
      if (item.payment_method == 'directdebit') 
      {
       amount_sum += item.amount;
      }
    });
    return amount_sum;
:::

13. FUNDRAISERS Team information

::: {.snippet-clipboard-content .position-relative}
    return JSON.stringify(pledge.teams[0]);
:::

14. FUNDRAISERS Get total amount for a specific campaign (use the
    campaign ID)

::: {.snippet-clipboard-content .position-relative}
    var amount_sum = 0;
    pledge.pledges.forEach(function (item){
      if (item.campaign_id == '2227') 
      {
       amount_sum += item.amount;
      }
    });
    return amount_sum;
:::

Alternatively, number of pledges for a specific campaign and a specific
payment method:

::: {.snippet-clipboard-content .position-relative}
    var pledge_count = 0;
    pledge.pledges.forEach(function (item){
      if (item.campaign_id == '2227' && item.payment_method == 'directdebit' ) 
      {
      pledge_count++;
      }
    });
    return pledge_count;
:::

15. FUNDRAISERS Bonus calculation (TWS)

::: {.snippet-clipboard-content .position-relative}
    var weighting1 = 0.25;
    var weighting4 = 0.5;

    var weighting2 = 1;
    var weighting3 = 1.5;
    var pledge_weighted = 0;
    pledge.pledges.forEach(function (item){
     if (item.state != 'cancelled')
     { if (item.frequency == 'annual' &&  item.amount < 50)
       pledge_weighted += 0;
     else if (item.frequency == 'annual' && item.amount >= 50 && item.amount < 300)
        pledge_weighted += weighting1 * 1;
     else if (item.frequency == 'monthly' && item.supporter_age_at_creation >= 18 && item.supporter_age_at_creation <= 20)
       pledge_weighted += weighting4 * 1;
      else if (item.frequency == 'monthly' && item.supporter_age_at_creation >= 21 && item.supporter_age_at_creation <= 44)
       pledge_weighted += weighting2 * 1;
      else if (item.frequency == 'monthly' && item.supporter_age_at_creation >= 45)
       pledge_weighted += weighting3 * 1;
      }
    });

    var pledge_bonus = 0;
    var numerus = Math.floor(pledge_weighted);
    var decimales = (pledge_weighted - Math.floor(pledge_weighted)) / 0.25;
    if ((pledge_weighted  >= 6) && (pledge_weighted  < 11))
    pledge_bonus = (pledge_weighted - 5) * 40;
    else if (pledge_weighted >= 11)
    pledge_bonus = (200 + (( numerus - 10) * 60) + (decimales * 10));
    return pledge_bonus;
:::

16. FUNDRAISER Date of the last time the fundraiser was assigned to a
    team

::: {.snippet-clipboard-content .position-relative}
    if (pledge.teams != '')
    return pledge.teams[0].date;
    else return 'No date';
:::

17. FUNDRAISER Worked hours of the last time the fundraiser was assigned
    to a team

::: {.snippet-clipboard-content .position-relative}
    if (pledge.teams != '')
    return pledge.teams[0].hours_worked;
    else return '0';
:::

18. FUNDRAISER Week number of the last time the fundraiser was assigned
    to a team

::: {.snippet-clipboard-content .position-relative}
    function getWeekNumber(d) {
        // Copy date so don't modify original
        d = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()));
        // Set to nearest Thursday: current date + 4 - current day number
        // Make Sunday's day number 7
        d.setUTCDate(d.getUTCDate() + 4 - (d.getUTCDay()||7));
        // Get first day of year
        var yearStart = new Date(Date.UTC(d.getUTCFullYear(),0,1));
        // Calculate full weeks to nearest Thursday
        var weekNo = Math.ceil(( ( (d - yearStart) / 86400000) + 1)/7);
        // Return array of year and week number
        return [d.getUTCFullYear(), weekNo];
    }
    var result = getWeekNumber(new Date(pledge.teams[0].date));
    if (pledge.teams != '')
    return result[1];
    else return 'no date';
:::

18. FUNDRAISER Week number of the Date Range Start

::: {.snippet-clipboard-content .position-relative}
    function getWeekNumber(d) {
        // Copy date so don't modify original
        d = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()));
        // Set to nearest Thursday: current date + 4 - current day number
        // Make Sunday's day number 7
        d.setUTCDate(d.getUTCDate() + 4 - (d.getUTCDay()||7));
        // Get first day of year
        var yearStart = new Date(Date.UTC(d.getUTCFullYear(),0,1));
        // Calculate full weeks to nearest Thursday
        var weekNo = Math.ceil(( ( (d - yearStart) / 86400000) + 1)/7);
        // Return array of year and week number
        return [d.getUTCFullYear(), weekNo];
    }
    var result = getWeekNumber(new Date(documentProperties.dateRangeStart));
    return result[1];
:::

19. FUNDRAISER Conversion rate : Nb pledges validated/ worked hours

::: {.snippet-clipboard-content .position-relative}
    var pledge_count_complets = 0;
    pledge.pledges.forEach(function (item){
     if (item.validation_outcome_name == 'Deuxième vérification - aprouvé après appel de bienvenue')
     {
      pledge_count_complets++;
     }
     else if (item.validation_outcome_name == 'Première vérification - bulletin complet livré')
     {
      pledge_count_complets++;
     }
     else if (item.validation_outcome_name == 'Troisième vérification - prêt pour export')
     {
      pledge_count_complets++;
     }
    });

    var total = '';


    if ((pledge_count_complets) == 0 )
    {total = 0;}
    else if (pledge.hours_worked == 0 )
    {total = 0;}
    else 
    {total = (pledge_count_complets) / pledge.hours_worked * 1;}
    var replace_dot = total.toFixed(2);

    var final = replace_dot.replace(".", ",");
    return final;
:::

20. FUNDRAISER Cancellation rate

::: {.snippet-clipboard-content .position-relative}
    // complets

    var pledge_count_complets = 0;
    pledge.pledges.forEach(function (item){
     if (item.validation_outcome_name == 'Deuxième vérification - aprouvé après appel de bienvenue')
     {
      pledge_count_complets++;
     }
     else if (item.validation_outcome_name == 'Première vérification - bulletin complet livré')
     {
      pledge_count_complets++;
     }
     else if (item.validation_outcome_name == 'Troisième vérification - prêt pour export')
     {
      pledge_count_complets++;
     }
    });
    // invalides

    var pledge_count_invalides = 0;
    pledge.pledges.forEach(function (item){
     if (item.validation_outcome_name == 'Annulé')
     {
      pledge_count_invalides++;
     }
    });


    // taux annulation
    var ratio = 0;
    if (pledge_count_complets > 0 && pledge_count_invalides > 0)
    {ratio = pledge_count_invalides / (pledge_count_complets + pledge_count_invalides) *100;}
    else 
    {ratio = 0;}
    var replace_dot = ratio.toFixed(2);

    var final = replace_dot.replace(".", ",");
    return final;
:::

21. FUNDRAISER Start/end date in French format

::: {.snippet-clipboard-content .position-relative}
    var jour_debut = '';
    if (documentProperties.dateRangeStart.format('dddd') == 'Monday')
    {jour_debut = 'Lundi';}
    else if (documentProperties.dateRangeStart.format('dddd') == 'Tuesday')
    {jour_debut = 'Mardi';}
    else if (documentProperties.dateRangeStart.format('dddd') == 'Wednesday')
    {jour_debut = 'Mercredi';}
    else if (documentProperties.dateRangeStart.format('dddd') == 'Thursday')
    {jour_debut = 'Jeudi';}
    else if (documentProperties.dateRangeStart.format('dddd') == 'Friday')
    {jour_debut = 'Vendredi';}
    else if (documentProperties.dateRangeStart.format('dddd') == 'Saturday')
    {jour_debut = 'Samedi';}
    else if (documentProperties.dateRangeStart.format('dddd') == 'Sunday')
    {jour_debut = 'Dimanche';}

    var mois_debut = '';
    if (documentProperties.dateRangeStart.format('MMMM') == 'January')
    {mois_debut = 'Janvier';}
    else if (documentProperties.dateRangeStart.format('MMMM') == 'February')
    {mois_debut = 'Février';}
    else if (documentProperties.dateRangeStart.format('MMMM') == 'March')
    {mois_debut = 'Mars';}
    else if (documentProperties.dateRangeStart.format('MMMM') == 'April')
    {mois_debut = 'Avril';}
    else if (documentProperties.dateRangeStart.format('MMMM') == 'May')
    {mois_debut = 'Mai';}
    else if (documentProperties.dateRangeStart.format('MMMM') == 'June')
    {mois_debut = 'Juin';}
    else if (documentProperties.dateRangeStart.format('MMMM') == 'July')
    {mois_debut = 'Juillet';}
    else if (documentProperties.dateRangeStart.format('MMMM') == 'August')
    {mois_debut = 'Aout';}
    else if (documentProperties.dateRangeStart.format('MMMM') == 'September')
    {mois_debut = 'Septembre';}
    else if (documentProperties.dateRangeStart.format('MMMM') == 'October')
    {mois_debut = 'Octobre';}
    else if (documentProperties.dateRangeStart.format('MMMM') == 'November')
    {mois_debut = 'Novembre';}
    else if (documentProperties.dateRangeStart.format('MMMM') == 'December')
    {mois_debut = 'Décembre';}


    return jour_debut + " " + documentProperties.dateRangeStart.format('DD') + " " + mois_debut + " " + documentProperties.dateRangeStart.format('YYYY');
:::

22. FUNDRAISER turn . into a ,

::: {.snippet-clipboard-content .position-relative}
    var replace_dot = variable_to_replace.toFixed(2);

    var final = replace_dot.replace(".", ",");
    return final;
:::

23. Percentage of donors paying by credit card

     

    ::: {.snippet-clipboard-content .position-relative}
        var debit_count = 0;
        var total = pledge.num_pledges;
        pledge.pledges.forEach(function (item){
        if (item.payment_method == 'directdebit')
          {
           debit_count++;
          }
        });
        var debit_percent = (pledge.num_pledges === 0) ? 0 : (debit_count/ total) * 100;
        return debit_percent.toFixed(2);
    :::

     

24. Team location IDs

```{=html}
<!-- -->
```
    var ids = pledge.teams.reduce(function (ids, team) {
    var locations = team.locations.map(function (location) { 
    return location.id;
    });
    return ids.concat(locations);
    }, []);

    return ids.filter(function (x, i, a) { 
    return a.indexOf(x) == i; 
    });

25\. Date/time first interaction of the day

    var interactions = pledge.interactions.sort(function(lhs, rhs) {
    return Date.parse(lhs.created_at) - Date.parse(rhs.created_at);
    });
    if (interactions.length > 0) {
    return interactions[0].created_at;
    } else {
    return null;
    }

 

26\. Date/time last interaction of the day

::: {.snippet-clipboard-content .position-relative}
    var interactions = pledge.interactions.sort(function(lhs, rhs) {
    return Date.parse(lhs.created_at) - Date.parse(rhs.created_at);
    });
    if (interactions.length > 0) {
    return interactions[interactions.length - 1].created_at;
    } else {
    return null;
    }
:::
