export default function jsx(tag, attributes = {}, ...children) {
    if( tag === 'function') {
        return tag(attributes, ...children)
    }

};