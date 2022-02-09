import { Tab } from '@headlessui/react';
import { BellIcon, ShieldCheckIcon, UserCircleIcon } from '@heroicons/react/solid';
import React from 'react';
import { classNames, ID } from '../../utils/general';
import { FAQCollapse } from './FAQCollapse';

export const FAQTab = () => {
    const tabs = [
        {
            value: [{ question: "What would you do if this question was longer", answer: "I would give you an even longer answer to the same quesiton." }, { question: "tab1", answer: "answer" }, { question: "tab1", answer: "answer" },],
            name: "Account",
            icon: UserCircleIcon,
        },
        {
            value: [{ question: "tab1", answer: "answer" }, { question: "tab1", answer: "answer" }, { question: "tab1", answer: "answer" },],
            name: "Notifications",
            icon: BellIcon,
        },
        {
            value: [{ question: "tab1", answer: "answer" }, { question: "tab1", answer: "answer" }, { question: "tab1", answer: "answer" },],
            name: "Security",
            icon: ShieldCheckIcon,
        },
    ];

    return (
        <Tab.Group as="div" className="flex flex-col place-items-center" defaultIndex={ 0 }>
            <Tab.List
                aria-label="FAQ Tabs"
                className={ classNames(
                    "flex flex-row space-x-4 md:space-x-12",
                    "border-b border-gray-200 mb-2"
                ) }
            >
                { tabs.map((tab) => (
                    <Tab
                        key={ tab.name }
                        value={ tab.value }
                        className={ classNames(
                            "flex items-center justify-center px-4 h-10 py-2 -mb-px text-sm text-center whitespace-nowrap cursor-base focus:outline-none",
                            "text-neutral-900 bg-transparent border-b-2 border-transparent",
                            "hover:border-gray-300",
                            "selected:border-gray-400",
                        ) }
                    >
                        <tab.icon className="w-4 h-4 mr-2" />
                        <span>{ tab.name }</span>
                    </Tab>
                )) }
            </Tab.List>
            <Tab.Panels>
                { tabs.map((tab) => (
                    <Tab.Panel
                        as='div'
                        key={ tab.name }
                        value={ tab.name }
                        className="card space-y-4"
                    >
                        { tab.value.map(QandA => (<FAQCollapse key={ID()} data={ QandA } />)) }
                    </Tab.Panel>
                )) }
            </Tab.Panels>
        </Tab.Group>
    );
}
