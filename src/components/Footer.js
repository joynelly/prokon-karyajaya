import React, { Fragment } from "react";
import logo_kjs from "../assets/logo-kjs.png";

function Footer(){
    return(
        <Fragment>
            <footer class="bg-dark-blue-kj w-full py-4 px-6 text-white mb-0">
                <div className="flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 text-center md:justify-between">
                    <div class="">
                        <a href="/" class="flex items-center">
                            <img src={logo_kjs} class="h-12 mr-3 mt-3" alt="KSJ Logo" />
                            <ul class="text-sm text-white-600 dark:text-white-400 font-medium">
                                <li class="mb-1 mt-3">
                                    <a href="/" class="self-center font-norwester font-bold whitespace-nowrap text-2xl uppercase">Karyajaya Survey</a>
                                </li>
                                <li class="mb-1">
                                    <a href="/" class="hover:underline font-thin font-serif">CV. Karyajaya Survey 2022</a>
                                </li>
                            </ul>
                        </a>
                    </div>
                    <div class="grid grid-cols-2 gap-100 sm:gap-6 sm:grid-cols-2">
                        <div class="mx-10">
                            <h2 class="mb-1 text-lg font-norwester font-extrabold text-white-900 uppercase dark:text-white">Our Product</h2>
                            <hr class="my-2 border-white-500 dark:border-white-700 lg:my-2" />
                            <ul class="text-sm text-white-600 dark:text-white-400 font-medium">
                                <li class="mb-1 mt-3">
                                    <a href="/" class="hover:underline font-norwester uppercase">Total Station</a>
                                </li>
                                <li class="mb-1">
                                    <a href="/" class="hover:underline font-norwester uppercase">Autolevel</a>
                                </li>
                                <li class="mb-1">
                                    <a href="/" class="hover:underline font-norwester uppercase">Accecories</a>
                                </li>
                                <li class="mb-1">
                                    <a href="/" class="hover:underline font-norwester uppercase">Charger</a>
                                </li>
                                <li class="mb-1">
                                    <a href="/" class="hover:underline font-norwester uppercase">Battery</a>
                                </li>
                                <li class="mb-1">
                                    <a href="/" class="hover:underline font-norwester uppercase">Theodolite</a>
                                </li>
                            </ul>
                        </div>
                        <div class="mx-10">
                            <h2 class="mb-1 text-lg font-norwester font-extrabold text-white-900 uppercase dark:text-white">Contact us</h2>
                            <hr class="my-2 border-white-500 dark:border-white-700 lg:my-2" />
                            <ul class="text-sm text-white-600 dark:text-white-400 font-medium">
                                <li class="mb-1 mt-3">
                                    <a href="/" class="flex items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" class="w-7 h-7 mr-1">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                                        </svg>
                                        <span class="hover:underline font-norwester uppercase">Location</span>
                                    </a>
                                </li>
                                <li class="mb-1">
                                    <a href="/" class="flex items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 ml-1" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                                        </svg>
                                        <span class="hover:underline font-norwester uppercase">Whatsapp</span>
                                    </a>
                                </li>
                                <li class="mb-1">
                                    <a href="/" class="flex items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" class="w-5 h-5 mr-2 ml-1">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.016a3.001 3.001 0 003.75.614m-16.5 0a3.004 3.004 0 01-.621-4.72L4.318 3.44A1.5 1.5 0 015.378 3h13.243a1.5 1.5 0 011.06.44l1.19 1.189a3 3 0 01-.621 4.72m-13.5 8.65h3.75a.75.75 0 00.75-.75V13.5a.75.75 0 00-.75-.75H6.75a.75.75 0 00-.75.75v3.75c0 .415.336.75.75.75z" />
                                        </svg>

                                        <span class="hover:underline font-norwester uppercase">Tokopedia</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </Fragment>
    )
}

export default Footer