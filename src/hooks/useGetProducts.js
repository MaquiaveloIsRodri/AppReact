import {useEffect , useState} from 'react';
import axios from 'axios'

const useGetProducts = (API) => {
    const [products, setProducts] = useState([]);
    useEffect(()=>{
        async function fetchData() {
            try{
                const response = await axios(API)
                setProducts(response.data)
            }
            catch(error){
                throw new error(error)
            }
        }
        fetchData();
    },[])
    return products
};

export default useGetProducts;