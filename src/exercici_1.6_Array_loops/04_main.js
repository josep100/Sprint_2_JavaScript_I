const obj = { 
    nom: 'Ona', 
    edat: 25, 
    ciutat: 'Barcelona' 
}; 

for (const key in obj) {
    console.log(`${key} : ${obj[key]}`);   
}