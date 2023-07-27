let a=['silicon valley',"concord",'Ajmira infinity', ,"salaphornia",null]
for (let key in a) {
   console.log(key+" : "+ a[key]);        
    }
//here we will get the index of array, it is stored in key variable but it is not assigning the value
//if i want value , we pass that index in to the 'a' veriable (a[key]) we will get the value present inside the index
//if we pass the empty space in array it will not consider the space (it is skipped the space and print the rest of the value )