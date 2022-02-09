
export function FAQCollapse(props) {
    return (
        <div className="mt-2 md:mt-4 collapse w-96 border rounded-box border-base-300 collapse-arrow">
            <input type="checkbox"/>
                <div className="collapse-title font-bold">
                    {props.data.question}
                </div>
                <div className="collapse-content">
                    {props.data.answer}
                </div>
        </div>

    )
}