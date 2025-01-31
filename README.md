# SmartRecon
SmartRecon tool is designed to improve efficiency at the initial stage of reconnaissance on an organization by utilizing 43 unique Google Dorks techniques along with multiple other open-source tools. There is no doubt that reconnaissance is the first and most important step in bug hunting or any type of penetration testing. It helps the attacker gain some rough information about the organization, which can further provide insights into estimating the organization's security maturity and the amount of controls in place.

This tool works best when combined with your natural strategy for hunting bugs. In this situation, the focus is on saving time, so the target organization’s information can be quickly captured without a need to memorize the commands. Moreover, it can help you formulate a strategy to quickly gain access to the target.

![image](https://github.com/user-attachments/assets/a119f41d-3751-4772-beb7-9e6489570cd8)

# How to use
Step 1: Enter the target domain in the input field.

Step 2: HOLD your CTRL and Click on any of the buttons.

That's all.

Note: Remember to HOLD your CTRL while you are clicking the buttons. 
It will open a new tab for each button clicked and it will not directly swap you to those tabs opened (which means you will still stay on the SmartRecon page). Therefore, it helps you to save a lot of time from swapping the pages between SmartRecon and those opened new tabs when you still have other buttons want to click.

# Techniques

1. Directory Listing: Finding open directories using Google Dork on your target organization helps one to understand the directory structure on the web server. It may reveal sensitive information or it may lead to information disclosure.

2. Configuration Files: Most configuration files are known to contain highly sensitive data such as hardcoded passwords, sensitive drive locations, or even API tokens which, if leaked, can enable the user to gain privileged access to the internal resources.

3. Database Files: These are data files that comprise the contents of the database. They are very important because they are used to store the data in a structured way into a file in different tables and fields. As per the context of the web application these files may also contain sensitive information.

4. Log Files: These are particularly vital for some context-sensitive applications as log files sometimes record every magic the user performed on the application. Best files to look for session cookies or other types of tokens.

5. Backup and Old Files: Backup files are original copies of the critical systems. They are good to dig deeper as they contain sensitive data such as PII or access to sensitive records.

6. Login Pages: It is extremely important to identify login pages of your target organization to perform brute-force attempts or trying default credentials to gain further access to organization resources.

7. SQL Errors: Mistakes in SQL statements can expose confidential details concerning the backend. This can allow an attacker to conduct enumeration regarding the kinds of databases present and determine whether the application is susceptible to validation input attacks which may lead to SQL Injection. 

8. Apache Config Files: An Apache HTTP Server is configured by placing directives in the Apache Server's plain text configuration files. These directives have to do with the various options of the server. The main configuration file is usually called httpd.conf. Also, other config files may be included by the use of the Include directive, and many config files may be included through the use of wildcards. Any directive may be placed in any of these configuration files. Depending on the entries in these config files it may reveal database connection strings, usernames and passwords, the internal workings, used and referenced libraries, and business logic of the application. 

9. Robots.txt File: A Robots.txt file is meant to give instructions regarding the web robots on how to crawl pages on their website. Based on what is contained in the file an attacker may stumble upon folders and files that have been hidden.

10. Publicly Exposed Documents: Such documents can be used to obtain metadata information.

11. phpinfo(): Exposing phpinfo() on its own isn't necessarily a risk, but in combination with other vulnerabilities could lead to your site becoming compromised. Additionally, module versions could make attackers life easier when targeting application using newly discovered exploits.

12. Finding Backdoors: This can help one to identify website defacements or server hijacking-related issues. By exploiting the open redirect vulnerability on the trusted web application, the attacker can redirect victims to a phishing page.

13. Install/Setup Files: Such files allow an attacker to perform enumeration on the target organization. Information gathered using these files can help discover version details which can then be used to perform the targeted exploit.

14. Open Redirects: With these, we look at various known parameters vulnerable to open redirect-related issues.

15. Test Cross Domain: Look for misconfigured crossdomain.xml files on the target organization.

16. 3rd Party Exposure: Here we are looking for exposure of information on third-party sites such as Codebeautify, Codeshare, and Codepen.

17. Check Security Headers: Identify quickly if the target site is using security-related headers in the server response.

18. Web-Check: Get an insight into the inner-workings of a given website, to uncover potential attack vectors, analyze server architecture, view security configurations, and learn what technologies a site is using, such as IP info, SSL chain, DNS records, cookies, headers, domain info, search crawl rules, page map, server location, redirect ledger, open ports, traceroute, DNS security extensions, site performance, trackers, associated hostnames, carbon footprint.

19. What CMS: Identify the version and type of CMS used by a target organization for targeted enumeration and exploit research.

20. WordPress: WordPress is an open-source CMS written in PHP. WordPress has thousands of plugins to build, customize, and enhance websites. There are numerous vulnerabilities in these plugins.

21. WordPress includes: WordPress-related exposure helps you gain access to sensitive files and folders.

22. Find Pastebin Entries: This shows you the results related to the target organization on the Pastebin site. This could be passwords or any other sensitive information related to the target organization.

23. .HTACCESS / Sensitive Files: Look for sensitive file exposure. This may indicate a server misconfiguration.

24. Find Subdomains: The subdomain helps you expand the attack surface on the target organization. There are numerous tools available to automate the process of subdomain enumeration.

25. Find Sub-Subdomains: Identify sub-sub domains on the target organization using Google Dork,

26. OpenBugBounty: Look for publicly exposed security issues on the OpenBugBounty website.

27. YouTube: Look for any recent news on YouTube.

28. Employees on LinkedIn: Identifying employee names on LinkedIn can help you build a username list when it comes to password spraying attacks.

29. GitLab: Quickly look for sensitive information on the GitLab.

30. GitHub: Quickly look for sensitive information on the GitHub.

31. GitHub Gist Searches: Quickly look for sensitive information on the Gist pastes.

32. .git Folder: Source code exposure. it's possible to download the entire repository content if accessible.

33. Stackoverflow: Source code exposure or any technology-specific questions mentioned on the Stackoverflow.

34. Reddit: Information about the particular organization on the Reddit platform.

35. Wayback Machine: Look for archived files to access old files.

36. Reverse IP Lookup: Reverse IP Lookup lets you discover all the domain names hosted on any given IP address. This will help you to explore the attack surface for a target organization.

37. Cloud Storage and Buckets: Google CSE for various cloud storages - aws, digitalocean, backblaze, wasabi, rackspace, dropbox, ibm, azure, dreamhost, linode, gcp, box, and mailru.

38. s3 Buckets: Open s3 buckets.

39. PublicWWW: Source code search engine indexes the content of over 200 million websites and provides a query interface that lets the caller find any alphanumeric snippet, signature, or keyword in the web pages ‘HTML’, ‘JavaScript’ and ‘CSS’ style sheet code.

40. Censys (Domains & Certs): Search engine for finding internet devices. We will use this to look for additional sub-domains using various endpoints on Censys.

41. Shodan: Search engine for Internet-connected devices

42. CT Logs: Certificate Transparency (CT) is an Internet security standard and open-source framework for monitoring and auditing digital certificates. It can be used to look for additional sub-domains for a targeted organization.
