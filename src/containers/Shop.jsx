import pro1 from '../assets/pro-1.jpeg'
import pro2 from '../assets/pro-2.jpeg'
import pro3 from '../assets/pro-3.jpeg'
import pro4 from '../assets/pro-4.jpeg'
import pro5 from '../assets/pro-5.jpeg'
import pro6 from '../assets/pro-6.jpeg'
import pro7 from '../assets/pro-7.jpeg'
import pro8 from '../assets/pro-8.jpeg'
import pro9 from '../assets/pro-9.jpeg'
import pro10 from '../assets/pro-10.jpeg'
import pro11 from '../assets/pro-11.jpeg'
import pro12 from '../assets/pro-12.jpeg'
import pro13 from '../assets/pro-13.jpeg'
import pro14 from '../assets/pro-14.jpeg'
import pro15 from '../assets/pro-15.jpeg'
import pro16 from '../assets/pro-16.jpeg'
import pro17 from '../assets/pro-17.jpeg'
import pro18 from '../assets/pro-18.jpeg'
import pro19 from '../assets/pro-19.jpeg'
import pro20 from '../assets/pro-20.jpeg'
import pro21 from '../assets/pro-21.jpeg'
import pro22 from '../assets/pro-22.jpeg'
import pro23 from '../assets/pro-23.jpeg'

const products = [
  {
    id: 1,
    img: pro1,
    title: 'Journal | Indigo Design',
    price: '299',
  },
  {
    id: 2,
    img: pro2,
    title: 'Notebook | Hardbound tree',
    price: '489',
  },
  {
    id: 3,
    img: pro3,
    title: 'Journal | Blue Design',
    price: '599',
  },
  {
    id: 4,
    img: pro4,
    title: 'Giftbox | Silk Tree Print',
    price: '159',
  },
  {
    id: 5,
    img: pro5,
    title: 'Giftbox | Red Royal Print',
    price: '399',
  },
  {
    id: 6,
    img: pro6,
    title: 'Bookmark | Tree Leaf',
    price: '799',
  },
  {
    id: 7,
    img: pro7,
    title: 'Bookmark | Alphabet',
    price: '28999',
  },
  {
    id: 8,
    img: pro8,
    title: 'Bookmark | Shree Krishna',
    price: '699',
  },
  {
    id: 9,
    img: pro9,
    title: 'Pencils | Tree Charm',
    price: '699',
  },
  {
    id: 10,
    img: pro10,
    title: 'Pencils | Mantra Print',
    price: '699',
  },
  {
    id: 11,
    img: pro11,
    title: 'Pencils | Blue Print',
    price: '699',
  },
  {
    id: 12,
    img: pro12,
    title: 'Postcard | Vintage',
    price: '699',
  },
  {
    id: 13,
    img: pro13,
    title: 'Postcard | Floral Tree | Classic',
    price: '699',
  },
  {
    id: 14,
    img: pro14,
    title: 'Door Hanging | Decorative Leaf',
    price: '699',
  },
  {
    id: 15,
    img: pro15,
    title: 'Door Hanging | Decorative Peacock',
    price: '699',
  },
  {
    id: 16,
    img: pro16,
    title: 'Door Hanging | Decorative Triangle',
    price: '699',
  },
  {
    id: 17,
    img: pro17,
    title: 'Board Game | Dominos | Wooden',
    price: '699',
  },
  {
    id: 18,
    img: pro18,
    title: 'Board Game | Tic Tac Toe | Wooden',
    price: '699',
  },
  {
    id: 19,
    img: pro19,
    title: 'Tea Light Holders | Aerospace Aluminium',
    price: '699',
  },
  {
    id: 20,
    img: pro20,
    title: 'Tea Light Holders | Lotus Leaf',
    price: '699',
  },
  {
    id: 21,
    img: pro21,
    title: 'Tea Light Holders | Gayatri Mantra',
    price: '699',
  },
  {
    id: 22,
    img: pro22,
    title: 'Paper Weight | Chess King & Queen',
    price: '699',
  },
  {
    id: 23,
    img: pro23,
    title: 'Paper Weight | Aeroplane Toy',
    price: '699',
  },
]

const Shop = () => {
  return (
    <section id="shop" className="py-20 mx-2">

      {/* HEADING */}
      <div className=" md:w-1/2 mx-auto text-center mb-10 md:mb-20">
        <p className=" font-playfair text-light font-bold text-4xl md:text-6xl mb-2  tracking-tight leading-[2.8rem] md:leading-[4rem] drop-shadow-lg"><span className='bg-main2 md:bg-gradient2 text-light italic rounded-lg drop-shadow-lg'>SHOP</span> WITH US</p>
        <p className=" my-3 md:my-6 mx-auto font-bold text-sm md:text-base leading-[1.2rem] md:leading-[1rem] text-center w-3/4 uppercase">
          Begin your souvenir journey with us today and discover treasures from around the world</p>
      </div>

      {/* products */}
      <div className="flex flex-wrap justify-center gap-4 md:gap-10 ">
        {products.map(({ id, img, title, price }) => (

          // /* product card */ 
          < div key={id} className="w-2/5 md:w-1/5 flex flex-col items-center p-1 md:p-4 rounded-md shadow-lg shadow-main hover:shadow-md transition duration-500  text-black bg-gray-100" >

            {/* thumbnail */}
            < div className="w-full bg-gray-100 mb-3 md:mb-10  flex items-center rounded-md shadow-md shadow-gray-700 overflow-hidden" >
              <img className='hover:scale-125 transition-all duration-1000 w-full' src={img} alt={`Product No. ${id}`} />
            </div>

            {/* details */}
            <div className="flex flex-col items-center">
              <span className="font-playfair font-bold text-sm md:text-lg md:leading-[1.2rem] md:my-1 drop-shadow-sm text-center">{title}</span>

              <span className="mt-2 md:mt-6 text-center rounded-md shadow-md w-fit px-1 md:px-6 py-1 md:py-2 bg-gradient3  text-white font-playfair font-bold text-xs md:text-md hover:scale-95 hover:cursor-pointer transition duration-200 uppercase border border-white">Add to Cart</span>
            </div>

          </div>
        ))}
      </div >
    </section >
  );
};

export default Shop;
