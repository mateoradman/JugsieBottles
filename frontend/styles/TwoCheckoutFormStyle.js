export const PaymentFormStyle = {
    margin: 0,
    fontFamily: 'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
    fontSize: '0.875rem',
    fontWeight: '500',
    lineHeight: '1.25',
    color: '#212529',
    textAlign: 'left',
    backgroundColor: '#ffffff',
    '*': {
        'boxSizing': 'border-box'
    },
    '.no-gutters': {
        marginRight: 0,
        marginLeft: 0
    },
    '.form': {
        marginTop: '2rem',
        border: '1px solid #000000',
        borderRadius: '.5rem',
        paddingLeft: '1.75rem'
    },
    '.row': {
        display: 'flex',
        flexWrap: 'wrap'
    },
    '.col': {
        flexBasis: '0',
        flexGrow: '1',
        maxWidth: '100%',
        padding: '0',
        position: 'relative',
        width: '100%'
    },
    'div': {
        display: 'flex',
        flexDirection: 'column'
    },
    '.field-container': {
        paddingBottom: '14px'
    },
    '.field-wrapper': {
        paddingRight: '25px'
    },
    '.input-wrapper': {
        position: 'relative'
    },
    'label': {
        display: 'block',
        alignItems: 'center',
        color: '#000000',
        opacity: 1,
        marginBottom: '0.25rem',
        padding: '0.5rem 0.25rem'
    },
    'input': {
        flexShrink: 1,
        transitionProperty: 'background-color,border-color,color,fill,stroke,opacity,box-shadow,transform',
        transitionDuration: '.15s',
        transitionTimingFunction: 'cubic-bezier(.4,0,.2,1)',
        fontSize: '0.875rem',
        fontFamily: 'inherit',
        width: '100%',
        height: '3rem',
        padding: '1rem 1rem',
        lineHeight: '1.25rem',
        backgroundColor: '#fff',
        backgroundClip: 'padding-box',
        border: '1px solid #1F95F3',
        borderRadius: '.5rem',
    },
    'input:focus': {
        border: '1px solid #5D5D5D',
        backgroundColor: '#FFFDF2'
    },
    '.is-error input': {
        border: '1px solid #D9534F'
    },
    '.is-error input:focus': {
        backgroundColor: '#D9534F0B'
    },
    '.is-valid input': {
        border: '1px solid #1BB43F'
    },
    '.is-valid input:focus': {
        backgroundColor: '#1BB43F0B'
    },
    '.validation-message': {
        color: '#D9534F',
        fontSize: '10px',
        fontStyle: 'italic',
        marginTop: '6px',
        marginBottom: '-5px',
        display: 'block',
        lineHeight: '1'
    },
    '.is-empty input': {
        color: '#EBEBEB'
    },
    '.lock-icon': {
        top: 'calc(50% - 7px)',
        right: '10px'
    },
    '.valid-icon': {
        top: 'calc(50% - 8px)',
        right: '-25px'
    },
    '.error-icon': {
        top: 'calc(50% - 8px)',
        right: '-25px'
    },
    '.card-icon': {
        top: 'calc(50% - 10px)',
        left: '10px',
        display: 'none'
    },
    '.is-empty .card-icon': {
        display: 'block'
    },
    '.is-focused .card-icon': {
        display: 'none'
    },
    '.card-type-icon': {
        right: '30px',
        display: 'block'
    },
    '.card-type-icon.visa': {
        top: 'calc(50% - 14px)'
    },
    '.card-type-icon.mastercard': {
        top: 'calc(50% - 14.5px)'
    },
    '.card-type-icon.amex': {
        top: 'calc(50% - 14px)'
    },
    '.card-type-icon.discover': {
        top: 'calc(50% - 14px)'
    },
    '.card-type-icon.jcb': {
        top: 'calc(50% - 14px)'
    },
    '.card-type-icon.dankort': {
        top: 'calc(50% - 14px)'
    },
    '.card-type-icon.cartebleue': {
        top: 'calc(50% - 14px)'
    },
    '.card-type-icon.diners': {
        top: 'calc(50% - 14px)'
    },
    '.card-type-icon.elo': {
        top: 'calc(50% - 14px)'
    }
}