const http = require('https'); // or 'https' for https:// URLs
const fs = require('fs');

const recs = [
	{
		"image": "https://media.licdn.com/dms/image/C4D03AQHGz76IAHiELw/profile-displayphoto-shrink_100_100/0/1668035252317?e=1710979200&v=beta&t=ESoX4dyIrDo_j5tklWGng33pn_BhMngBf1wlwoFahjA",
		"name": "kevins.jpg"
	},
	{
		"image": "https://media.licdn.com/dms/image/C5603AQErB-mLljv3Xw/profile-displayphoto-shrink_100_100/0/1655257559397?e=1710979200&v=beta&t=POVulHkyrbhOtM_vxI-mzVmh9NvLQxKwa-m3h8sEVZ8",
		"name": "sterlingsourk.jpg"
	},
	{
		"image": "https://media.licdn.com/dms/image/C5603AQGySVyMDcmKuA/profile-displayphoto-shrink_100_100/0/1565326141718?e=1710979200&v=beta&t=v84Js7NfBHkTgOCmCC9ft_j3alo2s81490KmHds0ef8",
		"name": "kellymooney.jpg"
	},
	{
		"image": "https://media.licdn.com/dms/image/D5603AQGx_cJW6biMQw/profile-displayphoto-shrink_100_100/0/1685799027713?e=1710979200&v=beta&t=Mo-e53bfMMysT67vxPO4NyBm-UKIbi2Cm9fFIR28O8I",
		"name": "carollee.jpg"
	},
	// {
	// 	"name": "joelazure.jpg"
	// },
	{
		"image": "https://media.licdn.com/dms/image/C5603AQEh0KUk9tuXpQ/profile-displayphoto-shrink_100_100/0/1528414323707?e=1710979200&v=beta&t=opAYyq1yCBcdVAINQwMYCXmCZ7EnNtE8UZfWYgYPDDg",
		"name": "charlesdyer.jpg"
	},
	{
		"image": "https://media.licdn.com/dms/image/C5603AQGClLAsbAUIpQ/profile-displayphoto-shrink_100_100/0/1517773085873?e=1710979200&v=beta&t=XvQGCqMKMyaAkM68-5HBIIgo61IURRm6MTCtuhDmXUM",
		"name": "debracrawford.jpg"
	},
	{
		"image": "https://media.licdn.com/dms/image/C5103AQEMcssDPsmGKg/profile-displayphoto-shrink_100_100/0/1516249525139?e=1710979200&v=beta&t=EKpJu6p1o0B7DiER760NwG8uMAX_Oc5U6TIu_FnsK0s",
		"name": "ericking.jpg"
	},
	{
		"image": "https://media.licdn.com/dms/image/C4E03AQHdVYfl1mBS2w/profile-displayphoto-shrink_100_100/0/1658234273650?e=1710979200&v=beta&t=zsc8m4rRXsg3g1M_XAYp95oeMYHeeKpdF5jtF-jyn0Y",
		"name": "elainescrenci.jpg"
	},
	{
		"image": "https://media.licdn.com/dms/image/D5603AQFNkMPEvhNXcQ/profile-displayphoto-shrink_100_100/0/1664480681792?e=1710979200&v=beta&t=5VnUjAEnY_SmKYSnez1OxFkb4RVT6s4uyP1_BGllT6E",
		"name": "dougparsonage.jpg"
	},
	{
		"image": "https://media.licdn.com/dms/image/D4E03AQH1pZNSygg2kA/profile-displayphoto-shrink_100_100/0/1702928319229?e=1710979200&v=beta&t=bZDMN3X-wN9dOIpGeBzxTO7bOQZB_IgB3Tj3H98k7hc",
		"name": "renaedabneycdmppcm.jpg"
	},
	{
		"image": "https://media.licdn.com/dms/image/C5603AQF3WiyacvkRQQ/profile-displayphoto-shrink_100_100/0/1540659606943?e=1710979200&v=beta&t=comuXouISa2h-dMSfTyvGwi8MVYjuhw0OrSS5RnG8-g",
		"name": "amberremley.jpg"
	},
	{
		"image": "https://media.licdn.com/dms/image/D5603AQHgMg3fdasSaw/profile-displayphoto-shrink_100_100/0/1700092813658?e=1710979200&v=beta&t=69QG8WJ9c1m8qpZGGLsU9VXqSUGwCjbAu2F2nvcBnH4",
		"name": "rosilandmooremba.jpg"
	},
	{
		"image": "https://media.licdn.com/dms/image/C5603AQG0FN1dpidKRA/profile-displayphoto-shrink_100_100/0/1516359112633?e=1710979200&v=beta&t=TOqryizPcdThTnew19g22uxHdHhlzI7ITyGWeqa4KGQ",
		"name": "dpeartree.jpg"
	},
	{
		"image": "https://media.licdn.com/dms/image/C4E03AQG4t1wIQ6nXZg/profile-displayphoto-shrink_100_100/0/1583502971183?e=1710979200&v=beta&t=eMfY1kMVM0dXj1Xk8hZK1-TVgZS7lX95PQ2A9MjwMcY",
		"name": "toddgiardina.jpg"
	},
	// {
	// 	"name": "gracey.jpg"
	// },
	// {
	// 	"name": "carolinenewsom.jpg"
	// },
	{
		"image": "https://media.licdn.com/dms/image/C4E03AQE6okzaZQaWxA/profile-displayphoto-shrink_100_100/0/1516320319616?e=1710979200&v=beta&t=Qk8CAKF6qVrL6dKQuI8TirjY7JQOhrqjCv3OHAu2YhY",
		"name": "jamiecrumpsheher.jpg"
	},
	{
		"image": "https://media.licdn.com/dms/image/C4E03AQE44GgJgbh_WQ/profile-displayphoto-shrink_100_100/0/1632314284499?e=1710979200&v=beta&t=e03o2EL_BzEkb9mkfOckOasFQS2eXg2SZsekwdsFmbc",
		"name": "bethbrown.jpg"
	}
];

recs.forEach(i=> {
    const file = fs.createWriteStream(i.name);
    http.get(i.image, function(response) {
        response.pipe(file);

        // after download completed close filestream
        file.on("finish", () => {
            file.close();
            console.log(`${i.name}`);
        });
    });
})