import React from "react";
import ReactDOM from "react-dom/client";

import "./vcard-styles.css";

const socialMedia = [
  {
    icon: "fa-facebook-f",
    href: "https://www.instagram.com/dionisiusnureno/",
  },
  {
    icon: "fa-instagram",
    href: "https://www.instagram.com/dionisiusnureno/",
  },
  {
    icon: "fa-twitter",
    href: "https://www.instagram.com/dionisiusnureno/",
  },
  {
    icon: "fa-linkedin",
    href: "https://www.instagram.com/dionisiusnureno/",
  },
  {
    icon: "fa-github",
    href: "https://www.instagram.com/dionisiusnureno/",
  },
];

function App() {
  return (
    <div className="card">
      <div className="top">
        <Header />
      </div>
      <div className="bottom">
        <BottomPart />
        <Hightlight />
      </div>
    </div>
  );
}

function SocialButton({ icon, Link }) {
  return (
    <>
      <button onClick={() => window.open(Link, "_blank")}>
        <i className={`fa ${icon}`}></i>
      </button>
    </>
  );
}

function NameTitle() {
  return (
    <div className="text">
      <div className="name-wrapper">
        <div className="name">Cookie Si Imoet</div>
      </div>
      <div className="title">Meow Manager</div>
    </div>
  );
}

function Header() {
  const middleIndex = Math.floor(socialMedia.length / 2);
  const socialLeft = socialMedia.slice(0, middleIndex);
  const socialRight = socialMedia.slice(middleIndex);

  return (
    <>
      <div className="">
        <div className="social-buttons">
          {socialLeft.map((data, index) => (
            <SocialButton icon={data.icon} Link={data.href} />
          ))}
        </div>
        <div className="social-buttons right">
          {socialRight.map((data, index) => (
            <SocialButton icon={data.icon} Link={data.href} />
          ))}
        </div>

        <NameTitle />
      </div>
    </>
  );
}

function BottomPart() {
  function descBox() {
    return (
      <>
        <p>
          My name is <b>Black Mamba</b> and i am front-end web developer.
        </p>

        <p>
          Kucing paling berjasa di muka bumi ini. pernah foto sama presiden.
          Makan bisa, minum bisa, tidur bisa. Saya emang ahli. Cuma ya gitu,
          kadang agak males aja. Maka dari itu saya cocok jadi leader karena
          pengalaman saya selama 5 tahun menjadi majikan di rumah orang yg
          mengadopsi saya. hehe..
        </p>
      </>
    );
  }

  return (
    <>
      <div className="desc">{descBox()}</div>
    </>
  );
}

function Badge({ text }) {
  return (
    <button>
      <div className="height">{text}</div>
    </button>
  );
}

function Hightlight() {
  return (
    <div className="buttons">
      <Badge text="🗻 PhD" />
      <Badge text="🗻 UNICING" />
      <Badge text="🗻 Prof" />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
