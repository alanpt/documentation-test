# Common Twilio Errors

### **Network Conditions**

Local network conditions have the biggest impact on voice quality.
Jitter, latency, and packet loss can be the biggest contributors to
voice quality issues in any VoIP network.

  ----------------- ------------------------------------------------------------------------ -------------------------------------------------------------------------------------------------
  **Latency**       The time it takes the RTP (media) packets to arrive at the destination   Causes media delivery delays, callers may speak over the top of each other.
  **Packet loss**   Packets that don\'t make it to the final destination                     Causes gaps and cut-outs in media, callers may not hear the other side.
  **Jitter**        Packets that arrive at the destination out of order                      Cause a 'robotic' distortion effect in media, or packet loss when overrunning the jitter buffer
  ----------------- ------------------------------------------------------------------------ -------------------------------------------------------------------------------------------------

From
<https://support.twilio.com/hc/en-us/articles/223180908-How-do-I-troubleshoot-common-problems-with-Twilio-Client->

**Latency**: High latency can substantially degrade a caller\'s
experience. While there will always be some latency between the codec
algorithm, the jitter buffer, and network traversal, the goal is to keep
this to a minimum. Callers typically start to notice the effect of
latency once it breaches 250ms, and find latency above \~600ms to be
nearly unusable. Here are some strategies to minimize latency on your
network:

-   Some lower bandwidth fixed internet connections can often have a
    higher latency. If possible, upgrade your internet connectivity.
-   Stick to high-bandwidth connections. Mobile networks such as LTE
    (mobile 4G Data) can often have high latency.
-   Ensure you're using Twilio Client 1.3 or higher to take advantage of
    Twilio's Global Low Latency routing infrastructure.

**Jitter**: Packet loss, most frequently jitter-induced packet loss, can
make a big impact on your VoIP call quality. Wi-Fi can be particularly
bad for creating jitter. Here are some strategies to minimize jitter on
your network:

-   Use fixed ethernet instead of Wi-Fi whenever possible
-   Reduce packet conflicts on Wi-Fi by reducing the number of devices
    operating on the same channel.
-   Avoid large data file transfers over the same Wi-Fi environment
    concurrently with voice.
