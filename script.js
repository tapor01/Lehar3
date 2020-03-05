const websites = document.querySelectorAll(".clicks");
const function1 = value1 => {
  switch (value1) {
    case "1":
      window.open(
        "https://www.flipkart.com/?gclid=CjwKCAiA44LzBRB-EiwA-jJipD-WtrApPVVoQi1ZDxqlLmp87HOhfIe-xJszHf0Dg1hzix20gtbnBxoCVhUQAvD_BwE&ef_id=CjwKCAiA44LzBRB-EiwA-jJipD-WtrApPVVoQi1ZDxqlLmp87HOhfIe-xJszHf0Dg1hzix20gtbnBxoCVhUQAvD_BwE:G:s&s_kwcid=AL!739!3!265109269849!e!!g!!flipkart&semcmpid=sem_8024046704_brand_eta_goog"
      );
      break;
    case "2":
      window.open("https://www.myntra.com/?gclid=CjwKCAiA44LzBRB-EiwA-jJipOd2LSYI2I1vBcYdI7SmeK5IIp2v51ukJJMa4LEFdg10E4YV4PtGVhoC4RIQAvD_BwE&utm_source=google&utm_medium=cpc&utm_campaign=&utm_term=myntra&utm_content=&matchtype=e")
      break;
    case "3":
      window.open("https://www.ebay.com/b/Home-Decor/10033/bn_1849733?url=https%3A%2F%2Fwww.ebay.com%2Fb%2FHome-Decor%2F10033%2Fbn_1849733&gclid=CJiJt57Xg-gCFZagjgodjccEsA&gclsrc=ds&_branch_match_id=698074628515250763&utm_medium=marketing")
      break;
    case "4" :
      window.open("https://www.amazon.in/?ext_vrnc=hi&tag=abkexpt1-21&ascsubtag=_k_CjwKCAiA44LzBRB-EiwA-jJipAe3DFp8OZeYvj0fm0STVPbPtiUEvHRNCtTMnHV9HF0SEwp0ItRbjhoC0uUQAvD_BwE_k_&ext_vrnc=hi&gclid=CjwKCAiA44LzBRB-EiwA-jJipAe3DFp8OZeYvj0fm0STVPbPtiUEvHRNCtTMnHV9HF0SEwp0ItRbjhoC0uUQAvD_BwE")
      break;
    case "5":
      window.open("https://www.ubereats.com/en-IN/")
      break;
    case "6":
      window.open("https://www.swiggy.com/")
      break;
    case "7":
      window.open("https://www.zomato.com/order?utm_source=google&utm_medium=cpc&utm_term=%2Bzomato&utm_campaign=Gsearch_P-MWeb_O-NA_C-Brand_A-NewUser_SC-Generic_L-Rest_All&gclid=CjwKCAiA44LzBRB-EiwA-jJipMNOJWs7XrojT4ZdBeFBJvuH5i7uzmGpbGg8nm_oMgB7cLdM-rahkRoC0NcQAvD_BwE")
      break;
    case "8":
      window.open("https://pizzaonline.dominos.co.in/?src=google_sem_brand&utm_source=google&utm_medium=cpc&utm_campaign=Brand%20-%20Pan%20India%20-%20Exact%20-%20Others%20-%20Desktop&utm_term=[domino]&gclid=CjwKCAiA44LzBRB-EiwA-jJipGmDOVOGQBPpjneRThQz6vBqEKkEw48QbDEKlRmZZHuqBZ9XLHffLRoCR8AQAvD_BwE")
      break;
    case "9":
      window.open("https://www.netflix.com/in/")
      break;
    case "10":
      window.open("https://www.primevideo.com/?ref_=dvm_pds_amz_in_as_s_g_brand1&ext_vrnc=hi|c_423192672131_m_lgAX6a65-dc_s_")
      break;
    case "11":
      window.open("https://www.hotstar.com/in")
      break;
    case "12":
      window.open("https://www.voot.com/")
      break;
    case "13":
      window.open("https://www.oyorooms.com/?utm_source=google&utm_medium=cpc&utm_campaign=India_SEM_Brand_generic&gclid=CjwKCAiA44LzBRB-EiwA-jJipAUVce2LSCINyO7gttbtsdTmFTyNxf9kqBNicgS_YJbUPH8v8v0ULRoCA-0QAvD_BwE")
      break;
   case "14":
      window.open("https://www.oyorooms.com/?utm_source=google&utm_medium=cpc&utm_campaign=India_SEM_Brand_generic&gclid=CjwKCAiA44LzBRB-EiwA-jJipAUVce2LSCINyO7gttbtsdTmFTyNxf9kqBNicgS_YJbUPH8v8v0ULRoCA-0QAvD_BwE")
      break;
   case "15":
      window.open("https://www.goibibo.com/flights/?utm_source=SVGMedia&utm_medium=DisplayAffiliate&utm_campaign=flights_71353_[SUB_ID]")
      break;
  case "16":
      window.open("https://www.makemytrip.com/")
      break;    
  }
};
websites.forEach(website => {
  website.addEventListener("click", event => {
    function1(event.target.value);
  });
});
