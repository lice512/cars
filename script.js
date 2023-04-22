let cars = [
    {
      id: 1,
      model: "urus",
      company: "lamborgini",
      price: 266000,
      engineForce: 6.5,
    },
    {
      id: 2,
      model: "cheron",
      company: "buggatti",
      price: 500000,
      engineForce: 7,
    },
    {
      id: 3,
      model: "malibu 2",
      company: "gm",
      price: 33000,
      engineForce: 2.4,
    },
    {
      id: 4,
      model: "gentra",
      company: "gm",
      price: 17000,
      engineForce: 1.5,
    },
    {
      id: 5,
      model: "gelen vagen",
      company: "mercedes",
      price: 300000,
      engineForce: 4,
    },
    {
      id: 6,
      model: "matiz",
      company: "daewoo",
      price: 3000,
      engineForce: 6,
    },
  ];
  let comp = prompt("какая компания?").toLowerCase();
  let a = [];
  cars.forEach((car) => {
    if (car.company.includes(comp)) {
      a.push(car);
      if (a.length > 1) {
        for (let i of a) {
          alert(`У нас есть ${i.model}`);
        }
        let modellllllll=prompt('введите нужную модель!-_-').toLowerCase()
      a.forEach((char) => {
        if(char.model.includes(modellllllll)){
        
          a = char
          let sum = +prompt('оплата:')
      
      if(a.price==sum){
        alert(`Вы приобрели ${a.model}`)
      } else if(a.price > sum){
        alert('Недостаточно средства')
      } else if(a.price < sum){
        alert(sum - a.price + ' ' + 'осталось')
      }
        } 
      })
      
      
      }
    } 
  });
  
  