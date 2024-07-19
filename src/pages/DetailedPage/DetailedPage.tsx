import { useParams } from 'react-router-dom'
import { useFetch } from '../../hooks/useFetch'
import { TCategoryName, AllCategoryType } from '../../types/types'
import { BASE_URL } from '../../constants/constants'
import { ItemTemplate } from '../../components/ItemTemplate/ItemTemplate'

export const DetailedPage = () => {
  const { category, id } = useParams<{ category: TCategoryName; id: string }>()
  const { data } = useFetch<AllCategoryType>(`${BASE_URL}/${category}/${id}`)

  return <>{data && <ItemTemplate item={data} category={category} />}</>
}
