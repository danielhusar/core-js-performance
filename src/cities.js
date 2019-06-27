const cities = [
  {
    "name": "Abilene"
  },
  {
    "name": "Addison"
  },
  {
    "name": "Akron"
  },
  {
    "name": "Alameda"
  },
  {
    "name": "Albany"
  },
  {
    "name": "Albuquerque"
  },
  {
    "name": "Alexandria"
  },
  {
    "name": "Alhambra"
  },
  {
    "name": "Aliso Viejo"
  },
  {
    "name": "Allen"
  },
  {
    "name": "Allentown"
  },
  {
    "name": "Alpharetta"
  },
  {
    "name": "Altamonte Springs"
  },
  {
    "name": "Altoona"
  },
  {
    "name": "Amarillo"
  },
  {
    "name": "Ames"
  },
  {
    "name": "Anaheim"
  },
  {
    "name": "Anchorage"
  },
  {
    "name": "Anderson"
  },
  {
    "name": "Ankeny"
  },
  {
    "name": "Ann Arbor"
  },
  {
    "name": "Annapolis"
  },
  {
    "name": "Antioch"
  },
  {
    "name": "Apache Junction"
  },
  {
    "name": "Apex"
  },
  {
    "name": "Apopka"
  },
  {
    "name": "Apple Valley"
  },
  {
    "name": "Appleton"
  },
  {
    "name": "Arcadia"
  },
  {
    "name": "Arlington"
  },
  {
    "name": "Arlington Heights"
  },
  {
    "name": "Arvada"
  },
  {
    "name": "Asheville"
  },
  {
    "name": "Athens-Clarke County"
  },
  {
    "name": "Atlanta"
  },
  {
    "name": "Atlantic City"
  },
  {
    "name": "Attleboro"
  },
  {
    "name": "Auburn"
  },
  {
    "name": "Augusta-Richmond County"
  },
  {
    "name": "Aurora"
  },
  {
    "name": "Austin"
  },
  {
    "name": "Aventura"
  },
  {
    "name": "Avondale"
  },
  {
    "name": "Azusa"
  },
  {
    "name": "Bakersfield"
  },
  {
    "name": "Baldwin Park"
  },
  {
    "name": "Baltimore"
  },
  {
    "name": "Barnstable Town"
  },
  {
    "name": "Bartlett"
  },
  {
    "name": "Baton Rouge"
  },
  {
    "name": "Battle Creek"
  },
  {
    "name": "Bayonne"
  },
  {
    "name": "Baytown"
  },
  {
    "name": "Beaumont"
  },
  {
    "name": "Beavercreek"
  },
  {
    "name": "Beaverton"
  },
  {
    "name": "Bedford"
  },
  {
    "name": "Bell Gardens"
  },
  {
    "name": "Belleville"
  },
  {
    "name": "Bellevue"
  },
  {
    "name": "Bellflower"
  },
  {
    "name": "Bellingham"
  },
  {
    "name": "Beloit"
  },
  {
    "name": "Bend"
  },
  {
    "name": "Bentonville"
  },
  {
    "name": "Berkeley"
  },
  {
    "name": "Berwyn"
  },
  {
    "name": "Bethlehem"
  },
  {
    "name": "Beverly"
  },
  {
    "name": "Billings"
  },
  {
    "name": "Biloxi"
  },
  {
    "name": "Binghamton"
  },
  {
    "name": "Birmingham"
  },
  {
    "name": "Bismarck"
  },
  {
    "name": "Blacksburg"
  },
  {
    "name": "Blaine"
  },
  {
    "name": "Bloomington"
  },
  {
    "name": "Blue Springs"
  },
  {
    "name": "Boca Raton"
  },
  {
    "name": "Boise City"
  },
  {
    "name": "Bolingbrook"
  },
  {
    "name": "Bonita Springs"
  },
  {
    "name": "Bossier City"
  },
  {
    "name": "Boston"
  },
  {
    "name": "Boulder"
  },
  {
    "name": "Bountiful"
  },
  {
    "name": "Bowie"
  },
  {
    "name": "Bowling Green"
  },
  {
    "name": "Boynton Beach"
  },
  {
    "name": "Bozeman"
  },
  {
    "name": "Bradenton"
  },
  {
    "name": "Brea"
  },
  {
    "name": "Bremerton"
  },
  {
    "name": "Brentwood"
  },
  {
    "name": "Bridgeport"
  },
  {
    "name": "Bristol"
  },
  {
    "name": "Brockton"
  },
  {
    "name": "Broken Arrow"
  },
  {
    "name": "Brookfield"
  },
  {
    "name": "Brookhaven"
  },
  {
    "name": "Brooklyn Park"
  },
  {
    "name": "Broomfield"
  },
  {
    "name": "Brownsville"
  },
  {
    "name": "Bryan"
  },
  {
    "name": "Buckeye"
  },
  {
    "name": "Buena Park"
  },
  {
    "name": "Buffalo"
  },
  {
    "name": "Buffalo Grove"
  },
  {
    "name": "Bullhead City"
  },
  {
    "name": "Burbank"
  },
  {
    "name": "Burien"
  },
  {
    "name": "Burleson"
  },
  {
    "name": "Burlington"
  },
  {
    "name": "Burnsville"
  },
  {
    "name": "Caldwell"
  },
  {
    "name": "Calexico"
  },
  {
    "name": "Calumet City"
  },
  {
    "name": "Camarillo"
  },
  {
    "name": "Cambridge"
  },
  {
    "name": "Camden"
  },
  {
    "name": "Campbell"
  },
  {
    "name": "Canton"
  },
  {
    "name": "Cape Coral"
  },
  {
    "name": "Cape Girardeau"
  },
  {
    "name": "Carlsbad"
  },
  {
    "name": "Carmel"
  },
  {
    "name": "Carol Stream"
  },
  {
    "name": "Carpentersville"
  },
  {
    "name": "Carrollton"
  },
  {
    "name": "Carson"
  },
  {
    "name": "Carson City"
  },
  {
    "name": "Cary"
  },
  {
    "name": "Casa Grande"
  },
  {
    "name": "Casper"
  },
  {
    "name": "Castle Rock"
  },
  {
    "name": "Cathedral City"
  },
  {
    "name": "Cedar Falls"
  },
  {
    "name": "Cedar Hill"
  },
  {
    "name": "Cedar Park"
  },
  {
    "name": "Cedar Rapids"
  },
  {
    "name": "Centennial"
  },
  {
    "name": "Ceres"
  },
  {
    "name": "Cerritos"
  },
  {
    "name": "Champaign"
  },
  {
    "name": "Chandler"
  },
  {
    "name": "Chapel Hill"
  },
  {
    "name": "Charleston"
  },
  {
    "name": "Charlotte"
  },
  {
    "name": "Charlottesville"
  },
  {
    "name": "Chattanooga"
  },
  {
    "name": "Chelsea"
  },
  {
    "name": "Chesapeake"
  },
  {
    "name": "Chesterfield"
  },
  {
    "name": "Cheyenne"
  },
  {
    "name": "Chicago"
  },
  {
    "name": "Chico"
  },
  {
    "name": "Chicopee"
  },
  {
    "name": "Chino"
  },
  {
    "name": "Chino Hills"
  },
  {
    "name": "Chula Vista"
  },
  {
    "name": "Cicero"
  },
  {
    "name": "Cincinnati"
  },
  {
    "name": "Citrus Heights"
  },
  {
    "name": "Clarksville"
  },
  {
    "name": "Clearwater"
  },
  {
    "name": "Cleveland"
  },
  {
    "name": "Cleveland Heights"
  },
  {
    "name": "Clifton"
  },
  {
    "name": "Clovis"
  },
  {
    "name": "Coachella"
  },
  {
    "name": "Coconut Creek"
  },
  {
    "name": "Coeur d'Alene"
  },
  {
    "name": "College Station"
  },
  {
    "name": "Collierville"
  },
  {
    "name": "Colorado Springs"
  },
  {
    "name": "Colton"
  },
  {
    "name": "Columbia"
  },
  {
    "name": "Columbus"
  },
  {
    "name": "Commerce City"
  },
  {
    "name": "Compton"
  },
  {
    "name": "Concord"
  },
  {
    "name": "Conroe"
  },
  {
    "name": "Conway"
  },
  {
    "name": "Coon Rapids"
  },
  {
    "name": "Coppell"
  },
  {
    "name": "Coral Gables"
  },
  {
    "name": "Coral Springs"
  },
  {
    "name": "Corona"
  },
  {
    "name": "Corpus Christi"
  },
  {
    "name": "Corvallis"
  },
  {
    "name": "Costa Mesa"
  },
  {
    "name": "Council Bluffs"
  },
  {
    "name": "Covina"
  },
  {
    "name": "Covington"
  },
  {
    "name": "Cranston"
  },
  {
    "name": "Crystal Lake"
  },
  {
    "name": "Culver City"
  },
  {
    "name": "Cupertino"
  },
  {
    "name": "Cutler Bay"
  },
  {
    "name": "Cuyahoga Falls"
  },
  {
    "name": "Cypress"
  },
  {
    "name": "Dallas"
  },
  {
    "name": "Daly City"
  },
  {
    "name": "Danbury"
  },
  {
    "name": "Danville"
  },
  {
    "name": "Davenport"
  },
  {
    "name": "Davie"
  },
  {
    "name": "Davis"
  },
  {
    "name": "Dayton"
  },
  {
    "name": "Daytona Beach"
  },
  {
    "name": "DeKalb"
  },
  {
    "name": "DeSoto"
  },
  {
    "name": "Dearborn"
  },
  {
    "name": "Dearborn Heights"
  },
  {
    "name": "Decatur"
  },
  {
    "name": "Deerfield Beach"
  },
  {
    "name": "Delano"
  },
  {
    "name": "Delray Beach"
  },
  {
    "name": "Deltona"
  },
  {
    "name": "Denton"
  },
  {
    "name": "Denver"
  },
  {
    "name": "Des Moines"
  },
  {
    "name": "Des Plaines"
  },
  {
    "name": "Detroit"
  },
  {
    "name": "Diamond Bar"
  },
  {
    "name": "Doral"
  },
  {
    "name": "Dothan"
  },
  {
    "name": "Dover"
  },
  {
    "name": "Downers Grove"
  },
  {
    "name": "Downey"
  },
  {
    "name": "Draper"
  },
  {
    "name": "Dublin"
  },
  {
    "name": "Dubuque"
  },
  {
    "name": "Duluth"
  },
  {
    "name": "Duncanville"
  },
  {
    "name": "Dunwoody"
  },
  {
    "name": "Durham"
  },
  {
    "name": "Eagan"
  },
  {
    "name": "East Lansing"
  },
  {
    "name": "East Orange"
  },
  {
    "name": "East Providence"
  },
  {
    "name": "Eastvale"
  },
  {
    "name": "Eau Claire"
  },
  {
    "name": "Eden Prairie"
  },
  {
    "name": "Edina"
  },
  {
    "name": "Edinburg"
  },
  {
    "name": "Edmond"
  },
  {
    "name": "Edmonds"
  },
  {
    "name": "El Cajon"
  },
  {
    "name": "El Centro"
  },
  {
    "name": "El Monte"
  },
  {
    "name": "El Paso"
  },
  {
    "name": "Elgin"
  },
  {
    "name": "Elizabeth"
  },
  {
    "name": "Elk Grove"
  },
  {
    "name": "Elkhart"
  },
  {
    "name": "Elmhurst"
  },
  {
    "name": "Elyria"
  },
  {
    "name": "Encinitas"
  },
  {
    "name": "Enid"
  },
  {
    "name": "Erie"
  },
  {
    "name": "Escondido"
  },
  {
    "name": "Euclid"
  },
  {
    "name": "Eugene"
  },
  {
    "name": "Euless"
  },
  {
    "name": "Evanston"
  },
  {
    "name": "Evansville"
  },
  {
    "name": "Everett"
  },
  {
    "name": "Fairfield"
  },
  {
    "name": "Fall River"
  },
  {
    "name": "Fargo"
  },
  {
    "name": "Farmington"
  },
  {
    "name": "Farmington Hills"
  },
  {
    "name": "Fayetteville"
  },
  {
    "name": "Federal Way"
  },
  {
    "name": "Findlay"
  },
  {
    "name": "Fishers"
  },
  {
    "name": "Fitchburg"
  },
  {
    "name": "Flagstaff"
  },
  {
    "name": "Flint"
  },
  {
    "name": "Florence"
  },
  {
    "name": "Florissant"
  },
  {
    "name": "Flower Mound"
  },
  {
    "name": "Folsom"
  },
  {
    "name": "Fond du Lac"
  },
  {
    "name": "Fontana"
  },
  {
    "name": "Fort Collins"
  },
  {
    "name": "Fort Lauderdale"
  },
  {
    "name": "Fort Myers"
  },
  {
    "name": "Fort Pierce"
  },
  {
    "name": "Fort Smith"
  },
  {
    "name": "Fort Wayne"
  },
  {
    "name": "Fort Worth"
  },
  {
    "name": "Fountain Valley"
  },
  {
    "name": "Franklin"
  },
  {
    "name": "Frederick"
  },
  {
    "name": "Freeport"
  },
  {
    "name": "Fremont"
  },
  {
    "name": "Fresno"
  },
  {
    "name": "Friendswood"
  },
  {
    "name": "Frisco"
  },
  {
    "name": "Fullerton"
  },
  {
    "name": "Gainesville"
  },
  {
    "name": "Gaithersburg"
  },
  {
    "name": "Galveston"
  },
  {
    "name": "Garden Grove"
  },
  {
    "name": "Gardena"
  },
  {
    "name": "Garland"
  },
  {
    "name": "Gary"
  },
  {
    "name": "Gastonia"
  },
  {
    "name": "Georgetown"
  },
  {
    "name": "Germantown"
  },
  {
    "name": "Gilbert"
  },
  {
    "name": "Gilroy"
  },
  {
    "name": "Glendale"
  },
  {
    "name": "Glendora"
  },
  {
    "name": "Glenview"
  },
  {
    "name": "Goodyear"
  },
  {
    "name": "Goose Creek"
  },
  {
    "name": "Grand Forks"
  },
  {
    "name": "Grand Island"
  },
  {
    "name": "Grand Junction"
  },
  {
    "name": "Grand Prairie"
  },
  {
    "name": "Grand Rapids"
  },
  {
    "name": "Grapevine"
  },
  {
    "name": "Great Falls"
  },
  {
    "name": "Greeley"
  },
  {
    "name": "Green Bay"
  },
  {
    "name": "Greenacres"
  },
  {
    "name": "Greenfield"
  },
  {
    "name": "Greensboro"
  },
  {
    "name": "Greenville"
  },
  {
    "name": "Greenwood"
  },
  {
    "name": "Gresham"
  },
  {
    "name": "Grove City"
  },
  {
    "name": "Gulfport"
  },
  {
    "name": "Hackensack"
  },
  {
    "name": "Hagerstown"
  },
  {
    "name": "Hallandale Beach"
  },
  {
    "name": "Haltom City"
  },
  {
    "name": "Hamilton"
  },
  {
    "name": "Hammond"
  },
  {
    "name": "Hampton"
  },
  {
    "name": "Hanford"
  },
  {
    "name": "Hanover Park"
  },
  {
    "name": "Harlingen"
  },
  {
    "name": "Harrisburg"
  },
  {
    "name": "Harrisonburg"
  },
  {
    "name": "Hartford"
  },
  {
    "name": "Hattiesburg"
  },
  {
    "name": "Haverhill"
  },
  {
    "name": "Hawthorne"
  },
  {
    "name": "Hayward"
  },
  {
    "name": "Hemet"
  },
  {
    "name": "Hempstead"
  },
  {
    "name": "Henderson"
  },
  {
    "name": "Hendersonville"
  },
  {
    "name": "Hesperia"
  },
  {
    "name": "Hialeah"
  },
  {
    "name": "Hickory"
  },
  {
    "name": "High Point"
  },
  {
    "name": "Highland"
  },
  {
    "name": "Hillsboro"
  },
  {
    "name": "Hilton Head Island"
  },
  {
    "name": "Hoboken"
  },
  {
    "name": "Hoffman Estates"
  },
  {
    "name": "Hollywood"
  },
  {
    "name": "Holyoke"
  },
  {
    "name": "Homestead"
  },
  {
    "name": "Honolulu"
  },
  {
    "name": "Hoover"
  },
  {
    "name": "Houston"
  },
  {
    "name": "Huber Heights"
  },
  {
    "name": "Huntersville"
  },
  {
    "name": "Huntington"
  },
  {
    "name": "Huntington Beach"
  },
  {
    "name": "Huntington Park"
  },
  {
    "name": "Huntsville"
  },
  {
    "name": "Hurst"
  },
  {
    "name": "Hutchinson"
  },
  {
    "name": "Idaho Falls"
  },
  {
    "name": "Independence"
  },
  {
    "name": "Indianapolis"
  },
  {
    "name": "Indio"
  },
  {
    "name": "Inglewood"
  },
  {
    "name": "Iowa City"
  },
  {
    "name": "Irvine"
  },
  {
    "name": "Irving"
  },
  {
    "name": "Jackson"
  },
  {
    "name": "Jacksonville"
  },
  {
    "name": "Janesville"
  },
  {
    "name": "Jefferson City"
  },
  {
    "name": "Jeffersonville"
  },
  {
    "name": "Jersey City"
  },
  {
    "name": "Johns Creek"
  },
  {
    "name": "Johnson City"
  },
  {
    "name": "Joliet"
  },
  {
    "name": "Jonesboro"
  },
  {
    "name": "Joplin"
  },
  {
    "name": "Jupiter"
  },
  {
    "name": "Jurupa Valley"
  },
  {
    "name": "Kalamazoo"
  },
  {
    "name": "Kannapolis"
  },
  {
    "name": "Kansas City"
  },
  {
    "name": "Kearny"
  },
  {
    "name": "Keizer"
  },
  {
    "name": "Keller"
  },
  {
    "name": "Kenner"
  },
  {
    "name": "Kennewick"
  },
  {
    "name": "Kenosha"
  },
  {
    "name": "Kent"
  },
  {
    "name": "Kentwood"
  },
  {
    "name": "Kettering"
  },
  {
    "name": "Killeen"
  },
  {
    "name": "Kingsport"
  },
  {
    "name": "Kirkland"
  },
  {
    "name": "Kissimmee"
  },
  {
    "name": "Knoxville"
  },
  {
    "name": "Kokomo"
  },
  {
    "name": "La Crosse"
  },
  {
    "name": "La Habra"
  },
  {
    "name": "La Mesa"
  },
  {
    "name": "La Mirada"
  },
  {
    "name": "La Puente"
  },
  {
    "name": "La Quinta"
  },
  {
    "name": "Lacey"
  },
  {
    "name": "Lafayette"
  },
  {
    "name": "Laguna Niguel"
  },
  {
    "name": "Lake Charles"
  },
  {
    "name": "Lake Elsinore"
  },
  {
    "name": "Lake Forest"
  },
  {
    "name": "Lake Havasu City"
  },
  {
    "name": "Lake Oswego"
  },
  {
    "name": "Lakeland"
  },
  {
    "name": "Lakeville"
  },
  {
    "name": "Lakewood"
  },
  {
    "name": "Lancaster"
  },
  {
    "name": "Lansing"
  },
  {
    "name": "Laredo"
  },
  {
    "name": "Largo"
  },
  {
    "name": "Las Cruces"
  },
  {
    "name": "Las Vegas"
  },
  {
    "name": "Lauderhill"
  },
  {
    "name": "Lawrence"
  },
  {
    "name": "Lawton"
  },
  {
    "name": "Layton"
  },
  {
    "name": "League City"
  },
  {
    "name": "Lee's Summit"
  },
  {
    "name": "Leesburg"
  },
  {
    "name": "Lehi"
  },
  {
    "name": "Lenexa"
  },
  {
    "name": "Leominster"
  },
  {
    "name": "Lewisville"
  },
  {
    "name": "Lexington-Fayette"
  },
  {
    "name": "Lima"
  },
  {
    "name": "Lincoln"
  },
  {
    "name": "Lincoln Park"
  },
  {
    "name": "Linden"
  },
  {
    "name": "Little Rock"
  },
  {
    "name": "Littleton"
  },
  {
    "name": "Livermore"
  },
  {
    "name": "Livonia"
  },
  {
    "name": "Lodi"
  },
  {
    "name": "Logan"
  },
  {
    "name": "Lombard"
  },
  {
    "name": "Lompoc"
  },
  {
    "name": "Long Beach"
  },
  {
    "name": "Longmont"
  },
  {
    "name": "Longview"
  },
  {
    "name": "Lorain"
  },
  {
    "name": "Los Angeles"
  },
  {
    "name": "Louisville\/Jefferson County"
  },
  {
    "name": "Loveland"
  },
  {
    "name": "Lowell"
  },
  {
    "name": "Lubbock"
  },
  {
    "name": "Lynchburg"
  },
  {
    "name": "Lynn"
  },
  {
    "name": "Lynwood"
  },
  {
    "name": "Macon"
  },
  {
    "name": "Madera"
  },
  {
    "name": "Madison"
  },
  {
    "name": "Malden"
  },
  {
    "name": "Manassas"
  },
  {
    "name": "Manchester"
  },
  {
    "name": "Manhattan"
  },
  {
    "name": "Mankato"
  },
  {
    "name": "Mansfield"
  },
  {
    "name": "Manteca"
  },
  {
    "name": "Maple Grove"
  },
  {
    "name": "Maplewood"
  },
  {
    "name": "Marana"
  },
  {
    "name": "Margate"
  },
  {
    "name": "Maricopa"
  },
  {
    "name": "Marietta"
  },
  {
    "name": "Marlborough"
  },
  {
    "name": "Martinez"
  },
  {
    "name": "Marysville"
  },
  {
    "name": "McAllen"
  },
  {
    "name": "McKinney"
  },
  {
    "name": "Medford"
  },
  {
    "name": "Melbourne"
  },
  {
    "name": "Memphis"
  },
  {
    "name": "Menifee"
  },
  {
    "name": "Mentor"
  },
  {
    "name": "Merced"
  },
  {
    "name": "Meriden"
  },
  {
    "name": "Meridian"
  },
  {
    "name": "Mesa"
  },
  {
    "name": "Mesquite"
  },
  {
    "name": "Methuen"
  },
  {
    "name": "Miami"
  },
  {
    "name": "Miami Beach"
  },
  {
    "name": "Miami Gardens"
  },
  {
    "name": "Middletown"
  },
  {
    "name": "Midland"
  },
  {
    "name": "Midwest City"
  },
  {
    "name": "Milford"
  },
  {
    "name": "Milpitas"
  },
  {
    "name": "Milwaukee"
  },
  {
    "name": "Minneapolis"
  },
  {
    "name": "Minnetonka"
  },
  {
    "name": "Minot"
  },
  {
    "name": "Miramar"
  },
  {
    "name": "Mishawaka"
  },
  {
    "name": "Mission"
  },
  {
    "name": "Mission Viejo"
  },
  {
    "name": "Missoula"
  },
  {
    "name": "Missouri City"
  },
  {
    "name": "Mobile"
  },
  {
    "name": "Modesto"
  },
  {
    "name": "Moline"
  },
  {
    "name": "Monroe"
  },
  {
    "name": "Monrovia"
  },
  {
    "name": "Montclair"
  },
  {
    "name": "Montebello"
  },
  {
    "name": "Monterey Park"
  },
  {
    "name": "Montgomery"
  },
  {
    "name": "Moore"
  },
  {
    "name": "Moorhead"
  },
  {
    "name": "Moreno Valley"
  },
  {
    "name": "Morgan Hill"
  },
  {
    "name": "Mount Pleasant"
  },
  {
    "name": "Mount Prospect"
  },
  {
    "name": "Mount Vernon"
  },
  {
    "name": "Mountain View"
  },
  {
    "name": "Muncie"
  },
  {
    "name": "Murfreesboro"
  },
  {
    "name": "Murray"
  },
  {
    "name": "Murrieta"
  },
  {
    "name": "Muskegon"
  },
  {
    "name": "Muskogee"
  },
  {
    "name": "Nampa"
  },
  {
    "name": "Napa"
  },
  {
    "name": "Naperville"
  },
  {
    "name": "Nashua"
  },
  {
    "name": "Nashville-Davidson"
  },
  {
    "name": "National City"
  },
  {
    "name": "New Bedford"
  },
  {
    "name": "New Berlin"
  },
  {
    "name": "New Braunfels"
  },
  {
    "name": "New Britain"
  },
  {
    "name": "New Brunswick"
  },
  {
    "name": "New Haven"
  },
  {
    "name": "New Orleans"
  },
  {
    "name": "New Rochelle"
  },
  {
    "name": "New York"
  },
  {
    "name": "Newark"
  },
  {
    "name": "Newport Beach"
  },
  {
    "name": "Newport News"
  },
  {
    "name": "Newton"
  },
  {
    "name": "Niagara Falls"
  },
  {
    "name": "Noblesville"
  },
  {
    "name": "Norfolk"
  },
  {
    "name": "Normal"
  },
  {
    "name": "Norman"
  },
  {
    "name": "North Charleston"
  },
  {
    "name": "North Las Vegas"
  },
  {
    "name": "North Lauderdale"
  },
  {
    "name": "North Little Rock"
  },
  {
    "name": "North Miami"
  },
  {
    "name": "North Miami Beach"
  },
  {
    "name": "North Port"
  },
  {
    "name": "North Richland Hills"
  },
  {
    "name": "Northglenn"
  },
  {
    "name": "Norwalk"
  },
  {
    "name": "Norwich"
  },
  {
    "name": "Novato"
  },
  {
    "name": "Novi"
  },
  {
    "name": "O'Fallon"
  },
  {
    "name": "Oak Lawn"
  },
  {
    "name": "Oak Park"
  },
  {
    "name": "Oakland"
  },
  {
    "name": "Oakland Park"
  },
  {
    "name": "Oakley"
  },
  {
    "name": "Ocala"
  },
  {
    "name": "Oceanside"
  },
  {
    "name": "Ocoee"
  },
  {
    "name": "Odessa"
  },
  {
    "name": "Ogden"
  },
  {
    "name": "Oklahoma City"
  },
  {
    "name": "Olathe"
  },
  {
    "name": "Olympia"
  },
  {
    "name": "Omaha"
  },
  {
    "name": "Ontario"
  },
  {
    "name": "Orange"
  },
  {
    "name": "Orem"
  },
  {
    "name": "Orland Park"
  },
  {
    "name": "Orlando"
  },
  {
    "name": "Ormond Beach"
  },
  {
    "name": "Oro Valley"
  },
  {
    "name": "Oshkosh"
  },
  {
    "name": "Overland Park"
  },
  {
    "name": "Owensboro"
  },
  {
    "name": "Oxnard"
  },
  {
    "name": "Pacifica"
  },
  {
    "name": "Palatine"
  },
  {
    "name": "Palm Bay"
  },
  {
    "name": "Palm Beach Gardens"
  },
  {
    "name": "Palm Coast"
  },
  {
    "name": "Palm Desert"
  },
  {
    "name": "Palm Springs"
  },
  {
    "name": "Palmdale"
  },
  {
    "name": "Palo Alto"
  },
  {
    "name": "Panama City"
  },
  {
    "name": "Paramount"
  },
  {
    "name": "Park Ridge"
  },
  {
    "name": "Parker"
  },
  {
    "name": "Parma"
  },
  {
    "name": "Pasadena"
  },
  {
    "name": "Pasco"
  },
  {
    "name": "Passaic"
  },
  {
    "name": "Paterson"
  },
  {
    "name": "Pawtucket"
  },
  {
    "name": "Peabody"
  },
  {
    "name": "Peachtree Corners"
  },
  {
    "name": "Pearland"
  },
  {
    "name": "Pembroke Pines"
  },
  {
    "name": "Pensacola"
  },
  {
    "name": "Peoria"
  },
  {
    "name": "Perris"
  },
  {
    "name": "Perth Amboy"
  },
  {
    "name": "Petaluma"
  },
  {
    "name": "Pflugerville"
  },
  {
    "name": "Pharr"
  },
  {
    "name": "Phenix City"
  },
  {
    "name": "Philadelphia"
  },
  {
    "name": "Phoenix"
  },
  {
    "name": "Pico Rivera"
  },
  {
    "name": "Pine Bluff"
  },
  {
    "name": "Pinellas Park"
  },
  {
    "name": "Pittsburg"
  },
  {
    "name": "Pittsburgh"
  },
  {
    "name": "Pittsfield"
  },
  {
    "name": "Placentia"
  },
  {
    "name": "Plainfield"
  },
  {
    "name": "Plano"
  },
  {
    "name": "Plantation"
  },
  {
    "name": "Pleasanton"
  },
  {
    "name": "Plymouth"
  },
  {
    "name": "Pocatello"
  },
  {
    "name": "Pomona"
  },
  {
    "name": "Pompano Beach"
  },
  {
    "name": "Pontiac"
  },
  {
    "name": "Port Arthur"
  },
  {
    "name": "Port Orange"
  },
  {
    "name": "Port St. Lucie"
  },
  {
    "name": "Portage"
  },
  {
    "name": "Porterville"
  },
  {
    "name": "Portland"
  },
  {
    "name": "Portsmouth"
  },
  {
    "name": "Poway"
  },
  {
    "name": "Prescott"
  },
  {
    "name": "Prescott Valley"
  },
  {
    "name": "Providence"
  },
  {
    "name": "Provo"
  },
  {
    "name": "Pueblo"
  },
  {
    "name": "Puyallup"
  },
  {
    "name": "Quincy"
  },
  {
    "name": "Racine"
  },
  {
    "name": "Raleigh"
  },
  {
    "name": "Rancho Cordova"
  },
  {
    "name": "Rancho Cucamonga"
  },
  {
    "name": "Rancho Palos Verdes"
  },
  {
    "name": "Rancho Santa Margarita"
  },
  {
    "name": "Rapid City"
  },
  {
    "name": "Reading"
  },
  {
    "name": "Redding"
  },
  {
    "name": "Redlands"
  },
  {
    "name": "Redmond"
  },
  {
    "name": "Redondo Beach"
  },
  {
    "name": "Redwood City"
  },
  {
    "name": "Reno"
  },
  {
    "name": "Renton"
  },
  {
    "name": "Revere"
  },
  {
    "name": "Rialto"
  },
  {
    "name": "Richardson"
  },
  {
    "name": "Richland"
  },
  {
    "name": "Richmond"
  },
  {
    "name": "Rio Rancho"
  },
  {
    "name": "Riverside"
  },
  {
    "name": "Riverton"
  },
  {
    "name": "Roanoke"
  },
  {
    "name": "Rochester"
  },
  {
    "name": "Rochester Hills"
  },
  {
    "name": "Rock Hill"
  },
  {
    "name": "Rock Island"
  },
  {
    "name": "Rockford"
  },
  {
    "name": "Rocklin"
  },
  {
    "name": "Rockville"
  },
  {
    "name": "Rockwall"
  },
  {
    "name": "Rocky Mount"
  },
  {
    "name": "Rogers"
  },
  {
    "name": "Rohnert Park"
  },
  {
    "name": "Romeoville"
  },
  {
    "name": "Rosemead"
  },
  {
    "name": "Roseville"
  },
  {
    "name": "Roswell"
  },
  {
    "name": "Round Rock"
  },
  {
    "name": "Rowlett"
  },
  {
    "name": "Roy"
  },
  {
    "name": "Royal Oak"
  },
  {
    "name": "Sacramento"
  },
  {
    "name": "Saginaw"
  },
  {
    "name": "Salem"
  },
  {
    "name": "Salina"
  },
  {
    "name": "Salinas"
  },
  {
    "name": "Salt Lake City"
  },
  {
    "name": "Sammamish"
  },
  {
    "name": "San Angelo"
  },
  {
    "name": "San Antonio"
  },
  {
    "name": "San Bernardino"
  },
  {
    "name": "San Bruno"
  },
  {
    "name": "San Buenaventura (Ventura)"
  },
  {
    "name": "San Clemente"
  },
  {
    "name": "San Diego"
  },
  {
    "name": "San Francisco"
  },
  {
    "name": "San Gabriel"
  },
  {
    "name": "San Jacinto"
  },
  {
    "name": "San Jose"
  },
  {
    "name": "San Leandro"
  },
  {
    "name": "San Luis Obispo"
  },
  {
    "name": "San Marcos"
  },
  {
    "name": "San Mateo"
  },
  {
    "name": "San Rafael"
  },
  {
    "name": "San Ramon"
  },
  {
    "name": "Sandy"
  },
  {
    "name": "Sandy Springs"
  },
  {
    "name": "Sanford"
  },
  {
    "name": "Santa Ana"
  },
  {
    "name": "Santa Barbara"
  },
  {
    "name": "Santa Clara"
  },
  {
    "name": "Santa Clarita"
  },
  {
    "name": "Santa Cruz"
  },
  {
    "name": "Santa Fe"
  },
  {
    "name": "Santa Maria"
  },
  {
    "name": "Santa Monica"
  },
  {
    "name": "Santa Rosa"
  },
  {
    "name": "Santee"
  },
  {
    "name": "Sarasota"
  },
  {
    "name": "Savannah"
  },
  {
    "name": "Sayreville"
  },
  {
    "name": "Schaumburg"
  },
  {
    "name": "Schenectady"
  },
  {
    "name": "Scottsdale"
  },
  {
    "name": "Scranton"
  },
  {
    "name": "Seattle"
  },
  {
    "name": "Shakopee"
  },
  {
    "name": "Shawnee"
  },
  {
    "name": "Sheboygan"
  },
  {
    "name": "Shelton"
  },
  {
    "name": "Sherman"
  },
  {
    "name": "Shoreline"
  },
  {
    "name": "Shreveport"
  },
  {
    "name": "Sierra Vista"
  },
  {
    "name": "Simi Valley"
  },
  {
    "name": "Sioux City"
  },
  {
    "name": "Sioux Falls"
  },
  {
    "name": "Skokie"
  },
  {
    "name": "Smyrna"
  },
  {
    "name": "Somerville"
  },
  {
    "name": "South Bend"
  },
  {
    "name": "South Gate"
  },
  {
    "name": "South Jordan"
  },
  {
    "name": "South San Francisco"
  },
  {
    "name": "Southaven"
  },
  {
    "name": "Southfield"
  },
  {
    "name": "Spanish Fork"
  },
  {
    "name": "Sparks"
  },
  {
    "name": "Spartanburg"
  },
  {
    "name": "Spokane"
  },
  {
    "name": "Spokane Valley"
  },
  {
    "name": "Springdale"
  },
  {
    "name": "Springfield"
  },
  {
    "name": "St. Charles"
  },
  {
    "name": "St. Clair Shores"
  },
  {
    "name": "St. Cloud"
  },
  {
    "name": "St. George"
  },
  {
    "name": "St. Joseph"
  },
  {
    "name": "St. Louis"
  },
  {
    "name": "St. Louis Park"
  },
  {
    "name": "St. Paul"
  },
  {
    "name": "St. Peters"
  },
  {
    "name": "St. Petersburg"
  },
  {
    "name": "Stamford"
  },
  {
    "name": "Stanton"
  },
  {
    "name": "State College"
  },
  {
    "name": "Sterling Heights"
  },
  {
    "name": "Stillwater"
  },
  {
    "name": "Stockton"
  },
  {
    "name": "Streamwood"
  },
  {
    "name": "Strongsville"
  },
  {
    "name": "Suffolk"
  },
  {
    "name": "Sugar Land"
  },
  {
    "name": "Summerville"
  },
  {
    "name": "Sumter"
  },
  {
    "name": "Sunnyvale"
  },
  {
    "name": "Sunrise"
  },
  {
    "name": "Surprise"
  },
  {
    "name": "Syracuse"
  },
  {
    "name": "Tacoma"
  },
  {
    "name": "Tallahassee"
  },
  {
    "name": "Tamarac"
  },
  {
    "name": "Tampa"
  },
  {
    "name": "Taunton"
  },
  {
    "name": "Taylor"
  },
  {
    "name": "Taylorsville"
  },
  {
    "name": "Temecula"
  },
  {
    "name": "Tempe"
  },
  {
    "name": "Temple"
  },
  {
    "name": "Terre Haute"
  },
  {
    "name": "Texarkana"
  },
  {
    "name": "Texas City"
  },
  {
    "name": "The Colony"
  },
  {
    "name": "Thornton"
  },
  {
    "name": "Thousand Oaks"
  },
  {
    "name": "Tigard"
  },
  {
    "name": "Tinley Park"
  },
  {
    "name": "Titusville"
  },
  {
    "name": "Toledo"
  },
  {
    "name": "Topeka"
  },
  {
    "name": "Torrance"
  },
  {
    "name": "Tracy"
  },
  {
    "name": "Trenton"
  },
  {
    "name": "Troy"
  },
  {
    "name": "Tucson"
  },
  {
    "name": "Tulare"
  },
  {
    "name": "Tulsa"
  },
  {
    "name": "Turlock"
  },
  {
    "name": "Tuscaloosa"
  },
  {
    "name": "Tustin"
  },
  {
    "name": "Twin Falls"
  },
  {
    "name": "Tyler"
  },
  {
    "name": "Union City"
  },
  {
    "name": "Upland"
  },
  {
    "name": "Urbana"
  },
  {
    "name": "Urbandale"
  },
  {
    "name": "Utica"
  },
  {
    "name": "Vacaville"
  },
  {
    "name": "Valdosta"
  },
  {
    "name": "Vallejo"
  },
  {
    "name": "Valley Stream"
  },
  {
    "name": "Vancouver"
  },
  {
    "name": "Victoria"
  },
  {
    "name": "Victorville"
  },
  {
    "name": "Vineland"
  },
  {
    "name": "Virginia Beach"
  },
  {
    "name": "Visalia"
  },
  {
    "name": "Vista"
  },
  {
    "name": "Waco"
  },
  {
    "name": "Walnut Creek"
  },
  {
    "name": "Waltham"
  },
  {
    "name": "Warner Robins"
  },
  {
    "name": "Warren"
  },
  {
    "name": "Warwick"
  },
  {
    "name": "Washington"
  },
  {
    "name": "Waterbury"
  },
  {
    "name": "Waterloo"
  },
  {
    "name": "Watsonville"
  },
  {
    "name": "Waukegan"
  },
  {
    "name": "Waukesha"
  },
  {
    "name": "Wausau"
  },
  {
    "name": "Wauwatosa"
  },
  {
    "name": "Wellington"
  },
  {
    "name": "Weslaco"
  },
  {
    "name": "West Allis"
  },
  {
    "name": "West Covina"
  },
  {
    "name": "West Des Moines"
  },
  {
    "name": "West Haven"
  },
  {
    "name": "West Jordan"
  },
  {
    "name": "West New York"
  },
  {
    "name": "West Palm Beach"
  },
  {
    "name": "West Sacramento"
  },
  {
    "name": "West Valley City"
  },
  {
    "name": "Westerville"
  },
  {
    "name": "Westfield"
  },
  {
    "name": "Westland"
  },
  {
    "name": "Westminster"
  },
  {
    "name": "Weston"
  },
  {
    "name": "Weymouth Town"
  },
  {
    "name": "Wheaton"
  },
  {
    "name": "Wheeling"
  },
  {
    "name": "White Plains"
  },
  {
    "name": "Whittier"
  },
  {
    "name": "Wichita"
  },
  {
    "name": "Wichita Falls"
  },
  {
    "name": "Wilkes-Barre"
  },
  {
    "name": "Wilmington"
  },
  {
    "name": "Wilson"
  },
  {
    "name": "Winston-Salem"
  },
  {
    "name": "Winter Garden"
  },
  {
    "name": "Woburn"
  },
  {
    "name": "Woodbury"
  },
  {
    "name": "Woodland"
  },
  {
    "name": "Woonsocket"
  },
  {
    "name": "Worcester"
  },
  {
    "name": "Wylie"
  },
  {
    "name": "Wyoming"
  },
  {
    "name": "Yakima"
  },
  {
    "name": "Yonkers"
  },
  {
    "name": "Yorba Linda"
  },
  {
    "name": "York"
  },
  {
    "name": "Youngstown"
  },
  {
    "name": "Yuba City"
  },
  {
    "name": "Yucaipa"
  },
  {
    "name": "Yuma"
  }
];

export default cities
