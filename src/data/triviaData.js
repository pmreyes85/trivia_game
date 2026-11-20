// Static trivia categories and questions.
// A category's icon is an emoji (`icon`) or a picture (`iconImage`).
export const categories = [
  { id: '1', name: 'Star Wars', color: '#ffc53d', icon: '🌌' },
  { id: '2', name: 'Christmas Movies & Songs', color: '#30a46c', icon: '🎄' },
  { id: '3', name: 'Filipino Christmas', color: '#8e4ec6', icon: '🇵🇭' },
  { id: '4', name: 'Pinoy Pop Culture', color: '#f76b15', icon: '🎤' },
  { id: '5', name: 'Courtesy Point', color: '#12a594', iconImage: process.env.PUBLIC_URL + '/images/courtesy_point_logo.png' }
];

// Points a question is worth: its number (Q1 = 1 pt ... Q10 = 10 pts).
// Add a `points:` field to a question to override this.
export const getQuestionPoints = (question) => question.points ?? question.id;

export const formatPoints = (points) => `${points} ${points === 1 ? 'pt' : 'pts'}`;

export const questions = {
  "1": [
    { id: 1, question: 'What is the name of the small green Jedi Master who trained Luke Skywalker on Dagobah?', answer: 'Yoda', image: process.env.PUBLIC_URL + '/images/yoda.png' },
    { id: 2, question: 'Who famously says "I am your father" to Luke Skywalker?', answer: 'Darth Vader', image: process.env.PUBLIC_URL + '/images/darth_vader.jpg' },
    { id: 3, question: 'What is the name of Han Solo\'s ship?', answer: 'The Millennium Falcon', image: process.env.PUBLIC_URL + '/images/millenium_falcon.webp' },
    { id: 4, question: 'What is the name of the small orange-and-white rolling droid who helps Rey in The Force Awakens?', answer: 'BB-8', image: process.env.PUBLIC_URL + '/images/bb8.webp' },
    { id: 5, question: 'What is the name of the desert planet where Luke Skywalker grew up?', answer: 'Tatooine', image: process.env.PUBLIC_URL + '/images/tatooine.webp' },
    { id: 6, question: 'What color is Mace Windu\'s lightsaber, which is unique among the Jedi?', answer: 'Purple' },
    { id: 7, question: 'Which bounty hunter delivers Han Solo, frozen in carbonite, to Jabba the Hutt?', answer: 'Boba Fett' },
    { id: 8, question: 'Which Rebel Alliance admiral famously shouts "It\'s a trap!" at the Battle of Endor?', answer: 'Admiral Ackbar' },
    { id: 9, question: 'Who was Obi-Wan Kenobi\'s Jedi Master, killed by Darth Maul on Naboo?', answer: 'Qui-Gon Jinn' },
    { id: 10, question: 'What is the name of the volcanic planet where Anakin and Obi-Wan fight in Revenge of the Sith?', answer: 'Mustafar' }
  ],

  "2": [
    { id: 1, question: 'Which reindeer has a glowing red nose that guides Santa\'s sleigh?', answer: 'Rudolph', image: process.env.PUBLIC_URL + '/images/rudolph.webp' },
    { id: 2, question: 'In Home Alone, what is the name of the boy who is accidentally left behind by his family?', answer: 'Kevin McCallister', image: process.env.PUBLIC_URL + '/images/home_alone.jpg'},
    { id: 3, question: 'What color is the Grinch, who tries to steal Christmas from Whoville?', answer: 'Green' },
    { id: 4, question: 'Which Mariah Carey song, released in 1994, returns to the top of the charts every December?', answer: 'All I Want for Christmas Is You', image: process.env.PUBLIC_URL + '/images/mariah.png'},
    { id: 5, question: 'Ano ang titolo ng sikat na christmas song ni Ryan Cayabyab?', answer: 'Kumukutikutitap' },
    { id: 6, question: 'Sino ang kumanta ng "Himig ng Pasko"?', answer: 'APO Hiking Society' },
    { id: 7, question: 'Anong istasyon ng telebisyon ang naglabas ng christmas song na \'Star ng Pasko\'', answer: 'ABS-CBN' },
    { id: 8, question: 'In the movie Elf, what is the name of the human raised by elves, played by Will Ferrell?', answer: 'Buddy' },
    { id: 9, question: 'In The Nightmare Before Christmas, who is the Pumpkin King of Halloween Town?', answer: 'Jack Skellington' },
    { id: 10, question: 'Anong sikat na pinoy christmas song ang may original na lyrics na Cebuano?', answer: 'Ang Pasko ay Sumapit (Kasadya Ning Taknaa)' }
  ],

  "5": [
    { id: 1, question: 'Sino ang nanalong \'Best in Costume (Male)\' noong 2025?', answer: 'Mike Once'},
    { id: 2, question: 'Sinu sino sa Courtesy Point ang umuuwi sa Cavite?', answer: 'Dindo, Blue, Anna'},
    { id: 3, question: 'Sino ang unang empleyado ng Courtesy Point maliban sa founder/president?', answer: 'Omar Olorosisimo' },
    { id: 4, question: 'Sino sa Courtesy Point ang nagchampion sa Bahay Turo Pickleball Tournament?', answer: 'Alvin Ballesteros' },
    { id: 5, question: 'Dati, ang pinakamaliit sa CPTI ay si Janine. Ngayon, sino na? Ano ang height nya?', answer: 'Anna (5\'0\")'},
    { id: 6, question: 'Ano ang mga pangalan ng tatlong aso ng president?', answer: 'Franky, Lilou, at Hugo'},
    { id: 7, question: 'Sino ang paboritong NBA player ni Claro?', answer: 'Lebron James' },
    { id: 8, question: 'Taga saang probinsya ang nanalo ng \'Best in Costume 2025 (Female)\'?', answer: 'Capiz'},
    { id: 9, question: 'Sinong anime character ang ka-birthday ni Erik?', answer: 'Naruto'},
    { id: 10, question: 'Arlan', answer: 'Arlan' }
  ],

  "3": [
    { id: 1, question: 'Ano ang tawag sa hugis-bituing ilaw na isinasabit tuwing Pasko?', answer: 'Parol' },
    { id: 2, question: 'Dekorasyong pamasko na nagpapakita ng pagsilang ni Hesus sa sabsaban, kasama sina Maria, Jose, mga pastol at ang Tatlong Hari. Ano ang tawag dito?', answer: 'Belen', image: process.env.PUBLIC_URL + '/images/belen.jpg' },
    { id: 3, question: 'Kakaning kulay ube na niluluto sa kawayan at nilalagyan ng niyog, mantikilya at muscovado. Madalas itong binibili paglabas ng Simbang Gabi. Ano ang tawag dito?', answer: 'Puto bumbong', image: process.env.PUBLIC_URL + '/images/puto_bumbong.jpg' },
    { id: 4, question: 'Tuwing araw ng Pasko, namamasko ang mga inaanak sa kanilang mga magulang sa binyag. Ano ang tawag sa mga magulang sa binyag?', answer: 'Ninong at Ninang' },
    { id: 5, question: 'Anong bahagi ng Metro Manila ang pinapailawan ang mga gusali ng ganito kapag pasko?', answer: 'Rockwell', image: process.env.PUBLIC_URL + '/images/rockwell.webp' },
    { id: 6, question: 'Ano ang tawag sa salu-salo ng pamilya tuwing bisperas ng Pasko?', answer: 'Noche Buena' },
    { id: 7, question: 'Sa anong petsa nagsisimula ang simbang gabi?', answer: 'December 16' },
    { id: 8, question: 'Tinatawag ding "Misa de Gallo" ang Simbang Gabi. Ano ang ibig sabihin ng "Misa de Gallo"?', answer: 'Rooster\'s Mass' },
    { id: 9, question: 'Ano ang tawag sa pagsasadula tuwing bisperas ng Pasko kung saan naghahanap sina Jose at Maria ng matutuluyan?', answer: 'Panunuluyan' },
    { id: 10, question: 'Ang queso de bola ay kilala sa ibang bansa bilang “Edam.” Saang bansa ito nagmula?', answer: 'Netherlands' }
  ],

  "4": [
    { id: 1, question: 'Ano ang tawag sa love team nina Alden Richards at Maine Mendoza na sumikat noong 2015?', answer: 'AlDub' },
    { id: 2, question: 'Anong relihiyosong grupo ang nagmamay-ari ng arenang ito?', answer: 'Iglesia ni Cristo', image: process.env.PUBLIC_URL + '/images/philippine_arena.jpg' },
    { id: 3, question: 'Saang sikat na kolehiyo nagaaral si Rene Baterbonia nung siya ay nasawi nitong Hunyo 2026? Clue: ito din ang kolehiyo ng Asst. Managing Director ng CPTI.', answer: 'Ateneo de Manila University', image: process.env.PUBLIC_URL + '/images/baterbonia.jpeg' },
    { id: 4, question: 'Sinong mga Disney princesses ang binigyang boses ni Lea Salonga?', answer: 'Princess Jasmine at Mulan', image: process.env.PUBLIC_URL + '/images/lea_salonga.jpg' },
    { id: 5, question: 'Anong ang highest grossing Filipino film of all time? Clue: ang setting nito ay sa Canada.', answer: 'Hello, Love, Again starring Kathryn Bernardo and Alden Richards'},
    { id: 6, question: 'Ano ang unang WTA tour ang napanalunan ni Alex Eala?', answer: '2026 Washington Open' },
    { id: 7, question: 'Sinong host ang nagkamali sa pag-anunsyo noong nanalo si Pia Wurtzbach ng Miss Universe noong 2015?', answer: 'Steve Harvey', image: process.env.PUBLIC_URL + '/images/pia_wurtzbach.avif' },
    { id: 8, question: 'Alin sa mga bansa na ito ang WALANG Jollibee: Guam, UK, Kuwait, Bahrain, Thailand?', answer: 'Thailand' },
    { id: 9, question: 'Ilang gintong medalya ang napanalunan ni Carlos Yulo sa Paris 2024 Olympics? Para sa anong events?', answer: '2 (floor exercise at vault)' },
    { id: 10, question: 'Sinong Pilipinong direktor ang nanalo ng Best Director sa Cannes Film Festival noong 2009 para sa pelikulang Kinatay?', answer: 'Brillante Mendoza' }
  ]
};

