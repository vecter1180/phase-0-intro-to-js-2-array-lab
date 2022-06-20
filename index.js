const cats = ["Milo", "Otis", "Garfield"]



function destructivelyAppendCat(Ralph) {
    cats.push("Ralph");
}

function destructivelyPrependCat(Bob) {
    cats.unshift("Bob");
}

function destructivelyRemoveLastCat(Bob){
    cats.pop(2)
}

function destructivelyRemoveFirstCat() {
    cats.shift("Milo")
}




let moreCats = [...cats, "Broom"]
let moreCats3 = [...cats]
let moreCats4 = [...cats]

function appendCat(){
    cats.slice("Broom")
    return moreCats
}

function prependCat(){
    moreCats.pop("Broom")
    moreCats.unshift("Arnold")
    return moreCats
}

function removeLastCat(){
    moreCats4.pop("Garfield")
    

  return moreCats4
  }

function removeFirstCat(){
    moreCats3.shift("Milo")
     
      return moreCats3
  }