import axios from "axios"

/* eslint-disable */

const BIKEMEMBER_BASE_REST_API_URL='http://13.125.230.40:8090/api/v1/bikemembers';
class BikeMemberService{
  getAllBikeMembers(){
    return axios.get(BIKEMEMBER_BASE_REST_API_URL)
  }

  createBikeMember(bikemember){
    return axios.post(BIKEMEMBER_BASE_REST_API_URL,bikemember)
  }
  getBikeMemberById(bikememberId){
    return axios.get(BIKEMEMBER_BASE_REST_API_URL+'/'+bikememberId)
  }
  updateBikeMember(bikememberId,bikemember){
    return axios.put(BIKEMEMBER_BASE_REST_API_URL+'/'+bikememberId,bikemember)
  }
 deleteBikeMember(bikememberId){
    return axios.delete(BIKEMEMBER_BASE_REST_API_URL+'/'+bikememberId)
  }

  
}
export default new BikeMemberService();
// export default new BikeMemberService();