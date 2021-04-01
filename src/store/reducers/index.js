import { combineReducers } from 'redux';

import pacientes from './pacientes';
import profissionais from './profissionais';

export default combineReducers({ pacientes, profissionais });
