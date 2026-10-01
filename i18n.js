/**
 * DOM AQUINO RESTAURANTE - INTERNATIONALIZATION (i18n)
 * Supports: Portuguese (pt), English (en), Spanish (es)
 */

const GASTRO_TRANSLATIONS = {
  pt: {
    brand_subtitle: 'RESTAURANTE E PIZZARIA',
    top_info: 'Aberto hoje das <strong>11h às 23h</strong> &bull; Ponta Negra, Natal/RN',
    top_highlight: '🌅 Vista para o Morro do Careca',
    nav_local: 'O Local',
    nav_structure: 'Estrutura & Lazer',
    nav_gastronomy: 'Gastronomia',
    nav_desserts: 'Sobremesas',
    nav_reviews: 'Depoimentos',
    nav_info: 'Informações',
    nav_contact: 'Contato',
    nav_whatsapp: 'Fale no WhatsApp',
    
    // Drawer
    drawer_home: 'Início',
    drawer_local: 'O Local & Conceito',
    drawer_structure: 'Estrutura & Lazer',
    drawer_gastronomy: 'Nossa Gastronomia',
    drawer_desserts: 'Sobremesas da Casa',
    drawer_reviews: 'O Que Dizem Nossos Clientes',
    drawer_info: 'Horários & Como Chegar',
    drawer_contact: 'Reservas & Contato',
    drawer_cta: 'Conversar no WhatsApp',
    drawer_note: '📱 (84) 98631-2222 &bull; Ponta Negra, Natal/RN',
    drawer_lang_title: 'Idioma / Language',

    // Hero
    hero_badge: 'Beira-Mar de Ponta Negra &bull; Natal / RN',
    hero_title: 'O Seu Refúgio de <em>Sol, Gastronomia</em> e Lazer em Natal.',
    hero_subtext: 'Um ambiente acolhedor e pé na areia com <strong>deck ao ar livre</strong>, vista panorâmica privilegiada para o <strong>Morro do Careca</strong>, frutos do mar frescos e coquetelaria autoral.',
    pill_since: '📅 Desde setembro de 2019',
    hero_cta_wa: 'Falar com a Recepção no WhatsApp',
    hero_cta_space: 'Conhecer o Espaço',
    hl_deck: 'Deck ao ar livre pé na areia',
    hl_view: 'Vista para o Morro do Careca',
    hl_hours: 'Aberto diariamente (11h às 23h)',

    // About
    about_kicker: 'O LOCAL &bull; CONCEITO',
    about_headline: 'Mais Que um Restaurante.<br>Um <em>Ponto de Encontro</em> em Ponta Negra.',
    about_lead: 'O <strong>Dom Aquino Restaurante</strong> nasceu para oferecer o equilíbrio perfeito entre o ritmo relaxante das férias e a excelência da gastronomia potiguar.',
    about_body: 'Localizado na Praia de Ponta Negra, nosso espaço é arejado, seguro e banhado pela brisa do Atlântico. Aqui, famílias, casais e viajantes desfrutam de um almoço e jantar tranquilos, descansam no deck e contemplam o pôr do sol mais bonito de Natal brindando com drinks autorais.',
    stat1_label: 'Pé na areia em Ponta Negra',
    stat2_num: '7 dias',
    stat2_label: 'Aberto ininterruptamente',
    stat3_label: 'Aprovado pelos visitantes',
    feat1_title: 'Localização Privilegiada',
    feat1_desc: 'Situado a poucos passos da praia de Ponta Negra, com acesso fácil e vista direta para o Morro do Careca.',
    feat2_title: 'Conforto &amp; Brisa do Mar',
    feat2_desc: 'Nosso deck ao ar livre está à sua disposição. Venha almoçar, jantar, relaxar com a família e contemplar o mar nas espreguiçadeiras.',
    feat3_title: 'Gastronomia Regional Autoral',
    feat3_desc: 'Pratos fartos e selecionados de camarão, polvo grelhado, peixes frescos e o melhor da tradição do sertão potiguar.',
    feat4_title: 'Eventos &amp; Comemorações',
    feat4_desc: 'Espaço preparado para receber celebrações de aniversário, encontros em família e mini-weddings com vista para o mar.',

    // Structure
    struct_kicker: 'ESTRUTURA COMPLETA',
    struct_headline: 'Desacelere o Tempo à Beira-Mar',
    struct_subtext: 'Preparamos cada detalhe para você passar o dia inteiro com total conforto, hospitalidade e bem-estar.',
    card1_badge: 'Deck &amp; Coquetelaria',
    card1_title: 'Sunset no Deck',
    card1_text: 'O fim de tarde no Dom Aquino é um espetáculo à parte. Saboreie coquetéis clássicos e autorais enquanto o sol se põe no horizonte do mar potiguar.',
    card2_badge: 'Deck &amp; Conforto',
    card2_title: 'Lounge Beira-Mar',
    card2_text: 'Nossos clientes desfrutam de um lounge aconchegante com deck beira-mar. Relaxe sob o sol de Natal e sinta a brisa refrescante enquanto seus pedidos são servidos na mesa.',
    card3_badge: 'Vista Panorâmica',
    card3_title: 'Vista do Morro do Careca',
    card3_text: 'Desfrute de uma das vistas mais disputadas de Natal. O cenário natural perfeito para fotos inesquecíveis e momentos de puro descanso.',

    // Gastronomy & Filters
    gastro_kicker: 'NOSSA CULINÁRIA',
    gastro_headline: 'A Fusão Entre o Mar e o Sertão Potiguar',
    gastro_subtext: 'Ingredientes frescos e pratos generosos preparados com consultoria de chef para encantar o seu paladar.',
    filter_all: 'Todos os Destaques',
    filter_shrimp: 'Camarões &amp; Frutos do Mar',
    filter_regional: 'Carnes &amp; Regional',
    filter_pizzas: '🍕 Pizzas &amp; Hambúrgueres',
    filter_snacks: 'Petiscos &amp; Drinks',

    dish1_badge: 'Especialidade da Casa',
    dish1_name: 'Camarão Crocante Dom Aquino',
    dish1_desc: 'Camarões graúdos selecionados empanados em crosta dourada especial, servidos com molhos artesanais da casa, limão fresco e toque de ervas finas.',
    dish1_tag1: 'Serve 2 a 3 pessoas',
    dish1_tag2: 'Crocância Perfeita',

    dish2_badge: 'Experiência na Taça',
    dish2_name: 'Camarão Especial na Taça',
    dish2_desc: 'Apresentação exclusiva e sofisticada de camarões ao molho especial da casa com toques cítricos, ervas frescas e sabor marcante à beira-mar.',
    dish2_tag1: 'Entrada Premium',
    dish2_tag2: 'Receita Exclusiva',

    dish3_badge: 'Almoço Inesquecível',
    dish3_name: 'Pão Italiano com Frutos do Mar',
    dish3_desc: 'Pão rústico italiano artesanal recheado com gratinado cremoso de camarões graúdos e frutos do mar frescos, finalizado com queijo dourado maçaricado.',
    dish3_tag1: 'Serve 2 pessoas',
    dish3_tag2: 'Gratinado Especial',

    dish4_badge: 'Tradição Potiguar',
    dish4_name: 'Prato Mar &amp; Sertão',
    dish4_desc: 'A união autêntica dos maiores sabores do Rio Grande do Norte: risoto cremoso gratinado com camarões selecionados, carne de sol artesanal desfiada na manteiga da terra e macaxeira frita dourada e crocante.',
    dish4_tag1: 'Serve 2 a 3 pessoas',
    dish4_tag2: 'Tradição Potiguar',

    dish5_badge: 'Culinária Regional',
    dish5_name: 'Baião de Dois com Carne Nobre',
    dish5_desc: 'Baião de dois cremoso preparado com queijo coalho tostado na chapa e temperos da terra, acompanhado de suculento bife de carne nobre grelhada no ponto ideal.',
    dish5_tag1: 'Serve 2 pessoas',
    dish5_tag2: 'Queijo Coalho &amp; Carne',

    dish6_badge: 'Frescor do Atlântico',
    dish6_name: 'Peixe ao Molho de Camarão &amp; Purê',
    dish6_desc: 'Filé alto de peixe nobre grelhado coberto por um generoso e aveludado molho de camarões, servido com arroz branco soltinho e purê de batatas artesanal.',
    dish6_tag1: 'Serve 2 pessoas',
    dish6_tag2: 'Peixe do Dia Fresco',

    dish7_badge: 'Clássico da Praia',
    dish7_name: 'Camarão Alho &amp; Óleo com Fritas',
    dish7_desc: 'Camarões inteiros salteados no azeite extravirgem com lâminas de alho dourado e cheiro-verde fresco, servidos com batatas fritas crocantes e gomos de limão.',
    dish7_tag1: 'Ideal para Compartilhar',
    dish7_tag2: 'Deck &amp; Praia',

    dish8_badge: 'Forno &amp; Massa Leve',
    dish8_name: 'Pizza Artesanal Forneada',
    dish8_desc: 'Massa leve de longa fermentação aberta à mão, molho artesanal de tomates selecionados, queijo farto derretido e recheios generosos. O clima perfeito para reunir a turma e aproveitar a noite!',
    dish8_tag1: 'Massa Leve &amp; Crocante',
    dish8_tag2: 'Para Compartilhar',

    dish_burger_badge: '100% Artesanal',
    dish_burger_name: 'Hambúrguer Artesanal da Casa',
    dish_burger_desc: 'Blend nobre grelhado no ponto da perfeição, camadas generosas de queijo cremoso derretido, fatias crocantes de bacon e molho especial em pão brioche dourado e macio. Sabor irresistível!',
    dish_burger_tag1: 'Blend Nobre Grelhado',
    dish_burger_tag2: 'Bacon Crocante',

    pb_banner_badge: 'Cardápio Noturno &amp; Artesanal',
    pb_banner_title: 'Sua Noite com Mais Sabor: <em>Pizzas Forneadas</em> &amp; <em>Hambúrgueres Artesanais</em>',
    pb_banner_desc: 'Reúna a família e os amigos para saborear pizzas irresistíveis de massa leve e hambúrgueres artesanais suculentos com bacon crocante e queijo derretido, no melhor clima beira-mar de Ponta Negra.',
    pb_banner_btn: '📲 Pedir / Reservar no WhatsApp',

    dish9_badge: 'Alta Gastronomia',
    dish9_name: 'Linguine Frutos do Mar &amp; Polvo Grelhado',
    dish9_desc: 'Massa artesanal fresca salteada no azeite extravirgem com tentáculos de polvo grelhados no ponto perfeito, camarões graúdos, anéis de lula, tomates cereja assados e manjericão fresco.',
    dish9_tag1: 'Serve 2 pessoas',
    dish9_tag2: 'Polvo Grelhado',

    dish10_badge: 'Petisco Crocante',
    dish10_name: 'Pastéis Crocantes de Camarão',
    dish10_desc: 'Pastéis artesanais sequinhos e crocantes, recheados generosamente com camarões temperados e requeijão cremoso da terra. Perfeito para acompanhar um chopp gelado.',
    dish10_tag1: 'Porção com 4 unidades',
    dish10_tag2: 'Massa Artesanal',

    dish11_badge: 'Petisco do Deck',
    dish11_name: 'Iscas de Filé com Batata Frita',
    dish11_desc: 'Tiras suculentas e macias de filé mignon aceboladas salteadas na manteiga de garrafa, servidas com batatas fritas douradas e crocantes.',
    dish11_tag1: 'Para Compartilhar',
    dish11_tag2: 'Filé Nobre',

    dish12_badge: 'Coquetelaria Autoral',
    dish12_name: 'Coquetelaria Tropical &amp; Sunset',
    dish12_desc: 'Carta exclusiva de coquetéis refrescantes preparados para harmonizar com a praia: Piña Colada artesanal com flor cítrica, caipifrutas com frutas regionais (caju, maracujá e cajá) e gins tropicais.',
    dish12_tag1: 'Drinks Autorais',
    dish12_tag2: 'Frutas Frescas',

    callout_title: 'Quer conhecer o cardápio completo e as opções do dia?',
    callout_desc: 'Nossa equipe envia pelo WhatsApp a carta de petiscos, pratos principais, peixes do dia, pizzas noturnas e bebidas.',
    callout_btn: 'Solicitar Opções no WhatsApp',

    // Desserts
    dessert_kicker: 'CONFEITARIA DA CASA',
    dessert_headline: 'Sobremesas Que Marcam Momentos',
    dessert_subtext: 'Feitas diariamente na nossa cozinha para finalizar sua refeição com delicadeza e sabor.',
    des1_name: 'Cartola Dom Aquino',
    des1_desc: 'A mais tradicional sobremesa nordestina: bananas maduras flambadas na manteiga de garrafa com queijo de manteiga maçaricado, canela aromática e sorvete com cereja.',
    des2_name: 'Abacaxi Flambado no Mar',
    des2_desc: 'Fatia alta de abacaxi caramelizado e maçaricado, servido quente com sorvete artesanal derretendo e canela de frente para as águas de Ponta Negra.',
    des3_name: 'Petit Gateau Artesanal',
    des3_desc: 'Bolo quente de chocolate nobre com centro líquido cremoso, acompanhado de sorvete de baunilha e calda de chocolate suave.',
    des4_name: 'Pudim de Leite Condensado',
    des4_desc: 'Textura sedosa e delicada, feito com a receita tradicional da casa e coberto com calda dourada de caramelo brilhante.',

    // Reviews
    reviews_kicker: 'PROVA SOCIAL &bull; INSTAGRAM',
    reviews_headline: 'Aprovado Por Quem Vive a Experiência',
    reviews_subtext: 'Veja o que clientes e visitantes dizem sobre nossa gastronomia, atendimento e atmosfera nas redes sociais:',
    quote1: '&ldquo;Lugar maravilhoso. Amei o atendimento, as comidas, as músicas, o ambiente incrível!&rdquo;',
    quote2: '&ldquo;Melhor lugar de Ponta Negra! Vale muito a pena, em breve esperamos voltar.&rdquo;',
    quote3: '&ldquo;Eu recomendo, sou fã deste restaurante. Pratos maravilhosos e ótimo atendimento.&rdquo;',
    client_meta: '📸 Comentários reais &bull; @domaquinonatalrn',

    // Info
    info_kicker: 'LOCALIZAÇÃO &bull; MAPA INTERATIVO',
    info_headline: 'Fácil de Encontrar, Impossível de Esquecer',
    info_subtext: 'Estamos no coração de Ponta Negra, a passos da praia. Navegue no mapa interativo e trace sua rota até o Dom Aquino:',
    pill_hours_t: 'Horário de Funcionamento',
    pill_hours_d: 'Segunda a Domingo &bull; 11:00 às 23:00 (Ininterrupto)',
    pill_addr_t: 'Endereço em Ponta Negra',
    pill_addr_d: 'Rua Pastor Rodolfo Beuttenmuller, 9045 A &bull; Natal/RN',
    pill_deck_t: 'Deck &amp; Lounge Beira-Mar',
    pill_deck_d: 'Mesas arejadas e espreguiçadeiras confortáveis com vista direta para a praia',
    pill_park_t: 'Acesso &amp; Estacionamento',
    pill_park_d: 'Fácil acesso de Uber/táxi e vagas na vizinhança',
    map_ref: '🌊 <em>A poucos passos da areia com vista do Morro do Careca.</em>',
    btn_gmaps: '📍 Traçar Rota no Google Maps',
    btn_waze: '🚗 Traçar Rota no Waze',
    btn_wa_help: '💬 Ajuda com localização no WhatsApp &rarr;',

    // Contact
    contact_kicker: 'GARANTA SEU MOMENTO',
    contact_headline: 'Planeje Sua Visita ao Dom Aquino',
    contact_subtext: 'Para garantir uma mesa com a melhor vista para o mar ou tirar dúvidas sobre o local, preencha abaixo ou fale direto no WhatsApp.',
    f_name: 'Seu Nome',
    f_phone: 'Seu WhatsApp',
    f_date: 'Data Desejada',
    f_time: 'Horário Previsto',
    f_people: 'Número de Pessoas',
    f_obs: 'Mensagem ou Ocasião Especial (Opcional)',
    f_submit: 'Confirmar Informações no WhatsApp Agora',

    // Footer
    footer_desc: 'Restaurante e espaço de lazer à beira-mar da Praia de Ponta Negra em Natal/RN. Culinária potiguar autoral, deck lounge para clientes e vista panorâmica para o Morro do Careca.',
    footer_social: '📸 Siga no Instagram: <strong>@domaquinonatalrn</strong>',
    footer_nav_t: 'Navegação',
    footer_contact_t: 'Atendimento &amp; Endereço',
    footer_hours_lbl: 'Horário:',
    footer_hours_val: 'Todos os dias, 11h às 23h',
    footer_addr_lbl: 'Endereço:',
    footer_wa_btn: '💬 WhatsApp: (84) 98631-2222',
    footer_rights: '&copy; 2026 Dom Aquino Restaurante. Todos os direitos reservados. Ponta Negra, Natal - RN.',
    footer_credits: 'Site Institucional Informativo &bull; Ponta Negra',
    lightbox_hint: 'Toque fora ou no X para fechar',

    // Pre-filled WhatsApp message
    wa_default_msg: 'Olá! Vim pelo site do Dom Aquino Restaurante e gostaria de informações.'
  },

  en: {
    brand_subtitle: 'RESTAURANT & PIZZERIA',
    top_info: 'Open today from <strong>11 AM to 11 PM</strong> &bull; Ponta Negra, Natal/RN',
    top_highlight: '🌅 Panoramic ocean view',
    nav_local: 'The Venue',
    nav_structure: 'Leisure & Structure',
    nav_gastronomy: 'Gastronomy',
    nav_desserts: 'Desserts',
    nav_reviews: 'Reviews',
    nav_info: 'Information',
    nav_contact: 'Contact',
    nav_whatsapp: 'Chat on WhatsApp',

    // Drawer
    drawer_home: 'Home',
    drawer_local: 'The Venue & Concept',
    drawer_structure: 'Leisure & Structure',
    drawer_gastronomy: 'Our Gastronomy',
    drawer_desserts: 'House Desserts',
    drawer_reviews: 'Guest Testimonials',
    drawer_info: 'Hours & Directions',
    drawer_contact: 'Reservations & Contact',
    drawer_cta: 'Chat on WhatsApp',
    drawer_note: '📱 (84) 98631-2222 &bull; Ponta Negra, Natal/RN',
    drawer_lang_title: 'Idioma / Language',

    // Hero
    hero_badge: 'Ponta Negra Beachfront &bull; Natal / RN',
    hero_title: 'Your Haven of <em>Sun, Cuisine</em> and Seaside Leisure.',
    hero_subtext: 'A welcoming beachfront atmosphere with <strong>relaxing open-air deck</strong>, prime panoramic views of <strong>Morro do Careca</strong>, fresh seafood, and handcrafted cocktails.',
    pill_since: '📅 Since September 2019',
    hero_cta_wa: 'Chat with Reception on WhatsApp',
    hero_cta_space: 'Explore the Venue',
    hl_deck: 'Open-air seaside deck',
    hl_view: 'Stunning view of Morro do Careca',
    hl_hours: 'Open daily (11 AM to 11 PM)',

    // About
    about_kicker: 'THE VENUE &bull; CONCEPT',
    about_headline: 'More Than a Restaurant.<br>A <em>Gathering Place</em> in Ponta Negra.',
    about_lead: '<strong>Dom Aquino Restaurant</strong> was created to offer the perfect balance between vacation relaxation and the excellence of authentic northeastern cuisine.',
    about_body: 'Located directly on Ponta Negra Beach, our space is airy, secure, and blessed by the Atlantic breeze. Here, families, couples, and travelers enjoy a serene lunch and dinner, unwind on our deck, and watch the most stunning sunset in Natal with signature cocktails.',
    stat1_label: 'Beachfront in Ponta Negra',
    stat2_num: '7 days',
    stat2_label: 'Open without interruption',
    stat3_label: 'Guest approval rating',
    feat1_title: 'Prime Beach Location',
    feat1_desc: 'Just steps away from the sand of Ponta Negra, with easy access and direct views of Morro do Careca.',
    feat2_title: 'Comfort &amp; Ocean Breeze',
    feat2_desc: 'Our open-air deck is at your service. Come have lunch, dinner, relax with your loved ones, and gaze at the sea from comfortable loungers.',
    feat3_title: 'Signature Regional Cuisine',
    feat3_desc: 'Generous and flavorful platters of fresh shrimp, grilled octopus, catch of the day, and authentic northeastern delicacies.',
    feat4_title: 'Events &amp; Celebrations',
    feat4_desc: 'The ideal setting for birthdays, family reunions, and intimate celebrations overlooking the sea.',

    // Structure
    struct_kicker: 'FULL STRUCTURE',
    struct_headline: 'Slow Down Time by the Sea',
    struct_subtext: 'We carefully designed every detail so you can spend the entire day with total comfort, warm hospitality, and pure relaxation.',
    card1_badge: 'Deck &amp; Cocktails',
    card1_title: 'Sunset on the Deck',
    card1_text: 'Late afternoon at Dom Aquino is an unforgettable spectacle. Sip classic and signature cocktails as the golden sun dips into the ocean horizon.',
    card2_badge: 'Deck &amp; Comfort',
    card2_title: 'Seaside Lounge',
    card2_text: 'Our guests enjoy a welcoming open-air lounge right on the beachfront deck. Relax under the Natal sunshine and feel the fresh sea breeze while food is served at your table.',
    card3_badge: 'Panoramic View',
    card3_title: 'View of Morro do Careca',
    card3_text: 'Take in one of Natal’s most iconic postcard views. The perfect natural backdrop for memorable photos and restful seaside moments.',

    // Gastronomy & Filters
    gastro_kicker: 'OUR CUISINE',
    gastro_headline: 'The Fusion of the Sea and Northeastern Tradition',
    gastro_subtext: 'Fresh local ingredients and generous platters crafted with chef guidance to enchant your taste buds.',
    filter_all: 'All Specialties',
    filter_shrimp: 'Shrimp &amp; Seafood',
    filter_regional: 'Steak &amp; Regional',
    filter_pizzas: '🍕 Pizzas &amp; Burgers',
    filter_snacks: 'Finger Food &amp; Cocktails',

    dish1_badge: 'House Specialty',
    dish1_name: 'Dom Aquino Crispy Shrimp',
    dish1_desc: 'Selected jumbo shrimp coated in a golden artisan crust, served with signature house dipping sauces, fresh lime, and aromatic herbs.',
    dish1_tag1: 'Serves 2 to 3 people',
    dish1_tag2: 'Crispy Perfection',

    dish2_badge: 'Cocktail Glass Experience',
    dish2_name: 'Special Shrimp Cocktail',
    dish2_desc: 'Exclusive and elegant presentation of succulent shrimp tossed with house sauce, citrus accents, and fresh coastal seasoning.',
    dish2_tag1: 'Premium Starter',
    dish2_tag2: 'Exclusive Recipe',

    dish3_badge: 'Unforgettable Lunch',
    dish3_name: 'Seafood Gratin Italian Bread Bowl',
    dish3_desc: 'Rustic artisan bread bowl filled with a creamy, bubbling gratin of jumbo shrimp and fresh seafood, topped with golden broiled cheese.',
    dish3_tag1: 'Serves 2 people',
    dish3_tag2: 'Special Gratin',

    dish4_badge: 'Regional Tradition',
    dish4_name: 'Sea &amp; Heartland Platter',
    dish4_desc: 'An authentic feast of Rio Grande do Norte’s finest flavors: creamy au gratin shrimp risotto, artisan shredded sun-cured beef tossed in farm butter, and golden crispy cassava.',
    dish4_tag1: 'Serves 2 to 3 people',
    dish4_tag2: 'Regional Tradition',

    dish5_badge: 'Northeastern Cuisine',
    dish5_name: 'Northeastern Baião de Dois &amp; Steak',
    dish5_desc: 'Creamy seasoned rice and beans with seared curd cheese, paired with a juicy, perfectly grilled prime cut steak.',
    dish5_tag1: 'Serves 2 people',
    dish5_tag2: 'Curd Cheese &amp; Beef',

    dish6_badge: 'Fresh from the Atlantic',
    dish6_name: 'Grilled Fish in Shrimp Sauce &amp; Puree',
    dish6_desc: 'Thick grilled noble fish fillet draped in a velvety and generous shrimp sauce, served with fluffy white rice and creamy mashed potatoes.',
    dish6_tag1: 'Serves 2 people',
    dish6_tag2: 'Catch of the Day',

    dish7_badge: 'Beach Classic',
    dish7_name: 'Garlic Shrimp with Crispy Fries',
    dish7_desc: 'Whole shrimp sautéed in extra virgin olive oil with golden garlic crisps and fresh parsley, served with golden crunchy french fries.',
    dish7_tag1: 'Perfect for Sharing',
    dish7_tag2: 'Deck &amp; Beach',

    dish8_badge: 'Oven-Baked &amp; Light Dough',
    dish8_name: 'Artisanal Baked Pizza',
    dish8_desc: 'Hand-stretched slow-fermented light dough topped with ripe tomato sauce, generous melted mozzarella and irresistible toppings. Perfect to share with friends and enjoy the evening!',
    dish8_tag1: 'Crispy &amp; Light Dough',
    dish8_tag2: 'Great for Sharing',

    dish_burger_badge: '100% Artisanal',
    dish_burger_name: 'House Artisanal Burger',
    dish_burger_desc: 'Prime beef blend grilled to perfection, generous melted creamy cheese, crispy bacon strips, and house specialty sauce in a golden brioche bun. Unmatched flavor!',
    dish_burger_tag1: 'Prime Grilled Beef',
    dish_burger_tag2: 'Crispy Bacon',

    pb_banner_badge: 'Night Menu &amp; Artisanal Specials',
    pb_banner_title: 'Flavorful Evenings: <em>Baked Pizzas</em> &amp; <em>Artisanal Burgers</em>',
    pb_banner_desc: 'Gather friends and family to enjoy irresistible light-dough pizzas and juicy handmade burgers with Ponta Negra’s breezy oceanfront atmosphere!',
    pb_banner_btn: '📲 Order / Reserve on WhatsApp',

    dish9_badge: 'Fine Dining',
    dish9_name: 'Seafood Linguine &amp; Grilled Octopus',
    dish9_desc: 'Fresh handmade pasta tossed in extra virgin olive oil with tender grilled octopus tentacles, jumbo shrimp, calamari rings, roasted cherry tomatoes, and fresh basil.',
    dish9_tag1: 'Serves 2 people',
    dish9_tag2: 'Grilled Octopus',

    dish10_badge: 'Crispy Appetizer',
    dish10_name: 'Crispy Shrimp Pastéis',
    dish10_desc: 'Golden, crispy Brazilian pastries packed with seasoned shrimp and creamy artisanal cheese. The ultimate companion for a cold beer by the sea.',
    dish10_tag1: 'Portion of 4 units',
    dish10_tag2: 'Handmade Pastry',

    dish11_badge: 'Deck Favorite',
    dish11_name: 'Tender Sautéed Beef &amp; Fries',
    dish11_desc: 'Succulent strips of beef tenderloin sautéed with onions in regional clarified butter, served with crisp golden fries.',
    dish11_tag1: 'Ideal to Share',
    dish11_tag2: 'Prime Beef Cut',

    dish12_badge: 'Signature Cocktails',
    dish12_name: 'Tropical &amp; Sunset Cocktails',
    dish12_desc: 'Exclusive list of refreshing cocktails made to pair with the sea: handcrafted Piña Colada with citrus blossom, fresh regional fruit caipirinhas (cashew, passion fruit, cajá), and premium gins.',
    dish12_tag1: 'Signature Drinks',
    dish12_tag2: 'Fresh Fruits',

    callout_title: 'Would you like to view our full menu and daily specials?',
    callout_desc: 'Our team will gladly send our complete list of appetizers, main seafood platters, fresh catch of the day, evening artisan pizzas, and drinks on WhatsApp.',
    callout_btn: 'Request Menu on WhatsApp',

    // Desserts
    dessert_kicker: 'HOUSE PASTRY',
    dessert_headline: 'Desserts That Create Memories',
    dessert_subtext: 'Prepared fresh every day in our kitchen to conclude your dining experience with sweetness and finesse.',
    des1_name: 'Dom Aquino Cartola',
    des1_desc: 'The most iconic northeastern Brazilian dessert: ripe bananas flambéed in farm butter with melted local curd cheese, cinnamon, and artisan ice cream topped with cherry.',
    des2_name: 'Seaside Flambéed Pineapple',
    des2_desc: 'Thick caramelized pineapple slice served warm with artisanal melting ice cream and cinnamon right in front of the Ponta Negra waters.',
    des3_name: 'Artisan Petit Gâteau',
    des3_desc: 'Warm noble chocolate cake with a molten, creamy center, served with gourmet vanilla ice cream and silky chocolate ganache.',
    des4_name: 'Traditional Caramel Flan',
    des4_desc: 'Silky, delicate condensed milk flan crafted following our traditional house recipe and draped in a glossy golden caramel sauce.',

    // Reviews
    reviews_kicker: 'SOCIAL PROOF &bull; INSTAGRAM',
    reviews_headline: 'Approved by Those Who Live the Experience',
    reviews_subtext: 'See what our visitors and food lovers say about our cuisine, hospitality, and seaside atmosphere:',
    quote1: '&ldquo;Wonderful place! Loved the hospitality, delicious food, music, and breathtaking atmosphere!&rdquo;',
    quote2: '&ldquo;Best place in Ponta Negra! Completely worth every minute, we cannot wait to come back.&rdquo;',
    quote3: '&ldquo;I highly recommend it, huge fan of this restaurant. Superb dishes and exceptional service.&rdquo;',
    client_meta: '📸 Real guest reviews &bull; @domaquinonatalrn',

    // Info
    info_kicker: 'LOCATION &bull; INTERACTIVE MAP',
    info_headline: 'Easy to Find, Impossible to Forget',
    info_subtext: 'We are situated in the heart of Ponta Negra, right by the beach. Check the interactive map and get directions to Dom Aquino:',
    pill_hours_t: 'Opening Hours',
    pill_hours_d: 'Monday to Sunday &bull; 11:00 AM to 11:00 PM (Daily)',
    pill_addr_t: 'Ponta Negra Address',
    pill_addr_d: 'Rua Pastor Rodolfo Beuttenmuller, 9045 A &bull; Natal/RN',
    pill_deck_t: 'Beachfront Deck &amp; Lounge',
    pill_deck_d: 'Airy dining tables and comfortable sun loungers overlooking the beach',
    pill_park_t: 'Access &amp; Parking',
    pill_park_d: 'Easy access by Uber/taxi and street parking nearby',
    map_ref: '🌊 <em>Just steps from the sand with views of Morro do Careca.</em>',
    btn_gmaps: '📍 Get Directions on Google Maps',
    btn_waze: '🚗 Get Directions on Waze',
    btn_wa_help: '💬 Help with location on WhatsApp &rarr;',

    // Contact
    contact_kicker: 'SECURE YOUR EXPERIENCE',
    contact_headline: 'Plan Your Visit to Dom Aquino',
    contact_subtext: 'To secure a table with prime ocean views or ask any questions, fill in the fields below or message us directly on WhatsApp.',
    f_name: 'Your Full Name',
    f_phone: 'Your WhatsApp / Phone',
    f_date: 'Desired Date',
    f_time: 'Estimated Time',
    f_people: 'Number of Guests',
    f_obs: 'Special Request or Occasion (Optional)',
    f_submit: 'Confirm Reservation on WhatsApp Now',

    // Footer
    footer_desc: 'Beachfront restaurant and leisure destination on Ponta Negra Beach in Natal/RN. Signature regional cuisine, seaside deck lounge, and panoramic views of Morro do Careca.',
    footer_social: '📸 Follow on Instagram: <strong>@domaquinonatalrn</strong>',
    footer_nav_t: 'Navigation',
    footer_contact_t: 'Customer Service &amp; Address',
    footer_hours_lbl: 'Hours:',
    footer_hours_val: 'Every day, 11 AM to 11 PM',
    footer_addr_lbl: 'Address:',
    footer_wa_btn: '💬 WhatsApp: (84) 98631-2222',
    footer_rights: '&copy; 2026 Dom Aquino Restaurant. All rights reserved. Ponta Negra, Natal - RN.',
    footer_credits: 'Official Institutional Website &bull; Ponta Negra',
    lightbox_hint: 'Tap outside or press X to close',

    // Pre-filled WhatsApp message
    wa_default_msg: 'Hello! I visited the Dom Aquino Restaurant website and would like information/to make a reservation.'
  },

  es: {
    brand_subtitle: 'RESTAURANTE Y PIZZERÍA',
    top_info: 'Abierto hoy de <strong>11:00 a 23:00</strong> &bull; Ponta Negra, Natal/RN',
    top_highlight: '🌅 Vista al Morro do Careca',
    nav_local: 'El Lugar',
    nav_structure: 'Estructura y Ocio',
    nav_gastronomy: 'Gastronomía',
    nav_desserts: 'Postres',
    nav_reviews: 'Testimonios',
    nav_info: 'Información',
    nav_contact: 'Contacto',
    nav_whatsapp: 'Hablar en WhatsApp',

    // Drawer
    drawer_home: 'Inicio',
    drawer_local: 'El Lugar y Concepto',
    drawer_structure: 'Estructura y Ocio',
    drawer_gastronomy: 'Nuestra Gastronomía',
    drawer_desserts: 'Postres de la Casa',
    drawer_reviews: 'Opiniones de Clientes',
    drawer_info: 'Horarios y Ubicación',
    drawer_contact: 'Reservas y Contacto',
    drawer_note: '📱 (84) 98631-2222 &bull; Ponta Negra, Natal/RN',
    drawer_lang_title: 'Idioma / Language',

    // Hero
    hero_badge: 'Frente al Mar de Ponta Negra &bull; Natal / RN',
    hero_title: 'Su Refugio de <em>Sol, Gastronomía</em> y Descanso en Natal.',
    hero_subtext: 'Un ambiente acogedor frente al mar con <strong>deck al aire libre</strong>, vista panorámica privilegiada al <strong>Morro do Careca</strong>, mariscos frescos y coctelería de autor.',
    pill_since: '📅 Desde septiembre de 2019',
    hero_cta_wa: 'Hablar con Recepción en WhatsApp',
    hero_cta_space: 'Conocer las Instalaciones',
    hl_deck: 'Deck al aire libre frente al mar',
    hl_view: 'Vista al Morro do Careca',
    hl_hours: 'Abierto diariamente (11h a 23h)',

    // About
    about_kicker: 'EL LUGAR &bull; CONCEPTO',
    about_headline: 'Más Que un Restaurante.<br>Un <em>Punto de Encuentro</em> en Ponta Negra.',
    about_lead: '<strong>Dom Aquino Restaurante</strong> nació para ofrecer el equilibrio perfecto entre el descanso de las vacaciones y la excelencia culinaria potiguar.',
    about_body: 'Ubicado en la orilla de Ponta Negra, nuestro espacio es ventilado, seguro y bañado por la brisa del Atlántico. Aquí, familias, parejas y viajeros disfrutan de un almuerzo y cena tranquilos, descansan en el deck y contemplan la puesta de sol más hermosa de Natal brindando con cócteles artesanales.',
    stat1_label: 'Frente a la playa en Ponta Negra',
    stat2_num: '7 días',
    stat2_label: 'Abierto ininterrumpidamente',
    stat3_label: 'Aprobado por los visitantes',
    feat1_title: 'Ubicación Privilegiada',
    feat1_desc: 'Situado a pocos pasos de la arena de Ponta Negra, con fácil acceso y vista directa al Morro do Careca.',
    feat2_title: 'Confort y Brisa Marina',
    feat2_desc: 'Nuestro deck al aire libre está a su entera disposición. Venga a almorzar, cenar, relájese en familia y contemple el mar en las reposeras.',
    feat3_title: 'Gastronomía Regional de Autor',
    feat3_desc: 'Platos abundantes de camarones seleccionados, pulpo a la brasa, pesca fresca y lo mejor de la tradición nordestina.',
    feat4_title: 'Eventos y Celebraciones',
    feat4_desc: 'Espacio ideal para celebraciones de cumpleaños, reuniones familiares y encuentros frente al mar.',

    // Structure
    struct_kicker: 'ESTRUCTURA COMPLETA',
    struct_headline: 'Desacelere el Tiempo Frente al Mar',
    struct_subtext: 'Preparamos cada detalle para que disfrute de todo el día con total confort, hospitalidad y bienestar.',
    card1_badge: 'Deck y Coctelería',
    card1_title: 'Atardecer en el Deck',
    card1_text: 'El final de la tarde en Dom Aquino es un espectáculo único. Saboree cócteles clásicos y de autor mientras el sol se oculta en el horizonte del mar.',
    card2_badge: 'Deck y Confort',
    card2_title: 'Lounge Frente al Mar',
    card2_text: 'Nuestros clientes disfrutan de un lounge acogedor con deck frente al mar. Relájese bajo el sol de Natal y sienta la brisa refrescante mientras sus pedidos son servidos en su mesa.',
    card3_badge: 'Vista Panorámica',
    card3_title: 'Vista al Morro do Careca',
    card3_text: 'Disfrute de una de las vistas más codiciadas de Natal. El escenario natural perfecto para fotos inolvidables y momentos de puro descanso.',

    // Gastronomy & Filters
    gastro_kicker: 'NUESTRA COCINA',
    gastro_headline: 'La Fusión Entre el Mar y la Tradición Nordestina',
    gastro_subtext: 'Ingredientes frescos y platos generosos preparados con asesoría de chef para encantar su paladar.',
    filter_all: 'Todos los Destacados',
    filter_shrimp: 'Camarones y Mariscos',
    filter_regional: 'Carnes y Regionales',
    filter_pizzas: '🍕 Pizzas y Hamburguesas',
    filter_snacks: 'Tapas y Coctelería',

    dish1_badge: 'Especialidad de la Casa',
    dish1_name: 'Camarón Crocante Dom Aquino',
    dish1_desc: 'Camarones selectos rebozados en una corteza dorada y crocante, servidos con salsas caseras, limón fresco y hierbas aromáticas.',
    dish1_tag1: 'Para 2 a 3 personas',
    dish1_tag2: 'Crocancia Total',

    dish2_badge: 'Experiencia en Copa',
    dish2_name: 'Camarón Especial en Copa',
    dish2_desc: 'Presentación distinguida de camarones salteados con salsa especial de la casa, notas cítricas y condimentos costeros.',
    dish2_tag1: 'Entrada Premium',
    dish2_tag2: 'Receta Exclusiva',

    dish3_badge: 'Almuerzo Inolvidable',
    dish3_name: 'Pan Italiano Gratinado de Mariscos',
    dish3_desc: 'Pan de campo italiano relleno con un cremoso gratinado de camarones y mariscos frescos, coronado con queso dorado al soplete.',
    dish3_tag1: 'Para 2 personas',
    dish3_tag2: 'Gratinado Especial',

    dish4_badge: 'Tradición Regional',
    dish4_name: 'Plato Mar y Tierra',
    dish4_desc: 'La unión auténtica de los grandes sabores de la región: risotto cremoso gratinado con camarones selectos, carne curada desmenuzada en manteca artesanal y mandioca frita dorada y crocante.',
    dish4_tag1: 'Para 2 a 3 personas',
    dish4_tag2: 'Tradición Regional',

    dish5_badge: 'Cocina Nordestina',
    dish5_name: 'Baião de Dois con Carne a la Plancha',
    dish5_desc: 'Arroz y frijoles preparados con queso doradito a la plancha, acompañados de un tierno bife de carne vacuna asada en su punto óptimo.',
    dish5_tag1: 'Para 2 personas',
    dish5_tag2: 'Queso Coalho y Carne',

    dish6_badge: 'Frescura del Atlántico',
    dish6_name: 'Pescado en Salsa de Camarón y Puré',
    dish6_desc: 'Filete grueso de pescado blanco a la plancha bañado en abundante salsa cremosa de camarones, servido con arroz blanco y puré de papas casero.',
    dish6_tag1: 'Para 2 personas',
    dish6_tag2: 'Pesca del Día',

    dish7_badge: 'Clásico de la Playa',
    dish7_name: 'Camarón al Ajillo con Papas Fritas',
    dish7_desc: 'Camarones enteros salteados en aceite de oliva con láminas doradas de ajo y perejil fresco, acompañados de papas fritas bien crocantes.',
    dish7_tag1: 'Ideal para Compartir',
    dish7_tag2: 'Deck y Playa',

    dish8_badge: 'Horno y Masa Ligera',
    dish8_name: 'Pizza Artesanal al Horno',
    dish8_desc: 'Masa ligera de fermentación lenta abierta a mano, salsa de tomate natural, queso mozzarella fundido abundante e ingredientes irresistibles. ¡Ideal para compartir en las noches de Ponta Negra!',
    dish8_tag1: 'Masa Ligera y Crujiente',
    dish8_tag2: 'Para Compartir',

    dish_burger_badge: '100% Artesanal',
    dish_burger_name: 'Hamburguesa Artesanal de la Casa',
    dish_burger_desc: 'Blend noble de carnes a la parrilla en el punto perfecto, queso cremoso fundido, crujientes tiras de tocino y salsa especial en pan brioche dorado y suave. ¡Sabor inolvidable!',
    dish_burger_tag1: 'Carne a la Parrilla',
    dish_burger_tag2: 'Bacon Crujiente',

    pb_banner_badge: 'Menú Nocturno y Especiales',
    pb_banner_title: 'Noches Llenas de Sabor: <em>Pizzas al Horno</em> y <em>Hamburguesas Artesanales</em>',
    pb_banner_desc: '¡Reúna a amigos y familia para saborear pizzas irresistibles de masa ligera y hamburguesas artesanales jugosas en el mejor ambiente frente al mar de Ponta Negra!',
    pb_banner_btn: '📲 Pedir / Reservar en WhatsApp',

    dish9_badge: 'Alta Cocina',
    dish9_name: 'Linguine de Mariscos y Pulpo a la Brasa',
    dish9_desc: 'Pasta artesanal fresca salteada en aceite de oliva virgen extra con tentáculos de pulpo a la brasa, camarones grandes, aros de calamar, tomates cherry asados y albahaca fresca.',
    dish9_tag1: 'Para 2 personas',
    dish9_tag2: 'Pulpo a la Brasa',

    dish10_badge: 'Piqueo Crocante',
    dish10_name: 'Pastelitos Crocantes de Camarón',
    dish10_desc: 'Masa fina y crocante rellena de jugosos camarones condimentados y queso cremoso. El acompañamiento ideal para un trago bien helado.',
    dish10_tag1: 'Porción de 4 unidades',
    dish10_tag2: 'Masa Artesanal',

    dish11_badge: 'Favorito del Deck',
    dish11_name: 'Tiras de Carne Salteadas con Papas',
    dish11_desc: 'Tiernas tiras de solomillo salteadas con cebolla en manteca regional, servidas con papas fritas doradas.',
    dish11_tag1: 'Para Compartir',
    dish11_tag2: 'Carne Seleccionada',

    dish12_badge: 'Coctelería de Autor',
    dish12_name: 'Coctelería Tropical y Sunset',
    dish12_desc: 'Carta exclusiva de cócteles refrescantes pensados para acompañar la playa: Piña Colada artesanal con flor cítrica, caipifrutas con frutas tropicales frescas y gin tonic frutal.',
    dish12_tag1: 'Cócteles de Autor',
    dish12_tag2: 'Frutas Frescas',

    callout_title: '¿Desea conocer el menú completo y las opciones del día?',
    callout_desc: 'Nuestro equipo le enviará por WhatsApp la carta de entradas, platos principales, pesca del día, pizzas nocturnas y bebidas.',
    callout_btn: 'Solicitar Menú en WhatsApp',

    // Desserts
    dessert_kicker: 'PASTELERÍA DE LA CASA',
    dessert_headline: 'Postres Que Marcam Momentos',
    dessert_subtext: 'Elaborados a diario en nuestra cocina para concluir su comida con delicadeza y sabor.',
    des1_name: 'Cartola Dom Aquino',
    des1_desc: 'El postre más tradicional del nordeste: plátanos maduros flameados con queso artesanal derretido, canela aromática y helado con cereza.',
    des2_name: 'Piña Flameada Frente al Mar',
    des2_desc: 'Gruesa rodaja de piña caramelizada, servida caliente con helado artesanal derritiéndose y canela frente a las aguas de Ponta Negra.',
    des3_name: 'Petit Gâteau Artesanal',
    des3_desc: 'Bizcocho tibio de chocolate fino con centro líquido y cremoso, acompañado de helado de vainilla y salsa de chocolate suave.',
    des4_name: 'Flan Casero de Caramelo',
    des4_desc: 'Textura sedosa y delicada, elaborado con la receta tradicional de la casa y bañado en caramelo dorado brillante.',

    // Reviews
    reviews_kicker: 'OPINIONES REALES &bull; INSTAGRAM',
    reviews_headline: 'Aprobado por Quienes Viven la Experiencia',
    reviews_subtext: 'Vea lo que dicen los visitantes sobre nuestra cocina, atención y atmósfera frente al mar:',
    quote1: '&ldquo;¡Lugar maravilloso! Me encantó la atención, la comida, la música y el ambiente increíble.&rdquo;',
    quote2: '&ldquo;¡El mejor lugar de Ponta Negra! Vale mucho la pena, esperamos regresar pronto.&rdquo;',
    quote3: '&ldquo;Lo recomiendo absolutamente, soy fan de este restaurante. Platos deliciosos y gran servicio.&rdquo;',
    client_meta: '📸 Comentarios reales &bull; @domaquinonatalrn',

    // Info
    info_kicker: 'UBICACIÓN &bull; MAPA INTERACTIVO',
    info_headline: 'Fácil de Llegar, Imposible de Olvidar',
    info_subtext: 'Estamos en el corazón de Ponta Negra, a pasos de la arena. Consulte el mapa interactivo y trace su ruta a Dom Aquino:',
    pill_hours_t: 'Horario de Atención',
    pill_hours_d: 'Lunes a Domingo &bull; 11:00 a 23:00 (Ininterrumpido)',
    pill_addr_t: 'Dirección en Ponta Negra',
    pill_addr_d: 'Rua Pastor Rodolfo Beuttenmuller, 9045 A &bull; Natal/RN',
    pill_deck_t: 'Deck &amp; Lounge Frente al Mar',
    pill_deck_d: 'Mesas ventiladas y reposeras confortables con vista directa al mar',
    pill_park_t: 'Acceso y Estacionamiento',
    pill_park_d: 'Fácil acceso en Uber/taxi y estacionamiento en los alrededores',
    map_ref: '🌊 <em>A pocos pasos de la arena con vista al Morro do Careca.</em>',
    btn_gmaps: '📍 Trazar Ruta en Google Maps',
    btn_waze: '🚗 Trazar Ruta en Waze',
    btn_wa_help: '💬 Ayuda con ubicación en WhatsApp &rarr;',

    // Contact
    contact_kicker: 'ASEGURE SU MESA',
    contact_headline: 'Planee Su Visita a Dom Aquino',
    contact_subtext: 'Para asegurar una mesa con la mejor vista al mar o resolver cualquier duda, complete el formulario o hable directamente por WhatsApp.',
    f_name: 'Su Nombre Completo',
    f_phone: 'Su WhatsApp / Teléfono',
    f_date: 'Fecha Deseada',
    f_time: 'Horario Estimado',
    f_people: 'Cantidad de Personas',
    f_obs: 'Mensaje u Ocasión Especial (Opcional)',
    f_submit: 'Confirmar Reserva en WhatsApp Ahora',

    // Footer
    footer_desc: 'Restaurante y espacio de ocio frente a la Playa de Ponta Negra en Natal/RN. Gastronomía regional de autor, deck lounge para clientes y vista panorámica al Morro do Careca.',
    footer_social: '📸 Síganos en Instagram: <strong>@domaquinonatalrn</strong>',
    footer_nav_t: 'Navegación',
    footer_contact_t: 'Atención y Dirección',
    footer_hours_lbl: 'Horario:',
    footer_hours_val: 'Todos los días, 11:00 a 23:00',
    footer_addr_lbl: 'Dirección:',
    footer_wa_btn: '💬 WhatsApp: (84) 98631-2222',
    footer_rights: '&copy; 2026 Dom Aquino Restaurante. Todos los derechos reservados. Ponta Negra, Natal - RN.',
    footer_credits: 'Sitio Institucional Oficial &bull; Ponta Negra',
    lightbox_hint: 'Toque afuera o en la X para cerrar',

    // Pre-filled WhatsApp message
    wa_default_msg: '¡Hola! Vi el sitio web de Dom Aquino Restaurante y me gustaría obtener información / hacer una reserva.'
  }
};

