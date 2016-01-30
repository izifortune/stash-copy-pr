'use strict';

function checkStashURL(tabId, changeInfo, tab) {
  if (~tab.url.indexOf('stash') && ~tab.url.indexOf('pull-requests/')) {
    chrome.pageAction.show(tabId);
  }
}

chrome.tabs.onUpdated.addListener(checkStashURL);

chrome.pageAction.onClicked.addListener(() => {
  chrome.tabs.executeScript(null, {file: 'scripts/contentscript.js'});
});
