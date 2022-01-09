import React from "react";
import StripeCheckout from "react-stripe-checkout";


const StripeCheckoutButton = ({price}) => {
    const priveForStripe = price*100;
    const publishKey = 'pk_test_51K2ImtETDzEToRglTwVf3VBGPWeX8YhJ7kqbWqO98t0Wm1xTj38hR3SLQDu4gSmqMx7Wd9QwZuYuSUo9cs2usUE400s9Z3NOT7'
    const onToken = token => {
        console.log(token)
        alert('Payment Successful!')
    }
    return (
        <StripeCheckout
            label={'Pay Now'}
            name={'CRWN Clothing Ltd.'}
            billingAddress
            shippingAddress
            image={'https://svgshare.com/i/CUz.svg'}
            description={`Yout total is $${price}`}
            amount={priveForStripe}
            panelLabel={'Pay Now'}
            token={onToken}
            stripeKey={publishKey}
        />
    )
}


export default StripeCheckoutButton