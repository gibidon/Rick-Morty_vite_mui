import { useState, useRef, useCallback } from 'react'
import { useParams } from 'react-router-dom'
import { TCategoryName, AllCategoryType } from '../../types/types'
import { ItemTemplate } from '../../components/ItemTemplate/ItemTemplate'
import { useLoadCategory } from '../../hooks/useLoadCategory'
import * as styles from './category.module.scss'

import { Button, Box } from '@mui/material'
import Grid2 from '@mui/material/Unstable_Grid2/Grid2'
import { theme } from '../../muiThemes/theme'

export const CategoryPage = () => {
  const { category } = useParams<{ category: TCategoryName }>()
  const [page, setPage] = useState(1)
  const { items, isLoading, error, hasMore } = useLoadCategory(category, page)

  const observer = useRef<IntersectionObserver | null>()

  const lastNodeRef = useCallback(
    (node: HTMLDivElement) => {
      if (isLoading) return
      if (observer.current) {
        observer.current.disconnect()
      }
      observer.current = new IntersectionObserver(entries => {
        if (entries[0].isIntersecting && hasMore) {
          setPage(prevState => prevState + 1)
          console.log('IN SCOPE!')
        }
      })

      if (node) {
        observer.current.observe(node)
      }
    },
    [isLoading, hasMore],
  )

  const elems = items?.map((item: AllCategoryType, index) => {
    if (items.length - 1 === index + 1) {
      return (
        <Grid2 sm={2} lg={3} ref={lastNodeRef} key={index}>
          <ItemTemplate key={item.id} item={item} category={category} />
        </Grid2>
      )
    } else {
      return (
        <Grid2 sm={2} lg={3} key={index}>
          <ItemTemplate item={item} category={category} />
        </Grid2>
      )
    }
  })

  return (
    <div>
      {hasMore && (
        <Button
          variant="contained"
          size="large"
          onClick={() => setPage(page + 1)}
        >
          Load more
        </Button>
      )}
      {isLoading && <Box>Loading..</Box>}
      {error && (
        <Box sx={{ color: theme.palette.error.dark }}>Error: {error}</Box>
      )}

      <Grid2 container spacing={3}>
        {elems}
      </Grid2>
      {/* <div className={styles.layout}>{elems}</div> */}
    </div>
  )
}
