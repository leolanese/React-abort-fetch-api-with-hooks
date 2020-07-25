## React-abort-fetch-api-with-hooks

> Warning: Can't perform a React state update on an unmounted component. This is a no-op, but it indicates a memory leak in your application. To fix, cancel all subscriptions and asynchronous tasks in a useEffect cleanup function.

## AbortController:

This error happens when we have a React Component that fetches and renders some requested data. Then the page loads, the fetch request is made but we again request (click without waiting) to another route which dismounts the component as expected. Then, if we set state when the fetch request resolves on an "unmounted component" we will get this error:

> We can debounce the request and expect to not trigger a battery of request. In this scenario I'm suggesting that it is need it that the request needs to be cancel.

The button will toggle the rendering of the ReposCount component when it is clicked. If you click the button to unmount the component before the API call finishes, you will see the: "Can't perform a React state update on an unmounted component" ... 

### Demo:
I placed two buttons, both triggers a request to the same API but one aborts the operation if requested.


---
### <i>Thanks!</i>

>  { 'Leo Lanese',<br>
     'Building Inspiring Responsive Reactive Solutions',<br>
     'London, UK' }<br>

##### Twitter <a href="https://twitter.com/LeoLaneseltd" target="_blank">@LeoLaneseltd</a>
##### Portfolio <a href="https://www.leolanese.com" target="_blank">www.leolanese.com</a>
##### DEV.to <a href="https://www.dev.to/leolanese" target="_blank">dev.to/leolanese</a>
##### Blog: <a href="https://www.leolanese.com/blog" target="_blank">leolanese.com/blog</a>
##### Questions / Suggestion / Recommendation: developer@leolanese.com

