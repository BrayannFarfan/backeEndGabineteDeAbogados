import { Asunto } from './asunto.js'
import { Procurador } from './procurador.js'
import { Usuario } from './user.js'


// Asunto.belongsTo(Usuario,{ foreignKey: 'asuntoUserId'});
// Usuario.hasOne(Asunto);

// Asunto.hasMany(Procurador,{foreignKey: 'asuntoProcuradorId'});
// Procurador.belongsTo(Asunto);


// await Asunto.sync();
// await Procurador.sync();
// await Usuario.sync();