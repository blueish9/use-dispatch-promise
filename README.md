with **use-dispatch-promise**, you can dispatch an action and get a promise as return

---

### 1. Install
```yarn add redux-dispatcher```

or

```npm install redux-dispatcher --save```

### 2. Usage
```js
import useDispatchPromise from 'use-dispatch-promise';

const UserProfile = () => {
  const [name, setName] = useState();

  const dispatch = useDispatchPromise();

  useEffect(() => {
    (async () => {
      const result = await dispatch({ type: FETCH_PROFILE });
      setName(result);
    })();
  }, []);
  
  // return something
};

const FETCH_PROFILE = 'FETCH_PROFILE';

```

```js
// somewhere in your Redux middleware
action.resolve("Hello world")
```
