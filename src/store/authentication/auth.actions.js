import * as types from "./auth.types";

const userData = JSON.parse(localStorage.getItem("userLogin")) || [];

export const getOTP = (payload) => (dispatch) => {
    
    dispatch({ type: types.GET_OTP, payload: payload })
    console.log('payload:', payload)
    let x = JSON.parse(localStorage.getItem("userLogin")) || []
    let flag = false;
    for (let i = 0; i < x.length; i++) {
        if (payload.mobile === x[i].mobile) {
            flag = true;
        }
    }

    if (flag) {
        dispatch({ type: types.GET_LOGIN })
    }
};

export const saveDetails = (payload) => (dispatch) => {

    userData.push(payload)
    localStorage.setItem("userLogin", JSON.stringify(userData))
    console.log('data:', payload)
    dispatch({ type: types.GET_LOGIN })
}


