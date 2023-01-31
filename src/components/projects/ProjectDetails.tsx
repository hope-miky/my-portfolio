import { Dialog, Transition } from "@headlessui/react";
import { EyeIcon } from "@heroicons/react/outline";
import React, { Fragment, useEffect, useState } from "react";

const MyModal = ({ title, description }: any) => {
  let [isOpen, setIsOpen] = useState(false);

  const closeModal = () => {
    setIsOpen(false);
  };

  const openModal = () => {
    setIsOpen(true);
  };

  return (
    <>
      {description && (
        <EyeIcon
          onClick={openModal}
          className="h-6 w-6 mx-2 text-gray-400 hover:text-teal-400 hover:cursor-pointer "
        />
      )}

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-0" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center ">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-2xl transform overflow-hidden rounded-2xl dark:bg-second-bg bg-white p-6 text-left align-middle shadow-md shadow-teal-50 transition-all main2-bg">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 dark:text-white text-gray-600"
                  >
                    {title}
                  </Dialog.Title>
                  <div className="mt-2">
                    <span className="text-md text-justify dark:text-gray-300 text-gray-400">
                      {description}
                    </span>
                  </div>

                  <div className="mt-4 flex justify-end">
                    <button
                      onClick={closeModal}
                      className="px-5 py-1 font-medium dark:text-teal-600 border border-b-4 border-r-4 border-black dark:border-teal-400 rounded-lg shadow-lg hover:shadow-sm hover:border-b-2 hover:border-r-2"
                    >
                      Return
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default MyModal;
