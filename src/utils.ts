import { useState, useEffect } from 'react'
import { throttle } from 'lodash'


export const suggestions = ["headache", "cold", "cough", "sneeze", "diarrhea", "temperature", "migraine", "catarrh", "red eye", "swell"]

function useDocumentScrollThrottled(callback: any) {
  const [, setScrollPosition] = useState(0)
  let previousScrollTop = 0

  function handleDocumentScroll() {
    const { scrollTop: currentScrollTop } = document.documentElement || document.body

    setScrollPosition((previousPosition) => {
      previousScrollTop = previousPosition
      return currentScrollTop
    })

    callback({ previousScrollTop, currentScrollTop })
  }

  const handleDocumentScrollThrottled = throttle(handleDocumentScroll, 250)

  useEffect(() => {
    window.addEventListener('scroll', handleDocumentScrollThrottled)

    return () => window.removeEventListener('scroll', handleDocumentScrollThrottled)
  }, [])
}

export default useDocumentScrollThrottled
