import SiteInformation from '../types/CmsSingleTypes/siteInformation'
import fs from 'fs';
import siteInfoPopulate from './siteInfoPopu.json'
import shareImages from './shareImages.json'
import houses from './houses.json'
import housesThumbnail from './housesThumbnail.json'
import ourHomesPage from './ourHomesPage.json'
import aboutUSPage from './aboutUSPage.json'
import contactPage from './contactPage.json'
import standardFeaturesPage from './standardFeaturesPage.json'
import testimonialsPage from './testimonials.json'
import testimonialsOrder from './testimonialsOrder.json'
import homePagePopulate from './homePagePopulate.json'
import house1 from './house1.json'
import house2 from './house2.json'
import house3 from './house3.json'
import house4 from './house4.json'
import house5 from './house5.json'
import house6 from './house6.json'

const getData = async (endpoint: string) => {
	let data : any = {};

	if(endpoint === 'home-page?populate=*'){
		 data = homePagePopulate.data
	}

	if(endpoint === 'site-information?populate=*'){
		 data = siteInfoPopulate.data
	}
	if(endpoint === 'site-information?populate=globalSeo.shareImage'){
		data = shareImages.data
	}

	if(endpoint === 'our-homes-page'){
		 data = ourHomesPage.data
	}
	if(endpoint === 'about-us-page'){
		 data = aboutUSPage.data
	}
	if(endpoint === 'houses'){
		 data = houses.data
	}
	if(endpoint === 'houses?populate=thumbnail'){
		 data = housesThumbnail.data
	}
	
	// if(endpoint.startsWith('houses/')){
	// 	const rx = /^houses\/(.*)?populate=*$/g;
  	// 	const arr = rx.exec(endpoint);
	// 	if(arr != null) {
	// 		data = arr[1];
	// 	}
	// }
	if(endpoint === 'houses/1?populate=*'){
		data = house1.data
	}
	if(endpoint === 'houses/2?populate=*'){
		data = house2.data
	}
	if(endpoint === 'houses/3?populate=*'){
		data = house3.data
	}
	if(endpoint === 'houses/4?populate=*'){
		data = house4.data
	}
	if(endpoint === 'houses/5?populate=*'){
		data = house5.data
	}
	if(endpoint === 'houses/6?populate=*'){
		data = house6.data
	}

	if(endpoint === 'contact-page'){
		 data = contactPage.data
	}
	if(endpoint === 'standard-features-page'){
		 data = standardFeaturesPage.data
	}

	if(endpoint === 'testimonials-page'){
		 data = testimonialsPage.data
	}
	if(endpoint === 'testimonials?sort=order'){
		 data = testimonialsOrder.data
	}
	if(data === undefined){
		console.error(endpoint + ": data is undefined")
	}
	if (Array.isArray(data)) {
		data = data.map((d) => ({ ...d.attributes, id: d.id }))
	} else {
		data = { ...data.attributes, id: data.id }
	}

	return data
}

export const getSiteInfo = async (): Promise<any> => {
	const [siteInfo, siteInfoWithShareImage] = await Promise.all([
		getData('site-information?populate=*'),
		getData('site-information?populate=globalSeo.shareImage'),
	])

	return {
		...siteInfo,
		globalSeo: siteInfoWithShareImage.globalSeo,
	}
}

export default getData
