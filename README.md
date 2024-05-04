<p align="center">
    <img src="icons/freedium.png" />
</p>
<h1 align="center">
    Freedium
</h1>

## What is Freedium?
Tired of scrolling on Medium.com, seeing an interesting article, only to click on it and realize that it's for paid members only and you missed the little star icon? Me too, and that's why I created this Firefox plugin.

Freedium scans all of the articles on your medium homepage and removes any paid ones for you so that you aren't even tempted. There are other resources that will allow you to read paid Medium articles for free, but unfortunately these are periodically nuked by the company and therefore I didn't even bother creating such a tool.

## WARNING
This somewhat slows down the speed which articles load in on your page. It's not too much (see demo), but enough to be noticable. I tried to implement the plugin in a few different ways but due to the way the articles are identified as members-only, the program needs to search for the p tag itself and see if it has members-only as the text. The plugin uses an observer which basically slows down the repopulation of articles to one at a time, especially since it's also simultaneously removing the paid articles.

## Demo
Freedium is now fully functional and will be uploaded to Mozilla soon. 

![Demo Video](./icons/gif/display.gif)
