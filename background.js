chrome.runtime.onMessageExternal.addListener((message, sender, sendResponse) => {
  if (message.type !== "FETCH") return;

  fetch(message.url, message.options)
    .then(res => res.text())
    .then(data => sendResponse({ success: true, data }))
    .catch(err => sendResponse({ success: false, error: err.message }));

  return true;
});