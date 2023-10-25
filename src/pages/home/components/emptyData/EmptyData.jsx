import { useNavigate } from "react-router-dom";
import { EmptyImg } from "../../../../assets/image";
import "./Empty.scss";
export const EmptyData = () => {
const navigate = useNavigate();
  return (
    <div className="empty-grid">
      <h2>Вы пока не создали ни одного товара</h2>
      <div style={{ marginBottom: "100px" }}>
        <img src={EmptyImg} alt="" />
      </div>
      <button onClick={()=> navigate("/newproduct")}>Создать первый товар</button>
    </div>
  );
};
