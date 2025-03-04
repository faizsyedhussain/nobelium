import Link from 'next/link'

const Tags = ({ tags, currentTag }) => {
  if (!tags) return null
  return (
    <div className="tag-container">
      <ul className="flex max-w-full mt-4 overflow-x-auto">
        {Object.keys(tags).map(key => {
          const selected = key === currentTag
          return (
            <Link key={key} href={selected ? '/search' : `/tag/${encodeURIComponent(key)}`}>
              <a>
                <li
                  className={`mr-3 py-2 font-normal border px-4 whitespace-nowrap dark:text-gray-700 ${
                    selected
                      ? 'text-white bg-black border-black dark:bg-gray-500 dark:border-gray-500'
                      : 'bg-gray-100 border-gray-100 text-gray-500 dark:bg-night dark:border-gray-900'
                  }`}
                >
                  {`${key} (${tags[key]})`}
                </li>
              </a>
            </Link>
          )
        })}
      </ul>
    </div>
  )
}

export default Tags
