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
    "regions": ["Pacific"],
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
    "description": "Amanita flavoconia, commonly known as yellow patches, yellow wart, orange amanita, yellow-dust amanita or the American yellow dust amanita,[2] is a species of mushroom in the family Amanitaceae. It has an orangish-yellow cap with yellowish-orange patches or warts, a yellowish-orange annulus, and a white to orange stem. Common and widespread throughout eastern North America, Amanita flavoconia grows on the ground in broad-leaved and mixed forests, especially in mycorrhizal association with hemlock.",
    "scientificName": "Amanita flavoconia",
    "characteristics": [],
    "imageUrl": "https://healing-mushrooms.net/wp-content/uploads/2020/09/Amanita-flavoconia-scaled.jpg"
  },
];

module.exports = fungi;