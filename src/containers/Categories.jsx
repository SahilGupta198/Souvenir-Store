import pro1 from '../assets/pro-2.jpeg'
import pro2 from '../assets/pro-7.jpeg'
import pro3 from '../assets/pro-9.jpeg'
import pro4 from '../assets/pro-12.jpeg'
import pro5 from '../assets/pro-16.jpeg'
import pro6 from '../assets/pro-18.jpeg'
import pro7 from '../assets/pro-21.jpeg'
import pro8 from '../assets/pro-22.jpeg'

const categories = [
  {
    id: 1,
    img: pro1,
    title: 'JOURNAL',
  },
  {
    id: 2,
    img: pro2,
    title: 'BOOKMARK',
  },
  {
    id: 3,
    img: pro3,
    title: 'PENCIL CHARMS',
  },
  {
    id: 4,
    img: pro4,
    title: 'POSTCARDS',
  },
  {
    id: 5,
    img: pro5,
    title: 'DOOR HANGINGS',
  },
  {
    id: 6,
    img: pro6,
    title: 'BOARD GAMES',
  },
  {
    id: 7,
    img: pro7,
    title: 'LIGHT HOLDERS',
  },
  {
    id: 8,
    img: pro8,
    title: 'PAPER WEIGHTS',
  },
]

const Categories = () => {
  return (
    <section id="categories" className="pt-20 ">
      {/* HEADINGS */}
      <div className="md:w-3/4 mx-auto text-center">
        <h3 className="font-playfair text-main font-bold text-4xl md:text-6xl mb-8  tracking-tight leading-[2.8rem] md:leading-[4rem] drop-shadow-lg uppercase">
          <span className='bg-gradient2 text-white italic rounded-lg drop-shadow-lg'>Explore</span> our luxury range of souvenirs.</h3>
      </div>

      {/* PROJECTS */}
      <div className="flex justify-center ">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {categories.map(({ id, img, title }) => (
            // category box
            <div key={id} className="relative group overflow-hidden border-1  border-black rounded-md shadow-md shadow-gray-800 bg-main my-8 md:my-0">

              <div className="absolute group-hover:bg-main2/80 w-full h-full z-10 transition-all duration-1000 "></div>
              <img className="group-hover:scale-110 transition-all duration-1000" src={img} key={id} alt="test" />

              {/* hover text */}
              <div className="absolute bottom-12 md:bottom-32 -left-full group-hover:left-1 md:group-hover:left-4 transition-all duration-1000 z-[12]">
                <span className=" text-gray-100 text-sm md:text-2xl font-bold font-playfair">{title}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
