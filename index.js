// Write your solution in this file!
driver= {}
updateDriverWithKeyAndValue(driver,key,value){
  return Object.assign({},driver,{[key]:value})
}
destructivelyUpdateDriverWithKeyAndValue(driver,key,value){
  return Object.assign(driver,{[key]:value})
}