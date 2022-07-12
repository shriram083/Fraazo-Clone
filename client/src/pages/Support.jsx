import React from 'react'

const Support = () => {
  let data = [
    {
      img: "https://yt3.ggpht.com/ytc/AKedOLTNeZ2qDGLcRgnAM3-QecqEkv-NPJcJv7zKpIdBrA=s176-c-k-c0x00ffffff-no-rj",
      title:"Chat With Us",
    },
    {
      img: "https://www.adaptek.ca/wp-content/uploads/2019/12/support-img.png",
      title: "Call Us",
    },
    {
      img: "https://www.tcscodevita.com/images/faq%20page/FAQ-page-image.png",
      title: "FAQ's",
    },
    {
      img: "https://t3.gstatic.com/images?q=tbn:ANd9GcQ9VoIbcX-oPJvS801youqnZpmce7oIMDg9nNNrKETyTy3cx6Xm",
      title: "Privacy Policy",
    },
    {
      img: "https://static.vecteezy.com/system/resources/previews/002/079/821/non_2x/term-and-conditions-illustration-concept-vector.jpg",
      title: "Terms & Conditions",
    },
  ]
  return (
    <div style={{ textAlign: "center", marginLeft: "40px" }}>
      <div style={{ textAlign: "left", fontSize: "28px", fontWeight: "500" }}>Help {"&"} Support</div>
      <div style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:"20px" }}>
        {data.map((e) => (
          <div style={{ boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px", }}>
            <div style={{ height: "75%" }}>
              <img src={e.img} alt="" style={{ margin: "auto", width: "50%", padding: "10px" }} />
            </div>
            <div style={{ padding: "10px" }}>{e.title}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Support