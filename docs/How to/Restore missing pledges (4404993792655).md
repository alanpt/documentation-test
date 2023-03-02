# Restore missing pledges

# Stenographical Screen

We have replaced the 'pledge submitted successfully' and \'pledge
securely saved on your device' messages with a Steganographical Thank
You message. Every time a pledge is saved an image will be generated
using steganography to write a back up of all of the pledge data and
front end application logs in to it, still fully PCI Compliant with RSA
encryption of the cardholder data.

The image contains the donor name, a simple \'Thanks!', the fundraiser
name and the date and time of the sign up. The \'Thanks\' can be updated
via the component resources.

When trying to restore a pledge using the stegano screen, we need the
original full size png image, however often the images are compressed
during sending. Customers should follow these steps to send the image to
us :

-   tap and hold on a single picture and then the tap copy button at the
    bottom of your screen.
-   head back to the home screen, open Mail, compose a new email, and
    paste the photo into the new message.

This will ensure that the photo isn\'t resized and will be the full high
resolution image.

**Note -** the image needs to be a png image, not a jpeg as the
stenographic data doesn't survive the lossy compression of JPG. There is
usually a setting on the devices that controls the format screenshots
are saved in, so customers should make sure their default format for
screenshots is png.

Moving forward for situations where a fundraiser reports a pledge going
missing, please could you ask they take a screenshot of the new \'Thank
You\' image. Securely embedded in the image is log data. The fundraiser
should continue taking/keeping screenshots until it occurs again (or
their confidence is restored) and provide us with the \'Thank You\'
image for the missing record. If we are provided this then we will be
able to restore the record and would have information from the device as
to what was happening at the time.

# Manual restore from Papertrail logs

Devops can manually restore pledges however card numbers are sanitised
in our logs so can\'t be restored.

Now Super Admins can restore pledges from
<https://www.waysact.me/super/pledge_restore/new> instead of asking
DevOps to restore it. Documentation at
[https://docs.google.com/document/d/1_xhT9Ktlquir6fAO4lbSh-D3olmUpoKrGUtRkh3mLU0/edit?usp=sharing](https://docs.google.com/document/d/1_xhT9Ktlquir6fAO4lbSh-D3olmUpoKrGUtRkh3mLU0/edit?usp=sharing){rel="nofollow"}

 

# Pledge Captures and Pledge Queues

As a Super Admin you can restore pledges from Pledge Captures if there
was an issue that prevented the pledge from saving
<https://www.waysact.me/admin/pledge_captures> and for pledges with the
*Fundraiser wasn\'t assigned to a team* issue they can be released from
Queued Pledges by going to the individual account -\> Pledges -\> Queued
Pledges and following the instructions to release the pledge
<https://www.waysact.me/admin/queued_pledges>.
