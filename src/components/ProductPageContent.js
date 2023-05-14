import { Fragment, useState } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon, MinusIcon, PlusIcon} from '@heroicons/react/20/solid'
import classNames from 'classnames'

const products = [
    {
      id: 1,
      name: 'Product 1',
      image: 'https://via.placeholder.com/150',
      price: '$10.99'
    },
    {
      id: 2,
      name: 'Product 2',
      image: 'https://via.placeholder.com/150',
      price: '$12.99'
    },
    {
      id: 3,
      name: 'Product 3',
      image: 'https://via.placeholder.com/150',
      price: '$12.99'
    },
    {
      id: 4,
      name: 'Product 4',
      image: 'https://via.placeholder.com/150',
      price: '$12.99'
    },
    {
      id: 5,
      name: 'Product 5',
      image: 'https://via.placeholder.com/150',
      price: '$12.99'
    },
    {
      id: 6,
      name: 'Product 6',
      image: 'https://via.placeholder.com/150',
      price: '$12.99'
    },
    {
      id: 7,
      name: 'Product 7',
      image: 'https://via.placeholder.com/150',
      price: '$12.99'
    },
    // Add more products here...
  ];

  const sortOptions = [
    { name: 'Most Popular', href: '#', current: true },
    { name: 'Best Rating', href: '#', current: false },
    { name: 'Newest', href: '#', current: false },
    { name: 'Price: Low to High', href: '#', current: false },
    { name: 'Price: High to Low', href: '#', current: false },
  ]

  const ProductItem = ({ product }) => {
    return (
        <a href="/detailproduct">
            <div className="flex flex-col items-center justify-center hover:drop-shadow-lg">
                <div className="bg-white-kj rounded-md pb-2">
                <img src={product.image} alt={product.name} className="w-40 h-40 object-cover rounded-md" />
                <h3 className="text-lg text-dark-blue-kj font-norwester uppercase font-medium my-2 px-2">{product.name}</h3>
                <p className="text-gray-500 px-2">{product.price}</p>
                </div>
            </div>
        </a>
    );
  };

  const filters = [
    {
      id: 'categories',
      name: 'Product Categories',
      options: [
        { value: 'allc', label: 'All Products', checked: true },
        { value: 'ts', label: 'Total Station', checked: false },
        { value: 'al', label: 'Autolevel', checked: false },
        { value: 'ac', label: 'Accessories', checked: false },
        { value: 'ch', label: 'Charger', checked: false },
        { value: 'thl', label: 'Theodolite', checked: false },
        { value: 'mte', label: 'Material Testing Equipment', checked: false },
      ],
    },
    {
      id: 'brand',
      name: 'Brands',
      options: [
        { value: 'allb', label: 'All Brands', checked: true },
        { value: 'sk', label: 'Sokkia', checked: false },
        { value: 'tc', label: 'Topcon', checked: false },
        { value: 'nk', label: 'Nikkon', checked: false },
        { value: 'ym', label: 'Yamayo', checked: false },
        { value: 'idn', label: 'Lokal', checked: false },
        { value: 'chn', label: 'China', checked: false },
      ],
    },
  ]
  
function ProductPageContent() {
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
                {/* Filter sidebar */}
                <div className="w-1/4 mr-4 mb-5">
                    {/* Filters */}
                    <div className='rounded-md border-grey-200 border-2 p-3 bg-white'>
                    <h2 className='font-norwester text-xl '>Filter</h2>
                    <form className="hidden lg:block">
                        <h3 className="sr-only">Categories</h3>
                        {filters.map((section) => (
                        <Disclosure as="div" key={section.id} className="border-b border-gray-200 py-6">
                            {({ open }) => (
                            <>
                                <h3 className="-my-3 flow-root">
                                <Disclosure.Button className="flex w-full items-center justify-between py-3 text-sm text-gray-400 hover:text-gray-500">
                                    <span className="font-medium font-norwester text-gray-900">{section.name}</span>
                                    <span className="ml-6 flex items-center">
                                    {open ? (
                                        <MinusIcon className="h-5 w-5" aria-hidden="true" />
                                    ) : (
                                        <PlusIcon className="h-5 w-5" aria-hidden="true" />
                                    )}
                                    </span>
                                </Disclosure.Button>
                                </h3>
                                <Disclosure.Panel className="pt-6">
                                <div className="space-y-4">
                                    {section.options.map((option, optionIdx) => (
                                    <div key={option.value} className="flex items-center">
                                        <input
                                        id={`filter-${section.id}-${optionIdx}`}
                                        name={`${section.id}[]`}
                                        defaultValue={option.value}
                                        type="checkbox"
                                        defaultChecked={option.checked}
                                        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                        />
                                        <label
                                        htmlFor={`filter-${section.id}-${optionIdx}`}
                                        className="ml-3 text-sm text-gray-600 font-norwester"
                                        >
                                        {option.label}
                                        </label>
                                    </div>
                                    ))}
                                </div>
                                </Disclosure.Panel>
                            </>
                            )}
                        </Disclosure>
                        ))}
                    </form>
                    </div>
                </div>
                
                {/* Product list */}
                <div className="ml-4 mb-5 w-3/4 p-5 bg-light-blue-kj rounded-lg">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {products.map((product) => (
                    <ProductItem key={product.id} product={product} />
                    ))}
                </div>
                </div>
            </div>
            </Fragment>
    );
};

export default ProductPageContent;