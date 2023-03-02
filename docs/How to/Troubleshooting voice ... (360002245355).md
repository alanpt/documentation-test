# Troubleshooting voice calls that don\'t connect

### **Check the Call Logs in Twilio**

**A record does exist for the call, but the call doesn\'t connect: **If
you do see a record for the call in question, but the call destination
isn\'t connected, then there is likely an issue elsewhere. Continue
reading for additional troubleshooting.

**A record does exist for the call**: If you do see a record for the
call in question, this indicates Twilio has successfully received the a
request for a call, and the issue lies elsewhere. Continue
troubleshooting with the following checklist:

-   Are you [troubleshooting an Elastic SIP Trunking or SIP Domain
    call](https://support.twilio.com/hc/en-us/articles/360025446533-Troubleshooting-Twilio-Elastic-SIP-Trunking-and-SIP-Domain-Calls){target="_self"}?
-   Are you (or a caller) hearing the [\"An application error has
    occurred" error on your
    call](https://support.twilio.com/hc/en-us/articles/223132427--An-application-error-has-occurred-error-on-your-call){target="_self"}?
-   Does the call log show any [Debug
    Events](https://support.twilio.com/hc/en-us/articles/360021755854-Troubleshooting-Alerts-Debug-Events-and-Errors-on-Twilio-Voice-Calls){target="_self"}?
-   Is the **Last SIP Response** something other than `200 OK` in [Voice
    Insights](https://support.twilio.com/hc/en-us/articles/360035018373-View-the-Voice-Insights-Summary-for-a-Call){target="_self"}
    or the Elastic SIP/SIP Domain [Packet
    Captures](https://support.twilio.com/hc/en-us/articles/360025293074-View-Twilio-SIP-Call-Packet-Captures-PCAPs-){target="_self"}?
-   Is your TwiML URL or Application SID [responding as
    intended](https://support.twilio.com/hc/en-us/articles/223180448-How-do-I-see-which-TwiML-Twilio-executed-during-my-call-){target="_self"}?
-   Are you (or a caller) experiencing any [audio quality
    issues](https://support.twilio.com/hc/en-us/articles/360021745354-Troubleshooting-Audio-Quality-Issues-on-Twilio-Voice-Calls){target="_self"}?

**A record doesn\'t exist for the call**: If you don\'t see a record for
the call in question, then you\'ll need to troubleshoot why Twilio
isn\'t registering the call request. For full details, please see the
corresponding article:

-   [Troubleshooting Outgoing Twilio Programmable Voice
    Calls](https://support.twilio.com/hc/en-us/articles/360009924213-Troubleshooting-Outgoing-Twilio-Programmable-Voice-Calls){target="_self"}
-   [Troubleshooting Incoming Calls on a Twilio Phone
    Number](https://support.twilio.com/hc/en-us/articles/360021667534-Troubleshooting-Incoming-Calls-on-a-Twilio-Phone-Number){target="_self"}

### **Check for Debug Events via the Console Call Logs** {#h_a85fb8f5-c023-488d-b678-718b493e5bb0}

1.  Access the **Call Logs** page in
    [Console](https://www.twilio.com/console/voice/calls/logs){target="_self"}.
2.  Search for any calls flagged with a debug event - these will be
    highlighted in red.\
    ![Notifications_01_400.png](https://support.twilio.com/hc/article_attachments/360034051233/Notifications_01_400.png)
3.  Clicking on a red highlighted call log will display the Call SID,
    timestamp, and phone numbers, along with the Notification SID, error
    code, and error description message.\
    ![Notifications_02_400.png](https://support.twilio.com/hc/article_attachments/360033240714/Notifications_02_400.png)
4.  Scroll down the page to the **Request Inspector** to see the HTTP
    status code and response we received from your site.\
    ![Notifications_03b_400.png](https://support.twilio.com/hc/article_attachments/360033240874/Notifications_03b_400.png)

**No debug events are listed**: If you don\'t see any debug events
posted for the call in question, this indicates Twilio believes we have
successfully executed the call, and the issue likely lies elsewhere.
Continue troubleshooting with the following checklist:

-   Is an outbound [call not
    connecting](https://support.twilio.com/hc/en-us/articles/360022103694-Troubleshooting-Twilio-Programmable-Voice-Calls-that-Don-t-Connect){target="_self"}?
-   Is your TwiML URL or Application SID [responding as
    intended](https://support.twilio.com/hc/en-us/articles/223180448-How-do-I-see-which-TwiML-Twilio-executed-during-my-call-){target="_self"}?
-   Are you (or a caller) experiencing any [audio quality
    issues](https://support.twilio.com/hc/en-us/articles/360021745354-Troubleshooting-Audio-Quality-Issues-on-Twilio-Voice-Calls){target="_self"}?

**A debug event is listed**: If you do see a debug event listed, review
the information provided for clues to resolving your issue. Additional
information for this error can be found
at <https://www.twilio.com/docs/api/errors/XXXXX> - just replace XXXXX
with the error number flagged on your call. If you are unable to resolve
your issue with the information provided, continue reading for
additional troubleshooting.

### **Check for Debug Events via the Console Debugger** {#h_8aba39ae-93f2-4053-a9af-14ffbf354418}

1.  Access the **Debugger** page in
    [Console](https://www.twilio.com/console/runtime/debugger){target="_self"}.
2.  Any debug events that have occurred over the selected time-frame
    will be listed.\
    ![Notifications_04_400.png](https://support.twilio.com/hc/article_attachments/360034051893/Notifications_04_400.png)
3.  Clicking on a debug event will display the Notification SID,
    Resource (Call) SID, and timestamp, along with the error code and a
    description of the problem.\
    ![Notifications_05_400.png](https://support.twilio.com/hc/article_attachments/360034053553/Notifications_05_400.png)
4.  Scroll down the page to the **Request Inspector** to see the HTTP
    status code and response we received from your site. Review this
    information for clues to resolving your issue.\
    ![Notifications_06_400.png](https://support.twilio.com/hc/article_attachments/360033243014/Notifications_06_400.png)

**No debug events are listed**: If you don\'t see any debug events
posted for the call in question, adjust the timeframe drop-down menu. If
you continue to see no results, this indicates Twilio believes we have
successfully executed the call, and the issue likely lies elsewhere.
Continue troubleshooting with the following checklist:

-   Is an outbound [call not
    connecting](https://support.twilio.com/hc/en-us/articles/360022103694-Troubleshooting-Twilio-Programmable-Voice-Calls-that-Don-t-Connect){target="_self"}?
-   Is your TwiML URL or Application SID [responding as
    intended](https://support.twilio.com/hc/en-us/articles/223180448-How-do-I-see-which-TwiML-Twilio-executed-during-my-call-){target="_self"}?
-   Are you (or a caller) experiencing any [audio quality
    issues](https://support.twilio.com/hc/en-us/articles/360021745354-Troubleshooting-Audio-Quality-Issues-on-Twilio-Voice-Calls){target="_self"}?

**A debug event is listed**: If you do see a debug event listed, review
the information provided for clues to resolving your issue. If you are
unable to resolve your issue with the information provided, continue
reading for additional troubleshooting.

 

 
