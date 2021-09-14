import { Link } from "react-router-dom";
import "./post.css";
import image from "../../media/Kiembeni.png"
export default function Post({img}) {
  return (
    <div className="postcontainer">
        <div className="post">
      <img
        className="postImg"
        src={image}
        alt=""
      />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">
            <Link className="link" to="/posts?cat=Music">
              Weather
            </Link>
          </span>
          <span className="postCat">
            <Link className="link" to="/posts?cat=Music">
              Weather
            </Link>
          </span>
        </div>
        <span className="postTitle">
          <Link to="/post/abc" className="link">
            Lorem ipsum dolor sit amet
          </Link>
        </span>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDesc">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda
        officia architecto deserunt deleniti? Labore ipsum aspernatur magnam
        fugiat, reprehenderit praesentium blanditiis quos cupiditate ratione
        atque, exercitationem quibusdam, reiciendis odio laboriosam?
      </p>
      
    </div>
    <div className="post">
    <img
      className="postImg"
      src={image}
      alt=""
    />
    <div className="postInfo">
      <div className="postCats">
        <span className="postCat">
          <Link className="link" to="/posts?cat=Music">
            Promotion
          </Link>
        </span>
        <span className="postCat">
          <Link className="link" to="/posts?cat=Music">
            Advertisements
          </Link>
        </span>
      </div>
      <span className="postTitle">
        <Link to="/post/abc" className="link">
          Lorem ipsum dolor sit amet
        </Link>
      </span>
      <hr />
      <span className="postDate">1 hour ago</span>
    </div>
    <p className="postDesc">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda
      officia architecto deserunt deleniti? Labore ipsum aspernatur magnam
      fugiat, reprehenderit praesentium blanditiis quos cupiditate ratione
      atque, exercitationem quibusdam, reiciendis odio laboriosam?
    </p>
    
  </div>
  <div className="post">
  <img
    className="postImg"
    src={image}
    alt=""
  />
  <div className="postInfo">
    <div className="postCats">
      <span className="postCat">
        <Link className="link" to="/posts?cat=Music">
          Sales
        </Link>
      </span>
      <span className="postCat">
        <Link className="link" to="/posts?cat=Music">
          Market
        </Link>
      </span>
    </div>
    <span className="postTitle">
      <Link to="/post/abc" className="link">
        Lorem ipsum dolor sit amet
      </Link>
    </span>
    <hr />
    <span className="postDate">1 hour ago</span>
  </div>
  <p className="postDesc">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda
    officia architecto deserunt deleniti? Labore ipsum aspernatur magnam
    fugiat, reprehenderit praesentium blanditiis quos cupiditate ratione
    atque, exercitationem quibusdam, reiciendis odio laboriosam?
  </p>
  
</div>
        <div className="post">
      <img
        className="postImg"
        src={image}
        alt=""
      />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">
            <Link className="link" to="/posts?cat=Music">
              Produce
            </Link>
          </span>
          <span className="postCat">
            <Link className="link" to="/posts?cat=Music">
              Farm
            </Link>
          </span>
        </div>
        <span className="postTitle">
          <Link to="/post/abc" className="link">
            Lorem ipsum dolor sit amet
          </Link>
        </span>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDesc">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda
        officia architecto deserunt deleniti? Labore ipsum aspernatur magnam
        fugiat, reprehenderit praesentium blanditiis quos cupiditate ratione
        atque, exercitationem quibusdam, reiciendis odio laboriosam?
      </p>
      
    </div>
    <div className="post">
    <img
      className="postImg"
      src={image}
      alt=""
    />
    <div className="postInfo">
      <div className="postCats">
        <span className="postCat">
          <Link className="link" to="/posts?cat=Music">
            Course
          </Link>
        </span>
        <span className="postCat">
          <Link className="link" to="/posts?cat=Music">
            Training
          </Link>
        </span>
      </div>
      <span className="postTitle">
        <Link to="/post/abc" className="link">
          Lorem ipsum dolor sit amet
        </Link>
      </span>
      <hr />
      <span className="postDate">1 hour ago</span>
    </div>
    <p className="postDesc">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda
      officia architecto deserunt deleniti? Labore ipsum aspernatur magnam
      fugiat, reprehenderit praesentium blanditiis quos cupiditate ratione
      atque, exercitationem quibusdam, reiciendis odio laboriosam?
    </p>
    
  </div>
  <div className="post">
  <img
    className="postImg"
    src={image}
    alt=""
  />
  <div className="postInfo">
    <div className="postCats">
      <span className="postCat">
        <Link className="link" to="/posts?cat=Music">
          Animal
        </Link>
      </span>
      <span className="postCat">
        <Link className="link" to="/posts?cat=Music">
          Farm
        </Link>
      </span>
    </div>
    <span className="postTitle">
      <Link to="/post/abc" className="link">
        Lorem ipsum dolor sit amet
      </Link>
    </span>
    <hr />
    <span className="postDate">1 hour ago</span>
  </div>
  <p className="postDesc">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda
    officia architecto deserunt deleniti? Labore ipsum aspernatur magnam
    fugiat, reprehenderit praesentium blanditiis quos cupiditate ratione
    atque, exercitationem quibusdam, reiciendis odio laboriosam?
  </p>
  
</div>
    </div>
  );
}