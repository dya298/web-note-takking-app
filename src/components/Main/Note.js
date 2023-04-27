export default function Note() {
  return (
    <div className="card note">
      <div className="hstack gap-3 ms-3 mt-3">
        <img
          src="https://kynguyenlamdep.com/wp-content/uploads/2022/06/avatar-cute-meo-con-than-chet.jpg"
          className="card-img avatar rounded-circle"
          alt="avt"
        />
        <div className=" vstack">
          <span className="fw-bold">Earn a living</span>
          <span>2y</span>
        </div>
      </div>
      <div className="card-body">
        <h5 className="card-title">Special title treatment</h5>
        <img
          src="https://gamek.mediacdn.vn/133514250583805952/2022/4/11/bang3-1649649261907472551226.jpg"
          className="card-img"
          alt="..."
        />
        <p className="card-text">
          With supporting text below as a natural lead-in to additional content.
        </p>
      </div>
    </div>
  );
}
