import { Tab } from '@headlessui/react';
import { ReceiptRefundIcon, TruckIcon, InformationCircleIcon } from '@heroicons/react/solid';
import { classNames } from '../../utils/general';
import { FAQCollapse } from './FAQCollapse';

export const FAQTab = (props) => {
    const FaqBySection = props.faq.reduce((acc, faq) => {
        if (!acc[faq.section]) {
            acc[faq.section] = [];
        }
        acc[faq.section].push(faq);
        acc[faq.section].icon = faq.icon;
        return acc;
    }, {});

    return (
        <Tab.Group defaultIndex={ 0 }>
            <Tab.List
                className={ classNames(
                    "grid grid-rows-3 md:flex md:justify-center space-x-2 md:space-x-12 p-2",
                    "border-b border-gray-200 mb-2"
                ) }
            >
                { FaqBySection && Object.keys(FaqBySection).map((section) => (
                    <Tab
                        key={ section }
                        className={ classNames(
                            "flex items-center justify-center px-4 h-10 py-2 -mb-px text-sm text-center whitespace-nowrap cursor-base focus:outline-none",
                            "text-neutral-900"
                        ) }
                    >
                        <span className="flex align-middle border-b-2 border-transparent hover:border-gray-300 selected:border-gray-400">
                            <FAQIcon icon={FaqBySection[section].icon}/>
                            { section }
                        </span>
                    </Tab>
                )) }
            </Tab.List>
            <Tab.Panels>
                { FaqBySection && Object.keys(FaqBySection).map((section) => (
                    <Tab.Panel
                        as='div'
                        key={ section }
                        className="card space-y-4"
                    >
                        { FaqBySection[section].map(faq => (<FAQCollapse key={ faq.id } data={ faq } />)) }
                    </Tab.Panel>
                )) }
            </Tab.Panels>
        </Tab.Group>
    );
}

const FAQIcon = (props) => {
    const classes = "w-4 h-4 mr-1 md:mr-2";
    switch (props.icon) {
        case "InformationCircleIcon":
            return <InformationCircleIcon className={classes}/>;
        case "TruckIcon":
            return <TruckIcon className={classes}/>;
        case "ReceiptRefundIcon":
            return <ReceiptRefundIcon className={classes}/>;
        default:
            break;
    }
}