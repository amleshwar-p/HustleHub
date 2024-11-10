/* eslint-disable @next/next/no-img-element */


import { faBookmark } from "@fortawesome/free-regular-svg-icons/faBookmark";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function JobRow() {

    return (
        <>
            <div className="bg-white p-4 rounded-lg shadow-sm relative ">

                <div className="absolute top-4 right-4 cursor-pointer">
                    <FontAwesomeIcon className="size-4 text-gray-400" icon={faBookmark} />
                </div>
                <div className="flex grow gap-4">
                    <div className=" content-center">
                        <img src="https://companieslogo.com/img/orig/MSFT-a203b22d.png?t=1722952497" alt="" className="size-12" />
                    </div>
                    <div className="grow md:flex">
                        <div className="grow">
                            <div className="text-gray-500 text-sm">Microsoft</div>
                            <div className="font-bold text-lg mb-1">Software Developer</div>
                            <div className="text-sm text-gray-400">Remote &middot; Mumbai, India &middot; Full-time</div>
                        </div>
                        <div className="content-end text-gray-400 text-sm">
                            1 hour ago
                        </div>
                    </div>

                </div>
            </div>
        </>
    );

};
