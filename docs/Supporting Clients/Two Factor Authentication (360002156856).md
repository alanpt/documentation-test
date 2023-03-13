# Two Factor Authentication

[Need to copy images from
]{.wysiwyg-color-red}[[https://github.com/waysact/support-documentation/blob/master/internal/accounts/2FA.md]{.wysiwyg-color-red}](https://github.com/waysact/support-documentation/blob/master/internal/accounts/2FA.md)

 

Accounts are now able to add Two Factor Authentication. This applies
only to the Admin Operations users :

Admin Ops users (with appropriate permissions) can turn 2FA on for their
account in the Account Settings (Account -\> Account Overview -\> Enable
two factor authentication).

 

![Enable_account_2FA.png](https://support.waysact.com/hc/article_attachments/360005700515/Enable_account_2FA.png)

Admin Ops users (with appropriate permissions) can go to their Personal
settings and turn on 2FA for their user.

![Enable_user_2FA.png](https://support.waysact.com/hc/article_attachments/360005700535/Enable_user_2FA.png)

 

Once enabled, a user can turn off their own 2FA.

![Disable_own_2FA.png](https://support.waysact.com/hc/article_attachments/360005814536/Disable_own_2FA.png)

 

They see a QR Code that works with the Authy App and need to scan the QR
Code and then enter the code from the App into Evergiving.

![QR_Code.png](https://support.waysact.com/hc/article_attachments/360005814496/QR_Code.png)

 

The next time that user logs in they sign in as normal and are then
presented with the 2FA code box where they enter the code generated in
the App.

![Login_with_2FA.png](https://support.waysact.com/hc/article_attachments/360005814516/Login_with_2FA.png)

 

Admin Ops users (with appropriate permissions) can see which users have
2FA turned on in the Permissions Overview page

![2FA_permissions_table.png](https://support.waysact.com/hc/article_attachments/360005700575/2FA_permissions_table.png)

 

Super Admin users can edit an individual Admin Ops user and turn off 2FA
in cases where the user no longer has access to the phone to get the 2FA
code or there is some other technical issue preventing them access
**HOWEVER, ONLY WHEN THE REQUEST TO TURN IT OFF HAS COME FROM AN ACCOUNT
ADMIN THAT WE PERSONALLY KNOW. An Evergiving staff member turning off
2FA could make us negligent if there is a breach so we need to take this
very seriously**.

 

**NOTE** We still have some functionality left yet to :

-   add a nominated user to authorise Super Admins to turn off a
    particular user\'s 2FA
    <https://github.com/waysact/evergiving/issues/4603>
-   make 2FA and Campaign Managers accessing pledges mutually exclusive
    <https://github.com/waysact/evergiving/issues/4712> 

 
