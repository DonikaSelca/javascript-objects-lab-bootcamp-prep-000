var recipes = {
  
}

function updateObjectWithKeyAndValue(object, key, value) {
  object[key] = value
  return object
}

function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, object, {[key]: value})
}

function destructivelyUpateObjectWithKeyAndValue(object, key, value) {
  Object.assign({}, object, {[key]: value})
  return object
}