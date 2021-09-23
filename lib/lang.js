import BLOG from '@/blog.config'

const lang = {
  en: {
    NAV: {
      INDEX: 'Blog',
      RSS: 'RSS',
      SEARCH: '<svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M7.71429 12.4286C10.3179 12.4286 12.4286 10.3179 12.4286 7.71429C12.4286 5.11066 10.3179 3 7.71429 3C5.11066 3 3 5.11066 3 7.71429C3 10.3179 5.11066 12.4286 7.71429 12.4286ZM7.71429 15.4286C11.9748 15.4286 15.4286 11.9748 15.4286 7.71429C15.4286 3.4538 11.9748 0 7.71429 0C3.4538 0 0 3.4538 0 7.71429C0 11.9748 3.4538 15.4286 7.71429 15.4286Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M15.7287 19.4144L9.72867 13.4144L12.5571 10.5859L18.5571 16.5859L15.7287 19.4144Z" fill="black"/>
</svg>
 Search',
      ABOUT: 'About'
    },
    PAGINATION: {
      PREV: 'Prev',
      NEXT: 'Next'
    },
    POST: {
      BACK: 'Back',
      TOP: 'Top'
    }
  },
  'zh-CN': {
    NAV: {
      INDEX: '博客',
      RSS: '订阅',
      SEARCH: '搜索',
      ABOUT: '关于'
    },
    PAGINATION: {
      PREV: '上一页',
      NEXT: '下一页'
    },
    POST: {
      BACK: '返回',
      TOP: '回到顶部'
    }
  },
  'zh-HK': {
    NAV: {
      INDEX: '網誌',
      RSS: '訂閱',
      SEARCH: '搜尋',
      ABOUT: '關於'
    },
    PAGINATION: {
      PREV: '上一頁',
      NEXT: '下一頁'
    },
    POST: {
      BACK: '返回',
      TOP: '回到頂端'
    }
  },
  'zh-TW': {
    NAV: {
      INDEX: '部落格',
      RSS: '訂閱',
      SEARCH: '搜尋',
      ABOUT: '關於'
    },
    PAGINATION: {
      PREV: '上一頁',
      NEXT: '下一頁'
    },
    POST: {
      BACK: '返回',
      TOP: '回到頂端'
    }
  },
  ja: {
    NAV: {
      INDEX: 'ブログ',
      RSS: '購読',
      SEARCH: '検索',
      ABOUT: 'このサイトについて'
    },
    PAGINATION: {
      PREV: '前ページ',
      NEXT: '次ページ'
    },
    POST: {
      BACK: '戻る',
      TOP: 'トップに戻る'
    }
  }
}

export const fetchLocaleLang = () => {
  switch (BLOG.lang.toLowerCase()) {
    case 'zh-cn':
    case 'zh-sg':
      return lang['zh-CN']
    case 'zh-hk':
      return lang['zh-HK']
    case 'zh-tw':
      return lang['zh-TW']
    case 'ja':
    case 'ja-jp':
      return lang.ja
    case 'en':
    case 'en-us':
    default:
      return lang.en
  }
}
