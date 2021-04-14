const DROPSHIPPING_ALIAS = "DROPSHIPPING"
const  SENDER_COMPANY_NAME = "Life365"
function parseOrder(order) {
    let orderParsed = {}

    //Mittente
    orderParsed['sender'] = !order['dropshipping'] ? SENDER_COMPANY_NAME : DROPSHIPPING_ALIAS

    let spedizione = order['addr']['spedizione']

    //Destinatario
    orderParsed['reciver'] = spedizione['nome']  == undefined || spedizione['nome']  == "" ? spedizione['ragione_sociale'] : spedizione['nome']
    
    //Indirizzo
    orderParsed['address'] = spedizione['indirizzo'].substring(0,35)

    //città
    orderParsed['city'] = spedizione['citta']

    //ZipCode
    orderParsed['zipCode'] = spedizione['cap']

    //DDT
    orderParsed['transport_doc_n'] = order['transport_doc_n']

    //departure depot
    orderParsed['departureDepot'] = spedizione['nazione']

    //is Contrassegno
    orderParsed['isCODMandatory'] = order['payment_type'] == "CONTRASSEGNO-ASSEGNO" || order['payment_type'] == "CONTRASSEGNO-CONTANTI"
    
    //is check
    orderParsed['isCheck'] = order['payment_type'] == "CONTRASSEGNO-ASSEGNO"

    //total
    orderParsed['total'] = order['total']

    orderParsed['id'] = order['id']

    orderParsed['box_n'] = order['box_n']

    orderParsed['logistic_state'] = order['logistic_state']

    //shipment data 
    orderParsed['shipment_data'] = order['shipment_data'] != null ? JSON.parse(order['shipment_data']) : null

    //Peso in kg
    let items = order['items']
    orderParsed['weight'] = 0
    items.forEach(i => {
        orderParsed['weight'] += i['peso'] / 1000
    });

    //Corriere
    orderParsed['courier'] = order['courier']
    return orderParsed
}

const getAssetsURL = function (courier_id, filename) {
    return GET_PLUGIN_ASSET.replace("courier_id", courier_id).replace("filename", filename)
}

const checkWhUserIdCorrect = function (worker_id, jwt) {
    return new Promise((resolve, reject) => {
        getWhUser(jwt).then(wh_users => {
            const ok = (wh_users.filter((user) => {
                return user.contact_info.short_code == worker_id
            }).length > 0)
            resolve(ok)
        }).catch(err => {
            reject(err)
        })
    })
}

const getWhUser = function (jwt) {
    return new Promise((resolve, reject) => {
        fetch(`${GET_WH_USERS}?jwt=${jwt}`)
            .then(res => {
                if (res.ok) {
                    res.json().then(data => {
                        resolve(data)
                    }).catch(err => {
                        reject(err)
                    })
                } else {
                    reject(res.status)
                }
            }).catch(err => {
                reject(err)
            })
    })
}


export default {
    parseOrder, getAssetsURL, checkWhUserIdCorrect
}
