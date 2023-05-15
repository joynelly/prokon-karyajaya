import { Fragment, useEffect, useState, useContext } from 'react';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { ChevronDownIcon, MinusIcon, PlusIcon } from '@heroicons/react/20/solid';
import classNames from 'classnames';
import axios from 'axios';
import { SearchContext } from '../lib/searchContext';

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
  const [category, setCategory] = useState('');
  const [brand, setBrand] = useState('');
  const [sort, setSort] = useState('');
  const [order, setOrder] = useState('');
  const [sortName, setSortName] = useState('newest');
  const { searchKeyword, setSearchKeyword } = useContext(SearchContext);

  const filters = [
    {
      id: 'category',
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
    {
      id: 'sort',
      name: 'Sort By',
      options: [
        { value: 'newest', label: 'Newest', checked: "newest" === sortName },
        { value: 'oldest', label: 'Oldest', checked: "oldest" === sortName },
        { value: 'expensive', label: 'Price: High to Low', checked: "expensive" === sortName },
        { value: 'cheapest', label: 'Price: Low to High', checked: "cheapest" === sortName }
      ],
    }
  ];

  useEffect(() => {
    const getData = async () => {
      const res = await axios.get(`${process.env.REACT_APP_API_URL}/products?name=${searchKeyword}&category=${category}&brand=${brand}&sort=${sort}&order=${order}`);
      setProducts(res.data);
    };

    getData();
  }, [searchKeyword, brand, category, sort, order]);

  useEffect(() => {
    const getFilters = async () => {
      const resBrand = await axios.get(`${process.env.REACT_APP_API_URL}/brands`);
      const resCategory = await axios.get(`${process.env.REACT_APP_API_URL}/categories`);
      setBrands(resBrand.data);
      setCategories(resCategory.data);
    };
    getFilters();
  }, []);

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
    } else if (data === "category") {
      setCategory(name);
    } else {
      if (name === "newest") {
        setSort("created_at");
        setOrder("desc");
      } else if (name === "oldest") {
        setSort("created_at");
        setOrder("asc");
      } else if (name === "cheapest") {
        setSort("price");
        setOrder("asc");
      } else {
        setSort("price");
        setOrder("desc");
      }
      setSortName(name);
    }
  };

  return (
    <Fragment>
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