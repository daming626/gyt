import {GETHOSPITALS} from "../constants/global";

const INITIAL_STATE = {

}

export default function gytHospitalList (state = INITIAL_STATE, action) {
  console.log(GETHOSPITALS)
  switch (action.type) {
    case GETHOSPITALS:
      return {
        ...state,
        gytHospitals: action.gytHospitals,
      }
    default:
      return state
  }
}