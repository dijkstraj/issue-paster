const issueMatcher = /\bEAP-\d+\b/g;

document.addEventListener('DOMContentLoaded', function() {
  const pasteit = document.getElementById('pasteit');
  pasteit.focus();
  pasteit.addEventListener('paste', event => {
    const pasted = (event.clipboardData || window.clipboardData).getData('text');
    const issues = [...pasted.matchAll(issueMatcher)];
    issues.forEach(issue => chrome.tabs.create({url: `https://jira.iddinkgroup.com/browse/${issue[0]}`}));
  });
});
