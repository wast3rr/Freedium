# Freedium

## What is Freedium?
Tired of scrolling on Medium.com, seeing an interesting article, only to click on it and realize that it's for paid members only? Me too, and that's why I created this Firefox plugin.

Freedium scans all of the articles on your medium homepage and removes any paid ones for you so that you aren't even tempted. There are other resources that will allow you to read paid Medium articles for free, but unfortunately these are periodically nuked by the company and therefore I didn't even bother creating such a tool.

## WARNING
This slows down Medium pretty significantly. I tried to implement the plugin in a few different ways but it turns out Medium put a fairly big effort into trying to minimize the filtering of paid content, which makes sense. Not only are the identifiers of Member-only articles very deeply nested within the article tag, but the classes of the div that contain the Member-only p tag change with each refresh. Therefore, the plugin uses an observer which basically slows down the repopulation of articles to one at a time, especially since it's also simultaneously removing the paid articles.

## Why isn't the plugin fully released yet?
In the off chance someone sees this repo before I've released the plugin, it's because I'm not finished implementing the toggle button. If you load in this code yourself and utilize Freedium as a temporary plugin, it will work just fine but you will need to manually enable/disable the plugin from Firefox. Also haven't gotten around to adding in any of the icons for the plugin. Everything should be finished once I'm done with finals.
