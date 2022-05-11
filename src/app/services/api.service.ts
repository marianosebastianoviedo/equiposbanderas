import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor() { }
/* flags(){
    return this.http.get('https://restcountries.com/v2/all');
} */
facil = [
    {
      "name": "Afghanistan",
      "capital": "Kabul",
      "flag": "./assets/flags/0.svg",
      "es": "Afganistán"
    },
    {
      "name": "Algeria",
      "capital": "Algiers",
      "flag": "./assets/flags/3.svg",
      "es": "Argelia"
    },
    {
      "name": "Argentina",
      "capital": "Buenos Aires",
      "flag":  "./assets/flags/10.svg",
      "es": "Argentina"
    },
    {
      "name": "Australia",
      "capital": "Canberra",
      "flag": "./assets/flags/13.svg",
      "es": "Australia"
    },
    {
      "name": "Belgium",
      "capital": "Brussels",
      "flag": "./assets/flags/21.svg",
      "es": "Bélgica"
    },
    {
      "name": "Belize",
      "capital": "Belmopan",
      "flag": "./assets/flags/22.svg",
      "es": "Belice"
    },
    {
      "name": "Bermuda",
      "capital": "Hamilton",
      "flag": "./assets/flags/24.svg",
      "es": "Bermudas"
    },
    {
      "name": "Bolivia (Plurinational State of)",
      "capital": "Sucre",
      "flag": "./assets/flags/26.svg",
      "es": "Bolivia"
    },
    {
      "name": "Bosnia and Herzegovina",
      "capital": "Sarajevo",
      "flag": "./assets/flags/28.svg",
      "es": "Bosnia y Herzegovina"
    },
    {
      "name": "Brazil",
      "capital": "Brasília",
      "flag": "./assets/flags/30.svg",
      "es": "Brasil"
    },
    {
      "name": "Bulgaria",
      "capital": "Sofia",
      "flag": "./assets/flags/35.svg",
      "es": "Bulgaria"
    },
    {
      "name": "Cameroon",
      "capital": "Yaoundé",
      "flag": "./assets/flags/39.svg",
      "es": "Camerún"
    },
    {
      "name": "Canada",
      "capital": "Ottawa",
      "flag": "./assets/flags/40.svg",
      "es": "Canadá"
    },
    {
      "name": "Chile",
      "capital": "Santiago",
      "flag": "./assets/flags/45.svg",
      "es": "Chile"
    },
    {
      "name": "China",
      "capital": "Beijing",
      "flag": "./assets/flags/46.svg",
      "es": "China"
    },
    {
      "name": "Colombia",
      "capital": "Bogotá",
      "flag": "./assets/flags/49.svg",
      "es": "Colombia"
    },
    {
      "name": "Costa Rica",
      "capital": "San José",
      "flag": "./assets/flags/54.svg",
      "es": "Costa Rica"
    },
    {
      "name": "Croatia",
      "capital": "Zagreb",
      "flag": "./assets/flags/55.svg",
      "es": "Croacia"
    },
    {
      "name": "Cuba",
      "capital": "Havana",
      "flag": "./assets/flags/56.svg",
      "es": "Cuba"
    },
    {
      "name": "Czech Republic",
      "capital": "Prague",
      "flag": "./assets/flags/59.svg",
      "es": "República Checa"
    },
    {
      "name": "Denmark",
      "capital": "Copenhagen",
      "flag": "./assets/flags/60.svg",
      "es": "Dinamarca"
    },
    {
      "name": "Dominican Republic",
      "capital": "Santo Domingo",
      "flag": "./assets/flags/63.svg",
      "es": "República Dominicana"
    },
    {
      "name": "Ecuador",
      "capital": "Quito",
      "flag": "./assets/flags/64.svg",
      "es": "Ecuador"
    },
    {
      "name": "Egypt",
      "capital": "Cairo",
      "flag": "./assets/flags/65.svg",
      "es": "Egipto"
    },
    {
      "name": "El Salvador",
      "capital": "San Salvador",
      "flag": "./assets/flags/66.svg",
      "es": "El Salvador"
    },
    {
      "name": "Finland",
      "capital": "Helsinki",
      "flag": "./assets/flags/74.svg",
      "es": "Finlandia"
    },
    {
      "name": "France",
      "capital": "Paris",
      "flag": "./assets/flags/75.svg",
      "es": "Francia"
    },
    {
      "name": "French Guiana",
      "capital": "Cayenne",
      "flag": "./assets/flags/76.svg",
      "es": "Guayana Francesa"
    },
    {
      "name": "Germany",
      "capital": "Berlin",
      "flag": "./assets/flags/82.svg",
      "es": "Alemania"
    },
    {
      "name": "Ghana",
      "capital": "Accra",
      "flag": "./assets/flags/83.svg",
      "es": "Ghana"
    },
    {
      "name": "Greece",
      "capital": "Athens",
      "flag": "./assets/flags/85.svg",
      "es": "Grecia"
    },
    {
      "name": "Greenland",
      "capital": "Nuuk",
      "flag": "./assets/flags/86.svg",
      "es": "Groenlandia"
    },
    {
      "name": "Guatemala",
      "capital": "Guatemala City",
      "flag": "./assets/flags/90.svg",
      "es": "Guatemala"
    },
    {
      "name": "Haiti",
      "capital": "Port-au-Prince",
      "flag": "./assets/flags/95.svg",
      "es": "Haiti"
    },
    {
      "name": "Honduras",
      "capital": "Tegucigalpa",
      "flag": "./assets/flags/98.svg",
      "es": "Honduras"
    },
    {
      "name": "Hungary",
      "capital": "Budapest",
      "flag": "./assets/flags/99.svg",
      "es": "Hungría"
    },
    {
      "name": "India",
      "capital": "New Delhi",
      "flag": "./assets/flags/102.svg",
      "es": "India"
    },
    {
      "name": "Indonesia",
      "capital": "Jakarta",
      "flag": "./assets/flags/103.svg",
      "es": "Indonesia"
    },
    {
      "name": "Ivory Coast",
      "capital": "Yamoussoukro",
      "flag": "./assets/flags/104.svg",
      "es": "Costa de Marfil"
    },
    {
      "name": "Iran (Islamic Republic of)",
      "capital": "Tehran",
      "flag": "./assets/flags/105.svg",
      "es": "Iran"
    },
    {
      "name": "Iraq",
      "capital": "Baghdad",
      "flag": "./assets/flags/106.svg",
      "es": "Irak"
    },
    {
      "name": "Ireland",
      "capital": "Dublin",
      "flag": "./assets/flags/107.svg",
      "es": "Irlanda"
    },
    {
      "name": "Israel",
      "capital": "Jerusalem",
      "flag": "./assets/flags/109.svg",
      "es": "Israel"
    },
    {
      "name": "Italy",
      "capital": "Rome",
      "flag": "./assets/flags/110.svg",
      "es": "Italia"
    },
    {
      "name": "Jamaica",
      "capital": "Kingston",
      "flag": "./assets/flags/111.svg",
      "es": "Jamaica"
    },
    {
      "name": "Japan",
      "capital": "Tokyo",
      "flag": "./assets/flags/112.svg",
      "es": "Japón"
    },
    {
      "name": "Libya",
      "capital": "Tripoli",
      "flag": "./assets/flags/125.svg",
      "es": "Libia"
    },
    {
      "name": "Madagascar",
      "capital": "Antananarivo",
      "flag": "./assets/flags/131.svg",
      "es": "Madagascar"
    },
    {
      "name": "Mexico",
      "capital": "Mexico City",
      "flag": "./assets/flags/142.svg",
      "es": "México"
    },
    {
      "name": "Morocco",
      "capital": "Rabat",
      "flag": "./assets/flags/149.svg",
      "es": "Marruecos"
    },
    {
      "name": "Nepal",
      "capital": "Kathmandu",
      "flag": "./assets/flags/154.svg",
      "es": "Nepal"
    },
    {
      "name": "Netherlands",
      "capital": "Amsterdam",
      "flag": "./assets/flags/155.svg",
      "es": "Holanda (Países Bajos)"
    },
    {
      "name": "New Zealand",
      "capital": "Wellington",
      "flag": "./assets/flags/157.svg",
      "es": "Nueva Zelanda"
    },
    {
      "name": "Nicaragua",
      "capital": "Managua",
      "flag": "./assets/flags/158.svg",
      "es": "Nicaragua"
    },
    {
      "name": "Nigeria",
      "capital": "Abuja",
      "flag": "./assets/flags/160.svg",
      "es": "Nigeria"
    },
    {
      "name": "Korea (Democratic People's Republic of)",
      "capital": "Pyongyang",
      "flag": "./assets/flags/163.svg",
      "es": "Corea del Norte"
    },
    {
      "name": "Norway",
      "capital": "Oslo",
      "flag": "./assets/flags/165.svg",
      "es": "Noruega"
    },
    {
      "name": "Panama",
      "capital": "Panama City",
      "flag": "./assets/flags/170.svg",
      "es": "Panamá"
    },
    {
      "name": "Paraguay",
      "capital": "Asunción",
      "flag": "./assets/flags/172.svg",
      "es": "Paraguay"
    },
    {
      "name": "Peru",
      "capital": "Lima",
      "flag": "./assets/flags/173.svg",
      "es": "Perú"
    },
    {
      "name": "Poland",
      "capital": "Warsaw",
      "flag": "./assets/flags/176.svg",
      "es": "Polonia"
    },
    {
      "name": "Portugal",
      "capital": "Lisbon",
      "flag": "./assets/flags/177.svg",
      "es": "Portugal"
    },
    {
      "name": "Puerto Rico",
      "capital": "San Juan",
      "flag": "./assets/flags/178.svg",
      "es": "Puerto Rico"
    },
    {
      "name": "Qatar",
      "capital": "Doha",
      "flag": "./assets/flags/179.svg",
      "es": "Catar"
    },
    {
      "name": "Romania",
      "capital": "Bucharest",
      "flag": "./assets/flags/182.svg",
      "es": "Rumania"
    },
    {
      "name": "Russian Federation",
      "capital": "Moscow",
      "flag": "./assets/flags/183.svg",
      "es": "Rusia"
    },
    {
      "name": "San Marino",
      "capital": "City of San Marino",
      "flag": "./assets/flags/193.svg",
      "es": "San Marino"
    },
    {
      "name": "Saudi Arabia",
      "capital": "Riyadh",
      "flag": "./assets/flags/195.svg",
      "es": "Arabia Saudí"
    },
    {
      "name": "Senegal",
      "capital": "Dakar",
      "flag": "./assets/flags/196.svg",
      "es": "Senegal"
    },
    {
      "name": "Serbia",
      "capital": "Belgrade",
      "flag": "./assets/flags/197.svg",
      "es": "Serbia"
    },
    {
      "name": "Singapore",
      "capital": "Singapore",
      "flag": "./assets/flags/200.svg",
      "es": "Singapur"
    },
    {
      "name": "South Africa",
      "capital": "Pretoria",
      "flag": "./assets/flags/206.svg",
      "es": "República de Sudáfrica"
    },
    {
      "name": "Korea (Republic of)",
      "capital": "Seoul",
      "flag": "./assets/flags/208.svg",
      "es": "Corea del Sur"
    },
    {
      "name": "Spain",
      "capital": "Madrid",
      "flag": "./assets/flags/209.svg",
      "es": "España"
    },
    {
      "name": "Sweden",
      "capital": "Stockholm",
      "flag": "./assets/flags/216.svg",
      "es": "Suecia"
    },
    {
      "name": "Switzerland",
      "capital": "Bern",
      "flag": "./assets/flags/217.svg",
      "es": "Suiza"
    },
    {
      "name": "Thailand",
      "capital": "Bangkok",
      "flag": "./assets/flags/222.svg",
      "es": "Tailandia"
    },
    {
      "name": "Tunisia",
      "capital": "Tunis",
      "flag": "./assets/flags/228.svg",
      "es": "Túnez"
    },
    {
      "name": "Turkey",
      "capital": "Ankara",
      "flag": "./assets/flags/229.svg",
      "es": "Turquía"
    },
    {
      "name": "Uganda",
      "capital": "Kampala",
      "flag": "./assets/flags/233.svg",
      "es": "Uganda"
    },
    {
      "name": "Ukraine",
      "capital": "Kyiv",
      "flag": "./assets/flags/234.svg",
      "es": "Ucrania"
    },
    {
      "name": "United Arab Emirates",
      "capital": "Abu Dhabi",
      "flag": "./assets/flags/235.svg",
      "es": "Emiratos Árabes Unidos"
    },
    {
      "name": "United Kingdom of Great Britain and Northern Ireland",
      "capital": "London",
      "flag": "./assets/flags/236.svg",
      "es": "Reino Unido"
    },
    {
      "name": "United States of America",
      "capital": "Washington, D.C.",
      "flag": "./assets/flags/237.svg",
      "es": "Estados Unidos"
    },
    {
      "name": "Uruguay",
      "capital": "Montevideo",
      "flag": "./assets/flags/238.svg",
      "es": "Uruguay"
    },
    {
      "name": "Venezuela (Bolivarian Republic of)",
      "capital": "Caracas",
      "flag": "./assets/flags/241.svg",
      "es": "Venezuela"
    },
    {
      "name": "Vietnam",
      "capital": "Hanoi",
      "flag": "./assets/flags/242.svg",
      "es": "Vietnam"
    }
  ]
