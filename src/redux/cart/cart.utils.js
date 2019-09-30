export const addItemToCart = (cartItems, cartItemToAdd) => {
    const existingItem = cartItems.find(item => item.id === cartItemToAdd.id);

    //Se o item não foi adicionado ainda vai retornar um novo array com esse novo item e adicionando a propriedade 'quantity' nele
    if(!existingItem) return [ ...cartItems, { ...cartItemToAdd, quantity: 1 } ];

    //Se já existir esse item adicionado, vai retornar um novo array com a quantidade desse item atualizado
    return cartItems.map(item => {
        const ITEM_ALREADY_ADDED = (item.id === cartItemToAdd.id);
        if(ITEM_ALREADY_ADDED) 
            return { ...item, quantity: item.quantity + 1 };
        else 
            return item;
    });
};

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
    console.log('oi')
    const existingCartItem = cartItems.find(
        cartItem => cartItem.id === cartItemToRemove.id
    );

    if(existingCartItem.quantity === 1) {
        return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id);
    }

    return cartItems.map(cartItem => 
        cartItem.id === cartItemToRemove.id
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
    );
};