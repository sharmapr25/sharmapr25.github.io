const codes = {
   a: '', e: '', i: '', o: '', u: '', b: 1, f: 1, p: 1, v: 1, c: 2, g: 2, j: 2, k: 2, q: 2, s: 2, x: 2, z: 2, d: 3, t: 3, l: 4, m: 5, n: 5, r: 6
};

const soundex = (word) =>{
  const characters = word.toLowerCase().split('');
  const firstLetter = characters.shift();
  let result = firstLetter;
  characters.forEach((character, index, list) => {
    const code = codes[character];
    if (index == 0 && code !== codes[firstLetter]) {
      result += code;
    }
    else if(list[index-1].includes['h','w'] && list[index-2]){
      console.log(`codes index-2 is ${list[index-2]} and code is: ${codes[list[index-2]]}`)
      if(codes[list[index-2]] !== code){
        result += code;
      }
    }
    else if(code !== list[index-1]){
      result += code;
    }

  })

  return (result+'000').slice(0,4).toUpperCase();
}


console.log(soundex('ashcraft'));