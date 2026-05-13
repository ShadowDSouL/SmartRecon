# SmartRecon v2

SmartRecon v2 is a passive reconnaissance tool designed for penetration testers and bug hunters to rapidly gather information about a target domain. By centralizing **50 techniques** — including Google Dorks, OSINT platforms, certificate transparency logs, cloud exposure checks, and more — it eliminates the need to memorize queries or manually open tools one by one.

> **No active scanning. No packets sent to the target. 100% passive.**

<img width="1920" height="1779" alt="image" src="https://github.com/user-attachments/assets/af940e0e-4ab7-4c84-865f-c031f9b82c2e" />

---

## What's New in v2

| Feature | v1 | v2 |
|---|---|---|
| Techniques | 43 | **50** |
| UI | Plain buttons | **Dark terminal UI** |
| Category filter | ✗ | ✓ |
| Live search | ✗ | ✓ |
| Quick Launch (fire full category) | ✗ | ✓ |
| Launch All visible | ✗ | ✓ |
| Fired/coverage tracking | ✗ | ✓ |
| Session launch log | ✗ | ✓ |
| Stats bar (total / launched / coverage %) | ✗ | ✓ |
| Reset state | ✗ | ✓ |

---

## How to Use

**Step 1:** Enter the target domain in the input field (e.g. `example.com`).

**Step 2:** **Hold `Ctrl` and click** any button to open the result in a background tab — you stay on SmartRecon and can keep clicking.

That's the core workflow. But v2 adds much more:

### Quick Launch
Fire every technique in a category at once with the Quick Launch bar:
- **All File Exposure** — directory listings, config files, DB dumps, log files, etc.
- **All Infrastructure** — Shodan, Censys, SSL, DNS, WHOIS, BuiltWith, etc.
- **All Social/Code** — GitHub, GitLab, Pastebin, LinkedIn, StackOverflow, etc.
- **All Subdomain Intel** — Google dorks, crt.sh, DNSDumpster, etc.
- **All Search Engines** — Google, Bing, Wayback Machine, PublicWWW, etc.
- **⚡ Launch All** — fires every visible technique simultaneously.

### Filter & Search
- Click a **category tab** to narrow the view to a specific group.
- Use the **search box** to filter techniques by name or description in real time.

### Tracking
- Buttons turn **green** after you click them so you never lose track of progress.
- The **stats bar** shows total techniques, how many you've launched, and % coverage.
- The **Launch Log** keeps a timestamped record of every technique fired this session.
- **Reset** clears all fired state when switching to a new target.

---

## Techniques (50)

### Files & Exposure
1. **Directory Listing** — Open directories via Google Dork (`intitle:"index of"`)
2. **Configuration Files** — `.xml`, `.conf`, `.cfg`, `.ini`, `.env`, etc.
3. **Database Files** — `.sql`, `.dbf`, `.mdb` dumps
4. **Log Files** — `.log` files that may contain session tokens
5. **Backup Files** — `.bak`, `.old`, `.backup` source copies
6. **Login Pages** — Auth endpoints (`/login`, `/admin`, `/signin`)
7. **SQL Errors** — Backend DB fingerprinting via exposed error messages
8. **Apache Config** — `httpd.conf` and `apache.conf` exposure
9. **Robots.txt** — Hidden directory hints from crawl rules
10. **Exposed Documents** — PDF, DOC, DOCX, CSV with metadata
11. **phpinfo() Leak** — PHP configuration disclosure
12. **Backdoor Files** — Web shells, defacement indicators
13. **Install/Setup Files** — Version info from readme, install, upgrade pages
14. **Open Redirects** — Known redirect parameters (`return=`, `next=`, `url=`)
15. **Cross Domain (.xml)** — Misconfigured `crossdomain.xml`
16. **.htaccess / Sensitive** — Server misconfiguration indicators
17. **3rd Party Exposure** — Target code on Codeshare, Codepen, Repl.it
18. **Error Pages** — Stack traces exposing tech stack details
19. **S3 Buckets Open** — Open/misconfigured S3 buckets
20. **Cloud Buckets** — AWS S3, Azure Blob, GCP Storage exposure

### Infrastructure
21. **Security Headers** — Missing/misconfigured HTTP security headers
22. **Web-Check** — Full recon dashboard (IP, SSL, DNS, ports, trackers, etc.)
23. **What CMS?** — CMS version and type fingerprinting
24. **WordPress Core** — WordPress vulnerability surface
25. **WordPress Includes** — Sensitive WP plugin/theme file exposure

26. **Reverse IP Lookup** — Domains sharing the same IP address
27. **Censys Domains** — Internet-wide scan results for the domain
28. **DNS Lookup** — All DNS record types (A, MX, TXT, NS, etc.)
29. **WHOIS Info** — Registration details and contact data
30. **BuiltWith** — Full technology stack fingerprinting

### Subdomains & Certs
31. **Find Subdomains** — Google dork subdomain enumeration (`site:*.domain.com`)
32. **Sub-Subdomains** — Deep subdomain search (`site:*.*.domain.com`)
33. **CT Logs (crt.sh)** — Certificate transparency subdomain discovery
34. **Censys Certs** — Certificate records on Censys
35. **SSL Checker** — SSL Labs full chain and configuration audit
<!--37. **DNSDumpster** — DNS recon and domain mapping
38. **Amass** — OWASP Amass subdomain enumeration reference
39. **Subfinder** — ProjectDiscovery subfinder reference -->

### Social & Code
36. **Find Pastebin** — Leaked passwords and secrets on Pastebin
37. **LinkedIn Employees** — Employee names for username list building
38. **GitHub** — Source code leaks and sensitive file search
39. **GitHub Gist** — Secret pastes on GitHub Gist
40. **.git Folder** — Exposed `.git` directory (full source download risk)
41. **GitLab** — Private repository blob search
42. **StackOverflow** — Code snippets and technology-specific questions
43. **Reddit Mentions** — Public organization discussions
44. **YouTube** — Recent news and announcements
45. **OpenBugBounty** — Publicly disclosed security issues

### Search Engines
46. **Shodan** — Exposed ports, services, and banners
47. **Wayback Machine** — Archived old files and forgotten endpoints
48. **PublicWWW** — Source code search across 200M+ websites
49. **Google Dork Base** — Full site index
50. **Bing Dork** — Bing site index (different crawl coverage)

---

## Why Passive Recon?

Passive reconnaissance gathers information **without directly interacting with the target**. No packets are sent to the target server — all queries go to third-party services (Google, Shodan, GitHub, etc.). This means:

- No IDS/IPS alerts on the target
- No footprint left in target access logs
- Legal and safe for initial scoping

---

## About

Built by [ShadowDSouL](https://github.com/ShadowDSouL)

Topics: `osint` `cybersecurity` `penetration-testing` `bug-bounty` `recon` `google-hacking` `google-dorking` `passive-reconnaissance` `information-gathering` `query-generator` `ctf-tools`
