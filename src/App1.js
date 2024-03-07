import React from 'react'

// export const App1 = () => {

//     const handleClick = () => {
//         alert("Hello World")
//     }
//   return (
//     <div>
//         <button onClick={handleClick}>Click</button>
//     </div>
//   )
// }
export const App1 = () => {

    const handleClick = (msg) => {
        alert(msg)
    }
  return (
    <div>
        <button onClick={()=>handleClick('Hi Jhon')}>Click</button>
    </div>
  )
}

export default App1