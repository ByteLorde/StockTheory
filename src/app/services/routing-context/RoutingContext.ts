export class RoutingContextLink {
    url          ?: string;
    label        ?: string;
    target       ?= '_blank';
    callback     ?: any;
    children     ?: RoutingContextLink[];
    isExternal   ?= false;
    elementStyle ?: any;
    elementClass ?: any;
}
