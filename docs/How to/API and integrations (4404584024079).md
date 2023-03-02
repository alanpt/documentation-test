# API and integrations

The Evergiving API allows you to fetch pledge data from an Account in
Evergiving, automatically on a schedule or at near to real-time.
Evergiving has a sophisticated set of features that give you control
over exactly what pledges, and exactly what data in those pledges, the
API User can retrieve.\
See https://www.evergiving.com/developer/#the-evergiving-api for more
information about the Evergiving API and how to test it.

The API was traditionally for exporting pledge data, but we now have the
lead import available by API.

The basic workflow is for the customer to create a token in relevant
customer and we provide the schema ID and campaign ID to the charity /
agency to use with the token they created in their calls.

**API Schemas**

When a customer requests an API schema to be built:

1.  Get the customer to create an API user in their account.

2.  The customer can then provide the Token, Campaign ID and Schema ID
    to the charity.

3.  Create a schema with the Output Type set to \'JSON API\' - the rest
    of the schema creation is as per usual

4.  Add the API schema template to their campaign as you do any other
    schema.

5.  Test, test, test. You can submit a few test pledges on their
    campaign in production and then create a condition for the schema so
    only those two pledges are exported. If everything works as
    expected, you can just remove the conditions and add in whatever
    conditions are needed to control what pledges are available to the
    charity.

There is weight limiting so they can only retrieve 100 pledges at a time
in the one call.

**After_version number**

As part of the API implementation, the \'after_version number\', a
unique number that increases sequentially is created. It clicks up 1 any
time a pledge is updated. The API users store the
next_batch_after_version and can use it to return new pledges, as well
as any records that have been changed since the last time that pledge
was called. So if the charity gets real time data from Waysact, they can
also retrieve updates made to those pledges they have already extracted.

**next_batch_after_version number** The next_batch_after_version is a
parameter that is returned in the response that contains which version
you need to pass on the subsequent call to get the next batch of
pledges.

**Rate limiting**

The rate limit is one API call per 5 seconds but API rate limiting is
not per client but per account. API access is granted on a per account
level, so the rate limiting is linked to the same object (account). If
the account owners give API tokens to their customers, then it's just a
question of respecting the "retry_after" because you can't know if
there's just been another API request within the last 5 seconds that
would have depleted your "rate bucket". It should not be a big deal when
you get a 429 message back ... you just need to respect the
"retry_after" you get back from the API response and sleep.

**Testing API** Since the output in the terminal is usually pretty hard
to process, we use an app called Paw on the mac
[https://paw.cloud](https://paw.cloud){rel="nofollow"}. It's great for
testing APIs: Paw is a full-featured HTTP client that lets you test and
describe the APIs you build or consume. It has a beautiful native macOS
interface to compose requests, inspect server responses, generate client
code and export API definitions.

[https://paw.cloud](https://paw.cloud){rel="nofollow"}

**API and Lead Exclusion**

To exclude leads from the API and prevent errors you can add the AR
Condition `pledges.pledge_type = 'captured'`
