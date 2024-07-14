import "./tag.css";
export const Tag = () => {
  return (
    <div className="tag">
      <div className="tag-container">
        <div className="tag_top">
          <span className="tag_top-left">Plan</span>
          <span className="tag_top-right">View</span>
        </div>
        <div className="tag_bottom">
          <ul className="tag-items">
            <li className="tag-item">
              
              <span className="text">Prévue</span>
              <span className="number">3</span>
            </li>
            <li className="tag-item">
              
              <span className="text">En cours</span>
              <span className="number">5</span>
            </li>
            <li className="tag-item">
              
              <span className="text">En ligne</span>
              <span className="number">7</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
