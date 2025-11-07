// Static trivia categories and questions
export const categories = [
  { id: 'ano_sa_tagalog_ang', name: 'Ano sa Tagalog ang...', color: '#e74c3c' },
  { id: 'kasaysayan', name: 'Kasaysayan', color: '#3498db' },
  { id: 'pop_culture', name: 'Pop Culture', color: '#9b59b6' },
  { id: 'tradisyon_pamahiin', name: 'Tradisyon at Pamahiin', color: '#2ecc71' },
  { id: 'heograpiya', name: 'Heograpiya', color: '#f39c12' }
];

export const questions = {
  "ano_sa_tagalog_ang": [
    { 
      id: 1, 
      question: 'Ano sa tagalog ang "Science"?', 
      answer: 'Agham' 
    },
    { id: 2, 
      question: 'Ano sa tagalog ang "Owl"?', 
      answer: 'Kwago' 
    },
    { id: 3, question: 'Ano sa tagalog ang "Jellyfish"?', answer: 'Dikya' },
    { id: 4, question: 'Ano sa tagalog ang "Environment"?', answer: 'Kapaligiran' },
    { id: 5, question: 'Ano sa tagalog ang "Shell"?', answer: 'Kabibe' },
    { id: 6, question: 'Ano sa tagalog ang "Duck"?', answer: 'Pato' },
    { id: 7, question: 'Ano sa tagalog ang "Jackfruit"?', answer: 'Lanka' },
    { id: 8, question: 'Ano sa tagalog ang "Bitter Gourd"?', answer: 'Ampalaya' },
    { id: 9, question: 'Ano sa tagalog ang "Radish"?', answer: 'Labanos' },
    { id: 10, question: 'Ano sa tagalog ang "String Beans"?', answer: 'Sitaw' }
  ],

  "kasaysayan": [
    { id: 1, question: 'Sino ang pambansang bayani ng Pilipinas?', answer: 'Dr. Jose Rizal' },
    { id: 2, question: 'Anong taon ipinahayag ng Pilipinas ang kalayaan mula sa Espanya?', answer: '1898' },
    { id: 3, question: 'Saan unang ipinahayag ang kalayaan ng Pilipinas?', answer: 'Kawit, Cavite' },
    { id: 4, question: 'Ano ang ibig sabihin ng “K.K.K.”?', answer: 'Kataastaasan, Kagalanggalangang Katipunan ng mga Anak ng Bayan' },
    { id: 5, question: 'Sino ang unang pangulo ng Pilipinas?', answer: 'Emilio Aguinaldo' },
    { id: 6, question: 'Ilang taon tumagal ang panahon ng kastila?', answer: '300 taon' },
    { id: 7, question: 'Sino ang kilala bilang “Utak ng Rebolusyon”?', answer: 'Apolinario Mabini' },
    { id: 8, question: 'Ano ang pinakamatandang lungsod sa Pilipinas?', answer: 'Lungsod ng Cebu' },
    { id: 9, question: 'Ano ang pamagat ng Pambansang Awit ng Pilipinas?', answer: 'Lupang Hinirang' },
    { id: 10, question: 'Kailan namatay si Jose Rizal?', answer: 'Disyembre 30, 1896' }
  ],

  "heograpiya": [
    { id: 1, question: 'Ano ang pinakamataas na bundok sa Pilipinas?', answer: 'Apo' },
    { id: 2, question: 'Ano ang lungsod na malapit dito?', answer: 'Legazpi, Albay', image: '/images/mayon.jpg'},
    { id: 3, question: 'Ano ang kabisera ng Palawan?', answer: 'Puerto Princesa' },
    { id: 4, question: 'Ano ang kabisera ng Negros Occidental?', answer: 'Bacolod' },
    { id: 5, question: 'Saan ipinanganak si Jose Rizal?', answer: 'Calamba, Laguna' },
    { id: 6, question: 'Ilang pulo ang bumubuo sa Pilipinas?', answer: '7,107 o 7,641' },
    { id: 7, question: 'Ano ang tawag na hagdang-hagdang palayan sa Ifugao na kinikilala bilang UNESCO World Heritage Site?', answer: 'Banaue Rice Terraces' },
    { id: 8, question: 'Saan ito makikita?', answer: 'Chocolate Hills, Bohol', image: '/images/choco.jpeg'},
    { id: 9, question: 'Aling pangkat ng mga isla sa pinakahilagang bahagi ng bansa ang kilala sa mga bahay na bato at malalakas na bagyo?', answer: 'Batanes' },
    { id: 10, question: 'Ano ang sikat na isla ang may pinong puting buhangin na matatagpuan sa lalawigan ng Aklan?', answer: 'Boracay' }
  ],

  "pop_culture": [
    { id: 1, question: 'Sino ang unang Pilipinong nanalo sa Miss Universe?', answer: 'Gloria Diaz (1969)' },
    { id: 2, question: 'Sino ang asawa ni Manny Pacquiao?', answer: 'Jinkee Pacquiao' },
    { id: 3, question: 'Ano ang ibig sabihin ng DPWH?', answer: 'Department of Public Works and Highways' },
    { id: 4, question: 'Anong sikat na boy band ang nabuo mula sa palabas na Pinoy Pop Superstar?', answer: 'SB19' },
    { id: 5, question: 'Ano ang pinakamatagal nang tumatakbong noontime show sa Pilipinas?', answer: 'Eat Bulaga!' },
    { id: 6, question: 'Saang bansa kasalukuyang nakakulong ang dating pangulong Rodrigo Duterte?', answer: 'Netherlands' },
    { id: 7, question: 'Ano ang pangalan ng computer virus na kumalat sa pamamagitan ng email na ginawa ng isang estudyante mula sa Maynila noong taong 2000?', answer: 'I Love You Virus' },
    { id: 8, question: 'Sino ang gumanap bilang Cardo Dalisay sa FPJ’s Ang Probinsyano?', answer: 'Coco Martin' },
    { id: 9, question: 'Anong sikat na palabas sa telebisyon noong 90s ang kilala sa kanilang Halloween special episode na nagpapakita ng mga reenactment ng kababalaghan at mga multo sa iba’t ibang bahagi ng bansa? Ang host nito ay si Noli de Castro.', answer: 'Magandang Gabi, Bayan' },
    { id: 10, question: 'Sino ang unang nanalo ng gintong medalya para sa Pilipinas sa mga Palarong Olimpiko?', answer: 'Hidilyn Diaz' }
  ],

  "tradisyon_pamahiin": [
    { id: 1, question: 'Ano ang bersyong Pilipino ng bampira na sumisipsip ng dugo gamit ang mahaba nitong dila?', answer: 'Aswang' },
    { id: 2, question: 'Ano ang sinasabi ng mga Pilipino kapag dadaan sa lugar na pinaniniwalaang tinitirhan ng mga dwende?', answer: 'Tabi tabi po' },
    { id: 3, question: 'Maliban sa daliri, anong bahagi ng katawan ang madalas gamitin ng mga Pilipino sa pagtuturo ng isang bagay?', answer: 'Bibig' },
    { id: 4, question: 'Ano ang kaugalian ng mga Pilipino bilang pagpapakita ng paggalang sa nakatatanda sa pamamagitan ng pagdampi ng kamay sa noo?', answer: 'Mano po' },
    { id: 5, question: 'Ano ang tawag sa tradisyunal na panliligaw kung saan ang lalaki ay kumakanta sa labas ng bahay ng babae?', answer: 'Harana' },
    { id: 6, question: 'Ano ang pamahiin kapag nalaglag ang kubyertos habang kumakain?', answer: 'May darating na bisita' },
    { id: 7, question: 'Ano ang tradisyunal na sayaw ng mga Pilipino na gumagamit ng mga kawayan?', answer: 'Tinikling' },
    { id: 8, question: 'Ano ang pamahiin kapag umuulan habang maliwanag ang araw?', answer: 'May kinakasal na tikbalang' },
    { id: 9, question: 'Ano ang taunang tradisyong Pilipino sa Quiapo, Maynila kung saan milyun-milyong deboto ang nakikilahok sa prusisyon bilang pagpapakita ng pananampalataya?', answer: 'Pista ng Itim na Nazareno (Black Nazarene)' },
    { id: 10, question: 'Anong pista sa Baguio City ang ipinagdiriwang upang ipakita ang ganda ng mga bulaklak?', answer: 'Panagbenga Festival' }
  ]
};

