document.querySelectorAll('button').forEach((button, index) => {
  button.addEventListener('click', (e) => {
    const targetDomain = document.getElementById('target-domain').value;
    const buttonText = e.target.textContent;

    switch (buttonText) {
      //First Column
      case 'Directory Listing':
        window.open('https://www.google.com/search?q=site:'+targetDomain+' intitle:index.of', '_blank', 'noopener,noreferrer');
        break;
      case 'Configuration Files':
        window.open('https://www.google.com/search?q=site:'+targetDomain+' ext:xml | ext:conf | ext:cnf | ext:reg | ext:inf | ext:rdp | ext:cfg | ext:txt | ext:ora | ext:ini', '_blank', 'noopener,noreferrer');
        break;
      case 'Database Files':
        window.open('https://www.google.com/search?q=site:'+targetDomain+' ext:sql | ext:dbf | ext:mdb', '_blank', 'noopener,noreferrer');
        break;
      case 'Log Files':
        window.open('https://www.google.com/search?q=site:'+targetDomain+' ext:log', '_blank', 'noopener,noreferrer');
        break;
      case 'Backup and Old Files':
        window.open('https://www.google.com/search?q=site:'+targetDomain+' ext:bkf | ext:bkp | ext:bak | ext:old | ext:backup', '_blank', 'noopener,noreferrer');
        break;
      case 'Login Pages':
        window.open('https://www.google.com/search?q=site:'+targetDomain+' inurl:login | inurl:signin | intitle:Login | intitle: signin | inurl:auth', '_blank', 'noopener,noreferrer');
        break;
      case 'SQL Errors':
        window.open('https://www.google.com/search?q=site:'+targetDomain+' intext:\"sql syntax near\" | intext:\"syntax error has occurred\" | intext:\"incorrect syntax near\" | intext:\"unexpected end of SQL command\" | intext:\"Warning: mysql_connect()\" | intext:\"Warning: mysql_query()\" | intext:\"Warning: pg_connect()\"', '_blank', 'noopener,noreferrer');
        break;
      case 'Apache Config Files':
        window.open('https://www.google.com/search?q=site:'+targetDomain+' filetype:config apache', '_blank', 'noopener,noreferrer');
        break;
      case 'Robots.txt File':
        window.open('https://www.google.com/search?q=site:'+targetDomain+'/robots.txt', '_blank', 'noopener,noreferrer');
        break;
      case 'DomainEye**':
        window.open('https://domaineye.com/similar/'+targetDomain, '_blank', 'noopener,noreferrer');
        break;

      //Second Column
      case 'Publicly Exposed Documents':
        window.open('https://www.google.com/search?q=site:'+targetDomain+' ext:doc | ext:docx | ext:odt | ext:pdf | ext:rtf | ext:sxw | ext:psw | ext:ppt | ext:pptx | ext:pps | ext:csv', '_blank', 'noopener,noreferrer');
        break;
      case 'phpinfo()':
        window.open('https://www.google.com/search?q=site:'+targetDomain+' ext:php intitle:phpinfo \"published by the PHP Group\"', '_blank', 'noopener,noreferrer');
        break;
      case 'Finding Backdoors':
        window.open('https://www.google.com/search?q=site:'+targetDomain+'  inurl:shell | inurl:backdoor | inurl:wso | inurl:cmd | shadow | passwd | boot.ini | inurl:backdoor', '_blank', 'noopener,noreferrer');
        break;
      case 'Install / Setup files':
        window.open('https://www.google.com/search?q=site:'+targetDomain+'  inurl:readme | inurl:license | inurl:install | inurl:setup | inurl:config', '_blank', 'noopener,noreferrer');
        break;
      case 'Open Redirects':
        window.open('https://www.google.com/search?q=site:'+targetDomain+' inurl:redir | inurl:url | inurl:redirect | inurl:return | inurl:src=http | inurl:r=http', '_blank', 'noopener,noreferrer');
        break;
      case 'Test Cross Domain':
        window.open('https://www.google.com/search?q=site:'+targetDomain+'/crossdomain.xml', '_blank', 'noopener,noreferrer');
        break;
      case '3rd Party Exposure':
        window.open('https://www.google.com/search?q=site%3Ahttp%3A%2F%2Fideone.com+|+site%3Ahttp%3A%2F%2Fcodebeautify.org+|+site%3Ahttp%3A%2F%2Fcodeshare.io+|+site%3Ahttp%3A%2F%2Fcodepen.io+|+site%3Ahttp%3A%2F%2Frepl.it+|+site%3Ahttp%3A%2F%2Fjustpaste.it+|+site%3Ahttp%3A%2F%2Fpastebin.com+|+site%3Ahttp%3A%2F%2Fjsfiddle.net+|+site%3Ahttp%3A%2F%2Ftrello.com+|+site%3A*.atlassian.net+|+site%3Abitbucket.org+'+targetDomain, '_blank', 'noopener,noreferrer');
        break;
      case 'Check Security Headers':
        window.open('https://securityheaders.com/?q='+targetDomain+'&followRedirects=on', '_blank', 'noopener,noreferrer');
        break;
      case 'Web-Check':
        window.open('https://web-check.xyz/check/'+targetDomain, '_blank', 'noopener,noreferrer');
        break;

      //Third Column
      case 'What CMS?':
        window.open('https://whatcms.org/?s='+targetDomain, '_blank', 'noopener,noreferrer');
        break;
      case 'WordPress':
        window.open('https://www.google.com/search?q=site:'+targetDomain+' inurl:wp- | inurl:wp-content | inurl:plugins | inurl:uploads | inurl:themes | inurl:download', '_blank', 'noopener,noreferrer');
        break;
      case 'Find WordPress#2':
        window.open('https://www.google.com/search?q=site:'+targetDomain+' inurl:wp-content | inurl:wp-includes', '_blank', 'noopener,noreferrer');
        break;
      case 'Find Pastebin entries':
        window.open('https://www.google.com/search?q=site:pastebin.com '+targetDomain, '_blank', 'noopener,noreferrer');
        break;
      case '.htaccess Sensitive Files':
        window.open('https://www.google.com/search?q=site:'+targetDomain+' inurl:/phpinfo.php | inurl:.htaccess', '_blank', 'noopener,noreferrer');
        break;
      case 'Find Subdomains':
        window.open('https://www.google.com/search?q=site:*.'+targetDomain, '_blank', 'noopener,noreferrer');
        break;
      case 'Find Sub-Subdomains':
        window.open('https://www.google.com/search?q=site:*.*.'+targetDomain, '_blank', 'noopener,noreferrer');
        break;
      case 'Passive Total**':
        window.open('https://community.riskiq.com/search/'+targetDomain, '_blank', 'noopener,noreferrer');
        break;
      case 'Check in ThreatCrowd**':
        window.open('https://threatcrowd.org/domain.php?domain='+targetDomain, '_blank', 'noopener,noreferrer');
        break;

      //Fourth Column 
      case 'Youtube':
        window.open('https://www.youtube.com/results?search_query='+targetDomain, '_blank', 'noopener,noreferrer');
        break;
      case 'Employees on LinkedIn':
        window.open('https://www.google.com/search?q=site:linkedin.com employees '+targetDomain, '_blank', 'noopener,noreferrer');
        break;
        case 'GitLab':
        window.open('https://www.google.com/search?q=inurl:gitlab '+targetDomain, '_blank', 'noopener,noreferrer');
        break;
      case 'GitHub':
        window.open('https://github.com/search?q=*.'+targetDomain, '_blank', 'noopener,noreferrer');
        break;
      case 'GitHub GIST Searches':
        window.open('https://gist.github.com/search?q=*.'+targetDomain, '_blank', 'noopener,noreferrer');
        break;
      case '.git folder':
        window.open('https://www.google.com/search?q=inurl:/.git '+targetDomain+' -github ', '_blank', 'noopener,noreferrer');
        break;
      case 'Stackoverflow':
        window.open('https://www.google.com/search?q=site:stackoverflow.com '+targetDomain, '_blank', 'noopener,noreferrer');
        break;
      case 'OpenBugBounty':
        window.open('https://www.openbugbounty.org/search/?search='+targetDomain, '_blank', 'noopener,noreferrer');
        break;
      case 'Reddit':
        window.open('https://www.reddit.com/search/?q='+targetDomain, '_blank', 'noopener,noreferrer');
        break;

      //Fifth Column
      case 'Find .SWF File':
        window.open('https://www.google.com/search?q=inurl:'+targetDomain+' ext:swf', '_blank', 'noopener,noreferrer');
        break;
      case 'Find .SWF File (Wayback)':
        window.open('https://web.archive.org/cdx/search?url='+targetDomain+'/&matchType=domain&collapse=urlkey&output=text&fl=original&filter=urlkey:.*swf&limit=100000', '_blank', 'noopener,noreferrer');
        break;
      case 'Wayback Machine':
        window.open('https://web.archive.org/web/*/'+targetDomain+'/*', '_blank', 'noopener,noreferrer');
        break;
      case 'Reverse IP Lookup':
        window.open('https://viewdns.info/reverseip/?host='+targetDomain+'&t=1', '_blank', 'noopener,noreferrer');
        break;
      case 'Traefik':
        window.open('https://www.google.com/search?q=intitle:traefik+inurl:8080/dashboard '+targetDomain, '_blank', 'noopener,noreferrer');
        break;
      case 'Cloud Storage and Buckets':
        window.open('https://cse.google.com/cse?cx=002972716746423218710:veac6ui3rio#gsc.tab=0&gsc.q='+targetDomain, '_blank', 'noopener,noreferrer');
        break;
      case 'Bitbucket & Atlassian':
        window.open('https://www.google.com/search?q=site%3Aatlassian.net+|+site%3Abitbucket.org+'+targetDomain, '_blank', 'noopener,noreferrer');
        break;
      case 'Digital Ocean Spaces':
        window.open('https://www.google.com/search?q=site:digitaloceanspaces.com '+targetDomain, '_blank', 'noopener,noreferrer');
        break;
      case 's3 Buckets':
        window.open('https://www.google.com/search?q=site:.s3.amazonaws.com '+targetDomain, '_blank', 'noopener,noreferrer');
        break;

      //Sixth Column
      case 'Source Code PublicWWW':
        window.open('https://publicwww.com/websites/'+targetDomain, '_blank', 'noopener,noreferrer');
        break;
      case 'Check in Censys [IPv4]':
        window.open('https://censys.io/ipv4?q='+targetDomain, '_blank', 'noopener,noreferrer');
        break;
      case 'Check in Censys [Domains]':
        window.open('https://censys.io/domain?q='+targetDomain, '_blank', 'noopener,noreferrer');
        break;
      case 'Check in Censys [Certs]':
        window.open('https://censys.io/certificates?q='+targetDomain, '_blank', 'noopener,noreferrer');
        break;
      case 'Check in Shodan':
        window.open('https://www.shodan.io/search?query='+targetDomain, '_blank', 'noopener,noreferrer');
        break;
      case 'CVE-2020-0646 SharePoint RCE':
        window.open('https://www.google.com/search?q=.sharepoint.com/_vti_bin/webpartpages/asmx -docs -msdn -mdsec site:'+targetDomain, '_blank', 'noopener,noreferrer');
        alert("PoC CallExternalMethodActivity x: Name = \"foo\"....System.Diagnostics.Process.Start(\"cmd.exe\", \"/c ping BurpCollabServer]\");private/**void**foobar(){//' />");
        break;
      case 'Apache Struts RCE':
        window.open('https://www.google.com/search?q=site:'+targetDomain+' ext:action | ext:struts | ext:do', '_blank', 'noopener,noreferrer');
        break;
      case 'API Endpoints - ESDL':
        window.open('https://www.google.com/search?q=site:'+targetDomain+' filetype:wsdl | filetype:WSDL | ext:svc | inurl:wsdl | Filetype: ?wsdl | inurl:asmx?wsdl | inurl:jws?wsdl | intitle:_vti_bin/sites.asmx?wsdl | inurl:_vti_bin/sites.asmx?wsdl', '_blank', 'noopener,noreferrer');
        break;
      case 'Search in CRT Logs':
        window.open('https://crt.sh/?q='+targetDomain, '_blank', 'noopener,noreferrer');
        break;
      case 'Plaintext Password Leak':
        window.open('https://www.google.com/search?q=site:throwbin.io '+targetDomain, '_blank', 'noopener,noreferrer');
        break;
      // Add more cases for other buttons
      default:
        alert(`Action: ${buttonText} for domain ${targetDomain}`);
    }
  });
});
