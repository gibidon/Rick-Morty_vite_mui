import { Suspense } from 'react'
import { CategoryCard } from '../../components'
import { Container } from '@mui/material'
import { Box } from '@mui/material'
import * as styles from './home.module.scss'
import { Outlet } from 'react-router-dom'

export const Home = () => {
  return (
    <Container maxWidth="lg">
      <Box sx={{ display: 'flex', justifyContent: 'center', fontSize: '32px' }}>
        Select the category:
      </Box>

      <div className={styles.mainLayout}>
        <CategoryCard
          categoryName="character"
          imageUrl="https://steamuserimages-a.akamaihd.net/ugc/1479947365412852641/12C67F1555087DC8C99F035FA1C29BC80F63BD69/?imw=512&amp;&amp;ima=fit&amp;impolicy=Letterbox&amp;imcolor=%23000000&amp;letterbox=false"
        />
        <CategoryCard
          categoryName="episode"
          imageUrl="https://yt3.googleusercontent.com/ytc/AOPolaR5u6op2njPpN4-Ol6eREAMUWK7yFnptHzHiJnSMg=s900-c-k-c0x00ffffff-no-rj"
        />
        <CategoryCard
          categoryName="location"
          imageUrl="https://i.pinimg.com/736x/43/45/04/434504fdedcbb85c95b8ccdccee7421a.jpg"
        />
      </div>
      <Suspense>
        <Outlet />
      </Suspense>
    </Container>
  )
}
