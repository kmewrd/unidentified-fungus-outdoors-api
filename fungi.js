const fungi = [
  {
    "id": 1,
    "name": "Pacific Golden Chantarelle",
    "regions": ["pacific"],
    "description": "Chanterelles can be found in shady areas under conifer trees, growing out of the soil. In Washington, they have a symbiotic relationship with Douglas fir, spruce, and hemlock. They have an orange coloring with ridges on the underside that are referred to as “false gills.” When cut open, the flesh inside of the stalk is solid, with white coloring.",
    "scientificName": "Cantharellus formosus",
    "characteristics": ["yellow", "yellow-orange", "gills", "false gills", "wavy", "funnel"],
    "imageUrl": "http://www.scmycoflora.org/genera/cantharellus/images/Cantharellus-formosus_1.jpg"
  },
  {
    "id": 2,
    "name": "Chicken-of-the-Woods",
    "regions": ["pacific"],
    "description": "Chicken-of-the-woods is an easy to spot, recognizable fungi that is often found in large clusters or “shelves” on living and dead trees. They are orange and yellow in color, and bright coloring indicates the fruiting body is ready for harvest, as it tends to become pale with age. What's interesting about this fungi is that it actually tastes like chicken! Many have found they can use chicken-of-the woods in many recipes that call for chicken.",
    "scientificName": "Laetiporus sulphureus",
    "characteristics": ["shelf", "golden", "yellow-orange", "stemless"],
    "imageUrl": "https://ultimate-mushroom.com/uploads/posts/2020-05/1589974629_laetiporus-sulphureus-3.jpg"
  },
  {
    "id": 3,
    "name": "Oyster",
    "regions": ["midwest", "pacific", "southeast"],
    "description": "Pleurotus ostreatus, the pearl oyster mushroom or tree oyster mushroom, is a common edible mushroom. It was first cultivated in Germany as a subsistence measure during World War I and is now grown commercially around the world for food. It is related to the similarly cultivated king oyster mushroom. The oyster mushroom is one of the more commonly sought wild mushrooms, though it can also be cultivated on straw and other media. It has the bittersweet aroma of benzaldehyde (which is also characteristic of bitter almonds).",
    "scientificName": "Pleurotus ostreatus",
    "characteristics": ["gills", "wavy", "round", "beige", "light brown", "gray"],
    "imageUrl": "https://live.staticflickr.com/3699/11542588094_ca8e111c0e_h.jpg"
  },
  {
    "id": 4,
    "name": "Shaggy Mane",
    "regions": ["pacific", "southwest"],
    "description": "Also known as “lawyer's wig” or “inky cap” mushrooms, these fungi are quite common and a desirable edible. The stalks are smooth and the white caps burst from the ground with a cylindrical, torpedo-like shape. Eventually, the surface of the caps will become flakey, making the caps look “shaggy.” Harvest them quickly because if you let them develop for too long, the caps will flatten out, grow black and inky around the edges and eventually disintegrate.",
    "scientificName": "Coprinus comatus",
    "characteristics": ["shaggy", "scales", "white", "bell", "cylindrical"],
    "imageUrl": "https://www.mykoweb.com/CAF/photos/Coprinus_comatus_fs-05.jpg"
  },
  {
    "id": 5,
    "name": "Lion's Mane",
    "regions": ["pacific", "southeast", "southwest"],
    "description": "Hericium erinaceus (also called lion's mane mushroom, monkey head mushroom, bearded tooth mushroom, satyr's beard, bearded hedgehog mushroom, pom pom mushroom, or bearded tooth fungus) is an edible and medicinal mushroom belonging to the tooth fungus group. Native to North America, Europe and Asia it can be identified by its long spines (greater than 1 cm length), its appearance on hardwoods and its tendency to grow a single clump of dangling spines. Hericium erinaceus can be mistaken for other species of Hericium, which are all popular edibles that grow across the same range. In the wild, these mushrooms are common during late summer and fall on hardwoods, particularly American beech.",
    "scientificName": "Hericium erinaceus",
    "characteristics": ["white", "shaggy", "spines", "dangling", "anemone"],
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Igelstachelbart%2C_Hericium_erinaceus.jpg/1600px-Igelstachelbart%2C_Hericium_erinaceus.jpg"
  },
  {
    "id": 6,
    "name": "King Bolete",
    "regions": ["pacific", "rocky-mountains", "southwest"],
    "description": "Boletus barrowsii, also known in English as the white king bolete after its pale colored cap, is an edible and highly regarded fungus in the genus Boletus that inhabits southwestern North America. Found under ponderosa pine and live oak in autumn, it was considered a color variant of the similarly edible B. edulis for many years.",
    "scientificName": "Boletus barrowsii",
    "characteristics": ["white", "beige", "stout", "pores"],
    "imageUrl": "https://ultimate-mushroom.com/uploads/posts/2020-10/1601552623_boletus-barrowsii-3.jpg"
  },
  {
    "id": 7,
    "name": "Puffball",
    "regions": ["pacific", "rocky-mountains", "southwest", "midwest"],
    "description": "Calbovista is a fungal genus containing the single species Calbovista subsculpta, commonly known as the sculptured puffball, sculptured giant puffball, and warted giant puffball. It is a common puffball of the Rocky Mountains and Pacific Coast ranges of western North America. The puffball is more or less round with a diameter of up to 15 cm (6 in), white becoming brownish in age, and covered with shallow pyramid-shaped plates or scales. It fruits singly or in groups along roads and in open woods at high elevations, from summer to autumn.",
    "scientificName": "Calbovista subsculpta",
    "characteristics": ["white", "round", "bumpy", "warts"],
    "imageUrl": null
  },
  {
    "id": 8,
    "name": "Giant Puffball",
    "regions": ["midwest", "southwest"],
    "description": "Calvatia gigantea, commonly known as the giant puffball, is a puffball mushroom commonly found in meadows, fields, and deciduous forests usually in late summer and autumn. It is found in temperate areas throughout the world. Typical specimens are about the size of a soccer ball, and more or less round. However, it can be much larger and its shape can be more blob-ish than round, especially when it attains enormous sizes. But it is never shaped like an inverted pear, since it lacks the sterile base portion common to many other puffballs.",
    "scientificName": "Calvatia gigantea",
    "characteristics": ["white", "round", "smooth", "large", "ball"],
    "imageUrl": "https://inaturalist-open-data.s3.amazonaws.com/photos/23343781/original.jpg"
  },
  {
    "id": 9,
    "name": "Funnel Chanterelle",
    "regions": ["pacific"],
    "description": "Craterellus tubaeformis (formerly Cantharellus tubaeformis) is an edible fungus, also known as Yellowfoot, winter mushroom, or Funnel Chanterelle. It is mycorrhizal, forming symbiotic associations with plants, making it very challenging to cultivate. It is smaller than the golden chanterelle (Cantharellus cibarius) and has a dark brown cap with paler gills and a hollow yellow stem. C. tubaeformis tastes stronger but less fruity than the golden chanterelle. It has a very distinctive smokey, peppery taste when raw. It grows in temperate and cold parts of North America and Europe, including Scandinavia, Finland, Russia, and the British Isles, as well as in the Himalayas in Asia and in Thailand.",
    "scientificName": "Craterellus tubaeformis",
    "characteristics": ["brown", "funnel", "wavy", "long stem", "gills", "false gills"],
    "imageUrl": "https://www.mykoweb.com/CAF/photos/large/Craterellus_tubaeformis%28mgw-01%29.jpg"
  },
  {
    "id": 10,
    "name": "Wood Blewit",
    "regions": ["pacific", "midwest"],
    "description": "Clitocybe nuda, commonly known as the wood blewit and alternately described as Lepista nuda, is an edible mushroom native to Europe and North America. Described by Pierre Bulliard in 1790, it was also known as Tricholoma nudum for many years. It is found in both coniferous and deciduous woodlands. It is a fairly distinctive mushroom that is widely eaten, though there is some caution about edibility. Nevertheless, it has been cultivated in Britain, the Netherlands and France.",
    "scientificName": "Clitocybe nuda",
    "characteristics": ["purple", "purplish", "lavender", "gills"],
    "imageUrl": "https://www.mykoweb.com/CAF/photos/large/Clitocybe_nuda%28mgw-02%29.jpg"
  },
  {
    "id": 11,
    "name": "Black Trumpet",
    "regions": ["northeast", "southwest"],
    "description": "This fascinating mushroom, often called the black trumpet, is common and easily recognized - but hard to discover. The mushrooms are small and black, and something about their shape and fruiting pattern can make them extremely difficult to see. The vase-shaped fruiting bodies have finely scaly, gray to black upper surfaces and smooth or very shallowly wrinkled outer surfaces that are initially blackish but develop yellowish to orangish shades as the spores mature.",
    "scientificName": "Craterellus fallax",
    "characteristics": ["black", "wavy", "trumpet", "vase"],
    "imageUrl": "https://bloximages.newyork1.vip.townnews.com/tulsaworld.com/content/tncms/assets/v3/editorial/1/d8/1d87a9a2-5c06-5d71-9d32-2abb23494116/6061d36b746a5.image.jpg?resize=1200%2C943"
  },
  {
    "id": 12,
    "name": "Hen-of-the-Woods",
    "regions": ["northeast", "southwest", "midwest"],
    "description": "Grifola frondosa is a polypore mushroom that grows in clusters at the base of trees, particularly oaks. The mushroom is commonly known as hen-of-the-woods, ram's head, sheep's head, and maitake. It is typically found in late summer to early autumn. G. frondosa should not be confused with Laetiporus sulphureus, another edible bracket fungus that is commonly called chicken of the woods or sulphur shelf. It is native to China, the northeastern part of Japan and North America.",
    "scientificName": "Grifola frondosa",
    "characteristics": ["beige", "gray", "wavy", "cluster"],
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/e/eb/Grifola_frondosa_%28GB%3D_Hen_of_the_Woods%2C_D%3D_Klapperschwamm%2C_F%3D_Polypore_en_touffes%2C_NL%3D_Eikhaas%29%2C_white_spores_and_causes_whiterot%2C_at_Rozendaal_forest_-_panoramio.jpg"
  },
  {
    "id": 13,
    "name": "White Morel",
    "regions": ["southeast", "rocky-mountains", "midwest"],
    "description": "Morchella americana is a species of fungus in the family Morchellaceae native to North America. Described as new to science in 2012, it is common east of the Rocky Mountains in a range stretching from Ontario south to Texas, Arkansas, Alabama, Georgia and South Carolina. In western North America, the species typically is found under hardwood, especially cottonwood trees in river bottoms, or with apple trees or ornamental ashes in urban settings. The specific epithet americana refers to its occurrence in North America.",
    "scientificName": "Morchella americana",
    "characteristics": ["ridges", "white", "beige", "pitted"],
    "imageUrl": "https://ascomycete.org/Portals/0/Photos/Morchella-americana-01.jpg"
  },
  {
    "id": 14,
    "name": "Turkey Tail",
    "regions": ["southeast", "midwest"],
    "description": "Trametes versicolor - also known as Coriolus versicolor and Polyporus versicolor - is a common polypore mushroom found throughout the world. Meaning 'of several colors,' versicolor reliably describes this fungus that displays a variety of colors. For example, because its shape and multiple colors are similar to those of a wild turkey, T. versicolor is commonly called turkey tail. A similar looking mushroom, commonly called false turkey tail, which is from a different order, may sometimes be confused with the turkey tail mushroom due to appearance. Another lookalike is the multicolor gill polypore.",
    "scientificName": "Trametes versicolor",
    "characteristics": ["wavy", "multicolor", "fuzzy", "velvety", "pores", "thin", "stemless"],
    "imageUrl": "https://www.mayernikkitchen.com/pub/herb-images/20190313154829_TurkeyTailMushroom.jpg"
  },
  {
    "id": 15,
    "name": "Ravenel's Stinkhorn",
    "regions": ["southeast", "midwest", "northeast"],
    "description": "Phallus ravenelii, commonly known as Ravenel's stinkhorn, is a fungus in the Phallaceae (stinkhorn) family. It is found in eastern North America. Its mushrooms commonly grow in large clusters and are noted for their foul odor and phallic shape when mature. It is saprobic, and as such it is encountered in a wide variety of habitats rich in wood debris, from forests to mulched gardens or sawdust piles in urban areas.",
    "scientificName": "Phallus ravenelii",
    "characteristics": ["phallic", "foul odor", "smelly", "smooth", "brown"],
    "imageUrl": "https://www.seeit360.com/files2/imagecache/lightbox/img_1399.jpg"
  },
  {
    "id": 16,
    "name": "Indigo Milk Cap",
    "regions": ["southeast", "midwest", "northeast"],
    "description": "Lactarius indigo, commonly known as the indigo milk cap, the indigo (or blue) lactarius, or the blue milk mushroom, is a species of agaric fungus in the family Russulaceae. A widely distributed species, it grows naturally in eastern North America, East Asia, and Central America; it has also been reported in southern France. L. indigo grows on the ground in both deciduous and coniferous forests, where it forms mycorrhizal associations with a broad range of trees. The fruit body color ranges from dark blue in fresh specimens to pale blue-gray in older ones.",
    "scientificName": "Lactarius indigo",
    "characteristics": ["blue", "indigo", "gills", "vase"],
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Lactarius_indigo_48568_edit.jpg/1920px-Lactarius_indigo_48568_edit.jpg"
  },
  {
    "id": 17,
    "name": "Yellow Patches",
    "regions": ["northeast"],
    "description": "Amanita flavoconia, commonly known as yellow patches, yellow wart, orange amanita, yellow-dust amanita or the American yellow dust amanita, is a species of mushroom in the family Amanitaceae. It has an orangish-yellow cap with yellowish-orange patches or warts, a yellowish-orange annulus, and a white to orange stem. Common and widespread throughout eastern North America, Amanita flavoconia grows on the ground in broad-leaved and mixed forests, especially in mycorrhizal association with hemlock.",
    "scientificName": "Amanita flavoconia",
    "characteristics": ["yellow-orange", "yellow", "patches", "warts", "scales", "gills"],
    "imageUrl": "https://healing-mushrooms.net/wp-content/uploads/2020/09/Amanita-flavoconia-scaled.jpg"
  },
  {
    "id": 18,
    "name": "Angel's Wings",
    "regions": ["northeast", "pacific", "midwest", "southeast"],
    "description": "Pleurocybella porrigens is a species of fungus in the Marasmiaceae family. The species is widespread in temperate forests of the Northern Hemisphere. P. porrigens, known as the angel wing, is a white-rot wood-decay fungus on conifer wood, particularly hemlock (genus Tsuga). The flesh is thin and fragile compared to the oyster mushroom.",
    "scientificName": "Pleurocybella porrigens",
    "characteristics": ["white", "smooth", "wavy", "gills"],
    "imageUrl": "https://live.staticflickr.com/8035/8074272350_a7f61eda17_b.jpg"
  },
  {
    "id": 19,
    "name": "Chaga",
    "regions": ["northeast", "midwest"],
    "description": "Inonotus obliquus, commonly called chaga, is a fungus in the family Hymenochaetaceae. It is parasitic on birch and other trees. The sterile conk is irregularly formed and resembles burnt charcoal. It is not the fruiting body of the fungus, but a sclerotium or mass of mycelium, mostly black because of a great amount of melanin. Some people consider chaga medicinal. Inonotus obliquus is found most commonly in the Circumboreal Region of the Northern Hemisphere, where it is distributed in birch forests.",
    "scientificName": "Inonotus obliquus",
    "characteristics": ["black", "crusty", "rough"],
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Chaga_Mushroom_-_Inonotus_obliquus_%2840358524662%29.jpg/1280px-Chaga_Mushroom_-_Inonotus_obliquus_%2840358524662%29.jpg"
  },
  {
    "id": 20,
    "name": "Apricot's Jelly",
    "regions": ["northeast", "pacific"],
    "description": "Guepinia is a genus of fungus in the Auriculariales order. It is a monotypic genus, containing the single species Guepinia helvelloides, commonly known as the apricot jelly. The fungus produces salmon-pink, ear-shaped, gelatinous fruit bodies that grow solitarily or in small tufted groups on soil, usually associated with buried rotting wood.",
    "scientificName": "Guepinia helvelloides",
    "characteristics": ["pink", "salmon", "peach", "orange", "smooth"],
    "imageUrl": "https://inaturalist-open-data.s3.amazonaws.com/photos/2481682/original.jpg"
  },
  {
    "id": 21,
    "name": "Scarlet Cup",
    "regions": ["pacific"],
    "description": "Sarcoscypha coccinea, commonly known as the scarlet elf cup, scarlet elf cap, or the scarlet cup, is a species of fungus in the family Sarcoscyphaceae of the order Pezizales. The fungus, widely distributed in the Northern Hemisphere, has been found in Africa, Asia, Europe, North and South America, and Australia. The saprobic fungus grows on decaying sticks and branches in damp spots on forest floors, generally buried under leaf litter or in the soil. The cup-shaped fruit bodies are usually produced during the cooler months of winter and early spring.",
    "scientificName": "Sarcoscypha coccinea",
    "characteristics": ["red", "cup"],
    "imageUrl": "http://www.fungalpunknature.co.uk/Fungi/Sarcoscypha%20austriaca.jpg"
  },
  {
    "id": 22,
    "name": "Old Man of the Woods",
    "regions": ["midwest", "northeast", "southeast"],
    "description": "Strobilomyces strobilaceus, also called Strobilomyces floccopus and commonly known as old man of the woods, is a species of fungus in the family Boletaceae. It is native to Europe and North America. Fruit bodies are characterized by very soft dark grey to black pyramidal and overlapping scales on the cap surface.",
    "scientificName": "Strobilomyces floccopus",
    "characteristics": ["shaggy", "scales", "black", "dark gray"],
    "imageUrl": "https://wpamushroomclub.org/wp-content/uploads/2014/09/Strobilomyces-floccopus.jpg"
  },
  {
    "id": 23,
    "name": "Golden Reishi",
    "regions": ["midwest", "southeast", "northeast"],
    "description": "Ganoderma curtisii is a wood-decaying polypore whose distribution is primarily in the Southeastern United States. Distinguishing features include its gorgeous, lacquered cap and its pale brown flesh, which features melanoid bands but not concentric growth zones. It usually features a fairly well-developed lateral stem.",
    "scientificName": "Ganoderma curtisii",
    "characteristics": ["golden", "orange", "red"],
    "imageUrl": "https://inaturalist-open-data.s3.amazonaws.com/photos/13617121/original.jpg"
  },
  {
    "id": 24,
    "name": "Witch's Butter",
    "regions": ["midwest", "southeast", "northeast"],
    "description": "Tremella mesenterica (whose common names include yellow brain, golden jelly fungus, yellow trembler, and witch's butter) is a common jelly fungus in the family Tremellaceae of the Agaricomycotina. The gelatinous, orange-yellow fruit body of the fungus has a convoluted or lobed surface that is greasy or slimy when damp. It grows in crevices in bark, appearing during rainy weather. Within a few days after rain it dries into a thin film or shriveled mass capable of reviving after subsequent rain. This fungus occurs widely in deciduous and mixed forests and is widely distributed in temperate and tropical regions that include Africa, Asia, Australia, Europe, North and South America.",
    "scientificName": "Tremella mesenterica",
    "characteristics": ["yellow", "golden", "jelly", "lobes"],
    "imageUrl": "https://bloximages.newyork1.vip.townnews.com/lakemagazine.life/content/tncms/assets/v3/editorial/4/11/411e5428-4ceb-11ea-b0da-7b876a008525/5e42d71d00453.cover.jpg?crop=1586%2C1065%2C260%2C9&resize=1586%2C1065&order=crop%2Cresize"
  },
  {
    "id": 25,
    "name": "Hawk's Wing",
    "regions": ["pacific", "rocky-mountains", "northeast", "midwest"],
    "description": "Sarcodon imbricatus, commonly known as the shingled hedgehog, scaly hedgehog, or hawk's wing, is a species of tooth fungus in the order Thelephorales. The mushroom has a large, brownish cap with large brown scales and may reach 30 cm in diameter. On the underside it sports greyish, brittle teeth instead of gills, and has white flesh. Its spore print is brown. It is associated with spruce (Picea), appearing in autumn.",
    "scientificName": "Sarcodon imbricatus",
    "characteristics": ["brown", "dark brown", "shaggy", "scales"],
    "imageUrl": "https://www.modern-forager.com/wp-content/uploads/2018/07/hawgswing1000.jpg"
  },
  {
    "id": 26,
    "name": "Delicious Milky Cap",
    "regions": ["rocky-mountains", "pacific", "northeast", "midwest", "southwest", "southeast"],
    "description": "Lactarius deliciosus, commonly known as the saffron milk cap and red pine mushroom, is one of the best known members of the large milk-cap genus Lactarius in the order Russulales. It is found in Europe and has been accidentally introduced to other countries under conifers and can be found growing in pine plantations. A fresco in the Roman town of Herculaneum appears to depict Lactarius deliciosus and is one of the earliest pieces of art to illustrate a fungus.",
    "scientificName": "Lactarius deliciosus",
    "characteristics": ["orange", "gills"],
    "imageUrl": "https://www.first-nature.com/fungi/images/russulaceae/lactarius-deliciosus6.jpg"
  },
  {
    "id": 27,
    "name": "Fly Amanita",
    "regions": ["rocky-mountains", "pacific", "northeast"],
    "description": "Amanita muscaria, commonly known as the fly agaric or fly amanita, is a basidiomycete of the genus Amanita. It is also a muscimol mushroom. Native throughout the temperate and boreal regions of the Northern Hemisphere, Amanita muscaria has been unintentionally introduced to many countries in the Southern Hemisphere, generally as a symbiont with pine and birch plantations, and is now a true cosmopolitan species. Arguably the most iconic toadstool species, the fly agaric is a large white- gilled, white - spotted, usually red mushroom, and is one of the most recognizable and widely encountered in popular culture.",
    "scientificName": "Amanita Muscaria",
    "characteristics": ["red", "spotted", "gills"],
    "imageUrl": "https://static.inaturalist.org/photos/26555709/large.jpg"
  },
  {
    "id": 28,
    "name": "Orange Peel Fungus",
    "regions": ["rocky-mountains", "pacific", "northeast"],
    "description": "Aleuria aurantia (orange peel fungus) is a widespread ascomycete fungus in the order Pezizales. The brilliant orange, cup-shaped ascocarps often resemble orange peels strewn on the ground,[1] giving this species its common name.",
    "scientificName": "Aleuria aurantia",
    "characteristics": ["orange", "cup", "smooth"],
    "imageUrl": "https://www.uncovercolorado.com/wp-content/uploads/2020/04/Aleuria-Aurantia-Colorado.jpg"
  },
  {
    "id": 29,
    "name": "Pleated Inkcap",
    "regions": ["rocky-mountains", "pacific", "midwest", "southeast", "northeast"],
    "description": "Parasola plicatilis is a small saprotrophic mushroom with a plicate cap (diameter up to 35 mm). It is a widely distributed species in Europe and North America. This ink cap species is a decomposer which can be found in grassy areas, alone, scattered or in small groups. The fruiting bodies grow at night after rain, and will self decompose after spore dispersion is achieved. Otherwise, they are quickly dried up in morning sunlight, or will eventually collapse beneath the weight of their caps.",
    "scientificName": "Parasola plicatilis",
    "characteristics": ["white", "beige", "umbrella", "ridges"],
    "imageUrl": "https://www.uncovercolorado.com/wp-content/uploads/2020/04/Parasola-Plicatilis-Colorado.jpg"
  },
  {
    "id": 30,
    "name": "Eastern American Jack-O'-Lantern",
    "regions": ["midwest", "southeast", "northeast"],
    "description": "Omphalotus illudens, commonly known as the eastern jack-o'lantern mushroom, is a large, orange mushroom that is often found in clumps on decaying stumps, buried roots, or at the base of hardwood trees in eastern North America. Its gills often exhibit a weak green bioluminescence when fresh. This green glow has been mentioned in several journal articles, which state that the phenomenon can persist for several hours after the mushroom has been picked. It is believed that this display serves to attract insects to the mushroom's gills during nighttime, which can then distribute its spores across a wider area.",
    "scientificName": "Omphalotus illudens",
    "characteristics": ["orange", "yellow-orange", "smooth", "cluster", "gills", "bioluminescent"],
    "imageUrl": "https://blogs.illinois.edu/files/7362/566620/120540.jpg"
  },
  {
    "id": 31,
    "name": "Dead Man's Fingers",
    "regions": ["midwest", "southeast", "northeast"],
    "description": "Xylaria polymorpha, commonly known as dead man's fingers, is a saprobic fungus. It is a common inhabitant of forest and woodland areas, usually growing from the bases of rotting or injured tree stumps and decaying wood. It has also been known to colonize substrates like woody legume pods, petioles, and herbaceous stems. It is characterized by its elongated upright, clavate, or strap-like stromata poking up through the ground, much like fingers. Polymorpha means 'many forms'. As its name suggests, it has a very variable but often club-shaped fruiting body (stroma) resembling burned wood. Often this fungus is found with a multitude of separate 'digits' but at times the individual parts will be fused together.",
    "scientificName": "Xylaria polymorpha",
    "characteristics": ["beige", "brown", "dark brown", "black", "cylindrical", "club"],
    "imageUrl": "https://ultimate-mushroom.com/uploads/posts/2020-11/1605894303_xylaria-polymorpha-1.jpg"
  },
  {
    "id": 32,
    "name": "Kaibab Slippery Jack",
    "regions": ["southwest", "rocky-mountains"],
    "description": "Suillus kaibabensis is a species of fungus in the family Boletaceae. It is a hardy yellow member of the genus Suillus. While yellow is the primary color, it can also include brown and white tones in varying degrees as well. This mushroom has a stem around 2-4 cm long, and 1-2 cm thick. The cap is broad and convex to flat, typical of many species of boletes. The stipe is bare, spotted with olive brown and can be reddish-brown at the base. The pores are yellowish-brown that can turn a salmon color with age. Suillus kaibabensis grows in the four corners region of Arizona, New Mexico, Utah, and Colorado. This species exclusively prefers Ponderosa pine. It is mycorrhizal, and requires these trees to survive. It produces fruiting bodies during the wetter season of late July to September.",
    "scientificName": "Suillus kaibabensis",
    "characteristics": ["beige", "yellow", "yellow-brown", "tan", "pores"],
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/e/e5/Suillus_kaibabensis_Thiers_641095.jpg"
  },
  {
    "id": 33,
    "name": "Hygroscopic Earthstar",
    "regions": ["southwest", "rocky-mountains", "pacific", "southeast", "northeast", "midwest"],
    "description": "Astraeus hygrometricus, commonly known as the hygroscopic earthstar, the barometer earthstar, or the false earthstar, is a species of fungus in the family Diplocystaceae. Young specimens resemble a puffball when unopened. In maturity, the mushroom displays the characteristic earthstar shape that is a result of the outer layer of fruit body tissue splitting open in a star-like manner. The false earthstar is an ectomycorrhizal species that grows in association with various trees, especially in sandy soils. Its common names refer to the fact that it is hygroscopic (water-absorbing), and can open up its rays to expose the spore sac in response to increased humidity, and close them up again in drier conditions. The rays have an irregularly cracked surface, while the spore case is pale brown and smooth with an irregular slit or tear at the top. The gleba is white initially, but turns brown and powdery when the spores mature.",
    "scientificName": "Astraeus hygrometricus",
    "characteristics": ["star", "starfish", "brown"],
    "imageUrl": "https://ultimate-mushroom.com/uploads/posts/2020-12/1608500917_astraeus-hygrometricus-3.jpg"
  },
  {
    "id": 34,
    "name": "Cinnabar Red Polypore",
    "regions": ["southwest", "rocky-mountains", "pacific", "southeast", "northeast", "midwest"],
    "description": "Pycnoporus cinnabarinus, also known as the cinnabar polypore, is a saprophytic, white-rot decomposer. Its fruit body is a bright orange shelf fungus. It is common in many areas and is widely distributed throughout the world. It is inedible and it produces cinnabarinic acid to protect itself from bacteria.",
    "scientificName": "Pycnoporus cinnabarinus",
    "characteristics": ["orange", "red", "shelf", "stemless"],
    "imageUrl": "https://ultimate-mushroom.com/uploads/posts/2020-11/1605893606_pycnoporus-cinnabarinus-4.jpg"
  },
  {
    "id": 35,
    "name": "Golden Scalycap Mushroom",
    "regions": ["southwest", "rocky-mountains", "pacific", "southeast", "northeast", "midwest"],
    "description": "Pholiota aurivella is a species of fungus in the family Strophariaceae that is found in native forest of New Zealand, southern Canada, and in the United States. It is frequently found in the American West and Southwest, especially in late summer and fall. It is sticky or slimy when moist and grows in clusters on live or dead trees. The cap colour is bright to golden yellow, viscid when young with relatively dark scales. The stem is pale, and scaly closer to the bottom.",
    "scientificName": "Pholiota aurivella",
    "characteristics": ["scales", "yellow", "golden", "gills"],
    "imageUrl": "https://petehillmansnaturephotography.files.wordpress.com/2016/10/golden-scalycap-pholiota-aurivella.jpg"
  },
  {
    "id": 36,
    "name": "Luminescent Panellus",
    "regions": ["pacific", "southeast", "northeast", "midwest"],
    "description": "Panellus stipticus, commonly known as the bitter oyster, the astringent panus, the luminescent panellus, or the stiptic fungus, is a species of fungus in the family Mycenaceae, and the type species of the genus Panellus. A common and widely distributed species, it is found in Asia, Australia, Europe, and North America, where it grows in groups or dense overlapping clusters on the logs, stumps, and trunks of deciduous trees, especially beech, oak, and birch. Panellus stipticus is one of several dozen species of fungi that are bioluminescent.",
    "scientificName": "Panellus stipticus",
    "characteristics": ["bioluminescent", "ridges", "fan", "tan", "beige", "gills", "wavy"],
    "imageUrl": "https://pbs.twimg.com/media/FJEpZNpXEAEnAbg?format=jpg&name=large"
  },
  {
    "id": 37,
    "name": "The Sickener",
    "regions": ["pacific", "rocky-mountains", "northeast", "southeast"],
    "description": "Russula emetica, commonly known as the sickener, emetic russula, or vomiting russula, is a basidiomycete mushroom, and the type species of the genus Russula. It has a red, convex to flat cap with a cuticle that can be peeled off almost to the centre. The gills are white to pale cream, and closely spaced. First described in 1774, the mushroom has a wide distribution in the Northern Hemisphere, where it grows on the ground in damp woodlands in a mycorrhizal association with conifers, especially pine. The mushroom's common names refer to the gastrointestinal distress they cause when consumed raw. The flesh is extremely peppery, but this offensive taste, along with its toxicity, can be removed by parboiling or pickling. Although it used to be widely eaten in Russia and eastern European countries, it is generally not recommended for consumption.",
    "scientificName": "Russula emetica",
    "characteristics": ["red", "reddish", "smooth", "gills"],
    "imageUrl": "https://ultimate-mushroom.com/uploads/posts/2020-10/1602951340_russula-emetica-3.jpg"
  },
  {
    "id": 38,
    "name": "Black Morel",
    "regions": ["pacific", "rocky-mountains", "northeast", "midwest", "southwest"],
    "description": "Morchella angusticeps is a species of fungus in the family Morchellaceae native to eastern North America. In Colorado, they're found above elevations of 7,000 feet, and favor burn areas, aspen groves, and the ground beneath conifer trees. With a color and shape that can be difficult to distinguish from pinecones, the elusive and highly coveted black morel is known to appear between May and July, in association with various hardwoods in the spring.",
    "scientificName": "Morchella angusticeps",
    "characteristics": ["black", "ridges", "pitted", "brown", "dark brown"],
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Morchella_angusticeps_Peck_742492_crop.jpg/2560px-Morchella_angusticeps_Peck_742492_crop.jpg"
  },
  {
    "id": 39,
    "name": "Bleeding Fairy Helmet",
    "regions": ["pacific", "rocky-mountains", "northeast", "midwest", "southwest"],
    "description": "Mycena haematopus, commonly known as the bleeding fairy helmet, the burgundydrop bonnet, or the bleeding Mycena, is a species of fungus in the family Mycenaceae, of the order Agaricales. It is widespread and common in Europe and North America, and has also been collected in Japan and Venezuela. It is saprotrophic — meaning that it obtains nutrients by consuming decomposing organic matter — and the fruit bodies appear in small groups or clusters on the decaying logs, trunks, and stumps of deciduous trees, particularly beech. The fungus, first described scientifically in 1799, is classified in the section Lactipedes of the genus Mycena, along with other species that produce a milky or colored latex.",
    "scientificName": "Mycena haematopus",
    "characteristics": ["ridges", "scalloped", "reddish", "purplish", "gills"],
    "imageUrl": "https://images.mushroomobserver.org/1280/1305351.jpg"
  },
  {
    "id": 40,
    "name": "Honey Mushroom",
    "regions": ["southwest", "rocky-mountains", "pacific", "midwest", "northeast", "southeast"],
    "description": "Armillaria ostoyae is a species of fungus, pathogenic to trees, in the family Physalacriaceae. In the western United States, it is the most common variant of the group of species under the name Armillaria mellea. A. ostoyae is common on both hardwood and conifer wood in forests west of the Cascade Range in Oregon, United States. It has decurrent gills and the stipe has a ring. The mycelium invades the sapwood and is able to disseminate over great distances under the bark or between trees in the form of black rhizomorphs. In most areas of North America, Armillaria ostoyae can be separated from other species by its physical features: cream-brown colors, prominent cap scales, and a well-developed stem ring distinguish it from other Armillaria. Armillaria ostoyae grows and spreads primarily underground, such that the bulk of the organism is not visible from the surface.",
    "scientificName": "Armillaria ostoyae",
    "characteristics": ["beige", "brown", "tan", "scales", "gills"],
    "imageUrl": "https://inaturalist-open-data.s3.amazonaws.com/photos/4694601/large.jpg"
  },
  {
    "id": 41,
    "name": "Lobster Mushroom",
    "regions": ["southwest", "rocky-mountains", "pacific", "midwest", "northeast", "southeast"],
    "description": "Hypomyces lactifluorum, the lobster mushroom, contrary to its common name, is not a mushroom, but rather a parasitic ascomycete fungus that grows on certain species of mushrooms, turning them a reddish orange color that resembles the outer shell of a cooked lobster. H. lactifluorum specifically attacks members of the genera Lactarius and Lactifluus (milk-caps), and Russula (brittlegills), such as Russula brevipes and Lactifluus piperatus in North America. At maturity, H. lactifluorum thoroughly covers its host, rendering it unidentifiable.",
    "scientificName": "Hypomyces lactifluorum",
    "characteristics": ["orange", "orange-red", "red", "reddish"],
    "imageUrl": "https://inaturalist-open-data.s3.amazonaws.com/photos/4694601/large.jpg"
  }
];

module.exports = fungi;