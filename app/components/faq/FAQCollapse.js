
export function FAQCollapse(props) {
    return (
        <div className="self-center mt-2 md:mt-4 collapse w-4/5 max-w-md border rounded-box border-base-300 collapse-arrow">
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