const LANG_CONFIG = {
  pt: { flag: '🇧🇷', code: 'PT', name: 'Português' },
  en: { flag: '🇺🇸', code: 'EN', name: 'English' },
  es: { flag: '🇪🇸', code: 'ES', name: 'Español' }
};

function getCurrentLanguage() {
  const saved = localStorage.getItem('dom_aquino_lang');
  if (saved && ['pt', 'en', 'es'].includes(saved)) return saved;
  const browserLang = (navigator.language || navigator.userLanguage || 'pt').toLowerCase();
  if (browserLang.startsWith('en')) return 'en';
  if (browserLang.startsWith('es')) return 'es';
  return 'pt';
}

function applyGastroLanguage(lang) {
  if (!GASTRO_TRANSLATIONS[lang]) lang = 'pt';
  const t = GASTRO_TRANSLATIONS[lang];

  // Update HTML lang attribute
  document.documentElement.lang = lang === 'pt' ? 'pt-BR' : lang;
  localStorage.setItem('dom_aquino_lang', lang);

  // Update data-i18n elements (text or HTML)
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key] !== undefined) {
      el.innerHTML = t[key];
    }
  });

  // Update placeholders
  document.querySelectorAll('[data-i18n-ph]').forEach(el => {
    const key = el.getAttribute('data-i18n-ph');
    if (t[key] !== undefined) {
      el.setAttribute('placeholder', t[key]);
    }
  });

  // Update UI Selector state
  const currentFlag = document.getElementById('current-lang-flag');
  const currentCode = document.getElementById('current-lang-code');
  if (currentFlag && LANG_CONFIG[lang]) currentFlag.textContent = LANG_CONFIG[lang].flag;
  if (currentCode && LANG_CONFIG[lang]) currentCode.textContent = LANG_CONFIG[lang].code;

  // Desktop Dropdown active options
  document.querySelectorAll('.lang-option').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
  });

  // Mobile Drawer active buttons
  document.querySelectorAll('.drawer-lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
  });

  // Update WhatsApp links pre-filled messages
  updateWhatsAppLinks(lang);
}

