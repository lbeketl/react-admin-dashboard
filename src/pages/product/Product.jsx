import React from 'react';
import { Link } from 'react-router-dom';
import Chart from '../../components/chart/Chart'
import { productData } from '../../dummyData';
import './product.css';

function Product() {
  return (
    <div className="product">
      <div className="productTitleContainer">
        <h1 className="productTitle">Product</h1>
        <Link to="/newProduct">
          <button className="productAddButton">Create</button>
        </Link>
      </div>
      <div className="productTop">
          <div className="productTopLeft">
            <Chart data={productData} dataKey="Sales" title="Sales Performance"/>
          </div>
          <div className="productTopRight">
            <div className="productInfoTop">
                <img className="productInfoImg" src="https://ilounge.ua/files/products/apple-airpods-2-sweet-lilac-mv7n2_1.1000x.jpeg" alt=""  />
                <span className="productName">Apple Airpods</span>
            </div>
            <div className="productInfoBottom">
               <div className="productInfoItem">
               <span className="productInfoKey">id: </span>
                <span className="productInfoValue">123</span>
               </div>
               <div className="productInfoItem">
               <span className="productInfoKey">sales: </span>
                <span className="productInfoValue">563</span>
               </div>
               <div className="productInfoItem">
               <span className="productInfoKey">active: </span>
                <span className="productInfoValue">yes</span>
               </div>
               <div className="productInfoItem">
               <span className="productInfoKey">in stock: </span>
                <span className="productInfoValue">no</span>
               </div>
            </div>
          </div>
      </div>
      <div className="productBottom">
          <form action="
          " className="productForm">
              <div className="productFormLeft">
                  <label htmlFor="">Product Name</label>
                  <input type="text"  placeholder="Apple Airpods"/>
                  <select name="inStock" id="idStock">
                      <option value="yes">Yes</option>
                      <option value="no">No</option>
                  </select>
                  <label htmlFor="">Active</label>
                  <select name="inStock" id="idStock">
                      <option value="yes">Yes</option>
                      <option value="no">No</option>
                  </select>
              </div>
              <div className="productFormRight">

              </div>
          </form>
      </div>
    </div>
  );
}

export default Product;
