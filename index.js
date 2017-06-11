const {protocol} = require('tera-data-parser')

module.exports = function Debug(dispatch) {

    let blockList = [31635, 64811, 46858, 63446, 52178, 28907, 39343, 54516, 44367, 43878, 37917, 36799, 
    21089, 33252, 32331, 51555, 62886, 60803, 39607, 27609, 50199, 42342, 48433, 36089, 46903, 29262, 
    31424, 60397, 25335, 52049, 55631, 58153, 59819, 37076, 42673, 35322, 36446, 62659, 29351, 63044, 19900,
    22662, 19901, 36729, 22776, 44707, 58527, 20641, 56953, 44977, 43946, 50209, 40695, 40223, 36311, 60713,
    26465, 46190, 49243, 55621, 42012, 25112, 61494, 51113, 46571, 25350, 63200, 54091, 57516, 31608, 39872,
    65160, 36601, 61708, 44572, 27925, 33070, 47311, 48163, 25845, 45839, 35220, 29336, 21060, 47691, 34943,
    62600, 54829, 25632, 36329, 27792, 28775, 55080, 31129, 38940, 42020, 54653, 56581, 63022, 46456, 63323,
    28944, 22859, 42781, 54778, 65305, 35412, 42074, 52037, 35852, 22189, 26540, 25207, 23945, 62473, 33347,
    27444, 40299, 24981, 63431, 53929, 37872, 35070, 44852, 36232, 38551, 44671, 43671, 59881, 28717, 32926,
    61733, 48628, 29667, 46731, 38403, 48585, 45962, 39962, 61344, 39360, 49527, 20485, 35848, 53953, 47216,
    56951, 59331, 49384
    ]

    dispatch.hook('*', 'raw', {order: -999}, (code, data, fromServer) => {
        if(blockList.includes(code))
        {
            //console.log('Blocked');
            return;
        }
        //console.log(code);
        console.log(fromServer ? '<-' : '->', dispatch.base.protocolMap.code.get(code))
    })
}
