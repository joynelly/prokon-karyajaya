import React, { Fragment } from "react";
import logo_kjs from "../assets/logo-kjs.png";
import LineChart from "./LineChart";
import BarChart from "./BarChart";

function AdminLandingPageContent() {
    return (
        <Fragment>
            <div className="w-100 relative mt-3 mb-7 mx-20 py-3 px-5 rounded-xl bg-grey-kj">
                <h3 className="mx-5 my-5 p-5 rounded-lg bg-white font-serif text-center">DASHBOARD PENJUALAN KARYAJAYA SURVEY</h3>

                <div className="bg-white m-5 p-10 rounded-lg font-norwester text-center">
                    TREN PENJUALAN KARYAJAYA SURVEY
                    <LineChart />
                </div>

                <div className="bg-white m-5 p-10 rounded-lg font-norwester text-center">
                    JUMLAH TRANSAKSI KARYAJAYA SURVEY
                    <BarChart />
                </div>
            </div>
        </Fragment>
    );
}

export default AdminLandingPageContent;