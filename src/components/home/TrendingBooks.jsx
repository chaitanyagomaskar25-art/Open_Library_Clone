import { ChevronLeft, ChevronRight } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router'

const TrendingBooks = () => {
  return (
    <div>
      <Link>Trending Books</Link>
      <div>
        <div>
            <ChevronLeft />
        </div>
        <div>
            All Books
        </div>
        <div>
            <ChevronRight />
        </div>
      </div>
    </div>
  )
}

export default TrendingBooks
