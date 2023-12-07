import React from "react";
import Vacant from "../../Assets/img/12.svg";
const Vacancies = () => {
  return (
    <div className="mx-auto flex justify-center relative py-16 bg-gray-100 md:px-12">
      <div className="text-center max-w-7xl">
        <div className="container md:flex px-4 md:px-0">
          <div className="text-center md:text-left w-full md:w-1/2 text-blue-900">
            <h2 className="text-2xl font-bold">Vacatures</h2>{" "}
            <p className="leading-relaxed text-lg mt-4 text-gray-600">
              Werk Voor Oranje heeft de afgelopen jaren een drukbezocht platform
              voor zzp-ers gebouwd. Met dit platform helpen we zzp-ers
              opdrachten te verwerven binnen de overheid. Nu het platform staat,
              is het tijd om verder te groeien. Groei jij mee?
            </p>{" "}
            <div className="mt-8">
              <ul className="divide-y divide-gray-200 space-y-2">
                <li className="shadow bg-white rounded mt-4 hover:bg-gray-50 ">
                  <a
                    href="/vacatures/coordinator-recruitment"
                    className="block "
                  >
                    <div className="px-4 py-4 sm:px-6">
                      <div className="flex items-center justify-between">
                        <p className="text-2xl font-medium text-indigo-600 truncate">
                          Coördinator Recruitment
                        </p>{" "}
                        <div className="ml-2 flex-shrink-0 flex">
                          <p className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-200 text-green-800">
                            Full-time
                          </p>
                        </div>
                      </div>
                    </div>
                  </a>
                </li>{" "}
                <li className="shadow bg-white rounded mt-4 hover:bg-gray-50 ">
                  <a href="/vacatures/recruiter-student" className="block">
                    <div className="px-4 py-4 sm:px-6">
                      <div className="flex items-center justify-between">
                        <p className="text-2xl font-medium text-indigo-600 truncate">
                          Recruiter (student)
                        </p>{" "}
                        <div className="ml-2 flex-shrink-0 flex">
                          <p className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-pink-100 text-pink-800">
                            Part-time
                          </p>
                        </div>
                      </div>
                    </div>
                  </a>
                </li>{" "}
                <li className="shadow bg-white rounded mt-4 hover:bg-gray-50 ">
                  <a
                    href="/vacatures/recruitment-support-medewerker"
                    className="block"
                  >
                    <div className="px-4 py-4 sm:px-6">
                      <div className="flex items-center justify-between">
                        <p className="text-2xl font-medium text-indigo-600 truncate">
                          Recruitment Support Medewerker
                        </p>{" "}
                        <div className="ml-2 flex-shrink-0 flex">
                          <p className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-pink-100 text-pink-800">
                            Part-time
                          </p>
                        </div>
                      </div>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </div>{" "}
          <div className="w-full md:w-1/2 mt-0 md:ml-8">
            <img
              alt="Vacatures bij Werk Voor Oranje"
              className=" lazyloaded"
              src={Vacant}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vacancies;
