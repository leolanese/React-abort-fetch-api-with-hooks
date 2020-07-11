## React-abort-fetch-api-with-hooks

> Warning: Can't perform a React state update on an unmounted component. This is a no-op, but it indicates a memory leak in your application. To fix, cancel all subscriptions and asynchronous tasks in a useEffect cleanup function.

## AbortController:

This error happens when we have a React Component that fetches and renders some requested data. Then the page loads, the fetch request is made but we again request (click without waiting) to another route which dismounts the component as expected. Then, if we set state when the fetch request resolves on an "unmounted component" we will get this error:

> We can debounce the request and expect to not trigger a battery of request. In this scenario I'm suggesting that it is need it that the request needs to be cancel.

The button will toggle the rendering of the ReposCount component when it is clicked. If you click the button to unmount the component before the API call finishes, you will see the: "Can't perform a React state update on an unmounted component" ... 

### Demo:
I placed two buttons, both triggers a request to the same API but one aborts the operation if requested.


---
<h4> Thanks </h4>
<h5> { 'Leo Lanese',<br>
       'Building Inspiring Responsive Reactive Solutions',<br>
       'London, UK' }<br>
</h5>
<h5>Twitter:
<a href="http://twitter.com/LeoLaneseltd" target="_blank">twitter.com/LeoLaneseltd</a>
</h5>
<h5>Portfolio
<a href="http://www.leolanese.com" target="_blank">http://www.leolanese.com</a>
</h5>
<h5>DEV.to:
<a href="http://www.dev.to/leolanese" target="_blank">dev.to/leolanese</a>
</h5>
<h5>Blog:
<a href="http://www.leolanese.com/blog" target="_blank">leolanese.com/blog</a>
</h5>
<h5>Questions / Suggestion / Recommendation ?
<a href="mail:to">developer@leolanese.com</a>
</h5>
