import { Button } from '@chakra-ui/react'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const MyOrders = () => {
  const navigate = useNavigate();
  return (
    <div >
      <div style={{ fontSize:"28px",textAlign:"left" , marginLeft:"20px"}}>
        <h1>Your Orders</h1>
      </div>
      <div>
        <img src="https://fraazo.com/static/empty-cart-1468d71b9bd1d91401f28d1734cae373.svg" alt="" style={{ margin: "auto" }} />
      </div>
      <div style={{ gap:"10px" }}>
        <div style={{ fontSize: "18px" }}>No Orders Found!</div>
        <div style={{ fontSize: "14px" }}>Lets Add Some Items!</div>
        <Button style={{ backgroundColor: "#47c09d", color:"white" }} onClick={()=>navigate("/")}>START SHOPPING</Button>
      </div>
    </div>
  )
}

export default MyOrders