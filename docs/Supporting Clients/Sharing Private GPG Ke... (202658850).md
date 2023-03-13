# Sharing Private GPG Keys with GnuPG Privacy Assistant (GPA)

If you need multiple people to be able to decrypt high security exports
or need to transfer the GPG key from one computer to another and are
using GPA to manage keys and encryption/decryption in a Windows desktop
environment, please follow these simple steps:

1.  [Ensure the computer you want to transfer the key to has the GPA
    program (available at
    <https://www.gpg4win.org/>)]{style="font-size: 11px;"}
2.  [On the PC that has the private key, open GPA Key Manager and select
    the key to be shared - Note: the key information should show: \"The
    key has both a private and a public
    part\"]{style="font-size: 11px;"}
3.  [Select menu Keys \> Backup (do NOT choose Export as this will only
    export the public part and you need the public and private
    keys)]{style="font-size: 11px;"}
4.  [Save the key (e.g. secret-key-KEYID.asc) to a USB drive.\
    ]{style="font-size: 11px;"}
5.  [On the computer you want to transfer the key to, open GPA Key
    Manager and select Keys \> Import
    Keys\...]{style="font-size: 11px;"}
6.  [Browse to the key you\'ve saved on the USB drive (e.g.
    secret-key-KEYID.asc) and Open.]{style="font-size: 11px;"}
7.  [The confirmation message should display \"\...1 public keys
    imported\... 1 secret keys imported\...\"]{style="font-size: 11px;"}
8.  [Once the key is successfully on the new computer, delete the key
    from the USB drive and empty the trash on that
    computer.]{style="font-size: 11px;"}

We recommend consulting your IT Security administrator on the above
process. If keys are shared it is particularly important to include the
shared key\'s management in your security procedures.
