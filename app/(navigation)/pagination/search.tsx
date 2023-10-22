"use client"
import Link from "next/link"
import { useState } from "react"
import { useRouter } from "next/navigation"

export default function Search() {
  const [keyword, setKeyword] = useState("")
  const router = useRouter()

  return (
    <>
      <input
        className="border border-black mr-1 w-1/2 outline-none"
        value={keyword}
        onChange={(e) => {
          setKeyword(e.target.value)
        }}
      ></input>
      <button
        className="p-1 pl-2 pr-2 bg-black text-gray-200 rounded m-1"
        onClick={() => {
          router.push(
            "http://localhost:3000/pagination?page=1&search=" +
              keyword.toLowerCase()
          )
          setKeyword("")
        }}
      >
        Search
      </button>
      {/* <Link
        className="p-1 pl-2 pr-2 bg-black text-gray-200 rounded m-1"
        href={"/pagination?page=1" + "&search=" + keyword}
      >
        Search
      </Link> */}
    </>
  )
}
