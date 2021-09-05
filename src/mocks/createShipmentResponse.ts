const createShipmentResponse = {
  "data": {
      "id": "81098",
      "type": "shipments",
      "attributes": {
          "status": "WAITING",
          "created_at": "2021-09-05T00:34:33.650-05:00",
          "updated_at": "2021-09-05T00:34:33.685-05:00"
      },
      "relationships": {
          "parcels": {
              "data": [
                  {
                      "id": "66759",
                      "type": "parcels"
                  }
              ]
          },
          "rates": {
              "data": [
                  {
                      "id": "492404",
                      "type": "rates"
                  },
                  {
                      "id": "492405",
                      "type": "rates"
                  },
                  {
                      "id": "492406",
                      "type": "rates"
                  },
                  {
                      "id": "492407",
                      "type": "rates"
                  },
                  {
                      "id": "492408",
                      "type": "rates"
                  },
                  {
                      "id": "492409",
                      "type": "rates"
                  },
                  {
                      "id": "492410",
                      "type": "rates"
                  },
                  {
                      "id": "492411",
                      "type": "rates"
                  },
                  {
                      "id": "492412",
                      "type": "rates"
                  },
                  {
                      "id": "492413",
                      "type": "rates"
                  },
                  {
                      "id": "492419",
                      "type": "rates"
                  },
                  {
                      "id": "492418",
                      "type": "rates"
                  },
                  {
                      "id": "492417",
                      "type": "rates"
                  },
                  {
                      "id": "492416",
                      "type": "rates"
                  },
                  {
                      "id": "492415",
                      "type": "rates"
                  }
              ]
          },
          "address_to": {
              "data": {
                  "id": "161025",
                  "type": "addresses"
              }
          },
          "address_from": {
              "data": {
                  "id": "161024",
                  "type": "addresses"
              }
          },
          "labels": {
              "data": []
          }
      }
  },
  "included": [
      {
          "id": "66759",
          "type": "parcels",
          "attributes": {
              "length": "10.0",
              "height": "10.0",
              "width": "10.0",
              "weight": "3.0",
              "mass_unit": "KG",
              "distance_unit": "CM"
          }
      },
      {
          "id": "492404",
          "type": "rates",
          "attributes": {
              "created_at": "2021-09-05T00:34:33.778-05:00",
              "updated_at": "2021-09-05T00:34:34.567-05:00",
              "amount_local": "190.0",
              "currency_local": "MXN",
              "provider": "FEDEX",
              "service_level_name": "Fedex Express Saver",
              "service_level_code": "FEDEX_EXPRESS_SAVER",
              "service_level_terms": null,
              "days": 5,
              "duration_terms": null,
              "zone": null,
              "arrives_by": null,
              "out_of_area": false,
              "out_of_area_pricing": "0.0",
              "total_pricing": "190.0",
              "is_ocurre": false
          }
      },
      {
          "id": "492405",
          "type": "rates",
          "attributes": {
              "created_at": "2021-09-05T00:34:33.785-05:00",
              "updated_at": "2021-09-05T00:34:34.559-05:00",
              "amount_local": "232.0",
              "currency_local": "MXN",
              "provider": "FEDEX",
              "service_level_name": "Standard Overnight",
              "service_level_code": "STANDARD_OVERNIGHT",
              "service_level_terms": null,
              "days": 2,
              "duration_terms": null,
              "zone": null,
              "arrives_by": null,
              "out_of_area": false,
              "out_of_area_pricing": "0.0",
              "total_pricing": "232.0",
              "is_ocurre": false
          }
      },
      {
          "id": "492406",
          "type": "rates",
          "attributes": {
              "created_at": "2021-09-05T00:34:33.876-05:00",
              "updated_at": "2021-09-05T00:34:34.552-05:00",
              "amount_local": "181.0",
              "currency_local": "MXN",
              "provider": "ESTAFETA",
              "service_level_name": "Terrestre",
              "service_level_code": "ESTAFETA_STANDARD",
              "service_level_terms": null,
              "days": 5,
              "duration_terms": null,
              "zone": null,
              "arrives_by": null,
              "out_of_area": false,
              "out_of_area_pricing": "0.0",
              "total_pricing": "181.0",
              "is_ocurre": false
          }
      },
      {
          "id": "492407",
          "type": "rates",
          "attributes": {
              "created_at": "2021-09-05T00:34:33.881-05:00",
              "updated_at": "2021-09-05T00:34:34.545-05:00",
              "amount_local": "204.0",
              "currency_local": "MXN",
              "provider": "ESTAFETA",
              "service_level_name": "Servicio Express",
              "service_level_code": "ESTAFETA_NEXT_DAY",
              "service_level_terms": null,
              "days": 2,
              "duration_terms": null,
              "zone": null,
              "arrives_by": null,
              "out_of_area": false,
              "out_of_area_pricing": "0.0",
              "total_pricing": "204.0",
              "is_ocurre": false
          }
      },
      {
          "id": "492408",
          "type": "rates",
          "attributes": {
              "created_at": "2021-09-05T00:34:33.912-05:00",
              "updated_at": "2021-09-05T00:34:34.538-05:00",
              "amount_local": "121.0",
              "currency_local": "MXN",
              "provider": "REDPACK",
              "service_level_name": "Ecoexpress",
              "service_level_code": "ECOEXPRESS",
              "service_level_terms": null,
              "days": 5,
              "duration_terms": null,
              "zone": null,
              "arrives_by": null,
              "out_of_area": false,
              "out_of_area_pricing": "0.0",
              "total_pricing": "121.0",
              "is_ocurre": false
          }
      },
      {
          "id": "492409",
          "type": "rates",
          "attributes": {
              "created_at": "2021-09-05T00:34:33.917-05:00",
              "updated_at": "2021-09-05T00:34:34.531-05:00",
              "amount_local": "190.0",
              "currency_local": "MXN",
              "provider": "REDPACK",
              "service_level_name": "Express",
              "service_level_code": "EXPRESS",
              "service_level_terms": null,
              "days": 2,
              "duration_terms": null,
              "zone": null,
              "arrives_by": null,
              "out_of_area": false,
              "out_of_area_pricing": "0.0",
              "total_pricing": "190.0",
              "is_ocurre": false
          }
      },
      {
          "id": "492410",
          "type": "rates",
          "attributes": {
              "created_at": "2021-09-05T00:34:34.155-05:00",
              "updated_at": "2021-09-05T00:34:34.524-05:00",
              "amount_local": "307.0",
              "currency_local": "MXN",
              "provider": "DHL",
              "service_level_name": "DHL Terrestre",
              "service_level_code": "STANDARD",
              "service_level_terms": null,
              "days": 5,
              "duration_terms": null,
              "zone": null,
              "arrives_by": null,
              "out_of_area": false,
              "out_of_area_pricing": "0.0",
              "total_pricing": "307.0",
              "is_ocurre": false
          }
      },
      {
          "id": "492411",
          "type": "rates",
          "attributes": {
              "created_at": "2021-09-05T00:34:34.161-05:00",
              "updated_at": "2021-09-05T00:34:34.517-05:00",
              "amount_local": "335.0",
              "currency_local": "MXN",
              "provider": "DHL",
              "service_level_name": "DHL Express",
              "service_level_code": "EXPRESS",
              "service_level_terms": null,
              "days": 2,
              "duration_terms": null,
              "zone": null,
              "arrives_by": null,
              "out_of_area": false,
              "out_of_area_pricing": "0.0",
              "total_pricing": "335.0",
              "is_ocurre": false
          }
      },
      {
          "id": "492412",
          "type": "rates",
          "attributes": {
              "created_at": "2021-09-05T00:34:34.304-05:00",
              "updated_at": "2021-09-05T00:34:34.509-05:00",
              "amount_local": "251.0",
              "currency_local": "MXN",
              "provider": "UPS",
              "service_level_name": "UPS Express",
              "service_level_code": "EXPRESS_SAVER",
              "service_level_terms": null,
              "days": 5,
              "duration_terms": null,
              "zone": null,
              "arrives_by": null,
              "out_of_area": false,
              "out_of_area_pricing": "0.0",
              "total_pricing": "251.0",
              "is_ocurre": false
          }
      },
      {
          "id": "492413",
          "type": "rates",
          "attributes": {
              "created_at": "2021-09-05T00:34:34.362-05:00",
              "updated_at": "2021-09-05T00:34:34.502-05:00",
              "amount_local": "200.0",
              "currency_local": "MXN",
              "provider": "PAQUETEXPRESS",
              "service_level_name": "Nacional",
              "service_level_code": "NACIONAL",
              "service_level_terms": null,
              "days": 5,
              "duration_terms": null,
              "zone": null,
              "arrives_by": null,
              "out_of_area": false,
              "out_of_area_pricing": "0.0",
              "total_pricing": "200.0",
              "is_ocurre": false
          }
      },
      {
          "id": "492419",
          "type": "rates",
          "attributes": {
              "created_at": "2021-09-05T00:34:34.429-05:00",
              "updated_at": "2021-09-05T00:34:34.457-05:00",
              "amount_local": "207.0",
              "currency_local": "MXN",
              "provider": "SKYDROPX",
              "service_level_name": "Día Siguiente Premium",
              "service_level_code": "SKYDROPX_STANDARD_OVERNIGHT_PREMIUM",
              "service_level_terms": null,
              "days": 2,
              "duration_terms": null,
              "zone": null,
              "arrives_by": null,
              "out_of_area": false,
              "out_of_area_pricing": "0.0",
              "total_pricing": "207.0",
              "is_ocurre": false
          }
      },
      {
          "id": "492418",
          "type": "rates",
          "attributes": {
              "created_at": "2021-09-05T00:34:34.424-05:00",
              "updated_at": "2021-09-05T00:34:34.464-05:00",
              "amount_local": "178.0",
              "currency_local": "MXN",
              "provider": "SKYDROPX",
              "service_level_name": "Terrestre Premium",
              "service_level_code": "SKYDROPX_EXPRESS_SAVER_PREMIUM",
              "service_level_terms": null,
              "days": 5,
              "duration_terms": null,
              "zone": null,
              "arrives_by": null,
              "out_of_area": false,
              "out_of_area_pricing": "0.0",
              "total_pricing": "178.0",
              "is_ocurre": false
          }
      },
      {
          "id": "492417",
          "type": "rates",
          "attributes": {
              "created_at": "2021-09-05T00:34:34.419-05:00",
              "updated_at": "2021-09-05T00:34:34.472-05:00",
              "amount_local": "171.0",
              "currency_local": "MXN",
              "provider": "SKYDROPX",
              "service_level_name": "Día Siguiente",
              "service_level_code": "SKYDROPX_STANDARD_OVERNIGHT",
              "service_level_terms": null,
              "days": 3,
              "duration_terms": null,
              "zone": null,
              "arrives_by": null,
              "out_of_area": false,
              "out_of_area_pricing": "0.0",
              "total_pricing": "171.0",
              "is_ocurre": false
          }
      },
      {
          "id": "492416",
          "type": "rates",
          "attributes": {
              "created_at": "2021-09-05T00:34:34.415-05:00",
              "updated_at": "2021-09-05T00:34:34.481-05:00",
              "amount_local": "130.0",
              "currency_local": "MXN",
              "provider": "SKYDROPX",
              "service_level_name": "Terrestre",
              "service_level_code": "SKYDROPX_EXPRESS_SAVER",
              "service_level_terms": null,
              "days": 6,
              "duration_terms": null,
              "zone": null,
              "arrives_by": null,
              "out_of_area": false,
              "out_of_area_pricing": "0.0",
              "total_pricing": "130.0",
              "is_ocurre": false
          }
      },
      {
          "id": "492415",
          "type": "rates",
          "attributes": {
              "created_at": "2021-09-05T00:34:34.402-05:00",
              "updated_at": "2021-09-05T00:34:34.488-05:00",
              "amount_local": "124.0",
              "currency_local": "MXN",
              "provider": "CARSSA",
              "service_level_name": "Nacional",
              "service_level_code": "NACIONAL",
              "service_level_terms": null,
              "days": 10,
              "duration_terms": null,
              "zone": null,
              "arrives_by": null,
              "out_of_area": false,
              "out_of_area_pricing": "0.0",
              "total_pricing": "124.0",
              "is_ocurre": false
          }
      },
      {
          "id": "161025",
          "type": "addresses",
          "attributes": {
              "name": "Jorge Fernández",
              "company": "-",
              "address1": "Av. Lázaro Cárdenas #234",
              "address2": "Americana",
              "city": "Guadalajara",
              "province": "Jalisco",
              "zip": "44100",
              "country": "MX",
              "phone": "5555555555",
              "email": "ejemplo@skydropx.com",
              "created_at": "2021-09-05T00:34:33.647-05:00",
              "updated_at": "2021-09-05T00:34:33.647-05:00",
              "reference": "Frente a tienda de abarro",
              "province_code": "JA",
              "contents": "test"
          }
      },
      {
          "id": "161024",
          "type": "addresses",
          "attributes": {
              "name": "Jose Fernando",
              "company": "skydropx",
              "address1": "Av. Principal #234",
              "address2": "Centro",
              "city": "Azcapotzalco",
              "province": "Ciudad de México",
              "zip": "02900",
              "country": "MX",
              "phone": "5555555555",
              "email": "skydropx@email.com",
              "created_at": "2021-09-05T00:34:33.643-05:00",
              "updated_at": "2021-09-05T00:34:33.643-05:00",
              "reference": null,
              "province_code": "DF",
              "contents": null
          }
      }
  ]
}

export default createShipmentResponse;