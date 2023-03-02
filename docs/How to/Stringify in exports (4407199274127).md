# Stringify in exports

Stringify is an easy way to query what data is accessible to the
exports.

 

### Pledge exports

return JSON.stringify(pledge.calls);

return JSON.stringify(pledge.custom_inputs);

return JSON.stringify(pledge);

return JSON.stringify(pledge.products);

return JSON.stringify(pledge.child_sponsorship);

return JSON.stringify(pledge.instant_payment_transactions);

return JSON.stringify(pledge.user);

return JSON.stringify(pledge.lowsec_export_error);

 

### Timesheet exports

return JSON.stringify(pledge.teams\[0\]);

return JSON.stringify(pledge.team.locations\[0\].data);

return JSON.stringify(pledge.timesheet_hours);

*(through <https://github.com/waysact/evergiving/issues/7375> we\'ll
make return JSON.stringify(pledge.interactions) work with timesheets -
not yet available).*

###  

### Fundraiser exports

return JSON.stringify(pledge.teams);

return JSON.stringify(pledge.interactions);   *note, [Interactions
timestamps are stored in
UTC]{style="color: #1d1c1d; font-family: Slack-Lato, appleLogo, sans-serif; font-size: 15px; font-variant-ligatures: common-ligatures; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; text-align: left; text-indent: 0px; text-transform: none; white-space: normal; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: #f8f8f8; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial; display: inline !important; float: none;"}*

return JSON.stringify(pledge.pledges\[0\]);
