import { useState } from "react";
import "./newProduct.css";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import app from "../../firebase";
import { addProduct } from "../../redux/apiCalls";
import { useDispatch } from "react-redux";

export default function NewProduct() {
  const [inputs, setInputs] = useState({});
  const [file, setFile] = useState(null);
  const [cat, setCat] = useState([]);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setInputs((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };
  console.log(inputs);
  const handleCat = (e) => {
    setCat(e.target.value.split(","));
  };

  const handleClick = (e) => {
    e.preventDefault();
    const fileName = new Date().getTime() + file.name;
    const storage = getStorage(app);
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
        switch (snapshot.state) {
          case "paused":
            console.log("Upload is paused");
            break;
          case "running":
            console.log("Upload is running");
            break;
          default:
        }
      },
      (error) => {},
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          const product = { ...inputs, image: downloadURL, categories: cat };
          addProduct(product, dispatch);
        });
      }
    );
  };

  return (
    <div className="newProduct">
      <h1 className="addProductTitle">New Product</h1>
      <form className="addProductForm">
        <div className="addProduct-content">
          <div className="addProductItem">
            <label>Image</label>
            <input
              className="image"
              type="file"
              id="file"
              onChange={(e) => setFile(e.target.files[0])}
            />
          </div>
          <div className="addProductItem">
            <label>Title</label>
            <input
              name="title"
              type="text"
              placeholder="Apple Airpods"
              onChange={handleChange}
            />
          </div>
          <div className="addProductItem">
            <label>Description</label>
            <input
              name="desc"
              type="text"
              placeholder="description..."
              onChange={handleChange}
            />
          </div>
          <div className="addProductItem">
            <label>Price</label>
            <input
              name="price"
              type="number"
              placeholder="100"
              onChange={handleChange}
            />
          </div>
          <div className="addProductItem">
            <label>Color</label>
            <input
              name="color"
              type="text"
              placeholder="black"
              onChange={handleChange}
            />
          </div>
          <div className="addProductItem">
            <label>Thickness</label>
            <input
              name="thickness"
              type="text"
              placeholder="6mm"
              onChange={handleChange}
            />
          </div>
          <div className="addProductItem">
            <label>Move</label>
            <input
              name="Move"
              type="text"
              placeholder="Quartz movement"
              onChange={handleChange}
            />
          </div>
          <div className="addProductItem">
            <label>Material</label>
            <input
              name="Material"
              type="text"
              placeholder="Refined and polished 316L stainless steel"
              onChange={handleChange}
            />
          </div>
          <div className="addProductItem">
            <label>Strap</label>
            <input
              name="Strap"
              type="text"
              placeholder="Mesh eye"
              onChange={handleChange}
            />
          </div>
          <div className="addProductItem">
            <label>Waterproof</label>
            <input
              name="Waterproof"
              type="text"
              placeholder="Minimum 3ATM (rainproof)"
              onChange={handleChange}
            />
          </div>
          <div className="addProductItem">
            <label>SwapStraps</label>
            <select name="SwapStraps" onChange={handleChange}>
              <option value="true">Yes</option>
              <option value="false">No</option>
            </select>
          </div>
          <div className="addProductItem">
            <label>Categories</label>
            <input
              type="text"
              placeholder="all, men, women, collection"
              onChange={handleCat}
            />
          </div>
        </div>
        <button onClick={handleClick} className="addProductButton">
          Create
        </button>
      </form>
    </div>
  );
}
