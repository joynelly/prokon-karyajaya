import React, { Fragment } from "react";
import logo_kjs from "../assets/logo-kjs.png";

function AboutUsContent(){
    return(
        <Fragment>
            <div className="w-100 relative mt-3 mb-7 mx-20 rounded-xl bg-grey-kj">
                <div className="grid grid-cols-4 gap-4 p-5">
                    <div className="col-span-1 row-span-1 rounded-xl bg-white">
                        <img src={logo_kjs} className="h-25" alt="KSJ Logo" />
                    </div>
                    <div className="col-span-1 row-span-2 rounded-xl bg-white p-4 font-serif text-lg leading-8">
                        CV. Karyajaya Survey adalah perusahaan yang bergerak
                        di bidang jasa seperti konsultasi, servei, dan pemetaan bumi.
                        Selain itu, CV. Karyajaya Survey menyediakan servoce, kalibrasi,
                        penyewaan, dan jual/beli alat-alat survey. CV. Karyajaya Survey
                        beralamat di Jalan Eka Rasmi No.9, Kel. Gedung Johor, Kec. Medan 
                        Johor, Kota Medan. 
                    </div>
                    <div className="col-span-2 row-span-2 rounded-xl bg-white">
                        <div class="flex justify-center items-center pt-3 font-norwester text-xl">Location</div>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7964.545799234371!2d98.67595!3d3.524287!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30313ab9485f9527%3A0xeb1c09e565530aae!2sKaryajaya%20Survey!5e0!3m2!1sid!2sid!4v1681191310732!5m2!1sid!2sid" className="b-0 w-full h-full pt-2 pb-20 px-3" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                    <div className="col-span-1 row-span-1 rounded-xl bg-grey-kj">
                        <div className="grid grid-cols-1 gap-1">
                            <div className="col-span-1 row-span-1 rounded-xl bg-white p-2 font-serif text-base leading-8 text-left">
                                <a href="/" class="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 ml-1 mr-3">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                                    </svg>
                                    <span class="hover:underline font-serif">081264580344</span>
                                </a>
                            </div>
                            <div className="col-span-1 row-span-1 rounded-xl bg-white p-2 font-serif text-base leading-8 text-left">
                                <a href="/" class="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 ml-1 mr-3">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                                    </svg>
                                    <span class="hover:underline font-serif">karyajaya.survey@gmail.com</span>
                                </a>
                            </div>
                            <div className="col-span-1 row-span-1 rounded-xl bg-white p-2 font-serif text-base leading-8 text-left">
                                <a href="/" class="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-1 mr-3" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                                    </svg>
                                    <span class="hover:underline font-serif">Whatsapp</span>
                                </a>
                            </div>
                            <div className="col-span-1 row-span-1 rounded-xl bg-white p-2 font-serif text-base leading-8 text-left">
                                <a href="/" class="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" class="w-5 h-5 ml-1 mr-3">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.016a3.001 3.001 0 003.75.614m-16.5 0a3.004 3.004 0 01-.621-4.72L4.318 3.44A1.5 1.5 0 015.378 3h13.243a1.5 1.5 0 011.06.44l1.19 1.189a3 3 0 01-.621 4.72m-13.5 8.65h3.75a.75.75 0 00.75-.75V13.5a.75.75 0 00-.75-.75H6.75a.75.75 0 00-.75.75v3.75c0 .415.336.75.75.75z" />
                                    </svg>
                                    <span class="hover:underline font-serif">Tokopedia</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default AboutUsContent