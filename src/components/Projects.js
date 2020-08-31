import React from "react"

const Projects = () =>{
    const cryptoWallet_image= require('./../images/crypto-wallet.jpg')
    const ironpets_image = require('./../images/IronPets.jpg');
    const node_icon= require("./../images/nodejs.svg");
    const heroku_icon= require("./../images/heroku.svg");
    const materialui_icon = require("./../images/material-ui.svg");
    const react_icon= require("./../images/react.svg");
    return(
        <section className="bg-white border-b py-8" id="projects">
            <div className="container max-w-5xl mx-auto m-8">
                <h1 className="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">Projects</h1>
                <div className="w-full mb-4">
                    <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
                </div>

                <div className="flex flex-wrap">
                    <div className="w-5/6 sm:w-1/2 p-6">
                        <h3 className="text-3xl text-gray-800 font-bold leading-none mb-3">CryptoWallet</h3>
                        <p className="text-gray-600 mb-8">This is the final project  at Ironhack where I create an app where you can learn about best crypto currencies.
                            Create your own wallets, buy crypto currencies and save then into your wallet.<br/><br/> </p>
                        <div className="inline-flex">
                            <div className="flex-1  text-center mr-8">
                                <img className="w-8" src={react_icon} alt=""/>

                            </div>
                            <div className="flex-1  text-center mr-8">
                                <img className="w-16" src={node_icon} alt=""/>

                            </div>
                            <div className="flex-1  text-center mr-8">
                                <img className="w-8" src={heroku_icon} alt=""/>

                            </div>

                        </div>

                        <p className="text-gray-600 mb-8">
                            Code <a className="text-orange-500 underline"
                                            href="https://github.com/Any28Flo/crypto-wallet">https://github.com/Any28Flo/crypto-wallet</a> <br/>
                            Site <a className="text-orange-500 underline"
                                    href="https://cryptowallet-app.herokuapp.com/">https://cryptowallet-app.herokuapp.com/</a>

                        </p>

                    </div>
                    <div className="w-full sm:w-1/2 p-6">
                        <img src={cryptoWallet_image} alt="crypto-wallet-project"/>
               
                    </div>
                </div>


                <div className="flex flex-wrap flex-col-reverse sm:flex-row">
                    <div className="w-full sm:w-1/2 p-6 mt-6">
                        <img src={ironpets_image} alt="crypto-wallet-project"/>


                    </div>
                    <div className="w-full sm:w-1/2 p-6 mt-6">
                        <div className="align-middle">
                            <h3 className="text-3xl text-gray-800 font-bold leading-none mb-3">Iron Pets</h3>
                            <p className="text-gray-600 mb-8">IronPets was a second project for Ironhack's bootcamp.
                                Ironpets help  to find a new home for dogs. You can view animals in your area, search animals of a specific breed, gender, or size, and read all about each animal.
                            </p>
                            <div className="inline-flex ">

                                <div className="flex-1  text-center mr-8">
                                    <img className="w-16" src={node_icon} alt=""/>

                                </div>
                                <div className="flex-1  text-center mr-8">
                                    <img className="w-8" src={heroku_icon} alt=""/>

                                </div>
                                <div className="flex-1  text-center mr-8">
                                    <img className="w-8 " src={materialui_icon} alt=""/>

                                </div>

                            </div>

                            <p className="text-gray-600 mb-8">
                                Code <a className="text-orange-500 underline"
                                        href="https://github.com/Any28Flo/crypto-wallet">https://github.com/Any28Flo/IronPets-1</a> <br/>

                            </p>

                        </div>
                    </div>

                </div>
            </div>
        </section>

    )
};

export default Projects;
