import React, { Fragment } from "react";
import { useState } from "react";
import {storeTokenInLocalStorage} from "../lib/auth";

function AdminLoginPageContent(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = (e) => {
        e.preventDefault();
        fetch(`${process.env.REACT_APP_API_URL}/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email: email,
                password: password,
            }),
        })
        .then((res) => {
            return res.json();
        })
        .then((res) => {
            if(res.accessToken){
                storeTokenInLocalStorage(res.accessToken);
                window.location.href = "/adminLandingpage";
            }else{
                console.log(res.message);
            }
        })
        .catch((err) => {
            console.log(err);
        });
    };

    return(
        <Fragment>
            <div className="w-100 relative mt-3 mb-7 mx-20 rounded-xl bg-pink-kj">
                <div class="flex justify-center items-center bg-pink-kj pt-3 pb-5">
                    <div class="max-w-md w-full px-6 py-8 bg-white shadow-md overflow-hidden sm:rounded-lg">
                        <h2 class="text-center text-2xl font-semibold">Login</h2>
                        <form class="mt-8 space-y-6" action="/adminlandingpage" method="POST">
                            <div>
                                <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
                                <div class="mt-1">
                                    <input id="email" name="email" type="email" autocomplete="email" required
                                        class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                        onChange={
                                            (e) => {
                                                setEmail(e.target.value);
                                            }
                                        } />
                                </div>
                            </div>
                            <div>
                                <label for="password" class="block text-sm font-medium text-gray-700">Password</label>
                                <div class="mt-1">
                                    <input id="password" name="password" type="password" autocomplete="current-password" required
                                        class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" 
                                        onChange={
                                            (e) => {
                                                setPassword(e.target.value);
                                            }
                                        }/>
                                </div>
                            </div>
                            <div class="flex items-center justify-between">
                                <div class="flex items-center">
                                    <input id="rememberme" name="rememberme" type="checkbox"
                                        class="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" />
                                    <label for="rememberme" class="ml-2 block text-sm text-gray-900">
                                        Remember me
                                    </label>
                                </div>
                                <div class="text-sm">
                                    <a href="#" class="font-medium text-dark-blue-kj hover:text-light-blue-kj">
                                        Forgot your password?
                                    </a>
                                </div>
                            </div>
                            <div>
                                <button type="submit" class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-dark-blue-kj hover:bg-light-blue-kj focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" onClick={handleLogin}>
                                    Sign in
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default AdminLoginPageContent