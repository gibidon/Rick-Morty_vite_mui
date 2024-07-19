import { Link } from 'react-router-dom'
import { useMatch } from 'react-router-dom'
import { AllCategoryType, TCategoryName } from '../../types/types'
import * as styles from './itemTemplate.module.scss'

interface ItemTemplateProps {
  item: AllCategoryType
  category?: TCategoryName
}

export const ItemTemplate = ({ item, category }: ItemTemplateProps) => {
  // console.log('item in item template:', item)
  console.log('i,cat', item, category)
  const isDetailedPage = useMatch(`/category/${category}/${item.id}`)
  console.log('isDet', isDetailedPage)

  return isDetailedPage ? (
    <div className={styles.template}>
      {'image' in item && <img src={item.image} />}
      {Object.entries(item).map(([key, value]: [string, string]) => (
        <div key={key}>
          {key !== 'image' && typeof value === 'string' && <div>{value}</div>}
        </div>
      ))}
    </div>
  ) : (
    <div className={styles.template}>
      <Link to={`/category/${category}/${item.id}`}>
        {'image' in item && <img src={item.image} />}
        {Object.entries(item).map(([key, value]: [string, string]) => (
          <div key={key}>
            {key !== 'image' && typeof value === 'string' && <div>{value}</div>}
          </div>
        ))}
      </Link>
    </div>
  )
}
