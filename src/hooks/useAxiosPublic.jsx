import axios from "axios";


const axiosPublic = axios.create({
    baseURL: 'https://delivery-tiger-server.vercel.app'
})
const useAxiosPublic = () => {
    return axiosPublic;
};

export default useAxiosPublic;