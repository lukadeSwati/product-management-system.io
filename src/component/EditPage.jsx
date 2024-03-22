// import React from 'react'
import React, { useEffect, useState } from 'react'
import ProductService from '../service/productservice';
import { useNavigate, useParams } from 'react-router-dom';

const EditPage = () => {
    const[product,setProduct]=useState({
        id:"",
        productname:"",
        description:"",
        price:"",
        status:"",

    });
    const navigate=useNavigate();

   const {id} =useParams();
   console.log(id);


    const [msg,setMsg]=useState("");

    useEffect(()=>{
        ProductService.getProductById(id).then((res)=>{
            setProduct(res.data);

        }).catch((error)=>{
            console.log(error);
        });
    },[]);
    



    const handleChange=(e)=>{
        const value=e.target.value;
        setProduct({...product,[e.target.name]: value});
    };

    const ProductUpdate=(e) =>{
        e.preventDefault();
        // console.log(product);
        ProductService
        .editProduct(product)
        .then((res)=>{
            // console.log("product Added Successfully");
            // setMsg("Product Added Successfully");
            navigate("/");
            

        })
        .catch((error)=>{
            console.log(error);
        });
        
    };
  return (
    <>

<div className="container mt-3">
    <div className="row">
        <div className="col-md-6 offset-md-3">
            <div className="card">
                <div className="card-header fs-3 text-center">
                    Edit Product</div>

                {
                    msg &&
                    <p className="fs-4 text-center text-success">{msg}</p>
                }
                <div className="card-body">
                    <form onSubmit={(e)=> ProductUpdate(e)}>
                        <div className="mb-3">
                        <label>Enter Product Name</label>
                        <input type="text" name="productname" className="form-control"
                        onChange={(e)=>handleChange(e)}
                        value={product.productname}
                        />
                        </div>
                        <div className="mb-3">
                        <label>Enter Description</label>
                        <input type="text" name="description" className="form-control"
                        onChange={(e)=>handleChange(e)}
                        value={product.description}
                        />
                        
                        </div>
                        <div className="mb-3">
                        <label>Enter Product price</label>
                        <input type="text" name="price" className="form-control"
                        onChange={(e)=>handleChange(e)}
                        value={product.price}
                        />
                        </div>
                        <div className="mb-3">
                        <label>Enter Product Status(Available/NotAvailable)</label>
                        <input type="text" name="status" className="form-control"
                        onChange={(e)=>handleChange(e)}
                        value={product.status}
                        />
                        </div>

                        <button className="btn btn-primary col-md-12">Update</button>


                    </form>

                </div>

            </div>


        </div>


    </div>
      
</div>
    
    
    
    </>
  );
};

export default EditPage;
