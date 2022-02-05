//var company = new Object ();
//company.name = "Facebook";
//company.ceo = new Object ();
//company.ceo.firstname = "Mark";
//company.ceo.favColor = "Blue";

//console.log(company);
//console.log("Company CEO name is: " + company.ceo.firstname);

//console.log(company["name"]);
//company["$stock of company"] = 110;

//console.log(company);


// Better way: object literal

var facebook = {
	name: "Facebook",
	ceo: {
		firstName: "Mark",
		favColor: "Blue"
	},
	"Stock of company" : 11000
};

console.log(facebook);