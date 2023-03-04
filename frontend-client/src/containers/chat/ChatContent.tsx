import React from 'react'
import { BsFillCheckSquareFill } from 'react-icons/bs'

interface Props {}

const ChatContent: React.FC<Props> = () => {
  return (
    <div className="bg-white/20 p-4 rounded text-neutral-100">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim saepe
        dolor similique reprehenderit dolores laudantium, a, dolorum laborum
        quibusdam repellat facere. Neque debitis quae et magni exercitationem
        obcaecati quasi dignissimos?
      </p>

      <ul className="text-sm space-y-1 mt-4 ml-2">
        <li className="flex gap-x-2 items-center">
          <span>A.</span> <span>Option A</span>
        </li>
        <li className="flex gap-x-2 font-extrabold text-white items-center">
          <span>B.</span> <span>Option B</span>
          <BsFillCheckSquareFill className="text-green-400" />
        </li>
        <li className="flex gap-x-2 items-center">
          <span>C.</span> <span>Option C</span>
        </li>
        <li className="flex gap-x-2 items-center">
          <span>D.</span> <span>Option D</span>
        </li>
      </ul>
    </div>
  )
}

export default ChatContent
