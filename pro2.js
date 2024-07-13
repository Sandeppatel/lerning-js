
 const form = document.querySelector('form');
//  this use case emti value
//  const height =   parseInt(document.querySelector('#height').value)


 form.addEventListener('submit' , function(e){
     e.preventDefault();

     const height =   parseInt(document.querySelector('#height').value)
     const weight =   parseInt(document.querySelector('#weight').value)
    const results =  document.querySelector('#results')

    if (height === '' || height < 0 ||iaNaN(height) ) {
        results.innerHTML  = `plese give a calid height ${height}`;
    }
    
    else if (weight === '' || weight < 0 ||iaNaN(weight) ) {
        results.innerHTML  = `plese give a calid height ${weight}`;
    }
    else{
      const bmi =   (weight / ((height * height)/10000).toFixed(2))
    //    sho the result
    results.innerHTML = `<span>${bmi}</span>`
    }
    
 })