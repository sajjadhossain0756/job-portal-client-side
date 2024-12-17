import Bannar from '../components/Bannar'
import Carousel from '../components/Carousel'
import DisplayJobs from '../components/DisplayJobs'
import TabCategories from '../components/TabCategories'

const Home = () => {
  return (
    <div className='w-11/12 mx-auto'>
      {/* <Carousel /> */}
      <Bannar></Bannar>
      <DisplayJobs></DisplayJobs>
      <TabCategories />
    </div>
  )
}

export default Home
