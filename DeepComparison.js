function deepComparison (first, second) {
    if(first === second) return true
  
    if(first === null || second === null) return false
  
    if(typeof first !== 'object'  || typeof second !== 'object') return false
  
    let first_keys = Object.keys(first)
  
    let second_keys = Object.keys(second)
  
    if(first_keys.length !== second_keys.length) return false
  
    for(let key of first_keys) {
        if(!Object.hasOwn(second, key)) return false
        if (deepComparison(first[key], second[key]) === false) return false
    }
    return true
  }
  
  let obj1 = {
    a: 1,
    b: 2,
    c: { foo: 1, bar: 2},
    d: { baz: 1, bat: 2, arr: [2,3] }
  }
  
  let obj2 = {
    b: 2,
    a: 1,
    c: { foo: 1, bar: 2},
    d: { baz: 1, bat: 2, arr: [2,3] }
  }

  let obj3 = null
  
  
  console.log(deepComparison(obj1, obj2));
  console.log(deepComparison(obj1, obj3));