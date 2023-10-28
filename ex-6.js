// Exercise #6 : Car Collection

const carCollection = ["toyota", "fiat", "honda", "bmw"];

function updateCarCollection(carBrand) {
  // Start coding here
  if (carCollection.includes(carBrand)) {
    const position = carCollection.indexOf(carBrand) + 1;
    console.log(`${carBrand} already exists in position ${position} of the car collection.`);
  } else {
    carCollection.push(carBrand);
    const newCollection = carCollection.join(', ');
    console.log(`new car collection is: ${newCollection}`);
  }
};


//ผลลัพธ์ที่ควรได้จาก Example case
//ในกรณีที่ยังไม่มียี่ห้อรถใน carCollection
console.log(updateCarCollection("audi")); //new car collection is : toyota,fiat,honda,bmw,audi.

//ในกรณีที่มียี่ห้อรถใน carCollection
console.log(updateCarCollection("toyota")); //toyota has already existed in the 1 position of car collection.
