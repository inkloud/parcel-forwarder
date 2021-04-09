## Introduction

Parcel Forwarder is a Life365 project that collect the application useful to ship the orders. Every application that communicates with a courier 
informative system can join the project and became a project plugin. If you want to collaborate with us take a look to the [contacts](#api).
and request an account.

Parcel Forwarder application workflow is the following:

- A warehouse man open the application and log in 
- Write the order Id
- The application search in our system and show the order informations
- Show automatically a little component that is useful to interface with the specific courier informative system (the specific courier plugin)

The plugin is selected among the other in base of the country and the id of the courier taked by our system information.
(e.g. In Italy Bartolini have the id 1)

## What do you have to code?

A specific courier plugin is a **ReactJS component** that have the same structure of our plugin template that you can found in this repository.

The following rules are mandatory for the integration of your code with our project:

- Structure of sources folder have to be ```/src/COUNTRYID/courier_COURIERID```. If there is already the folder for the country you have to add only the 
  folder of the new plugin courier.  Ask the COUNTRYID and the courier_COURIERID to the client.
- Same for the asset folder ```/asset/COUNTRYID/courier_COURIERID```
- To have a **plugin.js** script that implement the parent React component of your entire plugin in your plugin folder.
- To use **ReactJS** at least for the main plugin component.
- To export the component in the plugin.js in one of the following ways:
    
    1. ``` export default { plugin_name as PluginCard }; ```
    2. ``` export default { PluginCard}; ``` (if the component already call PluginCard)

- To use **ES6** javascript version. (For some other informations about our way to do the application bundle check the webpack.config.js file in the repo)

Check our plugin template in ```src/IT/TEMPLATE``` for not start a project from scratch!

### How to launch the project

1. Open a shell in the project root directory
2. ``` npm run watch ```
3. Open index.html on Chrome 
4. Use the username and password gived from us
5. Use the trial order and use the application

### Props

These are the ReactJS **props** passed to your main componet plugin:

- props['order']
```
{
  "addr": {
    "fatturazione": {
      "cap": "47121", 
      "citta": "Forlì", 
      "codice_fiscale": "SPDGCR75C01A794U", 
      "indirizzo": "via Carlo Forlanini 19", 
      "nazione": 168, 
      "partita_iva": null, 
      "provincia": 118, 
      "ragione_sociale": "Giancarlo Spadini"
    }, 
    "spedizione": {
      "cap": "86021", 
      "citta": "Bojano", 
      "indirizzo": "Piazza roma,91 C/O Mastrobuono Pizzardi", 
      "nazione": 102, 
      "nome": "Alfonso Morgillo", 
      "provincia": 21, 
      "ragione_sociale": "Consegnare a Gianca", 
      "telefono": "0"
    }
  }, 
  "box_n": 0, 
  "courier": 1, 
  "date": "2020-11-06T13:04:00+01:00", 
  "dropshipping": false, 
  "has_invoice": false, 
  "id": 447499, 
  "items": [
    {
      "Codicesenza": "LBAC4000B-4400", 
      "barcode": "0000000000000", 
      "description": "ACER TravelMate 2300 4000 Aspire 1410 1600 1640 - 4400 mAh", 
      "id": 6045, 
      "perbox_discount": 10.0, 
      "peso": 530, 
      "photos": [
        "https://static.life365.eu/IT/p/6045/img/6045_LBAC4000B.jpg"
      ], 
      "prezzo": 17.72, 
      "qta": 1, 
      "qta_scatola": 3, 
      "qty_delivery": 1, 
      "rma_warranty": 6, 
      "stock": 8, 
      "tax_type": 1, 
      "tax_value": 22.0, 
      "virtual": false
    }
  ], 
  "logistic_state": "PICKED", 
  "payment_type": "POSTEPAY", 
  "shipment_data": "{\"BRT\": []}", 
  "shippingCostByCourier": {
    "1": 4.5, 
    "4": 4.5
  }, 
  "shipping_cost": 4.5, 
  "stato": 100, 
  "tax2": {
    "actualValue": 0.0, 
    "potentialValue": 0.0
  }, 
  "tax_type": 1, 
  "tax_value": 22.0, 
  "tipopagamento": "postepay", 
  "total": 27.11, 
  "tracking_url": "https://as777.brt.it/vas/sped_ricDocMit_load.hsm?referer=sped_numspe_par.htm&KSU=0250869&DocMit=&rma=447499&RicercaDocMit=Ricerca", 
  "transport_doc_n": 79251
} 
```
    - shipment_data: where are stored every useful information about shipping
- props['token']
```
{
    "contact_info":
    "level": 10
    "short_code": "W1"
    "__proto__": Object
    "country": "IT"
    "id": 3
    "jwt": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2MTM0Nzc0MDAsImRhdGEiOnsiaWQiOjMsImxvZ2luIjoid2giLCJzaWdsYSI6IldIIiwibmFtZSI6IndoIiwibGV2ZWwiOjEwLCJyb2xlIjoid2FyZWhvdXNlIiwiY291bnRyeSI6IklUIn19.mpVDzEDik-bh-kC-smTIm5rUfMglBswWrphgiloFotk"
    "level": 10
    "login": "wh"
    "name": "wh"
    "role": "warehouse"
    "sigla": "WH"
    "tags": []
}
```
- props['token']['jwt'] useful for communicate with our system 

### API 

``` PUT https://it2/life365.eu/api/order/{orderId}?jwt=... ```


``` (e.g.) body: { logistic_state: 'LABELLED', box_n: 5 } ```


API for change order information in our system. The two params in the body are:
- *logistic_state*: change the current logistic state. You can change in 'LABELLED' (order is labelled and ready for shipping) and
  'IN-TRANSIT'(order shipped)
- *box_n*: number of box used for making the order 
Use the jwt that you can found in props['token']['jwt']

### What country and what legacy system?

Is mandatory to set the **COUNTRY** variable with the COUNTRYID correct in the index.html file. When you set this the project configures itself with the correct variable for interact properly with the legacy system. 
For the other variable and some other info please contact us!
    
## Usefull links and contacts
- ict@life365.eu
For get an account and ask some questions please contact us!



