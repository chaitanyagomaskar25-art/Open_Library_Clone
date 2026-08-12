import React from 'react'
import { SUBJECTS } from '../../utils/subjects'
import { Link } from 'lucide-react'
import { NavLink } from 'react-router'

const SubjectSection = () => {
    const data = SUBJECTS
  return (
    <div>
      <div>
        {data.map(sub=>(
        <div key={sub.category}>
            <h1 className='text-2xl'>{sub.category}</h1>
            <div>
                {sub.subcategories.map(s=>(
                    <div key={s}>
                        <NavLink to={`/subjects/${s}`} className="text-blue-700">{s}</NavLink>
                    </div>
                ))}
            </div>
        </div>
      ))}
      </div>
      <div>
        <h2>What's a subject heading?</h2>
        <p>As the wise Wikipedia says: "The Library of Congress Subject Headings (LCSH) comprise a thesaurus (in the information science sense, a controlled vocabulary) of subject headings, maintained by the United States Library of Congress, for use in bibliographic records. LC Subject Headings are an integral part of bibliographic control, which is the function by which libraries collect, organize, and disseminate documents.... Subject headings are normally applied to every item within a library's collection and facilitate a user's access to items in the catalog that pertain to similar subject matter."</p>
        <p>Side note: Interestingly, professional library catalogers are often restricted to a limit of 3 in the number of subjects they may use. We collect general subjects, places mentioned, people mentioned, and even the time period the book is about. Feel free to imitate or enhance existing headings, or create an entirely new one. Or two. Or three. Or five.</p>
      </div>
    </div>
  )
}

export default SubjectSection
