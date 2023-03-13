# Call Centre Teams

Once an Agent has interacted with a lead, the Campaign in the team
cannot be changed and will change from a drop list to a read only field.

Through <https://github.com/waysact/evergiving/issues/6938,> Call Lists
can now have their own priority built in where the leads can be sorted
by either the Most recent record or the Number of call attempts (i.e.
leads with fewest calls first).

Through <https://github.com/waysact/evergiving/issues/6802> we added
weights and tiers to the Call Centre Teams. For tiers, the number you
assign is just an order. You can use 1,2,3 or 1000,2000,3000 --- or
1,20,300 \-- or 1 214 53295239582 --- and all have the same effect. With
1,2,3 obviously being the most readable. For weights the relative
difference matters. How high should your weight be? Well 1,2,3 is the
same as 1000,2000,3000 --- because 3/1 is the same as 3000/1000. But
1,2,3000 would mean something different. If one call list has a weight
of 9000 then it will get virtually all calls if the other call list have
small weights such as 1, 3 or 15. If the other call lists have weights
like 5000, 3000 then a weight of 9000 is fine. Although it would be
easier for customers if they just used smaller numbers like 5, 3, 9.

If you want to:

-   **give priority** to a call list, add a higher number in the
    \'**Weight**\' box.
-   only use a call list **when other call lists are exhausted**, add a
    higher number in the \'**Tier**\' box.

![Call_Centre_Teams.png](https://support.waysact.com/hc/article_attachments/360007373155/Call_Centre_Teams.png)

## Weights

If you want to **give priority** to a call list, add a higher number in
the \'**Weight**\' box.

The higher the number, the more likely it is that a record from that
call list will be picked by the autodialler; and the more likely it is
that it will be served to an agent on the team as the Next Lead.

Let\'s say you have three call lists assigned to a team. You give:

-   Call List X a weighting of 1
-   Call List Y a weighting of 2
-   Call List Z a weighting of 5

Every time an agent on the team needs a new record, the system will roll
an 8 sided dice\*. 5 sides of the dice will be for Call List Z, 2 sides
of the dice will be for Call List Y, and 1 side of the dice will be for
Call List X. There\'s no limit to the number of sides (combined
weighting value) you can have on the dice. Let\'s say the dice lands on
one of the two sides for Call List Y. The system will choose a record
from Call List Y.

## Tiers

If you only want records from a call list to be included **when other
call lists are exhausted**, add a higher number in the \'**Tier**\' box.

Let\'s take the three call lists from above. You now want new Call Lists
V and W (really high priority leads fed in via API) to be called before
any of the other call lists. So you give:

-   Call List V a weighting of 1 and **Tier 1**

-   Call List W a weighting of 1 and **Tier 1**

-   Call List X a weighting of 1 and **Tier 2**

-   Call List Y a weighting of 2 and **Tier 2**

-   Call List Z a weighting of 5 and **Tier 2**

Every time an agent needs a new record, the system will throw a 2 sided
dice to choose from V and W **(Tier 1)**. If and when there are no leads
in V nor W, the system will roll an 8 sided dice to choose from X,Y or Z
**(Tier 2)**

### How is a record chosen from a Call List?

Call Backs are always prioritised no matter what - by the most overdue
first.

The **newest record** that **meets the conditions of the Call List** is
then chosen (the one with the highest ID) as long as:

1.  It has not been called yet or it is in the Call Status of Pending.
    i.e. it is not in the status of Remove or Complete.
2.  The minimum time between calls has passed; and the maximum call
    attempts per day or the maximum call attempts per record has not
    been reached. You can set these per Campaign under Campaign \>
    General Settings.

### Scenarios

I have a really large call list and I want my callers to complete a
certain number today before moving on to fresh records.

-   By default, newest records will be served until they\'re: completed,
    excluded (removed), set as call backs or restricted by minimum time
    between calls, max call attempts per day or per record. The
    \'certain number\' will be determined by how many agents are calling
    and the minimum time between call settings. Also by the quality,
    good or bad i.e. how many are completed and removed.

I want to make sure that \'new face to face sign ups\' / \'digital form
sign ups\' / \'leads coming via API\' are prioritised

-   To prioritise one set of records over another, create a call list
    that includes priority records and give that call list a higher
    weighting. You can even give a call list a weighting of zero (0), so
    that records are only ever picked when there\'s no priority records
    available. This is great when you want to keep agents busy between
    fresh live leads. Choose \'Record Source\' in the Call List
    Conditions.

