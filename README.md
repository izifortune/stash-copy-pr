Chrome extension that copy the pull request name to clipboard on Stash
webpages.

During code reviews or just for checkout the work of a coworker i always
find myself inspecting the web page to get the full name of the pull request.

This chrome extension add a page action that on click will copy the pull request name
into the system clipboard, and also print it in console.

By default its only enabled on URLs that contains:
`stash` and `pull-requests/`

