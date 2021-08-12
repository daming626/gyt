import {GETHOSPITALS} from "../constants/global";

const INITIAL_STATE = {

}

export default function gytHospitalList (state = INITIAL_STATE, action) {
  console.log("YYYYYYY"+GETHOSPITALS)
  switch (action.type) {
    case GETHOSPITALS:
      console.log("YES")
      return {
        ...state,
        gytHospitals: action.gytHospitals,
      }
    default:
      return state
  }
}