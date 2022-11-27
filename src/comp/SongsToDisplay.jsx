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
    <ul role="list" className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {songs.map((item) => (
        <li key={item.email} className="col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow">
          <div className="flex w-full items-center justify-between space-x-6 p-6">
            <div className="flex-1 truncate">
              <div className="flex items-center space-x-3">
                <h3 className="truncate text-sm font-medium text-gray-900">{item.name}</h3>
                <span className="inline-block flex-shrink-0 rounded-full bg-green-100 px-2 py-0.5 text-xs font-medium text-green-800">
                  {item.role}
                </span>
              </div>
              <p className="mt-1 truncate text-sm text-gray-500">{item.title}</p>
            </div>
            <img className="h-10 w-10 flex-shrink-0 rounded-full bg-gray-300" src={item.imageUrl} alt="" />
          </div>
          <div>
            <div className="-mt-px flex divide-x divide-gray-200">
              {/* UserIcon */}
              <div className="flex w-0 flex-1">
                <UserIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                <span className="ml-3">{item.artist}</span>
              </div>

              {/* PencilSquareIcon */}
              <div className="flex w-0 flex-1">
                <PencilSquareIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                <span className="ml-3">{item.lyrics}</span>
              </div>

              {/* MusicalNoteIcon */}
              <div className="flex w-0 flex-1">
                <MusicalNoteIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                <span className="ml-3">{item.composer}</span>
              </div>
            </div>
          </div>
        </li>
      ))}
    </ul>
  )
}

export default SongsToDisplay
