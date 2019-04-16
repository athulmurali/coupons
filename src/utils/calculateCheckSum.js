
const getCheckSum=(barcode)=>{

	barcode = String(barcode)

	const arr = barcode.substring(0,barcode.length).split("").reverse();

	let oddTotal = 0, evenTotal = 0;


	for (let i=0; i<arr.length; i++) {

		if (i % 2 == 0) { oddTotal += Number(arr[i]) * 3; }

		else { evenTotal += Number(arr[i]); }

	}

	const checkSum = (10 - ((evenTotal + oddTotal) % 10)) % 10;

	const value=String(barcode)+String(checkSum);

	return value;
}

export default getCheckSum