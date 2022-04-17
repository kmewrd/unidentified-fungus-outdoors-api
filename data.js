// regions: Pacific, Rocky Mountains, Southwest, Southeast, Midwest, Northeast

const fungi = [
  {
    "id": 1,
    "name": "Pacific Golden Chantarelle",
    "regions": ["Pacific"],
    "description": "Chanterelles can be found in shady areas under conifer trees, growing out of the soil. In Washington, they have a symbiotic relationship with Douglas fir, spruce, and hemlock. They have an orange coloring with ridges on the underside that are referred to as “false gills.” When cut open, the flesh inside of the stalk is solid, with white coloring.",
    "scientificName": "Cantharellus formosus",
    "characteristics": [],
    "imageUrl": null
  },
  {
    "id": 2,
    "name": "Chicken-of-the-Woods",
    "regions": ["Pacific"],
    "description": "Chicken-of-the-woods is an easy to spot, recognizable fungi that is often found in large clusters or “shelves” on living and dead trees. They are orange and yellow in color, and bright coloring indicates the fruiting body is ready for harvest, as it tends to become pale with age. What's interesting about this fungi is that it actually tastes like chicken! Many have found they can use chicken-of-the woods in many recipes that call for chicken.",
    "scientificName": "Laetiporus sulphureus",
    "characteristics": [],
    "imageUrl": null
  },
  {
    "id": 3,
    "name": "Oyster",
    "regions": ["Southeast"],
    "description": "Pleurotus is a genus of gilled mushrooms which includes one of the most widely eaten mushrooms, P. ostreatus. Species of Pleurotus may be called oyster, abalone, or tree mushrooms, and are some of the most commonly cultivated edible mushrooms in the world.Pleurotus fungi have been used in mycoremediation of pollutants such as petroleum and polycyclic aromatic hydrocarbons.",
    "scientificName": "Pleurotus ostreatus",
    "characteristics": [],
    "imageUrl": null
  },
  {
    "id": 4,
    "name": "Shaggy Mane",
    "regions": ["Pacific"],
    "description": "Also known as “lawyer's wig” or “inky cap” mushrooms, these fungi are quite common and a desirable edible. Where I live, they make their appearance in late September to early October, with the first big rain. The stalks are smooth and the white caps burst from the ground with a cylindrical, torpedo-like shape. Eventually, the surface of the caps will become flakey, making the caps look “shaggy.” Harvest them quickly because if you let them develop for too long, the caps will flatten out, grow black and inky around the edges and eventually disintegrate.",
    "scientificName": "Coprinus comatus",
    "characteristics": [],
    "imageUrl": null
  },
  {
    "id": 5,
    "name": "Lion's Mane",
    "regions": ["Pacific", "Southeast"],
    "description": "Hericium erinaceus (also called lion's mane mushroom, monkey head mushroom, bearded tooth mushroom, satyr's beard, bearded hedgehog mushroom, pom pom mushroom, or bearded tooth fungus) is an edible and medicinal mushroom belonging to the tooth fungus group. Native to North America, Europe and Asia it can be identified by its long spines (greater than 1 cm length), its appearance on hardwoods and its tendency to grow a single clump of dangling spines. Hericium erinaceus can be mistaken for other species of Hericium, which are all popular edibles that grow across the same range. In the wild, these mushrooms are common during late summer and fall on hardwoods, particularly American beech.",
    "scientificName": "Hericium erinaceus",
    "characteristics": [],
    "imageUrl": null
  },
  {
    "id": 6,
    "name": "Porcini",
    "regions": ["Pacific"],
    "description": "Boletus edulis is a basidiomycete fungus, and the type species of the genus Boletus. Widely distributed in the Northern Hemisphere across Europe, Asia, and North America, it does not occur naturally in the Southern Hemisphere, although it has been introduced to southern Africa, Australia, New Zealand, and Brazil. Several closely related European mushrooms formerly thought to be varieties or forms of B. edulis have been shown using molecular phylogenetic analysis to be distinct species, and others previously classed as separate species are conspecific with this species. The western North American species commonly known as the California king bolete (Boletus edulis var. grandedulis) is a large, darker-coloured variant first formally identified in 2007.",
    "scientificName": "Boletus edulis",
    "characteristics": [],
    "imageUrl": null
  },
  {
    "id": 7,
    "name": "Puffball",
    "regions": ["Pacific", "Rocky Mountains"],
    "description": "Calbovista is a fungal genus containing the single species Calbovista subsculpta, commonly known as the sculptured puffball, sculptured giant puffball, and warted giant puffball. It is a common puffball of the Rocky Mountains and Pacific Coast ranges of western North America. The puffball is more or less round with a diameter of up to 15 cm (6 in), white becoming brownish in age, and covered with shallow pyramid-shaped plates or scales. It fruits singly or in groups along roads and in open woods at high elevations, from summer to autumn.",
    "scientificName": "Calbovista",
    "characteristics": [],
    "imageUrl": null
  },
  {
    "id": 8,
    "name": "Giant Puffball",
    "regions": ["Midwest"],
    "description": "Calvatia gigantea, commonly known as the giant puffball, is a puffball mushroom commonly found in meadows, fields, and deciduous forests usually in late summer and autumn. It is found in temperate areas throughout the world.",
    "scientificName": "Calvatia gigantea",
    "characteristics": [],
    "imageUrl": null
  },
  {
    "id": 9,
    "name": "Funnel Chanterelle",
    "regions": ["Pacific"],
    "description": "Craterellus tubaeformis (formerly Cantharellus tubaeformis) is an edible fungus, also known as Yellowfoot, winter mushroom, or Funnel Chanterelle. It is mycorrhizal, forming symbiotic associations with plants, making it very challenging to cultivate. It is smaller than the golden chanterelle (Cantharellus cibarius) and has a dark brown cap with paler gills and a hollow yellow stem. C. tubaeformis tastes stronger but less fruity than the golden chanterelle. It has a very distinctive smokey, peppery taste when raw. It grows in temperate and cold parts of North America and Europe, including Scandinavia, Finland, Russia, and the British Isles, as well as in the Himalayas in Asia and in Thailand.",
    "scientificName": "Craterellus tubaeformis",
    "characteristics": [],
    "imageUrl": null
  },
  {
    "id": 10,
    "name": "Wood Blewit",
    "regions": ["Pacific", "Midwest"],
    "description": "Clitocybe nuda, commonly known as the wood blewit and alternately described as Lepista nuda, is an edible mushroom native to Europe and North America. Described by Pierre Bulliard in 1790, it was also known as Tricholoma nudum for many years. It is found in both coniferous and deciduous woodlands. It is a fairly distinctive mushroom that is widely eaten, though there is some caution about edibility. Nevertheless, it has been cultivated in Britain, the Netherlands and France.",
    "scientificName": "Clitocybe nuda",
    "characteristics": [],
    "imageUrl": null
  },
  {
    "id": 11,
    "name": "Black Trumpet",
    "regions": ["Northeast"],
    "description": "This fascinating mushroom, often called the black trumpet, is common and easily recognized - but hard to discover. The mushrooms are small and black, and something about their shape and fruiting pattern can make them extremely difficult to see. The vase-shaped fruiting bodies have finely scaly, gray to black upper surfaces and smooth or very shallowly wrinkled outer surfaces that are initially blackish but develop yellowish to orangish shades as the spores mature.",
    "scientificName": "Craterellus cornucopioides",
    "characteristics": [],
    "imageUrl": null
  },
  {
    "id": 12,
    "name": "Hen-of-the-Woods",
    "regions": ["Northeast"],
    "description": "Grifola frondosa is a polypore mushroom that grows in clusters at the base of trees, particularly oaks. The mushroom is commonly known among English speakers as hen-of-the-woods, ram's head and sheep's head. It is typically found in late summer to early autumn. In the United States' supplement market, as well as in Asian grocery stores, the mushroom is known by its Japanese name maitake. Throughout Italian American communities in the northeastern United States, it is commonly known as the signorina mushroom. G. frondosa should not be confused with Laetiporus sulphureus, another edible bracket fungus that is commonly called chicken of the woods or sulphur shelf. It is native to China, the northeastern part of Japan and North America.",
    "scientificName": "Grifola frondosa",
    "characteristics": [],
    "imageUrl": null
  },
  {
    "id": 13,
    "name": "Morel",
    "regions": [],
    "description": "Morchella, the true morels, is a genus of edible sac fungi closely related to anatomically simpler cup fungi in the order Pezizales (division Ascomycota). These distinctive fungi have a honeycomb appearance due to the network of ridges with pits composing their caps. Morels are prized by gourmet cooks, particularly in French cuisine. Due to difficulties in cultivation, commercial harvesting of wild morels has become a multimillion-dollar industry in the temperate Northern Hemisphere, in particular North America, Turkey, China, the Himalayas, India, and Pakistan, where these highly prized fungi are found in abundance. Typified by Morchella esculenta in 1794, the genus has been the source of considerable taxonomical controversy throughout the years, mostly with regard to the number of species involved, with some mycologists recognising as few as three species and others over thirty. Current molecular phylogenetics suggest there might be over seventy species of Morchella worldwide, most of them exhibiting high continental endemism and provincialism.",
    "scientificName": "Morchella",
    "characteristics": [],
    "imageUrl": null
  },
  {
    "id": 14,
    "name": "Oyster",
    "regions": ["Midwest", "Pacific", "Southeast"],
    "description": "Pleurotus ostreatus, the pearl oyster mushroom or tree oyster mushroom, is a common edible mushroom. It was first cultivated in Germany as a subsistence measure during World War I[2] and is now grown commercially around the world for food. It is related to the similarly cultivated king oyster mushroom. Oyster mushrooms can also be used industrially for mycoremediation purposes. The oyster mushroom is one of the more commonly sought wild mushrooms, though it can also be cultivated on straw and other media. It has the bittersweet aroma of benzaldehyde (which is also characteristic of bitter almonds).",
    "scientificName": "Pleurotus ostreatus",
    "characteristics": [],
    "imageUrl": null
  },
  {
    "id": 15,
    "name": "Turkey Tail",
    "regions": ["Southeast"],
    "description": "Trametes versicolor - also known as Coriolus versicolor and Polyporus versicolor - is a common polypore mushroom found throughout the world. Meaning 'of several colors', versicolor reliably describes this fungus that displays a variety of colors. For example, because its shape and multiple colors are similar to those of a wild turkey, T. versicolor is commonly called turkey tail. A similar looking mushroom, commonly called false turkey tail, which is from a different order, may sometimes be confused with the turkey tail mushroom due to appearance. Another lookalike is the multicolor gill polypore.",
    "scientificName": "Trametes versicolor",
    "characteristics": [],
    "imageUrl": null
  },
  {
    "id": 16,
    "name": "Ravenel's Stinkhorn",
    "regions": ["Southeast"],
    "description": "Phallus ravenelii, commonly known as Ravenel's stinkhorn, is a fungus in the Phallaceae (stinkhorn) family. It is found in eastern North America. Its mushrooms commonly grow in large clusters and are noted for their foul odor and phallic shape when mature. It is saprobic, and as such it is encountered in a wide variety of habitats rich in wood debris, from forests to mulched gardens or sawdust piles in urban areas.",
    "scientificName": "Phallus ravenelii",
    "characteristics": [],
    "imageUrl": null
  },
  {
    "id": 17,
    "name": "Indigo Milk Cap",
    "regions": ["Southeast"],
    "description": "Lactarius indigo, commonly known as the indigo milk cap, the indigo (or blue) lactarius, or the blue milk mushroom, is a species of agaric fungus in the family Russulaceae. A widely distributed species, it grows naturally in eastern North America, East Asia, and Central America; it has also been reported in southern France. L. indigo grows on the ground in both deciduous and coniferous forests, where it forms mycorrhizal associations with a broad range of trees. The fruit body color ranges from dark blue in fresh specimens to pale blue-gray in older ones.",
    "scientificName": "Lactarius indigo",
    "characteristics": [],
    "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Lactarius_indigo_48568_edit.jpg/1920px-Lactarius_indigo_48568_edit.jpg"
  },
  {
    "id": 18,
    "name": "Yellow Patches",
    "regions": ["Northeast"],
    "description": "Amanita flavoconia, commonly known as yellow patches, yellow wart, orange amanita, yellow-dust amanita or the American yellow dust amanita,[2] is a species of mushroom in the family Amanitaceae. It has an orangish-yellow cap with yellowish-orange patches or warts, a yellowish-orange annulus, and a white to orange stem. Common and widespread throughout eastern North America, Amanita flavoconia grows on the ground in broad-leaved and mixed forests, especially in mycorrhizal association with hemlock.",
    "scientificName": "Lactarius indigo",
    "characteristics": [],
    "imageUrl": null
  },
];

module.exports = fungi;