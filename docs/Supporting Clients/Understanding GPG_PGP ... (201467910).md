# Understanding GPG/PGP for normal people!

**What is a GPG/PGP key, it sounds scary!**

We have found that the easiest way to demystify PGP is to show
people what a key looks like. It is just a big jumble of letters and
numbers in a block of text, and not scary at all!

For example, here is the **Public Key** of our Chief Security Officer:

![](https://support.waysact.com/hc/en-us/article_attachments/200909790/Screen_Shot_2014-06-26_at_17.24.13.png){width="460"
height="600"}

Anything encrypted with this big block of letters and numbers can only
be decrypted with its pair, the **Private Key.** I was going to paste
our Chief Security Officer\'s private key here but he thought that would
be a bad idea and said no. I\'m kidding of course, the private key is
very precious and should be stored and used according to good security
practice. His is excellent. Take my word for it though, if you squint
while looking at them you wouldn\'t be able to tell the difference.

**OK, so how do I create and use these keys?**

If you own a cat, by now you\'re probably thinking the above looks
familiar and there may actually be a method to their antics. There
isn\'t. Not even a trillion cats sitting on a trillion keyboards\... So
you\'ll need some software.

If you are using a Mac, you can download a great set of tools
from [https://gpgtools.org/](https://gpgtools.org/){target="_blank"}.
It\'s quite easy to create keys and encrypt/decrypt/sign etc.

If you are using Windows, please [see the attached help
file](https://support.waysact.com/hc/en-us/article_attachments/201325824/GPG_Help.pdf){target="_blank"}
to download and install GPA from
[http://www.gpg4win.org/](http://www.gpg4win.org/){target="_blank"}.

Alternatively you can use a command line interface but I\'m guessing if
you\'re reading this you won\'t be using that.

**Hold on, you just said \'sign\'! What\'s that?!**

OK, well as an example, if our Chief Security Officer \'signs\' a
message, it means his private key has been used and I can be sure that
message has come from him, because I know he\'s very careful with his
private key.

**So what\'s a fingerprint for?**

Public keys should really be exchanged over secure-ish channels. You can
upload them on Basecamp when you start (it\'s https://) or if you\'re
really keen upload them to a keyserver. Our CEO\'s
is http://keyserver.linux.it/pks/lookup?op=get&search=0x6C4A99C2505975CF.
However, unless you are face to face exchanging keys, you should verify
that the **Public Key** sent is the **Public Key** received. Why?
Because of the potential for a man or woman in the middle intercepting
the **Public Key **and pretending to be either party for ever more.
Reading out the fingerprint on a phone call, and making sure the
fingerprints match is a very effective way to prevent this from
happening.

**I forgot my password!**

\'There\'s a password too?\' Yes, this is the last line of defence for
your private key - the algorithm builds your password in, a bit like a
check digit or the last piece in a jigsaw puzzle. If you lose your
password the keys are dead forever. However, do not fear as this is not
the end of the world. Simply create a new set of keys (guess what,
they\'re free!), follow the process to share the **Public Key** all over
again and the person sending you the valuable stuff (us) can encrypt
said stuff again with the new **Public Key** and send it to you.

**What\'s the difference between PGP and GPG?**

Don\'t worry there\'s no reason to know, just that they\'re
interchangeable and kind of mean the same thing. However, this is
hopefully so easy you\'re going to use GPG (or PGP) for every message
you send! Please do, security is important and actually, the people
behind these projects are fascinating and well worth a bit of extra
research to find out more about.

**I\'m obviously not normal, I still don\'t get it!**

Don\'t worry you\'re in good company - and honestly it took me a while
to get this at first. Please email us at support@waysact.com and someone
will happily call you to talk you through it.

 
