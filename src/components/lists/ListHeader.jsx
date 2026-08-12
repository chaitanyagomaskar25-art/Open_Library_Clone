import React from 'react'
import { getLists } from '../../api/listApi';

const ListHeader = () => {
    const { data, isPending, isError } = useQuery({
  queryKey: ["lists"],
  queryFn: getLists,
});
console.log(data)
  return (
    <div>
      
    </div>
  )
}

export default ListHeader