normal = [
    {
      "name": "Afghanistan",
      "capital": "Kabul",
      "flag": "./assets/flags/0.svg",
      "es": "Afganistán"
    },
    {
      "name": "Albania",
      "capital": "Tirana",
      "flag": "./assets/flags/2.svg",
      "es": "Albania"
    },
    {
      "name": "Algeria",
      "capital": "Algiers",
      "flag": "./assets/flags/3.svg",
      "es": "Argelia"
    },
    {
      "name": "Angola",
      "capital": "Luanda",
      "flag":  "./assets/flags/6.svg",
      "es": "Angola"
    },
    {
      "name": "Antarctica",
      "capital": "No posée",
      "flag": "./assets/flags/8.svg",
      "es": "Antártida"
    },
    {
      "name": "Argentina",
      "capital": "Buenos Aires",
      "flag":  "./assets/flags/10.svg",
      "es": "Argentina"
    },
    {
      "name": "Armenia",
      "capital": "Yerevan",
      "flag": "./assets/flags/11.svg",
      "es": "Armenia"
    },
    {
      "name": "Australia",
      "capital": "Canberra",
      "flag": "./assets/flags/13.svg",
      "es": "Australia"
    },
    {
      "name": "Austria",
      "capital": "Vienna",
      "flag": "./assets/flags/14.svg",
      "es": "Austria"
    },
    {
      "name": "Bahamas",
      "capital": "Nassau",
      "flag": "./assets/flags/16.svg",
      "es": "Bahamas"
    },
    {
      "name": "Belarus",
      "capital": "Minsk",
      "flag": "./assets/flags/20.svg",
      "es": "Bielorrusia"
    },
    {
      "name": "Belgium",
      "capital": "Brussels",
      "flag": "./assets/flags/21.svg",
      "es": "Bélgica"
    },
    {
      "name": "Belize",
      "capital": "Belmopan",
      "flag": "./assets/flags/22.svg",
      "es": "Belice"
    },
    {
      "name": "Bermuda",
      "capital": "Hamilton",
      "flag": "./assets/flags/24.svg",
      "es": "Bermudas"
    },
    {
      "name": "Bolivia (Plurinational State of)",
      "capital": "Sucre",
      "flag": "./assets/flags/26.svg",
      "es": "Bolivia"
    },
    {
      "name": "Bosnia and Herzegovina",
      "capital": "Sarajevo",
      "flag": "./assets/flags/28.svg",
      "es": "Bosnia y Herzegovina"
    },
    {
      "name": "Brazil",
      "capital": "Brasília",
      "flag": "./assets/flags/30.svg",
      "es": "Brasil"
    },
    {
      "name": "Bulgaria",
      "capital": "Sofia",
      "flag": "./assets/flags/35.svg",
      "es": "Bulgaria"
    },
    {
      "name": "Burkina Faso",
      "capital": "Ouagadougou",
      "flag": "./assets/flags/36.svg",
      "es": "Burkina Faso"
    },
    {
      "name": "Cameroon",
      "capital": "Yaoundé",
      "flag": "./assets/flags/39.svg",
      "es": "Camerún"
    },
    {
      "name": "Canada",
      "capital": "Ottawa",
      "flag": "./assets/flags/40.svg",
      "es": "Canadá"
    },
    {
      "name": "Chile",
      "capital": "Santiago",
      "flag": "./assets/flags/45.svg",
      "es": "Chile"
    },
    {
      "name": "China",
      "capital": "Beijing",
      "flag": "./assets/flags/46.svg",
      "es": "China"
    },
    {
      "name": "Colombia",
      "capital": "Bogotá",
      "flag": "./assets/flags/49.svg",
      "es": "Colombia"
    },
    {
      "name": "Comoros",
      "capital": "Moroni",
      "flag": "./assets/flags/50.svg",
      "es": "Comoras"
    },
    {
      "name": "Congo",
      "capital": "Brazzaville",
      "flag": "./assets/flags/51.svg",
      "es": "Congo"
    },
    {
      "name": "Costa Rica",
      "capital": "San José",
      "flag": "./assets/flags/54.svg",
      "es": "Costa Rica"
    },
    {
      "name": "Croatia",
      "capital": "Zagreb",
      "flag": "./assets/flags/55.svg",
      "es": "Croacia"
    },
    {
      "name": "Cuba",
      "capital": "Havana",
      "flag": "./assets/flags/56.svg",
      "es": "Cuba"
    },
    {
      "name": "Cyprus",
      "capital": "Nicosia",
      "flag": "./assets/flags/58.svg",
      "es": "Chipre"
    },
    {
      "name": "Czech Republic",
      "capital": "Prague",
      "flag": "./assets/flags/59.svg",
      "es": "República Checa"
    },
    {
      "name": "Denmark",
      "capital": "Copenhagen",
      "flag": "./assets/flags/60.svg",
      "es": "Dinamarca"
    },
    {
      "name": "Dominican Republic",
      "capital": "Santo Domingo",
      "flag": "./assets/flags/63.svg",
      "es": "República Dominicana"
    },
    {
      "name": "Ecuador",
      "capital": "Quito",
      "flag": "./assets/flags/64.svg",
      "es": "Ecuador"
    },
    {
      "name": "Egypt",
      "capital": "Cairo",
      "flag": "./assets/flags/65.svg",
      "es": "Egipto"
    },
    {
      "name": "El Salvador",
      "capital": "San Salvador",
      "flag": "./assets/flags/66.svg",
      "es": "El Salvador"
    },
    {
      "name": "Finland",
      "capital": "Helsinki",
      "flag": "./assets/flags/74.svg",
      "es": "Finlandia"
    },
    {
      "name": "France",
      "capital": "Paris",
      "flag": "./assets/flags/75.svg",
      "es": "Francia"
    },
    {
      "name": "French Guiana",
      "capital": "Cayenne",
      "flag": "./assets/flags/76.svg",
      "es": "Guayana Francesa"
    },
    {
      "name": "Georgia",
      "capital": "Tbilisi",
      "flag": "./assets/flags/81.svg",
      "es": "Georgia"
    },
    {
      "name": "Germany",
      "capital": "Berlin",
      "flag": "./assets/flags/82.svg",
      "es": "Alemania"
    },
    {
      "name": "Ghana",
      "capital": "Accra",
      "flag": "./assets/flags/83.svg",
      "es": "Ghana"
    },
    {
      "name": "Greece",
      "capital": "Athens",
      "flag": "./assets/flags/85.svg",
      "es": "Grecia"
    },
    {
      "name": "Greenland",
      "capital": "Nuuk",
      "flag": "./assets/flags/86.svg",
      "es": "Groenlandia"
    },
    {
      "name": "Guatemala",
      "capital": "Guatemala City",
      "flag": "./assets/flags/90.svg",
      "es": "Guatemala"
    },
    {
      "name": "Haiti",
      "capital": "Port-au-Prince",
      "flag": "./assets/flags/95.svg",
      "es": "Haiti"
    },
    {
      "name": "Honduras",
      "capital": "Tegucigalpa",
      "flag": "./assets/flags/98.svg",
      "es": "Honduras"
    },
    {
      "name": "Hungary",
      "capital": "Budapest",
      "flag": "./assets/flags/99.svg",
      "es": "Hungría"
    },
    {
      "name": "Iceland",
      "capital": "Reykjavík",
      "flag": "./assets/flags/101.svg",
      "es": "Islandia"
    },
    {
      "name": "India",
      "capital": "New Delhi",
      "flag": "./assets/flags/102.svg",
      "es": "India"
    },
    {
      "name": "Indonesia",
      "capital": "Jakarta",
      "flag": "./assets/flags/103.svg",
      "es": "Indonesia"
    },
    {
      "name": "Ivory Coast",
      "capital": "Yamoussoukro",
      "flag": "./assets/flags/104.svg",
      "es": "Costa de Marfil"
    },
    {
      "name": "Iran (Islamic Republic of)",
      "capital": "Tehran",
      "flag": "./assets/flags/105.svg",
      "es": "Iran"
    },
    {
      "name": "Iraq",
      "capital": "Baghdad",
      "flag": "./assets/flags/106.svg",
      "es": "Irak"
    },
    {
      "name": "Ireland",
      "capital": "Dublin",
      "flag": "./assets/flags/107.svg",
      "es": "Irlanda"
    },
    {
      "name": "Israel",
      "capital": "Jerusalem",
      "flag": "./assets/flags/109.svg",
      "es": "Israel"
    },
    {
      "name": "Italy",
      "capital": "Rome",
      "flag": "./assets/flags/110.svg",
      "es": "Italia"
    },
    {
      "name": "Jamaica",
      "capital": "Kingston",
      "flag": "./assets/flags/111.svg",
      "es": "Jamaica"
    },
    {
      "name": "Japan",
      "capital": "Tokyo",
      "flag": "./assets/flags/112.svg",
      "es": "Japón"
    },
    {
      "name": "Kuwait",
      "capital": "Kuwait City",
      "flag": "./assets/flags/118.svg",
      "es": "Kuwait"
    },
    {
      "name": "Latvia",
      "capital": "Riga",
      "flag": "./assets/flags/121.svg",
      "es": "Letonia"
    },
    {
      "name": "Libya",
      "capital": "Tripoli",
      "flag": "./assets/flags/125.svg",
      "es": "Libia"
    },
    {
      "name": "North Macedonia",
      "capital": "Skopje",
      "flag": "./assets/flags/130.svg",
      "es": "Macedonia"
    },
    {
      "name": "Madagascar",
      "capital": "Antananarivo",
      "flag": "./assets/flags/131.svg",
      "es": "Madagascar"
    },
    {
      "name": "Malaysia",
      "capital": "Kuala Lumpur",
      "flag": "./assets/flags/133.svg",
      "es": "Malasia"
    },
    {
      "name": "Mali",
      "capital": "Bamako",
      "flag": "./assets/flags/135.svg",
      "es": "Mali"
    },
    {
      "name": "Malta",
      "capital": "Valletta",
      "flag": "./assets/flags/136.svg",
      "es": "Malta"
    },
    {
      "name": "Mexico",
      "capital": "Mexico City",
      "flag": "./assets/flags/142.svg",
      "es": "México"
    },
    {
      "name": "Mongolia",
      "capital": "Ulan Bator",
      "flag": "./assets/flags/146.svg",
      "es": "Mongolia"
    },
    {
      "name": "Montenegro",
      "capital": "Podgorica",
      "flag": "./assets/flags/147.svg",
      "es": "Montenegro"
    },
    {
      "name": "Morocco",
      "capital": "Rabat",
      "flag": "./assets/flags/149.svg",
      "es": "Marruecos"
    },
    {
      "name": "Mozambique",
      "capital": "Maputo",
      "flag": "./assets/flags/150.svg",
      "es": "Mozambique"
    },
    {
      "name": "Nepal",
      "capital": "Kathmandu",
      "flag": "./assets/flags/154.svg",
      "es": "Nepal"
    },
    {
      "name": "Netherlands",
      "capital": "Amsterdam",
      "flag": "./assets/flags/155.svg",
      "es": "Holanda (Países Bajos)"
    },
    {
      "name": "New Zealand",
      "capital": "Wellington",
      "flag": "./assets/flags/157.svg",
      "es": "Nueva Zelanda"
    },
    {
      "name": "Nicaragua",
      "capital": "Managua",
      "flag": "./assets/flags/158.svg",
      "es": "Nicaragua"
    },
    {
      "name": "Niger",
      "capital": "Niamey",
      "flag": "./assets/flags/159.svg",
      "es": "Níger"
    },
    {
      "name": "Nigeria",
      "capital": "Abuja",
      "flag": "./assets/flags/160.svg",
      "es": "Nigeria"
    },
    {
      "name": "Korea (Democratic People's Republic of)",
      "capital": "Pyongyang",
      "flag": "./assets/flags/163.svg",
      "es": "Corea del Norte"
    },
    {
      "name": "Northern Mariana Islands",
      "capital": "Saipan",
      "flag": "./assets/flags/164.svg",
      "es": "Islas Marianas del Norte"
    },
    {
      "name": "Norway",
      "capital": "Oslo",
      "flag": "./assets/flags/165.svg",
      "es": "Noruega"
    },
    {
      "name": "Oman",
      "capital": "Muscat",
      "flag": "./assets/flags/166.svg",
      "es": "Omán"
    },
    {
      "name": "Pakistan",
      "capital": "Islamabad",
      "flag": "./assets/flags/167.svg",
      "es": "Pakistán"
    },
    {
      "name": "Panama",
      "capital": "Panama City",
      "flag": "./assets/flags/170.svg",
      "es": "Panamá"
    },
    {
      "name": "Paraguay",
      "capital": "Asunción",
      "flag": "./assets/flags/172.svg",
      "es": "Paraguay"
    },
    {
      "name": "Peru",
      "capital": "Lima",
      "flag": "./assets/flags/173.svg",
      "es": "Perú"
    },
    {
      "name": "Philippines",
      "capital": "Manila",
      "flag": "./assets/flags/174.svg",
      "es": "Filipinas"
    },
    {
      "name": "Poland",
      "capital": "Warsaw",
      "flag": "./assets/flags/176.svg",
      "es": "Polonia"
    },
    {
      "name": "Portugal",
      "capital": "Lisbon",
      "flag": "./assets/flags/177.svg",
      "es": "Portugal"
    },
    {
      "name": "Puerto Rico",
      "capital": "San Juan",
      "flag": "./assets/flags/178.svg",
      "es": "Puerto Rico"
    },
    {
      "name": "Qatar",
      "capital": "Doha",
      "flag": "./assets/flags/179.svg",
      "es": "Catar"
    },
    {
      "name": "Romania",
      "capital": "Bucharest",
      "flag": "./assets/flags/182.svg",
      "es": "Rumania"
    },
    {
      "name": "Russian Federation",
      "capital": "Moscow",
      "flag": "./assets/flags/183.svg",
      "es": "Rusia"
    },
    {
      "name": "San Marino",
      "capital": "City of San Marino",
      "flag": "./assets/flags/193.svg",
      "es": "San Marino"
    },
    {
      "name": "Saudi Arabia",
      "capital": "Riyadh",
      "flag": "./assets/flags/195.svg",
      "es": "Arabia Saudí"
    },
    {
      "name": "Senegal",
      "capital": "Dakar",
      "flag": "./assets/flags/196.svg",
      "es": "Senegal"
    },
    {
      "name": "Serbia",
      "capital": "Belgrade",
      "flag": "./assets/flags/197.svg",
      "es": "Serbia"
    },
    {
      "name": "Singapore",
      "capital": "Singapore",
      "flag": "./assets/flags/200.svg",
      "es": "Singapur"
    },
    {
      "name": "Slovakia",
      "capital": "Bratislava",
      "flag": "./assets/flags/202.svg",
      "es": "República Eslovaca"
    },
    {
      "name": "Slovenia",
      "capital": "Ljubljana",
      "flag": "./assets/flags/203.svg",
      "es": "Eslovenia"
    },
    {
      "name": "South Africa",
      "capital": "Pretoria",
      "flag": "./assets/flags/206.svg",
      "es": "República de Sudáfrica"
    },
    {
      "name": "Korea (Republic of)",
      "capital": "Seoul",
      "flag": "./assets/flags/208.svg",
      "es": "Corea del Sur"
    },
    {
      "name": "Spain",
      "capital": "Madrid",
      "flag": "./assets/flags/209.svg",
      "es": "España"
    },
    {
      "name": "Sudan",
      "capital": "Khartoum",
      "flag": "./assets/flags/211.svg",
      "es": "Sudán"
    },
    {
      "name": "Sweden",
      "capital": "Stockholm",
      "flag": "./assets/flags/216.svg",
      "es": "Suecia"
    },
    {
      "name": "Switzerland",
      "capital": "Bern",
      "flag": "./assets/flags/217.svg",
      "es": "Suiza"
    },
    {
      "name": "Syrian Arab Republic",
      "capital": "Damascus",
      "flag": "./assets/flags/218.svg",
      "es": "Siria"
    },
    {
      "name": "Taiwan",
      "capital": "Taipei",
      "flag": "./assets/flags/219.svg",
      "es": "Taiwán"
    },
    {
      "name": "Thailand",
      "capital": "Bangkok",
      "flag": "./assets/flags/222.svg",
      "es": "Tailandia"
    },
    {
      "name": "Trinidad and Tobago",
      "capital": "Port of Spain",
      "flag": "./assets/flags/227.svg",
      "es": "Trinidad y Tobago"
    },
    {
      "name": "Tunisia",
      "capital": "Tunis",
      "flag": "./assets/flags/228.svg",
      "es": "Túnez"
    },
    {
      "name": "Turkey",
      "capital": "Ankara",
      "flag": "./assets/flags/229.svg",
      "es": "Turquía"
    },
    {
      "name": "Uganda",
      "capital": "Kampala",
      "flag": "./assets/flags/233.svg",
      "es": "Uganda"
    },
    {
      "name": "Ukraine",
      "capital": "Kyiv",
      "flag": "./assets/flags/234.svg",
      "es": "Ucrania"
    },
    {
      "name": "United Arab Emirates",
      "capital": "Abu Dhabi",
      "flag": "./assets/flags/235.svg",
      "es": "Emiratos Árabes Unidos"
    },
    {
      "name": "United Kingdom of Great Britain and Northern Ireland",
      "capital": "London",
      "flag": "./assets/flags/236.svg",
      "es": "Reino Unido"
    },
    {
      "name": "United States of America",
      "capital": "Washington, D.C.",
      "flag": "./assets/flags/237.svg",
      "es": "Estados Unidos"
    },
    {
      "name": "Uruguay",
      "capital": "Montevideo",
      "flag": "./assets/flags/238.svg",
      "es": "Uruguay"
    },
    {
      "name": "Uzbekistan",
      "capital": "Tashkent",
      "flag": "./assets/flags/239.svg",
      "es": "Uzbekistán"
    },
    {
      "name": "Venezuela (Bolivarian Republic of)",
      "capital": "Caracas",
      "flag": "./assets/flags/241.svg",
      "es": "Venezuela"
    },
    {
      "name": "Vietnam",
      "capital": "Hanoi",
      "flag": "./assets/flags/242.svg",
      "es": "Vietnam"
    },
    {
      "name": "Zimbabwe",
      "capital": "Harare",
      "flag": "./assets/flags/247.svg",
      "es": "Zimbabue"
    }
  ]
