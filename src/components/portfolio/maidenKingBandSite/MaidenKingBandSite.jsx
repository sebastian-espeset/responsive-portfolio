import "./maidenKingBandSite.scss";
import maidenkingwebsitepic from "../../assets/maidenkingwebsitepic.png";

export default function MaidenKingBandSite() {
  return (
    <div className="projects">
      <h1>Past Projects.</h1>
      <div className="projectWrapper">
        <div className="projectImg">
          <img src={maidenkingwebsitepic} alt="" />
        </div>
        <div className="projectDesc">
          <div className="projectTitle">
            <h2>Maiden King band site</h2>
          </div>
          <div className="projectBody">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
              suscipit, libero in fermentum condimentum, turpis justo egestas
              turpis, ut fringilla nulla velit id nibh. Nulla vitae vestibulum
              justo. Suspendisse sem ex, sollicitudin non tempus a, porttitor ac
              lacus. Nullam a augue venenatis, facilisis nibh non, varius lorem.
              Vivamus condimentum ex metus, non malesuada odio blandit at. Sed
              eget erat lobortis mi sagittis mollis. Nullam lacinia enim sed
              ullamcorper congue. Donec ex nunc, ultricies vitae neque et,
              aliquam scelerisque sapien. Nam fringilla tellus nec diam
              efficitur pellentesque. Quisque eleifend, enim eget posuere
              sagittis, purus dolor rutrum mauris, ut mollis velit massa a
              turpis. Nullam semper eget nisi ornare convallis. Mauris tincidunt
              justo purus, aliquet efficitur odio sollicitudin a. Orci varius
              natoque penatibus et magnis dis parturient montes, nascetur
              ridiculus mus. Donec tincidunt blandit tincidunt.
            </p>
          </div>
          <div className="projectTags">
            <div>
              <h3>React</h3>
            </div>
            <div>
              <h3>Sass</h3>
            </div>
            <div>
              <h3>Material UI</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
