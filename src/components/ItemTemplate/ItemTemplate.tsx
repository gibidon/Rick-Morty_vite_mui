import { Link } from 'react-router-dom'
import { useMatch } from 'react-router-dom'
import { AllCategoryType, TCategoryName } from '../../types/types'
import { Paper, styled } from '@mui/material'

interface ItemTemplateProps {
  item: AllCategoryType
  category?: TCategoryName
}

const ItemTemplatePaper = styled(Paper)({
  color: 'white',
  padding: '8px 3px',
  backgroundColor: 'inherit',
  border: '1px solid rgb(180, 112, 23)',
  overflow: 'hidden',
  borderRadius: '8px',

  '&:hover': {
    boxShadow: '0px 0px 1px 2px rgba(242, 121, 53, 0.9)',
  },
})

export const ItemTemplate = ({ item, category }: ItemTemplateProps) => {
  const isDetailedPage = useMatch(`/category/${category}/${item.id}`)

  return isDetailedPage ? (
    <ItemTemplatePaper>
      {'image' in item && <img src={item.image} />}
      {Object.entries(item).map(([key, value]: [string, string]) => (
        <div key={key}>
          {key !== 'image' && typeof value === 'string' && <div>{value}</div>}
        </div>
      ))}
    </ItemTemplatePaper>
  ) : (
    <ItemTemplatePaper>
      <Link to={`/category/${category}/${item.id}`}>
        {'image' in item && <img src={item.image} />}
        {Object.entries(item).map(([key, value]: [string, string]) => (
          <div key={key}>
            {key !== 'image' && typeof value === 'string' && <div>{value}</div>}
          </div>
        ))}
      </Link>
    </ItemTemplatePaper>
  )
}
