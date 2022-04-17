// regions: Pacific, Rocky Mountains, Southwest, Southeast, Midwest, Northeast

const fungi = [
  {
    "id": 1,
    "name": "Pacific Golden Chantarelle",
    "regions": ["Pacific"],
    "description": "Chanterelles can be found in shady areas under conifer trees, growing out of the soil. In Washington, they have a symbiotic relationship with Douglas fir, spruce, and hemlock. They have an orange coloring with ridges on the underside that are referred to as “false gills.” When cut open, the flesh inside of the stalk is solid, with white coloring.",
    "scientificName": "Cantharellus formosus",
    "characteristics": [],
    "imageUrl": "http://www.scmycoflora.org/genera/cantharellus/images/Cantharellus-formosus_1.jpg"
  },
  {
    "id": 2,
    "name": "Chicken-of-the-Woods",
    "regions": ["Pacific"],
    "description": "Chicken-of-the-woods is an easy to spot, recognizable fungi that is often found in large clusters or “shelves” on living and dead trees. They are orange and yellow in color, and bright coloring indicates the fruiting body is ready for harvest, as it tends to become pale with age. What's interesting about this fungi is that it actually tastes like chicken! Many have found they can use chicken-of-the woods in many recipes that call for chicken.",
    "scientificName": "Laetiporus sulphureus",
    "characteristics": [],
    "imageUrl": "https://ultimate-mushroom.com/uploads/posts/2020-05/1589974629_laetiporus-sulphureus-3.jpg"
  },
  {
    "id": 3,
    "name": "Oyster",
    "regions": ["Midwest", "Pacific", "Southeast"],
    "description": "Pleurotus ostreatus, the pearl oyster mushroom or tree oyster mushroom, is a common edible mushroom. It was first cultivated in Germany as a subsistence measure during World War I and is now grown commercially around the world for food. It is related to the similarly cultivated king oyster mushroom. Oyster mushrooms can also be used industrially for mycoremediation purposes. The oyster mushroom is one of the more commonly sought wild mushrooms, though it can also be cultivated on straw and other media. It has the bittersweet aroma of benzaldehyde (which is also characteristic of bitter almonds).",
    "scientificName": "Pleurotus ostreatus",
    "characteristics": [],
    "imageUrl": "https://live.staticflickr.com/3699/11542588094_ca8e111c0e_h.jpg"
  },
  {
    "id": 4,
    "name": "Shaggy Mane",
    "regions": ["Pacific", "Southwest"],
    "description": "Also known as “lawyer's wig” or “inky cap” mushrooms, these fungi are quite common and a desirable edible. Where I live, they make their appearance in late September to early October, with the first big rain. The stalks are smooth and the white caps burst from the ground with a cylindrical, torpedo-like shape. Eventually, the surface of the caps will become flakey, making the caps look “shaggy.” Harvest them quickly because if you let them develop for too long, the caps will flatten out, grow black and inky around the edges and eventually disintegrate.",
    "scientificName": "Coprinus comatus",
    "characteristics": [],
    "imageUrl": "https://www.mykoweb.com/CAF/photos/Coprinus_comatus_fs-05.jpg"
  },
  {
    "id": 5,
    "name": "Lion's Mane",
    "regions": ["Pacific", "Southeast", "Southwest"],
    "description": "Hericium erinaceus (also called lion's mane mushroom, monkey head mushroom, bearded tooth mushroom, satyr's beard, bearded hedgehog mushroom, pom pom mushroom, or bearded tooth fungus) is an edible and medicinal mushroom belonging to the tooth fungus group. Native to North America, Europe and Asia it can be identified by its long spines (greater than 1 cm length), its appearance on hardwoods and its tendency to grow a single clump of dangling spines. Hericium erinaceus can be mistaken for other species of Hericium, which are all popular edibles that grow across the same range. In the wild, these mushrooms are common during late summer and fall on hardwoods, particularly American beech.",
    "scientificName": "Hericium erinaceus",
    "characteristics": [],
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Igelstachelbart%2C_Hericium_erinaceus.jpg/1600px-Igelstachelbart%2C_Hericium_erinaceus.jpg"
  },
  {
    "id": 6,
    "name": "Porcini",
    "regions": ["Pacific", "Rocky Mountains"],
    "description": "Boletus edulis is a basidiomycete fungus, and the type species of the genus Boletus. Widely distributed in the Northern Hemisphere across Europe, Asia, and North America, it does not occur naturally in the Southern Hemisphere, although it has been introduced to southern Africa, Australia, New Zealand, and Brazil. Several closely related European mushrooms formerly thought to be varieties or forms of B. edulis have been shown using molecular phylogenetic analysis to be distinct species, and others previously classed as separate species are conspecific with this species. The western North American species commonly known as the California king bolete (Boletus edulis var. grandedulis) is a large, darker-coloured variant first formally identified in 2007.",
    "scientificName": "Boletus edulis",
    "characteristics": [],
    "imageUrl": "https://live.staticflickr.com/2914/33540493432_b9b015634b_k.jpg"
  },
  {
    "id": 7,
    "name": "Puffball",
    "regions": ["Pacific", "Rocky Mountains", "Southwest"],
    "description": "Calbovista is a fungal genus containing the single species Calbovista subsculpta, commonly known as the sculptured puffball, sculptured giant puffball, and warted giant puffball. It is a common puffball of the Rocky Mountains and Pacific Coast ranges of western North America. The puffball is more or less round with a diameter of up to 15 cm (6 in), white becoming brownish in age, and covered with shallow pyramid-shaped plates or scales. It fruits singly or in groups along roads and in open woods at high elevations, from summer to autumn.",
    "scientificName": "Calbovista",
    "characteristics": [],
    "imageUrl": null
  },
  {
    "id": 8,
    "name": "Giant Puffball",
    "regions": ["Midwest", "Southwest"],
    "description": "Calvatia gigantea, commonly known as the giant puffball, is a puffball mushroom commonly found in meadows, fields, and deciduous forests usually in late summer and autumn. It is found in temperate areas throughout the world.",
    "scientificName": "Calvatia gigantea",
    "characteristics": [],
    "imageUrl": "https://inaturalist-open-data.s3.amazonaws.com/photos/23343781/original.jpg"
  },
  {
    "id": 9,
    "name": "Funnel Chanterelle",
    "regions": ["Pacific"],
    "description": "Craterellus tubaeformis (formerly Cantharellus tubaeformis) is an edible fungus, also known as Yellowfoot, winter mushroom, or Funnel Chanterelle. It is mycorrhizal, forming symbiotic associations with plants, making it very challenging to cultivate. It is smaller than the golden chanterelle (Cantharellus cibarius) and has a dark brown cap with paler gills and a hollow yellow stem. C. tubaeformis tastes stronger but less fruity than the golden chanterelle. It has a very distinctive smokey, peppery taste when raw. It grows in temperate and cold parts of North America and Europe, including Scandinavia, Finland, Russia, and the British Isles, as well as in the Himalayas in Asia and in Thailand.",
    "scientificName": "Craterellus tubaeformis",
    "characteristics": [],
    "imageUrl": "https://www.mykoweb.com/CAF/photos/large/Craterellus_tubaeformis%28mgw-01%29.jpg"
  },
  {
    "id": 10,
    "name": "Wood Blewit",
    "regions": ["Pacific", "Midwest"],
    "description": "Clitocybe nuda, commonly known as the wood blewit and alternately described as Lepista nuda, is an edible mushroom native to Europe and North America. Described by Pierre Bulliard in 1790, it was also known as Tricholoma nudum for many years. It is found in both coniferous and deciduous woodlands. It is a fairly distinctive mushroom that is widely eaten, though there is some caution about edibility. Nevertheless, it has been cultivated in Britain, the Netherlands and France.",
    "scientificName": "Clitocybe nuda",
    "characteristics": [],
    "imageUrl": "https://www.mykoweb.com/CAF/photos/large/Clitocybe_nuda%28mgw-02%29.jpg"
  },
  {
    "id": 11,
    "name": "Black Trumpet",
    "regions": ["Northeast", "Southwest"],
    "description": "This fascinating mushroom, often called the black trumpet, is common and easily recognized - but hard to discover. The mushrooms are small and black, and something about their shape and fruiting pattern can make them extremely difficult to see. The vase-shaped fruiting bodies have finely scaly, gray to black upper surfaces and smooth or very shallowly wrinkled outer surfaces that are initially blackish but develop yellowish to orangish shades as the spores mature.",
    "scientificName": "Craterellus fallax",
    "characteristics": [],
    "imageUrl": "https://bloximages.newyork1.vip.townnews.com/tulsaworld.com/content/tncms/assets/v3/editorial/1/d8/1d87a9a2-5c06-5d71-9d32-2abb23494116/6061d36b746a5.image.jpg?resize=1200%2C943"
  },
  {
    "id": 12,
    "name": "Hen-of-the-Woods",
    "regions": ["Northeast", "Southwest"],
    "description": "Grifola frondosa is a polypore mushroom that grows in clusters at the base of trees, particularly oaks. The mushroom is commonly known among English speakers as hen-of-the-woods, ram's head and sheep's head. It is typically found in late summer to early autumn. In the United States' supplement market, as well as in Asian grocery stores, the mushroom is known by its Japanese name maitake. Throughout Italian American communities in the northeastern United States, it is commonly known as the signorina mushroom. G. frondosa should not be confused with Laetiporus sulphureus, another edible bracket fungus that is commonly called chicken of the woods or sulphur shelf. It is native to China, the northeastern part of Japan and North America.",
    "scientificName": "Grifola frondosa",
    "characteristics": [],
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/e/eb/Grifola_frondosa_%28GB%3D_Hen_of_the_Woods%2C_D%3D_Klapperschwamm%2C_F%3D_Polypore_en_touffes%2C_NL%3D_Eikhaas%29%2C_white_spores_and_causes_whiterot%2C_at_Rozendaal_forest_-_panoramio.jpg"
  },
  {
    "id": 13,
    "name": "White Morel",
    "regions": ["Southeast", "Rocky Mountains"],
    "description": "Morchella americana is a species of fungus in the family Morchellaceae native to North America. Described as new to science in 2012, it is common east of the Rocky Mountains in a range stretching from Ontario south to Texas, Arkansas, Alabama, Georgia and South Carolina. In western North America, the species typically is found under hardwood, especially cottonwood trees in river bottoms, or with apple trees or ornamental ashes in urban settings. The specific epithet americana refers to its occurrence in North America.",
    "scientificName": "Morchella americana",
    "characteristics": [],
    "imageUrl": "https://ascomycete.org/Portals/0/Photos/Morchella-americana-01.jpg"
  },
  {
    "id": 14,
    "name": "Turkey Tail",
    "regions": ["Southeast"],
    "description": "Trametes versicolor - also known as Coriolus versicolor and Polyporus versicolor - is a common polypore mushroom found throughout the world. Meaning 'of several colors', versicolor reliably describes this fungus that displays a variety of colors. For example, because its shape and multiple colors are similar to those of a wild turkey, T. versicolor is commonly called turkey tail. A similar looking mushroom, commonly called false turkey tail, which is from a different order, may sometimes be confused with the turkey tail mushroom due to appearance. Another lookalike is the multicolor gill polypore.",
    "scientificName": "Trametes versicolor",
    "characteristics": [],
    "imageUrl": "https://www.mayernikkitchen.com/pub/herb-images/20190313154829_TurkeyTailMushroom.jpg"
  },
  {
    "id": 15,
    "name": "Ravenel's Stinkhorn",
    "regions": ["Southeast"],
    "description": "Phallus ravenelii, commonly known as Ravenel's stinkhorn, is a fungus in the Phallaceae (stinkhorn) family. It is found in eastern North America. Its mushrooms commonly grow in large clusters and are noted for their foul odor and phallic shape when mature. It is saprobic, and as such it is encountered in a wide variety of habitats rich in wood debris, from forests to mulched gardens or sawdust piles in urban areas.",
    "scientificName": "Phallus ravenelii",
    "characteristics": [],
    "imageUrl": "https://www.seeit360.com/files2/imagecache/lightbox/img_1399.jpg"
  },
  {
    "id": 16,
    "name": "Indigo Milk Cap",
    "regions": ["Southeast"],
    "description": "Lactarius indigo, commonly known as the indigo milk cap, the indigo (or blue) lactarius, or the blue milk mushroom, is a species of agaric fungus in the family Russulaceae. A widely distributed species, it grows naturally in eastern North America, East Asia, and Central America; it has also been reported in southern France. L. indigo grows on the ground in both deciduous and coniferous forests, where it forms mycorrhizal associations with a broad range of trees. The fruit body color ranges from dark blue in fresh specimens to pale blue-gray in older ones.",
    "scientificName": "Lactarius indigo",
    "characteristics": [],
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Lactarius_indigo_48568_edit.jpg/1920px-Lactarius_indigo_48568_edit.jpg"
  },
  {
    "id": 17,
    "name": "Yellow Patches",
    "regions": ["Northeast"],
    "description": "Amanita flavoconia, commonly known as yellow patches, yellow wart, orange amanita, yellow-dust amanita or the American yellow dust amanita, is a species of mushroom in the family Amanitaceae. It has an orangish-yellow cap with yellowish-orange patches or warts, a yellowish-orange annulus, and a white to orange stem. Common and widespread throughout eastern North America, Amanita flavoconia grows on the ground in broad-leaved and mixed forests, especially in mycorrhizal association with hemlock.",
    "scientificName": "Amanita flavoconia",
    "characteristics": [],
    "imageUrl": "https://healing-mushrooms.net/wp-content/uploads/2020/09/Amanita-flavoconia-scaled.jpg"
  },
  {
    "id": 18,
    "name": "Angel's Wings",
    "regions": ["Northeast", "Pacific"],
    "description": "Pleurocybella porrigens is a species of fungus in the Marasmiaceae family. The species is widespread in temperate forests of the Northern Hemisphere. P. porrigens, known as the angel wing, is a white-rot wood-decay fungus on conifer wood, particularly hemlock (genus Tsuga). The flesh is thin and fragile compared to the oyster mushroom.",
    "scientificName": "Pleurocybella porrigens",
    "characteristics": [],
    "imageUrl": "https://live.staticflickr.com/8035/8074272350_a7f61eda17_b.jpg"
  },
  {
    "id": 19,
    "name": "Chaga",
    "regions": ["Northeast"],
    "description": "Inonotus obliquus, commonly called chaga, is a fungus in the family Hymenochaetaceae. It is parasitic on birch and other trees. The sterile conk is irregularly formed and resembles burnt charcoal. It is not the fruiting body of the fungus, but a sclerotium or mass of mycelium, mostly black because of a great amount of melanin.[2] Some people consider chaga medicinal. Inonotus obliquus is found most commonly in the Circumboreal Region of the Northern Hemisphere, where it is distributed in birch forests.",
    "scientificName": "Inonotus obliquus",
    "characteristics": [],
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Chaga_Mushroom_-_Inonotus_obliquus_%2840358524662%29.jpg/1280px-Chaga_Mushroom_-_Inonotus_obliquus_%2840358524662%29.jpg"
  },
  {
    "id": 20,
    "name": "Apricot's Jelly",
    "regions": ["Northeast", "Pacific"],
    "description": "Guepinia is a genus of fungus in the Auriculariales order. It is a monotypic genus, containing the single species Guepinia helvelloides, commonly known as the apricot jelly. The fungus produces salmon-pink, ear-shaped, gelatinous fruit bodies that grow solitarily or in small tufted groups on soil, usually associated with buried rotting wood.",
    "scientificName": "Guepinia helvelloides",
    "characteristics": [],
    "imageUrl": "https://inaturalist-open-data.s3.amazonaws.com/photos/2481682/original.jpg"
  },
  {
    "id": 21,
    "name": "Scarlet Cup",
    "regions": ["Pacific"],
    "description": "Sarcoscypha coccinea, commonly known as the scarlet elf cup, scarlet elf cap, or the scarlet cup, is a species of fungus in the family Sarcoscyphaceae of the order Pezizales. The fungus, widely distributed in the Northern Hemisphere, has been found in Africa, Asia, Europe, North and South America, and Australia. The saprobic fungus grows on decaying sticks and branches in damp spots on forest floors, generally buried under leaf litter or in the soil. The cup-shaped fruit bodies are usually produced during the cooler months of winter and early spring.",
    "scientificName": "Sarcoscypha coccinea",
    "characteristics": [],
    "imageUrl": "http://www.fungalpunknature.co.uk/Fungi/Sarcoscypha%20austriaca.jpg"
  },
  {
    "id": 22,
    "name": "Old Man of the Woods",
    "regions": ["Midwest", "Northeast"],
    "description": "Strobilomyces strobilaceus, also called Strobilomyces floccopus and commonly known as old man of the woods, is a species of fungus in the family Boletaceae. It is native to Europe and North America. Fruit bodies are characterized by very soft dark grey to black pyramidal and overlapping scales on the cap surface.",
    "scientificName": "Strobilomyces floccopus",
    "characteristics": [],
    "imageUrl": "https://wpamushroomclub.org/wp-content/uploads/2014/09/Strobilomyces-floccopus.jpg"
  },
  {
    "id": 23,
    "name": "Golden Reishi",
    "regions": ["Midwest", "Southeast", "Northeast"],
    "description": "Ganoderma curtisii is a wood-decaying polypore whose distribution is primarily in the Southeastern United States. Distinguishing features include its gorgeous, lacquered cap and its pale brown flesh, which features melanoid bands but not concentric growth zones. It usually features a fairly well-developed lateral stem.",
    "scientificName": "Ganoderma curtisii",
    "characteristics": [],
    "imageUrl": "https://inaturalist-open-data.s3.amazonaws.com/photos/13617121/original.jpg"
  },
  {
    "id": 24,
    "name": "Witch's Butter",
    "regions": ["Midwest", "Southeast", "Northeast"],
    "description": "Tremella mesenterica (whose common names include yellow brain, golden jelly fungus, yellow trembler, and witch's butter) is a common jelly fungus in the family Tremellaceae of the Agaricomycotina. The gelatinous, orange-yellow fruit body of the fungus has a convoluted or lobed surface that is greasy or slimy when damp. It grows in crevices in bark, appearing during rainy weather. Within a few days after rain it dries into a thin film or shriveled mass capable of reviving after subsequent rain. This fungus occurs widely in deciduous and mixed forests and is widely distributed in temperate and tropical regions that include Africa, Asia, Australia, Europe, North and South America.",
    "scientificName": "Tremella mesenterica",
    "characteristics": [],
    "imageUrl": "https://bloximages.newyork1.vip.townnews.com/lakemagazine.life/content/tncms/assets/v3/editorial/4/11/411e5428-4ceb-11ea-b0da-7b876a008525/5e42d71d00453.cover.jpg?crop=1586%2C1065%2C260%2C9&resize=1586%2C1065&order=crop%2Cresize"
  },
  {
    "id": 25,
    "name": "Hawk's Wing",
    "regions": ["Rocky Mountains", "Northeast"],
    "description": "Sarcodon imbricatus, commonly known as the shingled hedgehog, scaly hedgehog, or hawk's wing, is a species of tooth fungus in the order Thelephorales. The mushroom has a large, brownish cap with large brown scales and may reach 30 cm in diameter. On the underside it sports greyish, brittle teeth instead of gills, and has white flesh. Its spore print is brown. It is associated with spruce (Picea), appearing in autumn.",
    "scientificName": "Sarcodon imbricatus",
    "characteristics": [],
    "imageUrl": "https://www.modern-forager.com/wp-content/uploads/2018/07/hawgswing1000.jpg"
  },
  {
    "id": 26,
    "name": "Delicious Milky Cap",
    "regions": ["Rocky Mountains", "Pacific"],
    "description": "Lactarius deliciosus, commonly known as the saffron milk cap and red pine mushroom, is one of the best known members of the large milk-cap genus Lactarius in the order Russulales. It is found in Europe and has been accidentally introduced to other countries under conifers and can be found growing in pine plantations. A fresco in the Roman town of Herculaneum appears to depict Lactarius deliciosus and is one of the earliest pieces of art to illustrate a fungus.",
    "scientificName": "Lactarius deliciosus",
    "characteristics": [],
    "imageUrl": "https://www.first-nature.com/fungi/images/russulaceae/lactarius-deliciosus6.jpg"
  },
  {
    "id": 26,
    "name": "Fly Amanita",
    "regions": ["Rocky Mountains", "Pacific", "Northeast"],
    "description": "Amanita muscaria, commonly known as the fly agaric or fly amanita, is a basidiomycete of the genus Amanita. It is also a muscimol mushroom. Native throughout the temperate and boreal regions of the Northern Hemisphere, Amanita muscaria has been unintentionally introduced to many countries in the Southern Hemisphere, generally as a symbiont with pine and birch plantations, and is now a true cosmopolitan species. Arguably the most iconic toadstool species, the fly agaric is a large white- gilled, white - spotted, usually red mushroom, and is one of the most recognizable and widely encountered in popular culture.",
    "scientificName": "Amanita Muscaria",
    "characteristics": [],
    "imageUrl": "https://static.inaturalist.org/photos/26555709/large.jpg"
  },
  {
    "id": 27,
    "name": "Orange Peel Fungus",
    "regions": ["Rocky Mountains", "Pacific", "Northeast"],
    "description": "Aleuria aurantia (orange peel fungus) is a widespread ascomycete fungus in the order Pezizales. The brilliant orange, cup-shaped ascocarps often resemble orange peels strewn on the ground,[1] giving this species its common name.",
    "scientificName": "Aleuria aurantia",
    "characteristics": [],
    "imageUrl": "https://www.uncovercolorado.com/wp-content/uploads/2020/04/Aleuria-Aurantia-Colorado.jpg"
  },
  {
    "id": 28,
    "name": "Pleated Inkcap",
    "regions": ["Rocky Mountains", "Pacific", "Midwest", "Southeast", "Northeast"],
    "description": "Parasola plicatilis is a small saprotrophic mushroom with a plicate cap (diameter up to 35 mm). It is a widely distributed species in Europe and North America. This ink cap species is a decomposer which can be found in grassy areas, alone, scattered or in small groups. The fruiting bodies grow at night after rain, and will self decompose after spore dispersion is achieved. Otherwise, they are quickly dried up in morning sunlight, or will eventually collapse beneath the weight of their caps.",
    "scientificName": "Parasola plicatilis",
    "characteristics": [],
    "imageUrl": "https://www.uncovercolorado.com/wp-content/uploads/2020/04/Parasola-Plicatilis-Colorado.jpg"
  },
];

module.exports = fungi;