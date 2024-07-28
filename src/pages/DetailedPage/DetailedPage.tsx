import { useLocation, useParams, useSearchParams } from 'react-router-dom'
import { useFetch } from '../../hooks/useFetch'
import { TCategoryName, AllCategoryType } from '../../types/types'
import { BASE_URL } from '../../constants/constants'
import { ItemTemplate } from '../../components/ItemTemplate/ItemTemplate'

export const DetailedPage = () => {
  const { category, id } = useParams<{ category: TCategoryName; id: string }>()
  const { data, isLoading, error } = useFetch<AllCategoryType>(
    `${BASE_URL}/${category}/${id}`,
  )

  const [searchParams, setSearchParams] = useSearchParams()
  console.log('sp', searchParams)

  const location = useLocation()
  console.log('loc', location)

  return (
    <>
      {data && <ItemTemplate item={data} category={category} />}
      {isLoading && <div>Loading..</div>}
      {error && <div>Error: {error}</div>}
    </>
  )
}
