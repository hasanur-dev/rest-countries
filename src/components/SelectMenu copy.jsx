import { Fragment, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'

const regions = [
    {
        id: 6,
        name: 'Select',
        value: '',
    },
    {
        id: 1,
        name: 'Africa',
        value: 'africa',
    },
    {
        id: 2,
        name: 'America',
        value: 'america',
    },
    {
        id: 3,
        name: 'Asia',
        value: 'asia',
    },
    {
        id: 4,
        name: 'Europe',
        value: 'europe',
    },
    {
        id: 5,
        name: 'Oceania',
        value: 'oceania',
    },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function SelectMenu() {
    const [selected, setSelected] = useState(regions[0])

    return (
        <Listbox value={selected} onChange={setSelected}>
            {({ open }) => (
                <>
                    <div className="relative">
                        <Listbox.Button className="transition-all duration-300 relative w-full cursor-default rounded-md bg-white dark:bg-blue-dark py-5 pl-3 pr-10 text-left dark:text-gray-light shadow-md drop-shadow-sm ring-blue-dark/10 dark:ring-1  dark:ring-blue-very-dark focus:outline-none focus:ring-2 dark:focus:ring-blue-very-dark text-lg">
                            <span className="flex items-center">
                                <span className="ml-3 block truncate tracking-wider">
                                    {selected.name}
                                </span>
                            </span>
                            <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-6">
                                <ChevronUpDownIcon
                                    className="h-5 w-5 text-gray-400"
                                    aria-hidden="true"
                                />
                            </span>
                        </Listbox.Button>

                        <Transition
                            show={open}
                            as={Fragment}
                            leave="transition ease-in duration-100"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <Listbox.Options className="absolute  z-10 mt-1 h-auto w-full overflow-hidden rounded-md bg-gray-light dark:bg-blue-dark py-1 text-lg shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-lg">
                                {regions.map((region) => (
                                    <Listbox.Option
                                        key={region.id}
                                        className={({ active }) =>
                                            classNames(
                                                active
                                                    ? 'bg-gray-dark dark:bg-blue-very-dark text-white'
                                                    : 'dark:text-gray-light',
                                                'relative cursor-default select-none py-2 pl-3 pr-9'
                                            )
                                        }
                                        value={region.value}
                                    >
                                        {({ selected, active }) => (
                                            <>
                                                <div className="flex items-center">
                                                    <span
                                                        className={classNames(
                                                            selected
                                                                ? 'font-semibold'
                                                                : 'font-normal',
                                                            'ml-3 block truncate'
                                                        )}
                                                    >
                                                        {region.name}
                                                    </span>
                                                </div>

                                                {selected ? (
                                                    <span
                                                        className={classNames(
                                                            active
                                                                ? 'text-white'
                                                                : 'text-indigo-600',
                                                            'absolute inset-y-0 right-0 flex items-center pr-4'
                                                        )}
                                                    >
                                                        <CheckIcon
                                                            className="h-5 w-5"
                                                            aria-hidden="true"
                                                        />
                                                    </span>
                                                ) : null}
                                            </>
                                        )}
                                    </Listbox.Option>
                                ))}
                            </Listbox.Options>
                        </Transition>
                    </div>
                </>
            )}
        </Listbox>
    )
}
