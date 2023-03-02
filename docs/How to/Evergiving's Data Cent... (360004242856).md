# Evergiving\'s Data Centers & Technical specifications

Evergiving\'s physical infrastructure is hosted and managed within
Amazon\'s secure data centers and uses Amazon Web Service (AWS)
technology. Amazon continually manages risk and undergoes recurring
assessments to ensure compliance with industry standards. Amazon\'s data
center operations have been accredited under:\
ISO 27001\
SOC 1/SSAE 16/ISAE 3402 (Previously SAS 70 Type II)\
PCI Level 1\
FISMA Moderate\
Sarbanes-Oxley (SOX)

 

# Physical Security

Evergiving uses ISO 27001 and FISMA certified data centers managed by
Amazon. Amazon has many years of experience in designing, constructing,
and operating large-scale data centers. This experience has been applied
to the AWS platform and infrastructure.

AWS data centers are housed in nondescript facilities, and critical
facilities have extensive setback and military grade perimeter control
berms as well as other natural boundary protection.\
Physical access is strictly controlled both at the perimeter and at
building ingress points by professional security staff utilizing video
surveillance, state of the art intrusion detection systems, and other
electronic means.\
Authorized staff must pass two-factor authentication no fewer than three
times to access data center floors. All visitors and contractors are
required to present identification and are signed in and continually
escorted by authorized staff.\
Amazon only provides data center access and information to employees who
have a legitimate business need for such privileges.\
When an employee no longer has a business need for these privileges, his
or her access is immediately revoked, even if they continue to be an
employee of Amazon or Amazon Web Services.\
All physical and electronic access to data centers by Amazon employees
is logged and audited routinely.\
For additional information see: <https://aws.amazon.com/security>

 

# Evergiving Network Security Specifications

The Evergiving AWS environment has been architected to implement network
segmentation to logically isolate critical data and internal
applications from public-facing services. All system components are
hardened according to the Waysact Infrastructure Configuration Standards
that are aligned with the PCI requirements, and based upon CIS/NIST
standards.

# Application Security

The Evergiving application uses SSL to encrypt all transmission of data.
Sensitive financial information at rest is encrypted throughout all
steps of the application data flow and we employ tamper proof
cryptographic modules (HSMs) for crypto processing and to provide
logical and physical protection from unauthorised disclosure of key
encrypting keys.

# Evergiving Legal Compliance (International Standards Compliance)

Evergiving continuously monitors changes in regulation in every country
we operate in. We employ appropriate technical and organizational
measures to ensure customers are able to fully comply with local data
protection legislation. These include but are not limited to:\
- EU Directive 95/46/EC and all derivative legislation;\
- the Australian Privacy Act 1988;\
- the New Zealand Privacy Act 1993; and\
- Canada\'s Personal Information Protection and Electronic Documents Act
(PIPEDA).

If you\'d like to know more or have any questions about data protection
and how privacy regulations in your region apply to face-to-face
fundraising please email us at <dataprotection@waysact.com>

# Environmental Safeguards

**Fire Detection and Suppression**\
Automatic fire detection and suppression equipment has been installed to
reduce risk. The fire detection system utilizes smoke detection sensors
in all data center environments, mechanical and electrical
infrastructure spaces, chiller rooms and generator equipment rooms.
These areas are protected by either wet-pipe, double-interlocked
preaction, or gaseous sprinkler systems.

**Power**\
The data center electrical power systems are designed to be fully
redundant and maintainable without impact to operations, 24 hours a day,
and seven days a week. Uninterruptible Power Supply (UPS) units provide
back-up power in the event of an electrical failure for critical and
essential loads in the facility. Data centers use generators to provide
backup power for the entire facility.

**Climate and Temperature Control**\
Climate control is required to maintain a constant operating temperature
for servers and other hardware, which prevents overheating and reduces
the possibility of service outages. Data centers are conditioned to
maintain atmospheric conditions at optimal levels. Monitoring systems
and data center personnel ensure temperature and humidity are at the
appropriate levels.

**Management**\
Data center staff monitor electrical, mechanical and life support
systems and equipment so issues are immediately identified. Preventative
maintenance is performed to maintain the continued operability of
equipment. For additional information see:
https://aws.amazon.com/security

# Network Security

**Firewalls**\
Firewalls are utilized to restrict access to systems from external
networks and between systems internally. By default all access is denied
and only explicitly allowed ports and protocols are allowed\
based on business need. Each system is assigned to a firewall security
group based on the system's function. Security groups restrict access to
only the ports and protocols required for a system's specific function
to mitigate risk.

\
Host-based firewalls restrict applications from establishing localhost
connections over the loopback network interface to further isolate
Waysact. Host-based firewalls also provide the ability to further limit
inbound and outbound connections as needed.

**DDoS Mitigation**\
Our infrastructure provides DDoS mitigation techniques including TCP Syn
cookies and connection rate limiting in addition to maintaining multiple
backbone connections and internal bandwidth capacity that exceeds the
Internet carrier supplied bandwidth. We work closely with our providers
to quickly respond to events and enable advanced DDoS mitigation
controls when needed.

**Spoofing and Sniffing Protections**\
Managed firewalls prevent IP, MAC, and ARP spoofing on the network and
between virtual hosts to ensure spoofing is not possible. Packet
sniffing is prevented by infrastructure including the hypervisor which
will not deliver traffic to an interface which it is not addressed to.
Waysact utilizes application isolation, operating system restrictions,
and encrypted connections to further ensure risk is mitigated at all
levels.

