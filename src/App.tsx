import React, { useCallback, useEffect, useImperativeHandle, useRef, useState } from 'react';

import { isArray } from 'lodash-es';
console.log(isArray);
// const a = 123;
// const MyPage1 = lazy(() => import('./pages/page1'));

function Sample() {
  // 这里在每次组件执行时创建了一个新数组
  const todos = [{ text: 'Learn hooks. this is a test hahaha but if you are good on it, i am oaky with it, thank you' }];
  useEffect(() => {
    console.log('Todos changed.');
  }, [todos]);
  return (
    <>
      {todos.map((e, index) => {
        return <div key={index}>{e.text}</div>;
      })}
    </>
  );
}

// const Count = React.memo(({onCount}) => {
//   console.log('count render', onCount)
//   return <>
//   i am count
//   </>
// })
// const Count = ({count}) => {
//   console.log('count render', count)
//   return <>
//   i am count
//   </>
// }
// const Count = () => {
//   console.log('count1 render')
//   const ref = useRef(0);
//   return <>
//   i am count1
//   <p>页面渲染次数：{ref.current++}</p>
//   </>
// }

// const Count = React.memo(({handleSubmit}) => {
//   console.log('count render', handleSubmit())
//   return <>
//   i am count
//   </>
// })


// export default function App() {
//   const [count, setCount] = useState(0);
//   const beforevalue = usePrevious(count);
//   console.log("count修改", count);
//   return (
//     <h1>
//       Now: {count}, before: {beforevalue}
//       <button onClick={() => setCount(count + 1)}>点击增加</button>
//       <button onClick={() => {
//         console.log('previous.current', beforevalue)
//       }}>test</button>
//     </h1>
//   );
// }

// const Page = () => {
//   const ref = useRef()
//   return <Form ref={ref} />
// }

// const Form = ({ ref }) => {
//   const labelRef = useRef();
//   const inputRef = useRef();
//   const buttonRef = useRef();
//   useImperativeHandle(ref, () => ({
//     get label() {
//       return labelRef.current;
//     },
//     get input() {
//       return inputRef.current;
//     },
//     get button() {
//       return buttonRef.current;
//     },
//   }))
//   return <form>
//     <label ref={labelRef} for="name"></label>
//     <input ref={inputRef} type="text" id="name"></input>
//     <button ref={buttonRef}>submit</button>
//   </form>
// }

export function usePrevious(value) {
  const previous = useRef(value);
  useEffect(() => {
    console.log("usePrevious中useEffect执行", value);
    previous.current = value;
  }, [value]);
  console.log("返回previous.current", previous.current);
  return previous.current;
}

// export default function App() {
//   const [count, setCount] = useState(0);
//   const currentCount = useRef(count);
//   const prevCount = currentCount.current;

//   currentCount.current = count;

//   return (
//     <div>
//       <p>prev: {prevCount}</p>
//       <p>current: {currentCount.current}</p>
//       <button onClick={() => setCount(count + 1)}>setCount {count}</button>
//     </div>
//   );
// }

export default function App() {
  console.log('app render')
  const [count, setCount] = useState(0);
  const [load, setLoad] = useState(false);

  const onClick = () => {
    setCount(count + 1);
    setLoad(true);
  }

  return (
    <div>

      <button onClick={onClick}>setCount {count}</button>
    </div>
  );
}


// export default function App() {
//   const [count, setCount] = useState(0);
//   const [click, setClick] = useState(0);
//   const test = 123;
//   const onClick = () => {
//     setClick(click + 1)
//   }

//   // const onCount = useCallback(() => {
//   //   setCount(count+1)
//   // }, [count])

//   const onCount = () => {
//     setCount(count+1)
//   };


//   return (
//     <>
//       <button onClick={onClick}>btn {click}</button>
//       <Count></Count>
//     </>
//   );
// }
