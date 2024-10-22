import React, { useState } from "react";

const App = () => {

  const [task, setTask] = useState("")
  const [desc , setDesc] = useState("")
  const [maintask, setMaintask] = useState([])


  let renderMessage  = <h2>No Tasks Avaliable</h2>

  const deleteHandler = (i) => {
    let copyTask = [...maintask]
    copyTask.splice(i ,1)
    setMaintask(copyTask)
  }

  if(maintask.length > 0){
    renderMessage =  maintask.map((t , i)=> {
      return (
        <li key={i} className="flex justify-between items-center">
          <div className="flex items-center justify-between w-2/3">
          <h5 className="text-3xl font-semibold my-2">{t.task}</h5>
          <h5 className="text-xl font-medium">{t.desc}</h5>
        </div>
        <button className="bg-red-400 text-white px-4 py-2
         rounded font-bold" onClick={deleteHandler}>Delete</button>
        </li>
        
      )
  })
  }

  return (
    <>
      <h1 className="bg-black text-white text-4xl text-center px-3 py-4 font-serif">
        Manthan's Todo List
      </h1>
      <form className="flex justify-evenly" onSubmit={(e) => {
        e.preventDefault()
        setMaintask([...maintask , {task , desc}])
        setTask("")
        setDesc("")
        console.log(maintask)
      }}>
        <input
          className="px-2
          border-4
         py-2 m-6 font-medium text-3xl
         border-black outline-black"
          type="text"
          placeholder="Enter Time"
          value={task}
          onChange={(e) => {
            e.preventDefault()
            setTask(e.target.value)
          }}
        />
        <input
          className="px-2 py-1 m-6 font-medium text-3xl border-black  outline-black border-4"
          type="text"
          placeholder="Enter Your Tasks"
          value={desc}
          onChange={(e) => {
            e.preventDefault()
            setDesc(e.target.value)
          }}
        />
        <button className="bg-green-700 text-white h-16 my-6 text-2xl font-semibold w-40 rounded-lg">
          Add
        </button>
      </form>

      <hr  className="border-slate-700 my-4 "/>
      
      <div className="bg-slate-200 p-8">
        <ul>
          {renderMessage}
        </ul>

      </div>


    </>
  );
};

export default App;
