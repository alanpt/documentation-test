# Call Centre General Troubleshooting

When a user reports issues, there are many factors in their environment
we need to check :

1.  **Hardware**

-   What is your computer/tablet like? Is it powerful enough? Can you
    try another device?
-   Is your operating system and browser using the latest version
    available? If not, please update and try again.
-   Log out and shut device down properly overnight.
-   Using a headset will cut out echo. Wired headsets are usually better
    than wireless because wireless headsets could run out of battery,
    drop signal or have other interference.
-   Give the Evergiving website (manage.evergiving.com) permission to
    use microphone:
    -   Chrome (desktop/Android):
        <https://support.google.com/chrome/answer/2693767>
    -   Firefox (desktop):
        <https://support.mozilla.org/en-US/kb/how-manage-your-camera-and-microphone-permissions>
    -   Mobile Safari (iPad/iPhone):
        -   -   Open the Settings app
            -   Tap on Safari \> Camera
            -   Scroll down to Camera & Microphone
            -   Confirm that \"Ask\" or \"Allow\" is checked 
            -   Retry the \"Refresh the call\" steps, above.

2.  **Connection to internet**

Speed is not everything, speed tests can be useful as a general check
but a better test is the Twilio network test which will connect to the
same servers used to make the calls: <https://networktest.twilio.com/>.
Please also run a RTC test and address any warnings:
<https://test.webrtc.org/>. If you are having consistent issues, try to
run the network test as soon as possible after experiencing the issue. 

The speed needed for a phone call is only around 100kb/s - most internet
providers will be able to cope with this.

Wired internet is likely to be the most stable, for home internet, fibre
is best, followed by Cable internet then DSL over phone line.

For mobile data, 5g/4g/lte are best and the more bars of signal the
better.  Mobile data is subject to dropouts though and your phone/tablet
may switch to a different cell tower mid call which could impact the
stability of connection.

**Note** - through
<https://github.com/waysact/evergiving/issues/7184#issuecomment-899134877>
we will replace the common error \"There seems to be issues with your
network connection, you could try https://networktest.twilio.com or
https://test.webrtc.org to diagnose \... try reconnecting now\" with
\"Your internet just dropped. We\'ll reconnect in 1s.. reconnect now\".

3.  **Connection inside your home **

Important things to consider that can affect your internet stability:

-   Are there other people on your network? 
-   Are there other devices? 
-   What are they doing? 
-   Can they be switched off or limited to less activity while you are
    working?

Connections using Ethernet cables are best because they are less prone
to interference.

If you are on Wi-Fi - the distance to the access point (AP)/router and
line of sight are important: 

-   How far away are you from the AP - can you get closer or can you
    move the AP closer to where you are? 
-   Count the number of walls/floors between you and the AP - you will
    get the best connection when you can see the AP, second best when
    only one wall is in the way, etc\...

Also, if on Wi-Fi - are you close to your neighbours? Is the AP close to
an external wall?  How many other networks can you see if you search for
available networks?  The more networks you see, the more likely you are
to have interference from these.

If you are on mobile data, do you have an area of your house with
stronger signal?  Why not move there?  One additional bar of signal can
make a big difference.

Do you have access to your router\'s configuration (check for a sticker
under the router or search the internet for "\<your ISP\> router
username/password"), if you do, you could try tweaking some settings:

-There are QoS settings that can be made to prioritise traffic for voice
calls over other traffic see
<https://www.twilio.com/docs/voice/client/javascript/voice-client-js-and-mobile-sdks-network-connectivity-requirements>
for a list of IP addresses and ports used by the Twilio Client JS.

-Search the internet for instructions on \"How to optimise your wifi
channel\"

-Take a look if you can avoid "bufferbloat"
<https://en.wikipedia.org/wiki/Bufferbloat>

-Search the internet for other optimization settings for the make/model
of your router

Do you have a firewall restricting traffic - check the IP addresses and
ports listed under Twilio Client JS here are allowed
<https://www.twilio.com/docs/voice/client/javascript/voice-client-js-and-mobile-sdks-network-connectivity-requirements>

Your firewall should allow outgoing UDP to the public internet from the
browsers that will be using Twilio Client, and allow return traffic in
response. If you are operating a restricted network that requires you to
allow specific media IPs, our recommendation is to specify the region in
your application. If your router includes SIP Application Level Gateway
(ALG) function or Stateful Packet Inspection (SPI), disable both of
these functions.

-   You can find our fixed range of IP addresses, and examples of how to
    specify your region in code at [Twilio Client - Regions (Twilio
    Docs)](https://www.twilio.com/docs/voice/client/regions).
-   You can find port and bandwidth requirements in our article [What
    are Twilio Client\'s Network Connectivity
    Requirements](https://support.twilio.com/hc/en-us/articles/223180888-What-are-Twilio-Client-s-network-connectivity-requirements-).

4.  **General tips**

Any internet/network issue can just be temporary. If you experience an
issue and a refresh of the page won't cause issues (for example, if you
aren't on a call) then please refresh the page and see if that resolves
the issue. 

Phone issues can be temporary - the person on the other side might have
poor signal, run out of battery, press a button by mistake... phone
calls can drop and they will.

Try signing out, clearing your cookies / cache and restarting the
browser regularly, and after you have any issue.

If you have issues, try a different browser.  We recommend Chrome and
Firefox for desktops/laptops so if you are having issues, you can try
switching to an alternative browser.  

Dedicate a browser for Evergiving - e.g. if you use Firefox for day to
day use, browsing, email, etc then why not download Chrome or Safari
just for Evergiving use.

Only ever have Evergiving open in one browser and one tab at a time. As
an Agent you shouldn't have multiple Evergiving tabs open.

Please check your anti-virus software and make sure none of the settings
are blocking use of the microphone.

Please disable any browser extensions if you are having issues and see
if that resolves the issue.

 

**Twilio insights** can have some useful information
<https://support.twilio.com/hc/en-us/articles/360035018373-View-the-Voice-Insights-Summary-for-a-Call>
