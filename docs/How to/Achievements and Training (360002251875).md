# Achievements and Training

::: {#readme .Box-body .readme .blob .js-code-block-container .p-5 .p-xl-6 .gist-border-0}
::: {#readme .Box-body .readme .blob .js-code-block-container .p-5 .p-xl-6 .gist-border-0}
**ACHIEVEMENTS**

Set goals to your fundraisers and create challenges for your teams by
creating Achievements. Each Achievement can be unlocked if the
fundraiser reaches all the Achievement's conditions. See the video at
<https://www.evergiving.com/achievements/>

If an Achievement in unlocked, a number of points will be attributed to
the fundraiser. You can use the Achievement feature to add gamification
to your fundraising campaigns.

The Achievements are visible in the fundraiser's dashboard. Please
contact our support at
[support@evergiving.com](mailto:support@evergiving.com){target="_blank"
rel="noopener"} to enable this feature in your account.

Click on *Create Achievement* to add an Achievement, or click on an
existing achievement to edit it.

If you don't add a time range in the conditions, the default time range
will be the calendar month - at the beginning of next month, the
fundraiser will start over.

The leaderboard showing which Achievements have been achieved by which
Fundraisers is available at
[https://manage.evergiving.com/en-AU/fiel](https://manage.evergiving.com/en-AU/field/fundraisers)[d/fundraisers](https://manage.evergiving.com/en-AU/field/fundraisers)
by clicking on the Achievements icon:

[![Achievements.png](https://support.waysact.com/hc/article_attachments/360007393976/Achievements.png)](https://manage.evergiving.com/en-AU/field/fundraisers)

 

 

**TRAINING**
:::

A distribution job runs once a day (8AM Australia/Sydney), all
non-archived training modules are distributed, if a user already has the
training module they won\'t be assigned it twice. There is no
distinction between new and old training modules in the distribution -
new modules aren\'t given preference.

The master list of the free/paid Training Modules that are available and
what is not yet available is here
[https://www.evergiving.com/training/](https://www.evergiving.com/training/){rel="nofollow"}

There are some training modules that are free and available now. There
is an issue in the Sprint
(<https://github.com/waysact/evergiving/issues/3784>) for Super Admins
to copy Training from account to account but that could still be
weeks/months away. However until then, the master versions are contained
in
[https://manage.evergiving.com/en-AU/training?accountId=582](https://manage.evergiving.com/en-AU/training?accountId=582){rel="nofollow"}
and unfortunately it is a manual process to copy piece by piece. The
videos are stored offsite so if I haven't downloaded them already
(Dropbox -\> Waysact Shared -\> Support -\> Training videos) then just
ping Lisa to download the video.

There are some that are training modules that are free and 'coming soon'
which means they aren't available yet.

There are some that are paid and these go through James so he can
organise the invoice etc. Once the invoice is paid he may pass it back
to you to copy across.

**Creating training modules**

See the video <https://www.evergiving.com/training/>.

Step 1. Add a Name and Description for the Training Module

Step 2. Add Points to reward the trainee with; and for use in
leaderboards

Step 3. Give Fundraiser users time to complete this Training Module
after which they will be locked out of their forms (otherwise leave
*Time to complete (hours)* blank).\

Step 4. Set conditions by which the Training Module will be distributed:

*From date user created* - triggers x days, weeks or months after a user
has been added to Evergiving\
*From date user created (recurring)* - triggers every x days, weeks or
months after a user has been added to Evergiving; and repeats every x
days, weeks or months\
*Office* - only applies to users from a particular office\
*Role* - only applies to users with a particular role

Step 5. Upload an image or \'Show Library\' to choose an image from our
gaggle of monsters! Choose a colour if you want to colour scheme
Training Modules or need to match your brand.

Step 6. Add your content to either Info pages, or Quiz pages. You can
add as many of each as you like, just click on \'+ New\'. Info and Quiz
pages can have text, images and video.\
Quiz pages also have multiple choice selections, just click \'+ Add
option\' to add the possible answers and enable the tick next to each
correct answer.

Step 7. See how the Module will look on a tablet using the navigation
arrows in the Preview section, before hitting \'Add this Training
Module\' in the top right hand corner of the screen.

The leaderboard showing which Training modules have been achieved by
which Fundraisers is available at
[https://manage.evergiving.com/en-AU/fiel](https://manage.evergiving.com/en-AU/field/fundraisers)[d/fundraisers](https://manage.evergiving.com/en-AU/field/fundraisers)
by clicking on the Training icon:

![Training.png](https://support.waysact.com/hc/article_attachments/360007346255/Training.png)

\
**Papertrail troubleshooting\
**

You can search Papertrail with \`program:rails -\"/admin/jobs\"
training-module-distributor-bot\` and you\'ll see this sort of
information

INFO: \[pid=19190\] \[AUDIT\] User
training-module-distributor-bot@waysact.com with roles
\[\"super_admin\"\] hailing from unknown location created
TrainingModuleUser with ID 95190
:::
