// ============================================================
// ДАННЫЕ САЙТА «МАМА МАРУСЯ» — этот файл правится вручную
//
// Как обновить ЦЕНУ или название блюда: найдите блюдо в списке
// DISHES ниже и поменяйте значение "price" (число, руб. BYN) или
// "name". Сохраните файл и загрузите на сайт — больше ничего менять не нужно.
//
// Как заменить ОТЗЫВЫ: блок REVIEWS. Как поправить вопросы-ответы: FAQ.
// Важно: кавычки в тексте — только «ёлочки» или без кавычек, прямые " ломают код.
// ============================================================
window.SITE_DATA = {
  "config": {
    "brand": "Мама Маруся",
    "phone": "+375 29 738-61-39",
    "phoneHref": "tel:+375297386139",
    "instagram": "https://www.instagram.com/mama_marysya_",
    "telegram": "https://t.me/Mari_Makarevich",
    "area": "Мозырь, Мозырьский район, Калинковичи",
    "freeDeliveryFrom": 200,
    "freeDeliveryNote": "При заказе от 200 руб. бесплатная доставка по г. Мозырь"
  },
  "groups": [
    {
      "id": "furshet",
      "name": "Фуршетное меню"
    },
    {
      "id": "pf",
      "name": "Полуфабрикаты"
    }
  ],
  "categories": [
    {
      "id": "cat-brusketty",
      "name": "Брускетты и кростини",
      "group": "furshet",
      "count": 17
    },
    {
      "id": "cat-kanape",
      "name": "Канапе",
      "group": "furshet",
      "count": 6
    },
    {
      "id": "cat-tartaletki",
      "name": "Тарталетки и корзинки",
      "group": "furshet",
      "count": 9
    },
    {
      "id": "cat-sloenoe",
      "name": "Профитроли и слоёные закуски",
      "group": "furshet",
      "count": 8
    },
    {
      "id": "cat-rulets",
      "name": "Рулеты",
      "group": "furshet",
      "count": 7
    },
    {
      "id": "cat-banquet",
      "name": "Банкетные закуски",
      "group": "furshet",
      "count": 13
    },
    {
      "id": "cat-salaty",
      "name": "Салаты",
      "group": "furshet",
      "count": 12
    },
    {
      "id": "cat-detskie",
      "name": "Детское меню",
      "group": "furshet",
      "count": 8
    },
    {
      "id": "cat-sladkoe",
      "name": "Сладкое",
      "group": "furshet",
      "count": 10
    },
    {
      "id": "cat-boksy",
      "name": "Сборные боксы",
      "group": "furshet",
      "count": 2
    },
    {
      "id": "cat-pp",
      "name": "ПП-меню",
      "group": "pf",
      "count": 22
    },
    {
      "id": "cat-bliny",
      "name": "Блинчики",
      "group": "pf",
      "count": 10
    },
    {
      "id": "cat-tvorozhnye",
      "name": "Творожные",
      "group": "pf",
      "count": 12
    },
    {
      "id": "cat-lepka",
      "name": "Пельмени и вареники",
      "group": "pf",
      "count": 6
    },
    {
      "id": "cat-myasnye",
      "name": "Мясные",
      "group": "pf",
      "count": 32
    },
    {
      "id": "cat-rybnye",
      "name": "Рыбные",
      "group": "pf",
      "count": 2
    },
    {
      "id": "cat-supy",
      "name": "Супы",
      "group": "pf",
      "count": 7
    },
    {
      "id": "cat-ovoshchnye",
      "name": "Овощные",
      "group": "pf",
      "count": 2
    },
    {
      "id": "cat-vypechka",
      "name": "Выпечка",
      "group": "pf",
      "count": 1
    }
  ],
  "dishes": [
    {
      "id": 1,
      "categoryId": "cat-brusketty",
      "name": "Брускетта с креветкой, муссом из базилика и овощной сальзой",
      "ingredients": "багет, сыр творожный, базилик, креветка королевская, перец сладкий, огурец, соль, сахар, соус кисло-сладкий",
      "weight": "5 шт",
      "price": 10,
      "image": "photos/01971616b92f70578c9aee70c2c031bf.jpg"
    },
    {
      "id": 2,
      "categoryId": "cat-brusketty",
      "name": "Набор кростини «Краски лета», 36 шт",
      "ingredients": "кростини с беконом (6 шт), кростини с кальмаром и вялеными томатами (6 шт), кростини с полендвицей (6 шт), кростини с баклажаном (6 шт), кростини с сыром и помидорками Черри (6 шт)",
      "weight": "36 шт",
      "price": 130,
      "image": "photos/01971856559d785eb996dd15bc18ca42.jpg"
    },
    {
      "id": 3,
      "categoryId": "cat-brusketty",
      "name": "Мини-сэндвичи с ветчиной и форелью",
      "ingredients": "Мини-сэндвичи с ветчиной и огурчиком, 8 шт, Мини-сэндвичи с форелью и помидором, 8 шт",
      "weight": "700 г",
      "price": 75,
      "image": "photos/01973c45774a71728a860da46416fae3.jpg"
    },
    {
      "id": 4,
      "categoryId": "cat-brusketty",
      "name": "Набор брускетт XL, 16 шт",
      "ingredients": "брускетта с карбонадом (4 шт), брускетта с форелью (4 шт), брускетта с говядиной (4 шт), брускетта с паштетом (4 шт)",
      "weight": "1000 г",
      "price": 110,
      "image": "photos/0198c2c720f870f497f0865f04590f4a.jpg"
    },
    {
      "id": 5,
      "categoryId": "cat-brusketty",
      "name": "Кростини «фуршетный микс»",
      "ingredients": "кростини с карбонадом, кростини с форелью, кростини с говядиной, кростини с салями, кростини с ягодами, кростини с сырно-яичным паштетом",
      "weight": "1200 г",
      "price": 120,
      "image": "photos/0198c2cd5ab177eeaa78e6c4ad91382c.jpg"
    },
    {
      "id": 6,
      "categoryId": "cat-brusketty",
      "name": "Мини-бургеры, 18 шт",
      "ingredients": "",
      "weight": "18 шт",
      "price": 70,
      "image": "photos/019994a9f8447704b3a87f2ad782d807.jpg"
    },
    {
      "id": 7,
      "categoryId": "cat-brusketty",
      "name": "Бокс «Под крепкое»",
      "ingredients": "4 салата винегрет, 4 салата оливье, 4 брускетты со шпротами, 5 канапе с селедочкой (салаты на выбор: винегрет, оливье, крабовый, сельдь под шубой)",
      "weight": "",
      "price": 100,
      "image": "photos/0199a9139d02714680377a6a3714086e.jpg"
    },
    {
      "id": 8,
      "categoryId": "cat-brusketty",
      "name": "Кростини с селедочкой, 10 шт",
      "ingredients": "",
      "weight": "10 шт",
      "price": 42,
      "image": "photos/0199b8c4d84074ac9d9de112ae7cfc2c.jpg"
    },
    {
      "id": 9,
      "categoryId": "cat-brusketty",
      "name": "Брускетта со шпротами, 6 шт",
      "ingredients": "",
      "weight": "6 шт",
      "price": 35,
      "image": "photos/0199b8c8fe9c762b818bf030116de34c.jpg"
    },
    {
      "id": 10,
      "categoryId": "cat-brusketty",
      "name": "Бокс «Мужской»",
      "ingredients": "8 брускетт со шпротами, 8 закусочных маффинов",
      "weight": "",
      "price": 90,
      "image": "photos/0199ba48abe97338abba1d0911468073.jpg"
    },
    {
      "id": 11,
      "categoryId": "cat-brusketty",
      "name": "Закусочные маффины, 8 шт",
      "ingredients": "",
      "weight": "8 шт",
      "price": 44,
      "image": "photos/0199be0cee967636a4753c0196ec725b.jpg"
    },
    {
      "id": 12,
      "categoryId": "cat-brusketty",
      "name": "Бокс новогодних брускетт",
      "ingredients": "брускетты с паштетом и луком, креветками, вяленым мясом и грушей, с тунцом и маринованным луком",
      "weight": "",
      "price": 130,
      "image": "photos/019a7918cbf5708d94d81b1047c32639.jpg"
    },
    {
      "id": 13,
      "categoryId": "cat-brusketty",
      "name": "Бокс кростини, 30 штук",
      "ingredients": "Кростини с ветчиной- 6 шт, Кростини с салями- 6 шт, Кростини с говядиной- 6 шт, Кростини с яичным паштетом - 6 шт, Кростини с форелью - 6 шт",
      "weight": "30 штук",
      "price": 110,
      "image": "photos/019d05ac43b1730eaa57efca8cc87e2b.jpg"
    },
    {
      "id": 14,
      "categoryId": "cat-brusketty",
      "name": "Бокс брускетт с креветками и с овощной сальсой",
      "ingredients": "16 брускетт с креветками с муссом из базилика и овощной сальсой",
      "weight": "",
      "price": 130,
      "image": "photos/019d05af64bf76b9820359c9bc4e6237.jpg"
    },
    {
      "id": 15,
      "categoryId": "cat-brusketty",
      "name": "Питы, 20 штук",
      "ingredients": "Питы - это пресная лепешка с наггетсом, салатом, соусом и помидором",
      "weight": "20 штук",
      "price": 90,
      "image": "photos/019d05b378e278afb1723367147900e4.jpg"
    },
    {
      "id": 16,
      "categoryId": "cat-brusketty",
      "name": "Мини-тортильи с наггетсами",
      "ingredients": "Мини-тортильи с наггетсами, салатом, сладким перцем, соусом и сыром - 20 штук",
      "weight": "1500 г",
      "price": 95,
      "image": "photos/019d05b8e96977a79aeba5b166d37cc2.jpg"
    },
    {
      "id": 17,
      "categoryId": "cat-brusketty",
      "name": "Кростини, 3 вкуса",
      "ingredients": "10 кростини с форелью, 10 кростини с яичным паштетом, 10 кростини с балыком",
      "weight": "",
      "price": 110,
      "image": "photos/019d2ea363be7410850636dd25478540.jpg"
    },
    {
      "id": 18,
      "categoryId": "cat-kanape",
      "name": "Набор канапе «вкусный микс»",
      "ingredients": "канапе-капрезе с бальзамическим кремом (6шт), канапе с каламбером и голубикой (8шт), канапе с салями и черри (8шт), канапе с лососем и перепелиным яйцом (8шт), овощи канапе в стаканчике с кисло-сладким соусом (6шт)",
      "weight": "36 штук",
      "price": 130,
      "image": "photos/01971815d3627886b824f77b4c444699.jpg"
    },
    {
      "id": 19,
      "categoryId": "cat-kanape",
      "name": "Бокс «под водочку»",
      "ingredients": "10 канапе с селедкой, 10 канапе с салом",
      "weight": "20 шт",
      "price": 80,
      "image": "photos/0198993ed36d72e099540a3dd74d2d07.jpg"
    },
    {
      "id": 20,
      "categoryId": "cat-kanape",
      "name": "Канапе в стаканчике",
      "ingredients": "",
      "weight": "10 шт",
      "price": 40,
      "image": "photos/019994ac75ff773cb50f3fd9d6188af6.jpg"
    },
    {
      "id": 21,
      "categoryId": "cat-kanape",
      "name": "Канапе с салом",
      "ingredients": "",
      "weight": "10 шт",
      "price": 40,
      "image": "photos/0199b8c5cf9d7706b7286fbc0e40fd19.jpg"
    },
    {
      "id": 22,
      "categoryId": "cat-kanape",
      "name": "Бокс «Под крепкое»",
      "ingredients": "6 канапе с салом, 6 канапе с карбонатом, 6 канапе с вяленым мясом, 6 канапе с селедочкой",
      "weight": "24 канапе",
      "price": 115,
      "image": "photos/019a105bb2967921ae61a2ac39edf164.jpg"
    },
    {
      "id": 23,
      "categoryId": "cat-kanape",
      "name": "Канапе XL",
      "ingredients": "канапе с карбонадом, сыром и черри - 10 шт, канапе с салями и сырным шариком - 10 шт, канапе с форелью, огурцом и оливками - 10 шт, канапе с виноградом и чизболом в орехах - 8 шт, канапе с сыром бри и ягодами - 8 шт",
      "weight": "1100 гр",
      "price": 125,
      "image": "photos/019a9d06f24777c9ba22d40472844b74.jpg"
    },
    {
      "id": 24,
      "categoryId": "cat-tartaletki",
      "name": "Мини-киши",
      "ingredients": "мини-киги с форелью и брокколи, 10 штук; мини-киши с шампиньонами и беконом, 10 штук",
      "weight": "1000 г",
      "price": 120,
      "image": "photos/01973eccd4e17502b32660cb21192cca.jpg"
    },
    {
      "id": 25,
      "categoryId": "cat-tartaletki",
      "name": "Набор мини-тартолеток «На всех хватит»",
      "ingredients": "тарталетки с творожным сыром и форелью, 8 штук; тарталетки с икрой, 8 штук; тарталетки с креветкой, 8 штук; тарталетки с салями и творожным сыром, 8 штук; тарталетки с вялеными томатами, 8 штук; тарталетки с кокосом, 8 штук; тарталетки с клубникой и сладким кремом, 8 штук",
      "weight": "1000 г",
      "price": 135,
      "image": "photos/01973ed2f243760da4aead2c560e27ea.jpg"
    },
    {
      "id": 26,
      "categoryId": "cat-tartaletki",
      "name": "Шесть граней вкуса",
      "ingredients": "6 тарталеток с лилиями; 6 тарталеток с креветками; 6 тарталеток Цезарь с курицей; 6 тарталеток курица с грибами; 6 тарталеток с форелью; 6 сладких тарталеток",
      "weight": "",
      "price": 170,
      "image": "photos/019850a305547652814b5ff2ad47dd0a.jpg"
    },
    {
      "id": 27,
      "categoryId": "cat-tartaletki",
      "name": "Бокс тарталеток «Вкус в цвете»",
      "ingredients": "6 тарталеток с креветками; 6 тарталеток с салатом «Капризе»; 6 тарталеток с копченой курицей; 6 тарталеток с муссом из лосося; 6 тарталеток с тыквой",
      "weight": "1100 г",
      "price": 120,
      "image": "photos/0199c8907b687668bf9375b1f5f97e70.jpg"
    },
    {
      "id": 28,
      "categoryId": "cat-tartaletki",
      "name": "Бокс тарталеток «Шик и блеск»",
      "ingredients": "6 тарталеток с креветками; 6 тарталеток с красной рыбкой; 6 тарталеток «Цезарь»; 6 тарталеток с мидиями; 6 тарталеток с жульеном; 6 тарталеток с ветчинным соусом и вялеными томатами",
      "weight": "",
      "price": 170,
      "image": "photos/0199aa1e189d783a952a8b986de25126.jpg"
    },
    {
      "id": 29,
      "categoryId": "cat-tartaletki",
      "name": "Тарталетки с сыром Бри и грушей, 6 шт",
      "ingredients": "",
      "weight": "",
      "price": 30,
      "image": "photos/0199b8ded3b4728986525d6dc072f555.jpg"
    },
    {
      "id": 30,
      "categoryId": "cat-tartaletki",
      "name": "Тарталетки с красной рыбой, 6 шт",
      "ingredients": "",
      "weight": "",
      "price": 30,
      "image": "photos/0199b8dfb39971c4935ddbd60ef94592.jpg"
    },
    {
      "id": 31,
      "categoryId": "cat-tartaletki",
      "name": "Тарталетки с икрой (имитация), 6 шт",
      "ingredients": "",
      "weight": "",
      "price": 21,
      "image": "photos/0199b8e0648c763ab98436ab6531e46e.jpg"
    },
    {
      "id": 32,
      "categoryId": "cat-tartaletki",
      "name": "Мини тарталетки, 64 шт",
      "ingredients": "",
      "weight": "",
      "price": 140,
      "image": "photos/019a26dbcfc274e48565f37f6d63b9e7.jpg"
    },
    {
      "id": 33,
      "categoryId": "cat-sloenoe",
      "name": "Круассаны",
      "ingredients": "",
      "weight": "",
      "price": 125,
      "image": "photos/01971acbc02c709896e946916027b1fb.jpg"
    },
    {
      "id": 34,
      "categoryId": "cat-sloenoe",
      "name": "Бокс канапе на слоеном тесте",
      "ingredients": "",
      "weight": "1100 г",
      "price": 110,
      "image": "photos/0199235f671a774baab6aeec51489986.jpg"
    },
    {
      "id": 35,
      "categoryId": "cat-sloenoe",
      "name": "Канапе на воздушной подушке",
      "ingredients": "",
      "weight": "",
      "price": 95,
      "image": "photos/0199ee042ea4709aa1d5b0f9b3eea68d.jpg"
    },
    {
      "id": 36,
      "categoryId": "cat-sloenoe",
      "name": "Профитроли с Жульеном",
      "ingredients": "",
      "weight": "1200 г",
      "price": 70,
      "image": "photos/0197c560c62578bd80ffc9cec0936ce9.jpg"
    },
    {
      "id": 37,
      "categoryId": "cat-sloenoe",
      "name": "Профитроли «Три короны»",
      "ingredients": "30 профитролей: 10 штук с лососем, 10 штук с паштетом из печени, 10 штук с яичным паштетом",
      "weight": "1200 г",
      "price": 100,
      "image": "photos/0198cccb74c07713bf93fbf18b78c247.jpg"
    },
    {
      "id": 38,
      "categoryId": "cat-sloenoe",
      "name": "Эклеры",
      "ingredients": "",
      "weight": "",
      "price": 110,
      "image": "photos/019a06391c927296a698a28c241aa55f.jpg"
    },
    {
      "id": 39,
      "categoryId": "cat-sloenoe",
      "name": "Французский поцелуй",
      "ingredients": "",
      "weight": "",
      "price": 120,
      "image": "photos/019abb270bc27721871fc3bc3b62aa8a.jpg"
    },
    {
      "id": 40,
      "categoryId": "cat-sloenoe",
      "name": "Эклеры",
      "ingredients": "с красной рыбой, с креветками, с икрой (имитация), с паштетом индейки и жареным луком, с вялеными томатами, с вяленым мясом",
      "weight": "18 штук",
      "price": 110,
      "image": "photos/019a06391c927296a698a28c241aa55f.jpg"
    },
    {
      "id": 41,
      "categoryId": "cat-rulets",
      "name": "Бокс рулетиков из баклажан",
      "ingredients": "• Баклажаны гриль с творожным сыром, 12 штук\n• Рулетики из баклажан в сухарях Панко, 10 шт\n• Рулетики из баклажан в ореховой панировке, 10 шт",
      "weight": "1250 гр",
      "price": 110,
      "image": "photos/01973a9e91277316aec4536a60f024bc.jpg"
    },
    {
      "id": 42,
      "categoryId": "cat-rulets",
      "name": "Рулетики из ветчины",
      "ingredients": "•рулетики из карбонада с томатами черри, 12 шт\n•рулетики из ветчины с маринованным огурчиком и свежим перцем, 12 шт\n• рулетики из ветчины с перепелиным яйцом, 12 шт",
      "weight": "1200 гр",
      "price": 110,
      "image": "photos/01973bc84b6372aa8f3260c3ddf58c8f.jpg"
    },
    {
      "id": 43,
      "categoryId": "cat-rulets",
      "name": "Мини-тортильи Цезарь",
      "ingredients": "Состав: тортилья, куриное филе, соус Цезарь, черри, сыр, листья салата, микрозелень, соль, специи\n\nСтоимость за 12 штук",
      "weight": "",
      "price": 48,
      "image": "photos/0197b08904ec717981c87b47b9aa9f2e.jpg"
    },
    {
      "id": 44,
      "categoryId": "cat-rulets",
      "name": "Рулетики из баклажан",
      "ingredients": "",
      "weight": "10 шт",
      "price": 36,
      "image": "photos/0197c576400c790caba1add87d332931.jpg"
    },
    {
      "id": 45,
      "categoryId": "cat-rulets",
      "name": "Рулетики из ветчины",
      "ingredients": "",
      "weight": "10 штук",
      "price": 36,
      "image": "photos/0197c577022077d58912629d22a313fd.jpg"
    },
    {
      "id": 46,
      "categoryId": "cat-rulets",
      "name": "Шпинатный рулет",
      "ingredients": "Шпинатный рулет с форелью и творожным сыром",
      "weight": "14 кусочков",
      "price": 50,
      "image": "photos/01998638fa81770dbc04f940499c1908.jpg"
    },
    {
      "id": 47,
      "categoryId": "cat-rulets",
      "name": "Рулетики из лаваша с ветчиной и форелью",
      "ingredients": "12 рулетиков с форелью, огурчиком и творожным сыром\n12 рулетиков с ветчиной, сыром и яйцом",
      "weight": "",
      "price": 80,
      "image": "photos/019986499a807143b0352029b8b26626.jpg"
    },
    {
      "id": 48,
      "categoryId": "cat-banquet",
      "name": "Руляда из курицы",
      "ingredients": "тушка курицы, приправа для курицы, яйцо, шпинат, желатин, молоко, масло растительное, перец свежий, огурец свежий, лавровый лист, соль",
      "weight": "1000 г",
      "price": 55,
      "image": "photos/01978d7b0e2c747fb81f8a6a02b45475.jpg"
    },
    {
      "id": 49,
      "categoryId": "cat-banquet",
      "name": "Куриные шашлычки с болгарским перчиком",
      "ingredients": "",
      "weight": "1100 г",
      "price": 130,
      "image": "photos/01985c5127cf76ceaf0d8948c8e3e9b8.jpg"
    },
    {
      "id": 50,
      "categoryId": "cat-banquet",
      "name": "Рулет мясной",
      "ingredients": "шейная часть свинины, соль, специи, горчица, огурец маринованный, бекон",
      "weight": "1000 г",
      "price": 55,
      "image": "photos/0198c3ec9444703dbdb1125ee4e9f214.jpg"
    },
    {
      "id": 51,
      "categoryId": "cat-banquet",
      "name": "Рулет в беконе",
      "ingredients": "фарш свинина-курица, лук репчатый, бекон, соль, специи, шампиньоны",
      "weight": "1000 г",
      "price": 50,
      "image": "photos/0198c3ee975876ed95ff08b4947c2004.jpg"
    },
    {
      "id": 52,
      "categoryId": "cat-banquet",
      "name": "Свинина запеченная с баклажаном и помидором",
      "ingredients": "свинина полендвица, баклажан, помидор, майонез, сыр, мука, соль, специи, чеснок, масло растительное",
      "weight": "1000 г",
      "price": 52,
      "image": "photos/01973bd014f0730fa593772fc1b46289.jpg"
    },
    {
      "id": 53,
      "categoryId": "cat-banquet",
      "name": "Блинчики с Жульеном",
      "ingredients": "блины п/ф, сливки, курица, шампиньоны, лук, соль, специи",
      "weight": "10 шт",
      "price": 45,
      "image": "photos/019735fb20e274c69b9387b3ef4c8151.jpg"
    },
    {
      "id": 54,
      "categoryId": "cat-banquet",
      "name": "Блинчики с форелью",
      "ingredients": "блины п/ф, творожный сыр, форель",
      "weight": "10 шт",
      "price": 45,
      "image": "photos/0197c9fedd3c7612a69cb2878439760d.jpg"
    },
    {
      "id": 55,
      "categoryId": "cat-banquet",
      "name": "Печеночный тортик",
      "ingredients": "",
      "weight": "1000 г",
      "price": 47,
      "image": "photos/01998b5e086d70ad9cb4c8784ce40793.jpg"
    },
    {
      "id": 56,
      "categoryId": "cat-banquet",
      "name": "Крылышки в медово-горчичном соусе",
      "ingredients": "",
      "weight": "1 кг",
      "price": 43,
      "image": "photos/0199b8e7602a7369a6d24cb3d2654fc6.jpg"
    },
    {
      "id": 57,
      "categoryId": "cat-banquet",
      "name": "Куриные бедра в соусе терияки",
      "ingredients": "",
      "weight": "1 кг",
      "price": 45,
      "image": "photos/0199b8e832977174b92717dea8f001de.jpg"
    },
    {
      "id": 58,
      "categoryId": "cat-banquet",
      "name": "Картофель по-деревенски",
      "ingredients": "",
      "weight": "1000 г",
      "price": 21,
      "image": "photos/0199b8f1f8c6784ba1519451b665adf4.jpg"
    },
    {
      "id": 59,
      "categoryId": "cat-banquet",
      "name": "Курица фаршированная блинами",
      "ingredients": "курица тушка, блины п/ф, яйцо, молоко, шампиньоны, лук репчатый, соль, сахар, специи, огурец свежий, перец свежий",
      "weight": "1500 г",
      "price": 75,
      "image": "photos/01978cd6371271f082c4aa843395ce48.jpg"
    },
    {
      "id": 60,
      "categoryId": "cat-banquet",
      "name": "Печеночный торт",
      "ingredients": "",
      "weight": "1500 г",
      "price": 80,
      "image": "photos/019a72f481dd7410a2a080ef3ead9229.jpg"
    },
    {
      "id": 61,
      "categoryId": "cat-salaty",
      "name": "Оливье",
      "ingredients": "",
      "weight": "200 г",
      "price": 7,
      "image": "photos/0199a4daa32b775d8fa5f5af301fd674.jpg"
    },
    {
      "id": 62,
      "categoryId": "cat-salaty",
      "name": "Винегрет",
      "ingredients": "",
      "weight": "200 г",
      "price": 7,
      "image": "photos/0199a4df4dc674dd92f878ef67d04d62.jpg"
    },
    {
      "id": 63,
      "categoryId": "cat-salaty",
      "name": "Крабовый",
      "ingredients": "",
      "weight": "",
      "price": 7,
      "image": "photos/0199a4e0023c7585bf93eca20a817360.jpg"
    },
    {
      "id": 64,
      "categoryId": "cat-salaty",
      "name": "Сельдь под шубой",
      "ingredients": "",
      "weight": "1000 г",
      "price": 35,
      "image": "photos/0199a90d433179599f1db40b2d0dd7a6.jpg"
    },
    {
      "id": 65,
      "categoryId": "cat-salaty",
      "name": "Оливье",
      "ingredients": "",
      "weight": "1000 г",
      "price": 35,
      "image": "photos/0199a90dfeb0712f84b67b7d57da5117.jpg"
    },
    {
      "id": 66,
      "categoryId": "cat-salaty",
      "name": "Салат Тбилиси",
      "ingredients": "говядина, болгарский перец, красная фасоль, лук красный, грецкие орехи, соль, сахар, специи, оливковое масло, сок лимона, чеснок",
      "weight": "1000 г",
      "price": 60,
      "image": "photos/019791df8fc1750f8c7283ad80b325ce.jpg"
    },
    {
      "id": 67,
      "categoryId": "cat-salaty",
      "name": "Слоеный салат с ветчиной, птицей, овощами и шампиньонами",
      "ingredients": "",
      "weight": "1000 г",
      "price": 55,
      "image": "photos/019836de501b727a8f6229bff062e87e.jpg"
    },
    {
      "id": 68,
      "categoryId": "cat-salaty",
      "name": "Салат Цезарь",
      "ingredients": "",
      "weight": "1000 г",
      "price": 45,
      "image": "photos/0199ba50d4b478748fbe563270649591.jpg"
    },
    {
      "id": 69,
      "categoryId": "cat-salaty",
      "name": "Бокс с салатами «На любой вкус»",
      "ingredients": "салат с говядиной и овощами - 4 шт, салат с копченой курицей и шпинатом - 4 шт, салат с креветками и копченым беконом, салат Греческий - 4 шт",
      "weight": "2300 г",
      "price": 160,
      "image": "photos/0199edfde1a9796ca9cc977ae957b0e9.jpg"
    },
    {
      "id": 70,
      "categoryId": "cat-salaty",
      "name": "Сельдь под шубой в рулете",
      "ingredients": "яйца, картофель, лук, морковь, сельдь, майонез",
      "weight": "1000 г",
      "price": 60,
      "image": "photos/019a680b2146716ba7ea6fe926f2d8bc.jpg"
    },
    {
      "id": 71,
      "categoryId": "cat-salaty",
      "name": "Оливье в рулете с говядиной",
      "ingredients": "яйца, морковь, картофель, зеленый горошек, говядина, соленый огурец, майонез",
      "weight": "1000 г",
      "price": 65,
      "image": "photos/019a680c4be074f8a86b4f0ee4d98588.jpg"
    },
    {
      "id": 72,
      "categoryId": "cat-salaty",
      "name": "Салат с баклажанами",
      "ingredients": "баклажаны, курица, грецкие орехи, грибы, сыр, майонез",
      "weight": "1000 г",
      "price": 60,
      "image": "photos/019a681a672870cca7b0a942fe24f4f2.jpg"
    },
    {
      "id": 73,
      "categoryId": "cat-detskie",
      "name": "Детский сборный бокс",
      "ingredients": "",
      "weight": "",
      "price": 100,
      "image": "photos/0199825c51eb7458b077193eeacab8a2.jpg"
    },
    {
      "id": 74,
      "categoryId": "cat-detskie",
      "name": "Мини-пиццы, 9 шт",
      "ingredients": "",
      "weight": "",
      "price": 55,
      "image": "photos/0199825d551c71b9b7f44c9ea0e46134.jpg"
    },
    {
      "id": 75,
      "categoryId": "cat-detskie",
      "name": "Мини-бургеры, 9 шт",
      "ingredients": "",
      "weight": "",
      "price": 60,
      "image": "photos/0199825e8a2f7932b3e5aa16d48094a6.jpg"
    },
    {
      "id": 76,
      "categoryId": "cat-detskie",
      "name": "Индивидуальный бокс",
      "ingredients": "Бургер+наггетсы+сосиска в тесте\n\nЗаказ от 4-ех штук",
      "weight": "",
      "price": 30,
      "image": "photos/019982607805746e9cb14b0ea8727ce2.jpg"
    },
    {
      "id": 77,
      "categoryId": "cat-detskie",
      "name": "Сырные шарики",
      "ingredients": "Заказ от 4-ех штук",
      "weight": "",
      "price": 10,
      "image": "photos/01998261a2cf765b818fa5af566cd34c.jpg"
    },
    {
      "id": 78,
      "categoryId": "cat-detskie",
      "name": "Наггетсы",
      "ingredients": "Заказ от 4-ех штук",
      "weight": "",
      "price": 7,
      "image": "photos/01998262b10c787cb35321c8bb6e6724.jpg"
    },
    {
      "id": 79,
      "categoryId": "cat-detskie",
      "name": "Рулетики из лаваша (ветчина/крабовое мясо)",
      "ingredients": "18 мини-рулетиков из лаваша с ветчиной или крабовым мясом",
      "weight": "",
      "price": 28,
      "image": "photos/01998266651674269ebad644b261dc4b.jpg"
    },
    {
      "id": 80,
      "categoryId": "cat-detskie",
      "name": "Бокс «Похрустим»",
      "ingredients": "18 мини-рулетиков из лаваша (крабовое мясо/ветчина)\n\n30 сырных шарика",
      "weight": "",
      "price": 75,
      "image": "photos/019982717381736f98717b25f077dd11.jpg"
    },
    {
      "id": 81,
      "categoryId": "cat-sladkoe",
      "name": "Пироженное «Медовик»",
      "ingredients": "",
      "weight": "90 г",
      "price": 8,
      "image": "photos/0198cbc1c91d762eab404aa083fdf854.jpg"
    },
    {
      "id": 82,
      "categoryId": "cat-sladkoe",
      "name": "Лимонный десерт",
      "ingredients": "",
      "weight": "",
      "price": 14,
      "image": "photos/0198db38514675a6886f10fe825e55b0.jpg"
    },
    {
      "id": 83,
      "categoryId": "cat-sladkoe",
      "name": "Красный бархат",
      "ingredients": "",
      "weight": "",
      "price": 12,
      "image": "photos/0198db37fecf7521be4aecacef0eaabc.jpg"
    },
    {
      "id": 84,
      "categoryId": "cat-sladkoe",
      "name": "Десерт Павлова",
      "ingredients": "",
      "weight": "",
      "price": 7,
      "image": "photos/0198db38cfc77809a31f8c4f62a39964.jpg"
    },
    {
      "id": 85,
      "categoryId": "cat-sladkoe",
      "name": "Сладкий бокс",
      "ingredients": "4 шт красный бархат, 4 шт десерт лимонный, 4 шт медовик порционный, 4 шт десерт Павлова",
      "weight": "1400 г",
      "price": 165,
      "image": "photos/0198e11e48557068b0251013a6131095.jpg"
    },
    {
      "id": 86,
      "categoryId": "cat-sladkoe",
      "name": "Орешки в стаканчике",
      "ingredients": "",
      "weight": "5 шт",
      "price": 7.5,
      "image": "photos/0198e77cdcb878418f7fd4f44d9aebd7.jpg"
    },
    {
      "id": 87,
      "categoryId": "cat-sladkoe",
      "name": "Капкейки",
      "ingredients": "",
      "weight": "",
      "price": 8,
      "image": "photos/01999f11698676b78dcf668c60fde7fc.jpg"
    },
    {
      "id": 88,
      "categoryId": "cat-sladkoe",
      "name": "Панакота",
      "ingredients": "9 шт, 3 вида",
      "weight": "",
      "price": 100,
      "image": "photos/0199edf57bd373c898e24f7ce061645e.jpg"
    },
    {
      "id": 89,
      "categoryId": "cat-sladkoe",
      "name": "Лимонный пудинг",
      "ingredients": "12 штук",
      "weight": "",
      "price": 90,
      "image": "photos/019a01de206977e785a3c5ff1524b6bd.jpg"
    },
    {
      "id": 90,
      "categoryId": "cat-sladkoe",
      "name": "Муравейник порционный",
      "ingredients": "",
      "weight": "",
      "price": 12,
      "image": "photos/019d05c3f99a76a5a907ea2818666d8d.jpg"
    },
    {
      "id": 91,
      "categoryId": "cat-boksy",
      "name": "Бокс №1",
      "ingredients": "12 канапе на слоеном тесте с говядиной\n10 канапе с огурцом и форелью\n10 профитролей с куриным мусом с хрустящими луком",
      "weight": "1.5 кг",
      "price": 55,
      "image": "photos/019d2f635d1a73d6a65069710b914d59.jpg"
    },
    {
      "id": 92,
      "categoryId": "cat-boksy",
      "name": "Бокс №2",
      "ingredients": "•10 рулетиков из ветчины\n•10 рулетиков из баклажан\n•Шпинатный рулет",
      "weight": "500 г",
      "price": 35,
      "image": "photos/019de1a25a2778559653d29e7d95b54d.jpg"
    },
    {
      "id": 93,
      "categoryId": "cat-pp",
      "name": "Рыбные фрикадельки",
      "ingredients": "рыбный фарш, яйцо, соль, специи, манка, петрушка свежая, лук репчатый, цедра лимона\n\nКкал - 109\nБелки - 16 г\nЖиры - 3 г\nУглеводы - 5 г",
      "weight": "500 г",
      "price": 28,
      "image": "photos/019d5742750f74bcb6e9ce4514a9cb39.jpg"
    },
    {
      "id": 94,
      "categoryId": "cat-pp",
      "name": "Фишболы с творожным сыром и шпинатом",
      "ingredients": "рыбный фарш, творожный сыр, шпинат, яйцо, овсяные хлопья, сок лимона, соль, специи\n\nКкал - 121\nБелки - 15 г\nЖиры - 6 г\nУглеводы - 3 г",
      "weight": "600 г",
      "price": 32,
      "image": "photos/019d5753d56d7842ac152486905f3129.jpg"
    },
    {
      "id": 95,
      "categoryId": "cat-pp",
      "name": "Скумбрия с томатами и каперсами",
      "ingredients": "скумбрия, томаты в собственном соку, лук репчатый, морковь, перец болгарский, оливковое масло, каперсы, соль, специи, сахарозаменитель\n\nКкал - 86\nБелки - 8 г\nЖиры - 5 г\nУглеводы - 3 г",
      "weight": "1000 г",
      "price": 46,
      "image": "photos/019d577e1e3175278bde5497384f6d17.jpg"
    },
    {
      "id": 96,
      "categoryId": "cat-pp",
      "name": "Рыбные котлеты с брокколи",
      "ingredients": "рыбный фарш, брокколи, морковь, красный лук, оливковое масло, соль, специи, яйцо, овсяные хлопья, чеснок\n\nКкал - 92\nБелки - 14 г\nЖиры - 3 г\nУглеводы - 3 г",
      "weight": "1000 г",
      "price": 56,
      "image": "photos/019d58d66e5c70f9ac0688d36b9b54b2.jpg"
    },
    {
      "id": 97,
      "categoryId": "cat-pp",
      "name": "Рыбные тефтели с булгуром",
      "ingredients": "рыбный фарш, булгур, лук репчатый, морковь, яйцо, соль, специи\n\nКкал - 84\nБелки - 13 г\nЖиры - 2 г\nУглеводы - 4 г",
      "weight": "850 г",
      "price": 48,
      "image": "photos/019d8fd7e99d7025afdbcfa5f71a27b9.jpg"
    },
    {
      "id": 98,
      "categoryId": "cat-pp",
      "name": "Форель в кунжутной панировке",
      "ingredients": "форель, куриный белок, соль, специи, кунжут\n\n4 порции по 135г\n\nКкал - 190\nБелки - 19 г\nЖиры - 12 г\nУглеводы - 1 г",
      "weight": "540 г",
      "price": 60,
      "image": "photos/019d8ff5b9b47703aa0cc7bcf0db9124.jpg"
    },
    {
      "id": 99,
      "categoryId": "cat-pp",
      "name": "Балоньезе из курицы",
      "ingredients": "5 порций по 200 гр\n\n филе куриное, мясо бедра, лук репчатый, морковь, масло оливковое, сельдерей, томаты, томатная паста, соль, специи, сахарозаменитель\n\nКкал - 102\nБелки - 9 г\nЖиры - 4 г\nУглеводы - 7 г",
      "weight": "1000 г",
      "price": 48,
      "image": "photos/019d57a0929776759f474601d99172ad.jpg"
    },
    {
      "id": 100,
      "categoryId": "cat-pp",
      "name": "Куриные котлеты с морковью",
      "ingredients": "филе куриное, мясо бедра курицы, лук репчатый, морковь, масло оливковое, яйцо, укроп, овсяные хлопья, соль, специи\n\nКкал - 112\nБелки - 13 г\nЖиры - 4 г\nУглеводы - 6 г",
      "weight": "1000 г",
      "price": 32,
      "image": "photos/019d58da6ff073c8ae50e2cf8263306f.jpg"
    },
    {
      "id": 101,
      "categoryId": "cat-pp",
      "name": "Фрикадельки из куриного фарша",
      "ingredients": "филе куриное, мясо бедра, овсяные хлопья, цукини, яйцо, сельдерей, лук репчатый, чеснок, оливковое масло, петрушка, соль, специи\n\nКкал - 106\nБелки - 12 г\nЖиры - 4 г\nУглеводы - 5 г",
      "weight": "1000 г",
      "price": 34,
      "image": "photos/019d9002c402722db69958c40d7f4384.jpg"
    },
    {
      "id": 102,
      "categoryId": "cat-pp",
      "name": "ПП-террин с зеленым горошком",
      "ingredients": "куриное филе, мясо бедра, творог, яйцо, зеленый горошек, зелень, специи\n\n5 порций по 250 гр\n\nКкал - 111\nБелки - 17 г\nЖиры - 4 г\nУглеводы - 2 г",
      "weight": "1250 г",
      "price": 38,
      "image": "photos/019d8b7a7b6078fbb0e20d387ea92c81.jpg"
    },
    {
      "id": 103,
      "categoryId": "cat-pp",
      "name": "Рубленые котлеты с зеленью",
      "ingredients": "мякоть бедра курицы, филе индейки, яйцо, Сметана, зеленый лук, петрушка, укроп, соль, сухой чеснок, специи, мука цельнозерновая\n\nКкал - 148\nБелки - 18 г\nЖиры - 6 г\nУглеводы - 7 г",
      "weight": "1000 г",
      "price": 44,
      "image": "photos/019d57d677a376699b72b84341d16b57.jpg"
    },
    {
      "id": 104,
      "categoryId": "cat-pp",
      "name": "Запеканка из капусты с куриным филе",
      "ingredients": "морковь, лук репчатый, капуста, филе куриное, шампиньоны, масло Оли, яйцо, сыр Экспонента, укроп, соль, специи\n\n4 порции по 200 г\n\nКкал - 92\nБелки - 7 г\nЖиры - 6 г\nУглеводы - 4 г",
      "weight": "800 г",
      "price": 34,
      "image": "photos/019d58de8fb775689ddced1a0e0f007a.jpg"
    },
    {
      "id": 105,
      "categoryId": "cat-pp",
      "name": "Индейка с овощной начинкой и йогуртовым соусом",
      "ingredients": "индейка, кабачок, перец сладкий, шампиньоны, соль, специи, соевый соус, оливковое масло, йогурт натуральный, горчица, сыр Экспонента\n\n5 порций по 160 г\n\nКкал - 87\nБелки - 15 г\nЖиры - 1 г\nУглеводы - 1 г",
      "weight": "800 г",
      "price": 46,
      "image": "photos/019d8fff9243723a8a9f393089a89a65.jpg"
    },
    {
      "id": 106,
      "categoryId": "cat-pp",
      "name": "Гуляш из говядины",
      "ingredients": "говядина, оливковое масло, перец сладкий, лук репчатый, шампиньоны, томатная паста, соль, специи, сахарозаменители\n\n4 порции по 250 г\n\nКкал - 129\nБелки - 13 г\nЖиры - 5 г\nУглеводы - 3 г",
      "weight": "1000 г",
      "price": 74,
      "image": "photos/019d8b7d59517749bbbe6fb1de97916f.jpg"
    },
    {
      "id": 107,
      "categoryId": "cat-pp",
      "name": "Фаршированный перец с булгуром, овощами и грибами",
      "ingredients": "перец сладкий, лук репчатый, морковь, сельдерей, шампиньоны, масло оливковое, Булгур, соль, специи, зелень",
      "weight": "1100 г",
      "price": 46,
      "image": "photos/019d8ff9ca3b72c187185cc49744924a.jpg"
    },
    {
      "id": 108,
      "categoryId": "cat-pp",
      "name": "Овощные голубцы",
      "ingredients": "капуста, вешенки, морковь, лук репчатый, сельдерей, масло оливковое, яйцо, зелень, соль, специи\n\nКкал - 47\nБелки - 2 г\nЖиры - 2 г\nУглеводы - 6 г",
      "weight": "2000 г",
      "price": 48,
      "image": "photos/019d8ffb8dc7731fad8ad5cdd4aeabcc.jpg"
    },
    {
      "id": 109,
      "categoryId": "cat-pp",
      "name": "Кабачковые ПП-блинчики с куриной грудкой и сыром",
      "ingredients": "кабачок, кефир, яйцо, мука, разрыхлитель, зелень, соль\n\n8 блинчиков с начинкой\n\nКкал - 116\nБелки - 10 г\nЖиры - 4 г\nУглеводы - 10 г",
      "weight": "850 г",
      "price": 36,
      "image": "photos/019d8b8698de773cbb2abf9933815aa5.jpg"
    },
    {
      "id": 110,
      "categoryId": "cat-pp",
      "name": "Хачапури из творога",
      "ingredients": "творог, яйцо, мука, соль, сыр Экспонента, зелень, Сметана\n\n5 порций по 160 г\n\nКкал - 139\nБелки - 16 г\nЖиры - 4 г\nУглеводы - 12 г",
      "weight": "800 г",
      "price": 26,
      "image": "photos/019d8ff7d59c76a4bcda7dc5678f8d02.jpg"
    },
    {
      "id": 111,
      "categoryId": "cat-pp",
      "name": "Сырники с семенами чиа",
      "ingredients": "творог, яйцо, семена чиа, соль, сахарозаменители\n\nКкал - 132\nБелки - 16 г\nЖиры - 6 г\nУглеводы - 6 г",
      "weight": "700 г",
      "price": 22,
      "image": "photos/019d8ff36b4578b0886359fe095d920e.jpg"
    },
    {
      "id": 112,
      "categoryId": "cat-pp",
      "name": "Запеканка из творога с яблоками и корицей",
      "ingredients": "творог, яблоки, корица, яйца, крупа манная, соль, сахарозаменители\n\n3 порции по 200 гр\n\nКкал - 292\nБелки - 29 г\nЖиры - 9 г\nУглеводы - 16 г",
      "weight": "600 г",
      "price": 20,
      "image": "photos/019d8b82b6547598982927de533db2b2.jpg"
    },
    {
      "id": 113,
      "categoryId": "cat-pp",
      "name": "Сырная ПП-вафля",
      "ingredients": "сыр экспонента, яйцо, утка пшеничная, соль, перец, масло гхи, творог\n\n4 шт по 170 г\n\nКкал - 189\nБелки - 13 г\nЖиры - 9 г\nУглеводы - 13 г",
      "weight": "680 г",
      "price": 18,
      "image": "photos/019d8b8b0b04702bbe7614435bfe44fd.jpg"
    },
    {
      "id": 114,
      "categoryId": "cat-pp",
      "name": "Пюре из красной фасоли с грибами и луком",
      "ingredients": "фасоль, лук репчатый, шампиньоны, масло гхи, масло оливковое\n\n4 порции по 200 г\n\nКкал - 253\nБелки - 12 г\nЖиры - 9 г\nУглеводы - 33 г",
      "weight": "800 г",
      "price": 22,
      "image": "photos/019d8b80216f762a8c35fddf2fa05250.jpg"
    },
    {
      "id": 115,
      "categoryId": "cat-bliny",
      "name": "Блинчики с ветчиной и сыром",
      "ingredients": "блинчики п/ф, ветчина куриная, сыр",
      "weight": "1000 г",
      "price": 28,
      "image": "photos/01964367502074c5bdf1f759637e0b5c.jpg"
    },
    {
      "id": 116,
      "categoryId": "cat-bliny",
      "name": "Блинчики с курицей и грибами",
      "ingredients": "блинчики п/ф, отварная курица, жареный лук с грибами (шампиньоны), соль, черный перец",
      "weight": "1000 г",
      "price": 26,
      "image": "photos/01964368c0e17108b907bc9a88192622.jpg"
    },
    {
      "id": 117,
      "categoryId": "cat-bliny",
      "name": "Блинчики с курицей, рисом и яйцом",
      "ingredients": "блины п/ф, филе куриное, рис, яйцо, соль, специи, лук репчатый, майонез",
      "weight": "1000 г",
      "price": 30,
      "image": "photos/019837908920722cb602511dda1a29ac.jpg"
    },
    {
      "id": 118,
      "categoryId": "cat-bliny",
      "name": "Блинчики с курицей, сыром и майонезом",
      "ingredients": "блины п/ф, куриная грудка, майонез, соль, сыр российский",
      "weight": "1000 г",
      "price": 27,
      "image": "photos/0198184025f0795b9fc7741504a05874.jpg"
    },
    {
      "id": 119,
      "categoryId": "cat-bliny",
      "name": "Блинчики с фаршем",
      "ingredients": "",
      "weight": "1000 г",
      "price": 28,
      "image": "photos/0198183ed03376cd8670176484fdc2ec.jpg"
    },
    {
      "id": 120,
      "categoryId": "cat-bliny",
      "name": "Блинчики с картофелем и грибами в беконе",
      "ingredients": "блинчики п/ф, бекон, картофель, грибы жареные с луком, соль, специи, зелень",
      "weight": "5 шт",
      "price": 25,
      "image": "photos/0196436a131874ccbe514f11c3304d7a.jpg"
    },
    {
      "id": 121,
      "categoryId": "cat-bliny",
      "name": "Блинчики с капустой",
      "ingredients": "блины п/ф, капуста, морковь, лук репчатый, соль, специи",
      "weight": "1000 г",
      "price": 24,
      "image": "photos/019657fcd0057663b614cc047b5d9f0c.jpg"
    },
    {
      "id": 122,
      "categoryId": "cat-bliny",
      "name": "Блинчики с творогом",
      "ingredients": "блины п/ф, творог, сахар, соль, ванилин",
      "weight": "1000 г",
      "price": 25,
      "image": "photos/0198184a8a4c758b85932d51fd5e3ed9.jpg"
    },
    {
      "id": 123,
      "categoryId": "cat-bliny",
      "name": "Блинчики с творогом и ягодной начинкой (малина/смородина/черника)",
      "ingredients": "блины п/ф, черная смородина/ красная смородина/малина/вишня/черника, сахар, творожный сыр",
      "weight": "1000 г",
      "price": 26,
      "image": "photos/0198187f27dd74a38c63f06d5b2a1626.jpg"
    },
    {
      "id": 124,
      "categoryId": "cat-bliny",
      "name": "Блинчики с яблоком и корицей",
      "ingredients": "блины п/ф, яблоки, сахар, корица",
      "weight": "1000 г",
      "price": 24,
      "image": "photos/0198371a3ec57492b93d3b2fea9eafca.jpg"
    },
    {
      "id": 125,
      "categoryId": "cat-tvorozhnye",
      "name": "Сырники классические",
      "ingredients": "творог, мука, соль, ванильный сахар",
      "weight": "800 г",
      "price": 20,
      "image": "photos/01964e115446728595b08b42642e0626.jpg"
    },
    {
      "id": 126,
      "categoryId": "cat-tvorozhnye",
      "name": "Сырники с маковой начинкой",
      "ingredients": "творог 5%, мука, сахар, мак, соль, ванилин",
      "weight": "800 г",
      "price": 20,
      "image": "photos/019657ff16a674af9afc4178b22cd319.jpg"
    },
    {
      "id": 127,
      "categoryId": "cat-tvorozhnye",
      "name": "Сырники с моцареллой и шпинатом",
      "ingredients": "мука рисовая, вода, яйцо, соль, творог 5%, моцарелла, шпинат",
      "weight": "800 г",
      "price": 35,
      "image": "photos/01965895c54f762bba715f1c5d4b156c.jpg"
    },
    {
      "id": 128,
      "categoryId": "cat-tvorozhnye",
      "name": "Мраморные сырники",
      "ingredients": "мука рисовая, яйцо, творог 5%, сахар, какао",
      "weight": "800 г",
      "price": 22,
      "image": "photos/019c08f7175c744b85d85a8959dcb454.jpg"
    },
    {
      "id": 129,
      "categoryId": "cat-tvorozhnye",
      "name": "Сырники с вишней",
      "ingredients": "творог 5%, мука, сахар, яйцо, вишня замороженная",
      "weight": "800 г",
      "price": 24,
      "image": "photos/019beb217bdd750883e320472e8c9987.jpg"
    },
    {
      "id": 130,
      "categoryId": "cat-tvorozhnye",
      "name": "Сырники с беконом и зеленью",
      "ingredients": "творог 5%, яйцо, соль, мука, бекон, зелень",
      "weight": "800 г",
      "price": 35,
      "image": "photos/019d1f49fbad7945a4b5d5a2d4cf6f2e.jpg"
    },
    {
      "id": 131,
      "categoryId": "cat-tvorozhnye",
      "name": "Сырники с черникой",
      "ingredients": "творог 5%, сахар, мука, яйцо, черника",
      "weight": "800 г",
      "price": 28,
      "image": "photos/019d1f4b69ee7704addfb6d03568816a.jpg"
    },
    {
      "id": 132,
      "categoryId": "cat-tvorozhnye",
      "name": "Сырники с какао и клюквой",
      "ingredients": "творог, сахар, соль, мука, яйцо, клюква/вишня",
      "weight": "800 г",
      "price": 26,
      "image": "photos/019d1f4d017371028b9446abd07a830e.jpg"
    },
    {
      "id": 133,
      "categoryId": "cat-tvorozhnye",
      "name": "Сырники с макой и сгущенкой",
      "ingredients": "творог, сахар, соль, яйцо, мука, мак, сгущеное молоко вареное",
      "weight": "800 г",
      "price": 22,
      "image": "photos/019d1f4e86f17689973512d4795a765c.jpg"
    },
    {
      "id": 134,
      "categoryId": "cat-tvorozhnye",
      "name": "Сырники с морковью",
      "ingredients": "творог, сахар, соль, мука, яйцо, морковь, масло сливочное",
      "weight": "800 г",
      "price": 24,
      "image": "photos/019d1f62930878f680c993057298884a.jpg"
    },
    {
      "id": 135,
      "categoryId": "cat-tvorozhnye",
      "name": "Сырники со шпинатом и сыром Чеддер",
      "ingredients": "творог, сахар, соль, мука, яйцо, сыр Чеддер, шпинат",
      "weight": "800 г",
      "price": 30,
      "image": "photos/019d1f6481b4738b9a9d4e7774164ab5.jpg"
    },
    {
      "id": 136,
      "categoryId": "cat-tvorozhnye",
      "name": "Вареники ленивые",
      "ingredients": "творог, яйцо, сахар, мука, соль",
      "weight": "1000 г",
      "price": 24,
      "image": "photos/019dbecf2e1872be9cd42f34172d30e1.jpg"
    },
    {
      "id": 137,
      "categoryId": "cat-lepka",
      "name": "Пельмени классические",
      "ingredients": "мука,вода, растительное масло,соль, яйцо Начинка: фарш свинина-курица, репчатый лук,соль,специи, вода",
      "weight": "1000 г",
      "price": 30,
      "image": "photos/01964313dd7f74a79d5bc1c7a8ab66c3.jpg"
    },
    {
      "id": 138,
      "categoryId": "cat-lepka",
      "name": "Пельмени цветные",
      "ingredients": "мука,вода, сок моркови,сок шпината, растительное масло,соль, яйцо Начинка: фарш свинина-курица, репчатый лук,соль,специи, вода",
      "weight": "1000 г",
      "price": 30,
      "image": "photos/01964364851771168081aefff64bb40c.jpg"
    },
    {
      "id": 139,
      "categoryId": "cat-lepka",
      "name": "Вареники с картошкой и грибами",
      "ingredients": "мука, яйцо, картофель, грибы, лук репчатый, соль, специи",
      "weight": "750 г",
      "price": 26,
      "image": "photos/0196587ef532711a80bfb74f9c8d9eae.jpg"
    },
    {
      "id": 140,
      "categoryId": "cat-lepka",
      "name": "Вареники с картошкой и шкварками",
      "ingredients": "мука, вода, соль, сахар, яйцо, картофель, сало, лук",
      "weight": "750 г",
      "price": 25,
      "image": "photos/019d9f3dd7af7242bda89b5caf99a78c.jpg"
    },
    {
      "id": 141,
      "categoryId": "cat-lepka",
      "name": "Вареники с творогом",
      "ingredients": "мука, вода, яйцо, соль, сахар, творог 5%",
      "weight": "750 г",
      "price": 24,
      "image": "photos/019d9f3edfd376a8a2f1d9b87a6802d3.jpg"
    },
    {
      "id": 142,
      "categoryId": "cat-lepka",
      "name": "Чебуреки",
      "ingredients": "мука, вода, уксус, соль, фарш куриный, лук репчатый, специи",
      "weight": "1000 г",
      "price": 28,
      "image": "photos/01965dd1991b77ee9ac73789d8fe6fd2.jpg"
    },
    {
      "id": 143,
      "categoryId": "cat-myasnye",
      "name": "Котлеты куриные",
      "ingredients": "куриный фарш, хлеб, лук, яйцо, специи, соль",
      "weight": "1000 г",
      "price": 26,
      "image": "photos/01980cd733077484a876d84b306fd35a.jpg"
    },
    {
      "id": 144,
      "categoryId": "cat-myasnye",
      "name": "Котлеты свинина",
      "ingredients": "фарш свиной, хлеб, соль, специи, яйцо, лук репчатый",
      "weight": "1000 г",
      "price": 34,
      "image": "photos/019d9f42d69975f29706e0a648896fb8.jpg"
    },
    {
      "id": 145,
      "categoryId": "cat-myasnye",
      "name": "Котлеты свинина-курица",
      "ingredients": "фарш (свинина-курица), лук репчатый, хлеб пшеничный, яйцо, соль, специи, сухари панировочные",
      "weight": "1000 г",
      "price": 32,
      "image": "photos/0196581dee2472a2ac1c96834bed7c8a.jpg"
    },
    {
      "id": 146,
      "categoryId": "cat-myasnye",
      "name": "Котлеты свинина-говядина",
      "ingredients": "фарш свинина-говядина, лук репчатый, хлеб пшеничный, яйцо, соль, специи, сухари панировочные",
      "weight": "1000 г",
      "price": 42,
      "image": "photos/01965dee5f8875a9b282c643b5dacc54.jpg"
    },
    {
      "id": 147,
      "categoryId": "cat-myasnye",
      "name": "Котлета по-киевски",
      "ingredients": "фарш куриный, яйцо, сыр, сливочное масло, зелень, лук репчатый, соль, специи, сухари панировочные",
      "weight": "570 г",
      "price": 32,
      "image": "photos/019d9f41b48074ee87c9dcafef891c9a.jpg"
    },
    {
      "id": 148,
      "categoryId": "cat-myasnye",
      "name": "Куриные котлеты с брокколи и маслицем",
      "ingredients": "куриный фарш, брокколи, масло сливочное, яйцо, соль, специи",
      "weight": "500 г",
      "price": 20,
      "image": "photos/0196581dee2472a2ac1c96834bed7c8a.jpg"
    },
    {
      "id": 149,
      "categoryId": "cat-myasnye",
      "name": "Куриные фрикадельки",
      "ingredients": "фарш куриный, соль, специи",
      "weight": "500 г",
      "price": 18,
      "image": "photos/01965dcf86ce74479d1818ecad4a90af.jpg"
    },
    {
      "id": 150,
      "categoryId": "cat-myasnye",
      "name": "Тефтели",
      "ingredients": "фарш свинина-говядина, рис, лук репчатый, морковь, соль, специи",
      "weight": "800 г",
      "price": 26,
      "image": "photos/0196f242196e71ef8abe5b697ccc2ae3.jpg"
    },
    {
      "id": 151,
      "categoryId": "cat-myasnye",
      "name": "Митболы с сыром",
      "ingredients": "фарш куриный, соль, специи, сыр творожный, сухари Панко",
      "weight": "500 г",
      "price": 20,
      "image": "photos/0196864c1ca4741bafa978506fbb19ae.jpg"
    },
    {
      "id": 152,
      "categoryId": "cat-myasnye",
      "name": "Наггетсы",
      "ingredients": "филе куриное, яйцо, соевый соус, сухари «Панко», соль, специи",
      "weight": "500 г",
      "price": 20,
      "image": "photos/01966297e4ae7024bfa705240f7b6be9.jpg"
    },
    {
      "id": 153,
      "categoryId": "cat-myasnye",
      "name": "Сосиски куриные",
      "ingredients": "куриное филе, яйцо, сливочное масло, молоко, соль, специи",
      "weight": "600 г",
      "price": 26,
      "image": "photos/0196629473df71e2aa8734e1450f386c.jpg"
    },
    {
      "id": 154,
      "categoryId": "cat-myasnye",
      "name": "Рулетики из куриных бедрышек с черносливом",
      "ingredients": "куриное бедро, сыр сливочный, чернослив, лук репчатый, майонез, соль, специи",
      "weight": "550 г",
      "price": 32,
      "image": "photos/01967c0a352b70778002b3fc81d7075e.jpg"
    },
    {
      "id": 155,
      "categoryId": "cat-myasnye",
      "name": "Куриные кармашки",
      "ingredients": "куриное филе, ветчина, сыр моцарелла, перец болгарский, укроп, майонез, яйцо, соль, специи, сухари Панко",
      "weight": "700 г",
      "price": 36,
      "image": "photos/0196813ec3357926baeb038dd3709f8b.jpg"
    },
    {
      "id": 156,
      "categoryId": "cat-myasnye",
      "name": "Зразы с грибами и яйцом",
      "ingredients": "фарш свиной, грибы шампиньоны, лук репчатый, яйцо, укроп, чеснок, соль, специи, сухари Панко",
      "weight": "840 г",
      "price": 29,
      "image": "photos/0196862e88a877c5b4b037a6b68dd86f.jpg"
    },
    {
      "id": 157,
      "categoryId": "cat-myasnye",
      "name": "Зразы с ветчиной и сыром",
      "ingredients": "куриный фарш, лук репчатый, соль, специи, яйцо, ветчина, сыр",
      "weight": "800 г",
      "price": 36,
      "image": "photos/0196c9498a467946816345da36013307.jpg"
    },
    {
      "id": 158,
      "categoryId": "cat-myasnye",
      "name": "Куриные гнездышки",
      "ingredients": "фарш куриный, соль, специи, панировочные сухари, лук, шпинат, сыр моцарелла, майонез, яйцо",
      "weight": "700 г",
      "price": 34,
      "image": "photos/0197c7ddf36371479c911054d020ba68.jpg"
    },
    {
      "id": 159,
      "categoryId": "cat-myasnye",
      "name": "Мясные лодочки с луком и яйцом",
      "ingredients": "фарш свинина-говядина, крупа манная, яйцо, сыр творожный, лук зеленый, майонез, соль, специи",
      "weight": "600 г",
      "price": 32,
      "image": "photos/01968643f75d706c8b22a6aeb4f547ce.jpg"
    },
    {
      "id": 160,
      "categoryId": "cat-myasnye",
      "name": "Голубцы из пекинской капусты с грибами",
      "ingredients": "пекинская капуста, фарш свинина/курица, грибы, лук репчатый, морковь, рис, соль, специи",
      "weight": "1000 г",
      "price": 28,
      "image": "photos/0196629fa78b74de8397c78e1981caae.jpg"
    },
    {
      "id": 161,
      "categoryId": "cat-myasnye",
      "name": "Голубцы классические",
      "ingredients": "капуста, фарш свинина-курица, рис, соль, специи, лук репчатый, морковь",
      "weight": "1000 г",
      "price": 24,
      "image": "photos/0196cf550c3478b9bb97f1dfb0bc7a59.jpg"
    },
    {
      "id": 162,
      "categoryId": "cat-myasnye",
      "name": "Голубцы ленивые",
      "ingredients": "капуста, фарш свинина-говядина, рис, соль, специи, лук репчатый, морковь",
      "weight": "1000 г",
      "price": 22,
      "image": "photos/0197a71d012f70428aa8db6356a62127.jpg"
    },
    {
      "id": 163,
      "categoryId": "cat-myasnye",
      "name": "Конвертики из свинины",
      "ingredients": "свинина, соль, специи, лук репчатый, морковь, соленый огурец, сыр творожный, укроп, яйцо, мука, сухари Панко",
      "weight": "700 г",
      "price": 28,
      "image": "photos/0196ed2324c07792b21604624ea7da72.jpg"
    },
    {
      "id": 164,
      "categoryId": "cat-myasnye",
      "name": "Биточки из свинины с сыром",
      "ingredients": "фарш свиной, лук репчатый, яйцо, соль, специи, сыр российский, масло сливочное, укроп, мука, паприка, сухари Панко",
      "weight": "720 г",
      "price": 28,
      "image": "photos/01980cd0e9657215a9e67c92d1ec06c0.jpg"
    },
    {
      "id": 165,
      "categoryId": "cat-myasnye",
      "name": "Лазанья",
      "ingredients": "фарш свинина-говядина, лук репчатый, морковь, соль, специи, томатная паста, мука, масло растительное, сыр моцарелла, молоко",
      "weight": "1000 г",
      "price": 32,
      "image": "photos/0196c94c6be4783da99c5df7ed012d76.jpg"
    },
    {
      "id": 166,
      "categoryId": "cat-myasnye",
      "name": "Ножки фаршированные",
      "ingredients": "окорочок куриный, шампиньоны, лук репчатый, морковь, масло растительное, чеснок сушеный, соль, специи",
      "weight": "1000 г",
      "price": 38,
      "image": "photos/0198ce701a9977daacaa29a55afe5f14.jpg"
    },
    {
      "id": 167,
      "categoryId": "cat-myasnye",
      "name": "Мясной рулет",
      "ingredients": "свинина, лук репчатый, грибы, шпинат, сыр, соль, специи",
      "weight": "1300 г",
      "price": 115,
      "image": "photos/019afee32744731eae84597a42cfbae5.jpg"
    },
    {
      "id": 168,
      "categoryId": "cat-myasnye",
      "name": "Свинина с начинкой и сырной шапочкой",
      "ingredients": "свинина, сыр, перец болгарский, лук репчатый, майонез, соль, специи, чернослив",
      "weight": "1000 г",
      "price": 56,
      "image": "photos/019afee6267d727f81ccba34c06a2e19.jpg"
    },
    {
      "id": 169,
      "categoryId": "cat-myasnye",
      "name": "Куриная голень в беконе",
      "ingredients": "куриная голень, бекон, сыр, зелень, майонез, чеснок, соль, специи",
      "weight": "1200 г",
      "price": 56,
      "image": "photos/019afee4c84c7448acc09e810b9610fa.jpg"
    },
    {
      "id": 170,
      "categoryId": "cat-myasnye",
      "name": "Филе куриное под ананасом",
      "ingredients": "филе куриное, ананас, майонез, сыр, соль, специи",
      "weight": "1100 г",
      "price": 48,
      "image": "photos/019afee86ab57311ac0f154af2d64532.jpg"
    },
    {
      "id": 171,
      "categoryId": "cat-myasnye",
      "name": "Свинина с баклажанами и помидором",
      "ingredients": "свинина, баклажаны, помидор, сыр, соль, специи",
      "weight": "1100 г",
      "price": 56,
      "image": "photos/019ad85c8a4976de8ace4d43b35634d3.jpg"
    },
    {
      "id": 172,
      "categoryId": "cat-myasnye",
      "name": "Мясо по-французски",
      "ingredients": "свинина, лук репчатый, грибы, помидор, сыр, соль, специи",
      "weight": "1000 г",
      "price": 54,
      "image": "photos/019afee7ebfc742699638a4ade62fb68.jpg"
    },
    {
      "id": 173,
      "categoryId": "cat-myasnye",
      "name": "Куриное филе под сырной шапочкой",
      "ingredients": "филе, сыр, яйцо, соль, специи",
      "weight": "1000 г",
      "price": 48,
      "image": "photos/019afee77fb27966b4fca67c643fa5f6.jpg"
    },
    {
      "id": 174,
      "categoryId": "cat-myasnye",
      "name": "Рулетики из бедра с начинкой в беконе",
      "ingredients": "бедро куриное, сыр творожный, сыр классический, зелень, чеснок, специи, соль, бекон",
      "weight": "800 г",
      "price": 48,
      "image": "photos/019e01b0b41d77c1b2d7e702da32b458.jpg"
    },
    {
      "id": 175,
      "categoryId": "cat-rybnye",
      "name": "Хек под шубкой",
      "ingredients": "хек, яйцо, мука, сыр, укроп, лук репчатый, майонез, чеснок, соль, специи",
      "weight": "750 гр",
      "price": 34,
      "image": "photos/0198ce6c977a709c94eba7a506d2ae2c.jpg"
    },
    {
      "id": 176,
      "categoryId": "cat-rybnye",
      "name": "Котлеты рыбные",
      "ingredients": "",
      "weight": "700 г",
      "price": 28,
      "image": "photos/019a4eb7daba705eb3c1c9d7b66845af.jpg"
    },
    {
      "id": 177,
      "categoryId": "cat-supy",
      "name": "Солянка сборная мясная",
      "ingredients": "бульон, лук репчатый, огурец маринованный, томатная паста, маслины, мясная гастрономия (ветчина/сервелат/колбаски охотничьи копченые/колбаса сырокопченая), соль, сахар, специи",
      "weight": "1000 г",
      "price": 36,
      "image": "photos/019e4fd3a16d70cfb886107ed6713e11.jpg"
    },
    {
      "id": 178,
      "categoryId": "cat-supy",
      "name": "Борщ",
      "ingredients": "бульон, свекла отварная, лук репчатый, морковь, перец болгарский, картофель, томатная паста, филе куриное, соль, сахар, специи",
      "weight": "1000 г",
      "price": 20,
      "image": "photos/019e4fd309d87147ad9b0081f62e937c.jpg"
    },
    {
      "id": 179,
      "categoryId": "cat-supy",
      "name": "Рассольник по-ленинградски",
      "ingredients": "",
      "weight": "1000 г",
      "price": 20,
      "image": "photos/019e4fd43d0477eaaa21dd0fbf9f8190.jpg"
    },
    {
      "id": 180,
      "categoryId": "cat-supy",
      "name": "Гороховый суп с копченостями",
      "ingredients": "горох, картофель, лук репчатый, морковь, бекон",
      "weight": "1000 г",
      "price": 26,
      "image": "photos/019e25b7ed0076abafd0bec7e09b737c.jpg"
    },
    {
      "id": 181,
      "categoryId": "cat-supy",
      "name": "Крем-суп из шампиньонов",
      "ingredients": "",
      "weight": "1600 г",
      "price": 44,
      "image": "photos/0199e907a667753986d1767eeaba2c6b.jpg"
    },
    {
      "id": 182,
      "categoryId": "cat-supy",
      "name": "Чечевичный с курицей и томатами",
      "ingredients": "",
      "weight": "1600 г",
      "price": 34,
      "image": "photos/0199e9082e44798aba24e705fa3347ee.jpg"
    },
    {
      "id": 183,
      "categoryId": "cat-supy",
      "name": "Тыквенный с курицей",
      "ingredients": "",
      "weight": "1600 г",
      "price": 24,
      "image": "photos/0199e93bcb1c7314a39a98eb33d24b1e.jpg"
    },
    {
      "id": 184,
      "categoryId": "cat-ovoshchnye",
      "name": "Картофельные оладьи с мясом",
      "ingredients": "Состав: фарш свинина/курица, лук репчатый, картофель, яйцо, соль, специи, мука, сметана",
      "weight": "1200 гр",
      "price": 32,
      "image": "photos/0197788af11e70d8a3ccfbdc21e529d0.jpg"
    },
    {
      "id": 185,
      "categoryId": "cat-ovoshchnye",
      "name": "Перец фаршированный булгуром",
      "ingredients": "перец болгарский, булгур, лук репчатый , морковь, шампиньоны, фарш свинина, сыр, соль, специи",
      "weight": "",
      "price": 30,
      "image": "photos/01978454542874c08db560b85ffb712b.jpg"
    },
    {
      "id": 186,
      "categoryId": "cat-vypechka",
      "name": "Мини-пицца",
      "ingredients": "Состав: мука, молоко, вода, соль, сахар, дрожжи, сливочное масло, ветчина, помидор, сыр, кетчуп, майонез",
      "weight": "12 шт",
      "price": 34,
      "image": "photos/019677cfbd73790e9f718800c0219d7c.jpg"
    }
  ],
  "reviews": [
    {
      "name": "",
      "event": "",
      "text": "Мария, спасибо Вам огромное. Все сказали, что очень вкусно, вкуснейших вареников не ели. Огромное-огромное Вам спасибо! Обязательно попробуем все♡"
    },
    {
      "name": "",
      "event": "",
      "text": "Марина они восхитительны. Спасибо огромное, что выручила"
    },
    {
      "name": "",
      "event": "",
      "text": "Хотела вам ещё сказать большое спасибо за ваш труд. Настолько грамотно рассчитали количество закусок и очень красиво получилось. Все сказали очень вкусное спасибо что заморочились и купили специально досточки и приехали сами накрыли)) однозначно буду вас рекомендовать всем"
    },
    {
      "name": "",
      "event": "",
      "text": "Здравствуйте Я в большом восторге от ваших блюд. Все такое красивое, аккуратное, а главное потрясающе вкусное. Я пробовала блюда у разных мастеров фуршета и у нас в городе и в других, вкуснее чем у вас не встречала. Мне и гостям очень-очень понравилось. -Салатик с баклажанами, который вы сделали в подарок мой фаворит, также как и бутерброды с паштетом. А мой трехлетка очень оценил тарталетки с грушей и дорблю. Друзья мужа были а восторге от свинины с баклажанами, я не успела ее разогреть, как расхватали. И просили еще. Я очень довольна, что обратилась к вам и обязательно буду обращаться еще."
    },
    {
      "name": "",
      "event": "",
      "text": "Спасибо большое, все Обалденно было вкусно. Все гости были в восторге."
    },
    {
      "name": "",
      "event": "",
      "text": "Марина, доброе утро. Спасибо за вашу работу. Всё очень вкусно, достойно и красиво."
    },
    {
      "name": "",
      "event": "",
      "text": "Доброе утро Марина. Хочу сказать Вам большое спасибо за ваши шедевры, все очень вкусно, гости были в восторге и детям очень понравилось. И ещё раз Вам огромное спасибо за ваш труд, удачи вам в вашем творчестве, здоровья и побольше блогадарных клиентов."
    }
  ],
  "faq": [
    {
      "q": "Сколько будет стоить стол на 10 человек?",
      "a": "Ориентир — от 200 рублей на фуршетный стол на 10 гостей: зависит от состава (канапе, тарталетки, горячее, сладкое). Соберите меню в корзине на сайте — увидите точную сумму, а если нужно уложиться в конкретный бюджет, напишите или позвоните: соберём вариант под ваши деньги."
    },
    {
      "q": "За сколько дней нужно заказывать?",
      "a": "Чем раньше, тем лучше — особенно на популярные даты (пятница, суббота, праздники). Оптимально за 3–5 дней. Но напишите в любом случае: если загруженность позволяет, сделаем и срочно."
    },
    {
      "q": "Вы только готовите или сервируете стол полностью?",
      "a": "Работаем под ключ: привозим блюда в аккуратной подаче, вместе обсудим раскладку и оформление стола. Точный формат (только доставка или полная сервировка) согласуем при заказе."
    },
    {
      "q": "Есть ли доставка?",
      "a": "Да, доставляем по Мозырю, Мозырьскому району и Калинковичам. При заказе от 200 рублей доставка по Мозырю — бесплатная."
    },
    {
      "q": "Можно собрать полностью своё меню?",
      "a": "Конечно. Можете взять готовые боксы и наборы, собрать стол по блюдам из каталога или написать нам — предложим варианты под ваш праздник и бюджет."
    },
    {
      "q": "Что есть для детского праздника?",
      "a": "Есть отдельное детское меню: мини-пиццы, мини-бургеры, наггетсы, сырные шарики, рулетики из лаваша и индивидуальные боксы для каждого ребёнка."
    },
    {
      "q": "Как оформить заказ?",
      "a": "Проще всего — собрать блюда в корзине на сайте и нажать «Заказать в Telegram»: состав заказа подставится в сообщение автоматически. Также можно просто позвонить или написать в Instagram."
    }
  ]
};
