import BLOG from '@/blog.config'
const Footer = ({ fullWidth }) => {
  const d = new Date()
  const y = d.getFullYear()
  const from = +BLOG.since
  return (
    <div
      className={`mt-6 flex-shrink-0 m-auto w-full text-gray-500 dark:text-gray-500 transition-all ${
        !fullWidth ? 'max-w-2xl px-4' : 'px-4 md:px-24'
      }`}
    >
      <div className="my-4 text-sm font-normal leading-r2 text-[#774C24]">
        <div className="flex align-baseline justify-between flex-wrap">
          <p className="columns-4 text-left">CC BY·NC·SA</p>
        <p className="columns-4 text-center">{BLOG.author}</p>
        <p className="columns-4 text-right">{from === y || !from ? y : `${from}–${y}`}</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
