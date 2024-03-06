import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

/* function name(params) {
  
} */


export default function App() {

  let data = {
    title: "Social Media Dashboard",
    counterFollowers: 23004,
  }

  return (
    <>
    <main className="bg-background text-forground px-5 py-7">

      <section>
        <h1 className="font-bold">{data.title}</h1>
        <p className="text-xs text-text">Total Followers : {data.counterFollowers}</p>
      </section>

      <section className="flex justify-between my-4 border-t-2 border-text">
        <p className="text-xs text-text my-4">Dark Mode</p>
        <label className="inline-flex items-center cursor-pointer">
          <input type="checkbox" value="" className="sr-only peer" />
          <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
      </label>
      </section>

      <div>
        <article>
          <section>
            <img src="./assets/icon-facebook.svg" alt="icon facebook" />
          </section>
        </article>
      </div>
    </main>
    </>
  )
}
