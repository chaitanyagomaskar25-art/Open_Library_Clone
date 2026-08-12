import { useQuery } from '@tanstack/react-query';
import React from 'react'
import { getSubjectRevisionHistory } from '../../api/subjectsApi';

const SubjectHistory = ({subject}) => {
    const { data, isPending, isError } = useQuery({
  queryKey: ["subject-history",subject],
  queryFn: () => getSubjectRevisionHistory(subject),
});
console.log(data);

  return (
    <div>
      SubjectHistory
SubjectHistory
    </div>
  )
}

export default SubjectHistory
