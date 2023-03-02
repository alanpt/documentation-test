# Call Centre Callbacks

May 21st 2020 - this is the new logic for the call backs and
specifically the logic for the Next Lead button:

 

For each lead in the call list:

1\. If it is locked, discard it. Done.

2\. If the most recent call status is "do not call", discard it. Done.

3\. If the most recent call status is NOT "call back", use it. Done.

4\. Otherwise (if call status is "call back"), then:

5\. If the call back time hasn't come yet, discard it. Done.

6\. If the call outcome is "call back QUEUE", use it. Done.

7\. Otherwise (if it's call back, the time has come, and call outcome is
"call back AGENT") then:

8\. If I made the most recent call and I'm on the same campaign as the
lead, use it. Done.

9\. If the user who made the call is offline, use it. Done.

10\. If the user who made the call is online but on the wrong campaign,
use it. Done.

11\. Otherwise, discard it.

 

\*\* Callbacks \*\* if a callback is due and the agent who marked it
isn\'t online/isn\'t on a team on that campaign that day it will go to
another agent straight after it is due. if a callback agent has been
applied and the agent is on the correct team/campaign but on a different
call then the call will be queued until the agent is off the current
call (from the next lead button or autodial).

 

For more information \... see
<https://github.com/waysact/waysact/blob/08f7fed4e52f197bdb48ae43291c6c58ed6dfb7d/app/sql_queries/next_pledge.sql.erb#L223-L271>

A word of caution, leads are only served to Agents that have them on a
call list. This includes callback leads. So if a team is working off a
call list that has a condition where call attempts = 0 then they won\'t
be served their call backs because the team\'s condition prevents that
lead from being displayed. A lot of customers think the callback status
will override the call list conditions, but that isn\'t the case.
