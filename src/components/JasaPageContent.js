import { Fragment, useState } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon, MinusIcon, PlusIcon} from '@heroicons/react/20/solid'
import classNames from 'classnames'

const jasa = [
    {
      id: 1,
      name: 'Jasa 1',
      image: 'https://via.placeholder.com/150',
      price: '$10.99'
    },
    {
      id: 2,
      name: 'Jasa 2',
      image: 'https://via.placeholder.com/150',
      price: '$12.99'
    },
    {
      id: 3,
      name: 'Jasa 3',
      image: 'https://via.placeholder.com/150',
      price: '$12.99'
    },
    {
      id: 4,
      name: 'Jasa 4',
      image: 'https://via.placeholder.com/150',
      price: '$12.99'
    },
    {
      id: 5,
      name: 'Jasa 5',
      image: 'https://via.placeholder.com/150',
      price: '$12.99'
    },
    {
      id: 6,
      name: 'Jasa 6',
      image: 'https://via.placeholder.com/150',
      price: '$12.99'
    },
    {
      id: 7,
      name: 'Jasa 7',
      image: 'https://via.placeholder.com/150',
      price: '$12.99'
    },
    // Add more jasa here...
  ];

  const sortOptions = [
    { name: 'Most Popular', href: '#', current: true },
    { name: 'Best Rating', href: '#', current: false },
    { name: 'Newest', href: '#', current: false },
    { name: 'Price: Low to High', href: '#', current: false },
    { name: 'Price: High to Low', href: '#', current: false },
  ]

  const JasaItem = ({ Jasa }) => {
    return (
        <a href="/detailJasa">
            <div className="flex flex-col items-center justify-center hover:drop-shadow-lg">
                <div className="bg-white rounded-md pb-2">
                <img src={Jasa.image} alt={Jasa.name} className="w-40 h-40 object-cover rounded-md" />
                <h3 className="text-lg text-dark-blue-kj font-norwester uppercase font-medium my-2 px-2">{Jasa.name}</h3>
                </div>
            </div>
        </a>
    );
  };
  
function JasaPageContent() {
    const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)
    
    return (
        <Fragment>
            <div className="flex items-baseline justify-end pb-6 px-20">
                <Menu as="div" className="relative inline-block text-right">
                    <div>
                    <Menu.Button className="group inline-flex justify-center text-sm font-medium text-dark-blue-kj font-norwester hover:text-gray-900">
                        Sort
                        <ChevronDownIcon
                        className="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                        aria-hidden="true"
                        />
                    </Menu.Button>
                    </div>

                    <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                    >
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <div className="py-1">
                        {sortOptions.map((option) => (
                            <Menu.Item key={option.name}>
                            {({ active }) => (
                                <a
                                href={option.href}
                                className={classNames(
                                    option.current ? 'font-medium text-gray-900' : 'text-gray-500',
                                    active ? 'bg-gray-100' : '',
                                    'block px-4 py-2 text-sm'
                                )}
                                >
                                {option.name}
                                </a>
                            )}
                            </Menu.Item>
                        ))}
                        </div>
                    </Menu.Items>
                    </Transition>
                </Menu>
            </div>

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