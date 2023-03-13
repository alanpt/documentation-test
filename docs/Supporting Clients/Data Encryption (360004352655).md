# Data Encryption

If you want to export full credit card numbers out of Evergiving,
you\'ll need to use an encrypted export. Some charities choose to still
encrypt their export files even when the export doesn\'t contain the
full card number as it is very secure way of transmitting their donor
data.

There are two types of encryption - symmetric and asymmetric. Evergiving
uses asymmetric encryption, powered by GPG/PGP, to protect your data
exports. PGP is short for \'Pretty Good Privacy\' and GPG stands for
\'GNU Privacy Guard\'.

Charities create the key by downloading the program from
[http://www.gpg4win.org/](http://www.gpg4win) if they are using Windows
or if they are using Macs they can download the program from
<https://gpgtools.org/>. When they have created their key they can
upload to Basecamp (it\'s <https://),> to a keyserver
<https://pgp.mit.edu/> or email it in to <support@evergiving.com>. Once
we have the key, we need to call the person who created it and confirm
the Fingerprint. Once confirmed, we sign their key with our key and
upload it into Evergiving. A copy of the key should be kept in the
campaign page so there is a record <https://waysact.me/admin/campaigns>
and the key can be copied from account to account if the charity uses a
different agency. 

The GPG key is now also stored in Evergiving (Account -\> GPG Public
keys) and is needed there so it can associated with an export template.

There is no password reset, so if a user forgets the password they
entered when they created the key, the key should be deleted and a new
key created.

**Sharing your GPG key**

An export can only use one key at a time, however it is recommended that
at least two people within a charity have access to decrypt files so if
one person is busy / out of the office, the other person can decrypt the
files. Encrypted export links expire after 24 hours.

If you need multiple people to be able to decrypt high security exports
and are using GPA to manage keys and encryption/decryption in a Windows
desktop environment, please follow these simple steps:

\- On the PC that has the private key, open GPA Key Manager and select
the key to be shared. Note: the key information should show: \"The key
has both a private and a public part\"\
- Select menu Keys \> Backup (do NOT choose Export as this will only
export the public part)\
- Save the key (e.g. secret-key-KEYID.asc) to a USB drive that you
transfer to the new PC.\
- On the new PC, open GPA Key Manager and select Keys \> Import
Keys\...\
- Browse to the key you\'ve saved on the USB drive (e.g.
secret-key-KEYID.asc) and Open.\
- The confirmation message should display \"\...1 public keys
imported\... 1 secret keys imported\...\"\
- Once the key is successfully on the new computer, delete the key from
the USB drive.\
 \
We recommend consulting your IT Security administrator on the above
process. If keys are shared it is particularly important to include the
shared key\'s management in your security procedures.

 

 