function updateWhatsAppLinks(lang) {
  const phone = '5584986312222';
  let msg = 'Olá! Vim pelo site do Dom Aquino Restaurante e gostaria de informações.';
  if (lang === 'en') {
    msg = 'Hello! I visited the Dom Aquino Restaurant website and would like information/to make a reservation.';
  } else if (lang === 'es') {
    msg = '¡Hola! Vi el sitio web de Dom Aquino Restaurante y me gustaría obtener información / hacer una reserva.';
  }

  document.querySelectorAll('a[href*="wa.me/5584986312222"]').forEach(link => {
    // If it's a specific route or form submit, keep tailored text or translate
    link.href = `https://wa.me/${phone}?text=${encodeURIComponent(msg)}`;
  });
}

function initGastroI18n() {
  const langDropdown = document.getElementById('lang-selector');
  const langToggleBtn = document.getElementById('lang-toggle-btn');

  // Toggle dropdown on desktop
  if (langToggleBtn && langDropdown) {
    langToggleBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      langDropdown.classList.toggle('open');
      const expanded = langDropdown.classList.contains('open');
      langToggleBtn.setAttribute('aria-expanded', expanded ? 'true' : 'false');
    });

    document.addEventListener('click', (e) => {
      if (!langDropdown.contains(e.target)) {
        langDropdown.classList.remove('open');
        langToggleBtn.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // Handle language option click (desktop)
  document.querySelectorAll('.lang-option').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const lang = btn.getAttribute('data-lang');
      applyGastroLanguage(lang);
      if (langDropdown) {
        langDropdown.classList.remove('open');
        if (langToggleBtn) langToggleBtn.setAttribute('aria-expanded', 'false');
      }
    });
  });

  // Handle drawer language buttons (mobile)
  document.querySelectorAll('.drawer-lang-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const lang = btn.getAttribute('data-lang');
      applyGastroLanguage(lang);
    });
  });

  // Initial load
  const initialLang = getCurrentLanguage();
  applyGastroLanguage(initialLang);
}

document.addEventListener('DOMContentLoaded', initGastroI18n);
