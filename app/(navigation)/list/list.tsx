"use client"

import { useState } from "react"

export default function ListWrapper({
  itemArray,
  items,
}: {
  itemArray: React.ReactNode[]
  items: string[]
}) {
  // export default function ListWrapper({ Item }: { Item: React.ReactElement }) {
  const [itemIndex, setItemIndex] = useState(0)
  const [isShowList, setIsShowList] = useState(false)

  return (
    <div className="text-center ">
      <p className="font-bold">List</p>
      {isShowList && (
        <ol className="list-decimal w-max m-auto">
          {items.map((v, i) => {
            return <li key={i}>{itemArray[i]}</li>
          })}
        </ol>
      )}
      <button
        className="text-gray-200 bg-black p-1 pl-2 pr-2 rounded m-2 w-24"
        onClick={() => {
          setIsShowList((prev) => !prev)
        }}
      >
        {isShowList ? "Hide" : "Show"} List
      </button>
      <p className="font-bold">Select</p>
      {itemArray[itemIndex]}
      {items.map((v, i) => {
        return (
          <button
            className="text-gray-200 bg-black p-1 pl-2 pr-2 rounded m-2 w-20"
            onClick={() => {
              setItemIndex(i)
            }}
            key={i}
          >
            {v}
          </button>
        )
      })}
    </div>
  )
}