**Port Scanning**\
Port scanning is prohibited and every reported instance is investigated
by our infrastructure provider. When port scans are detected, they are
stopped and access is blocked.

# Data Security

**Customer Applications**\
The Waysact platform runs within its own isolated environment. This
restrictive operating environment is designed to prevent security and
stability issues. The self-contained environment isolates processes,
memory, and the file system using LXC while host-based firewalls
restrict external applications from establishing local network
connections.

**Waysact Postgres**\
Your data is stored in access-controlled databases. Each database
requires a unique username and password that is only valid for that
specific database and is unique to Waysact. Connections to databases
require SSL encryption to ensure a high level of security and privacy.

# System Security

**System Configuration**\
System configuration and consistency is maintained through standard,
up-to-date images, configuration management software, and by replacing
systems with updated deployments. Systems are deployed using up-to-date
images that are updated with configuration changes and security updates
before deployment. Once deployed, existing systems are decommissioned
and replaced with up-to-date systems.

**System Authentication**\
Operating system access is limited to Waysact staff and requires
username and key authentication. Operating systems do not allow password
authentication to prevent password brute force attacks, theft, and
sharing.

\
**Vulnerability Management**\
Our vulnerability management process is designed to remediate risks
without customer interaction or impact. Waysact is notified of
vulnerabilities through internal assessments, system patch monitoring,\
and third party mailing lists and services. Each vulnerability is
reviewed to determine if it is applicable to Waysact's environment,
ranked based on risk, and assigned to the appropriate team for
resolution.\
New systems are deployed with the latest updates, security fixes, and
Waysact configurations and existing systems are decommissioned as
customers are migrated to the new instances. To further mitigate risk,
each component type is assigned to a unique network security group.
These security groups are designed to only allow access to the ports and
protocols required for the specific\
component type.

**Backups**\
The Waysact platform is automatically backed up as part of the
deployment process on secure, access controlled, and redundant storage.
We use these backups to automatically bring Waysact back online in the
event of an outage.

**Databases**\
Continuous Protection keeps data safe. Every change to your data is
written to write-ahead logs, which are shipped to multi-datacenter,
highdurability storage. In the unlikely event of unrecoverable hardware
failure, these logs can be automatically \'replayed\' to recover the
database to within seconds of its last known state. We have additional
daily backups for 7 days and then 5 weekly backups for a month in total.
These are stored offsite in an encrypted high-durability storage.

**Configuration and Meta-information**\
Configuration and meta-information is backed up every minute to the same
high-durability, redundant infrastructure used to store database
information.

**Waysact Platform**\
From our instance images to our databases, each component is backed up
to secure, access-controlled, and redundant storage. Our platform allows
for recovering databases to within seconds of the last known state,
restoring system instances from standard templates, and deploying
applications and data. In addition to standard backup practices,
Waysact's infrastructure is designed to scale and be fault tolerant by
automatically replacing failed instances and reducing the likelihood of
needing to restore from backup.

# **Disaster Recovery**

**Application and Databases**\
Our infrastructure automatically restores databases in the case of an
outage. The platform is designed to dynamically deploy within the cloud,
monitor for failures, and recover failed platform components.

**Waysact Platform**\
The Waysact platform is designed for stability, scaling, and inherently
mitigates common issues that lead to outages while maintaining recovery
capabilities. Our platform maintains redundancy to prevent\
single points of failure, is able to replace failed components, and
utilizes multiple data centers designed for resiliency. In the case of
an outage, the platform is deployed across multiple data centers using
current system images and data is restored from backups. Issues are
reviewed\
to understand the root cause, impact to customers, and improve the
platform and processes.

**Customer Data Retention and Destruction**\
Our infrastructure provider uses a process designed to prevent customer
data exposure through, and manages, decommissioning hardware. AWS uses
techniques outlined in DoD 5220.22-M ("National\
Industrial Security Program Operating Manual ") or NIST 800-88
("Guidelines for Media Sanitization") to destroy data. For additional
information see: https://aws.amazon.com/security

**Access to Customer Data**\
Customer data is access controlled and all access by Waysact staff is
accompanied by customer approval, reason for access, actions taken by
staff, and support start and end time.

**Security Staff**\
Our security team is lead by the Chief Technology Officer (CTO) and
includes staff responsible for application and information security. The
security team works closely with all staff at Waysact and our customers
to address risk and continue Waysact's commitment to trust.

**Encrypt Data in Transit**\
We enable HTTPS and SSL database connections to protect sensitive data
transmitted to and from Waysact.

**Encrypt Sensitive Data at Rest**\
Waysact encrypts stored files and data within databases to meet data
security requirements. Data encryption uses industry standard encryption
and best practices.

**Secure Development Practices**\
Waysact applies development best practices to mitigate known
vulnerability types such as those on the OWASP Top 10 Web Application
Security Risks.

\
**Authentication**\
To prevent unauthorized account access Waysact uses a strong passphrase
and SSH keys. Waysact stores SSH keys securely to prevent disclosure,
replaces keys if lost or disclosed, and uses RBAC to\
invite contributors rather than sharing user accounts.

**Logging**\
Logging is critical for troubleshooting and investigating issues. We
record and maintain detailed system and user logs.
