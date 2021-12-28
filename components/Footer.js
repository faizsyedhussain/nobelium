import BLOG from '@/blog.config'
const Footer = ({ fullWidth }) => {
  const d = new Date()
  const y = d.getFullYear()
  const from = +BLOG.since
  return (<
        div className = { `mt-6 flex-shrink-0 m-auto w-full text-gray-500 dark:text-gray-400 transition-all ${
        !fullWidth ? 'max-w-2xl px-4' : 'px-4 md:px-24'
      }` } >
        
        <div className = "my-4 text-sm leading-6 font-normal" >
        <div className = "flex align-baseline justify-between flex-wrap" >
        <div className = "grid grid-cols-3 gap-4" >
        <div><a href="https://creativecommons.org/licenses/by-nc-sa/3.0/">CC BY&middot;NC&middot;SA</a></div>
        <div>{ BLOG.author } </div>
        <div>{ from === y || !from ? y : `${from}–${y}` }
        </div > <
        /div > <
        /div > <
        /div >
  )
}

export default Footer
