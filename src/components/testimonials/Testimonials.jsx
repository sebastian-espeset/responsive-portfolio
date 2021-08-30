import "./testimonials.scss";

export default function Testimonials() {
  const data = [
    {
      id: 1,
      name: "Thome Yorke",
      title: "Lead singer of Radiohead",
      img: "https://pyxis.nymag.com/v1/imgs/b4c/02b/dfd4e2c39ae1784d33044f487ec40b6237-09-thom-yorke.rsquare.w330.jpg",
      icon: "assets/youtube.png",
      desc: "Wait who?",
    },
    {
      id: 2,
      name: "Jorge Borges",
      title: "Prolific writer",
      img: "https://www.worldliteraturetoday.org/sites/default/files/blog/literary-tributes/jorge-luis-borges.jpg",
      icon: "assets/youtube.png",
      desc: "Don't talk unless you can improve the silence.",
      featured:true
    },
    {
      id: 3,
      name: "Tony Hawk",
      title: "1983 Spring Nationals skateboard contest winner",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr9fAMPsXzirQxRxBNXGJcOPkAvNZYPJ2Ptw&usqp=CAU",
      icon: "assets/youtube.png",
      desc: "I won't quit skating until I am physically unable.",
    },
  ];
  return (
    <div className="testimonials" id="testimonials">
      <h1>Testimonials</h1>
      <div className="container">
        {data.map((d) => (
          <div className={d.featured ? "card featured":"card"}>
            <div className="top">
              <img src="assets/right-arrow.png" className="left" alt="" />
              <img
                src={d.img}
                className="user"
                alt=""
              />
              <img src={d.icon} className="right" alt="" />
            </div>
            <div className="center">{d.desc}</div>
            <div className="bottom">
              <h3>{d.name}</h3>
              <h4>{d.title}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
