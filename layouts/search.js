import { useState } from 'react'
import BlogPost from '@/components/BlogPost'
import Container from '@/components/Container'
import Tags from '@/components/Tags'
import PropTypes from 'prop-types'

const SearchLayout = ({ tags, posts, currentTag }) => {
  const [searchValue, setSearchValue] = useState('')
  let filteredBlogPosts = []
  if (posts) {
    filteredBlogPosts = posts.filter(post => {
      const tagContent = post.tags ? post.tags.join(' ') : ''
      const searchContent = post.title + post.summary + tagContent
      return searchContent.toLowerCase().includes(searchValue.toLowerCase())
    })
  }

  return (
    <Container>
      <div className="relative">
        <input type="text"
          placeholder={
            currentTag ? `Search in #${currentTag}` : 'Search Articles'
          }
          className="block w-full border px-4 py-2 border-gray-700 bg-transparent text-black dark:bg-night dark:border-white dark:text-white"
          onChange={e => setSearchValue(e.target.value)} />       
        <svg className="absolute right-3 top-3 h-5 w-5 text-black dark:text-white" width="23" height="24" viewBox="0 0 23 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M9.59938 15.4818C12.8392 15.4818 15.4657 12.8527 15.4657 9.60942C15.4657 6.36617 12.8392 3.737 9.59938 3.737C6.35952 3.737 3.73309 6.36617 3.73309 9.60942C3.73309 12.8527 6.35952 15.4818 9.59938 15.4818ZM9.59938 19.2188C14.901 19.2188 19.1988 14.9166 19.1988 9.60942C19.1988 4.30229 14.901 0 9.59938 0C4.29779 0 0 4.30229 0 9.60942C0 14.9166 4.29779 19.2188 9.59938 19.2188Z" fill="text-black"/>
        <path fillRule="evenodd" clipRule="evenodd" d="M20.188 23.29C19.7974 23.681 19.1637 23.681 18.773 23.29L16.1218 20.636C15.8876 20.4016 15.7848 20.0664 15.8471 19.741L16.0214 18.8318C16.0627 18.6162 16.032 18.393 15.9339 18.1967L15.6594 17.6472C15.5421 17.4122 15.5881 17.1285 15.7737 16.9426V16.9426C15.9596 16.7565 16.2439 16.7104 16.4791 16.8281L16.9907 17.0842C17.209 17.1934 17.4597 17.2191 17.6955 17.1563L18.7098 16.8863C19.0547 16.7945 19.4223 16.8934 19.6745 17.1459L22.2941 19.7682C22.6841 20.1587 22.6841 20.7913 22.2941 21.1817L20.188 23.29Z" fill="text-black"/></svg>
      </div>
      <Tags
        tags={tags}
        currentTag={currentTag}
      />
      <div className="article-container my-8">
        {!filteredBlogPosts.length && (
          <p className="text-gray-700 dark:text-gray-300">No posts found.</p>
        )}
        {filteredBlogPosts.slice(0, 20).map(post => (
          <BlogPost key={post.id} post={post} />
        ))}
      </div>
    </Container>
  )
}
SearchLayout.propTypes = {
  posts: PropTypes.array.isRequired,
  tags: PropTypes.object.isRequired,
  currentTag: PropTypes.string
}
export default SearchLayout
