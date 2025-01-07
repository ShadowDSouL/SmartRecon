let isCloseButtonClicked = false;

document.getElementById('closeButton').addEventListener('click', () => {
  isCloseButtonClicked = true; // Set the flag
  closeModal(); // Call the function to close the modal
});

document.querySelectorAll('button').forEach((button, index) => {
  button.addEventListener('click', (e) => {

    if (isCloseButtonClicked) {
      isCloseButtonClicked = false; // Reset the flag
      return; // Exit if close button was clicked
    }

    const targetDomain = document.getElementById('target-domain').value;
    // Validation for empty input and invalid domain format
    if (!validateDomain(targetDomain)) {
      alert('Please enter a valid domain.');
      return; // Exit the function if validation fails
    }
    
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

      //Second Column
      case 'Robots.txt File':
        window.open('https://www.google.com/search?q=site:'+targetDomain+'/robots.txt', '_blank', 'noopener,noreferrer');
        break;
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

      //Third Column
      case '3rd Party Exposure':
        window.open('https://www.google.com/search?q=site%3Ahttp%3A%2F%2Fideone.com+|+site%3Ahttp%3A%2F%2Fcodebeautify.org+|+site%3Ahttp%3A%2F%2Fcodeshare.io+|+site%3Ahttp%3A%2F%2Fcodepen.io+|+site%3Ahttp%3A%2F%2Frepl.it+|+site%3Ahttp%3A%2F%2Fjustpaste.it+|+site%3Ahttp%3A%2F%2Fpastebin.com+|+site%3Ahttp%3A%2F%2Fjsfiddle.net+|+site%3Ahttp%3A%2F%2Ftrello.com+|+site%3A*.atlassian.net+|+site%3Abitbucket.org+'+targetDomain, '_blank', 'noopener,noreferrer');
        break;
      case 'Check Security Headers':
        window.open('https://securityheaders.com/?q='+targetDomain+'&followRedirects=on', '_blank', 'noopener,noreferrer');
        break;
      case 'Web-Check':
        window.open('https://web-check.xyz/check/'+targetDomain, '_blank', 'noopener,noreferrer');
        break;
      case 'What CMS?':
        window.open('https://whatcms.org/?s='+targetDomain, '_blank', 'noopener,noreferrer');
        break;
      case 'WordPress':
        window.open('https://www.google.com/search?q=site:'+targetDomain+' inurl:wp- | inurl:wp-content | inurl:plugins | inurl:uploads | inurl:themes | inurl:download', '_blank', 'noopener,noreferrer');
        break;
      case 'WordPress includes':
        window.open('https://www.google.com/search?q=site:'+targetDomain+' inurl:wp-content | inurl:wp-includes', '_blank', 'noopener,noreferrer');
        break;
      case 'Find Pastebin entries':
        window.open('https://www.google.com/search?q=site:pastebin.com '+targetDomain, '_blank', 'noopener,noreferrer');
        break;

      //Fourth Column 
      case '.htaccess Sensitive Files':
        window.open('https://www.google.com/search?q=site:'+targetDomain+' inurl:/phpinfo.php | inurl:.htaccess', '_blank', 'noopener,noreferrer');
        break;
      case 'Find Subdomains':
        window.open('https://www.google.com/search?q=site:*.'+targetDomain, '_blank', 'noopener,noreferrer');
        break;
      case 'Find Sub-Subdomains':
        window.open('https://www.google.com/search?q=site:*.*.'+targetDomain, '_blank', 'noopener,noreferrer');
        break;
      case 'OpenBugBounty':
        window.open('https://www.openbugbounty.org/search/?search='+targetDomain, '_blank', 'noopener,noreferrer');
        break;
      case 'Youtube':
        window.open('https://www.youtube.com/results?search_query='+targetDomain, '_blank', 'noopener,noreferrer');
        break;
      case 'Employees on LinkedIn':
        window.open('https://www.google.com/search?q=site:linkedin.com employees '+targetDomain, '_blank', 'noopener,noreferrer');
        break;
        case 'GitLab':
        window.open('https://www.google.com/search?q=inurl:gitlab '+targetDomain, '_blank', 'noopener,noreferrer');
        break;

      //Fifth Column
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
      case 'Reddit':
        window.open('https://www.reddit.com/search/?q='+targetDomain, '_blank', 'noopener,noreferrer');
        break;
      case 'Wayback Machine':
        window.open('https://web.archive.org/web/*/'+targetDomain+'/*', '_blank', 'noopener,noreferrer');
        break;
      case 'Reverse IP Lookup':
        window.open('https://viewdns.info/reverseip/?host='+targetDomain+'&t=1', '_blank', 'noopener,noreferrer');
        break;

      //Sixth Column
      case 'Cloud Storage and Buckets':
        window.open('https://cse.google.com/cse?cx=002972716746423218710:veac6ui3rio#gsc.tab=0&gsc.q='+targetDomain, '_blank', 'noopener,noreferrer');
        break;
      case 's3 Buckets':
        window.open('https://www.google.com/search?q=site:.s3.amazonaws.com '+targetDomain, '_blank', 'noopener,noreferrer');
        break;
      case 'Source Code PublicWWW':
        window.open('https://publicwww.com/websites/'+targetDomain, '_blank', 'noopener,noreferrer');
        break;
      case 'Check in Censys [Domains]':
        window.open('https://search.censys.io/search?resource=hosts&sort=RELEVANCE&per_page=25&virtual_hosts=EXCLUDE&q='+targetDomain, '_blank', 'noopener,noreferrer');
        break;
      case 'Check in Censys [Certs]':
        window.open('https://search.censys.io/search?resource=certificates&sort=RELEVANCE&per_page=25&virtual_hosts=EXCLUDE&q='+targetDomain, '_blank', 'noopener,noreferrer');
        break;
      case 'Check in Shodan':
        window.open('https://www.shodan.io/search?query='+targetDomain, '_blank', 'noopener,noreferrer');
        break;
      case 'Search in CRT Logs':
        window.open('https://crt.sh/?q='+targetDomain, '_blank', 'noopener,noreferrer');
        break;
      // Add more cases for other buttons
      default:
        alert(`Action: ${buttonText} for domain ${targetDomain}`);
    }
  });
});


// Function to validate domain name
function validateDomain(domain) {
  // Regular expression for basic domain validation
  const domainPattern = /^(?!-)[A-Za-z0-9-]{1,63}(?<!-)(\.[A-Za-z]{2,})+$/;
  return domainPattern.test(domain);
}

// Function to close the modal
function closeModal() {
  document.getElementById('welcomeModal').style.display = 'none';
}