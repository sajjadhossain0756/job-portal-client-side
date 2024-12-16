import Bannar from '../components/Bannar'
import Carousel from '../components/Carousel'
import TabCategories from '../components/TabCategories'

const Home = () => {
  return (
    <div className='w-11/12 mx-auto'>
      {/* <Carousel /> */}
      <Bannar></Bannar>
      <TabCategories />
    </div>
  )
}

export default Home
