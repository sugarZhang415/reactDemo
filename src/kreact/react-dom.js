function render(vnode, container) {
    const node = createNode(vnode);
    container.appendChild(node);
}
function isStringOrNumber(sth) {
    return typeof sth === "string" || typeof sth === "number";
}
function createNode(vnode) {
    const { type } = vnode;
    let node;
    if (typeof type === "string") {
        node = updateHostComponent(vnode);
    } else if (isStringOrNumber(vnode)) {
        // ⽂本
        node = updateTextComponent(vnode);
    } else if (typeof type === "function") {
        node = type.prototype.isReactComponent
            ? updateClassComponent(vnode)
            : updateFunctionComponent(vnode);
    } else {
        node = updateFragmentComponent(vnode);
    }
    return node;
}
function updateNode(node, props) {
    Object.keys(props)
        .filter(k => k !== "children")
        .forEach(k => {
            node[k] = props[k];
        });
}
function updateHostComponent(vnode) {
    const { type, props } = vnode;
    const node = document.createElement(type);
    updateNode(node, props);
    reconcileChildren(node, props.children);
    return node;
}
function updateTextComponent(vnode) {
    const node = document.createTextNode(vnode);
    return node;
}
function updateFunctionComponent(vnode) {
    const { type, props } = vnode;
    const child = type(props);
    const node = createNode(child);
    return node;
}
function updateClassComponent(vnode) {
    const { type, props } = vnode;
    const instance = new type(props);
    const child = instance.render();
    const node = createNode(child);
    return node;
}
function updateFragmentComponent(vnode) {
    const node = document.createDocumentFragment();
    reconcileChildren(node, vnode.props.children);
    return node;
}
function reconcileChildren(parentNode, children) {
    const newChildren = Array.isArray(children) ? children : [children];
    for (let i = 0; i < newChildren.length; i++) {
        let child = newChildren[i];
        render(child, parentNode);
    }
}
export default { render };