I want to mix things up so that callers have some calls that are fresh
and some that are a bit older.

-   There\'s many ways you can segment records, but let\'s say you want
    to mix up records that have been called a few times with records
    that haven\'t. You could do this two ways: 1. Set the minimum time
    between calls to a higher number or 2. Create two call lists with
    call attempts \< *n* and \> *n*. You can then assign them both to a
    team and adjust the weights.

------------------------------------------------------------------------

/\* Not an actual dice, obviously - but like dice throws, even though
the selection of records is random, you will always get to an accurate
distribution of records as calls are made
[https://en.wikipedia.org/wiki/Law_of_large_numbers](https://en.wikipedia.org/wiki/Law_of_large_numbers){rel="nofollow"}.
The house always wins! ;)

 

## Auto dial

With Auto Dial enabled, one click both ends the call and starts the next
call. Call backs are slotted in when they're due; and records skipped
where their maximum call attempts settings have been reached.

On the Team creation page, select the Default Outbound Number and set
Auto Dial to \`Yes\`. The agents on these teams will start the first
call as per normal but instead of the single hangup button there are
two. The first hangs up and pauses, the second hangs up and dials the
next record.

![Autodial_1.png](https://support.waysact.com/hc/article_attachments/360007421896/Autodial_1.png){width="324"
height="68"}

If the donor hangs up there's a 10 second countdown before Auto Dial
will start the next call.
![Autodial_2.png](https://support.waysact.com/hc/article_attachments/360007421916/Autodial_2.png){width="333"
height="97"}

If the Agent presses Pause, they can complete notes etc and click to
restart Auto Dial.

![Autodial_3.png](https://support.waysact.com/hc/article_attachments/360007374255/Autodial_3.png){width="252"
height="90"}

You can configure the outbound number to:

-   [**'Cycle'** --- choose a number from the outbound numbers allocated
    to that campaign that has been used the fewest number of times to
    call this lead with;]{#bbfb}
-   [**'Randomise'** --- choose a number from the outbound numbers
    allocated to that campaign randomly; or]{#0924}
-   [**'Fixed'** --- allocate a single number that you can monitor the
    performance of. This is particularly useful when running new or very
    cold lists, and you want to protect numbers for warmer ones.]{#df62}

When the call rings out/hits the dialout timer, or wasn\'t connected for
any other reason (donor hung up while ringing, unknown number,
temporarily unavailable, etc.), we skip the countdown timer on the
auto-dial.

More information on the auto dial is at
<https://blog.evergiving.com/supercharge-your-calling-campaigns-with-auto-dial-by-evergiving-9ade7ec0c6f2>

**Calling across time zones**

Customers want call lists to include leads that are from multiple
timezones but don\'t want to call them too early or too late can
configure an \'acceptable calling period\' per campaign, so that leads
will be excluded from the auto-dial based on their timezone.

In the Campaigns -\> General Settings, there is a new question
\'Acceptable Calling Period\' with a start and end time picker.

Where choosing a record to include in the dialler, if the current time
in the lead\'s timezone is outside the calling period then skip the
record. If the lead has no timezone, it will always be shown to the
dialler.

**Acceptable Calling Periods**

In Campaigns -\> General Settings there is a now \"Acceptable Calling
Period\" with a start and end time picker. Where choosing a record to
include in the dialler, if the current time in the lead\'s timezone is
outside the calling period then skip the record. Leads without a
timezone always appear in the next lead. The original release only
considers imported leads where the timezone is set. This feature was
extended through <https://github.com/waysact/evergiving/issues/8333> to
also include:

-   F2F pledges - the timezone can be taken from the Team that input the
    pledge and in the case of no team data we can infer from the account
    timezone.
-   Leads without timezone imported - the timezone can be taken from the
    account settings (or team)

 

## Call Lists

![Call_List.png](https://support.waysact.com/hc/article_attachments/4537416626191/Call_List.png)

Call Lists can be sorted by Oldest First (works best for call lists
welcome calling pledges and wanting to call pledges in the order they
were signed up), most recent records first and Records with fewest calls
first. 

The Filters \"Record Source\", \"Record Type\", and \"Calling Type\"
will help get the correct pledges or leads displaying. If the Agents are
using the \"Next Lead\" we automatically strip out leads with \"Do Not
Call\" or \"Invalid number\" statuses but if you aren\'t using the Next
Lead then you should add filters to manually block those leads.

 
