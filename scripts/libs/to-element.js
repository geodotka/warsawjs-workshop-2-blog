export function toElement(compiled) {
    let parser = new DOMParser();
    let $document = parser.parseFromString(compiled, 'text/html');
    return $document.querySelector('body').firstElementChild;
}
