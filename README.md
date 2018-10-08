# foodsby-order-totals
Foodsby Restaurant Partners: Parse order list for total quantity of each item

[Demo](https://sgerner.github.io/foodsby-order-totals/)

# Background
Are you a restaurant partner with Foodsby? Do you find it a little silly they do not offer an API so you can pull order data and feed it directly to your kitchen display system (KDS) or point of sale (POS) software? While I cannot give you an API, this simple webpage will generate a list of every item ordered and the quantity ordered. This should make it a little faster and easier to get orders to the associated prep station.

# Installation
The page and script are simple and run all client side (on your computer). A few options:
* Run from the demo site at https://sgerner.github.io/foodsby-order-totals/
* Use the green 'Clone or Download' button and select 'Download Zip'. Unzip the files and run locally on your device.
* Use git to clone the repository to your local device or server.

# Usage Instructions
1. Install (see options above).
2. Open the 'All Meals' link in your Foodsby Restaurant Partner Dashboard to view order slips / labels for every order.
3. Right-click in the new window that opens and choose one of the following:
    1. 'View Page Source'. This will open a new tab with the raw HTML for the page. Copy everything on this page (CTL + A to select everything and CTL + C to copy) and then paste it in the first box.
    2. 'Save As'. This will save a copy of the page to your device. Use the second box on the page to upload the file.
4. (Optional) Print the list of items ordered and quantities either using the print button at the bottom of the page, CTL + P, or File > Print. A clean page will be created including only the results.

# Issues
At some point, Foodsby will likely add this simple feature to their main system and hopefully an API. Until then, if Foodsby changes their HTML markup, this script will likely stop working. Please post an issue or create a pull request to ensure it is fixed. I do not deal with this on a daily basis and it sometimes takes a while for my staff to notify me when things are not working.

# Improvements
A custom key file to sort results by categories / prep stations would be easy to implement and likely helpful for many users. Feel free to implement and create a pull request =)
