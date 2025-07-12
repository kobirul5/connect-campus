import axios from "axios";

const axiosPublic = axios.create({
    baseURL: 'https://connect-campus-backend.vercel.app/'
})
const useAxiosPublic = () => {
    return axiosPublic
};

export default useAxiosPublic;