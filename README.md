# eldercare

Built with Bootstrap 4, HTML5, Font Awesome, Android Studio, Apple Xcode. Where possible all original scientific works have been cited with a journal reference and all registered trademarks and copyright acknowledged.

This compilation of educational material and its source code is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by/4.0/">Creative Commons Attribution 4.0 International License</a>

A live demo is available here <a href="https://agnate.co.uk/ec/">https://agnate.co.uk/ec/</a>

Contributors:
<a href="https://about.me/deanjenkins">Dean Jenkins</a>

# Scale-building script

The python script go-scales.py is a tool that builds the static HTML pages for the scales from a list of scale names. It first checks that a Javascript file exists for that scale name in js/scales/ and then creates or overwrites the HTML file scale_scalename.html. Then it offers to copy the entire HTML5 app for eldercare into the Android Studio Project's asset folder (modify this target folder in go-scales.py for your Android app folder if building eldercare into an Android App).
