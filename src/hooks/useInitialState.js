import { useState } from "react";

const initialState = {
    cart: [],
}

const useInitialState = () => {
    const [state, setState] = useState(initialState)
    const [toggleOrders, setToggleOrders] = useState(false);
    const [showMenu, SetShowMenu] = useState(false)
    const addToCard = (payload) => {
        setState({
            ...state,
            cart: [...state.cart, payload]
        })
    }
    const removeFromCart = (payload) => {
        setState({
            ...state,
            cart: state.cart.filter(items => items.id !== payload.id),
        })
    }

    const clickShowMenu = () => {
        SetShowMenu(!showMenu)
        if (toggleOrders !== false) {
            setToggleOrders(false)
        }
    }
    const clickShowOrders = () => {
        setToggleOrders(true)
        if (showMenu !== false) {
            SetShowMenu(false)
        }
    }

    const clickCloseOrder = () => {
        setToggleOrders(false)
    }

    return {
        addToCard,
        state,
        removeFromCart,
        clickShowMenu,
        clickShowOrders,
        toggleOrders,
        clickCloseOrder,
        showMenu
    }
};

export default useInitialState