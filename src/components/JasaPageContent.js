import { Fragment, useState } from 'react';

const jasa = [
  {
    id: 1,
    name: 'Survey',
    image: 'https://greathotmixindo.com/wp-content/uploads/2021/11/jasa-pengukuran-topografi-bekasi-profesional.webp',
  },
  {
    id: 2,
    name: 'Service',
    image: 'https://akurasimisisurvey.com/wp-content/uploads/2021/03/service-kalibrasi-total-station.png',
  },
  {
    id: 3,
    name: 'Kalibrasi',
    image: 'https://www.kucari.com/wp-content/uploads/2022/03/kalibrasi-totalstation.jpeg',
  },
  {
    id: 4,
    name: 'Pemetaan',
    image: 'https://cadex.files.wordpress.com/2018/05/image13.png',
  },
  {
    id: 5,
    name: 'Penjualan',
    image: 'https://www.jasaukurtanah.com/wp-content/uploads/2021/04/GT-1200_Topcon_total-robotic-station-W.jpg',
  },
  {
    id: 6,
    name: 'Penyewaan',
    image: 'https://cdn.britannica.com/59/145859-050-E850F891/Surveyor-theodolite-construction-site.jpg',
  },
];

const JasaItem = ({ Jasa }) => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center mb-3">
        <div className="bg-white-kj rounded-md pb-2 w-52 h-64">
          <img src={Jasa.image} alt={Jasa.name} className="w-full h-52 object-cover rounded-md" />
          <h3 className="text-lg text-dark-blue-kj font-norwester uppercase font-medium my-2 px-2 truncate">{Jasa.name}</h3>
        </div>
      </div>
    </div>
  );
};

function JasaPageContent() {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  return (
    <Fragment>
      <div className="flex mx-20">
        {/* Jasa list */}
        <div className="ml-4 mb-5 w-full p-5 bg-light-blue-kj rounded-lg">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {jasa.map((Jasa) => (
              <JasaItem key={Jasa.id} Jasa={Jasa} />
            ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default JasaPageContent;