-   Avoid [bufferbloat](http://en.wikipedia.org/wiki/Bufferbloat), which
    can result in high latency, and bursts of jitter. We recommend
    ensuring your router is configured with a low buffer size, as high
    jitter cannot be masked by a buffer without introducing artificial
    delay, and often choppy audio.[\
    ](http://netalyzr.icsi.berkeley.edu/)**Note**: Not all routers allow
    for configuring buffer sizes, but some routers ship with defaults
    which are not optimized for real time VoIP networks. Open source
    routers, enterprise grade routers and gamer-oriented routers are
    good candidates for providing the right configuration options and
    defaults.

If you have addressed the above issues and continue to have jitter
related impact on your voice quality, you may consider configuring your
router with QoS rules to prioritize traffic on the above media UDP
ports. Given the large range of UDP ports you should only do this with
prior consideration to what other traffic may be flowing in that port
range.

 

### **Twilio Client cannot establish a call** {#h_d247efdc-eb79-4df9-80d7-1adaf5371d4c}

-   Check open network ports in your router / firewall / antivirus
    software
-   Confirm a network connection is currently available
-   Review the javascript console for application errors

### **No audio or one-way audio** {#h_da0cfba2-df9c-4727-9156-bf34e2d310f9}

-   Check open network ports in your router / firewall / antivirus
    software
-   Confirm the hardware is correctly attached and ensure the correct
    microphone and speakers are selected in software settings
-   Check to ensure the microphone is not muted (some have a hardware
    mute button) and the speaker volume is turned up

### **Call audio cutting out or stops transmitting** {#h_9701f515-80d2-4c1f-bf9e-062c6aedee69}

-   Twilio Client requires a high speed and low latency network
    connection. Benchmark the network by testing your throughput and
    ping at [speedtest.net](http://speedtest.net/) and aim to improve
    the scores.
-   Enable router QoS or prioritize traffic for Twilio Client
-   Reduce network activity not related to VoIP or use a separate
    network for VoIP workstations

### **Call audio is garbled or contains artifacts** {#h_640364d1-6355-4359-87c9-2591845c9187}

-   Use a headset instead of built in computer microphone

-   Reduce ambient noise such as nearby speakers or fans

-   Adjust the distance of the microphone from the mouth - too close can
    cause audio clipping

-   Adjust microphone levels in the computer's sound settings

-   Ensure computer has resources available to process a call

-   -   CPU and RAM are not over-utilized
    -   Close un-needed applications and browser tabs
    -   Try disabling antivirus software

### **Microphone level is changing on its own** {#h_8b08cc06-92e4-4406-b3d3-814feed05458}

Some device drivers do not behave properly for auto-gain control. For
the complete list of audioConstraints, please refer to the FAQ [How to
constrain the audio sources in Google
Chrome?](https://support.twilio.com/hc/en-us/articles/223180868-How-to-constrain-the-audio-sources-in-Google-Chrome-){target="_blank"
rel="noopener"}

### **Choppy or Robotic Sounding Call Audio** {#h_efd75f8f-557e-406e-9e93-a971a5e0ef1e}

When call audio has a robotic-sound or choppy cuts in and out, this is
often caused by packet loss due to excessive **jitter** on the line.
Jitter is the term used when packets are received out-of-order, and can
be caused by a number of factors including network traffic, or the
technologies used in the call.

For help troubleshooting audio issues caused by jitter, please see
[Troubleshooting Call Audio Jitter Issues on Twilio Programmable Voice
Calls](https://support.twilio.com/hc/en-us/articles/360022008733-Troubleshooting-Call-Audio-Jitter-Issues-on-Twilio-Programmable-Voice-Calls){target="_self"}.

### **One-way or Missing Call Audio** {#h_6c79d807-73aa-4845-b51e-fce130eb71a2}

When a caller can hear the other party, but the other party can\'t hear
the caller, we refer to this as **one-way audio**. Missing audio streams
can be caused by a number of factors including errors in the
connection/handshake, problems during a network handoff, or issues at
the source or destination.

For help troubleshooting audio issues caused by one-way audio, please
see [Troubleshooting One-Way Audio Issues on Twilio Programmable Voice
Calls](https://support.twilio.com/hc/en-us/articles/360021808454-Troubleshooting-One-Way-Audio-Issues-on-Twilio-Programmable-Voice-Calls){target="_self"}.

### **Delayed Call Audio** {#h_ea7874b6-fa62-435d-8bf9-ac6f107c6266}

When caller or callee reports excessive delays in the call audio, this
is often caused by excessive **latency** on the line. Call audio latency
can be caused by a number of factors including delayed packet
transmission or delivery somewhere along the line, or the technologies
used in the call.

For help troubleshooting audio issues caused by latency, please
see [Troubleshooting Latency and Delayed Audio Issues on Twilio
Programmable Voice
Calls](https://support.twilio.com/hc/en-us/articles/360021808494-Troubleshooting-Latency-and-Delayed-Audio-Issues-on-Twilio-Programmable-Voice-Calls){target="_self"}.

### **Call Audio Echoing** {#h_30107136-3995-4e49-b28b-e2909d5f9f62}

When a caller or callee reports that they hear their own delayed audio
being transmitted back to them, we refer to this as call audio **echo**.
Echo is often caused by positioning and volume levels of the speaker and
microphone at one end of the line, or by crosstalk on copper wire
(landline) networks.

#### [Positioning and volume adjustment]{.wysiwyg-underline}

Most audio echo issues are caused by one callee or caller\'s microphone
picking up the audio coming from the speaker, and then transmitting it
back through the call. Please run through this troubleshooting checklist
to try and resolve this issue:

\- Disable any speakerphone functionality, and instead use a headset or
a phone handset.

\- If using a computer with speakers and a separate microphone, use a
headset or phone handset instead.

\- Lower the output volume on the speaker or handset.

\- If using a separate microphone, point it away from any speakers where
call audio is outputting, and point it towards the caller or callee.

If the above adjustments do not help resolve this issue, continue
reading for additional troubleshooting
[https://support.twilio.com/hc/en-us/articles/360022008913-Troubleshooting-Call-Audio-Echo-Issues-Twilio-Programmable-Voice-Calls](https://support.twilio.com/hc/en-us/articles/360022008913-Troubleshooting-Call-Audio-Echo-Issues-Twilio-Programmable-Voice-Calls){rel="nofollow"}

### **Call Volume Issues** {#h_e925936d-a76e-40aa-9808-7f582d7153fa}

When a caller or callee reports that the volume of a call is either too
loud or too quiet, we typically classify this as a call audio **volume**
issue. These call volume issues are often caused by the hardware used,
including the positioning and levels of the speaker and/or microphone at
one end of the line.

For help troubleshooting audio volume issues, please
see [Troubleshooting Call Audio Volume Issues Twilio Programmable Voice
Calls](https://support.twilio.com/hc/en-us/articles/360025822253-Troubleshooting-Call-Audio-Volume-Issues-Twilio-Programmable-Voice-Calls){target="_self"}.

###  

### **Call Static** {#h_d407776c-96e6-4bb0-9928-9a0505a5f3b2}

When a caller or callee reports audio interference or background noise
on a call, we typically classify this as a call audio **static** issue.
These audio quality issues are often caused by the hardware used,
including the placement, positioning, and levels of the speaker and/or
microphone at one end of the line.

For help troubleshooting audio issues caused by static, please see
[Troubleshooting Call Audio Static Issues Twilio Programmable Voice
Calls](https://support.twilio.com/hc/en-us/articles/360025822793-Troubleshooting-Call-Audio-Static-Issues-Twilio-Programmable-Voice-Calls){target="_self"}.

 

### **Failed or Unsuccessful API Call Requests**

If you aren\'t seeing a record of your call, then there was likely an
incident, or an issue with with your API request. Try attempting to
place your call again
[https://support.twilio.com/hc/en-us/articles/360009804954-Simple-Example-for-Placing-Programmable-Voice-Calls](https://support.twilio.com/hc/en-us/articles/360009804954-Simple-Example-for-Placing-Programmable-Voice-Calls){rel="nofollow"},
and check for similar results.

When Twilio receives an invalid API request, we return a 400 Bad Request
response, along with a secondary 5-digit error code, and a message
explaining what the issue is. Here are the most common problems we see
for outbound voice calls:

  Error                    Issue                                                  Troubleshooting
  ------------------------ ------------------------------------------------------ --------------------------------------------------------------------------------------------------------------------------------------------------------------
  10001, 20003, or 20005   Invalid credentials, or project is suspended/closed.   Verify your project has an active balance by logging into Console, and that your request is using the correct Account SID and Auth Token.
  21203, 21215, or 32205   Destination is not allowed.                            You need to enable calling to this destination in Geo Permissions.
  21210, 21212, or 21213   From phone number is missing or invalid.               Verify your request has a valid Twilio phone number on your project, or a verified non-Twilio caller ID in the From parameter, with proper E.164 formatting.
  21201, 21202, or 21211   To phone number is missing or not supported.           Verify your request has a non-premium or shared cost phone number in the To parameter, with proper E.164 formatting.
  21214, or 21217          To phone number is invalid or can\'t be reached.       Verify your request has a valid phone number in the To parameter, with proper E.164 formatting.

If your error is not listed here, you can find the list of 2XXXX REST
API errors along with instructions for resolving these issues in our API
Errors and Warnings Dictionary
[https://www.twilio.com/docs/api/errors#2-anchor](https://www.twilio.com/docs/api/errors#2-anchor){rel="nofollow"}.
