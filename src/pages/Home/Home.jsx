import Header from '../../components/Header/Header';
import Nav from '../../components/Nav/Nav';
import Card from '../../components/Card/Card';

import image1 from '../../assets/images/image.jpeg';
import image2 from '../../assets/images/beach.jpg';
import image3 from '../../assets/images/universe.jpeg';

function Home() {
  return (
    <div className="home">
      <Header />
      <Nav />
      <Card image={image1} />
      <Card image={image2} />
      <Card image={image3} />
    </div>
  );
}

export default Home;