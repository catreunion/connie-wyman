import Link from 'next/link'
import { UserIcon, PencilSquareIcon, MusicalNoteIcon } from '@heroicons/react/20/solid'

// <ul>
//   {songs.map(({ id, title }) => (
//     <li key={id}>
//       <Link href={`/songs/${id}`}>{title}</Link>
//     </li>
//   ))}
// </ul>

const SongsToDisplay = ({ songs }) => {
  return (
    <ul role="list" className="mx-auto grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {songs.map((item) => (
        <li key={item.email} className="col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow">
          <div className="flex w-full items-center justify-between space-x-6 p-6">
            <div className="flex-1 truncate">
              <Link href={`/songs/${item.id}`}>
                <h3 className="pb-3 text-lg font-medium text-gray-900">{item.title}</h3>
              </Link>
              <div>
                <span className="mt-1 truncate text-sm text-gray-500">
                  {`原唱：${item.artist}　作詞：${item.lyrics}　作曲：${item.composer}`}
                </span>
              </div>
            </div>
          </div>
        </li>
      ))}
    </ul>
  )
}

export default SongsToDisplay
