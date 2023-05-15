import { Fragment, useEffect, useState } from 'react';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { ChevronDownIcon, MinusIcon, PlusIcon } from '@heroicons/react/20/solid';
import classNames from 'classnames';
import axios from 'axios';

const formatRupiah = (money) => {
  return new Intl.NumberFormat('id-ID',
    { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }
  ).format(money);
};

const ProductItem = ({ product }) => {
  return (
    <a href={`/product/${product.id}`} className="flex flex-col items-center justify-center mb-3">
      <div className="bg-white-kj rounded-md pb-2 w-52 h-64">
        <img src={`${process.env.REACT_APP_API_URL}/${product.cover}`} alt={product.name} className="w-full h-40 object-cover rounded-md" />
        <h3 className="text-lg text-dark-blue-kj font-norwester uppercase font-medium my-2 px-2 truncate">{product.name}</h3>
        <p className="text-gray-500 px-2">{formatRupiah(product.price)}</p>
      </div>
    </a>
  );
};

function ProductPageContent() {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [products, setProducts] = useState([]);
  const [brands, setBrands] = useState([]);
  const [categories, setCategories] = useState([]);
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('');
  const [brand, setBrand] = useState('');
  const [sort, setSort] = useState('');
  const [order, setOrder] = useState('');

  const filters = [
    {
      id: 'categories',
      name: 'Product Categories',
      options: [
        { value: '', label: 'All Products', checked: true },
      ],
    },
    {
      id: 'brand',
      name: 'Brands',
      options: [
        { value: '', label: 'All Brands', checked: true },
      ],
    },
  ];

  const sortOptions = [
    { name: 'Newest', href: '#', current: true },
    { name: 'Oldest', href: '#', current: false },
    { name: 'Price: Low to High', href: '#', current: false },
    { name: 'Price: High to Low', href: '#', current: false },
  ];

  // const searchParams = new URLSearchParams(document.location.search);

  useEffect(() => {

    const getData = async () => {
      const res = await axios.get(`${process.env.REACT_APP_API_URL}/products?name=${query}&category=${category}&brand=${brand}&sort${sort}&order=${order}`);
      setProducts(res.data);
    };

    const getFilters = async () => {
      const resBrand = await axios.get(`${process.env.REACT_APP_API_URL}/brands`);
      const resCategory = await axios.get(`${process.env.REACT_APP_API_URL}/categories`);
      setBrands(resBrand.data);
      setCategories(resCategory.data);
    };
    getFilters();
    getData();
  }, [query, brand, category, sort, order]);

  brands.map((br) => {
    const data = {
      value: br.name,
      label: br.name,
      checked: brand === br.name
    };

    filters[1].options.push(data);
  });

  categories.map((ct) => {
    const data = {
      value: ct.name,
      label: ct.name,
      checked: brand === ct.name
    };

    filters[0].options.push(data);
  });

  const dataChange = (data, name) => {
    if (data === "brand") {
      setBrand(name);
    } else {
      setCategory(name);
    }
  };

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
                                type="radio"
                                defaultChecked={option.checked}
                                onChange={(e) => dataChange(section.id, e.target.value)}
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