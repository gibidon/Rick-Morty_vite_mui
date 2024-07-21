import { Link } from 'react-router-dom'
import { Box } from '@mui/material'
import { styled } from '@mui/material/styles'
import { theme } from '../../muiThemes/theme'
import * as styles from './categoryCard.module.scss'

interface ICategoryProps {
  categoryName: string
  imageUrl: string
}

const CategoryCardComponent = ({ categoryName, imageUrl }: ICategoryProps) => {
  return (
    <Link to={`/category/${categoryName}`}>
      <div className={styles.card}>
        <img src={imageUrl} alt={imageUrl} />
        <div className={styles.title}>{categoryName}</div>
      </div>
    </Link>
  )
}

export const CategoryCard = styled(CategoryCardComponent)`
  backgroundcolor: 'white';
`
