# Donor Age Validation

The donor minimum age is set through a locale on the Date of Birth
Component :\
*required_age:18* and *required_age_is_mandatory:true*. Whatever age you
set as the minimum, the form will reject donors under that age.

You can add a soft warning (the question will be highlighted in pink on
the form and an error message displayed) for low and high ages, although
these won\'t prevent the form from being submitted, e.g. :

*[low_age_threshold:22]{.status_tag .active .gray .constraints_tag}*  
and  *[high_age_threshold:74]{.status_tag .active .gray
.constraints_tag}*

Further restrictions can be enforced through the Fundraiser profile
setup which has a field for \"Required Age for Donor\".

 
