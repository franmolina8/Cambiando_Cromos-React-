const id = "kvdsmkldmvldkvmdl"

const arrayIds = [
    "gflskdfgsdlkd",
    "kndsdsmdsfvm",
    "ksmvdlvmdlvdf",
    "kvdsmkldmvldkvmdl",
    "kvdsmkldmvldkvmdl",
    "kvdsmkldmvldkvmdl",
    "kvdsmkldmvldkvmdl"
]

const find = arrayIds.find(element => element === id)
console.log(find)
const index = arrayIds.indexOf(find)
console.log(index);
const remp = arrayIds.splice(index,1);
console.log(remp);
console.log(arrayIds);

// para poder encontrar un elemento que coincida no podemos poner el id a pelo porque un objectid(“id”) no es exactamente igual a “id”, entonces podríamos probar comparándolo creando el mismo formato que utiliza mongo, por ejemplo: ‘objetcid(“${id}”’)
// Básicamente que para comparar para encontrar exactamente el elemento que queremos borrar tiene que ser el mismo formato, por lo tanto simular el formato que nos da mongo para los ids


