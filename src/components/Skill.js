import React from "react";

const Skill = (props) =>{
    const {img, skill} = props;
    return(
        <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4 h-16 ">
            <div className="px-6">
                <img
                    alt="..."
                    src={img}
                    className="shadow-lg rounded-full w-16 mx-auto h-16 "
                    style={{ maxWidth: "120px" }}
                />
                <div className="pt-6 text-center">
                    <h5 className="mt-1 text-xl text-gray-500 uppercase font-semibold">
                        {skill}
                    </h5>

                </div>
            </div>
        </div>

    )
};

export default Skill;