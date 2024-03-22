import axios from "axios";

const API_URL="http://localhost:9000";



class ProductService{
    saveproduct(product)
    {
        return axios.post(API_URL+"/saveproduct",product);
    }

    getAllProduct()
    {
        return axios.get(API_URL+"/");
    }
    getProductById(id)
    {
        return axios.get(API_URL+"/"+id);
    }

    deleteProduct(id)
    {
        return axios.delete(API_URL+"/deleteproduct/"+id);
    }

    editProduct(product)
    {
        return axios.put(API_URL+"/editproduct/"+product.id,product)
    }


}

export default new ProductService;