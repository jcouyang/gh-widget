Hi, this is just a little hack to make your self a nice Github Contribution Widget.

place the following code anywhere you want to place this widget

```html
  <div id="github-widget" data-user="your-github-username" data-display="pop_repos,calendar"></div>
  <script src="https://gh-widget.oyanglul.us/index.js"></script>
```
then BOOM! 🎆

## How this works
- gist.github.com.ru is a my little service deployed in heroku, which can run ruby code in gist.github.com. it's quite handy than AWS lambda if you don't care anyone can see your source code.
- nokogiri
- github custom 404 page which redirect any path to my 404.html, and that html have a script to handle the path as parameter. for example, http://gh-widget.oyanglul.us/jcouyang will actually toes to 404.html