dificil = [
    {
      "name": "Afghanistan",
      "capital": "Kabul",
      "flag": "./assets/flags/0.svg",
      "es": "Afganistán"
    },
    {
      "name": "Åland Islands",
      "capital": "Mariehamn",
      "flag": "./assets/flags/1.svg",
      "es": "Alandia"
    },
    {
      "name": "Albania",
      "capital": "Tirana",
      "flag": "./assets/flags/2.svg",
      "es": "Albania"
    },
    {
      "name": "Algeria",
      "capital": "Algiers",
      "flag": "./assets/flags/3.svg",
      "es": "Argelia"
    },
    {
      "name": "American Samoa",
      "capital": "Pago Pago",
      "flag":  "./assets/flags/4.svg",
      "es": "Samoa Americana"
    },
    {
      "name": "Andorra",
      "capital": "Andorra la Vella",
      "flag":  "./assets/flags/5.svg",
      "es": "Andorra"
    },
    {
      "name": "Angola",
      "capital": "Luanda",
      "flag":  "./assets/flags/6.svg",
      "es": "Angola"
    },
    {
      "name": "Anguilla",
      "capital": "The Valley",
      "flag":  "./assets/flags/7.svg",
      "es": "Anguilla"
    },
    {
      "name": "Antarctica",
      "capital": "No posée",
      "flag": "./assets/flags/8.svg",
      "es": "Antártida"
    },
    {
      "name": "Antigua and Barbuda",
      "capital": "Saint John's",
      "flag": "./assets/flags/9.svg",
      "es": "Antigua y Barbuda"
    },
    {
      "name": "Argentina",
      "capital": "Buenos Aires",
      "flag":  "./assets/flags/10.svg",
      "es": "Argentina"
    },
    {
      "name": "Armenia",
      "capital": "Yerevan",
      "flag": "./assets/flags/11.svg",
      "es": "Armenia"
    },
    {
      "name": "Aruba",
      "capital": "Oranjestad",
      "flag": "./assets/flags/12.svg",
      "es": "Aruba"
    },
    {
      "name": "Australia",
      "capital": "Canberra",
      "flag": "./assets/flags/13.svg",
      "es": "Australia"
    },
    {
      "name": "Austria",
      "capital": "Vienna",
      "flag": "./assets/flags/14.svg",
      "es": "Austria"
    },
    {
      "name": "Azerbaijan",
      "capital": "Baku",
      "flag": "./assets/flags/15.svg",
      "es": "Azerbaiyán"
    },
    {
      "name": "Bahamas",
      "capital": "Nassau",
      "flag": "./assets/flags/16.svg",
      "es": "Bahamas"
    },
    {
      "name": "Bahrain",
      "capital": "Manama",
      "flag": "./assets/flags/17.svg",
      "es": "Bahrein"
    },
    {
      "name": "Bangladesh",
      "capital": "Dhaka",
      "flag": "./assets/flags/18.svg",
      "es": "Bangladesh"
    },
    {
      "name": "Barbados",
      "capital": "Bridgetown",
      "flag": "./assets/flags/19.svg",
      "es": "Barbados"
    },
    {
      "name": "Belarus",
      "capital": "Minsk",
      "flag": "./assets/flags/20.svg",
      "es": "Bielorrusia"
    },
    {
      "name": "Belgium",
      "capital": "Brussels",
      "flag": "./assets/flags/21.svg",
      "es": "Bélgica"
    },
    {
      "name": "Belize",
      "capital": "Belmopan",
      "flag": "./assets/flags/22.svg",
      "es": "Belice"
    },
    {
      "name": "Benin",
      "capital": "Porto-Novo",
      "flag": "./assets/flags/23.svg",
      "es": "Benín"
    },
    {
      "name": "Bermuda",
      "capital": "Hamilton",
      "flag": "./assets/flags/24.svg",
      "es": "Bermudas"
    },
    {
      "name": "Bhutan",
      "capital": "Thimphu",
      "flag": "./assets/flags/25.svg",
      "es": "Bután"
    },
    {
      "name": "Bolivia (Plurinational State of)",
      "capital": "Sucre",
      "flag": "./assets/flags/26.svg",
      "es": "Bolivia"
    },
    {
      "name": "Bonaire, Sint Eustatius and Saba",
      "capital": "Kralendijk",
      "flag": "./assets/flags/27.svg",
      "es": "Bonaire, Sint Eustatius and Saba"
    },
    {
      "name": "Bosnia and Herzegovina",
      "capital": "Sarajevo",
      "flag": "./assets/flags/28.svg",
      "es": "Bosnia y Herzegovina"
    },
    {
      "name": "Botswana",
      "capital": "Gaborone",
      "flag": "./assets/flags/29.svg",
      "es": "Botswana"
    },
    {
      "name": "Brazil",
      "capital": "Brasília",
      "flag": "./assets/flags/30.svg",
      "es": "Brasil"
    },
    {
      "name": "British Indian Ocean Territory",
      "capital": "Diego Garcia",
      "flag": "./assets/flags/31.svg",
      "es": "Territorio Británico del Océano Índico"
    },
    {
      "name": "Virgin Islands (British)",
      "capital": "Road Town",
      "flag": "./assets/flags/32.svg",
      "es": "Islas Vírgenes del Reino Unido"
    },
    {
      "name": "Virgin Islands (U.S.)",
      "capital": "Charlotte Amalie",
      "flag": "./assets/flags/33.svg",
      "es": "Islas Vírgenes de los Estados Unidos"
    },
    {
      "name": "Brunei Darussalam",
      "capital": "Bandar Seri Begawan",
      "flag": "./assets/flags/34.svg",
      "es": "Brunei"
    },
    {
      "name": "Bulgaria",
      "capital": "Sofia",
      "flag": "./assets/flags/35.svg",
      "es": "Bulgaria"
    },
    {
      "name": "Burkina Faso",
      "capital": "Ouagadougou",
      "flag": "./assets/flags/36.svg",
      "es": "Burkina Faso"
    },
    {
      "name": "Burundi",
      "capital": "Gitega",
      "flag": "./assets/flags/37.svg",
      "es": "Burundi"
    },
    {
      "name": "Cambodia",
      "capital": "Phnom Penh",
      "flag": "./assets/flags/38.svg",
      "es": "Camboya"
    },
    {
      "name": "Cameroon",
      "capital": "Yaoundé",
      "flag": "./assets/flags/39.svg",
      "es": "Camerún"
    },
    {
      "name": "Canada",
      "capital": "Ottawa",
      "flag": "./assets/flags/40.svg",
      "es": "Canadá"
    },
    {
      "name": "Cabo Verde",
      "capital": "Praia",
      "flag": "./assets/flags/41.svg",
      "es": "Cabo Verde"
    },
    {
      "name": "Cayman Islands",
      "capital": "George Town",
      "flag": "./assets/flags/42.svg",
      "es": "Islas Caimán"
    },
    {
      "name": "Central African Republic",
      "capital": "Bangui",
      "flag": "./assets/flags/43.svg",
      "es": "República Centroafricana"
    },
    {
      "name": "Chad",
      "capital": "N'Djamena",
      "flag": "./assets/flags/44.svg",
      "es": "Chad"
    },
    {
      "name": "Chile",
      "capital": "Santiago",
      "flag": "./assets/flags/45.svg",
      "es": "Chile"
    },
    {
      "name": "China",
      "capital": "Beijing",
      "flag": "./assets/flags/46.svg",
      "es": "China"
    },
    {
      "name": "Christmas Island",
      "capital": "Flying Fish Cove",
      "flag": "./assets/flags/47.svg",
      "es": "Isla de Navidad"
    },
    {
      "name": "Cocos (Keeling) Islands",
      "capital": "West Island",
      "flag": "./assets/flags/48.svg",
      "es": "Islas Cocos o Islas Keeling"
    },
    {
      "name": "Colombia",
      "capital": "Bogotá",
      "flag": "./assets/flags/49.svg",
      "es": "Colombia"
    },
    {
      "name": "Comoros",
      "capital": "Moroni",
      "flag": "./assets/flags/50.svg",
      "es": "Comoras"
    },
    {
      "name": "Congo",
      "capital": "Brazzaville",
      "flag": "./assets/flags/51.svg",
      "es": "Congo"
    },
    {
      "name": "Congo (Democratic Republic of the)",
      "capital": "Kinshasa",
      "flag": "./assets/flags/52.svg",
      "es": "Congo (Rep. Dem.)"
    },
    {
      "name": "Cook Islands",
      "capital": "Avarua",
      "flag": "./assets/flags/53.svg",
      "es": "Islas Cook"
    },
    {
      "name": "Costa Rica",
      "capital": "San José",
      "flag": "./assets/flags/54.svg",
      "es": "Costa Rica"
    },
    {
      "name": "Croatia",
      "capital": "Zagreb",
      "flag": "./assets/flags/55.svg",
      "es": "Croacia"
    },
    {
      "name": "Cuba",
      "capital": "Havana",
      "flag": "./assets/flags/56.svg",
      "es": "Cuba"
    },
    {
      "name": "Curaçao",
      "capital": "Willemstad",
      "flag": "./assets/flags/57.svg",
      "es": "Curaçao"
    },
    {
      "name": "Cyprus",
      "capital": "Nicosia",
      "flag": "./assets/flags/58.svg",
      "es": "Chipre"
    },
    {
      "name": "Czech Republic",
      "capital": "Prague",
      "flag": "./assets/flags/59.svg",
      "es": "República Checa"
    },
    {
      "name": "Denmark",
      "capital": "Copenhagen",
      "flag": "./assets/flags/60.svg",
      "es": "Dinamarca"
    },
    {
      "name": "Djibouti",
      "capital": "Djibouti",
      "flag": "./assets/flags/61.svg",
      "es": "Yibuti"
    },
    {
      "name": "Dominica",
      "capital": "Roseau",
      "flag": "./assets/flags/62.svg",
      "es": "Dominica"
    },
    {
      "name": "Dominican Republic",
      "capital": "Santo Domingo",
      "flag": "./assets/flags/63.svg",
      "es": "República Dominicana"
    },
    {
      "name": "Ecuador",
      "capital": "Quito",
      "flag": "./assets/flags/64.svg",
      "es": "Ecuador"
    },
    {
      "name": "Egypt",
      "capital": "Cairo",
      "flag": "./assets/flags/65.svg",
      "es": "Egipto"
    },
    {
      "name": "El Salvador",
      "capital": "San Salvador",
      "flag": "./assets/flags/66.svg",
      "es": "El Salvador"
    },
    {
      "name": "Equatorial Guinea",
      "capital": "Malabo",
      "flag": "./assets/flags/67.svg",
      "es": "Guinea Ecuatorial"
    },
    {
      "name": "Eritrea",
      "capital": "Asmara",
      "flag": "./assets/flags/68.svg",
      "es": "Eritrea"
    },
    {
      "name": "Estonia",
      "capital": "Tallinn",
      "flag": "./assets/flags/69.svg",
      "es": "Estonia"
    },
    {
      "name": "Ethiopia",
      "capital": "Addis Ababa",
      "flag": "./assets/flags/70.svg",
      "es": "Etiopía"
    },
    {
      "name": "Falkland Islands (Malvinas)",
      "capital": "Stanley",
      "flag": "./assets/flags/71.svg",
      "es": "Islas Malvinas"
    },
    {
      "name": "Faroe Islands",
      "capital": "Tórshavn",
      "flag": "./assets/flags/72.svg",
      "es": "Islas Faroe"
    },
    {
      "name": "Fiji",
      "capital": "Suva",
      "flag": "./assets/flags/73.svg",
      "es": "Fiyi"
    },
    {
      "name": "Finland",
      "capital": "Helsinki",
      "flag": "./assets/flags/74.svg",
      "es": "Finlandia"
    },
    {
      "name": "France",
      "capital": "Paris",
      "flag": "./assets/flags/75.svg",
      "es": "Francia"
    },
    {
      "name": "French Guiana",
      "capital": "Cayenne",
      "flag": "./assets/flags/76.svg",
      "es": "Guayana Francesa"
    },
    {
      "name": "French Polynesia",
      "capital": "Papeetē",
      "flag": "./assets/flags/77.svg",
      "es": "Polinesia Francesa"
    },
    {
      "name": "French Southern Territories",
      "capital": "Port-aux-Français",
      "flag": "./assets/flags/78.svg",
      "es": "Tierras Australes y Antárticas Francesas"
    },
    {
      "name": "Gabon",
      "capital": "Libreville",
      "flag": "./assets/flags/79.svg",
      "es": "Gabón"
    },
    {
      "name": "Gambia",
      "capital": "Banjul",
      "flag": "./assets/flags/80.svg",
      "es": "Gambia"
    },
    {
      "name": "Georgia",
      "capital": "Tbilisi",
      "flag": "./assets/flags/81.svg",
      "es": "Georgia"
    },
    {
      "name": "Germany",
      "capital": "Berlin",
      "flag": "./assets/flags/82.svg",
      "es": "Alemania"
    },
    {
      "name": "Ghana",
      "capital": "Accra",
      "flag": "./assets/flags/83.svg",
      "es": "Ghana"
    },
    {
      "name": "Gibraltar",
      "capital": "Gibraltar",
      "flag": "./assets/flags/84.svg",
      "es": "Gibraltar"
    },
    {
      "name": "Greece",
      "capital": "Athens",
      "flag": "./assets/flags/85.svg",
      "es": "Grecia"
    },
    {
      "name": "Greenland",
      "capital": "Nuuk",
      "flag": "./assets/flags/86.svg",
      "es": "Groenlandia"
    },
    {
      "name": "Grenada",
      "capital": "St. George's",
      "flag": "./assets/flags/87.svg",
      "es": "Grenada"
    },
    {
      "name": "Guadeloupe",
      "capital": "Basse-Terre",
      "flag": "./assets/flags/88.svg",
      "es": "Guadalupe"
    },
    {
      "name": "Guam",
      "capital": "Hagåtña",
      "flag": "./assets/flags/89.svg",
      "es": "Guam"
    },
    {
      "name": "Guatemala",
      "capital": "Guatemala City",
      "flag": "./assets/flags/90.svg",
      "es": "Guatemala"
    },
    {
      "name": "Guernsey",
      "capital": "St. Peter Port",
      "flag": "./assets/flags/91.svg",
      "es": "Guernsey"
    },
    {
      "name": "Guinea",
      "capital": "Conakry",
      "flag": "./assets/flags/92.svg",
      "es": "Guinea"
    },
    {
      "name": "Guinea-Bissau",
      "capital": "Bissau",
      "flag": "./assets/flags/93.svg",
      "es": "Guinea-Bisáu"
    },
    {
      "name": "Guyana",
      "capital": "Georgetown",
      "flag": "./assets/flags/94.svg",
      "es": "Guyana"
    },
    {
      "name": "Haiti",
      "capital": "Port-au-Prince",
      "flag": "./assets/flags/95.svg",
      "es": "Haiti"
    },
    {
      "name": "Heard Island and McDonald Islands",
      "flag": "./assets/flags/96.svg",
      "es": "Islas Heard y McDonald"
    },
    {
      "name": "Vatican City",
      "capital": "Vatican City",
      "flag": "./assets/flags/97.svg",
      "es": "Santa Sede"
    },
    {
      "name": "Honduras",
      "capital": "Tegucigalpa",
      "flag": "./assets/flags/98.svg",
      "es": "Honduras"
    },
    {
      "name": "Hungary",
      "capital": "Budapest",
      "flag": "./assets/flags/99.svg",
      "es": "Hungría"
    },
    {
      "name": "Hong Kong",
      "capital": "City of Victoria",
      "flag": "./assets/flags/100.svg",
      "es": "Hong Kong"
    },
    {
      "name": "Iceland",
      "capital": "Reykjavík",
      "flag": "./assets/flags/101.svg",
      "es": "Islandia"
    },
    {
      "name": "India",
      "capital": "New Delhi",
      "flag": "./assets/flags/102.svg",
      "es": "India"
    },
    {
      "name": "Indonesia",
      "capital": "Jakarta",
      "flag": "./assets/flags/103.svg",
      "es": "Indonesia"
    },
    {
      "name": "Ivory Coast",
      "capital": "Yamoussoukro",
      "flag": "./assets/flags/104.svg",
      "es": "Costa de Marfil"
    },
    {
      "name": "Iran (Islamic Republic of)",
      "capital": "Tehran",
      "flag": "./assets/flags/105.svg",
      "es": "Iran"
    },
    {
      "name": "Iraq",
      "capital": "Baghdad",
      "flag": "./assets/flags/106.svg",
      "es": "Irak"
    },
    {
      "name": "Ireland",
      "capital": "Dublin",
      "flag": "./assets/flags/107.svg",
      "es": "Irlanda"
    },
    {
      "name": "Isle of Man",
      "capital": "Douglas",
      "flag": "./assets/flags/108.svg",
      "es": "Isla de Man"
    },
    {
      "name": "Israel",
      "capital": "Jerusalem",
      "flag": "./assets/flags/109.svg",
      "es": "Israel"
    },
    {
      "name": "Italy",
      "capital": "Rome",
      "flag": "./assets/flags/110.svg",
      "es": "Italia"
    },
    {
      "name": "Jamaica",
      "capital": "Kingston",
      "flag": "./assets/flags/111.svg",
      "es": "Jamaica"
    },
    {
      "name": "Japan",
      "capital": "Tokyo",
      "flag": "./assets/flags/112.svg",
      "es": "Japón"
    },
    {
      "name": "Jersey",
      "capital": "Saint Helier",
      "flag": "./assets/flags/113.svg",
      "es": "Jersey"
    },
    {
      "name": "Jordan",
      "capital": "Amman",
      "flag": "./assets/flags/114.svg",
      "es": "Jordania"
    },
    {
      "name": "Kazakhstan",
      "capital": "Nur-Sultan",
      "flag": "./assets/flags/115.svg",
      "es": "Kazajistán"
    },
    {
      "name": "Kenya",
      "capital": "Nairobi",
      "flag": "./assets/flags/116.svg",
      "es": "Kenia"
    },
    {
      "name": "Kiribati",
      "capital": "South Tarawa",
      "flag": "./assets/flags/117.svg",
      "es": "Kiribati"
    },
    {
      "name": "Kuwait",
      "capital": "Kuwait City",
      "flag": "./assets/flags/118.svg",
      "es": "Kuwait"
    },
    {
      "name": "Kyrgyzstan",
      "capital": "Bishkek",
      "flag": "./assets/flags/119.svg",
      "es": "Kirguizistán"
    },
    {
      "name": "Lao People's Democratic Republic",
      "capital": "Vientiane",
      "flag": "./assets/flags/120.svg",
      "es": "Laos"
    },
    {
      "name": "Latvia",
      "capital": "Riga",
      "flag": "./assets/flags/121.svg",
      "es": "Letonia"
    },
    {
      "name": "Lebanon",
      "capital": "Beirut",
      "flag": "./assets/flags/122.svg",
      "es": "Líbano"
    },
    {
      "name": "Lesotho",
      "capital": "Maseru",
      "flag": "./assets/flags/123.svg",
      "es": "Lesotho"
    },
    {
      "name": "Liberia",
      "capital": "Monrovia",
      "flag": "./assets/flags/124.svg",
      "es": "Liberia"
    },
    {
      "name": "Libya",
      "capital": "Tripoli",
      "flag": "./assets/flags/125.svg",
      "es": "Libia"
    },
    {
      "name": "Liechtenstein",
      "capital": "Vaduz",
      "flag": "./assets/flags/126.svg",
      "es": "Liechtenstein"
    },
    {
      "name": "Lithuania",
      "capital": "Vilnius",
      "flag": "./assets/flags/127.svg",
      "es": "Lituania"
    },
    {
      "name": "Luxembourg",
      "capital": "Luxembourg",
      "flag": "./assets/flags/128.svg",
      "es": "Luxemburgo"
    },
    {
      "name": "Macao",
      "flag": "./assets/flags/129.svg",
      "es": "Macao"
    },
    {
      "name": "North Macedonia",
      "capital": "Skopje",
      "flag": "./assets/flags/130.svg",
      "es": "Macedonia"
    },
    {
      "name": "Madagascar",
      "capital": "Antananarivo",
      "flag": "./assets/flags/131.svg",
      "es": "Madagascar"
    },
    {
      "name": "Malawi",
      "capital": "Lilongwe",
      "flag": "./assets/flags/132.svg",
      "es": "Malawi"
    },
    {
      "name": "Malaysia",
      "capital": "Kuala Lumpur",
      "flag": "./assets/flags/133.svg",
      "es": "Malasia"
    },
    {
      "name": "Maldives",
      "capital": "Malé",
      "flag": "./assets/flags/134.svg",
      "es": "Maldivas"
    },
    {
      "name": "Mali",
      "capital": "Bamako",
      "flag": "./assets/flags/135.svg",
      "es": "Mali"
    },
    {
      "name": "Malta",
      "capital": "Valletta",
      "flag": "./assets/flags/136.svg",
      "es": "Malta"
    },
    {
      "name": "Marshall Islands",
      "capital": "Majuro",
      "flag": "./assets/flags/137.svg",
      "es": "Islas Marshall"
    },
    {
      "name": "Martinique",
      "capital": "Fort-de-France",
      "flag": "./assets/flags/138.svg",
      "es": "Martinica"
    },
    {
      "name": "Mauritania",
      "capital": "Nouakchott",
      "flag": "./assets/flags/139.svg",
      "es": "Mauritania"
    },
    {
      "name": "Mauritius",
      "capital": "Port Louis",
      "flag": "./assets/flags/140.svg",
      "es": "Mauricio"
    },
    {
      "name": "Mayotte",
      "capital": "Mamoudzou",
      "flag": "./assets/flags/141.svg",
      "es": "Mayotte"
    },
    {
      "name": "Mexico",
      "capital": "Mexico City",
      "flag": "./assets/flags/142.svg",
      "es": "México"
    },
    {
      "name": "Micronesia (Federated States of)",
      "capital": "Palikir",
      "flag": "./assets/flags/143.svg",
      "es": "Micronesia"
    },
    {
      "name": "Moldova (Republic of)",
      "capital": "Chișinău",
      "flag": "./assets/flags/144.svg",
      "es": "Moldavia"
    },
    {
      "name": "Monaco",
      "capital": "Monaco",
      "flag": "./assets/flags/145.svg",
      "es": "Mónaco"
    },
    {
      "name": "Mongolia",
      "capital": "Ulan Bator",
      "flag": "./assets/flags/146.svg",
      "es": "Mongolia"
    },
    {
      "name": "Montenegro",
      "capital": "Podgorica",
      "flag": "./assets/flags/147.svg",
      "es": "Montenegro"
    },
    {
      "name": "Montserrat",
      "capital": "Plymouth",
      "flag": "./assets/flags/148.svg",
      "es": "Montserrat"
    },
    {
      "name": "Morocco",
      "capital": "Rabat",
      "flag": "./assets/flags/149.svg",
      "es": "Marruecos"
    },
    {
      "name": "Mozambique",
      "capital": "Maputo",
      "flag": "./assets/flags/150.svg",
      "es": "Mozambique"
    },
    {
      "name": "Myanmar",
      "capital": "Naypyidaw",
      "flag": "./assets/flags/151.svg",
      "es": "Myanmar"
    },
    {
      "name": "Namibia",
      "capital": "Windhoek",
      "flag": "./assets/flags/152.svg",
      "es": "Namibia"
    },
    {
      "name": "Nauru",
      "capital": "Yaren",
      "flag": "./assets/flags/153.svg",
      "es": "Nauru"
    },
    {
      "name": "Nepal",
      "capital": "Kathmandu",
      "flag": "./assets/flags/154.svg",
      "es": "Nepal"
    },
    {
      "name": "Netherlands",
      "capital": "Amsterdam",
      "flag": "./assets/flags/155.svg",
      "es": "Holanda (Países Bajos)"
    },
    {
      "name": "New Caledonia",
      "capital": "Nouméa",
      "flag": "./assets/flags/156.svg",
      "es": "Nueva Caledonia"
    },
    {
      "name": "New Zealand",
      "capital": "Wellington",
      "flag": "./assets/flags/157.svg",
      "es": "Nueva Zelanda"
    },
    {
      "name": "Nicaragua",
      "capital": "Managua",
      "flag": "./assets/flags/158.svg",
      "es": "Nicaragua"
    },
    {
      "name": "Niger",
      "capital": "Niamey",
      "flag": "./assets/flags/159.svg",
      "es": "Níger"
    },
    {
      "name": "Nigeria",
      "capital": "Abuja",
      "flag": "./assets/flags/160.svg",
      "es": "Nigeria"
    },
    {
      "name": "Niue",
      "capital": "Alofi",
      "flag": "./assets/flags/161.svg",
      "es": "Niue"
    },
    {
      "name": "Norfolk Island",
      "capital": "Kingston",
      "flag": "./assets/flags/162.svg",
      "es": "Isla de Norfolk"
    },
    {
      "name": "Korea (Democratic People's Republic of)",
      "capital": "Pyongyang",
      "flag": "./assets/flags/163.svg",
      "es": "Corea del Norte"
    },
    {
      "name": "Northern Mariana Islands",
      "capital": "Saipan",
      "flag": "./assets/flags/164.svg",
      "es": "Islas Marianas del Norte"
    },
    {
      "name": "Norway",
      "capital": "Oslo",
      "flag": "./assets/flags/165.svg",
      "es": "Noruega"
    },
    {
      "name": "Oman",
      "capital": "Muscat",
      "flag": "./assets/flags/166.svg",
      "es": "Omán"
    },
    {
      "name": "Pakistan",
      "capital": "Islamabad",
      "flag": "./assets/flags/167.svg",
      "es": "Pakistán"
    },
    {
      "name": "Palau",
      "capital": "Ngerulmud",
      "flag": "./assets/flags/168.svg",
      "es": "Palau"
    },
    {
      "name": "Palestine, State of",
      "capital": "Ramallah",
      "flag": "./assets/flags/169.svg",
      "es": "Palestina"
    },
    {
      "name": "Panama",
      "capital": "Panama City",
      "flag": "./assets/flags/170.svg",
      "es": "Panamá"
    },
    {
      "name": "Papua New Guinea",
      "capital": "Port Moresby",
      "flag": "./assets/flags/171.svg",
      "es": "Papúa Nueva Guinea"
    },
    {
      "name": "Paraguay",
      "capital": "Asunción",
      "flag": "./assets/flags/172.svg",
      "es": "Paraguay"
    },
    {
      "name": "Peru",
      "capital": "Lima",
      "flag": "./assets/flags/173.svg",
      "es": "Perú"
    },
    {
      "name": "Philippines",
      "capital": "Manila",
      "flag": "./assets/flags/174.svg",
      "es": "Filipinas"
    },
    {
      "name": "Pitcairn",
      "capital": "Adamstown",
      "flag": "./assets/flags/175.svg",
      "es": "Islas Pitcairn"
    },
    {
      "name": "Poland",
      "capital": "Warsaw",
      "flag": "./assets/flags/176.svg",
      "es": "Polonia"
    },
    {
      "name": "Portugal",
      "capital": "Lisbon",
      "flag": "./assets/flags/177.svg",
      "es": "Portugal"
    },
    {
      "name": "Puerto Rico",
      "capital": "San Juan",
      "flag": "./assets/flags/178.svg",
      "es": "Puerto Rico"
    },
    {
      "name": "Qatar",
      "capital": "Doha",
      "flag": "./assets/flags/179.svg",
      "es": "Catar"
    },
    {
      "name": "Republic of Kosovo",
      "capital": "Pristina",
      "flag": "./assets/flags/180.svg",
      "es": "Kosovo"
    },
    {
      "name": "Réunion",
      "capital": "Saint-Denis",
      "flag": "./assets/flags/181.svg",
      "es": "Reunión"
    },
    {
      "name": "Romania",
      "capital": "Bucharest",
      "flag": "./assets/flags/182.svg",
      "es": "Rumania"
    },
    {
      "name": "Russian Federation",
      "capital": "Moscow",
      "flag": "./assets/flags/183.svg",
      "es": "Rusia"
    },
    {
      "name": "Rwanda",
      "capital": "Kigali",
      "flag": "./assets/flags/184.svg",
      "es": "Ruanda"
    },
    {
      "name": "Saint Barthélemy",
      "capital": "Gustavia",
      "flag": "./assets/flags/185.svg",
      "es": "San Bartolomé"
    },
    {
      "name": "Saint Helena, Ascension and Tristan da Cunha",
      "capital": "Jamestown",
      "flag": "./assets/flags/186.svg",
      "es": "Santa Helena"
    },
    {
      "name": "Saint Kitts and Nevis",
      "capital": "Basseterre",
      "flag": "./assets/flags/187.svg",
      "es": "San Cristóbal y Nieves"
    },
    {
      "name": "Saint Lucia",
      "capital": "Castries",
      "flag": "./assets/flags/188.svg",
      "es": "Santa Lucía"
    },
    {
      "name": "Saint Martin (French part)",
      "capital": "Marigot",
      "flag": "./assets/flags/189.svg",
      "es": "Saint Martin"
    },
    {
      "name": "Saint Pierre and Miquelon",
      "capital": "Saint-Pierre",
      "flag": "./assets/flags/190.svg",
      "es": "San Pedro y Miquelón"
    },
    {
      "name": "Saint Vincent and the Grenadines",
      "capital": "Kingstown",
      "flag": "./assets/flags/191.svg",
      "es": "San Vicente y Granadinas"
    },
    {
      "name": "Samoa",
      "capital": "Apia",
      "flag": "./assets/flags/192.svg",
      "es": "Samoa"
    },
    {
      "name": "San Marino",
      "capital": "City of San Marino",
      "flag": "./assets/flags/193.svg",
      "es": "San Marino"
    },
    {
      "name": "Sao Tome and Principe",
      "capital": "São Tomé",
      "flag": "./assets/flags/194.svg",
      "es": "Santo Tomé y Príncipe"
    },
    {
      "name": "Saudi Arabia",
      "capital": "Riyadh",
      "flag": "./assets/flags/195.svg",
      "es": "Arabia Saudí"
    },
    {
      "name": "Senegal",
      "capital": "Dakar",
      "flag": "./assets/flags/196.svg",
      "es": "Senegal"
    },
    {
      "name": "Serbia",
      "capital": "Belgrade",
      "flag": "./assets/flags/197.svg",
      "es": "Serbia"
    },
    {
      "name": "Seychelles",
      "capital": "Victoria",
      "flag": "./assets/flags/198.svg",
      "es": "Seychelles"
    },
    {
      "name": "Sierra Leone",
      "capital": "Freetown",
      "flag": "./assets/flags/199.svg",
      "es": "Sierra Leone"
    },
    {
      "name": "Singapore",
      "capital": "Singapore",
      "flag": "./assets/flags/200.svg",
      "es": "Singapur"
    },
    {
      "name": "Sint Maarten (Dutch part)",
      "capital": "Philipsburg",
      "flag": "./assets/flags/201.svg",
      "es": "Sint Maarten (Dutch part)"
    },
    {
      "name": "Slovakia",
      "capital": "Bratislava",
      "flag": "./assets/flags/202.svg",
      "es": "República Eslovaca"
    },
    {
      "name": "Slovenia",
      "capital": "Ljubljana",
      "flag": "./assets/flags/203.svg",
      "es": "Eslovenia"
    },
    {
      "name": "Solomon Islands",
      "capital": "Honiara",
      "flag": "./assets/flags/204.svg",
      "es": "Islas Salomón"
    },
    {
      "name": "Somalia",
      "capital": "Mogadishu",
      "flag": "./assets/flags/205.svg",
      "es": "Somalia"
    },
    {
      "name": "South Africa",
      "capital": "Pretoria",
      "flag": "./assets/flags/206.svg",
      "es": "República de Sudáfrica"
    },
    {
      "name": "South Georgia and the South Sandwich Islands",
      "capital": "King Edward Point",
      "flag": "./assets/flags/207.svg",
      "es": "Islas Georgias del Sur y Sandwich del Sur"
    },
    {
      "name": "Korea (Republic of)",
      "capital": "Seoul",
      "flag": "./assets/flags/208.svg",
      "es": "Corea del Sur"
    },
    {
      "name": "Spain",
      "capital": "Madrid",
      "flag": "./assets/flags/209.svg",
      "es": "España"
    },
    {
      "name": "Sri Lanka",
      "capital": "Sri Jayawardenepura Kotte",
      "flag": "./assets/flags/210.svg",
      "es": "Sri Lanka"
    },
    {
      "name": "Sudan",
      "capital": "Khartoum",
      "flag": "./assets/flags/211.svg",
      "es": "Sudán"
    },
    {
      "name": "South Sudan",
      "capital": "Juba",
      "flag": "./assets/flags/212.svg",
      "es": "Sudán del Sur"
    },
    {
      "name": "Suriname",
      "capital": "Paramaribo",
      "flag": "./assets/flags/213.svg",
      "es": "Surinam"
    },
    {
      "name": "Svalbard and Jan Mayen",
      "capital": "Longyearbyen",
      "flag": "./assets/flags/214.svg",
      "es": "Islas Svalbard y Jan Mayen"
    },
    {
      "name": "Swaziland",
      "capital": "Mbabane",
      "flag": "./assets/flags/215.svg",
      "es": "Suazilandia"
    },
    {
      "name": "Sweden",
      "capital": "Stockholm",
      "flag": "./assets/flags/216.svg",
      "es": "Suecia"
    },
    {
      "name": "Switzerland",
      "capital": "Bern",
      "flag": "./assets/flags/217.svg",
      "es": "Suiza"
    },
    {
      "name": "Syrian Arab Republic",
      "capital": "Damascus",
      "flag": "./assets/flags/218.svg",
      "es": "Siria"
    },
    {
      "name": "Taiwan",
      "capital": "Taipei",
      "flag": "./assets/flags/219.svg",
      "es": "Taiwán"
    },
    {
      "name": "Tajikistan",
      "capital": "Dushanbe",
      "flag": "./assets/flags/220.svg",
      "es": "Tayikistán"
    },
    {
      "name": "Tanzania, United Republic of",
      "capital": "Dodoma",
      "flag": "./assets/flags/221.svg",
      "es": "Tanzania"
    },
    {
      "name": "Thailand",
      "capital": "Bangkok",
      "flag": "./assets/flags/222.svg",
      "es": "Tailandia"
    },
    {
      "name": "Timor-Leste",
      "capital": "Dili",
      "flag": "./assets/flags/223.svg",
      "es": "Timor Oriental"
    },
    {
      "name": "Togo",
      "capital": "Lomé",
      "flag": "./assets/flags/224.svg",
      "es": "Togo"
    },
    {
      "name": "Tokelau",
      "capital": "Fakaofo",
      "flag": "./assets/flags/225.svg",
      "es": "Islas Tokelau"
    },
    {
      "name": "Tonga",
      "capital": "Nuku'alofa",
      "flag": "./assets/flags/226.svg",
      "es": "Tonga"
    },
    {
      "name": "Trinidad and Tobago",
      "capital": "Port of Spain",
      "flag": "./assets/flags/227.svg",
      "es": "Trinidad y Tobago"
    },
    {
      "name": "Tunisia",
      "capital": "Tunis",
      "flag": "./assets/flags/228.svg",
      "es": "Túnez"
    },
    {
      "name": "Turkey",
      "capital": "Ankara",
      "flag": "./assets/flags/229.svg",
      "es": "Turquía"
    },
    {
      "name": "Turkmenistan",
      "capital": "Ashgabat",
      "flag": "./assets/flags/230.svg",
      "es": "Turkmenistán"
    },
    {
      "name": "Turks and Caicos Islands",
      "capital": "Cockburn Town",
      "flag": "./assets/flags/231.svg",
      "es": "Islas Turks y Caicos"
    },
    {
      "name": "Tuvalu",
      "capital": "Funafuti",
      "flag": "./assets/flags/232.svg",
      "es": "Tuvalu"
    },
    {
      "name": "Uganda",
      "capital": "Kampala",
      "flag": "./assets/flags/233.svg",
      "es": "Uganda"
    },
    {
      "name": "Ukraine",
      "capital": "Kyiv",
      "flag": "./assets/flags/234.svg",
      "es": "Ucrania"
    },
    {
      "name": "United Arab Emirates",
      "capital": "Abu Dhabi",
      "flag": "./assets/flags/235.svg",
      "es": "Emiratos Árabes Unidos"
    },
    {
      "name": "United Kingdom of Great Britain and Northern Ireland",
      "capital": "London",
      "flag": "./assets/flags/236.svg",
      "es": "Reino Unido"
    },
    {
      "name": "United States of America",
      "capital": "Washington, D.C.",
      "flag": "./assets/flags/237.svg",
      "es": "Estados Unidos"
    },
    {
      "name": "Uruguay",
      "capital": "Montevideo",
      "flag": "./assets/flags/238.svg",
      "es": "Uruguay"
    },
    {
      "name": "Uzbekistan",
      "capital": "Tashkent",
      "flag": "./assets/flags/239.svg",
      "es": "Uzbekistán"
    },
    {
      "name": "Vanuatu",
      "capital": "Port Vila",
      "flag": "./assets/flags/240.svg",
      "es": "Vanuatu"
    },
    {
      "name": "Venezuela (Bolivarian Republic of)",
      "capital": "Caracas",
      "flag": "./assets/flags/241.svg",
      "es": "Venezuela"
    },
    {
      "name": "Vietnam",
      "capital": "Hanoi",
      "flag": "./assets/flags/242.svg",
      "es": "Vietnam"
    },
    {
      "name": "Wallis and Futuna",
      "capital": "Mata-Utu",
      "flag": "./assets/flags/243.svg",
      "es": "Wallis y Futuna"
    },
    {
      "name": "Western Sahara",
      "capital": "El Aaiún",
      "flag": "./assets/flags/244.svg",
      "es": "Sahara Occidental"
    },
    {
      "name": "Yemen",
      "capital": "Sana'a",
      "flag": "./assets/flags/245.svg",
      "es": "Yemen"
    },
    {
      "name": "Zambia",
      "capital": "Lusaka",
      "flag": "./assets/flags/246.svg",
      "es": "Zambia"
    },
    {
      "name": "Zimbabwe",
      "capital": "Harare",
      "flag": "./assets/flags/247.svg",
      "es": "Zimbabue"
    }
  ]
}
