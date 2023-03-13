# Record_source / Record_type / Interaction_type

Record types were refactored in 2020 through
<https://github.com/waysact/evergiving/issues/5725>. We have backfilled
pledges with the new definitions of record_type. The `interaction_type`
is an event that changes the `record_type`, for example a `walked_away`
changes the `pledge` into a `lead`. Where a change is made to a record,
any data saved or call attempt made, by a call center agent, apply the
interaction_type `cc_updated`. Where a record is changed from
`record_type_lead` to `record_type_pledge` or
`record_type_pledge_one_off`, by a call center agent, apply the
`interaction_type` `cc_updated`.

 

  ---------------------------- ------------------------------------------------
  record_source                Label
  record_source_sd             Record Source - Social Distancing Form Capture
  record_source_f2f            Record Source - Face to Face Form Capture
  record_source_imported       Record Source - Imported Lead
  record_source_digital        Record Source - Digital Form Capture
  record_type_lead             Record Type - Lead
  record_type_pledge           Record Type - Recurring Donation
  record_type_pledge_one_off   Record Type - Single Donation
  call_center_saved            Call Center Updated
  call_center_converted        Call Center Converted
  ---------------------------- ------------------------------------------------

 

  ------------------------ ---------------------------- ----------------------- -------------------------------------------------------------------------
  record_source            record_type                  interaction_type        Source Label
  record_source_sd         record_type_pledge           call_center_converted   Number of converted leads to recurring donations from social distancing
  record_source_sd         record_type_pledge_one_off   call_center_converted   Number of converted leads to one off donations from social distancing
  record_source_f2f        record_type_pledge           call_center_converted   Number of converted leads to recurring donations from face to face
  record_source_f2f        record_type_pledge_one_off   call_center_converted   Number of converted leads to one off donations from face to face
  record_source_imported   record_type_pledge           call_center_converted   Number of converted leads to recurring donation from lead import
  record_source_imported   record_type_pledge_one_off   call_center_converted   Number of converted leads to one off donation from lead import
  record_source_digital    record_type_pledge           call_center_converted   Number of converted leads to recurring donation from digital
  record_source_digital    record_type_pledge_one_off   call_center_converted   Number of converted leads to one off donation from digital
  \`any\`                  record_type_pledge           call_center_converted   Number of converted leads to recurring donation total
  \`any\`                  record_type_pledge_one_off   call_center_converted   Number of converted leads to one off donation total
  \`any\`                  \`any\`                      call_center_converted   Number of converted leads total
  ------------------------ ---------------------------- ----------------------- -------------------------------------------------------------------------

 \
