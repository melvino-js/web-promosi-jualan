import Navbar from "./componens/navbar";
import HeroSection from "./componens/HeroSection";
import Card from "./componens/Card";
import Footer from "./componens/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <HeroSection />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-3 mb-3">
        <Card
          src="/asset/img1.jpg"
          name=""
          description="lorem ipsum dolor sit amet"
          price={20000}
          onClick={() => (window.location.href = "")}
        />
        <Card
          src="/asset/img2.jpg"
          name=""
          description="lorem ipsum dolor sit amet"
          price={30000}
          onClick={() => (window.location.href = "")}
        />
        <Card
          src="/asset/img3.jpg"
          name=""
          description="lorem ipsum dolor sit amet"
          price={25000}
          onClick={() => (window.location.href = "")}
        />
        <Card
          src="/asset/img4.jpg"
          name=""
          description="lorem ipsum dolor sit amet"
          price={100000}
          onClick={() => (window.location.href = "")}
        />
        <Card
          src="/asset/img5.jpg"
          name=""
          description="lorem ipsum dolor sit amet"
          price={40000}
          onClick={() => (window.location.href = "")}
        />
        <Card
          src="/asset/img6.jpg"
          name=""
          description="lorem ipsum dolor sit amet"
          price={25000}
          onClick={() => (window.location.href = "")}
        />
        <Card
          src="/asset/img7.jpg"
          name=""
          description="lorem ipsum dolor sit amet"
          price={50000}
          onClick={() => (window.location.href = "")}
        />
      </div>
      <Footer />
    </div>
  );
}

export default App;
