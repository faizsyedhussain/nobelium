import { useEffect, useRef } from 'react'
import Link from 'next/link'
import BLOG from '@/blog.config'
import { useLocale } from '@/lib/locale'

const NavBar = () => {
  const locale = useLocale()
  const links = [
    { id: 0, name: locale.NAV.INDEX, to: BLOG.path || '/', show: true },
    { id: 1, name: locale.NAV.ABOUT, to: '/about', show: BLOG.showAbout },
    { id: 2, name: locale.NAV.RSS, to: '/feed', show: true },
    { id: 3, name: locale.NAV.SEARCH, to: '/search', show: true }
  ]
  return (
    <div className="flex-shrink-0">
      <ul className="flex flex-row">
        {links.map(
          link =>
            link.show && (
              <li
                key={link.id}
                className="block ml-4 text-black dark:text-gray-50 nav"
              >
                <Link href={link.to}>
                  <a>{link.name}</a>
                </Link>
              </li>
            )
        )}
      </ul>
    </div>
  )
}

const Header = ({ navBarTitle, fullWidth }) => {
  const useSticky = !BLOG.autoCollapsedNavBar
  const navRef = useRef(null)
  const sentinalRef = useRef([])
  const handler = ([entry]) => {
    if (navRef && navRef.current && useSticky) {
      if (!entry.isIntersecting && entry !== undefined) {
        navRef.current?.classList.add('sticky-nav-full')
      } else {
        navRef.current?.classList.remove('sticky-nav-full')
      }
    } else {
      navRef.current?.classList.add('remove-sticky')
    }
  }
  useEffect(() => {
    const obvserver = new window.IntersectionObserver(handler)
    obvserver.observe(sentinalRef.current)
    // Don't touch this, I have no idea how it works XD
    // return () => {
    //   if (sentinalRef.current) obvserver.unobserve(sentinalRef.current)
    // }
    /* eslint-disable-line */
  }, [sentinalRef])
  return (
    <>
      <div className="observer-element h-4 md:h-12" ref={sentinalRef}></div>
      <div
        className={`sticky-nav m-auto w-full h-6 flex flex-row justify-between items-center mb-2 md:mb-12 py-8 bg-opacity-60 ${
          !fullWidth ? 'max-w-3xl px-4' : 'px-4 md:px-24'
        }`}
        id="sticky-nav"
        ref={navRef}
      >
        <div className="flex items-center">
          <Link href="/">
            <a aria-label={BLOG.title}>
              <div className="h-6">
                
                <svg width="30" height="30" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="Strudel">
<path id="Vector" d="M24.4898 24.4118C25.6723 21.5249 26.8414 18.671 28.0425 15.7382C26.9808 16.5197 25.8999 17.0786 24.7257 17.4533C22.7575 18.0787 20.7332 18.2395 18.6943 18.0446C17.3033 17.9121 15.9267 17.6291 14.5434 17.4121C14.4541 17.3982 14.3668 17.3703 14.2667 17.3466V14.2638C15.0053 14.4793 15.7362 14.7108 16.4769 14.9046C17.7714 15.2433 19.0897 15.432 20.4297 15.4067C23.1896 15.3552 25.6037 14.3943 27.6988 12.609C29.3056 11.2398 30.5593 9.58242 31.6593 7.7977L31.9499 7.32807C32.2187 8.06517 32.3344 8.84921 32.29 9.63243C32.193 11.7213 31.5638 13.6834 30.8189 15.6155C29.8592 18.1037 28.9011 20.5923 27.9444 23.0812C27.1957 25.0264 26.4462 26.9715 25.696 28.9164C25.6718 28.9793 25.6377 29.0385 25.6129 29.0906C25.1814 28.5586 24.7871 28.0018 24.3194 27.5095C23.41 26.5476 22.3271 25.8779 20.9561 25.8496C19.449 25.8181 18.4786 26.7259 18.1849 28.3117C17.9562 29.5489 18.5255 30.4691 19.2993 31.3094C20.0219 32.0925 20.9045 32.6657 21.8285 33.1941C23.0946 33.9195 24.1625 34.8577 24.7943 36.212C25.2103 37.1028 25.2331 38.0039 24.8459 38.9127C24.8258 38.9802 24.8112 39.0492 24.8021 39.119C25.5216 39.119 26.22 39.1112 26.9183 39.119C29.2741 39.1504 31.6298 39.2262 33.9851 39.2081C35.3937 39.1973 36.8012 39.0442 38.2093 38.9504C38.8989 38.9045 39.4223 38.5849 39.874 38.0529C41.1871 36.5063 42.335 34.8505 43.196 33.0106C45.2836 28.5657 45.7706 23.5372 44.5746 18.7751C43.6786 15.248 41.9737 12.1559 39.491 9.49582C37.9692 7.86609 36.1972 6.4889 34.2416 5.41602C31.3914 3.84575 28.3403 2.98226 25.087 2.81472C22.0545 2.65367 19.0229 3.14741 16.1988 4.26227C13.3746 5.37714 10.8243 7.08694 8.72159 9.27518C6.50984 11.5728 4.88135 14.2329 3.87329 17.2621C3.26649 19.0826 2.90917 20.9768 2.81103 22.8931C2.66147 25.7603 3.09591 28.628 4.08807 31.3227C5.08022 34.0174 6.60947 36.4831 8.58326 38.5704C9.68223 39.7384 10.9089 40.7795 12.2403 41.6744C12.3123 41.7317 12.3812 41.7928 12.4467 41.8574C10.9617 41.8574 9.55261 41.861 8.144 41.8502C8.03458 41.8502 7.90605 41.7687 7.81934 41.6893C5.50849 39.5757 3.66063 37.1146 2.315 34.288C1.03337 31.6006 0.270419 28.696 0.0660893 25.7263C-0.138615 22.9729 0.133072 20.2049 0.869235 17.5435C1.61439 14.8421 2.83581 12.2949 4.47617 10.0216C5.85607 8.08949 7.51716 6.37401 9.40447 4.93195C12.2434 2.76678 15.4105 1.29291 18.9142 0.542321C20.9729 0.101569 23.0799 -0.0717042 25.183 0.0268044C29.9494 0.255148 34.5386 1.90199 38.3606 4.75564C42.2216 7.64448 45.1244 11.6253 46.6927 16.1819C48.2609 20.7385 48.4221 25.6606 47.1554 30.3098C46.6169 32.278 45.8256 34.1683 44.8012 35.9336C43.852 37.5791 42.7479 39.103 41.3667 40.4124C40.9372 40.8196 40.4577 41.179 39.9731 41.5228C39.6355 41.763 39.2504 41.8677 38.8091 41.8667C32.7133 41.8529 26.6174 41.8498 20.5215 41.8574H20.057C20.2882 41.5197 20.4875 41.2449 20.6692 40.9599C21.1265 40.2423 21.5466 39.5056 21.7325 38.6627C21.988 37.5147 21.7082 36.5527 20.7383 35.8372C19.8061 35.149 18.8523 34.4896 17.9392 33.7751C16.7737 32.8642 15.9747 31.696 15.7414 30.2057C15.4792 28.5478 15.5999 26.9337 16.5863 25.5145C17.5536 24.1226 18.9091 23.3689 20.6304 23.3457C22.0003 23.3266 23.2995 23.5859 24.4898 24.4118Z" fill="black"/>
</g>
</svg>
              </div>
            </a>
          </Link>
          {navBarTitle
            ? (
            <p className="ml-2 font-medium text-day dark:text-night header-name">
              {navBarTitle}
            </p>
              )
            : (
            <p className="ml-2 font-medium text-day dark:text-night header-name">
              {BLOG.title},{' '}
              <span className="font-normal">{BLOG.description}</span>
            </p>
              )}
        </div>
        <NavBar />
      </div>
    </>
  )
}

export default Header