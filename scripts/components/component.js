import {toElement} from '../libs/to-element.js';
export class Component {

    static render(data, $parent) {
        return new this(data).render($parent);
    }

    constructor(data) {
        this.data = data || {};
    }

    render($parent) {
        if(this.$el) {
            this.destroy();
        }
        if($parent._component) {
            $parent._component.destroy();
        }

        this.$el = toElement(Mustache.render(this.template(), this.data));
        this.$el._component = this;
        this.init();
        $parent.innerHTML = "";
        $parent.appendChild(this.$el);
        return this;
    }

    init() {}
    destroy() {}
}
