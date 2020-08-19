let divideAndSort = (angka) => {
  if(typeof angka =='number'){
    let str = angka.toString().split(0)
    let mp = str.map(x => x.split('').sort().join(''))
    let jn = mp.join('')
    console.log(parseInt(jn))
  }else {
    console.log('Inputan harus angka!')
  }
}

divideAndSort(5956560159466056)